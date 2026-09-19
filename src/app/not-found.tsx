import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { site } from '@/lib/data';

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="gradient-name text-6xl font-bold sm:text-7xl">404</p>
      <p className="muted mt-4 text-sm sm:text-base">{site.description}</p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" />
        {site.nav[0].label}
      </Link>
    </section>
  );
}
