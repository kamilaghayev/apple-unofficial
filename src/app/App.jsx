import Features from '../components/features'
import Hero from '../components/hero'
import Highlights from '../components/highlights'
import Model from '../components/model'
import Navbar from '../components/navbar'

const App = () => {
	
	return(
		<>
			<header className='bg-black py-5 sm:px-10 px-5'>
				<Navbar/>
			</header>
			<main className='bg-black'>
				<Hero />
				<Highlights />
				<Model />
				<Features />
			</main>
		</>
	)
}

export default App