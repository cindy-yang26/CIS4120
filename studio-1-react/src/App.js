import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [page, setPage] = useState('Home');

  const goHome = () => {
    setPage('Home');
  }

  const goAbout = () => {
    setPage('About');
  }

  const homeText = (
    <>
    <h1>
        Hi there!
    </h1>
    <p>
        Hi there! My name is Cindy, and I am a student at Penn. I am passionate about product development.
        More about me <a href="/about.html">here</a>.
    </p>
    <p>
        I enjoy swimming and baking.
    </p>
    </>
  );

  const aboutText = (
    <>
      <h1>About Me</h1>
      <p>I am currently a student at the University of Pennsylvania studying Computer Science, with a concentration in AI
          and minors in Math and Data Science.
      </p>
    </>
  );

  const aboutWork = (
    <>
      <div id="work-div">
          <p>2024, Intern at Google</p>
          <p>2023, Intern at Mathworks</p>
          <p>2022, Bioinformatics Lab Research Intern at UPenn</p>
      </div>
    </>
  );

  return (
    <div>
      <nav>
        <button onClick={goHome}>Home</button>
        <button onClick={goAbout} style={{paddingLeft: '20px'}}>About</button>
      </nav>
      <div id="content">
        <div id="text-div">
          {page === 'Home' ? (
            <>
              {homeText}
            </>
          ) : (
            <>
              {aboutText}
            </>
          )}
        </div>
        {page === 'Home' ? (
          <>
            <img class="home-image" src="/cool.png" alt="Cool" />
            <img class="home-image" src="/gradient.png" alt="Gradient" />
          </>
        ) : (
          <>
          {aboutWork}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
