import styles from '../../css/_Collapse.module.css';
import Chevron from "./Chevron";

export default function CollapseHeader({title, isOpen, onClick, screenSize}) {
    const handleClick = () => {
        onClick();
    }

    return (
        <div className={styles.toto}>
            <h1 className={styles.title}>{title}</h1>
            <Chevron onClick={handleClick} isOpen={isOpen} screenSize={screenSize}/>
        </div>
    );
}
