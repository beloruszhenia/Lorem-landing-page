import React from 'react';

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
    <section id="recent-blog-postst" className="recent-blog-postst section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent Blog Posts</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay={post.delay}>
                <div className="post-img position-relative overflow-hidden">
                  <img src={post.image} className="img-fluid" alt="" />
                  <span className="post-date">{post.date}</span>
                </div>
                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">{post.author}</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">{post.category}</span>
                    </div>
                  </div>
                  <hr />
                  <a href="blog-details.html" className="readmore stretched-link">
                    <span>Read More</span><i className="bi bi-arrow-right"></i>
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
