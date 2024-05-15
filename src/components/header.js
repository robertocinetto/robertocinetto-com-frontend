import Image from "next/image"

const Header = () => {
	return (
		<header>
			<div className='container mx-auto py-5'>
				<Image src='/logo-roberto-cinetto.svg' alt='Roberto Cinetto logo' width={300} height={200} />
			</div>
		</header>
	)
}

export default Header
