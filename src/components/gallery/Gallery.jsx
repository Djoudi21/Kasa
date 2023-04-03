import styles from '../../css/_Gallery.module.css';
import {useEffect, useState} from "react";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


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
    if(!pictures) {
        return null
    }
    return (
        <>
            {screenSize > 1200 ? (
                    <div className={styles.container}>
                        {pictures.length > 1 &&
                            <div className={styles.left}>
                                <ChevronLeft  width={50} height={80} onClick={previous} />
                                {/*<FontAwesomeIcon icon={faChevronRight} className={styles.chevron} onClick={handleClick} />*/}

                            </div>
                        }
                        <img className={styles.img} src={src} alt=""/>
                        {pictures.length > 1 &&
                            <div className={styles.right}>
                                <ChevronRight width={50} height={80} onClick={next} />
                            </div>
                        }
                    </div>
                ):(
                    <div className={styles.container}>
                        {pictures.length > 1 &&
                            <div className={styles.left}>
                                <ChevronLeft width={12} height={20} onClick={previous} />
                            </div>
                        }
                        <img className={styles.img} src={src} alt=""/>
                        {pictures.length > 1 &&
                            <div className={styles.right}>
                                <ChevronRight width={12} height={20} onClick={next} />
                            </div>
                        }
                    </div>
                )}
        </>
    );
}
