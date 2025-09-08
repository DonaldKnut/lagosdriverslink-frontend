import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Professional Driving in Lagos",
    excerpt:
      "Discover how technology and innovation are transforming the professional driving industry in Lagos, Nigeria.",
    content:
      "Lagos is experiencing a revolution in professional driving services...",
    author: "Lagos Drivers Link Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "/blog-driving-future.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Safety First: Essential Tips for Corporate Drivers",
    excerpt:
      "Learn the essential safety protocols and best practices that every professional driver should follow.",
    content: "Safety is paramount in professional driving...",
    author: "Safety Team",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Safety",
    image: "/blog-safety-tips.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Building Trust: The Driver-Client Relationship",
    excerpt:
      "Understanding how to build and maintain strong relationships with clients in the professional driving industry.",
    content:
      "Trust is the foundation of any successful driver-client relationship...",
    author: "Customer Success Team",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Customer Service",
    image: "/blog-trust-building.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Lagos Traffic: Navigating the City Like a Pro",
    excerpt:
      "Expert tips and strategies for navigating Lagos traffic efficiently and safely.",
    content:
      "Lagos traffic can be challenging, but with the right strategies...",
    author: "Local Experts",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Local Knowledge",
    image: "/blog-lagos-traffic.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Technology in Modern Transportation",
    excerpt:
      "How GPS, ride-sharing apps, and other technologies are changing the transportation landscape.",
    content:
      "Technology continues to reshape how we think about transportation...",
    author: "Tech Team",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Technology",
    image: "/blog-technology.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "The Economics of Professional Driving",
    excerpt:
      "Understanding the business side of professional driving services in Lagos.",
    content:
      "Professional driving is not just about getting from point A to point B...",
    author: "Business Team",
    date: "2023-12-25",
    readTime: "9 min read",
    category: "Business",
    image: "/blog-economics.jpg",
    featured: false,
  },
];

const categories = [
  "All",
  "Industry Insights",
  "Safety",
  "Customer Service",
  "Local Knowledge",
  "Technology",
  "Business",
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header spacing */}
      <div className="h-[88px]"></div>

      {/* Hero Section */}
      <section className="py-20 px-6 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Lagos Drivers Link Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and trends in
            professional driving services across Lagos.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-100 mb-8 text-center">
              Featured Article
            </h2>
            <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-2xl overflow-hidden border border-yellow-500/20">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 px-6 sm:px-12 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-100 mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-r from-yellow-900/20 to-amber-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-100 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates from
            Lagos Drivers Link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

