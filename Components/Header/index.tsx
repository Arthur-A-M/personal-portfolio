import styles from "./header.module.css";

export default function Header() {
    return (
        <header>
            <nav className={styles.headerNav}>
                <a href="/" target="_blank" rel="noopener noreferrer">About</a>
                <a href="/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                <a href="/" target="_blank" rel="noopener noreferrer">Tech stack</a>
                <a href="/" target="_blank" rel="noopener noreferrer">Socials</a>
            </nav>
            <hr />
        </header>
    );
}