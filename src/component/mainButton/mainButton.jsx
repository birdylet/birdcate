export function MainButton({title, ...props}){
	return(
		<button {...props} className="bg-emphasis rounded-xl hover:brightness-105 active:brightness-95">{title}</button>
	)
}