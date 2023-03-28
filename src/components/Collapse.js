import styles from '../css/_Collapse.module.css';
import { useState } from 'react'

export default function ErrorPage({title, text, list}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.toto}>
                <h1 className={styles.title}>{title}</h1>
                {isOpen ? (
                    <svg onClick={handleClick} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8495 9.23864L15.2079 7.86941L7.60994 0.261718L0.0120036 7.87711L1.37042 9.23864L7.60994 2.9848L13.8495 9.23864Z" fill="white"/>
                    </svg>
                ) : (   <svg onClick={handleClick} width="28" height="10" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.15993 0.653343L0.799927 3.02668L13.9999 16.2133L27.1999 3.01335L24.8399 0.653343L13.9999 11.4933L3.15993 0.653343Z" fill="white"/>
                </svg>)}
            </div>
            {text ? (<div style={{display: !isOpen ? 'none' : 'block'}} className={styles.tutu}>
                <p className={styles.text}>{text}</p>
            </div>) :
            (<div style={{display: !isOpen ? 'none' : 'block'}} className={styles.tutu}>
                {list && list.map((el, index) => (
                    <div className={styles.text} key={index}>
                        {el}
                    </div>
                ))}

            </div>)}
        </div>
    );

    function handleClick() {
        setIsOpen( !isOpen)
    }
}
