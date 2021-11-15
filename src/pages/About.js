import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

function About() {
    return(
        <div>
            <Header/>
            <Hero 
                title = "About me"
                backgroundImage = "../img/home-img.png"
            />
        </div>
    )
}

export default About;