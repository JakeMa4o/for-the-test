import { FC } from "react"
import { MotionProps } from "framer-motion";
import { motion as m } from "framer-motion";
import s from "./HeroCard.module.scss";

type HeroCardDetails = {
    rating: number;
    feature: string;
}

type HeroCardProps = {
  id: number;
  icon: string;
  title: string;
  description: string;
  details: HeroCardDetails;
}

const motionProps : MotionProps = {
	initial:{ y: 15, opacity: 0 },
	whileInView : { y: 0, opacity: 1 },
	transition : { duration: 0.5, delay: 0.1 },
	viewport:{ once: true}
}

const HeroCard: FC<HeroCardProps> = ({ icon, title, description, details }) => {
  return (
    <div className={s.heroCard}>
				<m.div 
					{...motionProps}
					initial={{ x: "-50%", y: 15 }}
					transition={{ duration: 0.5 }}
					className={s.icon}		
				>
					{icon}
				</m.div>
				<m.h3 {...motionProps}>{title}</m.h3>
				<m.p {...motionProps}>{description}</m.p>
				<div className={s.details}>
					<div>
					★ <span className={s.rating}>{details.rating}</span>
					</div>
					<div className={s.feature}>{details.feature}</div>
				</div>
    </div>
  )
}

export default HeroCard