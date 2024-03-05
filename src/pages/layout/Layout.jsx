import {Outlet} from "react-router";
import {Header, Footer} from "components";

import "./layout.scss";

export default function Layout() {
	return(
		<div className="page">
			<Header />
			
			<main className="main">
				<div className="container">
					<Outlet/>
				</div>
			</main>
			
			<Footer />
			
		</div>
	)
}