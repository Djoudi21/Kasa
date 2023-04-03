import styles from '../../css/_Collapse.module.css';
import ChevronUpAndDown from "./ChevronUpAndDown";

export default function CollapseHeader({title, isOpen, onClick}) {
    const handleClick = () => {
        onClick();
    }

    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.title}>{title}</h1>
            <ChevronUpAndDown onClick={handleClick} isOpen={isOpen}/>
        </div>
    );
}