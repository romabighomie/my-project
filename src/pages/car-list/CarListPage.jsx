import {useParams} from "react-router";
import useFetchApi from "hooks/useFetchApi";
import {CarCard} from "components";

export default function CarListPage() {
	const {data: carData} = useFetchApi("cars");
	const {carCategory} = useParams();
	
	return(
		<>
			<div className="cards-wrapper">
				{
					carData
					.filter(item => item.category === carCategory)
					.map(item => (
						<CarCard
							key={item.id}
							id={item.id}
							category={item.category}
							name={item.name}
							title={item.title}
							subtitle={item.subtitle}
							img={item.img}
							fuel={item.fuel}
							gearbox={item.gearbox}
							color={item.color}
							price={item.price}
						/>
					))
				}
			</div>
		</>
	)
}