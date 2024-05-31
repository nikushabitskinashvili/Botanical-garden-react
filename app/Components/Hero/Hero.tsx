import Image from "next/image";
import Styles from "./Hero.module.css";
const Hero = () => {
    return (
        <div className={`${Styles.container} ${Styles.cont}`}>
            <div className={Styles.txt}>
                <h2>A beatiful adventure awaits</h2>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Tincidunt facilisis nunc
                </p>
                <div className={Styles.btn}>
                    <button className={Styles.button}>Buy Tickets</button>
                    <button className={`${Styles.button} ${Styles.more}`}>Learn More</button>
                </div>
            </div>
            <div className={Styles.img}>
                <Image src={'hero-img.svg'} alt="hero" width={458} height={640}></Image>
            </div>
            
        </div>
    )
}

export default Hero;