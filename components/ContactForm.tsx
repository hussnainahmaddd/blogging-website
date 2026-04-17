"use client";

import styles from "@/app/contact/page.module.css";

export default function ContactForm() {
    return (
        <div className={styles.formCard}>
            <h2>Send a Message</h2>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <select id="subject">
                        <option>General Inquiry</option>
                        <option>Advertising / Partnership</option>
                        <option>Report an Error</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={5} placeholder="How can we help?" required></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>Send Message</button>
                <p className={styles.note}>Note: This form is a demo. Please email us directly.</p>
            </form>
        </div>
    );
}
