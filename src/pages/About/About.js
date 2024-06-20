import React from 'react';
import './About.css';
// import me from '../../assets/me.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="intro-container about-intro-container">
        {/* <img src={me} className="pic" alt="a headshot of me!" /> */}
        <div>
          <p className="heading">Hi, I'm Aden.</p>
          <br />
          <p>
            I recently graduated at the University of Denver studying{' '}
            <i>
                Computer Science / Business Administraion / Finance.
            </i>{' '}
            I was born and raised in Colorado and don't plan on leaving any time soon!
          </p>
          <br />
          <p>
            Right now, I'm enjoying some time off after graduating, spending
            some time traveling, experimenting, building, spending time with
            friends, etc. I'm also challenging myself to improve my skills as a solo software developer
            by collaborating with businesses local to the DU area and building software solutions for them when I have the time! 
          </p>
          <br />
          <p>
            I enjoy working on creative web tools and creating engaging
            experiences through technology. I'm most interested in working on
            educational technology and examining how we can facilitate social
            connection through data.
          </p>
          <div className="info-section">
            <div className="text">
              <br />
              <p>
                <b>Things I'm exploring right now: </b>
                web dev, cloud computing, cooking & nutrition,
                entrepeneuership, film photography
              </p>
              <br />
              <p>
                <b>Things I want to learn more about: </b> 
                DevOps + CI/CD, networking, marathon running, LLMs, film photography, 
                frontend web dev, music production, philosophy, ethical hacking, film,
                electric guitar
              </p>
              <br />
              <p>
                <b>Things I enjoy: </b>
                
                acoutic guitar, driving on the highway with the windows down, live drums, 
                watching the sunset, enduro motorcycling, fashion, working in a sauna-like garage,
                training at night, interior design, espresso,
                and the occasional trashy reality show

                {/* bouldering, functional programming, indie
                rock, waking up with the sun, cold brew, watching leaves turn
                red in the fall, horror movies, watching the swans and geese
                near my neighborhood pond at sunset, running on the West Side
                Highway */}
              </p>
              <br />
              <p>
                <b>Current favorites:</b>
              </p>
              <ul>
                <li>
                  <b>Movies</b>: <i>Goodwill Hunting</i>, <i>City of God</i>,{' '}
                  <i>Princess Mononoke</i>, <i>Short Term 12</i>, <i>Moonlight</i>
                </li>
                <li>
                  <b>Artists</b>: Bon Iver, Zach Bryan, Adrianne Lenker, BROCKHAMPTON,
                  Dominic Fike, Paris Texas
                </li>
                <li>
                  <b>Shows</b>: Succession, Yellowstone, Top Gear, Adventure Time, The Last of Us
                </li>
                <li>
                  <b>Places</b>: NYC, my front porch in the summertime, the Flatirons, Target in the
                  suburbs, Rocky Mountain National Park
                </li>
              </ul>
              <div className="contact">
                <a href="mailto:adensattler@gmail.com">Email</a>
                <a href="https://github.com/adensattler">GitHub</a>
                <a href="https://www.linkedin.com/in/aden-sattler">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
