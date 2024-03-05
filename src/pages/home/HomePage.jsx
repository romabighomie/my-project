import {Link} from "react-router-dom";
import useFetchCarsApi from "hooks/useFetchCarsApi";
import {CarCard} from "components";
import {ReactComponent as IconSaloon} from "assets/svg/icon-saloon.svg";
import "./home.scss";

export default function HomePage() {
	const {carData} = useFetchCarsApi();
	
	return(
		<div className="home">
			
			<div className="home__car-cards">
				<div className="home__row">
					<div className="home__title-icon">
						<IconSaloon />
					</div>
					<Link className="home__link" to="cars">
						View all
					</Link>
				</div>
				
				<div className="home__car-cards-wrapper">
					{carData.filter((item, index) => index < 4).map(item => (
						<CarCard
							key={item.id}
							id={item.id}
							name={item.name}
							title={item.title}
							subtitle={item.subtitle}
							img={item.img}
							fuel={item.fuel}
							gearbox={item.gearbox}
							color={item.color}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</div>
	)
}