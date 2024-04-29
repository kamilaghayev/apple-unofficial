import { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../../constants'
import gsap from 'gsap'

const initialValueOfVideo = {
	isEnd: false,
	startPlay: false,
	videoId: 0,
	isLastVideo: false,
	isPlaying: false
}
const VideoCarousel = () => {
	const videoRef = useRef([])
	const videoSpanRef = useRef([])
	const videoDivRef = useRef([])

	const [loadedData,setLoadedData] = useState([])

	const [video, setVideo] = useState(initialValueOfVideo)

	const {isEnd, startPlay, videoId, isLastVideo, isPlaying} = video;

	useEffect(() => {
		if (loadedData.length <= 3 ) return;

		if (!isPlaying) {
			videoRef.current[videoId].pause();
		} else {
			startPlay && videoRef.current[videoId].play();
		}
	}, [startPlay, videoId, isPlaying, loadedData])

	useEffect(() => {
		const currentProgress = 0;
		let span = videoSpanRef.current;

		if (span[videoId]) {
			let anim = gsap.to(span[videoId], {
				onUpdate: () => {
					
				},
				onComplete: () => {
					
				}
			})
		}
	},[videoId, startPlay])
	return (
		<div className='flex items-center'>
			{hightlightsSlides.map(({id, video,textLists,videoDuration}, i) => (
				<div key={id} id='slider' className='sm:pr-20 pr-10'>
					<div className='video-carousel_container'>

						<div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
							<video 
								id='video' 
								playsInline={true} 
								preload='auto' 
								muted
								ref={(videoEl) => (videoRef.current[i] = videoEl)}
								onPlay={() => {
									setVideo((prevVideo) => ({
										...prevVideo,
										isPlaying: true
									}))
								}}
							>
								<source src={video} type='video/mp4' />
							</video>
						</div>

						<ul className='absolute top-12 left-[5%] z-10'>
							{textLists.map((text) => (
								<li key={text} className='md:text-2xl text-xl font-medium'>
									{text}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}

			<div className='relative flex-center mt-10'>
				<div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
					{videoRef.current.map((_, i) => (
						<span 
							key={i}
							ref={(spanEl) => (videoRef.current[i] = spanEl)}
							className='mx-2 2-3 h-3 bg-gray-200 rounded-full cursor-pointer'
						></span>
					))}
				</div>
			</div>
		</div>
	)
}

export default VideoCarousel