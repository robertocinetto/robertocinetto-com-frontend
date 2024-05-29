import Image from '@/components/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Card = props => {
	const { slug, category, title, summary, featuredImage } = props
	console.log('props', featuredImage)
	return (
		<div className='flex flex-col md:flex-row gap-4 md:gap-10 rounded-md overflow-hidden mb-12 shadow-md hover:shadow-sm transition-shadow'>
			<div className='flex-1'>
				<div className="relative w-full min-h-full aspect-video overflow-hidden">
					<Link href={`/blog/${slug}`}>
						<Image image={featuredImage} alt='thumbnail' fill={true} className='hover:scale-105 transition-transform duration-300 object-cover'/>
					</Link>
				</div>
			</div>
			<div className='flex-1 flex flex-col justify-center align-item items-start gap-3 p-5 '>
				<div className="">{category}</div>
				<Link href={`/blog/${slug}`} className="hover:underline"><h2 className="h3">{title}</h2></Link>
				<p className="">{summary}</p>
				<Button asChild>
					<Link href={`/blog/${slug}`}>Read More</Link>
				</Button>
			</div>
		</div>
	)
}

export default Card
