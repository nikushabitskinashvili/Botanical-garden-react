import Styles from "./Header-links.module.css"

type Props = {
    name?: string;
    btn?: string;
}
const Headerlinks = (props: Props) => {

    return (

            <div className={Styles.container}>
                <ul>
                    <li>
                        <a href="#">{props.name}</a>
                    </li>
                    
                </ul>
                <div className={Styles.button}>{props.btn}</div>
            </div>

    )
}

export default Headerlinks;