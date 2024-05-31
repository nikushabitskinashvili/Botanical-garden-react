import Styles from "./Header-links.module.css"

type Props = {
    name?: string;
    btn?: string;
    border:string
}
const Headerlinks = (props: Props) => {

    return (

            <div style={{border:props.border}} className={Styles.container}>
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