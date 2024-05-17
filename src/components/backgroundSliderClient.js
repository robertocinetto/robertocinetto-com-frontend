"use client"

import ReactBackgroundSlider from 'react-background-slider'

const BackgroundSliderClient = ({ images, duration, transition }) => {
	return (
		<ReactBackgroundSlider
			images={images}
			duration={10}
			transition={1}
		/>
	)
}

export default BackgroundSliderClient