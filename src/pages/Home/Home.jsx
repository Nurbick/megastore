import React from 'react';
import Start from "./Start/Start";
import Group from "./Group/Group";
import About from "./About/About";
import Partners from "./Partners/Partners";
import Advantages from "./ Advantages/ Advantages";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <main className="home">
            <Start/>
            <Group/>
            <About/>
            <Partners/>
            <Advantages/>
            <Contact/>
        </main>
    );
};

export default Home;