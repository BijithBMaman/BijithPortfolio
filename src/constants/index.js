import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    mysql,
    c,
    python,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    consulta,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    AnalysisDDoS,
    Deepfake,
    BulkThumbnail,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Cloud Technologies",
      icon: backend,
    },
    {
      title: "Computer Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Consulta Technologies Pvt. Ltd.",
      icon: consulta,
      iconBg: "#383E56",
      date: "01 June 2022 - 30 June 2022",
      points: [
        "Developed a Weighing App using Python and Tkinter to facilitate milk analysis, including Fat, Protein, Silica, and Ash Analysis.",
        "Implemented user authentication within the Weighing App to ensure secure access to the analysis system.",
        "Created a dynamic table within the Weighing App for storing and updating analysis results efficiently.",
        "Enhanced user experience in the Weighing App by allowing data updates post-submission, ensuring accuracy and flexibility.",
        "Designed a Telegram Alert App using Python and Telegram Bot to send real-time alerts to responsible officials during factory alarms.",
        "Integrated OPC systems within the Telegram Alert App to interface with the alarm generator and trigger alerts.",
        "Implemented Telegram Bot integration in the Alert App for efficient and immediate delivery of notifications to officials.",
        "Ensured timely and reliable communication in critical situations through the Telegram Alert App, improving factory response times.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bulk Thumbnail Creator",
      description:
        "Developed a Flask-based web application utilizing Python, HTML, CSS, and JavaScript to create a user-friendly tool for generating and merging image thumbnails with text, optimized for bloggers and content creators.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: BulkThumbnail,
      source_code_link: "https://github.com/",
    },
    {
      name: "Analysis of DDoS Attack using Data Mining",
      description:
        "Conducted a comprehensive study on DDoS attacks, setting up a controlled environment to collect real-time data and applying data mining algorithms to develop a model for detecting attack patterns using tools like Matplotlib, Mininet, and Pandas.",
      tags: [
        {
          name: "Matplotlib",
          color: "blue-text-gradient",
        },
        {
          name: "Mininet",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: AnalysisDDoS,
      source_code_link: "https://github.com/",
    },
    {
      name: "Deepfake Detection using CNN and ResNeXt",
      description:
        "Developed a CNN and RNN-based system to detect deepfake videos, addressing misinformation by training on a diverse dataset to enhance digital media reliability and reduce the impact of manipulated content.",
      tags: [
        {
          name: "CNN",
          color: "blue-text-gradient",
        },
        {
          name: "ReNeXt",
          color: "green-text-gradient",
        },
        {
          name: "HTML, css, javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Deepfake,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };