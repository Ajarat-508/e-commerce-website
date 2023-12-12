import React from 'react'

const PageHeader = ({ title, description, backgroundImage }) => {
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        height: "40vh",
        display: "flex",
      };
        return (
          <section id="page-header" className="about-header" style={headerStyle}>
            <h2>{title}</h2>
            <p>{description}</p>
          </section>
        );
      };

export default PageHeader