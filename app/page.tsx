import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight, Cpu, Dna } from "lucide-react";
import FeaturedPosts from "@/components/FeaturedPosts";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import { blogPosts } from "@/lib/blog-data";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* ... existing hero code ... */}
      </section>

      {/* Ad: Top of Home */}
      <AdPlaceholder id={101} />

      {/* Featured Blog Posts (Latest Mixed) */}
      <HorizontalScrollSection
        category="Latest"
        title="Latest Insights"
        posts={[...blogPosts].reverse().slice(0, 6)}
        viewAllLink="/blog/health"
      />

      {/* Ad: Middle 1 */}
      <AdPlaceholder id={102} />

      {/* Featured Health Slider */}
      <HorizontalScrollSection
        category="Health"
        title="Featured Health & Wellness"
        posts={blogPosts.filter(p => p.category === 'Health' && !p.title.includes("Breast Cancer"))}
      />

      {/* Ad: Middle 2 */}
      <AdPlaceholder id={103} />

      {/* Special Feature: Breast Cancer Awareness */}
      <HorizontalScrollSection
        category="Special Series"
        title="Breast Cancer Awareness: The Comprehensive Guide"
        posts={blogPosts.filter(p => p.title.includes("Breast Cancer") || p.title.includes("Decoding the Diagnosis"))}
        className={styles.darkerSection}
        viewAllLink="/blog/health"
      />

      {/* Ad: Middle 3 */}
      <AdPlaceholder id={104} />

      {/* Featured Tech Slider */}
      <HorizontalScrollSection
        category="Tech"
        title="Future Tech Insights"
        posts={blogPosts.filter(p => p.category === 'Tech')}
      />

      {/* Ad: Bottom of Home */}
      <AdPlaceholder id={105} />
    </div>
  );
}
