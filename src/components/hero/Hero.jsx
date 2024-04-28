import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../../utils'
import { useEffect, useState } from 'react'

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
		gsap.to('#hero', {
			opacity: 1,
			duration: 1,
			delay: 1,
			ease: 'power1.inOut'
		})
	},[])

	return(
		<section className='w-full nav-height relative pt-9'>
			<div className='h-5/6 w-full flex-center flex-col'>

				<h5 id='hero' className='hero-title'>IPhone 15 pro</h5>

				<div className='md:w-10/12 w-9/12'>
					<video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
						<source src={videoSrc} type='video/mp4'/>
					</video>
				</div>
			</div>
		</section>
	)
}

export default Hero