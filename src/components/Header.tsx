import Link from "next/link";
import { DATA, VALUE } from "@/lib/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Container from "./Container";

const Header = () => {
  return (
    <header>
      <Container className="py-4 px-10">
        <nav className="flex justify-between items-center">
          <Link href="/" className="uppercase font-semibold text-xl">
            {VALUE.BRAND}
            <span className="italic ml-2">INC.</span>
          </Link>

          <ul className="flex justify-between items-center gap-8">
            {DATA.HEADER.map((link) => (
              <li key={link.label} className="uppercase">
                {link.button ? (
                  <Button size="lg" variant="default" className="uppercase">
                    <Link
                      href={link.path}
                      className="flex items-center justify-center group"
                    >
                      {link.label}
                      <ArrowRight className="group-hover:visible h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                ) : (
                  <Link href={link.path}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
