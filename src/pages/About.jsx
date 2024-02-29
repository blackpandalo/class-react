import React from "react";
import Menu from "../components/Nav";
import Loader from "../components/Loader";
import "../css/About.css"
import Hero from "../components/Hero";
import img1 from "../assets/images/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis,_September_2023_(cropped) (1).jpg"

const About = () => {

    // JSX
  const myJsx = <h3>This is awesome JSX</h3>

  const myStyle = {listStyle: "none", color: "tomato", marginTop: "2rem", width: "40%"}

  // myFavFood
  const food = ["amala", "tuwo", "jollof", "spaghetti"]
  
  return (
    <div>
      {/* <Menu/> */}
      <Loader/>
      <Hero heading= "welcome to about page" image={img1}/>
      <div>
        <h1>panda's React App 1.0</h1>
        {myJsx}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis soluta
        dicta, doloremque officia nisi dolorum sed placeat nihil aliquid optio.
      </p>

      {/* map through food array */}
      <h3>My favourite food</h3>
      {food.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>
            <p>My favourite food is {f}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;