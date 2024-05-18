import NextImage from 'next/image'
import { getStrapiMedia } from '@/lib/media'

const Image = ({ image, className, layout = 'responsive', objectFit = 'contain', width, height }) => {
  const { alternativeText } = image.data ? image.data.attributes : {}

  const theWidth = width ? width : image.data.attributes.width
  const theHeight = height ? height : image.data.attributes.height

  return (
      <NextImage
        layout={layout}
        width={theWidth}
        height={theHeight}
        objectFit={objectFit}
        src={getStrapiMedia(image)}
        alt={alternativeText || ''}
				className={className}
      />
  )
}

export default Image
