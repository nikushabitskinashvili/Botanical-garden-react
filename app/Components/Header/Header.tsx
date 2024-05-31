import Image from "next/image";
import Styles from "./Header.module.css";
import Headerlinks from "./Header-links";

const Header = () => {
    return (
        <header className={Styles.header}>
            <div className={`${Styles.wrapper} ${Styles.cont}`}>
                <div className={Styles.container}>
                    <Image src={'header-img.svg'} alt="header" width={59} height={59} />
                    <div className={Styles.txt}>
                        <h3>Mist Gardens</h3>
                        <p>Museum & Botanical Garden</p>
                    </div>
                </div>
                <div className={Styles.links}>
                    <Headerlinks name='Home' border="none" />
                    <Headerlinks name='Visit' border="none" />
                    <Headerlinks name='Exhibitions' border="none" />
                    <Headerlinks name='Programs & Events' border="none" />
                    <Headerlinks name='Store' border="none" />
                    <Headerlinks btn='Membership' border="2px solid var(--Primary, #475F45)" />
                </div>
            </div>
        </header>

    )
}

export default Header;