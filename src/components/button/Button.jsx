import "./button.scss";

export default function Button({color, type, onClick, text}) {
	return(
		<button
			className={`button button--${color}`}
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	)
}