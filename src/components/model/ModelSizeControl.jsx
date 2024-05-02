import PropTypes from 'prop-types'

const ModelSizeControl = ({sizes, size, setSize}) => {
	console.log(size, sizes);
	return (
		<span className='size-btn-container '>
			{sizes.map(({ label, value }) => (
				<button
					key={label} className='size-btn'
					style={{
						backgroundColor: size === value ? 'white' : 'transparent',
						color: size === value ? 'black' : 'white'
					}}
					onClick={() => setSize(value)}
				>
					{label}
				</button>
			))}
		</span>
	)
}

ModelSizeControl.propTypes = {
	sizes: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired
	})),
	size: PropTypes.string.isRequired,
	setSize: PropTypes.func.isRequired
}
export default ModelSizeControl