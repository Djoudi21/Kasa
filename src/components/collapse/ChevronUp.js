export default function ChevronUp({width, height, onClick}) {
    const handleClick = () => {
        onClick();
    }
    return (
        <>
            <svg onClick={handleClick} width={width} height={height} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8495 9.23864L15.2079 7.86941L7.60994 0.261718L0.0120036 7.87711L1.37042 9.23864L7.60994 2.9848L13.8495 9.23864Z" fill="white"/>
            </svg>
        </>
    );
}
