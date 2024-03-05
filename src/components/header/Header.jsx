import {Link} from "react-router-dom";
import "./header.scss";

export default function Header() {
	return(
		<header className="header">
			
			<div className="container">
				
				<div className="header__wrapper">
					<div className="header__logo">
						<Link to="/">LOGO</Link>
					</div>
					
					<div className="header__row">
						<Link to="order">order</Link>
						<Link to="favorites">favorites</Link>
						<Link to="profile">profile</Link>
					</div>
				</div>
				
			</div>
			
		</header>
	)
}