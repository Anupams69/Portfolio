import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from "./Images/htmlpic.png";
import css from "./Images/css2.png";
import js from "./Images/js3.png";
import react from "./Images/Reactjs4.png";
import node from "./Images/Node5.png";
import expressjs from "./Images/Expressjs6.png";
import pic8 from "./Images/Mongodb7.jpeg";
import amazon from "./Images/Amazon_Web_Services-Logo.wine.png";
import college from "./Images/Jabalpur_Engineering_College_(JEC)'s_logo.png";
import "./Portfolio.css";

const EducationCard = ({ imgSrc, altText, title, details, score }) => {
  const cardStyle = {
    flex: "1",
    maxWidth: "30%",
    padding: "20px",
    background: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    '@media (max-width: 768px)': {
      flexDirection: "column",
    },

  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    marginBottom: "10px",
    borderRadius: "50%",
  };

  const titleStyle = {
    margin: "10px 0",
    color: "#333",
  };

  const textStyle = {
    margin: "5px 0",
    color: "#555",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* {imgSrc && <img src={imgSrc} alt={altText} style={imageStyle} />} */}
      <h3 style={titleStyle}>{title}</h3>
      <p style={textStyle} dangerouslySetInnerHTML={{ __html: details }}></p>
      <p style={{ ...textStyle, fontWeight: "bold", color: "#222" }}>{score}</p>
    </div>
  );
};

