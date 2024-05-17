import { fetchAPI } from "@/lib/api"
import { getStrapiMedia } from "@/lib/media";
import HighlightedContentClient from "@/components/highlightedContentClient";

let postData = null
export async function generateMetadata({ params }, parent) {
	postData = await fetchAPI(`/posts`, {
		filters: {
			Slug: params.slug
		},
		populate: {
			SEO: { populate: '*' },
		},
	})

	const parentOpenGraph = ( await parent )
	const parentOpenGraphImage = parentOpenGraph.openGraph?.images  || []
	
	return {
		title: postData.data[0].attributes.SEO?.MetaTitle,
		description: postData.data[0].attributes.SEO?.MetaDescription,
		openGraph: {
			title: postData.data[0].attributes.SEO?.MetaTitle,
			description: postData.data[0].attributes.SEO?.MetaDescription,
			url: `https://robertocinetto.com/blog/${postData.data[0].attributes.Slug}`,
			images: [
				postData.data[0].attributes.SEO?.ShareImage ? getStrapiMedia(postData.data[0].attributes.SEO.ShareImage) : null, ,
				...parentOpenGraphImage
			],
		},
	}
}

const BlogSingle = () => {
	if (!postData) return null
	return <HighlightedContentClient content={postData.data[0].attributes.Content} />
}

export default BlogSingle