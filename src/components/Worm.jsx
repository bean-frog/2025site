import React, { useEffect, useRef } from 'react'

const Worm = () => {
  const canvasRef = useRef(null)
  const worm = useRef({
    x: 200,
    y: 200,
    baseDirection: Math.random() * Math.PI * 2,
    targetDirection: Math.random() * Math.PI * 2,
    noise: 0.6,
    currentSpeed: 1,
    history: Array(30)
      .fill()
      .map(() => ({ x: 200, y: 200 })),
    sizePhase: 0,
    smoothness: 0.5,
  })

  // Track mouse position and last move time.
  const mouseState = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    lastMoveTime: Date.now(),
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return // Prevent null reference errors

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ease = (t) => t * t * (3 - 2 * t)

    const quadraticInterpolate = (p0, p1, p2, t) => {
      const oneMinusT = 1 - t
      const controlPoint =
        p1 + (p1 - (p0 + p2) / 2) * (1 - worm.current.smoothness)
      return (
        Math.pow(oneMinusT, 2) * p0 +
        2 * oneMinusT * t * controlPoint +
        Math.pow(t, 2) * p2
      )
    }

    const lerpAngle = (a, b, t) => {
      let diff = b - a
      if (diff > Math.PI) diff -= 2 * Math.PI
      if (diff < -Math.PI) diff += 2 * Math.PI
      return a + diff * t
    }

    // Update the mouse state on mouse movement.
    const handleMouseMove = (e) => {
      mouseState.current.x = e.clientX
      mouseState.current.y = e.clientY
      mouseState.current.lastMoveTime = Date.now()
    }

    window.addEventListener('mousemove', handleMouseMove)

    const updateWorm = () => {
      const now = Date.now()
      const baseSpeed = 0.6

      const mouseActive = now - mouseState.current.lastMoveTime < 200

      if (mouseActive) {
        // Ensure worm goes near but not touching the mouse
        const mx = mouseState.current.x
        const my = mouseState.current.y
        const dx = worm.current.x - mx
        const dy = worm.current.y - my
        const d = Math.hypot(dx, dy)

        let targetX, targetY
        if (d > 0.1) {
          targetX = mx + (dx / d) * 10
          targetY = my + (dy / d) * 10
        } else {
          targetX = worm.current.x
          targetY = worm.current.y
        }
        const desiredAngle = Math.atan2(
          targetY - worm.current.y,
          targetX - worm.current.x
        )
        worm.current.targetDirection = desiredAngle
        worm.current.noise = 0
      } else {
        // If the mouse hasn’t moved recently, wander randomly.
        worm.current.targetDirection += (Math.random() * 2 - 1) * 0.05
        const dx = mouseState.current.x - worm.current.x
        const dy = mouseState.current.y - worm.current.y
        const mouseAngle = Math.atan2(dy, dx)
        worm.current.targetDirection = lerpAngle(
          worm.current.targetDirection,
          mouseAngle,
          0.0025
        ) // last value is bias toward mouse. smaller = less bias
        worm.current.noise += (Math.random() - 0.5) * 0.06
        worm.current.noise *= 0.95
        worm.current.noise = Math.max(-0.3, Math.min(0.3, worm.current.noise))
      }

      const turningRate = 0.05
      worm.current.baseDirection = lerpAngle(
        worm.current.baseDirection,
        worm.current.targetDirection,
        turningRate
      )

      // Compute the effective direction (with added noise).
      const effectiveDirection = worm.current.baseDirection + worm.current.noise
      const easedSpeed = baseSpeed * ease(worm.current.currentSpeed)

      // Update the worm’s position.
      worm.current.x += Math.cos(effectiveDirection) * easedSpeed
      worm.current.y += Math.sin(effectiveDirection) * easedSpeed
      worm.current.sizePhase += 0.08

      // Update the history
      const lastPos = worm.current.history[0]
      const distance = Math.hypot(
        worm.current.x - lastPos.x,
        worm.current.y - lastPos.y
      )
      if (distance > 4) {
        worm.current.history.unshift({ x: worm.current.x, y: worm.current.y })
        worm.current.history.pop()
      }
    }

    const drawWorm = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(
        worm.current.history[0].x,
        worm.current.history[0].y,
        worm.current.history[29].x,
        worm.current.history[29].y
      )
      gradient.addColorStop(0, '#2d5a27')
      gradient.addColorStop(1, '#4a9f41')

      const curvePoints = []
      for (let i = 0; i < worm.current.history.length - 1; i++) {
        const current = worm.current.history[i]
        const next = worm.current.history[i + 1]

        curvePoints.push(current)

        if (i < worm.current.history.length - 1) {
          const steps = 3
          for (let j = 1; j < steps; j++) {
            const t = j / steps
            const prevPoint = i > 0 ? worm.current.history[i - 1] : current
            const x = quadraticInterpolate(prevPoint.x, current.x, next.x, t)
            const y = quadraticInterpolate(prevPoint.y, current.y, next.y, t)
            curvePoints.push({ x, y })
          }
        }
      }
      curvePoints.push(worm.current.history[worm.current.history.length - 1])

      curvePoints.forEach((pos, i) => {
        ctx.fillStyle = gradient
        const progress = i / curvePoints.length
        const sizeOsc = Math.sin(worm.current.sizePhase + progress * 8) * 0.5
        const baseSize = 6 - progress * 4
        const radius = Math.max(2, baseSize + sizeOsc)

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      //Eyes
      const head = worm.current.history[0]
      const eyeOffset = 3 // Distance from center
      const eyeSize = 3 // Size of eyes
      const pupilSize = 2 // Size of pupils

      const eyeAngle = worm.current.baseDirection
      const eyeXOffset = Math.cos(eyeAngle) * eyeOffset
      const eyeYOffset = Math.sin(eyeAngle) * eyeOffset

      const pupilOffset = 1
      const pupilXOffset = Math.cos(eyeAngle) * pupilOffset
      const pupilYOffset = Math.sin(eyeAngle) * pupilOffset

      ctx.fillStyle = 'white'

      // Left Eye
      const leftEyeX = head.x - eyeYOffset
      const leftEyeY = head.y + eyeXOffset
      ctx.beginPath()
      ctx.arc(leftEyeX, leftEyeY, eyeSize, 0, Math.PI * 2)
      ctx.fill()

      // Right Eye
      const rightEyeX = head.x + eyeYOffset
      const rightEyeY = head.y - eyeXOffset
      ctx.beginPath()
      ctx.arc(rightEyeX, rightEyeY, eyeSize, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = 'black'

      // Left Pupil
      ctx.beginPath()
      ctx.arc(
        leftEyeX + pupilXOffset,
        leftEyeY + pupilYOffset,
        pupilSize,
        0,
        Math.PI * 2
      )
      ctx.fill()

      // Right Pupil
      ctx.beginPath()
      ctx.arc(
        rightEyeX + pupilXOffset,
        rightEyeY + pupilYOffset,
        pupilSize,
        0,
        Math.PI * 2
      )
      ctx.fill()
    }

    const animate = () => {
      updateWorm()
      drawWorm()
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [worm.current.smoothness])

  return (
    <div className="relative z-0">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-0 w-screen h-screen"
      />
    </div>
  )
}

export default Worm
