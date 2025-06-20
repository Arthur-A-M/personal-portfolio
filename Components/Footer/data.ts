import { gitHub, gmail, linkedIn } from "@/public/Footer";

import styles from "./footer.module.css";

    export const iconSize = 50;

    export const icons: {
        name: string;
        href: string;
        image: any;
        className?: string;
    }[] = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/arthur-mendes-2a0686229/",
            image: linkedIn,
        },
        {
            name: "GitHub",
            href: "https://github.com/Arthur-A-M",
            image: gitHub,
            className: styles.gitHub,
        },
        {
            name: "Gmail",
            href: "mailto:mendesarthur5656@gmail.com",
            image: gmail,
        },
    ];