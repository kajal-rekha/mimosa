import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-grey bg-white flex items-center">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* NAV LEFT */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Link 3
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 1
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 2
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
          <ul className="flex gap-5 justify-end">
            <li>
              <Link href="/" className="link-item">
                Link 4
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Link 5
              </Link>
            </li>
            <li>
              <Link href="/user/sign-in">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
