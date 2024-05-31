import Image from "next/image";
import Styles from "./Header.module.css";
import Headerlinks from "./Header-links";
import Button from "../Button/Button";
const Header = () => {
    return (
        <div className={Styles.header}>
            <div className={`${Styles.wrapper} ${Styles.cont}`}>
                <div className={Styles.container}>
                    <Image src={'header-img.svg'} alt="header" width={59} height={59} />
                    <div className={Styles.txt}>
                        <h3>Mist Gardens</h3>
                        <p>Museum & Botanical Garden</p>
                    </div>
                </div>
                <div className={Styles.links}>
                    <Headerlinks name='Home' />
                    <Headerlinks name='Visit'  />
                    <Headerlinks name='Exhibitions' />
                    <Headerlinks name='Programs & Events'  />
                    <Headerlinks name='Store' />
                    <Button name="Membership"/>
                </div>
            </div>
        </div>

    )
}

export default Header;