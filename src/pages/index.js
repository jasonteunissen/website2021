import React from "react"

export default function Home() {
  return (
    <div className="main-wrap">
      <div className="line"></div>
      <div className="title-wrap">
        <div className="left">
          <h1>Jason</h1>
          <h2>Teunissen</h2>
        </div>
        <div className="right">
          <h3>All-round</h3>
          <h3>Corporate</h3>
          <h3>UX Designer</h3>
        </div>
      </div>
      <div className="line"></div>

      <div className="nav nav-right">
        <a href="https://www.linkedin.com/in/jason-teunissen-537a9327">Linkedin</a>
        <a href="https://dribbble.com/jasonteunissen">Dribbble</a>
        <a href="https://medium.com/@jasonteunissen">Medium</a>
        <a href="https://anchor.fm/jason-teunissen">Podcast</a>
      </div>

      <div className="noise"></div>
    </div>
  );
}
