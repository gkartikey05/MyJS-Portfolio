/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/BG-3.jpg";

const imageAltText = "abstract background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GitHub User Finder Web App",
    description:
      "Created a web application with the help of free external API provided by GitHub itself to search and find its user and can get there detials.",
    url: "https://github-user-finder-wheat.vercel.app/",
  },
  {
    title: "Pokedex",
    description:
      "Developed a web application with the help of a free external API to search and get details of any pokemon.",
    url: "https://pokedex-mocha-theta-87.vercel.app/",
  },
  {
    title: "Job Application Form",
    description:
      "Design and developed an online job application form in Vite React to enhance my frontend skills and React knowledge by implementing conditional rendering.",
    url: "https://job-application-form-pearl.vercel.app/",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Design and Developed a Tic Tac Toe game in React App to let folks play and enjoy games in there free time which they do not need to install in there phone or laptop.",
    url: "https://tic-tac-toe-game-eosin-nine.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
