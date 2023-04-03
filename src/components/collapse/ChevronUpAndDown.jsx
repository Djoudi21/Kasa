import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from '../../css/_Collapse.module.css';

import {faChevronUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";
export default function ChevronUpAndDown({isOpen, onClick}) {

    const handleClick = () => {
        onClick();
    }

    return (
        <div className={styles.flexCenter}>
            {isOpen ? (
                <FontAwesomeIcon icon={faChevronUp} className={styles.chevron} onClick={handleClick} />
            ) : (
                <FontAwesomeIcon className={styles.chevron} icon={faChevronDown} onClick={handleClick} />
                )}
        </div>
    );
}
