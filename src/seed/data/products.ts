import { v4 as uuid } from 'uuid';

export enum ProductCondition {
  new = 'new',
  used = 'used',
  refurbished = 'refurbished',
}

export interface Product {
  id?: string;
  title: string;
  slug: string;
  brand: string;
  color: string;
  price: number;
  description: string;
  images: string[];
  condition: ProductCondition;
  published?: boolean;
  category: string;
  tags?: string[];
  createdAt?: string | number;
  updatedAt?: string | number;
}

const products: Product[] = [
  {
    "id": uuid(),
    "title": "HP 14 Laptop, Intel Pentium Silver N6000",
    "slug": "hp-14-laptop-intel-pentium-silver-n6000",
    "brand": "hp",
    "color": "Silver",
    "price": 505,
    "description": "BEST FOR BUSY WORK-LIFE BALANCERS - Stay connected all day with reliable performance and an expansive display",
    "images": ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg" , "image-5.jpg"],
    "condition": ProductCondition.new,
    "published": true,
    "category": "Laptops",
    "tags": ["computers", "windows", "pc"],
    "createdAt": new Date("2022-04-12T14:22:35.321Z").getTime(),
    "updatedAt": new Date("2022-04-12T16:18:12.222Z").getTime()
  },
  {
    id: '88da834c-b7a8-43ef-9d6e-755da74c22a1',
    title: 'HP Stream 14-inch Laptop, Intel Celeron N4000',
    slug: 'hp-stream-14-inch-laptop-intel-celeron-n4000',
    brand: 'hp',
    color: 'Royal Blue',
    price: 389,
    description: 'Laptop for work, school and play: With Office 365 and 1 TB of cloud storage, this device combines functionality, connectivity, style, and value',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'Laptops',
    tags: ['computers', 'windows', 'pc'],
    createdAt: new Date('2022-05-12T08:15:45.765Z').getTime(),
    updatedAt: new Date('2022-05-12T09:22:33.435Z').getTime(),
  },
  {
    id: uuid(),
    title: 'Asus Chromebook C223 11.6" HD, Intel Dual Core',
    slug: 'asus-chromebook-c223-11.6-hd-intel-dual-core',
    brand: 'Asus',
    color: 'Silver',
    price: 184,
    description: 'Chromebook runs on Chrome OS - an operating system by Google that is built for the way we live today. It comes with built-in virus protection, boots up in seconds and continues to stay fast over time. Google apps you know and love come standard on every Chromebook, which means you can edit, download, and convert Microsoft Office files in Google Docs, Sheets and Slides',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'Laptops',
    tags: ['computers', 'google', 'pc'],
    createdAt: new Date('2022-05-12T14:22:34.123Z').getTime(),
    updatedAt: new Date('2022-05-12T15:32:22.543Z').getTime(),
  },
  {
    id: uuid(),
    title: 'Apple 2022 MacBook Pro Laptop with M2 Chip',
    slug: 'apple-2022-macbook-pro-laptop-with-m2-chip',
    brand: 'Apple',
    color: 'Silver',
    price: 1539.99,
    description: 'The new M2 chip makes the 13-inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio-quality mics, it\'s our most portable pro laptop.',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'Laptops',
    tags: ['computers', 'apple', 'm2'],
    createdAt: new Date('2022-05-12T21:15:05.045Z').getTime(),
    updatedAt: new Date('2022-05-12T21:45:22.067Z').getTime(),
  },
  {
    id: uuid(),
    title: 'Samsung T350 Series 22-Inch FHD 1080p Computer Monitor',
    slug: 'Samsung T350 Series 22-Inch FHD 1080p Computer Monitor',
    brand: 'Samsung',
    color: 'Black',
    price: 118.25,
    description: 'Ideal game settings instantly give you the edge. Get optimal color and image contrast to see scenes more vividly and spot enemies hiding in the dark. Game Mode adjusts any game to fill your screen with every detail in view',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'electronics',
    tags: ['screens', 'monitors', 'gaming'],
    createdAt: new Date('2022-06-12T09:02:15.045Z').getTime(),
    updatedAt: new Date('2022-06-12T09:05:22.456Z').getTime(),
  },
  {
    id: uuid(),
    title: 'Logitech M510 Wireless Computer Mouse for PC with USB',
    slug: 'logitech-m510-wireless-computer-mouse-for-pc-with-usb',
    brand: 'Logitech',
    color: 'Black',
    price: 29.99,
    description: 'The tiny Logitech Unifying receiver stays in your laptop. There’s no need to unplug it when you move around, so there\'s less worry of it being lost. And you can easily add compatible wireless mice and keyboards to the same wireless receiver',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'Accessories',
    tags: ['mouse', 'usb', 'bluetooth'],
    createdAt: new Date('2022-06-12T10:00:15.045Z').getTime(),
    updatedAt: new Date('2022-06-12T11:08:35.777Z').getTime(),
  },
  {
    id: 'abd501ec-ec6d-45b0-9bb2-eaff3f459d63',
    title: 'Gaming Keyboard',
    slug: 'gaming-keyboard',
    brand: 'Dacoity',
    color: 'Black',
    price: 29.99,
    description: 'Dacoity wired keyboard that meets the need of gamers, typists, programmers, and writers, and combines your office and gaming experience. If you have any quality problems, please contact customer service. We offer 180 days refund or replacement and a free-time warranty for the quality problem.',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'Accessories',
    tags: ['keyboards', 'usb'],
    createdAt: new Date('2022-06-12T12:12:45.333Z').getTime(),
    updatedAt: new Date('2022-06-12T12:15:55.467Z').getTime(),
  },
  {
    id: uuid(),
    title: 'Redragon K552 Mechanical Gaming Keyboard',
    slug: 'redragon-k552-mechanical-gaming-keyboard',
    brand: 'Redragon',
    color: 'Black',
    price: 47.99,
    description: 'Compact mechanical gaming keyboard, 19 different lighting effects and game modes, Ergonomic designed steel series mechanical game keyboards high-quality durable metal-abs, free USB connector for a reliable connection, Compatible with windows 10, windows 8, windows 7, windows vista, or windows xp, limited mac os keyboard support works well with all major computers brands and gaming pcs.',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'Accessories',
    tags: ['keyboards', 'usb'],
    createdAt: new Date('2023-02-02T15:32:24.333Z').getTime(),
    updatedAt: new Date('2023-02-02T15:145:05.444Z').getTime(),
  },
  {
    id: uuid(),
    title: 'Logitech H390 Wired Headset for PC or Laptop',
    slug: 'logitech-h390-wired-headset-for-pc-or-laptop',
    brand: 'Logitech',
    color: 'Black',
    price: 29.99,
    description: 'Digital Stereo Sound: Fine-tuned drivers provide enhanced digital audio for music, calls, meetings and more, Rotating Noise Canceling Mic, Handy In-line Controls, Simply plug the USB-A connector into your computer and you\'re ready to talk or listen without the need to install software, ideal for gaming, streaming, Video Calls.',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'Accessories',
    tags: ['headphones', 'usb', 'audio'],
    createdAt: new Date('2023-04-03T18:32:25.333Z').getTime(),
    updatedAt: new Date('2023-04-03T18:45:05.122Z').getTime(),
  },
  {
    id: uuid(),
    title: 'Logitech C270 HD Webcam',
    slug: 'Logitech C270 HD Webcam',
    brand: 'Logitech',
    color: 'Black',
    price: 29.99,
    description: 'HD 720p video calling and HD video recording, Video capture: Upto 1280 x 720 pixels, Built in microphone filters out background noise, Windows 7 Windows 8 or Windows 10 or later mac OS 10.10 or later chrome OSAndroid v 5.0 or above',
    images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg' , 'image-5.jpg'],
    condition: ProductCondition.new,
    published: true,
    category: 'Webcams',
    tags: ['video', 'hd', 'usb'],
    createdAt: new Date('2023-05-03T18:32:25.333Z').getTime(),
    updatedAt: new Date('2023-05-03T20:00:15.456Z').getTime(),
  },
];

export default products;
