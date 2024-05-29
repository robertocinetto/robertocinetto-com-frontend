import Image from 'next/image'
import Link from 'next/link'

import { ImLinkedin2, ImGithub } from 'react-icons/im'
import { FaXTwitter } from "react-icons/fa6";
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const Header = () => {
	return (
		<header className='header container mx-auto py-5 flex flex-wrap-reverse justify-center gap-4 md:justify-between my-4 md:my-10'>
			<Link href='/blog'>
				<Image src='/logo-roberto-cinetto.svg' alt='Roberto Cinetto logo' width={300} height={200} />
			</Link>
			<div className='flex justify-center items-center gap-8'>
				<a href='https://www.linkedin.com/in/robertocinetto/' target='_blank' rel='noreferrer'>
					<ImLinkedin2 className='w-[20px] h-[20px]' />
				</a>
				<a href='https://github.com/robertocinetto' target='_blank' rel='noreferrer'>
					<ImGithub className='w-[20px] h-[20px]' />
				</a>
				<a href="https://x.com/Robertocinetto" target='_blank' rel='noreferrer'>
					<FaXTwitter className='w-[20px] h-[20px]' />
				</a>
				{/* <a href='tel:+12368869279'>
					<DevicePhoneMobileIcon className='w-[20px] h-[20px]' />
				</a> */}
				<a href='mailto:roberto.cinetto@gmail.com' target='_blank' rel='noreferrer'>
					<EnvelopeIcon className='w-[20px] h-[20px]' />
				</a>
			</div>
		</header>
	)
}

export default Header
