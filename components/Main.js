import React from 'react'

const Main = () => {
	const range = [ 50 ]
	for (let i = 100; i < 1000; i = i + 100) { range.push(i) }

	return (
		<body>
			<div data-sketch-symbol="Palette/master-tour-red" className='palette'>
				<div data-sketch-symbol="Palette/Swatch" className='swatches'>
					<div data-sketch-symbol="Palette/SwatchTitle" className='master-tour-red-500 swatch-title'>
						<h3 data-sketch-text="SwatchTitleText">master-tour-red</h3>
					</div>
					{range.map(num => (
						<div data-sketch-symbol={`Color/master-tour-red-${num}`} className={`color-swatch master-tour-red-${num}`}>
							{`master-tour-red-${num}`}
						</div>
					))}
				</div>
			</div>
		</body>
	)
}

export default Main
