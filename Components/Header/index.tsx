import styles from "./header.module.css";

export default function Header() {
    const anchorStyles = `${styles.anchor} ${styles.anchorActive}`;
    const navLinks = [
        { name: "About", href: "/" },
        { name: "Portfolio", href: "/" },
        { name: "Tech stack", href: "/" },
        { name: "Socials", href: "/" },
    ];
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                {navLinks.map(link => (
                    <a key={link.name} className={anchorStyles} href={link.href} target="_blank" rel="noopener noreferrer">{link.name}</a>
                ))}
            </nav>
            <hr />
        </header>
    );
}
