import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center">
          <h2 className="text-xl lg:text-[1rem] tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            © 2024 Preslav Getov. All rights reserved.
          </h2>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
