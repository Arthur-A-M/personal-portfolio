import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer>
            <nav id="socials" className={styles.footerNav}>
                <a href="/" target="_blank" rel="noopener noreferrer">Linked in</a>
                <a href="/" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="/" target="_blank" rel="noopener noreferrer">Email</a>
            </nav>
        </footer>
    );
}