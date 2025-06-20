import Image from "next/image";

import {  TechStackData } from "@/public/TechStack";

import styles from "./techStack.module.css";

export default function TechStack() {
    return (
        <section id="techstack" className={styles.techStack}>
            <h3>tech stack</h3>
            <ul className={styles.list}>
                {TechStackData.map(({ name, icon }) => (
                    <li className={styles.tech} key={name} title={name}>
                        <Image src={icon} alt={name} width={90} height={90} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
