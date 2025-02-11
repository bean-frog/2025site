export default function LowTaperFade({ children }) {
  return (
    <div className="flex z-20 justify-center items-center w-screen h-screen bg-black animate-fade-in">
      {children}
    </div>
  )
}
