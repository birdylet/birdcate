import { useState } from 'react'
import { Wrapper } from './component'
import { DisplayInfo } from './component/displayInfo/DisplayInfo'
import { DisplayAssets } from './component/displayAssets/DisplayAssets'

function App() {
	const synopsis = "bla ".repeat(999)

	return (
		<Wrapper title="birdcate" CNMain="">
			<DisplayInfo 
				title="filme tal" 
				synopsis={synopsis} 
				genres={["terror", "aventura", "ação", "suspense", "animação", "infantil"]}
				time="2:30:17" rating="8" sla="duckylet" ola="123"/>
				<DisplayAssets about={"tal"}/>
		</Wrapper>
	)
}

export default App
