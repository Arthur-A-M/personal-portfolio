import styles from "./article.module.css";

export default function Article() {
    return (
        <article id="about" className={styles.article}>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>Paragraph 3</p>
        </article>
    );
}