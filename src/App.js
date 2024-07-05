import './App.css'

function App() {
	return (
		<div className='app'>
			<div className='block-1'>
				<div className='block-1__box'>
					<h1 className='block-1__h1'>
						<p className='text-gradient'> mustang</p>
					</h1>
					<img className='block-1__img' src='/img/1.png' alt='mustang' />
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
						<p className='p p-left'>
							Ford has a new Mach 1 in the works.
						</p>
						<p className='p p-left'>
							It’s not a Mustang, but an all-electric performance utility
							vehicle that it plans to unveil in a couple of years.
						</p>
						<p className='p p-left'>
							If that’s not your thing, don’t worry, because now you can buy a
							brand new version of the original Mustang Mach 1.
						</p>
						<p className='p p-left'>At least the closest thing to it.</p>
					</div>
					<div className='block-2__column-2'>
						<div className='block2__right-text-container'>
							<div className='block-2__right-mini-p-container'>
								<p className='p'>
									Classic Recreations of Yukon, Oklahoma has been building a
									variety of officially-licensed continuation Mustang Shelby
									models for the past decade, and has now secured the rights to
									do the same for the 1969-1970 Mach 1, Boss 302 and Boss 429.
								</p>
							</div>

							<div className='block-2__rotated-text'>
								this company will sell you a brand new 1969 ford mustang boss
								429
							</div>
						</div>
						<p className='p'>
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
				<img className='block-3__img' src='/img/3.png' alt='mustang' />
				<div className='block-3__box'>
					<h2 className='block-3__h2'>Boss 429 (Classic Recreations)</h2>
					<p className='p p-block-3 p-center'>
						They’ll drop in pretty much anything the customer wants, but owner
						Jason Engel says the first 429 will have a 460 cubic-inch V8 with
						“Boss 9” hemispherical heads and electronic fuel injection that’s
						already putting out 700 hp, and they’re not done tuning it yet.
					</p>
					<button className='button'>Read More</button>
				</div>
				<div className='block-3__bottom-triangle' />
			</div>
			<div className='block-4'>
				<div className='block-4__box'>
					<div className='block-4__column-1'>
						<h1 className='block-4__h1'>
							<p className='text-gradient'>FORD</p>
						</h1>
						<img className='block-4__left-img' src='/img/4.png' alt='mustang' />
						<h2 className='block-4__h2'>
							A Boss 302 and Mach 1 Are Also Available
						</h2>
						<p className='p'>
							If you walk into a Ford dealer today, you can pick up a 2018
							Mustang GT that makes 460 hp, hits 60 mph in 4.4 seconds, and
							includes an optional magnetic suspension for less than $45,000. It
							will be comfortable and refined enough to take on a road trip,
							while still keeping up with the pricier BMW M4 on the track.
						</p>
					</div>
					<div className='block-4__column-2'>
						<img
							className='block-4__right-img'
							src='/img/5.png'
							alt='mustang'
						/>
						<p className='p'>
							But no matter how good the current car is, there's always going to
							be a certain group of people who wish Ford would simply keep
							building vintage Mustangs. That's where continuation builders such
							as Classic Recreations come in.
						</p>
						<p className='p'>
							Classic Recreations has been building officially licensed Shelby
							Mustangs for a while, and according to our friends at AUTOMOBILE,
							they're good. Really good. Recently, CR landed the license to
							build three more classic Mustangs: the 1969-1970 Boss 302, the
							1969-1970 Boss 429, and the 1969-1970 Mach 1. These aren't
							resto-mods, either. Underneath the vintage sheetmetal, you
							essentially get a brand new car.
						</p>
						<button className='button'>Read More</button>
					</div>
				</div>
			</div>
			<div className='block-5'></div>
		</div>
	)
}

export default App
