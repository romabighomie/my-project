import {useState} from "react";
import {Link} from "react-router-dom";
import useFetchApi from "hooks/useFetchApi";
import {CarCard} from "components";
import {
	IconCarCategorySaloon,
	IconCarCategorySuv,
	IconCarCategoryEstate,
	IconCarCategoryCompact,
	IconCarCategoryCoupe,
	IconCarCategoryCabriolet,
	IconCarCategoryVan
} from "assets/svg/index";
import "./home.scss";

export default function HomePage() {
	const {data: carData} = useFetchApi("cars");
	const [showMore, setShowMore] = useState(false);
	
	function handleShowMore() {
		setShowMore(true);
	}
	
	return(
		<div className="home">
			
			{/* SALOON CARS */}
			<div className="home__item">
				<div className="home__row">
					<div className="home__title-icon">
						<IconCarCategorySaloon />
					</div>
					<Link className="link" to="cars/saloon">
						View all
					</Link>
				</div>
				
				<div className="cards-wrapper">
					{
						carData
							.filter(item => item.category === "saloon")
							.slice(0, 4)
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
			</div>
			
			{/* SUV CARS */}
			<div className="home__item">
				<div className="home__row">
					<div className="home__title-icon">
						<IconCarCategorySuv />
					</div>
					<Link className="link" to="cars/suv">
						View all
					</Link>
				</div>
				
				<div className="cards-wrapper">
					{
						carData
						.filter(item => item.category === "suv")
						.slice(0, 4)
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
			</div>
			
			{/* SHOW MORE */}
			{
				!showMore &&
				<div className="home__show-more">
					<button
						className="link"
						onClick={handleShowMore}
					>
						Show more
					</button>
				</div>
			}
			
			
			{
				showMore &&
				<>
				{/* ESTATE CARS */}
					<div className="home__item">
						<div className="home__row">
							<div className="home__title-icon">
								<IconCarCategoryEstate/>
							</div>
							<Link className="link" to="cars/estate">
								View all
							</Link>
						</div>
						
						<div className="cards-wrapper">
							{
								carData
								.filter(item => item.category === "estate")
								.slice(0, 4)
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
					</div>
				</>
			}
		</div>
	)
}