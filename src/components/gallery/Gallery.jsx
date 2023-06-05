import styles from '../../css/_Gallery.module.css';
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";


export default function Gallery({pictures}) {
    let [src, setSrc] = useState('')
    let [index, setIndex] = useState(0)

    useEffect(() => {
        if(!pictures) {
            return
        }
        setSrc(pictures[index])
    },[index, src]);

    function next() {
        if(index === pictures.length - 1) {
            setIndex(0)
        } else {
            setIndex(index += 1)
            src = pictures[index]
        }
    }

    function previous() {
        if(index === 0) {
            setIndex(pictures.length - 1)
        } else {
            setIndex(index -= 1)
            src = pictures[index]
        }
    }

    if(!pictures) {
        return null
    }
    return (
        <div className={styles.container}>
            {pictures.length > 1 &&
                <div className={styles.left}>
                    <FontAwesomeIcon className={`${styles.chevron} ${styles.size}`} icon={faChevronLeft} onClick={previous} />
                </div>
            }
            <span className={styles.pagination}>{index + 1}/{pictures.length}</span>
            <img className={styles.img} src={src} alt=""/>
            {pictures.length > 1 &&
                <div className={styles.right}>
                    <FontAwesomeIcon className={`${styles.chevron} ${styles.size}`} icon={faChevronRight} onClick={next} />
                </div>
            }
        </div>
    );
}
