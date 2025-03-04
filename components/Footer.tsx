export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">
          © 2025 Matias Caballero. All rights reserved.
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://www.linkedin.com/in/matias-caballero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
