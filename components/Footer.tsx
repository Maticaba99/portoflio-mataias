export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-muted-foreground">
          © 2025 Matias Caballero. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
          <a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}