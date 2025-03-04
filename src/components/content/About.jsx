function RandomQuote() {
  const quotes = [
    "\"I'm schizophrenic, and so am I\" - Terry Davis",
    "\"If I was a dog, I would bark\" - Terry Davis",
    "\"Intelligence is the ability to avoid doing work, yet getting the work done\" - Linus Torvalds",
    "\"If you're not scared, you're not going fast enough\" - Ken Block"
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return <p>{quote}</p>;
}
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-6 w-full h-full transition">
      <h1 className="text-xl font-bold">Hello World!</h1>
      <ul className="flex flex-col justify-center">
    <li><strong>Name:</strong> Graeme Kieran</li>
    <li><strong>Profession:</strong> Student</li>
    <li><strong>Location:</strong> California, USA</li>
    <li><strong>Passions:</strong> Programming, Urban Exploration, Music, Dogs, Weightlifting, Cooking</li>
    <li><strong>Random Quote:</strong> <RandomQuote /></li>
   
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
