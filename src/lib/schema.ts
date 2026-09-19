import { profile, site, projects, socialHref, socialEntries, absoluteUrl } from '@/lib/data';

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: site.url,
    mainEntity: {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: profile.name,
      alternateName: site.brand,
      url: site.url,
      image: absoluteUrl('/images/profile.jpg'),
      jobTitle: profile.role,
      description: profile.bio,
      email: profile.socials.email ? `mailto:${profile.socials.email}` : undefined,
      address: {
        '@type': 'PostalAddress',
        addressLocality: profile.location,
      },
      knowsAbout: profile.skills,
      worksFor: profile.experience.map((item) => ({
        '@type': 'Organization',
        name: item.company,
      })),
      sameAs: socialEntries
        .filter(([key]) => key !== 'email')
        .map(([key, value]) => socialHref(key, value)),
    },
  };
}

export function projectsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: site.sections.projects.title,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        url: project.link,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
        image: absoluteUrl(project.image),
        author: { '@id': `${site.url}/#person` },
      },
    })),
  };
}
