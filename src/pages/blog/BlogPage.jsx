import BlogCard from "./BlogCard"

const blogPosts = [
    {
        id: 1,
        title: "How to Choose the Right Ethernet Cable for Speed & Reliability",
        image: "/blog/cables.jpg",
        content:
            "When it comes to network performance, choosing the right Ethernet cable is crucial. This guide will help you understand the different types of Ethernet cables, their speed capabilities, and how to select the best one for your specific needs.",
        slug: "choose-right-ethernet-cable",
        points: [
            "Cable Categories: Choose Cat5e for basic use, Cat6 for better speed, and Cat7/8 for high-performance networking.",
            "Shielding: For environments with interference, opt for shielded cables (STP) over unshielded (UTP).",
            "Cable Length: Shorter cables maintain better speed & signal integrity—avoid excessive lengths.",
            "Connector Type: Ensure compatibility with your devices—standard RJ45 connectors work for most applications.",
            "Bandwidth & Speed: Check the cable's MHz rating to match your internet speed requirements."
        ],
    },
    {
        id: 2,
        title: "Essential Factors to Consider When Buying a CCTV Camera",
        image: "/blog/cctv.jpg",
        content:
            "Investing in a CCTV camera system can significantly enhance your property's security. We'll walk you through the key factors to consider, including resolution, field of view, night vision capabilities, and storage options, to help you make an informed decision.",
        slug: "factors-buying-cctv-camera",
        points: [
            "Resolution: Higher resolution (e.g., 1080p, 4K) ensures clearer footage.",
            "Camera Type: Choose Dome cameras for wide angles, Bullet cameras for long distances, and PTZ cameras for flexible movement.",
            "Night Vision: Ensure infrared (IR) or low-light sensors for visibility at night.",
            "Storage Options: Consider DVR/NVR storage or cloud backup for recording.",
            "Connectivity: Wired cameras offer reliable performance, while wireless cameras provide easy installation."
        ],
    },
    {
        id: 3,
        title: "Finding the Best Network Solution for Your Needs - Networking Routers and Receivers",
        image: "/blog/router.png",
        content:
            "Navigating the world of networking equipment can be overwhelming. This article breaks down the differences between routers and receivers, explains key features to look for, and provides recommendations based on various use cases, from home offices to large enterprises.",
        slug: "best-network-solution-routers-receivers",
        points: [
            "Speed & Bandwidth: Match the router's Mbps/Gbps rating to your internet plan.",
            "Dual-Band vs. Tri-Band: Dual-band (2.4GHz & 5GHz) is sufficient for most homes; tri-band helps with multiple devices.",
            "Coverage Area: Large homes benefit from mesh Wi-Fi systems for seamless connectivity.",
            "Security Features: Look for WPA3 encryption, firewalls, and parental controls for safety.",
            "Wired vs. Wireless Ports: More Ethernet ports provide stable wired connections for gaming & streaming."
        ],
    },
    {
        id: 4,
        title: "Selecting the Perfect Setup for Clear Reception - Aerials and Satellite Dishes",
        image: "/blog/aerials.jpg",
        content:
            "Whether you're looking to improve your TV reception or set up a satellite internet connection, choosing the right aerial or satellite dish is crucial. We'll guide you through the different types available, installation considerations, and how to optimize your setup for the best possible signal.",
        slug: "selecting-aerials-satellite-dishes",
        points: [
            "Indoor vs. Outdoor Aerials: Indoor aerials work well for strong signals, while outdoor aerials are better for distant signals.",
            "Satellite Dish Size: A larger dish improves reception, especially in bad weather.",
            "HD & 4K Compatibility: Ensure the aerial or dish supports high-definition (HD) or 4K broadcasts.",
            "Signal Boosters: Weak signal? Add a signal amplifier for better clarity.",
            "Installation Location: Mount aerials & dishes at higher positions for optimal reception."
        ],
    },
];


const BlogPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
            <div className="space-y-8">
                {blogPosts.map((post) => (
                    <BlogCard
                        key={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        slug={post.slug}
                        points={post.points}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogPage

