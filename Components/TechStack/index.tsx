import Image from "next/image";

import { TechStackIcons } from "@/public/TechStack";

import styles from "./techStack.module.css";

export default function TechStack() {
    return (
        <section id="techstack" className={styles.techStack}>
            <h3>tech stack</h3>
            <ul>
                {Object.keys(TechStackIcons).map(iconName => (
                    <li key={iconName}>
                        <Image src={TechStackIcons[iconName]} alt={iconName} width={50} height={50} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
