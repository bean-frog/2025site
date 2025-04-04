import { useState } from "react";

export default function Skills() {
/*loading from github raw is faster than the official deployment :skull: */
  const SkillIcon = ({ icon, hovertext }) => {
    const [errorCount, setErrorCount] = useState(0);
  
    const handleError = (event) => {
      if (errorCount === 0) {
        // (this happens second) try to load the version with no theme annotation
        event.target.src = `https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/${icon}.svg`;
        setErrorCount(1);
      } else {
        // if both versions fail, stop trying
        setErrorCount(2);
      }
    };
  
    if (errorCount === 2) {
      return null;
    }
  
    return (
      <abbr title={hovertext}>
        <img
  className="block w-6 h-6 align-middle md:h-10 md:w-10 lg:h-12 lg:w-12"
  src={`https://raw.githubusercontent.com/LelouchFR/skill-icons/refs/heads/main/assets/${icon}-dark.svg`}
          alt={`${icon} icon`}
          onError={handleError}
        />
      </abbr>
    );
  };
  
  
  
  return (
    <div className="flex flex-col justify-center items-center p-6 space-y-2 w-full h-full transition">
      <h1 className="text-xl font-bold">Skills</h1>

      <div className="p-4 w-full max-w-md bg-opacity-10 rounded-lg border border-white border-opacity-30 shadow-md transition bg-primary card">
        <h1 className="text-xl">Proficient</h1>
        <span className="flex flex-wrap items-center space-x-2 space-y-2">
        <SkillIcon icon="javascript" hovertext="JavaScript"/>
         <SkillIcon icon="typescript" hovertext="TypeScript"/>
         <SkillIcon icon="html" hovertext="HTML"/>
         <SkillIcon icon="css" hovertext="CSS"/>
         <SkillIcon icon="tailwindcss" hovertext="Tailwind"/>
         <SkillIcon icon="daisyui" hovertext="DaisyUI"/>
         <SkillIcon icon="react" hovertext="React"/>
         <SkillIcon icon="nodejs" hovertext="NodeJS"/>
         <SkillIcon icon="expressjs" hovertext="Express"/>
         <SkillIcon icon="electron" hovertext="Electron"/>
         <SkillIcon icon="python" hovertext="Python"/>
         <SkillIcon icon="arduino" hovertext="Arduino"/>
       </span>
      </div>
      <div className="p-4 w-full max-w-md bg-opacity-10 rounded-lg border border-white border-opacity-30 shadow-md transition bg-primary card">
        <h1 className="text-xl">Competent</h1>
        <span className="flex flex-wrap items-center space-x-2 space-y-2">
       <SkillIcon icon="linux" hovertext="Linux SysAdmin"/>
       <SkillIcon icon="c" hovertext="C"/>
       <SkillIcon icon="sqlite" hovertext="sqlite"/>
       <SkillIcon icon="firebase" hovertext="Firebase"/>
       <SkillIcon icon="vercel" hovertext="vercel"/>
       <SkillIcon icon="git" hovertext="Git"/>
       <SkillIcon icon="raspberrypi" hovertext="Raspberry Pi"/>
       <SkillIcon icon="flask" hovertext="Flask"/>
       <SkillIcon icon="ollama" hovertext="Ollama"/>
       <SkillIcon icon="prettier" hovertext="Prettier"/>
       </span>
      </div>
      <div className="p-4 w-full max-w-md bg-opacity-10 rounded-lg border border-white border-opacity-30 shadow-md transition bg-primary card">
        <h1 className="text-xl">Learning</h1>
        <span className="flex flex-wrap items-center space-x-2 space-y-2 basis-auto">
       <SkillIcon icon="rust" hovertext="Rust"/>
       <SkillIcon icon="java" hovertext="Java"/>
       <SkillIcon icon="tauri" hovertext="Tauri"/>
       <SkillIcon icon="ruby" hovertext="Ruby"/>
       <SkillIcon icon="docker" hovertext="Docker"/>
       </span>
      </div>
    </div>
  )
}
