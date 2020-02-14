import React from 'react'

const ColorRange = ({ color, range }) => (
	<div data-sketch-symbol={`Palette/${color}`} className='palette'>
		<div data-sketch-symbol={`Palette/Swatch/${color}`} className='swatches'>
			<div data-sketch-symbol={`Palette/SwatchTitle/${color}`} className={`${color}-500 swatch-title`}>
				<h3 data-sketch-text={`SwatchTitleText/${color}`}>{color}</h3>
			</div>
			{range.map(num => (
				<div key={`${color}-${num}`} data-sketch-symbol={`Color/${color}-${num}`} className={`color-swatch ${color}-${num}`}>
					{`${color}-${num}`}
				</div>
			))}
		</div>
	</div>
)

export default ColorRange
