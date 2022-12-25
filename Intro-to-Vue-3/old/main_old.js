const app= Vue.createApp({
    data (){
        return {
            //title of the product
            product: 'Boots',
            //image of the product
            image: './assets/images/socks_green.jpg',
            //description of the product
            description: 'A warm fuzzy pair of socks.',
            //add url for the product
            url: 'https://www.vuemastery.com/',
            //check the quantity
            inventory: 100,
            //check if exist
            onSale: true,
            //add some detail to the products
            details: ['50% cotton', '30% wool', '20% polyester'],
            // add the sizes of the product
            sizes: ['S', 'M', 'L', 'XL'],
            // add some other vairants for the products
            variants: [
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ]
        }
    }
})