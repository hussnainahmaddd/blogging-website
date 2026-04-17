import styles from "./page.module.css";
import Image from "next/image";
import { ShieldCheck, Stethoscope, Cpu, Users } from "lucide-react";

export const metadata = {
    title: "About Us | NexaWell",
    description: "Learn about NexaWell's mission to bridge technology and biology. Meet our editorial team and read our medical disclaimer.",
};

export default function About() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>Merging <span className="gradient-text">Biology</span> with <span className="gradient-text">Bytecode</span>.</h1>
                <p className={styles.intro}>
                    NexaWell is the premier destination for forward-thinking individuals who want to understand how technology is rewriting the rules of human health and longevity.
                </p>
            </section>

            {/* Trust Badges */}
            <section className={styles.badges}>
                <div className={styles.badge}>
                    <ShieldCheck size={32} className={styles.icon} />
                    <h3>Evidence Based</h3>
                    <p>Our content is grounded in the latest scientific research, not trends.</p>
                </div>
                <div className={styles.badge}>
                    <Stethoscope size={32} className={styles.icon} />
                    <h3>Medically Reviewed</h3>
                    <p>Health articles are reviewed for clinical accuracy.</p>
                </div>
                <div className={styles.badge}>
                    <Cpu size={32} className={styles.icon} />
                    <h3>Future Focused</h3>
                    <p>We analyze how AI and biotech are shaping tomorrow.</p>
                </div>
            </section>

            <section className={styles.content}>
                <h2>Who We Are</h2>
                <p>
                    Founded in 2026, NexaWell started as a small project to document the rapid changes in the "FemTech" industry.
                    It has since grown into a comprehensive resource covering everything from the <strong>First Trimester of Pregnancy</strong> to <strong>Agentic AI</strong>.
                </p>
                <p>
                    We believe that data is the new vital sign. Whether it's tracking your fertility window with algorithms or using LLMs to decode medical jargon, NexaWell gives you the tools to take ownership of your biology.
                </p>
            </section>

            {/* Editorial Team - Critical for E-E-A-T */}
            <section className={styles.team}>
                <h2>Our Editorial Team</h2>
                <div className={styles.teamGrid}>
                    <div className={styles.member}>
                        {/* Placeholder for real team images */}
                        <div className={styles.memberAvatar}>SV</div>
                        <h3>Dr. Sarah Vital</h3>
                        <span className={styles.role}>Chief Medical Advisor</span>
                        <p>With over 15 years in Obstetrics and Gynecology, Dr. Vital ensures our pregnancy and health content adheres to the highest medical standards.</p>
                    </div>
                    <div className={styles.member}>
                        <div className={styles.memberAvatar}>NT</div>
                        <h3>Nexa Tech Team</h3>
                        <span className={styles.role}>Technology Analysts</span>
                        <p>A collective of software engineers and data scientists tracking the pulse of Artificial Intelligence and Silicon Valley.</p>
                    </div>
                </div>
            </section>

            <section className={styles.disclaimer}>
                <div className={styles.disclaimerBox}>
                    <h3>Medical Disclaimer</h3>
                    <p>
                        The content on NexaWell is for informational and educational purposes only and is not intended as medical advice, diagnosis, or treatment.
                        Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition.
                        Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                    </p>
                </div>
            </section>
        </div>
    );
}
