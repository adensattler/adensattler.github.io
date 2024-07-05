import React, { useState } from 'react';
import './Work.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import WORK from '../../assets/work';
import EXPERIENCE from '../../assets/experience';

export default function Work() {
  const [work, setWork] = useState(WORK[0]);
  return (
    <div className="about work">
      <Sidebar
        items={EXPERIENCE.map((exp) => (
          <Experience
            {...exp}
            dates={[exp.dates.start, exp.dates.end ?? 'Present']}
          />
        ))}
      >
        <div className="description">
          <p className="bio">
            Hi! I'm an aspiring software engineer passionate about the overlap of finance and technology, 
            fostering creativity wherever possible, and solving real problems with software.
          </p>
          <br />
          <p>
            Recently graduated studying {' '}
            <i>
              Computer Science / Business Administration / Finance
            </i>{' '}
            @ The Univeristy of Denver.
          </p>
          <div className="contact">
            <a href="mailto:adensattler@gmail.com">Email</a>
            <a href="https://github.com/adensattler">GitHub</a>
            <a href="https://www.linkedin.com/in/aden-sattler">LinkedIn</a>
          </div>
          <p className="section-header pt-6">EXPERIENCE</p>
        </div>
      </Sidebar>

      {/* Project Section */}
      <div className="intro-container">
        <p className="section-header projects-header">SELECTED WORK</p>
        <div className="project-links">
          {WORK.map((w) => (
            <p
              onClick={() => setWork(w)}
              className={work.name === w.name && 'selected-project'}
            >
              {w.name}
            </p>
          ))}
        </div>
        <div className="projects-container">
          <div>
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer"
              className="project-images"
            >
              {work.images.map((img, index) => (
                <img
                  src={`images/${img}`}
                  alt={`${work.name} number ${index}`}
                  style={{ maxWidth: `${100 / work.images.length}%` }}
                  key={`${work.name} number ${index}`}
                />
              ))}
            </a>
            <p
              className="heading project-heading"
              id={work.name.replace(' ', '_')}
            >
              {work.name}
            </p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
            <br />
            <br />
          </div>
        </div>
        <div className="mobile-project-info">
          {WORK.map((work) => (
            <div>
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className="project-images"
              >
                {work.images.map((img, index) => (
                  <img
                    src={`images/${img}`}
                    alt={`${work.name} number ${index}`}
                    style={{ maxWidth: `${100 / work.images.length}%` }}
                    key={`${work.name} number ${index}`}
                  />
                ))}
              </a>
              <p
                className="heading project-heading"
                id={work.name.replace(' ', '_')}
              >
                {work.name}
              </p>
              <br />
              <div dangerouslySetInnerHTML={{ __html: work.description }}></div>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience({ name, dates, description, position, link }) {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <a href={link} target="_blank" rel="noreferrer">
          <b>{name}</b>
        </a>
        <p className="experience-dates">{dates.join('-')}</p>
      </div>
      <p className="experience-position">{position}</p>
      <p>{description}</p>
    </div>
  );
}
