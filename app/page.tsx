import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="flex justify-center">
          <a href="/" target="_blank" rel="noopener noreferrer">About</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Tech stack</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Socials</a>
        </nav>
        <hr />
      </header>
      <main>
        <div>
          <div className="flex justify-center">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </div>
          <h3 className="text-center">Name</h3>
          <h5 className="text-center">Title</h5>
          <p className="text-center">Sub title</p>
        </div>
        <hr />
        <article className="flex justify-center items-center flex-col">
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
        </article>
        <hr />
        <section className="flex justify-center items-center flex-col">
          <h2>Portfolio</h2>
          <ul className="flex flex-wrap gap-8">
            <li>project1</li>
            <li>project2</li>
            <li>project3</li>
            <li>See more</li>
          </ul>
        </section>
        <hr />
        <section className="flex justify-center items-center flex-col">
          <h3>tech stack</h3>
          <ul className="flex flex-wrap gap-8">
            <li>tech1</li>
            <li>tech2</li>
            <li>tech3</li>
          </ul>
        </section>
      </main>
      <hr />
      <footer>
        <nav className="flex justify-center">
          <a href="/" target="_blank" rel="noopener noreferrer">Linked in</a>
          <a href="/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Email</a>
        </nav>
      </footer>
    </div>
  );
}
