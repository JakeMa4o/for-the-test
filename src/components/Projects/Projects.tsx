import { FC } from 'react';
import { motion as m } from 'framer-motion';
import s from './Projects.module.scss';
import Nav from '../Nav/Nav';

const Projects: FC = () => {
	return (
		<section className={s.projects}>
			<div className={s.container}>
				<h2>Наши Работы</h2>

				<p>Ознакомтесь с нашими лучшими проектами в различных категориях</p>

				<Nav theme="light" />

				<m.div 
					initial="hidden"
					animate="show"
					variants={{
						hidden: { opacity: 0 },
						show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
					}}
					className={s.projectCards}>
					{Array.from({ length: 6 }, (_, i) => (
						<m.div 
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.1 }}
							viewport={{ once: true, amount: 0.3}}
							className={s.projectCard} key={i}
						>
							Проект {i + 1}
							<div className={s.projectCardDetails}>
								<h3 className={s.projectTitle}>E-commerce платформа</h3>
								<p>Веб-платформа</p>
								<button>Подробнее</button>
							</div>
						</m.div>
					))}
				</m.div>
			</div>
		</section>
	);
};

export default Projects;
