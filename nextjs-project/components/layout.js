import Head from 'next/head'
import styles from '../styles/Layout.module.css';

export default function Layout({ children }){
    return (
        <>
            <Head>
                <title>Nexjs Tests Project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>{children}</div>
        </>
    )
}