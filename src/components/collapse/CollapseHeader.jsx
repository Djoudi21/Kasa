import styles from '../../css/_Collapse.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

export default function CollapseHeader({title, isOpen, onClick}) {
    const handleClick = () => {
        onClick();
    }

    return (
        <div className={`${styles.headerContainer}`}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.flexCenter}>
                {isOpen ? (
                    <FontAwesomeIcon icon={faChevronUp} className={styles.chevron} onClick={handleClick} />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} className={styles.chevron} onClick={handleClick} />
                )}
            </div>
        </div>
    );
}
