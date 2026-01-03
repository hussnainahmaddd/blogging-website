import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nexawell.blog';

    // Static pages
    const routes = [
        '',
        '/about',
        '/blog',
        '/blog/health',
        '/blog/tech',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }));

    // Dynamic blog posts
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date), // Use the blog post date
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...posts];
}
