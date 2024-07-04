import './App.css'

function App() {
	return (
		<div className='app'>
			<div className='block-1'>
				<div className='block-1__box'>
					<h1 className='block-1__h1'>
						<span className='text-gradient'> mustang</span>
					</h1>
					<div className='block-1__img-container'>
						<img className='block-1__img' src='/img/1.png' alt='mustang' />
					</div>
					<h3 className='block-1__h3'>
						1969 Mustang Body on a 2014 GT500 Chassis?
					</h3>
					<h1 className='block-1__h2'>
						<span className='text-gradient'>yes please!</span>
					</h1>
				</div>
			</div>
			<div className='block-2'>
				<div className='block-2__top-triangle' />
				<div className='block-2__box'>
					<div className='block-2__column-1'>
						<div className='block-2__img-container'>
							<img className='block-2__img' src='/img/2.png' alt='mustang' />
						</div>
					</div>
					<div className='block-2__column-2'></div>
				</div>
			</div>
			<div className='block-3'>
				<div className='block-3__bottom-triangle' />
			</div>
			<div className='block-4'></div>
			<div className='block-5'></div>
		</div>
	)
}

export default App
