import Image from "next/image";

import styles from "./footer.module.css";

import LinkedIn from "@/public/linkedin.svg";
import GitHub from "@/public/github.svg";
import Gmail from "@/public/gmail.svg";

export default function Footer() {
    return (
        <footer>
            <h3 className={styles.tittle}>Socials</h3>
            <nav id="socials" className={styles.footerNav}>
                <a href="https://www.linkedin.com/in/arthur-mendes-2a0686229/" target="_blank" rel="noopener noreferrer">
                    <Image src={LinkedIn} alt="LinkedIn" width={50} height={50} />
                </a>
                <a className={styles.linkedIn} href="https://github.com/Arthur-A-M" target="_blank" rel="noopener noreferrer">
                    <Image src={GitHub} alt="GitHub" width={50} height={50} />
                </a>
                <a href="mailto:mendesarthur5656@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Image src={Gmail} alt="Gmail" width={50} height={50} />
                </a>
            </nav>
        </footer>
    );
}