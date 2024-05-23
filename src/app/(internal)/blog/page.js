import Card from "@/components/card"
import { fetchAPI } from "@/lib/api"

const Page = async () => {
	const posts = await fetchAPI('/posts', { populate: '*' })	
	return (
		<div className='container mx-auto'>
			{posts.data && posts.data.map((post)=>(
				<Card 
						key={post.attributes.id}
						slug={post.attributes.Slug}	
						category={post.attributes.Category}
						title={post.attributes.Title}
						summary={post.attributes.Summary}
						featuredImage={post.attributes.FeaturedImage}
					/>
				)
			)}
		</div>
	)
}

export default Page
