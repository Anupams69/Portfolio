import React from "react";
import "./About.css";
import pic2 from "./Images/htmlpic.png";
import pic3 from "./Images/css2.png";
import pic7 from "./Images/Expressjs6.png";
import pic8 from "./Images/Mongodb7.jpeg";
import pic9 from "./Images/aws8.jpeg";

function About() {
  const techImages = [
    { src: pic2, alt: "HTML" },
    { src: pic3, alt: "CSS" },
    { src: pic7, alt: "Express.js" },
    { src: pic8, alt: "MongoDB" },
    { src: pic9, alt: "AWS" },
  ];

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      fontSize: "36px",
      color: "#ffffff",
      marginBottom: "30px",
      textTransform: "uppercase",
    },
    contentWrapper: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "30px",
      flexWrap: "wrap",
    },
    textContainer: {
      flex: "1 1 60%",
      color: "#eeeeee",
      fontSize: "18px",
      lineHeight: "1.8",
    },
    imageContainer: {
      flex: "1 1 35%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "15px",
    },
    techImage: {
      width: "80px",
      height: "80px",
      objectFit: "contain",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div id="about" style={styles.container}>
      <h1 id="whatido" style={styles.heading}>
        My Expertise..
      </h1>
      <br /><br /><br/>

      <div style={styles.contentWrapper}>
        {/* Text Section */}
        <div style={styles.textContainer}>
          <p>
            Dynamic and highly motivated Full Stack Developer with a strong
            foundation in front-end and back-end development, certified in the
            MERN Stack.
          </p>
          <p>
            Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js,
            and Redux, with hands-on experience building responsive,
            user-friendly web applications.
          </p>
          <p>
            Comprehensive knowledge of AWS Cloud services, enabling seamless
            deployment and management of cloud-based solutions.
          </p>
        </div>

        {/* Image Section */}
        <div style={styles.imageContainer}>
          {techImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={styles.techImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
