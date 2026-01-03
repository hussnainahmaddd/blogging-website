import { blogPosts } from "@/lib/blog-data";
import PostList from "@/components/PostList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Future Tech Insights - NexaWell",
    description: "Exploring the bleeding edge of technology and automation.",
};

export default function TechPage() {
    const techPosts = blogPosts.filter(post => post.category === "Tech");
    return <PostList posts={techPosts} title="Future Tech" />;
}
