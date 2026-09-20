import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import JsonLd from "@/components/JsonLd";
import { projectsSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={projectsSchema()} />
      <Hero />
      <FeaturedProjects />
    </>
  );
}
