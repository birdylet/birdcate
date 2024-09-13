import { useState } from 'react'

export function Status({title, value}) {
	return (
		<p>
			<span className="font-bold animate-test">{title}</span> 
			<span>: {value}</span>
		</p>
	)
}

export function DisplayInfo({title, synopsis, genres, ...status}) {
	return (
		<aside className="flex flex-col w-1/2 h-full gap-y-6 p-1">
			<h1 className="text-xl text-center font-bold uppercase">
				{title}
			</h1>

			<p className="text-sm max-h-[50%] overflow-auto">
				{synopsis}
			</p>

			<div className="grid col-3">
				{Object.entries(status).map(([k, v]) => (
					<Status key={k} title={k} value={v}/>
				))}
			</div>

			<div className="flex flex-row gap-x-6 overflow-y-hidden">
				{genres.map((g, i) => (
					<p key={i} className="clip-1 px-6 bg-emphasis">
						{g}
					</p>
				))}
			</div>
		</aside>
	)
}
