"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Flower } from "lucide-react";

const Nav = () => {
  const {data: session} = useSession();

  return (
          <nav className="sticky top-0 z-40 navbar bg-base-100 p-2 px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul 
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow lg:hidden">
          <li><Link href="/donate">Donate</Link></li>
        <li><Link href="/leaderboard">Leaderboard</Link></li>
        <li><a onClick={()=>signOut()}>Sign Out</a></li>
      </ul>
            </div>
          <Link className="text-xl text-primary btn btn-ghost font-semibold flex flex-row items-center gap-x-1" href="/">
          <Flower/> rooted
          </Link>
        </div>
        
        <div className="navbar-end">
          { session?.user ? (
               <div className="flex flex-row gap-x-4">
               <Link href="/donate">
               <button className="sm:btn  sm:btn-accent hidden ">Donate</button>
               </Link>
               <Link href="/record">
               <button className="btn btn-primary">Quiet Time</button>
               </Link>
               </div>
              
               
          ): (
            <Link href="/register">
            <button className="btn btn-primary">Sign In</button>
            </Link>
          )
        }
          
        </div>
      </nav>
          
      )
}

export default Nav