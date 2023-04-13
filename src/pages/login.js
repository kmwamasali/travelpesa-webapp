import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export default function Login() {
    return (
        <main className={styles.main}>
            <Link href="/api/auth/login">Login</Link>
        </main>
    );
}