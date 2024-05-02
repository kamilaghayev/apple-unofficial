import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import PropTypes from 'prop-types'
import Lights from './Lights'
import { Suspense } from 'react'
import IPhone from './IPhone'
import Loader from '../loader'

import * as THREE from 'three'

const ModelView = ({
		index, 
		groupRef, 
		gsapType, 
		controlRef, 
		setRotationState, 
		item, 
		size
	}) => {
	return (
		<View
			index={index}
			id={gsapType}
			className={
				` absolute w-full h-full
				${index === 2 ? 'right-[-100%]' : ''}`
			}
		>
			{/* Ambient Light */}
			<ambientLight intensity={0.7}/>

			<PerspectiveCamera makeDefault position={[0, 0, 4]}/>

			<Lights/>

			<OrbitControls
				makeDefault
				ref={controlRef}
				enableZoom={false}
				enablePan={false}
				rotateSpeed={0.4}
				target={new THREE.Vector3(0, 0, 0)}
				onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
			/>

			<group 
				ref={groupRef} 
				name={`${index === 1 ? 'small' : 'large'}`}
			 	position={[0, 0, 0]}
			>
				<Suspense fallback={<Loader/>}>
					<IPhone
						scale={index === 1 ? [15,15,15] : [17,17,17]}
						item={item}
						size={size}
					/> 
				</Suspense>
			</group>
		</View>
	)
}

ModelView.propTypes = {
	index: PropTypes.number.isRequired,
	groupRef: PropTypes.object.isRequired,
	gsapType: PropTypes.string.isRequired,
	controlRef: PropTypes.object.isRequired,
	setRotationState: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	size: PropTypes.string.isRequired
}
export default ModelView