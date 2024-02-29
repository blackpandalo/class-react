import React from 'react'
import hero from "../assets/images/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis,_September_2023_(cropped) (1).jpg"

const Hero = (props) => {
    // destructuring the props
    const { heading, image} = props
  return (
    <div style={{backgroundColor: "purple", color: "white"}}>
        <div className="">
            <img src={image} alt="" />
        </div>
        {/* <h1>Welcome to my page</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero