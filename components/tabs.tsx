import Link from "next/link";

const Navtabs = () => {
  return (
    <div className="hidden h-6 items-center gap-x-5 text-sm font-medium sm:flex">
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/bookmarks"}>Bookmarks</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link target="_blank" href={"https://cv.cemtatli.dev/"}>CV</Link>
    </div>
  );
};

export default Navtabs;
