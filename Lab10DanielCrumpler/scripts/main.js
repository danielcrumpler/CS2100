var app = new Vue({
    el: '#app',
    data: {
        brand: 'TYR',

        productValue: 'Avictor Women\'s Venom Open Back Tech Suit',

        cart: 0,

        description: 'Jump in and compete with the TYR Avictor Women\'s Venom Open Back Tech Suit Swimsuit has a closed back and features Hydrosphere Technology that works in harmony with a swimmer\'s natural abilities in order to optimize body positioning in the water.',

        thumbnails: [{
            imgid: 1,
            image: "./images/Suit_front_100x122.jpg",
            url: "./images/Suit_front_Zoomin.jpg",
            altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit front shot"
        }, {
            imgid: 2,
            image: "./images/Suit_side_100x122.jpg",
            url: "./images/Suit_side_Zoomin.jpg",
            altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit side shot"
        }, {
            imgid: 3,
            image: "./images/Suit_back_100x122.jpg",
            url: "./images/Suit_back_Zoomin.jpg",
            altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit back shot"
        }, {
            imgid: 4,
            image: "./images/suit_pattern_100x122.jpg",
            url: "./images/SuitZoomin.jpg",
            altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit pattern closeup"
        }],

        qtyInInventory: 8,

        features: ["FINA approved", "Hydrosphere Technology: Advanced technology allows water to surround fabric rather than saturate it. - Optimizes body position in the water, reducing drag and maximizing speed", "Speed Dry Fabrication: Proprietary coating repels water and keeps the suit dry and compressive, keeping swimmers lightweight and fast", "Supersonic Flex Bonding: Supersonic Flex Bonding: - Advanced engineering allows fully bonded seams to conform and stretch with the swimmer's body, resulting in a precisely fitted, ultra compressive suit that won't restrict natural movement", "Open back", "Venom print", "Full leg coverage", "Very tight/Compression Fit"],

        sizes: [{
            sizeId: "S",
            sizeVal: "Small"
        }, {
            sizeId: "M",
            sizeVal: "Medium"
        }, {
            sizeId: "L",
            sizeVal: "Large"
        }, {
            sizeId: "XL",
            sizeVal: "X-Large"
        }],

        details: ["Fabric: 70 Nylon, 30 Lycra Spandex", "Care: Hand wash cold, lay flat to dry", "Back Style: Racerback", "Bottom Coverage: Full", "Country of Origin: Imported"],
    },
    methods: {
        addToCart: function(){
            if (this.qtyInInventory > 0) {
                this.cart++;
                this.qtyInInventory--;
            }
        },

        removeFromCart: function(){
            if (this.cart > 0) {
                this.cart--;
                this.qtyInInventory++;
            }
        },
    }
});
