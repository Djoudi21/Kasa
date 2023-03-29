import styles from '../css/_Gallery.module.css';
import {useEffect, useState} from "react";

export default function Gallery({pictures}) {
    let [src, setSrc] = useState('')
    let [index, setIndex] = useState(0)
    let [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
        if(!pictures) {
            return
        }
        setSrc(pictures[index])
    },[index, src]);

    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[screenSize]);

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
            {screenSize > 1200 ? (
                <>
                    //TODO: fix bug left arrow and styling
                    <svg onClick={previous} className={styles.left} viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                    </svg>
                    {pictures &&  <img className={styles.img} src={src} alt=""/>}
                    <svg onClick={next} className={styles.right} viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z" fill="white"/>
                    </svg>
                </>
                ):(
                    <>
                        <svg onClick={previous} className={styles.left} viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.51 1.87003L10.74 0.100025L0.83995 10L10.7399 19.9L12.5099 18.13L4.37995 10L12.51 1.87003V1.87003Z" fill="white"/>
                        </svg>
                        <svg onClick={next} className={styles.left} viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.48999 18.13L2.25999 19.9L12.16 9.99998L2.25999 0.0999756L0.48999 1.86998L8.61999 9.99998L0.48999 18.13V18.13Z" fill="white"/>
                        </svg>
                        {pictures && <img className={styles.img} src={src} alt=""/>}
                        <svg onClick={next} className={styles.right} viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.48999 18.13L2.25999 19.9L12.16 9.99998L2.25999 0.0999756L0.48999 1.86998L8.61999 9.99998L0.48999 18.13V18.13Z" fill="white"/>
                        </svg>
                    </>
                )}
        </>
    );
}
