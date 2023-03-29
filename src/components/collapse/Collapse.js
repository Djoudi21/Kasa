import styles from '../../css/_Collapse.module.css';
import {useEffect, useState} from 'react'
import CollapseHeader from "./CollapseHeader";
import CollapseBody from "./CollapseBody";

export default function Collapse({title, text, list}) {
    const [isOpen, setIsOpen] = useState(false)
    let [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[screenSize]);

    function handleClick() {
        setIsOpen( !isOpen)
    }

    return (
        <div className={styles.container}>
            <CollapseHeader onClick={handleClick} isOpen={isOpen} screenSize={screenSize} title={title} />
            <CollapseBody text={text} list={list} isOpen={isOpen} />
        </div>
    );
}
