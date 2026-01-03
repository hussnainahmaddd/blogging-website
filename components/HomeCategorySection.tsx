import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import styles from "./FeaturedPosts.module.css";
import { ArrowRight } from "lucide-react";

interface HomeCategorySectionProps {
    category: "Health" | "Tech";
    title: string;
    className?: string;
}

export default function HomeCategorySection({ category, title, className }: HomeCategorySectionProps) {
    // Get latest 3 posts for the category
    const posts = blogPosts
        .filter(post => post.category === category)
        .slice(0, 3);

    return (
        <section className={`${styles.section} ${className || ''}`}>
            <div className="container">
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.grid}>
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={post.heroImage}
                                    alt={post.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.category}>{post.category}</span>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <span className={styles.readMore}>
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
