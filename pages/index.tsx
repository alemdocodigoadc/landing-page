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
		</div>
	)
}

export default Home
