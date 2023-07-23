import type { NextPage } from "next";
import Link from "next/link";

const NavbarContainer: NextPage = () => {
  return (
    <div className="w-full mx-auto my-8 flex flex-row justify-between items-center gap-3">
      <div className="text-[27.15px] text-white">
        <b>Nitro</b>
        <span className="font-light font-title-heading-4">Vest</span>
      </div>

      <ul className={`flex flex-row justify-center items-center gap-8 list-none`}>
        {[
          ['Home', '/'],
          ['Contact', '/'],
          ['Listings', '/listing'],
          ['Aunctions', '/'],
        ].map(([list, url], index) => (
          <li key={index}>
              <Link href={`${url}`} className="text-white no-underline">
                {list}
              </Link>
          </li>
        ))}
		  </ul>

      <div className="flex flex-row items-center justify-between gap-2 text-lg text-mediumblue-100">
        <p className="[text-decoration:underline]">
          Sign In
        </p>
      
        <p className="rounded-13xl bg-mediumblue-100 w-[189px] h-[60px] flex flex-col p-2 box-border items-center justify-center text-white font-title-heading-4">
          Submit Listing
        </p>
      </div>
    </div>
  );
};

export default NavbarContainer;
