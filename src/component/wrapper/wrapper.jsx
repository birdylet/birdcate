import { Header } from "./components"

export function Wrapper({title, children, cNMain}){
	return(
		<div className="flex flex-col items-center bg-[length:200%_200%] bg-gradient-to-tr to-primary from-secondary animate-bg text-text h-full w-full">
			<p className="absolute">LUAN KAIKE MACK SANTOS</p>
			<Header title={title}/>
			<main className="flex h-3/4 w-full gap-x-6 max-w-[1200px] p-2">
				{children}
			</main>
		</div>
	)
}