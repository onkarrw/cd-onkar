import React from 'react';
import './Card.css';

const projects = [
  {
    title: 'Face detection',
    image: 'imgs/faced.png',
    description: 'A real-time face or smile detection using Haar cascade algorithm, uses blocks or line detection features.',
    sourceCode: 'https://github.com/onkarrw'
  },
  {
    title: 'Data Fusion: Predictive Analytics & Recommendations',
    image: 'imgs/predAnalysis.jpg',
    description: 'Integrated car prize prediction, sales forecasting, and movie recommendation models for actionable insights.',
    sourceCode: 'https://github.com/onkarrw'
  },


  {
    title: 'Lead tracker chrome extension',
    image: 'imgs/leadt.png',
    description: 'Leads Tracker can be used to save URL from any website.',
    sourceCode: 'https://github.com/onkarrw'
  },
  {
    title: 'Library Management System (Java)',
    image: 'imgs/libman.png',
    description: 'Used to insert, update, delete records into the Library database using jdbc connector. Where interface is made using Java Swing framework.',
    sourceCode: 'https://github.com/onkarrw'
  },
  {
    title: 'Personal portfolio website',
    image: 'imgs/portfolio.gif',
    description: 'My Portfolio website built using React framework.',
    sourceCode: 'https://github.com/onkarrw'
  },
  {
    title: 'Integrated Education Platform',
    image: 'imgs/edu.gif',
    description: 'Introducing Integrated Educational Platform: Seamlessly combining video conferencing, proctored exams, and easy sharing of educational resources. Engage in live lectures, take secure exams, and access a vast library of materials. Revolutionize online education with us!',
    sourceCode: 'https://github.com/onkarrw'
  }
];

const Card = ({ title, image, description, sourceCode }) => (
  <div className="card offset-lg-1 col-lg-3 col-md-5 col-sm-8" data-aos="flip-down">
    <img className="cardimgs" src={image} alt="Avatar" style={{ width: '100%' }} />
    <h4><b>{title}</b></h4>
    <div className="container card-back">
      <p>{description}</p>
      <button><a href={sourceCode}>Source code</a></button>
    </div>
  </div>
);

const App = () => (



  <section id="projects" className="container project-section project">
    <div className="section-title">
      <h2>Projects</h2>
    </div>
    <hr />
    <div className="row">
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  </section>
);

export default App;