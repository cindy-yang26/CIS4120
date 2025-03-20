import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [city, setCity] = useState('Philadelphia');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleCity = () => {
    setCity((prevCity) => (prevCity === 'Philadelphia' ? 'Miami' : 'Philadelphia'));
    setMenuOpen(false);
  };

  const leftSidePhilly = (
    <div className="left-side-philly">
        <div className="feels-like">
            <span>Feels like</span>
            <span id="feels-like-temp">30<sup style={{fontSize: "0.6em"}}>o</sup></span>
            <span style={{fontSize: "1.3em"}}>SUNNY</span>
            <span>
                H: 40<sup style={{fontSize: "0.7em"}}>o</sup> 
                <span style={{display: "inline-block", margin: "0 5px"}}></span>
                L: 22<sup style={{fontSize: "0.7em"}}>o</sup>
            </span>
        </div>
        <div className="precipitation">
            <div className="precip-left">
                <img src="raindrop.png" id="raindrop-icon" alt="Rain Icon" />
                <span id="precip-time">9<span style={{fontSize: "0.8em"}}>PM</span></span>
            </div>
            <div class="precip-right">
                <span style={{fontSize: "0.9em"}}>70% chance</span>
                <span style={{fontSize: "0.7em"}}>of rain in</span>
                <span style={{fontSize: "1.1em", fontWeight: "bold"}}>7 hours</span>
            </div>
        </div>
    </div>
  );

  const leftSideMiami = (
    <div className="left-side-miami">
        <div className="feels-like">
            <span>Feels like</span>
            <span id="feels-like-temp">79<sup style={{fontSize: "0.6em"}}>o</sup></span>
            <span style={{fontSize: "1.2em"}}>MOSTLY SUNNY</span>
            <span style={{paddingBottom: "3px"}}>
                H: 81<sup style={{fontSize: "0.7em"}}>o</sup> 
                <span style={{display: "inline-block", margin: "0 5px"}}></span>
                L: 69<sup style={{fontSize: "0.7em"}}>o</sup>
            </span>
        </div>
        <div className="precipitation">
            <div className="precip-left">
                <img src="raindrop.png" id="raindrop-icon" alt="Raindrop Icon" />
            </div>
            <div className="precip-right">
                <span style={{fontSize: "1.1em"}}>No rain</span>
                <span style={{fontSize: "1.1em"}}>today!</span>
            </div>
        </div>
    </div>
  );

  const rightSidePhilly = (
    <div class="right-side-philly">
        <span>
            <span>Now</span>
            <img src="sun.png" id="sun-icon" alt="Sun"/>
            <span>36<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>3PM</span>
            <img src="sun.png" id="sun-icon" alt="Sun"/>
            <span>35<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>4PM</span>
            <img src="sun.png" id="sun-icon" alt="Sun" />
            <span>35<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>5PM</span>
            <img src="cloud.png" id="cloud-icon" alt="Cloud" />
            <span>29<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>6PM</span>
            <img src="cloud.png" id="cloud-icon" alt="Cloud" />
            <span>27<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>7PM</span>
            <img src="cloud.png" id="cloud-icon" alt="Cloud" />
            <span>26<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>8PM</span>
            <img src="cloud.png" id="cloud-icon" alt="Cloud" />
            <span>25<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>9PM</span>
            <img src="rain.png" id="rain-icon" alt="Rain" />
            <span>24<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>10PM</span>
            <img src="rain.png" id="rain-icon" alt="Rain" />
            <span>23<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>11PM</span>
            <img src="rain.png" id="rain-icon" alt="Rain" />
            <span>22<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>12AM</span>
            <img src="rain.png" id="rain-icon" alt="Rain" />
            <span>22<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>1AM</span>
            <img src="cloud.png" id="cloud-icon" alt="Cloud" />
            <span>23<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>2AM</span>
            <img src="cloud.png" id="cloud-icon" alt="Cloud" />
            <span>24<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
    </div>
  );

  const rightSideMiami = (
    <div class="right-side-miami">
      <span>
          <span>Now</span>
          <img src="sun.png" id="sun-icon" alt="Sun" />
          <span>77<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>3PM</span>
          <img src="sun.png" id="sun-icon" alt="Sun" />
          <span>79<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>4PM</span>
          <img src="sun.png" id="sun-icon" alt="Sun" />
          <span>81<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>5PM</span>
          <img src="sun.png" id="sun-icon" alt="Sun" />
          <span>81<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>6PM</span>
          <img src="sun.png" id="sun-icon" alt="Sun" />
          <span>76<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>7PM</span>
          <img src="cloud.png" id="cloud-icon" alt="Cloud" />
          <span>74<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>8PM</span>
          <img src="cloud.png" id="cloud-icon" alt="Cloud" />
          <span>73<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>9PM</span>
          <img src="cloud.png" id="cloud-icon" alt="Cloud" />
          <span>71<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>10PM</span>
          <img src="cloud.png" id="cloud-icon" alt="Cloud" />
          <span>71<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>11PM</span>
          <img src="cloud.png" id="cloud-icon" alt="Cloud" />
          <span>70<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>12AM</span>
          <img src="cloud.png" id="cloud-icon" alt="Cloud" />
          <span>69<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>1AM</span>
          <img src="cloud.png" id="cloud-icon" alt="Cloud" />
          <span>68<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
      <span>
          <span>2AM</span>
          <img src="cloud.png" id="cloud-icon" alt="Cloud" />
          <span>66<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
      </span>
  </div>
  );

  const bottomDivPhilly = (
    <div class="bottom-div-philly">
        <span>
            <span>40<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Today</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span>22<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>41<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Fri</span>
            <img src="cloud.png" id="small-cloud-icon" alt="Cloud" />
            <span>25<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>35<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Sat</span>
            <img src="cloud.png" id="small-cloud-icon" alt="Cloud" />
            <span>19<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>30<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Sun</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span>13<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>32<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Mon</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span>17<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>39<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Tues</span>
            <img src="rain.png" id="small-rain-icon" alt="Rain" />
            <span>28<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>36<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Wed</span>
            <img src="rain.png" id="small-rain-icon" alt="Rain" />
            <span>20<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span style={{border: "none"}}>
            <span style={{border: "none"}}>29<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days" style={{border: "none"}}>Thurs</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span style={{border: "none"}}>11<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
    </div>
  );

  const bottomDivMiami = (
    <div class="bottom-div-miami">
        <span>
            <span>81<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Today</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span>69<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>75<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Fri</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span>61<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>76<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Sat</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span>66<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>70<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Sun</span>
            <img src="rain.png" id="small-rain-icon" alt="Rain" />
            <span>60<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>70<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Mon</span>
            <img src="cloud.png" id="small-cloud-icon" alt="Cloud" />
            <span>52<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>63<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Tues</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span>47<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span>
            <span>69<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days">Wed</span>
            <img src="sun.png" id="small-sun-icon" alt="Sun" />
            <span>45<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
        <span style={{border: "none"}}>
            <span style={{border: "none"}}>73<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
            <span id="days" style={{border: "none"}}>Thurs</span>
            <img src="cloud.png" id="small-cloud-icon" alt="Cloud" />
            <span style={{border: "none"}}>63<sup style={{fontSize: "0.7em", verticalAlign: "top", position: "relative", top: "-0.5em"}}>o</sup></span>
        </span>
    </div>
  );

  return (
    <div className="phone-container">
      <div className="phone-screen">

        <div className="top-bar">
          <span id="time">2:12</span>
          <div id="camera-bar"></div>
          <span>
            <i className="fa-solid fa-signal"></i>
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-battery-full"></i>
          </span>
        </div>

        <div className="location-div">
          <div className="location-spacer"></div>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <span className="location-name">{city}</span>
          </div>
          <div className="menu-icon">
            <button id="menu-button" onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>

            {menuOpen && (
              <div className="menu-dropdown">
                <button id="menu-location" onClick={toggleCity}>
                  {city === 'Philadelphia' ? 'Miami' : 'Philadelphia'}
                </button>
              </div>
            )}

          </div>
        </div>

        <div className="top-div">
          {city === 'Philadelphia' ? (
            <>
              {leftSidePhilly}
              {rightSidePhilly}
            </>
          ) : (
            <>
              {leftSideMiami}
              {rightSideMiami}
            </>
          )}
        </div>

        {city === 'Philadelphia' ? (
          <>
            {bottomDivPhilly}
          </>
        ) : (
          <>
            {bottomDivMiami}
          </>
        )}

        <div className="home-bar">
          <div className="bar"></div>
        </div>

      </div>
    </div>
  );
};

export default App;
