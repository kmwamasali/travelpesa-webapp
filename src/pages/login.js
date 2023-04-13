import styles from '@/styles/Home.module.css'

export default function Login() {
    return (
        <main className={styles.main}>
            <a href="/api/auth/login">Login</a>
        </main>
    );
}