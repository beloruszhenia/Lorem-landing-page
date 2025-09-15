import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {/* Portfolio Items */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="/assets/img/portfolio/portfolio-portrait-1.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-portrait-1.webp" title="App 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="/assets/img/portfolio/portfolio-1.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-1.webp" title="Product 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="/assets/img/portfolio/portfolio-3.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-3.webp" title="Branding 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="/assets/img/portfolio/portfolio-4.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-4.webp" title="App 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="/assets/img/portfolio/portfolio-portrait-2.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-portrait-2.webp" title="Product 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="/assets/img/portfolio/portfolio-portrait-3.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-portrait-3.webp" title="Branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src="/assets/img/portfolio/portfolio-7.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-7.webp" title="App 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="/assets/img/portfolio/portfolio-8.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-8.webp" title="Product 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="/assets/img/portfolio/portfolio-9.webp" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="/assets/img/portfolio/portfolio-9.webp" title="Branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="/portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
