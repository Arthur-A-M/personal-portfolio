import Image from "next/image";

import { Header, Footer } from "@/Components";

import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
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
        <hr />
        <article id="about" className={styles.article}>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
        </article>
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
        <hr />
        <section id="techstack" className={styles.techStack}>
          <h3>tech stack</h3>
          <ul>
            <li>tech1</li>
            <li>tech2</li>
            <li>tech3</li>
          </ul>
        </section>
      </main>
      <hr />
      <Footer />
    </div>
  );
}
