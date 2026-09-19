import SocialLinks from '@/components/SocialLinks';
import { profile, site } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgb(var(--border) / var(--border-alpha))' }}>
      <div className="shell flex flex-col items-center gap-5 py-9 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-base font-semibold">{profile.name}</p>
          <p className="faint mt-1 text-sm">{site.footer.tagline}</p>
        </div>
        <SocialLinks />
        <p className="faint text-sm">
          © {new Date().getFullYear()} {profile.name}. {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
