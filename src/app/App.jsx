import Hero from '../components/hero'
import Highlights from '../components/highlights'
import Navbar from '../components/navbar'

const App = () => {
	
	return(
		<>
			<header className='bg-black py-5 sm:px-10 px-5'>
				<Navbar/>
			</header>
			<main className='bg-black sm:px-10 px-5'>
				<Hero/>
				<Highlights/>
			</main>
		</>
	)
}

export default App