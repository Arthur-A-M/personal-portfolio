import Image from "next/image";

import styles from "./hero.module.css";

export default function Hero(): React.ReactElement {
    return (
    <div className={styles.hero}>
        <div>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
        </div>
        <h3>Name</h3>
        <h5>Title</h5>
        <p>Sub title</p>
    </div>
    );
};