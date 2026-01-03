import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link href="/" className={styles.logo}>
                        NexaWell
                    </Link>
                    <p>
                        Merging Biology with Bytecode. The ultimate resource for future-forward health and technology.
                    </p>
                    <a href="mailto:hello@nexawell.blog" className={styles.emailLink}>
                        hello@nexawell.blog
                    </a>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottomBar}>
                    <span>© {currentYear} NexaWell. All rights reserved.</span>

                    <span className={styles.developer}>
                        Developed by{' '}
                        <a
                            href="https://www.linkedin.com/in/hussnain-ahmad-/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.devLink}
                        >
                            Hasnain Ahmad
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
