import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight, Cpu, Dna } from "lucide-react";
import FeaturedPosts from "@/components/FeaturedPosts";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import { blogPosts } from "@/lib/blog-data";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>Welcome to the Future</span>
            <h1 className={styles.title}>
              Merging <span className="gradient-text">Biology</span> <br />
              with <span className="gradient-text">Bytecode</span>
            </h1>
            <p className={styles.subtitle}>
              NexaWell is your premium source for the latest breakthroughs in health technology, bio-hacking, and digital wellness.
            </p>
            <div className={styles.ctaGroup}>
              <a href="/blog/health" className="btn btn-primary">
                Read Articles <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </a>
              <a href="/about" className="btn btn-outline">
                About Us
              </a>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className={styles.glowBg}></div>
      </section>



      {/* Featured Blog Posts (Latest Mixed) */}
      <HorizontalScrollSection
        category="Latest"
        title="Latest Insights"
        posts={[...blogPosts].reverse().slice(0, 6)}
        viewAllLink="/blog"
      />

      {/* Featured Health Slider */}
      <HorizontalScrollSection
        category="Health"
        title="Featured Health & Wellness"
        posts={blogPosts.filter(p => p.category === 'Health' && !p.title.includes("Breast Cancer"))}
      />

      {/* Special Feature: Breast Cancer Awareness */}
      <HorizontalScrollSection
        category="Special Series"
        title="Breast Cancer Awareness: The Comprehensive Guide"
        posts={blogPosts.filter(p => p.title.includes("Breast Cancer") || p.title.includes("Decoding the Diagnosis"))} // Filtering by title to capture the series
        className={styles.darkerSection}
        viewAllLink="/blog/health"
      />

      {/* Featured Tech Slider */}
      <HorizontalScrollSection
        category="Tech"
        title="Future Tech Insights"
        posts={blogPosts.filter(p => p.category === 'Tech')}
      />
    </div>
  );
}
