# Як додавати нові пункти меню

## 🚀 Швидкий старт

Всі налаштування меню знаходяться в файлі `src/config/menuConfig.js`. Просто відредагуйте цей файл для додавання нових пунктів.

## 📋 Типи пунктів меню

### 1. **Звичайний пункт меню (з прокруткою)**
```javascript
{
  id: 'gallery',           // Унікальний ID
  label: 'Gallery',        // Текст меню
  target: 'gallery',       // ID секції на сторінці
  type: 'link',           // Тип: link
  active: false           // Чи активний (опціонально)
}
```

### 2. **Зовнішнє посилання**
```javascript
{
  id: 'shop',
  label: 'Shop',
  href: 'https://shop.example.com',
  type: 'external',
  target: '_blank'        // Відкрити в новому вікні
}
```

### 3. **Dropdown меню**
```javascript
{
  id: 'products',
  label: 'Products',
  type: 'dropdown',
  items: [
    { id: 'product-1', label: 'Product A', href: '#product-a' },
    { id: 'product-2', label: 'Product B', href: '#product-b' },
    // Вкладений dropdown
    {
      id: 'categories',
      label: 'Categories',
      type: 'dropdown',
      items: [
        { id: 'cat-1', label: 'Category 1', href: '#cat1' },
        { id: 'cat-2', label: 'Category 2', href: '#cat2' }
      ]
    }
  ]
}
```

## ⚙️ Конфігурація

### **Назва компанії**
```javascript
siteName: 'LOREM'  // Змініть на назву вашої компанії
```

### **CTA кнопка**
```javascript
ctaButton: {
  text: 'Get Started',    // Текст кнопки
  target: 'about'         // Секція для прокрутки
}
```

## 🔧 Програмне додавання пунктів

### **Додати пункт в кінець**
```javascript
import { addMenuItem } from '../config/menuConfig';

const newItem = {
  id: 'news',
  label: 'News',
  target: 'news',
  type: 'link'
};

addMenuItem(newItem);
```

### **Додати пункт в певну позицію**
```javascript
addMenuItem(newItem, 2); // Додати на 3-тю позицію (індекс 2)
```

### **Видалити пункт**
```javascript
import { removeMenuItem } from '../config/menuConfig';

removeMenuItem('blog'); // Видалити пункт з id 'blog'
```

## 📝 Приклади

### **Додати "FAQ" секцію**
1. Відкрийте `src/config/menuConfig.js`
2. Додайте в масив `menuItems`:
```javascript
{
  id: 'faq',
  label: 'FAQ',
  target: 'faq',
  type: 'link'
}
```

### **Додати соціальні мережі в dropdown**
```javascript
{
  id: 'social',
  label: 'Follow Us',
  type: 'dropdown',
  items: [
    { id: 'facebook', label: 'Facebook', href: 'https://facebook.com', type: 'external', target: '_blank' },
    { id: 'twitter', label: 'Twitter', href: 'https://twitter.com', type: 'external', target: '_blank' },
    { id: 'instagram', label: 'Instagram', href: 'https://instagram.com', type: 'external', target: '_blank' }
  ]
}
```

### **Змінити порядок пунктів**
Просто перемістіть об'єкти в масиві `menuItems` у потрібному порядку.

### **Додати іконки**
```javascript
{
  id: 'contact',
  label: 'Contact',
  target: 'contact',
  type: 'link',
  icon: 'bi-envelope'  // Bootstrap іконка (додайте логіку рендеру)
}
```

## 🎨 Стилізація

Всі стилі знаходяться в `src/components/styles.css`. Ключові класи:
- `.navmenu` - основне меню
- `.dropdown-menu` - dropdown меню
- `.dropdown-item` - пункт dropdown
- `.active` - активний пункт

## ⚠️ Важливо

1. **Унікальні ID**: Кожен пункт повинен мати унікальний `id`
2. **Секції на сторінці**: Для `type: 'link'` переконайтесь, що секція з `target` ID існує
3. **Безпека**: Для зовнішніх посилань завжди додавайте `rel="noopener noreferrer"`

## 🔄 Після змін

Після редагування `menuConfig.js`:
1. Збережіть файл
2. React автоматично перезавантажить сторінку
3. Нові пункти меню з'являться одразу

---

**Готово!** Тепер ви можете легко керувати меню через один конфігураційний файл.
