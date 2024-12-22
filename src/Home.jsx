import React from 'react';
import pf2 from './Images/pf2.jpeg';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // Gradient with modern blue-green tones
      color: '#fff',
      gap: '30px',
      flexWrap: 'wrap',

    },
    contentBox: {
      flex: '1',
      minWidth: '300px',    
      maxWidth: '600px',
    },
    heading: {
      fontSize: '55px',
      fontWeight: 'bold',
      margin: '15px 0',
      color: '#00d4ff', // Bright cyan for the heading
    },
    subHeading: {
      fontSize: '50px',
      color: '#ffcc29', // Golden-yellow to complement the cyan
    },
    animation: {
      fontSize: '30px',
      fontFamily: "'Courier New', Courier, monospace",
      color: '#e6e6e6',
      margin: '20px 0',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '1.8',
      color: '#d9d9d9',
      marginTop: '15px',
    },
    imageBox: {
      flex: '1',
      minWidth: '400px',
      maxWidth: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '400px',
      height: '400px', 
      objectFit: 'contain',
      // borderRadius: '1px',
      border: '3px solid rgb(228, 236, 238)', // Cyan border
      boxShadow: '10px 52px 56px rgba(2.5, 2.5, 2.5, 2.5)', 
      // margin:"0px 80px 0px 0px"
      
    },
  };

  return (
    <div style={styles.container}>
      {/* Content Section */}
      <div style={styles.contentBox}>
        <h1 style={styles.heading}>
          Hello, <br /> I'm <span style={styles.subHeading}>Anupam Shrivastava</span>
        </h1>
        <div style={styles.animation}>
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              500,
              'Web Designer',
              500,
              'UI/UX Designer',
              500,
              'Backend Developer',
              500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
        <p style={styles.paragraph}>
          Dynamic and highly motivated Full Stack Developer with a strong
          foundation in front-end and back-end development, certified in the
          MERN Stack. Proficient in HTML, CSS, JavaScript, React.js, Node.js,
          Express.js, and Redux, with hands-on experience building responsive,
          user-friendly web applications. Comprehensive knowledge of AWS Cloud
          services, enabling seamless deployment and management of cloud-based
          solutions.
        </p>
      </div>

      {/* Image Section */}
      <div style={styles.imageBox}>
        <img src={pf2} alt="Profile" style={styles.image} />
      </div>
    </div>
  );
};

export default Home;
