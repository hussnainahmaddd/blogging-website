import styles from "./page.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About NexaWell</h1>
            <p className={styles.intro}>
                NexaWell is dedicated to bridging the gap between cutting-edge technology and human well-being.
            </p>

            <section className={styles.section}>
                <h2>Our Mission</h2>
                <p>
                    We believe that the future of health lies in the code we write and the systems we build.
                    Our mission is to educate, inspire, and empower our readers to embrace this convergence.
                </p>
            </section>
        </div>
    );
}
