import { RouteObject } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { ErrorPage } from '@pages/ErrorPage';
import { TestPage } from '@pages/TestPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

export type ExtendedRouteObject = RouteObject & {
	title: string;	
	titleLang?: string;
	path: string;
};

export const ROUTES = {
	home: {
		path: '/',
		title: 'Главная',
		element: <HomePage />,
	} as ExtendedRouteObject,
	about: {
		path: '/about',
		title: 'О Нас',
		element: <AboutPage />,
	} as ExtendedRouteObject,
	services: {
		path: '/services',
		title: 'Услуги',
		element: <ServicesPage />,
	} as ExtendedRouteObject,
	portfolio: {
		path: '/portfolio',
		title: 'Портфолио',
		element: <PortfolioPage />,
	} as ExtendedRouteObject,
	contact: {
		path: '/contact',
		title: 'Контакты',
		element: <ContactPage />,
	} as ExtendedRouteObject,
	test: {
		path: '/test',
		title: 'Test',
		element: <TestPage />,
	} as ExtendedRouteObject,
	error: {
		path: '*',
		title: 'Error Page',
		titleLang: 'pages:error',
		element: <ErrorPage />,
	} as ExtendedRouteObject,
};

export type RouteKeys = keyof typeof ROUTES;

// Create an array of routes for use with useRoutes
export const routes: ExtendedRouteObject[] = Object.values(ROUTES);

export const getPathFromRoute = (route: ExtendedRouteObject): string => {
	return route.path || '';
};
