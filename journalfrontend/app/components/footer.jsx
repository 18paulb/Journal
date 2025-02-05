import Link from "next/link";

export default function PageFooter() {
  return (
    <footer className="border-t mt-auto w-full px-4">
      <div className="max-w-6xl mx-auto py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <Link href="/" className="font-semibold hover:text-primary transition-colors">
              Journify
            </Link>
            <p className="text-sm text-muted-foreground">Your digital safe space for personal reflection</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link key={link.linkText} href={link.link} className="text-sm transition-colors hover:text-primary">
                {link.linkText}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    linkText: "Privacy Policy", 
    link: "/info/privacy-policy"
  },
  {
    linkText: "Terms of Service", 
    link: "/info/terms-of-service"
  },
  {
    linkText: "Contact",
    link: "/info/contact-us"
  }
]