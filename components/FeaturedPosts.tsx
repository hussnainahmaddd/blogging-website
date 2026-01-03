import Link from "next/link";
import Image from "next/image";
import { BlogPost, blogPosts } from "@/lib/blog-data";
import styles from "./FeaturedPosts.module.css";
import { ArrowRight } from "lucide-react";

interface FeaturedPostsProps {
    posts?: BlogPost[];
    title?: string;
    className?: string;
}

export default function FeaturedPosts({ posts = blogPosts, title = "Latest Insights", className }: FeaturedPostsProps) {
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
