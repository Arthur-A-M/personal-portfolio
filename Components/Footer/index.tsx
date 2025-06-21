import Image from "next/image";

import styles from "./footer.module.css";

import { icons, iconSize } from "./data";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h3 className={styles.title}>Contatos</h3>
            <nav id="socials" className={styles.footerNav}>
                {icons.map(({ name, href, image, className }) => (
                    <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                        <Image src={image} alt={name} width={iconSize} height={iconSize} />
                    </a>
                ))}
            </nav>
        </footer>
    );
}
