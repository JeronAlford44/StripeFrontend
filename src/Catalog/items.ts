export type Price = {
    id: string
    active: boolean
    currency: string
}

export type Product = {
    id: string
    default_price: string,
    description: string
    images: string[],
    metadata: {
        count: number;
    }

}

const basePriceObject: Price = {
    id : '',
    active: true,
    currency: "usd"
} 
const items: Product[] = [
    {
        id: 'Computer',
        default_price: '599.99',
        description: 'This computer is a reliable choice for both work and entertainment. With powerful hardware and sleek design, it delivers optimal performance for your computing needs.',
        images: ['https://media.istockphoto.com/id/1309717274/vector/realistic-black-modern-thin-frame-display-computer-monitor-vector-illustration-jpg.jpg?s=612x612&w=0&k=20&c=hWFdkv0V09HqWjqRy2w93ikw2RBAcoxrhXq_9AQsOhQ='],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Laptop',
        default_price: '899.99',
        description: 'Our sleek and powerful laptop is perfect for productivity on the go. With its lightweight design and long battery life, you can work from anywhere.',
        images: ['https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Smartphone',
        default_price: '699.99',
        description: 'Stay connected with our latest smartphone. Packed with features like a high-resolution camera and fast processor, it\'s your perfect companion for work and play.',
        images: ['https://img.freepik.com/free-psd/smartphone-mockup_1310-812.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713744000&semt=ais'],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Tablet',
        default_price: '399.99',
        description: 'Experience the ultimate versatility with our tablet. Whether you\'re streaming movies or tackling work tasks, its intuitive interface and crisp display make it a joy to use.',
        images: ['https://imagess.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D'],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Smartwatch',
        default_price: '299.99',
        description: 'Enhance your daily routine with our smartwatch. From tracking fitness goals to managing notifications, it keeps you organized and connected throughout the day.',
        images: ['https://t3.ftcdn.net/jpg/02/95/76/42/360_F_295764233_fuwRvw5QfssDCCQICNkWhYBwAK2QYs04.jpg'],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Gaming Console',
        default_price: '499.99',
        description: 'Immerse yourself in the world of gaming with our powerful gaming console. With cutting-edge graphics and multiplayer capabilities, it\'s the ultimate entertainment system for gamers.',
        images: ['https://img.freepik.com/premium-psd/gaming-console-with-game-controller-3d-render-illustration_47987-10199.jpg'],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Wireless Headphones',
        default_price: '199.99',
        description: 'Enjoy crystal-clear sound and freedom of movement with our wireless headphones. Perfect for music lovers and on-the-go professionals alike.',
        images: ['https://media.istockphoto.com/id/1372906882/photo/modern-blue-wireless-headphones-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=0k-2JFElEQ0QTvXsgtLx3i2JotQo_Eb8aEwyN-BOZjA='],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Digital Camera',
        default_price: '799.99',
        description: 'Capture life\'s moments in stunning detail with our advanced digital camera. Whether you\'re a professional photographer or an amateur enthusiast, it\'s the perfect tool for expressing your creativity.',
        images: ['https://i.pcmag.com/imagesry/roundups/018cwxjHcVMwiaDIpTnZJ8H-22..v1570842461.jpg'],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Fitness Tracker',
        default_price: '129.99',
        description: 'Stay motivated and track your progress with our fitness tracker. With features like heart rate monitoring and activity tracking, it helps you achieve your health and fitness goals.',
        images: ['https://m.media-amazon.com/imagess/I/61YwaovfYFL._AC_UF1000,1000_QL80_.jpg'],
        metadata:{
            count: 0
        } // Initial count set to 0
    },
    {
        id: 'Wireless Router',
        default_price: '79.99',
        description: 'Experience fast and reliable internet connectivity with our wireless router. Whether you\'re streaming movies or gaming online, it ensures smooth performance for all your devices.',
        images: ['https://www.shutterstock.com/image-photo/3d-modern-wireless-wifi-black-260nw-1363170881.jpg'],
        metadata:{
            count: 0
        } // Initial count set to 0
    }
];

export default items;
