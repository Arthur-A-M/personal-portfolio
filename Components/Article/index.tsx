import styles from "./article.module.css";

export default function Article() {
    return (
        <article id="about" className={styles.article}>
            <h3 className={styles.title}>Sobre mim</h3>
            <p className={styles.paragraph}>Como desenvolvedor, 
                minha filosofia é sempre adicionar valor, 
                por meio de projetos que oferecem aplicações praticas para o usuário.
                Sempre entendendo tanto a necessidade, a dor do cliente, como a solução, 
                o produto em nível técnico; 
                evitando acidentes e uso desnecessários de recursos.
                Como estudante, acredito que o profissional deve ser T shaped. 
                Entendendo o contexto no qual está envolvida sua habilidade prática e buscando constante aprimoramento. </p>
        </article>
    );
}