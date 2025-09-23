// Конфігурація меню навігації
export const menuConfig = {
  // Назва компанії
  siteName: 'LOREM',
  
  // Кнопка CTA
  ctaButton: {
    text: 'Get Started',
    target: 'about'
  },

  // Пункти меню
  menuItems: [
    {
      id: 'hero',
      label: 'Home',
      target: 'hero',
      active: true,
      type: 'link'
    },
    {
      id: 'about',
      label: 'About',
      target: 'about',
      type: 'link'
    },
    {
      id: 'services',
      label: 'Services',
      target: 'services',
      type: 'link'
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      target: 'portfolio',
      type: 'link'
    },
    {
      id: 'team',
      label: 'Team',
      target: 'team',
      type: 'link'
    },
    {
      id: 'pricing',
      label: 'Pricing',
      target: 'pricing',
      type: 'link'
    },
    {
      id: 'blog',
      label: 'Blog',
      target: 'recent-blog-posts',
      type: 'link'
    },
    {
      id: 'dropdown',
      label: 'Dropdown',
      type: 'dropdown',
      items: [
        {
          id: 'dropdown-1',
          label: 'Web Design',
          href: '#web-design',
          type: 'link'
        },
        {
          id: 'deep-dropdown',
          label: 'Services',
          type: 'dropdown',
          isDeepDropdown: true,
          items: [
            { id: 'deep-1', label: 'Frontend Development', href: '#frontend' },
            { id: 'deep-2', label: 'Backend Development', href: '#backend' },
            { id: 'deep-3', label: 'UI/UX Design', href: '#design' },
            { id: 'deep-4', label: 'Mobile Apps', href: '#mobile' },
            { id: 'deep-5', label: 'Consulting', href: '#consulting' }
          ]
        },
        {
          id: 'dropdown-2',
          label: 'Web Development',
          href: '#web-dev',
          type: 'link'
        },
        {
          id: 'dropdown-3',
          label: 'Marketing',
          href: '#marketing',
          type: 'link'
        },
        {
          id: 'dropdown-4',
          label: 'Support',
          href: '#support',
          type: 'link'
        }
      ]
    },
    {
      id: 'contact',
      label: 'Contact',
      target: 'contact',
      type: 'link'
    }
  ]
};

// Функція для додавання нового пункту меню
export const addMenuItem = (newItem, position = -1) => {
  if (position === -1) {
    menuConfig.menuItems.push(newItem);
  } else {
    menuConfig.menuItems.splice(position, 0, newItem);
  }
};

// Функція для видалення пункту меню
export const removeMenuItem = (itemId) => {
  menuConfig.menuItems = menuConfig.menuItems.filter(item => item.id !== itemId);
};

// Приклади нових пунктів меню:

/*
// Звичайний пункт
const newMenuItem = {
  id: 'gallery',
  label: 'Gallery',
  target: 'gallery',
  type: 'link'
};

// Dropdown пункт
const newDropdown = {
  id: 'products',
  label: 'Products',
  type: 'dropdown',
  items: [
    { id: 'product-1', label: 'Product A', href: '#product-a' },
    { id: 'product-2', label: 'Product B', href: '#product-b' }
  ]
};

// Зовнішнє посилання
const externalLink = {
  id: 'shop',
  label: 'Shop',
  href: 'https://shop.example.com',
  type: 'external',
  target: '_blank'
};
*/
