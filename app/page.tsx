import {
  Header,
  Footer,
  TechStack,
  Article,
  Hero
} from "@/Components";

import styles from "./home.module.css";

export default function Home(): React.ReactElement {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <hr />
        <Article />
        <hr />
        <section id="portfolio" className={styles.portfolio}>
          <h2>Portfolio</h2>
          <ul>
            <li>project1</li>
            <li>project2</li>
            <li>project3</li>
            <li>See more</li>
          </ul>
        </section>
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
