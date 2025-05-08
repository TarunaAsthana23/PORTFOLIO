// src/pages/Home.js

import React from "react";
import profilePic_1 from "../Assets/Home/Taruna(1).jpg";
import profilePic_2 from "../Assets/Home/Chubby(1).jpg";
import {
  FaLinkedin,
  // FaGithub,
  FaPhone,
  // FaStackOverflow,
  // FaMedium,
  FaEnvelope
} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
  FaJava,
} from 'react-icons/fa';
import vscodeLogo from '../Assets/Home/visual-studio-code7642.jpg';
import { Link } from "react-scroll";
import "./Home.css";  // ← Yeh line add kariye


const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };


const projects = [
  {
    title: 'Amazon Clone',
    image: '/images/amazon_clone.png',
    description: 'An e-commerce website clone created using HTML, CSS, and JavaScript.',
    tools: ['html', 'css', 'js', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/Amazon_Clone',
    pageLink: 'https://tarunaasthana23.github.io/Amazon_Clone/',
  },
  {
    title: 'Event Management',
    image: '/images/event_management.png',
    description: 'An event management website developed using HTML, CSS, JavaScript, and TypeScript.',
    tools: ['html', 'css', 'js', 'bootstrap', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/Event-Management',
    pageLink: 'https://tarunaasthana23.github.io/Event-Management/',
  },
  {
    title: 'Apparent Clone Website',
    image: '/images/apparent_clone.png',
    description: 'A clone of Apparent Technologies Inc. official website built using HTML, CSS, and JavaScript.',
    tools: ['html', 'css', 'js', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/Apparent_Clone-Website',
    pageLink: 'https://tarunaasthana23.github.io/Apparent_Clone-Website/',
  },
  {
    title: 'Handling Form Submission',
    image: '/images/form_submission.png',
    description: 'A project to handle form submission using Java.',
    tools: ['java', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/handling-form-submission',
    pageLink: 'https://tarunaasthana23.github.io/portfolio/',
    
  },

  {
    title: 'My Portfolio Website',
    image: '/images/portfolio.png',
    description: 'A personal portfolio website created using React.js.',
    tools: ['html', 'css', 'js', 'github', 'vscode'],
    repoLink: 'https://github.com/TarunaAsthana23/portfolio',
    pageLink: 'https://tarunaasthana23.github.io/portfolio',

  },
];

const iconMap = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  bootstrap: <FaBootstrap />,
  github: <FaGithub />,
  vscode: <img src={vscodeLogo} alt="VS Code" className="vscode-icon" />, // Custom image for VS Code
  java: <FaJava />,
  
};





// function Home() {
    return (
                          // ---- Home ----// 
<div className="main" > 
  <section id="home" name="home" >  
    <div className="main_1">     

        <div className="home fade-in-left">  {/* Class name apply kar rahe hain */}

          <div className="block_1 fade-in-left">
            <img className="photo_1 fade-in-left" src={profilePic_1} alt="Profile" />
          </div>


          <div className="title_1 fade-in-left">
            <h1>Taruna Asthana</h1>
            <h2>Frontend Developer</h2>
            <p>"Always open to learning something and searching new every day."</p>
          </div>
    
        </div>

        <div className="btn_1 fade-in-left">
            {/* Contact Me Button */}
            {/* <button onClick={() => window.location.href = "about"}> About </button>
            <button onClick={() => window.location.href = "contact"}> Contact </button>
            <button onClick={() => window.location.href = "skills"}> Skills </button>
            <button onClick={() => window.location.href = "projects"}> Projects </button> */}
                      
            <button><Link to="about" smooth={true} duration={500}>About</Link></button>
            <button><Link to="contact" smooth={true} duration={500}>Contact</Link></button>
            <button><Link to="skills" smooth={true} duration={500}>Skills</Link></button>
            <button><Link to="projects" smooth={true} duration={500}>Projects</Link></button>

        </div>
        
    </div>                      
  </section>     

                    {/* ---- Home ---- */}
                    {/* ---- About ---- */}

  <section id="about" name="about"  >                       
    <div className="block_2 fade-in-right" >  


        <div className="title_2 fade-in-right">
          <h1>About Me</h1>
        </div>

        <div className="block_3 fade-in-right" >
            <div className="title_3 fade-in-right">
              <h1>"Hi, I'm Taruna Asthana"</h1>
              <p> "I'm a curious and dedicated learner who enjoys exploring new things and growing every day.</p>
              <p>I have completed my B.Tech and M.Tech in Computer Science and Engineering. During my studies, I worked on interesting projects. My B.Tech project was called Easy Go SMS, and in my M.Tech, I worked on a research topic that focused on removing things like raindrops and reflections from images using pattern recognition. I also published two research papers as part of my work.</p>
              <p>I started learning coding with HTML and CSS, then moved on to JavaScript and front-end development. Now, I’m learning modern frameworks like React, Angular, Vue.js, and also working with Node.js to build full-stack web applications that are dynamic and user-friendly.</p>
              <p>For me, coding is not just a job — it’s a journey of learning, creating, and solving real problems. Every line of code I write helps me grow and gives me a chance to do something meaningful with technology. ✨"</p>
            </div>

            <div className="block_4 fade-in-right" >
              <img className="photo_2 fade-in-right" src={profilePic_2} alt="Profile" />

            
              <div className="btn_2 fade-in-right">
                  {/* Preview CV */}
                <button onClick={() => window.open("/Set/Resume/CV_2024-09-10_Taruna_Asthana.pdf", "_blank")}>
                  Preview CV
                </button>

                  {/* Download CV */}
                <a href="/Set/Resume/CV_2024-09-10_Taruna_Asthana.pdf" download>
                  <button>Download CV</button>
                </a>
              </div>
            </div>
          
        </div>

        <div className="btn_3 fade-in-right">
                    {/* Button */}
          <button><Link to="home" smooth={true} duration={500}>Home</Link></button>
          <button><Link to="contact" smooth={true} duration={500}>Contact</Link></button>
          <button><Link to="skills" smooth={true} duration={500}>Skills</Link></button>
          <button><Link to="projects" smooth={true} duration={500}>Projects</Link></button>
        </div>
    </div>
  </section>

                     {/* ---- About ---- */}
                     {/* ---- Contact ---- */}
  <section id="contact" name="contact" > 
    <div className="con" >
      <div className="con_1">
        <h1>Contact Me</h1>
      </div>

      <div className="Con_2">
        <div className="contact">
          <h1>Contact Me</h1>
          <form className="contact_form" onSubmit={handleSubmit}>
            <label>
                Name:
            < input type="text" placeholder="Your Name" />
            </label>

            <label>
                Contact:
              <textarea placeholder="Contact Number" rows="2" />
            </label>

            <label>
                Email:
              <input type="email" placeholder="Your Email" />
            </label>

            <label>
                Message:
              <textarea placeholder="Your Message" rows="5" />
            </label>
          
            <button className ="btn_4" type="submit">Send</button>
          </form>
        </div>


        <div className="social-icons">

          <div className="icon_1">     
            <a href="https://www.linkedin.com/in/pragyaasthana/" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="mailto:hiyasrivastava777@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope className="icon" />
            </a>
              {/* <a href="https://stackoverflow.com/users/yourprofile" target="_blank" rel="noreferrer">
              <FaStackOverflow className="icon" />
              </a> */}
              {/* <a href="https://medium.com/@yourprofile" target="_blank" rel="noreferrer">
              <FaMedium className="icon" />
              </a> */}
          </div>

          <div className="icon_1">
            <a href="https://github.com/TarunaAsthana23" target="_blank" rel="noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="tel:+917985877742" target="_blank" rel="noreferrer">
              <FaPhone className="icon" />
            </a>
          </div>
        </div>
      
      </div>
    

      <div className="btn_5 ">
        {/* Button */}
        <button><Link to="home" smooth={true} duration={500}>Home</Link></button>
        <button><Link to="about" smooth={true} duration={500}>About</Link></button>
        <button><Link to="skills" smooth={true} duration={500}>Skills</Link></button>
        <button><Link to="projects" smooth={true} duration={500}>Projects</Link></button>
      </div>

    </div>
  </section>
                     {/* ---- Contact ---- */}
                     {/* ---- Skills ---- */}


  <section id="skills" name="skills">
    <div className="skills-page" >
      <h1>My Skills</h1>


      <div className="skills-container_1">
        <div className="skill-box">
          <h2>Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-box">
          <h2>Backend</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Spring Boot</li>
          </ul>
        </div>
      </div>
        
        
      <div className="skills-container_2">
        <div className="skill-box">
          <h2>Database</h2>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skill-box">
          <h2>Tools & Platforms</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>

      <div className="btn_6 ">
          {/* Button */}
          <button><Link to="home" smooth={true} duration={500}>Home</Link></button>
          <button><Link to="about" smooth={true} duration={500}>About</Link></button>
          <button><Link to="contact" smooth={true} duration={500}>Contact</Link></button>
          <button><Link to="projects" smooth={true} duration={500}>Projects</Link></button>
      </div>

    </div>
  </section>

                     {/* ---- Skills ---- */}
                     {/* ---- Projects ---- */}

  <section id="projects" name="projects">
    <div className="projects-section" >
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">
        {projects.map((project, index) => (

          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h2 className="Pro_1">{project.title}</h2>
            <p className='Parh_1'>{project.description}</p>
            <h2 className="Pro_2">TOOLS</h2>
            <div className="tools">
              {project.tools.map((tool, i) => (
                <span className="tool-icon" key={i}>
                  {iconMap[tool]}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                <FaGithub /> Repository
              </a>
              <a href={project.pageLink} target="_blank" rel="noreferrer">
                <FaGithub /> Page
              </a>
            </div> 
          </div>

        ))}
      </div>


      <div className="btn_7 ">
          {/* Button */}
            <button><Link to="home" smooth={true} duration={500}>Home</Link></button>
            <button><Link to="about" smooth={true} duration={500}>About</Link></button>
            <button><Link to="contact" smooth={true} duration={500}>Contact</Link></button>
            <button><Link to="skills" smooth={true} duration={500}>Skills</Link></button>
      </div>


    </div>
  </section>

                     {/* ---- Projects ---- */}




</div>
       );
                      
  }
  export default Home;
  


//   import React from "react";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home">
//       <section id="home">
//         <h1>Welcome to My Portfolio</h1>
//         <p>This is the home section.</p>
//       </section>

//       <section id="about">
//         <About />
//       </section>

//       <section id="skills">
//         <Skills />
//       </section>

//       <section id="projects">
//         <Projects />
//       </section>

//       <section id="contact">
//         <Contact />
//       </section>
//     </div>
//   );
// }

// export default Home;
