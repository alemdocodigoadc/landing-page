import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

	const color = typeof window !== 'undefined' ? 'red' : 'blue'

	return (
		<div className={styles.container} >

			<Head>
				<title>Além do Código</title>
			</Head>

			<Image src="/images/logo-adc-2.svg" alt="" width="101" height="202" />
			<h1>Além do Código</h1>
			<h2>Seja Bem Vindo</h2>
			<br />
			<a href='https://www.youtube.com/channel/UCtQ8Ki9M945TsBVXS_7zWNg'> Acessar canal no Yotuube</a>
			<br />
			<br />
			<br />
			<br />
			<h3>⚒ Site em construção...</h3>
		</div>
	)
}

export default Home
