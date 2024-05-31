import Image from "next/image";
import Styles from "./Hero.module.css";


const Hero = () => {
    return (
        
      <Image src={'hero-img.svg'} alt="header-img" width={458} height={640}></Image>
    )
}

export default Hero;