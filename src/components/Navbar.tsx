import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import { FaUser, FaCoins } from 'react-icons/fa';
import { useEffect, useState } from "react";
import axios from 'axios';
import logo_img from 'public/logo.svg'
import Image from "next/image";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const [sended, setSended] = useState(false);
  const [coin, setCoin] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.post('/api/user', { ...user });
        setCoin(resp.data._doc.coins);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user && !sended && coin === 0) {
      fetchData();
      setSended(true);
    }
  }, [sended, coin, user]);

  return (
    <div className="sticky top-0 bg-black z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link href="/" className="flex items-center text-white">
            <Image
              src={logo_img}
              height={30}
              width={30}
              alt="Logo"
              className="scale-150"
            />
            <span className="mx-3 font-semibold text-2xl">
              Praani
            </span>
            {/* <img src="" alt="Logo" className="h-8" /> */}
          </Link>
          <div className="hidden md:flex space-x-6 text-white">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/products" className="hover:text-yellow-500">Products</Link>
            <Link href="/dashboard" className="hover:text-yellow-500">Dashboard</Link>
            <Link href="/about" className="hover:text-yellow-500">About us</Link>
            <Link href="/hospitals" className="hover:text-yellow-500">Hospitals</Link>
            <div className="flex items-center space-x-2">
              <FaCoins className="hover:text-yellow-500" />
              <span className="hover:text-yellow-500 cursor-pointer">{coin} Coins</span>
            </div>
          </div>
          {user ? (
            <div className="text-white">
              <FaUser />
            </div>
          ) : (
            <button>
              <Link
                href="/api/auth/login"
                className="inline-block px-4 py-2 bg-white text-black rounded-lg">
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
