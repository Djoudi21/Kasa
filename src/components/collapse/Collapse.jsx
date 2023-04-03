import styles from '../../css/_Collapse.module.css';
import {useState} from 'react'
import CollapseHeader from "./CollapseHeader";
import CollapseBody from "./CollapseBody";

export default function Collapse({title, text, list}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen( !isOpen)
    }

    return (
        <div className={styles.container}>
            <CollapseHeader onClick={handleClick} isOpen={isOpen} title={title} />
            <CollapseBody text={text} list={list} isOpen={isOpen} />
        </div>
    );
}
