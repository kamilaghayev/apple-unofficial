import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../../utils'
import { useEffect, useState } from 'react'
import { animateWithGsap } from '../../utils/animations'

const Hero = () => {
	const [videoSrc, setVideoSrc] = useState(window.innerWidth > 540 ? heroVideo : smallHeroVideo)


	const handleVideoScrSet = () => {
		if (window.innerWidth > 540) {
			setVideoSrc(heroVideo)
		} else {
			setVideoSrc(smallHeroVideo)
		}
	}

	useEffect(()=> {
		window.addEventListener('resize', handleVideoScrSet)

		return () => {
			window.removeEventListener('resize', handleVideoScrSet)
		}
	},[])


	useGSAP(()=> {
		animateWithGsap('#hero', {
			opacity: 1,
			duration: 1,
			delay: 1,
			ease: 'power1.inOut'
		})
		gsap.to('#cta', {
			opacity: 1,
			duration: 1,
			delay: 1.4,
			y:50,
			ease: 'power1.inOut'
		})

	},[])

	return(
		<section className='w-full nav-height relative pt-9 sm:px-10 px-5'>
			<div className='h-5/6 w-full flex-center flex-col'>

				<h5 id='hero' className='hero-title'>IPhone 15 pro</h5>

				<div className='md:w-8/12 w-9/12'>
					<video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
						<source src={videoSrc} type='video/mp4'/>
					</video>
				</div>

				<div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
					<a href='#' className="text-white bg-inherit px-10 py-1 rounded-lg">
						Buy
					</a>
					<p className='font-normal text-xl'>From  $199/month or $999</p>
				</div>
			</div>
		</section>
	)
}

export default Hero