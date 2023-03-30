import styles from '../../css/_Collapse.module.css';
import ChevronUpAndDown from "./ChevronUpAndDown";

export default function CollapseHeader({title, isOpen, onClick, screenSize}) {
    const handleClick = () => {
        onClick();
    }

    return (
        <div className={styles.toto}>
            <h1 className={styles.title}>{title}</h1>
            <ChevronUpAndDown onClick={handleClick} isOpen={isOpen} screenSize={screenSize}/>
        </div>
    );
}
