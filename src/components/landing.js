"use client"
import NextImage from 'next/image'
import BackgroundSlider from 'react-background-slider'
// import Image from '../components/Image'

import { ImLinkedin2, ImGithub } from 'react-icons/im'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

import profileImg from '../../public/roberto-cinetto-picture.jpeg'
import bg1 from '../../public/roberto-cinetto-vancouver-frontend-developer.jpg'
import bg2 from '../../public/roberto-cinetto-vancouver-web-developer.jpg'

const Landing = () => {
	// const Slider = BackgroundSlider['react-background-slider'].default

	return (
		<header>
        <div className='px-10 border-t-4 border-yellow-400 mx-auto min-h-screen grid  place-items-center'>
          <div className='flex flex-col justify-center items-center w-full md:w-1/2 md:max-w-2xl mx-auto'>
            <div className='w-full px-5 py-5 md:py-10 -mt-20 rounded-md backdrop-blur-sm bg-white bg-opacity-5 border border-white/5'>
              <div className='flex-initial w-2/5 md:w-1/4 mx-auto rounded-full border-2 border-yellow-400 overflow-hidden my-6 md:my-16 xl:mb-0'>
                <NextImage
                  src={profileImg}
                  width={200}
                  height={200}
                  layout='responsive'
                  alt='Roberto Cinetto portrait'
                />
              </div>
              <div className='flex-initial w-full mx-auto md:w-3/4 text-center xl:text-left my-10 xl:mb-0 px-10'>
                {/* <NextImage
                  image={siteLogoDark}
                  alt='Roberto Cinetto logo'
                /> */}
              </div>
              <div className='text-center text-white mt-5 mb-10'>
                <p>Get in touch with me</p>
                <div className='text-center mt-3 flex justify-center gap-8'>
                  <a
                    href='https://github.com/robertocinetto'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <ImGithub className='w-[25px] h-[25px]' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/robertocinetto/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <ImLinkedin2 className='w-[25px] h-[25px]' />
                  </a>
                  <a href='tel:+12368869279'>
                    <DevicePhoneMobileIcon className='w-[25px] h-[25px]' />
                  </a>
                  <a
                    href='mailto:roberto.cinetto@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <EnvelopeIcon className='w-[25px] h-[25px]' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className='scroll-icon'>
          <span className='scroll-icon__wheel-outer'>
            <span className='scroll-icon__wheel-inner'></span>
          </span>
        </span>

        <BackgroundSlider
          images={[bg1.src, bg2.src]}
          duration={10}
          transition={1}
        />
        {/* <div className='px-10 border-t-4 border-yellow-400 mx-auto min-h-[60vh] md:min-h-[75vh]'>
          <div className='flex flex-col md:flex-row justify-center items-center w-full md:w-3/4 mx-auto min-h-[60vh] md:min-h-[75vh]'>
            <div className='flex-initial w-2/4 md:w-1/4 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden mb-10 xl:mb-0'>
              <NextImage
                src={profileImg}
                width={200}
                height={200}
                layout='responsive'
                alt='Roberto Cinetto portrait'
              />
            </div>
            <div className='flex-initial w-full md:w-3/4 text-center xl:text-left mb-10 xl:mb-0 px-10'>
              <Image
                image={siteLogoDark}
                alt='Roberto Cinetto logo'
              />
            </div>
          </div>
        </div> */}
        {/* <div className='min-h-[40vh] md:min-h-[25vh]'>
          <div className='text-center text-white mt-5 xl:mt-24'>
            <p>Get in touch with me:</p>
            <div className='text-center mt-3 flex justify-center gap-8'>
              <a
                href='https://github.com/robertocinetto'
                target='_blank'
                rel='noreferrer'
              >
                <ImGithub className='w-[25px] h-[25px]' />
              </a>
              <a
                href='https://www.linkedin.com/in/robertocinetto/'
                target='_blank'
                rel='noreferrer'
              >
                <ImLinkedin2 className='w-[25px] h-[25px]' />
              </a>
              <a href='tel:+12368869279'>
                <DevicePhoneMobileIcon className='w-[25px] h-[25px]' />
              </a>
              <a
                href='mailto:roberto.cinetto@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <EnvelopeIcon className='w-[25px] h-[25px]' />
              </a>
            </div>
          </div>
        </div> */}
        <nav className='navigation w-full absolute bottom-4 text-white flex justify-center gap-10'>
          <span>
            <a href='#profile'>PROFILE</a>
          </span>
          <span>
            <a
              href='files/Roberto-Cinetto-Web-Developer-Resume.pdf'
              target='_blank'
              rel='noreferrer'
            >
              RESUME
            </a>
          </span>
          <span>
            <a href='#projects'>PROJECTS</a>
          </span>
        </nav>
      </header>
	)
}

export default Landing