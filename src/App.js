import './App.css'

function App() {
	return (
		<div className='app'>
			<div className='block-1'>
				<div className='block-1__box'>
					<h1 className='block-1__h1'>
						<p className='text-gradient'> mustang</p>
					</h1>
					<div className='block-1__img-container'>
						<img className='block-1__img' src='/img/1.png' alt='mustang' />
					</div>
					<h3 className='block-1__h3'>
						1969 Mustang Body on a 2014 GT500 Chassis?
					</h3>
					<h1 className='block-1__h2'>
						<p className='text-gradient'>yes please!</p>
					</h1>
				</div>
			</div>
			<div className='block-2'>
				<div className='block-2__top-triangle' />
				<div className='block-2__box'>
					<div className='block-2__column-1'>
						<img className='block-2__img' src='/img/2.png' alt='mustang' />
						<h2 className='block-2__h2'>
							New 1969-70 Ford Mustang Mach 1, Boss 302 and Boss 429 now on sale
						</h2>
						<p className='block-2__p left'>
							Ford has a new Mach 1 in the works.
							<br />
							<br />
							It’s not a Mustang, but an all-electric performance utility
							vehicle that it plans to unveil in a couple of years.
							<br />
							<br />
							<br />
							If that’s not your thing, don’t worry, because now you can buy a
							brand new version of the original Mustang Mach 1.
							<br />
							<br />
							At least the closest thing to it.
						</p>
					</div>
					<div className='block-2__column-2'>
						<div className='block2__right-text-container'>
							<p className='block-2__p right-mini'>
								Classic Recreations of Yukon, Oklahoma has been building a
								variety of officially-licensed continuation Mustang Shelby
								models for the past decade, and has now secured the rights to do
								the same for the 1969-1970 Mach 1, Boss 302 and Boss 429.
							</p>
							<div className='block-2__rotated-text'>
								this company will sell you a brand new 1969 ford mustang boss
								429
							</div>
						</div>
						<p className='block-2__p right-large'>
							They start with either a new body built by R3 or a standard
							Mustang donor car that they strip down, get in perfect shape and
							add all of the bits needed to recreate the original look of the
							high performance models.
							<br />
							<br />
							Everything underneath gets a refresh, too, including a coilover
							suspension setup, modern brakes and a new Ford Performance engine.
						</p>
					</div>
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
