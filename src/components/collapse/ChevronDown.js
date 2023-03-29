import styles from '../../css/_Banner.module.css';

export default function ChevronUp({width, height, onClick}) {
    const handleClick = () => {
        onClick();
    }
    return (
        <>
            <svg onClick={handleClick} width={width} height={height} viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.15993 0.653343L0.799927 3.02668L13.9999 16.2133L27.1999 3.01335L24.8399 0.653343L13.9999 11.4933L3.15993 0.653343Z" fill="white"/>
            </svg>
        </>
    );
}
