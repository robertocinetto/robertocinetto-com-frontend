import { Lato, Open_Sans, Rubik } from 'next/font/google'
import '@/styles/globals.scss'
import { fetchAPI } from '@/lib/api'
import { getStrapiMedia } from '@/lib/media'

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-rubik' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-lato' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })


export async function generateMetadata() {
	const WebsiteData = await fetchAPI('/website-setting', 
		{
			populate: {
				Favicon: '*',
				DefaultSEO: {
					populate: '*',
				},
				SiteLogo: '*',
				SiteLogoDark: '*',
			},
		},
		{ next: { revalidate: 100 } }
	)

	return {
		title: {
			template: '%s | Roberto Cinetto',
			default: WebsiteData.data.attributes.DefaultSEO.MetaTitle,
		},
		description: WebsiteData.data.attributes.DefaultSEO.MetaDescription,
		openGraph: {
			title: WebsiteData.data.attributes.DefaultSEO.MetaTitle,
			description: WebsiteData.data.attributes.DefaultSEO.MetaDescription,
			url: 'https://robertocinetto.com',
			siteName: WebsiteData.data.attributes.DefaultSEO.MetaTitle,
			images: [
				{
					// url: getStrapiMedia(WebsiteData.data.attributes.DefaultSEO.ShareImage),
					width: 1600,
					height: 1200,
				}
			],
		},
	}
}

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`${openSans.className} ${rubik.variable} ${openSans.variable} ${lato.variable} antialiased`}>{children}</body>
		</html>
	)
}

export default RootLayout
