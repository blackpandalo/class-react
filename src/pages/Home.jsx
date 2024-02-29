import img1 from "../assets/images/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis,_September_2023_(cropped) (1).jpg"
import Hero from "../components/Hero"
import Menu from "../components/Nav"
import ProductCard from "../components/ProductCard"

function Home () {
    return (
        <>
        {/* <Menu/> */}
        <Hero heading= "welcome to home page" image={img1} />
        <ProductCard />
        {/* <h1 className="bg-danger text-light">Welcome to Home Page</h1> */}
        {/* <div className="" style={{background: "green", height: "300px", borderRadius: "15px"}}>
            <img src={img1} alt="getready" />
        </div> */}
        </>
    )
}

export default Home