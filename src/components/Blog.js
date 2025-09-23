import React from 'react';
import { UserIcon, FolderIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Blog = () => {
  const blogPosts = [
    {
      image: '/assets/img/blog/blog-post-1.webp',
      date: 'December 12',
      title: 'Eum ad dolor et. Autem aut fugiat debitis',
      author: 'Julia Parker',
      category: 'Politics',
      delay: 100
    },
    {
      image: '/assets/img/blog/blog-post-2.webp',
      date: 'July 17',
      title: 'Et repellendus molestiae qui est sed omnis',
      author: 'Mario Douglas',
      category: 'Sports',
      delay: 200
    },
    {
      image: '/assets/img/blog/blog-post-3.webp',
      date: 'September 05',
      title: 'Quia assumenda est et veritati tirana ploder',
      author: 'Lisa Hunter',
      category: 'Economics',
      delay: 300
    }
  ];

  return (
    <section id="recent-blog-posts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-heading mb-4">Recent Blog Posts</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden" data-aos="fade-up" data-aos-delay={post.delay}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={post.title} 
                  />
                  <span className="absolute top-4 left-4 bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.date}
                  </span>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-brand-heading mb-4 group-hover:text-brand-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <div className="flex items-center">
                      <UserIcon className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <span className="px-3 text-gray-400">/</span>
                    <div className="flex items-center">
                      <FolderIcon className="w-4 h-4 mr-1" />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <hr className="border-gray-200 mb-4" />
                  <a 
                    href="blog-details.html" 
                    className="flex items-center text-brand-accent hover:text-blue-600 font-medium transition-colors duration-300 mt-auto group"
                  >
                    <span>Read More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
