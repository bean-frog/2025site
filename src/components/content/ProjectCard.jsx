export default function ProjectCard({ title, description, links, languages }) {
    // Define language colors with hex codes for inline styling
    const languageColors = {
      Javascript: "#f1e05a",
      Python: "#3572A5",
      Java: "#b07219",
      Typescript: "#2b7489",
      Ruby: "#701516",
      // Add more languages and their corresponding colors as needed
    };
  
    return (
      <div className="bg-opacity-10 rounded-lg border border-white border-opacity-30 bg-primary transitio card">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
            <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18"fill="#ffffff">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
              {/* Title */}
              <h2 className="text-xl font-bold card-title">{title}</h2>
            </div>
            
            <div className="flex space-x-2">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <i className="nf nf-dev-github"></i>
                </a>
              )}
              {links.url && (
                <a
                  href={links.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                <i className="nf nf-fa-link"></i>
                </a>
              )}
            </div>
          </div>
    
          <p className="mt-2 card-desc">{description}</p>
        </div>
    
        {languages && languages.length > 0 && (
          <div className="px-4 pb-4">
            <div className="text-sm">
              {languages.map((language, index) => (
                <span key={language}>
                  <span
                    style={{ color: languageColors[language] || "#ffffff" }}
                    className="font-bold"
                  >
                    {language}
                  </span>
                  {index < languages.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  