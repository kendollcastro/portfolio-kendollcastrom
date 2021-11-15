import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
    return(
        <div>
            <Header/>
            <Hero 
                title = "Kendoll Castro Matarrita"
                backgroundImage = "../img/home-img.png"
                subtitle = "Web developer and designer"
            />
        </div>
    )
}

export default Home;