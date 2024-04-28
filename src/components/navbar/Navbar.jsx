import { navLists } from '../../constants'
import { appleImg, bagImg, searchImg } from '../../utils'

const Navbar = () => {
	return(
		<nav className='flex items-center justify-between screen-max-width'>
			<a href="#">
				<img src={appleImg} alt="Apple" width={14} height={18} />
			</a>

			<ul className='flex flex-1 gap-5 justify-center items-center max-sm:hidden'>
				{navLists.map((item, index) => (
					<li key={index}>
						<a href="#" className='text-sm text-gray hover:text-white transition-all'>{item}</a>
					</li>
				))}
			</ul>

			<div className='flex items-baseline gap-5 max-sm:justify-end max-sm:flex-1'>
				<img src={searchImg} alt='search' width={18} height={18}/>
				<img src={bagImg} alt="bag" width={18} height={18} />
			</div>
		</nav>
	)
}

export default Navbar