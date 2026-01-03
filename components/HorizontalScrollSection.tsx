import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";
import styles from "./HorizontalScrollSection.module.css";
import { ArrowRight } from "lucide-react";

interface HorizontalScrollSectionProps {
    category: "Health" | "Tech" | "Latest" | "Special Series"; // Added Latest & Special Series
    title: string;
    posts: BlogPost[];
    className?: string;
    viewAllLink?: string; // Optional custom link
}

export default function HorizontalScrollSection({ category, title, posts, className, viewAllLink }: HorizontalScrollSectionProps) {
    const linkHref = viewAllLink || `/blog/${category.toLowerCase()}`;

    return (
        <section className={`${styles.section} ${className || ''}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <Link href={linkHref} className={styles.viewAll}>
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                <div className={styles.scrollContainer}>
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                            <div className={styles.imageWrapper} style={{ position: 'relative', width: '100%', height: '180px' }}>
                                <Image
                                    src={post.heroImage}
                                    alt={post.title}
                                    fill
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.readTime}>{post.readTime}</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
