import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='flex h-20 items-center border-b border-gray bg-white bg-white/80 backdrop-blur-lg'>
      <div className='wrapper grid grid-cols-3 items-center gap-20'>
        {/* NAV LEFT */}

        <nav>
          <ul className='flex gap-5'>
            <li>
              <Link href='/#packages' className='link-item'>
                Packages
              </Link>
            </li>
            <li>
              <Link href='/#products' className='link-item'>
                Products
              </Link>
            </li>
            <li>
              <Link href='/#gallery' className='link-item'>
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV MID */}
        <nav>
          <ul className='flex justify-center'>
            <li>
              <Link href='/' className='text-4xl font-bold lowercase text-pink'>
                mimosa
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAV RIGHT */}
        <nav>
          <ul className='flex items-center justify-end gap-5'>
            <li>
              <Link href='/' className='link-item'>
                Models
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Events
              </Link>
            </li>
            <li>
              <Link
                href='/sign-in'
                className={buttonVariants({ variant: 'ocean' })}
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
