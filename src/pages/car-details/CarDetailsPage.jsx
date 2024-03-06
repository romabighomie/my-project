import {useParams} from "react-router";
import {Link} from "react-router-dom";
import useFetchApi from "hooks/useFetchApi";
import {CarCard} from "components";

export default function CarDetailsPage() {
	const {data: carData} = useFetchApi("test");
	const {carCategory, carName} = useParams();
	
	return(
		<>
			<Link className="link" to={`/cars/${carCategory}`}>View all</Link>
			<br/>
			<br/>
			<br/>
			<div className="cards-wrapper">
				{carData.map((categoryData) => {
					const currentCategory = categoryData.category[carCategory];
					if (currentCategory) {
						return Object.values(currentCategory)
						.map((item) => (
							<CarCard
								key={item.title}
								title={item.title}
								subtitle={item.subtitle}
								img={item.img}
								fuel={item.fuel}
								gearbox={item.gearbox}
								color={item.color}
								price={item.price}
							/>
						));
					}
					return null;
				})}
			</div>
		</>
	)
}