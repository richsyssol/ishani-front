import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  // Sample blog data (in a real app, this would come from an API)
  const blog = {
    id: 1,
    title: "5 Essential Tips for French Door Maintenance",
    content: `
      <p>French doors add elegance and functionality to any home, but like any other part of your house, they require proper maintenance to keep them looking and functioning their best. Here are five essential tips to help you maintain your French doors:</p>
      
      <h2>1. Regular Cleaning</h2>
      <p>Dirt and grime can accumulate on your French doors, especially in the tracks and hinges. Clean the glass panels with a mild glass cleaner and the frames with a damp cloth. For wooden frames, use a wood-specific cleaner to prevent damage.</p>
      
      <h2>2. Lubricate Moving Parts</h2>
      <p>The hinges, locks, and rollers (if your doors have them) should be lubricated at least twice a year. Use a silicone-based lubricant for best results, as it won't attract dirt like oil-based products.</p>
      
      <img src="https://images.unsplash.com/photo-1600566752229-250ed79470c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="French door maintenance" class="w-full h-auto my-6 rounded-lg">
      
      <h2>3. Check Weather Stripping</h2>
      <p>The weather stripping around your French doors prevents drafts and moisture from entering your home. Inspect it annually and replace it if it's cracked or peeling. This simple step can improve energy efficiency.</p>
      
      <h2>4. Inspect for Damage</h2>
      <p>Regularly check your doors for any signs of damage - cracks in the glass, warping in the frames, or rust on metal components. Early detection can prevent more costly repairs down the line.</p>
      
      <h2>5. Seasonal Adjustments</h2>
      <p>Wood expands and contracts with changes in humidity. You may need to adjust the doors slightly with the seasons to ensure they continue to open and close smoothly.</p>
      
      <p>By following these simple maintenance tips, your French doors will continue to enhance your home's beauty and functionality for years to come. For professional maintenance or repairs, don't hesitate to <a href="/contact" class="text-yellow-600 hover:underline">contact our team</a>.</p>
    `,
    excerpt:
      "Learn how to keep your French doors looking and functioning like new with these maintenance tips.",
    category: "Door Maintenance",
    date: "May 15, 2023",
    slug: "french-door-maintenance-tips",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Rajesh Sharma",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Door Maintenance Specialist",
    },
    relatedProducts: [
      { id: 1, name: "Premium French Doors", link: "/products/french-doors" },
      {
        id: 2,
        name: "Door Maintenance Kit",
        link: "/products/door-maintenance-kit",
      },
    ],
  };

  // Recent posts for sidebar (would come from API in real app)
  const recentPosts = [
    {
      id: 2,
      title: "2023 Window Design Trends You Should Know",
      date: "April 28, 2023",
      slug: "window-design-trends-2023",
    },
    {
      id: 3,
      title: "How to Choose the Right Windows for Your Climate",
      date: "March 10, 2023",
      slug: "choosing-windows-for-your-climate",
    },
  ];

  // Categories
  const categories = ["Design Tips", "Door Maintenance", "Industry Trends"];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* SEO Meta (would be handled by React Helmet in real implementation) */}
      <title>{blog.title} | Ishani Enterprises Blog</title>
      <meta name="description" content={blog.excerpt} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Featured Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />

            {/* Article Header */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                  {blog.category}
                </span>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-800">
                    {blog.author.name}
                  </h4>
                  <p className="text-sm text-gray-500">{blog.author.role}</p>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>

              {/* Related Products */}
              {blog.relatedProducts && blog.relatedProducts.length > 0 && (
                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Related Products
                  </h3>
                  <ul className="space-y-2">
                    {blog.relatedProducts.map((product) => (
                      <li key={product.id}>
                        <Link
                          to={product.link}
                          className="text-yellow-600 hover:text-yellow-700 hover:underline"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Sharing */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Share this article
                </h4>
                <div className="flex gap-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      blog.title
                    )}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      window.location.href
                    )}&title=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      window.location.href
                    )}&media=${encodeURIComponent(
                      blog.image
                    )}&description=${encodeURIComponent(blog.excerpt)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
                    aria-label="Share on Pinterest"
                  >
                    <FaPinterest size={18} />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `${blog.title} ${window.location.href}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Comments Section (optional) */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="mt-12 bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Comments (3)
            </h3>
            {/* Comment list would go here */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">
                Leave a comment
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Comment *
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="flex items-center justify-between text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {category === "Door Maintenance"
                          ? 2
                          : category === "Design Tips"
                          ? 3
                          : 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get the latest articles and news delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default BlogDetailsPage;
