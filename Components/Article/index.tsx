import styles from "./article.module.css";

export default function Article(): React.ReactElement {
    const poem: string = `
    Programo app de treino porque malho há anos
    Programo jogos, pois sou gamer

    Recrio apps de tarefas porque já me familiarizei com os originais
    Recrio calculadoras, pois entendo seus cálculos

    Não crio quando apenas sei como criar
    Crio quando entendo o que vou criar
    `;
    return (
        <article id="about" className={styles.article}>
            <h3 className={styles.title}>Sobre mim</h3>
            <h4 className={styles.subtitle}>Sou um desenvolvedor pragmático e holistico. </h4>
            <p className={styles.paragraph}>
                Pragmático: Minhas criações sempre precisam ter aplicação prática.
                Sempre pensadas com base nas necessidades que observo e testados, pessoalmente para garantir sua utilidade.
            </p>
            <h5 className={styles.poemtitle}>Holístico</h5>
            <pre
                dangerouslySetInnerHTML={{
                    __html: poem,
                }}
            />
        </article>
    );
}