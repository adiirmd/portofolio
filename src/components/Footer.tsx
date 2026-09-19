import SocialLinks from '@/components/SocialLinks';
import { profile, site } from '@/lib/data';

export default function Footer() {
  return (
    <footer
      className="mt-24"
      style={{ borderTop: '1px solid rgb(var(--border) / var(--border-alpha))' }}
    >
      <div className="shell flex flex-col items-center gap-5 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="faint mt-1 text-xs">{site.footer.tagline}</p>
        </div>
        <SocialLinks />
        <p className="faint text-xs">
          © {new Date().getFullYear()} {profile.name}. {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
