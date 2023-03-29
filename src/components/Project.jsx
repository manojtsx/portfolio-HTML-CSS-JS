import React from "react";
import { api } from "../api/api";

const Project = () => {
  return (
    <>
      <section className="projects">
        <div className="content">
          <div className="title">
            <span>Projects</span>
          </div>
          <div className="boxes">
            {api.map((data) => (
              <div className="box" key={data.id}>
                <iframe src={data.link} className="iframe"></iframe>
                <div>
                  <div className="topic">{data.title}</div>
                  <p>{data.description}</p>
                  <div className="demo-button">
                    <a href={data.link} target="_blank">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
