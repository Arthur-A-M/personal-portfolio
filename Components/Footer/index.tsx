import Image from "next/image";

import styles from "./footer.module.css";

import LinkedIn from "@/public/linkedin.svg";
import GitHub from "@/public/github.svg";
import Gmail from "@/public/gmail.svg";

export default function Footer() {
    const iconSize = 50;

    const icons: {
        name: string;
        href: string;
        image: any;
        className?: string;
    }[] = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/arthur-mendes-2a0686229/",
            image: LinkedIn,
        },
        {
            name: "GitHub",
            href: "https://github.com/Arthur-A-M",
            image: GitHub,
            className: styles.gitHub,
        },
        {
            name: "Gmail",
            href: "mailto:mendesarthur5656@gmail.com",
            image: Gmail,
        },
    ];

    return (
        <footer className={styles.footer}>
            <h3 className={styles.title}>Socials</h3>
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
