import styles from "./header.module.css";

export default function Header(): React.ReactElement {
    const anchorStyles = `${styles.anchor} ${styles.anchorActive}`;
    const navLinks = [
        { name: "Sobre mim", href: "#about" },
        { name: "Portfólio", href: "#portfolio" },
        { name: "Tech stack", href: "#techstack" },
        { name: "Contatos", href: "#socials" },
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
