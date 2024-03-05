import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faChargingStation,
	faGasPump,
	faGear,
	faHeart,
	faPalette
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "components";
import "./car-card.scss";

export default function carCard(props) {
	
	return(
		<div className="car-card">
			
			<button className="car-card__favorites">
				<FontAwesomeIcon icon={faHeart} />
			</button>
			
			<div className="car-card__header">
				<div className="car-card__title">{props.title}</div>
				<div className="car-card__subtitle">{props.subtitle}</div>
			</div>
			
			<img className="car-card__image" src={props.img} alt="" />
			
			<div className="car-card__info">
				<div
					className="car-card__features">
					<FontAwesomeIcon
						color={props.fuel === "Electric" ? "var(--green-500)" : ""}
						icon={props.fuel === "Electric" ? faChargingStation : faGasPump}
					/>
					{props.fuel}
				</div>
				
				<div className="car-card__features">
					<FontAwesomeIcon icon={faGear} />
					{props.gearbox}
				</div>
				
				<div className="car-card__features">
					<FontAwesomeIcon icon={faPalette} />
					{props.color}
				</div>
			</div>
			
			<div className="car-card__footer">
				<div className="car-card__footer-row">
					<div className="car-card__price">
						€{props.price}
					</div>
					
					<div className="car-card__button">
						<Button
							type="button"
							text="Buy now"
							color="blue"
						/>
					</div>
				</div>
				
				<div className="car-card__footer-row">
					<Link
						className="car-card__more-info"
						to={`cars/${props.name}`}
					>
						More info
					</Link>
				</div>
			</div>
			
		</div>
	)
}