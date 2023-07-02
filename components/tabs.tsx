'use client'

import React from 'react'
import Link from 'next/link'
import { Separator } from './ui/separator'


const Navtabs = () => {
  return (
    <div className="hidden md:flex h-6 items-center space-x-4 font-medium text-sm">
      <Link href={'/about'}>About</Link>
      <Separator orientation="vertical" />
      <Link href={'/projects'}>Projects</Link>
      <Separator orientation="vertical" />
      <Link href={'/bookmarks'}>Bookmarks</Link>
      <Separator orientation="vertical" />
      <Link href={'/blog'}>Blog</Link>
      <Separator orientation="vertical" />
      <Link href={'/cv'}>CV</Link>
      <Separator orientation="vertical" />
      <Link href={'/contact'}>Contact</Link>
    </div>
  )
}

export default Navtabs