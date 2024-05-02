
const ModelColorControl = ({models, setModel}) => {
	return (
		<ul className='color-container'>
			{models.map((item, i) => (
				<li
					key={i}
					className='w-6 h-6 rounded-full mx-2 cursor-pointer'
					style={{ backgroundColor: item.color[0] }}
					onClick={() => setModel(item)}
				/>
			))}
		</ul>
	)
}

export default ModelColorControl