import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../../utils'
import VideoCarousel from '../videoCarousel'

const Highlights = () => {
	
	useGSAP(()=> {
		gsap.to('#title', {
			opacity: 1,
			y:0,
			delay: 1,
		})
		gsap.to('.link', {
			opacity: 1,
			y:0,
			delay: 1.5,
			stagger: 0.25
		})
	}, [])

	return(
		<section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
			<div className='screen-max-width'>
				<div className='mb-12 w-full md:flex items-end justify-between'>
					<h5 id='title' className='section-heading'>Get the highlights.</h5>
					<div className='flex flex-wrap items-end gap-5'>
						<a href="#" className='link'>
							Watch the film
							<img src={watchImg} alt="watch" className='ml-2' />
						</a>
						<a href="#" className='link'>
							Watch the event
							<img src={rightImg} alt="right" className='ml-2' />
						</a>
					</div>
				</div>
				<VideoCarousel/>
			</div>
		</section>
	)
}

export default Highlights