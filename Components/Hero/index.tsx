import Image from "next/image";

import styles from "./hero.module.css";

import Photo from '@/public/photo.jpeg';

export default function Hero(): React.ReactElement {
    return (
    <div className={styles.hero}>
        <div className={styles.photoContainer}>
            <Image
                src={Photo}
                alt="Minha foto"
                className={styles.photo}
                width={200}
                height={200}
                priority
            />
        </div>
        <h3 className={styles.title}>Arthur</h3>
        <h5 className={styles.subtitle}>Front-End Developer</h5>
    </div>
    );
};