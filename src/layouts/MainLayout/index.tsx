import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import s from './MainLayout.module.scss';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes.tsx';
import { ButtonX } from '@components/ButtonX';

interface MainLayoutProps {
	classNames?: {
		root?: string;
		body?: string;
		footer?: string;
	};
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
	children,
	classNames,
}) => {
	return (
		<div className={clsx(s.wrap, classNames?.root)}>
			<div className={clsx(s.wrap__header, classNames?.footer)}>
				<Link to={ROUTES.home.path} className={s.wrap__headerBtn}>
					<ButtonX>{ROUTES.home.title}</ButtonX>
				</Link>
				<Link to={ROUTES.test.path} className={s.wrap__headerBtn}>
					<ButtonX>{ROUTES.test.title}</ButtonX>
				</Link>
			</div>
			<div className={clsx(s.wrap__body, classNames?.body)}>
				<ErrorBoundary>{children}</ErrorBoundary>
			</div>
			<div className={clsx(s.wrap__footer, classNames?.footer)}>FOOTER</div>
		</div>
	);
};
