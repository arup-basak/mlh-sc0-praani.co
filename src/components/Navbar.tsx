import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import account_Icon from 'public/account.svg'
import Image from "next/image";
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  console.log(user)

  return (
    <div className="sticky top-0 bg-black z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link href="/">
            <div className="flex items-center text-white">
              <img src="" alt="Logo" className="h-8" />
            </div>
          </Link>
          <div className="hidden md:flex space-x-6 text-white">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/products" className="hover:text-yellow-500">Products</Link>
            <Link href="/dashboard" className="hover:text-yellow-500">Dashboard</Link>
          </div>
          {
            user ? (
              <div className="text-white">
                <FaUser />
              </div>
            ) : (
              <button>
                <a
                  href="/api/auth/login"
                  className="inline-block px-4 py-2 bg-white text-black rounded-lg">
                  Login
                </a>
              </button>
            )
          }
        </div>
      </div >
    </div >
  );
}

export default Navbar