const EducationSection = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    '@media (max-width: 768px)': {
      flexDirection: "column",
    },
  };

  return (
    <div style={containerStyle}>
      <EducationCard
        imgSrc={college}
        altText="JEC Logo"
        title="Bachelor of Technology"
        details="Electronics & Communication<br />Jabalpur Engineering College (JEC), Jabalpur (M.P)"
        score="Percentage: 73.6%"
      />
      <EducationCard
        title="Matriculation Xth"
        details="Sacred Heart Convent School<br />Padra, Rewa (M.P)"
        score="CGPA: 7.2"
      />
      <EducationCard
        title="Intermediate XIIth (PCM)"
        details="Sacred Heart Convent School<br />Padra, Rewa (M.P)"
        score="Percentage: 68.6%"
      />
    </div>
  );
};

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { title: "HTML", description: "Markup Language", image: html },
    { title: "CSS", description: "Stylesheet", image: css },
    { title: "JavaScript", description: "Programming Language", image: js },
    { title: "React.js", description: "Frontend Library", image: react },
    { title: "Node.js", description: "Backend Runtime", image: node },
    { title: "Express.js", description: "Backend Framework", image: expressjs },
    { title: "MongoDB", description: "Database", image: pic8 },
    { title: "AWS", description: "Cloud Technology", image: amazon },
  ];

  const styles = {
    sliderContainer: {
      padding: '30px',
      background: 'linear-gradient(135deg, #1e3c72, #C5A467)',
      color: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      marginTop: '30px',
    },

    

    card: {
      margin: '10px',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      height: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    image: {
      width: '100px',
      height: '100px',
      objectFit: 'contain',
      marginBottom: '10px',
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      fontSize: '12px',
      color: '#777',
    },
    education: {
      padding: '30px',
      marginTop: '40px',
      textAlign: 'center',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      color: '#333',
    },
    educationImage: {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      marginBottom: '15px',
    },
    projectSection: {
      marginTop: '30px',
      color: '#333',
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    projectTitle: {
      fontSize: '20px',
      marginBottom: '10px',
      color: '#1e3c72',
    },
    projectDescription: {
      fontSize: '14px',
      color: '#555',
    },
    projectButton: {
      backgroundColor: '#C5A467',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      margin: '10px 10px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    resumeButtonFooter: {
      backgroundColor: 'rgb(28, 83, 186)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      margin: '10px 10px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    projectButtonHover: {
      backgroundColor: '#1e3c72',
    },
  };

  return (
    <div style={styles.sliderContainer}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Portfolio</h1>
      <br />
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Skills</h2>

      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <div
              style={{
                ...styles.card,
                ':hover': styles.cardHover, // Hover effect for interactivity
              }}
            >
              <img src={card.image} alt={card.title} style={styles.image} />
              <h3 style={styles.title}>{card.title}</h3>
              <p style={styles.description}>{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <br /><br/>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Projects</h2>

             
      <div style={styles.projectSection}>
  <h1 style={styles.projectTitle}>Food Delivery App</h1>
  <p style={styles.projectDescription}>
    HTML, CSS, JavaScript, React.js: Developed a food delivery app using
    React.js to create a seamless user experience for ordering food. 
    Implemented features such as menu browsing, order placement, and payment integration.
  </p>
  <br></br>
  <div style={styles.buttonContainer}>
    <a href="https://github.com/Anupams69/Foodapp.git" style={styles.projectButton}>
      Github Link
    </a>
    <a href="https://foodapp-rho-roan.vercel.app/" style={styles.projectButton}>
      Vercel
    </a>
  </div>
  <br></br>
  <hr></hr>
  <h1 style={styles.projectTitle}>Creation of Movie Search Application</h1>
  <p style={styles.projectDescription}>
    An OMDB movie application using React.js, JavaScript, which contains all
    the description and uses the useReducer functionality to manage multiple states.
  </p>
  <br></br>
  <div style={styles.buttonContainer}>
    <a href="https://github.com/Anupams69/Omdbapp.git" style={styles.projectButton}>
      Github Link
    </a>
  </div>
  <br></br>
  <hr></hr>
  <h1 style={styles.projectTitle}>Creation of Music Player</h1>
  <p style={styles.projectDescription}>
    Created a Music Player with the help of React.js, which holds the
    information for the music items you wish to play, manages multiple states,
    and provides a better user experience.
  </p>
  <br></br>
  <div style={styles.buttonContainer}>
    <a href="https://github.com/Anupams69/React-Musicplayer.git" style={styles.projectButton}>
      Github Link
    </a>
  </div>
  <br></br>
  <hr></hr>
  
  <h1 style={styles.projectTitle}> AWS Web App Deployment </h1>
  <p style={styles.projectDescription}>
  Deployed and hosted a responsive web application by  
uploading an index.html file on AWS S3, ensuring high 
availability and accessibility through scalable cloud 
infrastructure. 
  </p>
  <br></br>
  <div style={styles.buttonContainer}>
    <a href=" https://jaishrivastava.s3.amazonaws.com/index.html " style={styles.projectButton}>
      AWS S3 Link
    </a>
    <br/>
    <br/>
  </div>


  
</div>
<br /><br />
      
<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Education</h2>

<EducationSection />


      {/* <div  className= "Ed"style={styles.education}>
        <img src={college} alt="JEC Logo" style={styles.educationImage} />
        <h2>Education Details</h2>
        <p>
          Bachelor of Technology<br />
          Electronics & Communication<br />
          Jabalpur Engineering College (JEC), Jabalpur (M.P)
        </p>
        <p>Percentage: 73.6%</p>
      </div> */}


      {/* <div  className= "Ed"style={styles.education}> */}
         
        {/* <img src={college} alt="JEC Logo" style={styles.educationImage} /> */}
        {/* <h2>Education Details</h2>
        <p>
          Matriculation Xth<br />
          Sacred Heart Convent School<br />
          padra,Rewa (M.P)
        </p>
        <p>CGPA:7.2</p>
      </div> */}
      
      {/* <div className= "Ed"style={styles.education}> */}

        {/* <img src={college} alt="JEC Logo" style={styles.educationImage} /> */}
        {/* <h2>Education Details</h2>
        <p>
          Intermediete XIIth (PCM)<br />
          Sacred Heart Convent School<br />
          padra,Rewa (M.P)
        </p>
        <p>Percentage: 68.6%</p>
      </div> */}

        <br /><br />

        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Visit My Resume.</h2>
        <div className='resumebtn'>
        <a href="https://drive.google.com/drive/folders/1SPz4ZuiB7LaA5bSOdHU31LZ-dwbP8Nam" rel="noreferrer" target='_blank' style={styles.resumeButtonFooter}>
          Get Resume
        </a>
        </div>
              
    </div>
  );
};

export default Portfolio;
