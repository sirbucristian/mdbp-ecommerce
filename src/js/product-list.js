import products from './products-data';
import productItemTemplate from './templates/product-item.hbs';

document.getElementById('products').innerHTML = productItemTemplate({ products });
