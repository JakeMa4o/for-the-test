import { FC } from 'react';
import s from './HomePage.module.scss';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';

export const HomePage: FC = () => {
	return (
		<div className={s.wrap}>
			<Hero />
			<Projects />
		</div>
	)
};
