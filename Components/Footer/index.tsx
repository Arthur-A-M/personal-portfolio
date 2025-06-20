import Image from "next/image";

import styles from "./footer.module.css";

import LinkedIn from "@/public/linkedin.svg";
import GitHub from "@/public/github.svg";
import Gmail from "@/public/gmail.svg";

export default function Footer() {
    return (
        <footer>
            <nav id="socials" className={styles.footerNav}>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
                </a>
                <a className={styles.linkedIn} href="/" target="_blank" rel="noopener noreferrer">
                    <Image src={GitHub} alt="GitHub" width={24} height={24} />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <Image src={Gmail} alt="Gmail" width={24} height={24} />
                </a>
            </nav>
        </footer>
    );
}