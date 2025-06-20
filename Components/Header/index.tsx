import styles from "./header.module.css";

export default function Header() {
    const anchorStyles = `${styles.anchor} ${styles.anchorActive}`;
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <a className={anchorStyles} href="/" target="_blank" rel="noopener noreferrer">About</a>
                <a className={anchorStyles} href="/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                <a className={anchorStyles} href="/" target="_blank" rel="noopener noreferrer">Tech stack</a>
                <a className={anchorStyles} href="/" target="_blank" rel="noopener noreferrer">Socials</a>
            </nav>
            <hr />
        </header>
    );
}