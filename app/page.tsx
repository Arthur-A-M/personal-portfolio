import Image from "next/image";

import {
  Header,
  Footer,
  TechStack,
  Article
} from "@/Components";

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
