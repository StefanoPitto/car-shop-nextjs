import Head from "next/head";
import { FC } from "react";

interface Props {
	title: string;
	description: string;
	children: FC;
}

export const Layout: FC<Props> = ({ children, title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="og:title" content={title} />
				<meta name="og:description" content={description} />
			</Head>
			<nav>{/*NavBar*/}</nav>
			<>{children}</>
			<footer>{/*Footer*/}</footer>
		</>
	);
};
