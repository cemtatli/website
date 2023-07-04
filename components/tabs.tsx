import Link from 'next/link'

const Navtabs = () => {
  return (
    <div className="hidden md:flex h-6 items-center space-x-4 font-medium text-sm">
      <Link href={'/about'}>About</Link>
      <Link href={'/projects'}>Projects</Link>
      <Link href={'/bookmarks'}>Bookmarks</Link>
      <Link href={'/blog'}>Blog</Link>
      <Link href={'/cv'}>CV</Link>
      <Link href={'/contact'}>Contact</Link>
    </div>
  )
}

export default Navtabs