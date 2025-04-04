
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-6 space-y-6 w-full h-full bg-opacity-10 rounded-lg transition">
      <h1 className="text-2xl font-bold">Hello World!</h1>
      
      <div className="p-4 w-full max-w-md bg-opacity-10 rounded-lg border border-white border-opacity-30 shadow-md transition bg-primary card">
        <ul className="space-y-2">
          <li><strong>Name:</strong> Graeme Kieran / beanfrog</li>
          <li><strong>Occupation:</strong> Student</li>
          <li><strong>Location:</strong> California, USA</li>
          <li><strong>I love:</strong> My dogs, urban exploration, programming, computers, caffeine, forests, lifting heavy circles</li>
        </ul>
      </div>
      
      <h1 className="text-2xl font-bold">Get in touch</h1>
      <div className="flex flex-row items-center space-x-4">
        <a className="font-bold underline" href="https://github.com/bean-frog">Github</a>
        <a className="font-bold underline" href="https://discord.com/users/692853106895093800">Discord</a>
        <a className="font-bold underline" href="https://bsky.app/profile/beanfrog.bsky.social">Bluesky</a>
        <a className="font-bold underline" href="mailto:totallyrealnasaemail@gmail.com">Email</a>
      </div>
      
     
    </div>
  );
}
