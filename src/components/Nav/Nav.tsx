import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { getPathFromRoute } from '@/routes.tsx';
import { routes } from '@/routes';
import s from './Nav.module.scss';

type NavProps = {
	theme: "dark" | "light"
}

const Nav: FC<NavProps> = ({theme = "dark"}) => {

	const filteredRoutes = routes.filter((route) => route.title !== "Error Page" && route.title !== "Test");

	return (
		<nav className={`${s.nav} ${theme === "dark" ? s.dark : s.light}`}>
			<div className={s.container}>
				{theme === "dark" && "CompanyName"}
				<div className={s.navLinks}>
					<ul>
					{filteredRoutes.map((route) => (
							<li key={route.title}>
								<NavLink
								 className={({ isActive }) => (isActive ? s.active : "")}
								to={getPathFromRoute(route)}>{route.title}</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
