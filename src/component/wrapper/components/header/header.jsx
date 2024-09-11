export function Header({title}) {
	return (
		<header className="relative text-emphsis flex bg-secondary/30 backdrop-blur-sm mb-[5%] w-full h-[5%]">
			<p className="absolute flex items-start top-[99%] h-full pl-5 align-top select-none text-emphasis pr-20 text-3xl uppercase font-black clip bg-inherit">
				<span className="-translate-y-[25%]">{title}</span>
			</p>
		</header>
	)
}