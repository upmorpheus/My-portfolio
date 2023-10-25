import React from "react";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Services from "./Services";

const Home = () => (
    <div className="home">
        <AboutMe />
        <Experience />
        <Services />
    </div>
);

export default Home;