import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Erjie Xia</h1>
        <div>
          <p>Welcome to my little personal place!</p>
          <p>
            Here you will find a little of everything of me. Projects, notes, blog...
            Hope you enjoy!
          </p>
          <Image src="/img/others/temp-img.jpg" alt="A photo of my self" width={25} height={25} />
        </div>
        <Link href="/about"><div><p>About me</p></div></Link>
      </section>
      <section>
        <h2>Discover me!</h2>
        <ul>
          <li>
            <Link href="/trace">Work trace</Link>
          </li>
          <li>
            <Link href="/projects">My projects</Link>
          </li>
          <li>
            <Link href="/blog">Personal blog</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
