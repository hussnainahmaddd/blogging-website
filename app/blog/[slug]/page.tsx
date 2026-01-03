
import Image from "next/image";
import styles from "./page.module.css";
import { ArrowLeft } from "lucide-react";
import { blogPosts, BlogPost } from "@/lib/blog-data";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import ReactMarkdown from 'react-markdown';
import { notFound } from "next/navigation";

// Generate Static Params for SSG - using a standard async function for Next.js 13+
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found - NexaWell',
        };
    }

    const ogImage = post.heroImage.startsWith("/")
        ? `https://nexawell.blog${post.heroImage}`
        : post.heroImage;

    return {
        title: `${post.title} | NexaWell`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://nexawell.blog/blog/${post.slug}`,
            siteName: 'NexaWell',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            locale: 'en_US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [ogImage],
        },
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    // Await params in newer Next.js versions if needed, but here we can access directly or await.
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // JSON-LD Structured Data for Google
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [`https://nexawell.blog${post.heroImage}`],
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(), // Should be updated date if modified
        author: [{
            '@type': 'Person',
            name: post.author,
            url: 'https://nexawell.blog/about'
        }],
        publisher: {
            '@type': 'Organization',
            name: 'NexaWell',
            logo: {
                '@type': 'ImageObject',
                url: 'https://nexawell.blog/favicon.ico'
            }
        },
        description: post.excerpt,
    };

    return (
        <>
            <article className={styles.container}>
                {/* Inject JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Back Link */}
                <a href="/" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Home
                </a>

                {/* Header */}
                <header className={styles.header}>
                    <span className={styles.category}>{post.category}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By {post.author}</span>
                        <span className={styles.date}>{post.date}</span> • <span>{post.readTime}</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className={styles.imageWrapper}>
                    <Image
                        src={post.heroImage}
                        alt={post.title}
                        width={800}
                        height={400}
                        className={styles.heroImg}
                    />
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <ReactMarkdown
                        components={{
                            img: ({ node, ...props }) => (
                                <span className={styles.contentImgWrapper}>
                                    <Image
                                        src={props.src as string}
                                        alt={props.alt as string}
                                        width={600}
                                        height={400}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </span>
                            )
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>

                    {/* AdSense Unit */}
                    <div className={styles.adUnit}>
                        <span>Advertisement - Recommended for You</span>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <HorizontalScrollSection
                category={post.category}
                title="Related Articles"
                posts={blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 4)}
                viewAllLink={`/blog/${post.category?.toLowerCase()}`}
            />
        </>
    );
}

