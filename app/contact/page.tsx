import styles from "./page.module.css";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact Us | NexaWell",
    description: "Get in touch with the NexaWell team for inquiries, partnerships, or corrections.",
};

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.intro}>
                Have a question about an article? Want to partner with us? We'd love to hear from you.
            </p>

            <div className={styles.grid}>
                {/* Contact Info Card */}
                <div className={styles.card}>
                    <h2>Contact Information</h2>

                    <div className={styles.infoItem}>
                        <Mail className={styles.icon} />
                        <div>
                            <h3>Email Us</h3>
                            <p>For general inquiries:</p>
                            <a href="mailto:hello@nexawell.blog" className={styles.link}>hello@nexawell.blog</a>
                            <p style={{ marginTop: '0.5rem' }}>For editorial corrections:</p>
                            <a href="mailto:editor@nexawell.blog" className={styles.link}>editor@nexawell.blog</a>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <MapPin className={styles.icon} />
                        <div>
                            <h3>Mailing Address</h3>
                            <p>NexaWell Digital Media</p>
                            <p>123 Innovation Drive, Suite 400</p>
                            <p>San Francisco, CA 94103</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <Clock className={styles.icon} />
                        <div>
                            <h3>Response Time</h3>
                            <p>We aim to respond to all inquiries within 48 business hours.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Placeholder */}
                <ContactForm />
            </div>
        </div>
    );
}

