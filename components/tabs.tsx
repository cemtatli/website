import Link from "next/link";

const Navtabs = () => {
  return (
    <div className="hidden h-6 items-center gap-x-5 text-sm font-medium sm:flex">
      {/*       <Link href={"/about"}>About</Link> */}
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/bookmarks"}>Bookmarks</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
};

export default Navtabs;
