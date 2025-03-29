import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Visa Check
          </Link>
        </div>
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="hover:text-primary text-sm font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary text-sm font-medium transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
