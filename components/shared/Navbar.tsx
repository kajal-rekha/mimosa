import Link from "next/link";
import { buttonVariants } from "../ui/Button";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-grey bg-white flex items-center bg-white/80 backdrop-blur-lg fixed top-0 right-0 left-0 z-[100]">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* NAV LEFT */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Events
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV MID */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link href="/" className="lowercase text-4xl font-bold text-pink">
                mimosa
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT */}
        <nav>
          <ul className="flex gap-5 justify-end items-center">
            <li>
              <Link href="/" className="link-item">
                Models
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/user/sign-in"
                className={buttonVariants({ variant: "ocean" })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
