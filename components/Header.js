import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center m-5">
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src="https://media.glassdoor.com/sqll/43242/hulu-squarelogo-1561078825650.png"
        alt="logo"
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
