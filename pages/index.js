import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Body from "../components/Body";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>BlackSpace</title>
				<meta name="description" content="new internet in your palm!"/>
				<link rel="icon" href="/appicon_1024.png"/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link
					href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>
			</Head>

			<main class="flex-col justify-center items-center flex-1 flex bg-black">
				<Body/>
			</main>

			<footer className={styles.footer}>
				<p class="text-mid_ground font-body text-xs">
					© 2022, Batcave Technologies Pvt. Ltd.
				</p>
			</footer>
		</div>
	)
}
