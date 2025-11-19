import Link from "next/link";
import Image from "next/image";
import { createClient } from '@/lib/supabase/server';

async function getProjects() {
  const supabase = await createClient();
  const { data: projectArray, error } = await supabase
    .from("project")
    .select("id, title, subtitle, link, updated_at, created_at")
    .order("created_at", {ascending: false});
  
    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    return projectArray || [];
}

export default async function Projects() {
  const projectArray = await getProjects();

  return (
    <main>
      <div>
        <h1>Professional trace</h1>
        <p>Welcome to my portfolio. Here you can try everything I uploaded.</p>
        <p>Each project has its own License,</p>
        <ul>
          <li>
            <Image src="/img/others/temp-img.jpg" alt="Green Icon" width={25} height={25} />
            <p> <a href="https://creativecommons.org/licenses/by-nc/4.0/"></a>Attribution-NonCommercial</p>
          </li>
          <li>
            <Image src="/img/others/temp-img.jpg" alt="Yellow Icon" width={25} height={25} />
            <p> <a href=" https://creativecommons.org/licenses/by-nc-sa/4.0/ "></a>Attribution-NonCommercial-ShareAlike</p>
          </li>
          <li>
            <Image src="/img/others/temp-img.jpg" alt="Red Icon" width={25} height={25} />
            <p> <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"></a>Attribution-NonCommercial-NoDerivatives</p>
          </li>
        </ul>
      </div>
      {/* Gotta make this like a card, gl future me!*/}
      {projectArray.map(project => (
        <Link href={project.link} key={project.id}>
          <h2>{project.title}</h2>
          <h3>{project.subtitle}</h3>
          <h4>{new Date(project.updated_at).toLocaleDateString()}</h4>
          <h4>{new Date(project.created_at).toLocaleDateString()}</h4>
        </Link>
      ))}
    </main>
  );
}
