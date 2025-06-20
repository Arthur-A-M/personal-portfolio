import Image from "next/image";

import {  TechStackData } from "@/public/TechStack";

import styles from "./techStack.module.css";

export default function TechStack() {
    return (
        <section id="techstack" className={styles.techStack}>
            <h3>tech stack</h3>
            <ul>
                {TechStackData.map(({ name, icon }) => (
                    <li className={styles.tech} key={name} title={name}>
                        <Image src={icon} alt={name} width={50} height={50} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
