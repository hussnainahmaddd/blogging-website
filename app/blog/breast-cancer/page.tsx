import { blogPosts } from "@/lib/blog-data";
import PostList from "@/components/PostList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Breast Cancer Awareness - NexaWell",
    description: "Comprehensive guides on breast cancer detection, treatment, symptoms, and survivorship.",
};

export default function BreastCancerPage() {
    const cancerPosts = blogPosts.filter(
        post => post.title.includes("Breast Cancer") || post.title.includes("Decoding the Diagnosis")
    );
    return <PostList posts={cancerPosts} title="Breast Cancer Awareness Series" />;
}
