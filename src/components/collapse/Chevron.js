import styles from '../../css/_Collapse.module.css';
import {useEffect, useState} from 'react'
import ChevronUp from "./ChevronUp";
import ChevronDown from "./ChevronDown";

export default function Collapse({isOpen, onClick, screenSize}) {

    const handleClick = () => {
        onClick();
    }

    return (
        <div onClick={handleClick}>
            {isOpen ? (
                screenSize > 1200 ? (
                    <ChevronUp width={24} height={14} onClick={handleClick} />
                ) : (
                    <ChevronUp width={16} height={10} onClick={handleClick} />
                )
            ) : (
                screenSize > 1200 ? (
                    <ChevronDown width={24} height={14} onClick={handleClick} />
                ) : (
                    <ChevronDown width={16} height={10} onClick={handleClick} />
                )
            )}
        </div>
    );
}
