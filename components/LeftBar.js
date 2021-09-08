import LinkNewTab from "./common/LinkNewTab";

export default function LeftBar() {
  return (
    <nav className="transition-all duration-700 absolute lg:bottom-8 lg:left-8 bottom-4 left-4">
      <ul className="transition-all duration-700 md:text-base md:leading-8 sm:text-sm sm:leading-7 text-xs leading-6 text-gray-400 font-mono tracking-widest leading-loose">
        <li className="hover:text-white">
          <LinkNewTab href="https://www.linkedin.com/in/naufalhilmy/">
            LinkedIn
          </LinkNewTab>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://www.instagram.com/mnaufalhilmym/">
            Instagram
          </LinkNewTab>
        </li>
        <li className="hover:text-white">
          <LinkNewTab href="https://www.facebook.com/mnaufalhilmym/">
            Facebook
          </LinkNewTab>
        </li>
      </ul>
    </nav>
  );
}
