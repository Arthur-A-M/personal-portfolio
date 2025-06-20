import styles from "./header.module.css";

export default function Header() {
    const anchorStyles = `${styles.anchor} ${styles.anchorActive}`;
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Tech stack", href: "#techstack" },
        { name: "Socials", href: "#socials" },
    ];
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                {navLinks.map(link => (
                    <a key={link.name} className={anchorStyles} href={link.href} target="_self" rel="tag">{link.name}</a>
                ))}
            </nav>
        </header>
    );
}
