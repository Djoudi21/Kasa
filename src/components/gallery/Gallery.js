import styles from '../../css/_Gallery.module.css';
import {useEffect, useState} from "react";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

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
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <ChevronLeft  width={50} height={80} onClick={previous} />
                        </div>
                        {pictures &&  <img className={styles.img} src={src} alt=""/>}
                        <div className={styles.right}>
                            <ChevronRight width={50} height={80} onClick={next} />
                        </div>
                    </div>
                ):(
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <ChevronLeft width={12} height={20} onClick={previous} />
                        </div>
                        {pictures && <img className={styles.img} src={src} alt=""/>}
                        <div className={styles.right}>
                            <ChevronRight width={12} height={20} onClick={next} />
                        </div>
                    </div>
                )}
        </>
    );
}
