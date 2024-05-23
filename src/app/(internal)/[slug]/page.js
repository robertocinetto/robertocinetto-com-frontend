import { fetchAPI } from '@/lib/api'
import { getStrapiMedia } from '@/lib/media'
import HighlightedContentClient from '@/components/highlightedContentClient'
import Image from '@/components/image'

async function getPageData(params) {
	const pageData = await fetchAPI(`/pages`, {
		filters: {
			Slug: params.slug,
		},
		populate: {
			SEO: { populate: '*' },
		},
	})
	return pageData.data[0].attributes
}


export async function generateMetadata({ params }, parent) {
	const pageData = await getPageData(params)

	return {
		title: pageData.SEO?.MetaTitle,
		description: pageData.SEO?.MetaDescription,
		openGraph: {
			title: pageData.SEO?.MetaTitle,
			description: pageData.SEO?.MetaDescription,
			url: `https://robertocinetto.com/blog/${pageData.Slug}`,
		},
	}
}

export default async function PageSingle({ params }) {
	const pageData = await getPageData(params)

	const wordCount = pageData.Content.split(" ").length
	const readingTime = Math.ceil(wordCount / 200)

	return (
		<article className='grid-12 mb-10 ck-content'>
			<div className='col--start-4 col--end-9 container'>
				<h1 className=''>{pageData.Title}</h1>
				<h2 className='h3'>{pageData.Summary}</h2>
				<HighlightedContentClient content={pageData.Content} className='' />
			</div>
		</article>
	)
}