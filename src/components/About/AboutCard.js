import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey! I'm <span className="purple">Gopinda Aditya</span>, an Informatics graduate from  
            <span className="purple"> Sanata Dharma University</span>. I build web systems with tech like  
            React, Laravel, and Express, and I love crafting REST APIs and playing with databases.  
            <br />
            Curious about Machine Learning, fast at picking up new tech, and always excited to solve  
            complex problems. Let's create something awesome together!  
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
