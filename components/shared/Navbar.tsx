import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-grey bg-light flex">
      <div>
        {/* NAV LEFT */}
        <nav>
          <ul>
            <li>
              <Link href="/">Link 1</Link>
              <Link href="/">Link 2</Link>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>
        {/* NAV MID */}
        <nav>
          <ul>
            <li>
              <Link href="/">mimosa</Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT */}
        <nav>
          <ul>
            <li>
              <Link href="/">Link 4</Link>
              <Link href="/">Link 5</Link>
              <Link href="/user/sign-in">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
