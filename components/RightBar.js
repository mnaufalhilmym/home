import Link from "next/link";

import LinkNewTab from "./common/LinkNewTab";

export default function RightBar() {
  return (
    <nav className="transition-all duration-700 absolute lg:top-8 lg:right-8 lg:bottom-8 top-4 bottom-4 right-4">
      <ul className="transition-all duration-700 md:text-base md:leading-8 sm:text-sm sm:leading-7 text-xs leading-6 text-right text-gray-400 font-mono tracking-widest">
        <li className="hover:text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://blog.hilmy.dev">Blog</LinkNewTab>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://github.com/mnaufalhilmym">
            Portofolio
          </LinkNewTab>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://blog.hilmy.dev/about.html">About</LinkNewTab>
        </li>
        <li className="absolute right-0 bottom-0 hover:text-white">
          <LinkNewTab href="mailto:naufal@hilmy.dev">Contact</LinkNewTab>
        </li>
      </ul>
    </nav>
  );
}
