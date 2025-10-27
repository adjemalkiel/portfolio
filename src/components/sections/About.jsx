import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Git"
  ];

  const backendSkills = ["Bash", "C#", "Powershell","MongoDB", "Node.js", "Java", "PHP", "T-SQL", "SQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              My curiosity has always been about how things work behind the scenes. That's what led me to backend development. 
              I get a kick out of knowing that the code I write powers the features users love, even if they never see it.
              <br></br>
              <br></br>
              I'm Onesime Malkiel Adje, and I build the logic, databases, and infrastructure that make applications tick. 
              I'm experienced with building REST APIs with Node.js and managing data with MongoDB, and I'm always learning something new.
              <br></br>
              <br></br>
              When I need to step away from the screen, I recharge by lecturing and immersing myself in music — two passions that keep me inspired and balanced.
              <br></br>
              <br></br>
              If you're looking for a developer who cares deeply about performance and reliability, I'd love to chat.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Telecoms </strong> - ESGI Paris
                  (2018)
                </li>
                <li>
                  <strong> High School Diploma - Electronics. </strong> - LTPKP (2014)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer & QA Support at Watchtower. (2018 - 2025){" "}
                  </h4>
                  <p>
                    Developed and maintained software applications, collaborated on system testing and debugging, 
                    provided quality support across multiple platforms, and implemented automation scripts to streamline tasks.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Backend Java Developer at QOSPAY. (jan. 2018 - jul. 2018){" "}
                  </h4>
                  <p>
                    Developed backend services using Java technologies and contributed to enhancing the MTN Mobile Money payment platform.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    PHP Developer Independant Contractor. (2016 - 2018){" "}
                  </h4>
                  <p>
                    Designed and developed web applications for financial institutions, healthcare clinics, and educational organizations using the Symfony framework.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    AI Training at MIFY. (nov. 2017 - dec. 2017){" "}
                  </h4>
                  <p>
                    Acquired foundational knowledge of artificial intelligence concepts and applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
