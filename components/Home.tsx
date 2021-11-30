import React, { useState } from "react";
import Navigation from './Navigation.tsx';
import Portfolio from './Portfolio.tsx';
import Skills from './Skills.tsx';
import About from './About.tsx';
import Contact from './Contact.tsx';

const Home = function() {
  const [portfolio, viewPortfolio] = useState(false);
  const [about, viewAbout] = useState(true);
  const [skills, viewSkills] = useState(false);
  const [contact, viewContact] = useState(false);

  function renderPage() {
    if (skills) {
      return <Skills/>
    }
    if (contact) {
      return <Contact/>
    }
    if (about) {
      return <About/>
    }
    if (portfolio) {
      return <Portfolio/>
    }
  }
  
  return (
    <div>
      <Navigation viewPortfolio={viewPortfolio} viewContact={viewContact}
                  viewAbout={viewAbout} viewSkills={viewSkills} renderPage={renderPage}/>
      {renderPage()}
    </div>
  )
}

export default Home;