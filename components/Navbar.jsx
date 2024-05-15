import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 md:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <Link href="/">
        <img src='https://i.pinimg.com/736x/7d/4c/2a/7d4c2ab9eeac2571772b767a49e3014d.jpg' className='h-10 w-10 rounded-full'/>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 sm:gap-8">
          <Link href="/">
            <p className="text-white">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-white">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-white">Contact</p>
          </Link>
          <Link href="/services">
            <p className="text-white">Services</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
