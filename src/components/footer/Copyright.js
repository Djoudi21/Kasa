import styles from '../../css/_Footer.module.css';

export default function Footer({screenSize, width, height}) {
    return (
        <div data-testid="copyright" className={styles.copyright}>
            {
                screenSize > 1200 ? (
                    <svg width={width} height={height} viewBox="0 0 190 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.93867 10.036C7.32667 10.036 9.18667 8.164 9.18667 5.776C9.18667 3.388 7.37467 1.564 4.96267 1.564C2.55067 1.564 0.714672 3.436 0.714672 5.8C0.714672 8.164 2.55067 10.036 4.93867 10.036ZM4.93867 9.496C2.85067 9.496 1.27867 7.864 1.27867 5.8C1.27867 3.736 2.85067 2.104 4.96267 2.104C7.07467 2.104 8.62267 3.688 8.62267 5.776C8.62267 7.864 7.02667 9.496 4.93867 9.496ZM5.07067 8.272C5.92267 8.272 6.63067 7.888 7.01467 7.288L6.33067 6.808C6.03067 7.252 5.57467 7.456 5.05867 7.456C4.14667 7.456 3.45067 6.808 3.45067 5.8C3.45067 4.792 4.14667 4.144 5.05867 4.144C5.57467 4.144 6.03067 4.348 6.33067 4.792L7.01467 4.3C6.63067 3.712 5.92267 3.328 5.07067 3.328C3.59467 3.328 2.53867 4.348 2.53867 5.8C2.53867 7.252 3.59467 8.272 5.07067 8.272ZM15.1544 8.956L17.7224 6.484C18.8624 5.392 19.1024 4.66 19.1024 3.844C19.1024 2.404 17.9744 1.504 16.2224 1.504C14.9144 1.504 13.7984 1.972 13.1504 2.776L13.9664 3.484C14.4824 2.86 15.2144 2.572 16.1144 2.572C17.2904 2.572 17.9024 3.1 17.9024 3.964C17.9024 4.492 17.7344 5.02 16.8464 5.884L13.4264 9.184V10H19.4624V8.956H15.1544ZM23.8459 10.096C25.8019 10.096 27.2659 8.536 27.2659 5.8C27.2659 3.064 25.8019 1.504 23.8459 1.504C21.8779 1.504 20.4139 3.064 20.4139 5.8C20.4139 8.536 21.8779 10.096 23.8459 10.096ZM23.8459 9.028C22.5259 9.028 21.6139 7.948 21.6139 5.8C21.6139 3.652 22.5259 2.572 23.8459 2.572C25.1539 2.572 26.0659 3.652 26.0659 5.8C26.0659 7.948 25.1539 9.028 23.8459 9.028ZM29.9786 8.956L32.5466 6.484C33.6866 5.392 33.9266 4.66 33.9266 3.844C33.9266 2.404 32.7986 1.504 31.0466 1.504C29.7386 1.504 28.6226 1.972 27.9746 2.776L28.7906 3.484C29.3066 2.86 30.0386 2.572 30.9386 2.572C32.1146 2.572 32.7266 3.1 32.7266 3.964C32.7266 4.492 32.5586 5.02 31.6706 5.884L28.2506 9.184V10H34.2866V8.956H29.9786ZM38.6701 10.096C40.6261 10.096 42.0901 8.536 42.0901 5.8C42.0901 3.064 40.6261 1.504 38.6701 1.504C36.7021 1.504 35.2381 3.064 35.2381 5.8C35.2381 8.536 36.7021 10.096 38.6701 10.096ZM38.6701 9.028C37.3501 9.028 36.4381 7.948 36.4381 5.8C36.4381 3.652 37.3501 2.572 38.6701 2.572C39.9781 2.572 40.8901 3.652 40.8901 5.8C40.8901 7.948 39.9781 9.028 38.6701 9.028ZM53.1007 10H54.5047L50.6887 5.38L54.2767 1.6H52.9087L48.3487 6.292V1.6H47.1487V10H48.3487V7.828L49.8847 6.268L53.1007 10ZM57.7693 3.58C56.7493 3.58 55.8013 3.868 55.1413 4.396L55.6213 5.26C56.1133 4.84 56.8813 4.576 57.6373 4.576C58.7773 4.576 59.3413 5.14 59.3413 6.112V6.34H57.5173C55.6213 6.34 54.9613 7.18 54.9613 8.2C54.9613 9.304 55.8733 10.072 57.3133 10.072C58.3093 10.072 59.0173 9.736 59.4013 9.16V10H60.4933V6.16C60.4933 4.42 59.5093 3.58 57.7693 3.58ZM57.5053 9.184C56.6293 9.184 56.1013 8.788 56.1013 8.152C56.1013 7.612 56.4253 7.168 57.5653 7.168H59.3413V8.056C59.0533 8.788 58.3693 9.184 57.5053 9.184ZM64.4492 10.072C66.1412 10.072 67.1972 9.34 67.1972 8.188C67.1972 5.716 63.1652 6.94 63.1652 5.44C63.1652 4.936 63.6572 4.564 64.6652 4.564C65.2892 4.564 65.9252 4.696 66.5012 5.068L66.9932 4.156C66.4412 3.796 65.5052 3.58 64.6772 3.58C63.0452 3.58 62.0252 4.348 62.0252 5.488C62.0252 8.02 66.0452 6.784 66.0452 8.212C66.0452 8.752 65.6012 9.076 64.5332 9.076C63.7052 9.076 62.8412 8.8 62.3012 8.416L61.8212 9.328C62.3492 9.748 63.3932 10.072 64.4492 10.072ZM70.9529 3.58C69.9329 3.58 68.9849 3.868 68.3249 4.396L68.8049 5.26C69.2969 4.84 70.0649 4.576 70.8209 4.576C71.9609 4.576 72.5249 5.14 72.5249 6.112V6.34H70.7009C68.8049 6.34 68.1449 7.18 68.1449 8.2C68.1449 9.304 69.0569 10.072 70.4969 10.072C71.4929 10.072 72.2009 9.736 72.5849 9.16V10H73.6769V6.16C73.6769 4.42 72.6929 3.58 70.9529 3.58ZM70.6889 9.184C69.8129 9.184 69.2849 8.788 69.2849 8.152C69.2849 7.612 69.6089 7.168 70.7489 7.168H72.5249V8.056C72.2369 8.788 71.5529 9.184 70.6889 9.184ZM76.0848 10.072C76.5168 10.072 76.8768 9.724 76.8768 9.244C76.8768 8.764 76.5168 8.428 76.0848 8.428C75.6408 8.428 75.2688 8.764 75.2688 9.244C75.2688 9.724 75.6408 10.072 76.0848 10.072ZM88.1942 10H89.4542L85.6382 1.6H84.4502L80.6462 10H81.8822L82.8062 7.9H87.2702L88.1942 10ZM83.2262 6.94L85.0382 2.824L86.8502 6.94H83.2262ZM90.5393 10H91.6913V1.096H90.5393V10ZM93.8908 10H95.0428V1.096H93.8908V10ZM101.569 4.708V3.64H100.465V10H101.617V6.832C101.617 5.44 102.385 4.684 103.621 4.684C103.705 4.684 103.789 4.684 103.885 4.696V3.58C102.769 3.58 101.977 3.964 101.569 4.708ZM105.881 2.416C106.337 2.416 106.661 2.08 106.661 1.648C106.661 1.24 106.325 0.916 105.881 0.916C105.437 0.916 105.101 1.252 105.101 1.672C105.101 2.092 105.437 2.416 105.881 2.416ZM105.305 10H106.457V3.64H105.305V10ZM113.648 3.64V4.624C113.108 3.928 112.244 3.58 111.296 3.58C109.46 3.58 108.068 4.816 108.068 6.652C108.068 8.488 109.46 9.736 111.296 9.736C112.208 9.736 113.036 9.412 113.588 8.752V9.256C113.588 10.696 112.904 11.392 111.404 11.392C110.468 11.392 109.544 11.068 108.956 10.564L108.404 11.452C109.1 12.076 110.276 12.4 111.44 12.4C113.6 12.4 114.74 11.38 114.74 9.136V3.64H113.648ZM111.428 8.728C110.144 8.728 109.232 7.876 109.232 6.652C109.232 5.416 110.144 4.588 111.428 4.588C112.7 4.588 113.612 5.416 113.612 6.652C113.612 7.876 112.7 8.728 111.428 8.728ZM120.338 3.58C119.366 3.58 118.574 3.928 118.094 4.54V1.096H116.942V10H118.094V6.724C118.094 5.344 118.886 4.612 120.11 4.612C121.202 4.612 121.826 5.224 121.826 6.472V10H122.978V6.34C122.978 4.468 121.886 3.58 120.338 3.58ZM128.326 8.8C128.086 8.992 127.762 9.1 127.426 9.1C126.79 9.1 126.43 8.716 126.43 8.032V4.588H128.254V3.64H126.43V2.248H125.278V3.64H124.198V4.588H125.278V8.08C125.278 9.364 126.01 10.072 127.294 10.072C127.81 10.072 128.338 9.928 128.686 9.628L128.326 8.8ZM131.902 10.072C133.594 10.072 134.65 9.34 134.65 8.188C134.65 5.716 130.618 6.94 130.618 5.44C130.618 4.936 131.11 4.564 132.118 4.564C132.742 4.564 133.378 4.696 133.954 5.068L134.446 4.156C133.894 3.796 132.958 3.58 132.13 3.58C130.498 3.58 129.478 4.348 129.478 5.488C129.478 8.02 133.498 6.784 133.498 8.212C133.498 8.752 133.054 9.076 131.986 9.076C131.158 9.076 130.294 8.8 129.754 8.416L129.274 9.328C129.802 9.748 130.846 10.072 131.902 10.072ZM140.417 4.708V3.64H139.313V10H140.465V6.832C140.465 5.44 141.233 4.684 142.469 4.684C142.553 4.684 142.637 4.684 142.733 4.696V3.58C141.617 3.58 140.825 3.964 140.417 4.708ZM149.842 6.856C149.842 4.9 148.534 3.58 146.698 3.58C144.862 3.58 143.506 4.936 143.506 6.82C143.506 8.716 144.874 10.072 146.926 10.072C147.982 10.072 148.858 9.712 149.434 9.04L148.798 8.296C148.33 8.812 147.706 9.064 146.962 9.064C145.702 9.064 144.802 8.32 144.658 7.204H149.818C149.83 7.096 149.842 6.952 149.842 6.856ZM146.698 4.552C147.814 4.552 148.618 5.308 148.738 6.376H144.658C144.778 5.296 145.594 4.552 146.698 4.552ZM153.266 10.072C154.958 10.072 156.014 9.34 156.014 8.188C156.014 5.716 151.982 6.94 151.982 5.44C151.982 4.936 152.474 4.564 153.482 4.564C154.106 4.564 154.742 4.696 155.318 5.068L155.81 4.156C155.258 3.796 154.322 3.58 153.494 3.58C151.862 3.58 150.842 4.348 150.842 5.488C150.842 8.02 154.862 6.784 154.862 8.212C154.862 8.752 154.418 9.076 153.35 9.076C152.522 9.076 151.658 8.8 151.118 8.416L150.638 9.328C151.166 9.748 152.21 10.072 153.266 10.072ZM163.201 6.856C163.201 4.9 161.893 3.58 160.057 3.58C158.221 3.58 156.865 4.936 156.865 6.82C156.865 8.716 158.233 10.072 160.285 10.072C161.341 10.072 162.217 9.712 162.793 9.04L162.157 8.296C161.689 8.812 161.065 9.064 160.321 9.064C159.061 9.064 158.161 8.32 158.017 7.204H163.177C163.189 7.096 163.201 6.952 163.201 6.856ZM160.057 4.552C161.173 4.552 161.977 5.308 162.097 6.376H158.017C158.137 5.296 158.953 4.552 160.057 4.552ZM165.905 4.708V3.64H164.801V10H165.953V6.832C165.953 5.44 166.721 4.684 167.957 4.684C168.041 4.684 168.125 4.684 168.221 4.696V3.58C167.105 3.58 166.313 3.964 165.905 4.708ZM174.399 3.64L172.167 8.74L169.983 3.64H168.783L171.567 10H172.743L175.527 3.64H174.399ZM182.174 6.856C182.174 4.9 180.866 3.58 179.03 3.58C177.194 3.58 175.838 4.936 175.838 6.82C175.838 8.716 177.206 10.072 179.258 10.072C180.314 10.072 181.19 9.712 181.766 9.04L181.13 8.296C180.662 8.812 180.038 9.064 179.294 9.064C178.034 9.064 177.134 8.32 176.99 7.204H182.15C182.162 7.096 182.174 6.952 182.174 6.856ZM179.03 4.552C180.146 4.552 180.95 5.308 181.07 6.376H176.99C177.11 5.296 177.926 4.552 179.03 4.552ZM188.622 1.096V4.6C188.094 3.916 187.302 3.58 186.402 3.58C184.542 3.58 183.186 4.876 183.186 6.82C183.186 8.764 184.542 10.072 186.402 10.072C187.338 10.072 188.154 9.712 188.67 8.992V10H189.774V1.096H188.622ZM186.498 9.064C185.274 9.064 184.35 8.176 184.35 6.82C184.35 5.464 185.274 4.588 186.498 4.588C187.71 4.588 188.634 5.464 188.634 6.82C188.634 8.176 187.71 9.064 186.498 9.064Z" fill="white"/>
                    </svg>
                ) : (
                    <svg width={width} height={height} viewBox="0 0 190 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.93867 10.036C7.32667 10.036 9.18667 8.164 9.18667 5.776C9.18667 3.388 7.37467 1.564 4.96267 1.564C2.55067 1.564 0.714672 3.436 0.714672 5.8C0.714672 8.164 2.55067 10.036 4.93867 10.036ZM4.93867 9.496C2.85067 9.496 1.27867 7.864 1.27867 5.8C1.27867 3.736 2.85067 2.104 4.96267 2.104C7.07467 2.104 8.62267 3.688 8.62267 5.776C8.62267 7.864 7.02667 9.496 4.93867 9.496ZM5.07067 8.272C5.92267 8.272 6.63067 7.888 7.01467 7.288L6.33067 6.808C6.03067 7.252 5.57467 7.456 5.05867 7.456C4.14667 7.456 3.45067 6.808 3.45067 5.8C3.45067 4.792 4.14667 4.144 5.05867 4.144C5.57467 4.144 6.03067 4.348 6.33067 4.792L7.01467 4.3C6.63067 3.712 5.92267 3.328 5.07067 3.328C3.59467 3.328 2.53867 4.348 2.53867 5.8C2.53867 7.252 3.59467 8.272 5.07067 8.272ZM15.1544 8.956L17.7224 6.484C18.8624 5.392 19.1024 4.66 19.1024 3.844C19.1024 2.404 17.9744 1.504 16.2224 1.504C14.9144 1.504 13.7984 1.972 13.1504 2.776L13.9664 3.484C14.4824 2.86 15.2144 2.572 16.1144 2.572C17.2904 2.572 17.9024 3.1 17.9024 3.964C17.9024 4.492 17.7344 5.02 16.8464 5.884L13.4264 9.184V10H19.4624V8.956H15.1544ZM23.8459 10.096C25.8019 10.096 27.2659 8.536 27.2659 5.8C27.2659 3.064 25.8019 1.504 23.8459 1.504C21.8779 1.504 20.4139 3.064 20.4139 5.8C20.4139 8.536 21.8779 10.096 23.8459 10.096ZM23.8459 9.028C22.5259 9.028 21.6139 7.948 21.6139 5.8C21.6139 3.652 22.5259 2.572 23.8459 2.572C25.1539 2.572 26.0659 3.652 26.0659 5.8C26.0659 7.948 25.1539 9.028 23.8459 9.028ZM29.9786 8.956L32.5466 6.484C33.6866 5.392 33.9266 4.66 33.9266 3.844C33.9266 2.404 32.7986 1.504 31.0466 1.504C29.7386 1.504 28.6226 1.972 27.9746 2.776L28.7906 3.484C29.3066 2.86 30.0386 2.572 30.9386 2.572C32.1146 2.572 32.7266 3.1 32.7266 3.964C32.7266 4.492 32.5586 5.02 31.6706 5.884L28.2506 9.184V10H34.2866V8.956H29.9786ZM38.6701 10.096C40.6261 10.096 42.0901 8.536 42.0901 5.8C42.0901 3.064 40.6261 1.504 38.6701 1.504C36.7021 1.504 35.2381 3.064 35.2381 5.8C35.2381 8.536 36.7021 10.096 38.6701 10.096ZM38.6701 9.028C37.3501 9.028 36.4381 7.948 36.4381 5.8C36.4381 3.652 37.3501 2.572 38.6701 2.572C39.9781 2.572 40.8901 3.652 40.8901 5.8C40.8901 7.948 39.9781 9.028 38.6701 9.028ZM53.1007 10H54.5047L50.6887 5.38L54.2767 1.6H52.9087L48.3487 6.292V1.6H47.1487V10H48.3487V7.828L49.8847 6.268L53.1007 10ZM57.7693 3.58C56.7493 3.58 55.8013 3.868 55.1413 4.396L55.6213 5.26C56.1133 4.84 56.8813 4.576 57.6373 4.576C58.7773 4.576 59.3413 5.14 59.3413 6.112V6.34H57.5173C55.6213 6.34 54.9613 7.18 54.9613 8.2C54.9613 9.304 55.8733 10.072 57.3133 10.072C58.3093 10.072 59.0173 9.736 59.4013 9.16V10H60.4933V6.16C60.4933 4.42 59.5093 3.58 57.7693 3.58ZM57.5053 9.184C56.6293 9.184 56.1013 8.788 56.1013 8.152C56.1013 7.612 56.4253 7.168 57.5653 7.168H59.3413V8.056C59.0533 8.788 58.3693 9.184 57.5053 9.184ZM64.4492 10.072C66.1412 10.072 67.1972 9.34 67.1972 8.188C67.1972 5.716 63.1652 6.94 63.1652 5.44C63.1652 4.936 63.6572 4.564 64.6652 4.564C65.2892 4.564 65.9252 4.696 66.5012 5.068L66.9932 4.156C66.4412 3.796 65.5052 3.58 64.6772 3.58C63.0452 3.58 62.0252 4.348 62.0252 5.488C62.0252 8.02 66.0452 6.784 66.0452 8.212C66.0452 8.752 65.6012 9.076 64.5332 9.076C63.7052 9.076 62.8412 8.8 62.3012 8.416L61.8212 9.328C62.3492 9.748 63.3932 10.072 64.4492 10.072ZM70.9529 3.58C69.9329 3.58 68.9849 3.868 68.3249 4.396L68.8049 5.26C69.2969 4.84 70.0649 4.576 70.8209 4.576C71.9609 4.576 72.5249 5.14 72.5249 6.112V6.34H70.7009C68.8049 6.34 68.1449 7.18 68.1449 8.2C68.1449 9.304 69.0569 10.072 70.4969 10.072C71.4929 10.072 72.2009 9.736 72.5849 9.16V10H73.6769V6.16C73.6769 4.42 72.6929 3.58 70.9529 3.58ZM70.6889 9.184C69.8129 9.184 69.2849 8.788 69.2849 8.152C69.2849 7.612 69.6089 7.168 70.7489 7.168H72.5249V8.056C72.2369 8.788 71.5529 9.184 70.6889 9.184ZM76.0848 10.072C76.5168 10.072 76.8768 9.724 76.8768 9.244C76.8768 8.764 76.5168 8.428 76.0848 8.428C75.6408 8.428 75.2688 8.764 75.2688 9.244C75.2688 9.724 75.6408 10.072 76.0848 10.072ZM88.1942 10H89.4542L85.6382 1.6H84.4502L80.6462 10H81.8822L82.8062 7.9H87.2702L88.1942 10ZM83.2262 6.94L85.0382 2.824L86.8502 6.94H83.2262ZM90.5393 10H91.6913V1.096H90.5393V10ZM93.8908 10H95.0428V1.096H93.8908V10ZM101.569 4.708V3.64H100.465V10H101.617V6.832C101.617 5.44 102.385 4.684 103.621 4.684C103.705 4.684 103.789 4.684 103.885 4.696V3.58C102.769 3.58 101.977 3.964 101.569 4.708ZM105.881 2.416C106.337 2.416 106.661 2.08 106.661 1.648C106.661 1.24 106.325 0.916 105.881 0.916C105.437 0.916 105.101 1.252 105.101 1.672C105.101 2.092 105.437 2.416 105.881 2.416ZM105.305 10H106.457V3.64H105.305V10ZM113.648 3.64V4.624C113.108 3.928 112.244 3.58 111.296 3.58C109.46 3.58 108.068 4.816 108.068 6.652C108.068 8.488 109.46 9.736 111.296 9.736C112.208 9.736 113.036 9.412 113.588 8.752V9.256C113.588 10.696 112.904 11.392 111.404 11.392C110.468 11.392 109.544 11.068 108.956 10.564L108.404 11.452C109.1 12.076 110.276 12.4 111.44 12.4C113.6 12.4 114.74 11.38 114.74 9.136V3.64H113.648ZM111.428 8.728C110.144 8.728 109.232 7.876 109.232 6.652C109.232 5.416 110.144 4.588 111.428 4.588C112.7 4.588 113.612 5.416 113.612 6.652C113.612 7.876 112.7 8.728 111.428 8.728ZM120.338 3.58C119.366 3.58 118.574 3.928 118.094 4.54V1.096H116.942V10H118.094V6.724C118.094 5.344 118.886 4.612 120.11 4.612C121.202 4.612 121.826 5.224 121.826 6.472V10H122.978V6.34C122.978 4.468 121.886 3.58 120.338 3.58ZM128.326 8.8C128.086 8.992 127.762 9.1 127.426 9.1C126.79 9.1 126.43 8.716 126.43 8.032V4.588H128.254V3.64H126.43V2.248H125.278V3.64H124.198V4.588H125.278V8.08C125.278 9.364 126.01 10.072 127.294 10.072C127.81 10.072 128.338 9.928 128.686 9.628L128.326 8.8ZM131.902 10.072C133.594 10.072 134.65 9.34 134.65 8.188C134.65 5.716 130.618 6.94 130.618 5.44C130.618 4.936 131.11 4.564 132.118 4.564C132.742 4.564 133.378 4.696 133.954 5.068L134.446 4.156C133.894 3.796 132.958 3.58 132.13 3.58C130.498 3.58 129.478 4.348 129.478 5.488C129.478 8.02 133.498 6.784 133.498 8.212C133.498 8.752 133.054 9.076 131.986 9.076C131.158 9.076 130.294 8.8 129.754 8.416L129.274 9.328C129.802 9.748 130.846 10.072 131.902 10.072ZM140.417 4.708V3.64H139.313V10H140.465V6.832C140.465 5.44 141.233 4.684 142.469 4.684C142.553 4.684 142.637 4.684 142.733 4.696V3.58C141.617 3.58 140.825 3.964 140.417 4.708ZM149.842 6.856C149.842 4.9 148.534 3.58 146.698 3.58C144.862 3.58 143.506 4.936 143.506 6.82C143.506 8.716 144.874 10.072 146.926 10.072C147.982 10.072 148.858 9.712 149.434 9.04L148.798 8.296C148.33 8.812 147.706 9.064 146.962 9.064C145.702 9.064 144.802 8.32 144.658 7.204H149.818C149.83 7.096 149.842 6.952 149.842 6.856ZM146.698 4.552C147.814 4.552 148.618 5.308 148.738 6.376H144.658C144.778 5.296 145.594 4.552 146.698 4.552ZM153.266 10.072C154.958 10.072 156.014 9.34 156.014 8.188C156.014 5.716 151.982 6.94 151.982 5.44C151.982 4.936 152.474 4.564 153.482 4.564C154.106 4.564 154.742 4.696 155.318 5.068L155.81 4.156C155.258 3.796 154.322 3.58 153.494 3.58C151.862 3.58 150.842 4.348 150.842 5.488C150.842 8.02 154.862 6.784 154.862 8.212C154.862 8.752 154.418 9.076 153.35 9.076C152.522 9.076 151.658 8.8 151.118 8.416L150.638 9.328C151.166 9.748 152.21 10.072 153.266 10.072ZM163.201 6.856C163.201 4.9 161.893 3.58 160.057 3.58C158.221 3.58 156.865 4.936 156.865 6.82C156.865 8.716 158.233 10.072 160.285 10.072C161.341 10.072 162.217 9.712 162.793 9.04L162.157 8.296C161.689 8.812 161.065 9.064 160.321 9.064C159.061 9.064 158.161 8.32 158.017 7.204H163.177C163.189 7.096 163.201 6.952 163.201 6.856ZM160.057 4.552C161.173 4.552 161.977 5.308 162.097 6.376H158.017C158.137 5.296 158.953 4.552 160.057 4.552ZM165.905 4.708V3.64H164.801V10H165.953V6.832C165.953 5.44 166.721 4.684 167.957 4.684C168.041 4.684 168.125 4.684 168.221 4.696V3.58C167.105 3.58 166.313 3.964 165.905 4.708ZM174.399 3.64L172.167 8.74L169.983 3.64H168.783L171.567 10H172.743L175.527 3.64H174.399ZM182.174 6.856C182.174 4.9 180.866 3.58 179.03 3.58C177.194 3.58 175.838 4.936 175.838 6.82C175.838 8.716 177.206 10.072 179.258 10.072C180.314 10.072 181.19 9.712 181.766 9.04L181.13 8.296C180.662 8.812 180.038 9.064 179.294 9.064C178.034 9.064 177.134 8.32 176.99 7.204H182.15C182.162 7.096 182.174 6.952 182.174 6.856ZM179.03 4.552C180.146 4.552 180.95 5.308 181.07 6.376H176.99C177.11 5.296 177.926 4.552 179.03 4.552ZM188.622 1.096V4.6C188.094 3.916 187.302 3.58 186.402 3.58C184.542 3.58 183.186 4.876 183.186 6.82C183.186 8.764 184.542 10.072 186.402 10.072C187.338 10.072 188.154 9.712 188.67 8.992V10H189.774V1.096H188.622ZM186.498 9.064C185.274 9.064 184.35 8.176 184.35 6.82C184.35 5.464 185.274 4.588 186.498 4.588C187.71 4.588 188.634 5.464 188.634 6.82C188.634 8.176 187.71 9.064 186.498 9.064Z" fill="white"/>
                    </svg>
                )
            }
        </div>
    );
}