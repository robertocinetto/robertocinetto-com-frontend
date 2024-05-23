import Link from "next/link"

const Footer = () => {
	return (
		<footer className='container mx-auto text-center text-sm text-gray-500 py-10'>
			<hr className="mb-6"/>
			<p>&copy; robertocinetto.com {new Date().getFullYear()} - All rights reserved - <Link href='/privacy-policy'>Privacy Policy</Link></p>
		</footer>
	)
}

export default Footer
