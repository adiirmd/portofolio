# adiirmd.id

My personal portfolio site. It is live at [adiirmd.id](https://adiirmd.id).

I work in IT infrastructure and data center operations, so this site is mostly a
place to keep my background, my certificates, and the side projects I build in
one tidy spot.

## What's in it

Five pages: Home, About, Certifications, Projects, and Contact.

A few things that are not obvious from the page list:

- Dark and light theme, with a toggle in the header. Your choice is remembered
  in the browser.
- English and Indonesian, also toggled from the header. English is always the
  starting language. The site never guesses from your browser or your location,
  it only switches when you click the button.
- Clicking a certificate opens it full size, since the thumbnail is too small to
  actually read.

## Built with

- Next.js 15 on the App Router
- React 18 and TypeScript
- Tailwind CSS 3
- Icons from lucide-react

The site is exported as plain static files (`output: "export"` in
`next.config.mjs`) and hosted on Vercel. Nothing runs on a server, so there is no
backend, no database, and no API to worry about.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

**One thing that trips people up on a fresh clone.** Your editor will show
"Cannot find module" errors on the image imports until you run `npm run dev` (or
`npm run build`) at least once. That is normal. Next generates a file called
`next-env.d.ts` on the first run, and that file is what tells TypeScript an image
can be imported. It is not committed on purpose. After the first run, restart the
TypeScript server in your editor and the errors go away.

Other commands:

```bash
npm run build   # build the static site into out/
npm start       # serve out/ so you can check the build before pushing
npm run lint
```

## Where the content lives

There is no text written directly inside the components. Everything comes from
`src/data` and `src/lib/i18n.ts`, so you can change what the site says without
touching any markup.

| File | What it holds |
| --- | --- |
| `src/data/profile.ts` | Name, social links, and the two profile photos |
| `src/data/projects.ts` | Project images, tech list, and links |
| `src/data/certifications.ts` | Certificate images, issuer, and dates |
| `src/data/site.ts` | Site URL, brand name, and the nav routes |
| `src/lib/i18n.ts` | Every piece of visible text, in both languages |

The split is deliberate. Things that are the same in any language, like an image
or a URL, live in `src/data`. Things that need translating live in `i18n.ts`.

## Adding a project or a certificate

For a certificate:

1. Drop the image in `src/assets/certs`.
2. Import it at the top of `src/data/certifications.ts` and add one entry.

Order does not matter here. The page sorts by issue date and shows the newest
first, so write the new entry wherever you like.

For a project:

1. Drop the image in `src/assets`.
2. Add an entry in `src/data/projects.ts`.
3. Add the title and description to `src/lib/i18n.ts`, in both the English and
   the Indonesian block.

Step 3 is not optional. The translation type is strict, so leaving one language
out will fail the build instead of quietly shipping a blank card.

## Folder layout

```
src/
  app/          routes, one folder per page, plus sitemap and robots
  assets/       images, imported as modules rather than served from public/
  components/   the UI
  data/         content that does not get translated
  lib/          i18n strings, shared types, JSON-LD builders
```

## A few things worth knowing

**The whole interface renders at 85 percent.** That comes from `zoom` on the
`html` element in `globals.css`, driven by a variable called `--app-zoom`. The
body height calculation divides by that same variable, so if you change the scale
you only change it in one place.

**Images are imported, not referenced by path.** There is no `public/` folder.
That means a missing or renamed image fails the build with a clear error instead
of turning into a broken image on the live site.

**Structured data is built in `src/lib/schema.ts`.** Person, WebSite,
BreadcrumbList, and the project and certificate lists all point at the same
Person entity, which helps search engines treat the pages as one profile rather
than five unrelated documents.

## Deployment

Vercel builds from the `main` branch. Every push deploys.

`sitemap.xml` and `robots.txt` are not files in this repo. They are generated at
build time from `src/app/sitemap.ts` and `src/app/robots.ts`, which read the
route list out of `src/data/site.ts`. Add a page to that route list and the
sitemap picks it up on the next build.
