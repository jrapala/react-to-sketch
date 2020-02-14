import React from 'react'
import ColorRange from "./ColorRange"

const Main = () => {
	const colorNames = ["master-tour-red"]
	const range = [ 50 ]
	for (let i = 100; i < 1000; i = i + 100) { range.push(i) }

	return (
		<body>
			{colorNames.map(color => <ColorRange color={color} range={range}/>)}
		</body>
	)
}

export default Main
