# LOREM - React Landing Page

Modern and responsive landing page built with React.js, featuring smooth animations and interactive components.

## 🚀 Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean and professional design
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Interactive Components** - Dynamic navigation, dropdown menus, progress bars
- **Performance Optimized** - Fast loading and optimized assets
- **SEO Ready** - Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Bootstrap 5** - Responsive CSS framework
- **Bootstrap Icons** - Icon library
- **Tailwind CSS** - Utility-first CSS framework
- **AOS Library** - Animate On Scroll animations
- **CSS Custom Properties** - Modern CSS variables

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.js        # Navigation header
│   ├── Hero.js          # Hero section
│   ├── About.js         # About section
│   ├── Services.js      # Services section
│   ├── Portfolio.js     # Portfolio showcase
│   ├── Team.js          # Team members
│   ├── Pricing.js       # Pricing plans
│   ├── Blog.js          # Blog posts
│   ├── Contact.js       # Contact form & info
│   ├── Footer.js        # Footer section
│   ├── Clients.js       # Client logos
│   ├── WhyUs.js         # Why choose us
│   ├── Skills.js        # Skills progress bars
│   └── styles.css       # Custom CSS styles
├── App.js               # Main app component
├── index.js             # App entry point
└── index.css            # Global styles

public/
├── assets/              # Static assets
│   ├── img/            # Images
│   ├── css/            # Additional CSS
│   └── js/             # Additional JS
├── index.html           # HTML template
└── manifest.json        # PWA manifest
```

## 🎨 Components Overview

### Core Sections
- **Header** - Responsive navigation with dropdown menus
- **Hero** - Main banner with call-to-action
- **About** - Company information with statistics
- **Services** - Service offerings grid
- **Portfolio** - Project showcase with filtering
- **Team** - Team member profiles
- **Pricing** - Subscription plans comparison
- **Contact** - Contact form with map integration

### Interactive Features
- **Skills** - Animated progress bars
- **Clients** - Client logo carousel
- **WhyUs** - Feature highlights
- **Blog** - Latest blog posts

## ⚙️ Configuration

### Contact Information
Update contact details in:
- `src/components/Contact.js` - Contact section
- `src/components/Footer.js` - Footer information

### Company Branding
- Company name: Update "LOREM" throughout components
- Logo: Replace in `src/components/Header.js`
- Colors: Modify CSS custom properties in `src/components/styles.css`

### Google Maps
Update map location in `src/components/Contact.js`:
```javascript
// Replace with your coordinates
src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
```

## 🎯 Customization

### Colors & Themes
Modify CSS custom properties in `styles.css`:
```css
:root {
  --accent-color: #47b2e4;
  --heading-color: #37373f;
  --nav-color: #212529;
  /* Add your custom colors */
}
```

### Content Updates
- Update text content in respective component files
- Replace images in `public/assets/img/`
- Modify team members, services, and portfolio items in component data arrays

## 📱 Responsive Design

- **Desktop** - Full layout with all features
- **Tablet** - Adapted layout with touch-friendly navigation
- **Mobile** - Collapsed navigation menu and optimized content flow

## 🚀 Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to hosting**
   - Upload `build/` folder contents to your web server
   - Configure server for SPA routing (if needed)

## 📄 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+ (with polyfills)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions and support:
- **Email**: info@lorem.com.ua
- **Phone**: +380 (41) 234 56 78
- **Address**: вул. Михайлівська, 15, Житомир, 10001

---

Built with ❤️ using React.js