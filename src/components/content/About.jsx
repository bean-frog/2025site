export default function About() {
  return (
    <div className="p-6 w-full h-full flex flex-col items-center justify-center transition">
      <h1 className="text-xl font-bold">Hello World!</h1>
      <ul>
    <li><strong>Name:</strong> Graeme Kieran, or some variation of beanfrog</li>
    <li><strong>Profession:</strong> Student</li>
    <li><strong>Location:</strong> California, USA</li>
    <li><strong>Passions:</strong> Programming, Urban Exploration, Music, Dogs, Weightlifting, Cooking</li>
    <li><strong>Favorite Quote:</strong> "It's not about the destination; it's about the journey and how you get there" - Ken Block</li>
    <li><strong>Fun Fact:</strong> I make a mean egg fried rice</li>
   
</ul>
<h1 className="text-xl font-bold">Get in touch</h1>
     <div className="flex flex-row items-center space-x-4">
      <a className="font-bold underline" href="https://github.com/bean-frog">Github</a>
      <a className="font-bold underline" href="https://discord.com/users/692853106895093800">Discord</a>
      <a className="font-bold underline" href="https://bsky.app/profile/beanfrog.bsky.social">Bluesky</a>
      <a className="font-bold underline" href="mailto:totallyrealnasaemail@gmail.com">Email</a>
     </div>

    </div>
  )
}
