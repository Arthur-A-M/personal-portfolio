import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="flex justify-center">
          <a href="/" target="_blank" rel="noopener noreferrer">link1</a>
          <a href="/" target="_blank" rel="noopener noreferrer">link2</a>
          <a href="/" target="_blank" rel="noopener noreferrer">link3</a>
        </nav>
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
        <p className="text-center">main</p>
      </main>
      <footer>
        <p className="text-center">Footer</p>
      </footer>
    </div>
  );
}
