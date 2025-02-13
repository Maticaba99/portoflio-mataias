export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 border-t sm:px-64">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-muted-foreground text-sm sm:text-base">
          © 2025 Matias Caballero. All rights reserved.
        </div>
        <div className="flex space-x-4 sm:space-x-6">
          <a
            href="https://www.linkedin.com/in/matias-caballero/"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
