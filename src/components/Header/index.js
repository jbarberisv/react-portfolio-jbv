import React from "react";

export default function Header() {

    return (
      <>
        <nav>
          <div>
            <h1>Joaquin Barberis</h1>
          </div>
          <div>
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact-me">Contact Me</a></li>
              <li><a href="resume">Resume</a></li>
            </ul>
          </div>
        </nav>
        <section className="hero">
          <div>
            <h2>Developer</h2>
          </div>
        </section>
      </>

  )
}

