import styles from '../css/_Gallery.module.css';
import {useEffect, useState} from "react";

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
    return (
        <>
            <section className={styles.container}>
                <svg  onClick={previous} className={styles.left} width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.51 1.87003L10.74 0.100025L0.83995 10L10.7399 19.9L12.5099 18.13L4.37995 10L12.51 1.87003Z" fill="white"/>
                </svg>
                {pictures && <img className={styles.img} src={src} alt=""/>}
                <svg onClick={next} className={styles.right} width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.48999 18.13L2.25999 19.9L12.16 9.99998L2.25999 0.0999756L0.48999 1.86998L8.61999 9.99998L0.48999 18.13Z" fill="white"/>
                </svg>
            </section>
        </>
    );
}
