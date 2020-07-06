var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedIndex: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        image: 'images/vmSocks-green-onWhite.jpg',
        variants: [{
            variantId: 1,
            variantColor: 'green',
            variantImage: 'images/vmSocks-green-onWhite.jpg',
            variantQuantity: 10,
        }, {
            variantId: 2,
            variantColor: 'blue',
            variantImage: 'images/vmSocks-blue-onWhite.jpg',
            variantQuantity: 10,
        }, {
            variantId: 3,
            variantColor: 'danny',
            variantImage: 'images/images.jpg',
            variantQuantity: 10,
        }],
        cart: 0,
        onSale: true,
        inStock: true,
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
        },
        updateProduct: function(index) {
            this.selectedIndex = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        sale() {
            if (this.onSale === true) {
                return this.title + ' are on Sale!';
            } else {
                return '';
            }
        },
        images() {
            return this.variants[this.selectedIndex].variantImage;
        },
        stock() {
            if (this.variants[this.selectedIndex].variantQuantity > 0) {
                return "In Stock";
            }  else {
                return "Out of Stock";
            }
        },
    }
})
