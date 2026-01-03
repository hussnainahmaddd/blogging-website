import { blogPosts } from "@/lib/blog-data";
import PostList from "@/components/PostList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Health & Pregnancy Guides - NexaWell",
    description: "Expert advice on pregnancy, wellness, and bio-health.",
};

export default function HealthPage() {
    const healthPosts = blogPosts.filter(post => post.category === "Health");
    return <PostList posts={healthPosts} title="Health & Wellness" />;
}
