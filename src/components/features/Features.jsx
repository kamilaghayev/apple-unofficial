import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Features = () => {

	useGSAP(()=> {
		gsap.to('#features_title', {
			opacity: 1,
			y:0,
			delay: 1,
			stagger: 0.25
		})
	},[])

	return (
		<section className='h-full common-padding relative overflow-hidden '>
			<div className="screen-max-width">
				<div className="mb-20 w-full">
					<h1 id='features_title' className='section-heading'>
						Explore the full story.
					</h1>
				</div>
			</div>
		</section>
	)
}

export default Features