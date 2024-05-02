import { useEffect, useRef, useState } from 'react'

import { useGSAP } from '@gsap/react'
import ModelView from './ModelView'
import gsap from 'gsap'
import { yellowImg } from '../../utils'

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { models, sizes } from '../../constants'
import ModelSizeControl from './ModelSizeControl'
import { animateWithGsapTimeline } from '../../utils/animations'
import ModelColorControl from './ModelColorControl'
const Model = () => {
	const [ size,setSize ] = useState('small') 

	const [ model,setModel ] = useState({
		id: 1,
		title: "iPhone 15 Pro in Natural Titanium",
		color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
		img: yellowImg,
	}) 

	//camera control for model view
	const cameraControlSmall = useRef();
	const cameraControlLarge = useRef();

	// model
	const small = useRef(new THREE.Group());
	const large = useRef(new THREE.Group());

	// rotation
	const [ smallRotation, setSmallRotation ] = useState(0);
	const [ largeRotation, setLargeRotation ] = useState(0);

	//timeline 
	const tl = gsap.timeline();

	useEffect(() => {
		console.log(size);
		if (size === 'small') {
			animateWithGsapTimeline(
				tl, small, smallRotation, '#view1', '#view2', {
					transform: 'translateX(-100%)',
					duration: 2,
				}
			);
		}

		if (size === 'large') {
			animateWithGsapTimeline(
				tl, large, largeRotation, '#view2', '#view1', {
					transform: 'translateX(0)',
					duration: 2,
				}
			)
		}
	}, [size]);

	useGSAP(() => {
		gsap.to('#heading', {
			opacity: 1,
			y: 0,
			duration: 1,
			delay: 1,
		})
	}, [])
	
	return(
		<section className='common-padding'>
			<div className="screen-max-width">
				<h5 id='heading' className='section-heading'>
					Take a closer look.
				</h5>
				<div className="flex flex-col items-center mt-5">
					<div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
						<ModelView
							index={1}
							groupRef={small}
							gsapType='view1'
							controlRef={cameraControlSmall}
							setRotationState={setSmallRotation}
							item={model}
							size={size}
						/>
						<ModelView
							index={2}
							groupRef={large}
							gsapType={'view2'}
							controlRef={cameraControlLarge}
							setRotationState={setLargeRotation}
							item={model}
							size={size}
						/>
						<Canvas 
							className='w-full h-full' 
							style={{
								position: 'fixed',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								overflow: 'hidden',
							}}
							eventSource={document.getElementById('root')}
						>
							<View.Port />
						</Canvas>
					</div>

					<div className="mx-auto w-full">
						<p className='text-sm font-light text-center mb-5'>
							{model.title}
						</p>

						<div className="flex-center">
							<ModelColorControl models={models} setModel={setModel} />
							<ModelSizeControl sizes={sizes} size={size} setSize={setSize} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Model