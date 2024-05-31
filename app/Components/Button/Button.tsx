
import styles from "./Button.module.css";

const mainPadding = {}

type Props = {
    name?: string;
}

const Button = (props: Props) => {
    return(
        <button className={styles.container}>
            {props.name}
        </button>
    )
}

export default Button;