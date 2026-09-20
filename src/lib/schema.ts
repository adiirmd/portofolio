import { absoluteUrl, defaultCopy, profile, projects, site, socialEntries, socialHref } from "@/lib/data";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: site.url,
    mainEntity: {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: profile.name,
      alternateName: site.brand,
      url: site.url,
      image: absoluteUrl(profile.photos.home.src),
      jobTitle: defaultCopy.profile.role,
      description: defaultCopy.profile.bio,
      email: profile.socials.email ? `mailto:${profile.socials.email}` : undefined,
      address: {
        "@type": "PostalAddress",
        addressLocality: defaultCopy.profile.location,
      },
      knowsAbout: defaultCopy.profile.skills,
      worksFor: defaultCopy.profile.experience.map((item) => ({
        "@type": "Organization",
        name: item.company,
      })),
      sameAs: socialEntries.filter(([key]) => key !== "email").map(([key, value]) => socialHref(key, value)),
    },
  };
}

/** Ties every page to one site entity so search engines stop treating the
 *  routes as unrelated documents. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: profile.name,
    alternateName: site.brand,
    description: defaultCopy.meta.description,
    inLanguage: defaultCopy.htmlLang,
    publisher: { "@id": `${site.url}/#person` },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href === "/" ? "/" : `${item.href}/`),
    })),
  };
}

export function projectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: defaultCopy.sections.projects.title,
    itemListElement: projects.map((project, index) => {
      const content = defaultCopy.projects[project.id];

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: content.title,
          description: content.description,
          url: project.link,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          image: absoluteUrl(project.image.src),
          author: { "@id": `${site.url}/#person` },
        },
      };
    }),
  };
}

