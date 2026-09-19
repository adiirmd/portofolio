import { profile, site } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgb(var(--border) / var(--border-alpha))' }}>
      <div className="shell py-8">
        <p className="faint text-center text-sm">
          © {new Date().getFullYear()} {profile.name}. {site.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
