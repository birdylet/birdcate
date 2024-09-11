import { useState } from 'react'

export function DisplayAssets({about, img}) {
	return (
		<aside className="flex relative flex-col items-center w-3/4 h-full p-1">
			<div className="w-1/2 aspect-[2/3] block bg-secondary animate-pulse mb-2"/>
			<div style={{backgroundImage: 'url("https://picsum.photos/2000/3000"'}} className="absolute w-1/2 aspect-[2/3] bg-no-repeat bg-cover"/>
			<p className="italic text-secondary">
				{about}
			</p>
		</aside>
	)
}
