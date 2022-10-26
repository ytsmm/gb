const products = [
    {id: 1, title: "Blazer", price: 5000, img: "https://imgcdn.befree.ru/rest/V1/images/1024/product/images/2111035600/2111035600_50_1.webp"},
    {id: 2, title: "Trousers", price: 3000, img: "https://ae04.alicdn.com/kf/S360ee83ddf14470bbf92a8995bfeb4e9g.jpg"},
    {id: 3, title: "Hoodie", price: 2500, img: "https://shop-cdn1.vigbo.tech/shops/114929/products/20763072/images/2-f4ba2c5247aa1e6e0cfde51b3022c842.jpg"},
];

const renderProduct = (item) => {
    return `<div class="product-item">
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
                <img src="${item.img}">
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join(' ');
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);