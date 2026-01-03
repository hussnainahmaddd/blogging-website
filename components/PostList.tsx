import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";
import styles from "./FeaturedPosts.module.css"; // Reusing existing styles
import { ArrowRight } from "lucide-react";

export default function PostList({ posts, title }: { posts: BlogPost[], title: string }) {
    return (
        <section className={styles.section} style={{ paddingTop: '120px' }}>
            <div className="container">
                <h1 className={styles.title} style={{ fontSize: '3rem', marginBottom: '3rem' }}>{title}</h1>

                {posts.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#94a3b8' }}>No posts found in this category yet.</p>
                ) : (
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
                )}
            </div>
        </section>
    );
}
