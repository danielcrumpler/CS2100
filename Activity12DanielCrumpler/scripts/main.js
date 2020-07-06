var app = new Vue({
	el: '#app',
	data: {
		brand: 'TYR',
		short_name: 'Tech Suit',
		product_value: 'Avictor Women\'s Venom Open Back Tech Suit',
        
        qtyInventory: 8,
		thumbnails: [
			  {image: "./images/Suit_front_100x122.jpg", 
			  	url: "./images/Suit_front_Zoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit front shot"}],
      
        selectedThumbnailIndex: 0,
		variantCost: 479.99,
		variants: [
		  {
			variantId: 1,
			variantQuantity: 8,
			variantThumbnails: [
			  {image: "./images/Suit_front_100x122.jpg", 
			  	url: "./images/Suit_front_Zoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit front shot"},
			  {image: "./images/Suit_side_100x122.jpg", 
			  	url: "./images/Suit_side_Zoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit side shot"},
			  {image: "./images/Suit_back_100x122.jpg", 
			  	url: "./images/Suit_back_Zoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit back shot"},
			  {image: "./images/suit_pattern_100x122.jpg", 
			  	url: "./images/SuitZoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit pattern closeup"}
			],
			variantColor: 'red',
			variantSwatch: './images/swatch_red.jpg'
		  },
		  {
			variantId: 2,
			variantQuantity: 3,
			variantThumbnails: [
			  {image: "./images/Suit_front_blue_100x122.jpg", 
			  	url: "./images/Suit_front_blue_Zoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit front shot"},
			  {image: "./images/Suit_side_blue_100x122.jpg", 
			  	url: "./images/Suit_side_blue_Zoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit side shot"},
			  {image: "./images/Suit_back_blue_100x122.jpg", 
			  	url: "./images/Suit_back_blue_Zoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit back shot"},
			  {image: "./images/suit_pattern_blue_100x122.jpg", 
			  	url: "./images/Suit_blue_Zoomin.jpg", 
			  	altText: "TYR Avictor Women's Venom Open Back Tech Suit Swimsuit pattern closeup"}
			],
			variantColor: 'blue',
			variantSwatch: './images/swatch_blue.jpg'
		  }
		],
		cart: 0,
		details: ["Fabric: 70 Nylon, 30 Lycra Spandex", 
			"Care: Hand wash cold, lay flat to dry", 
			"Back Style: Racerback", "Bottom Coverage: Full",
			"Country of Origin: Imported"],
		features: ["FINA approved", 
			"Hydrosphere Technology: Advanced technology allows water to surround fabric " +
			"rather than saturate it. - Optimizes body position in the water, reducing "+
			"drag and maximizing speed", 
			"Speed Dry Fabrication: Proprietary coating repels water and keeps the suit "+ 
			"dry and compressive, keeping swimmers lightweight and fast", 
			"Supersonic Flex Bonding: Supersonic Flex Bonding: - Advanced engineering "+
			"allows fully bonded seams to conform and stretch with the swimmer's body, "+
			"resulting in a precisely fitted, ultra compressive suit that won't "+
			"restrict natural movement", "Open back", "Venom print", 
			"Full leg coverage", 
			"Very tight/Compression Fit"],
		description: 'Jump in and compete with the TYR Avictor Women\'s Venom Open Back '+
			'Tech Suit Swimsuit has a closed back and features Hydrosphere Technology '+
			'that works in harmony with a swimmer\'s natural abilities in order to '+
			'optimize body positioning in the water.',
		selectedVariantIndex: 0,
	},
	methods: {
	  addToCart:function(){
		if(this.qtyInventory > 0){
		  this.cart += 1
		  this.qtyInventory -= 1
		}
	  },
	  removeFromCart(){
		if (this.cart > 0){
		  this.cart -= 1
		  this.qtyInventory += 1
		}
	  }, 	  
	  updateThumbnail: function(index){
		this.selectedThumbnailIndex = index
	  },
	  updateProduct: function(index){
	  	this.selectedVariantIndex = index
	  },
	},
	computed: {
        title() {
            return this.brand + ' - ' + this.product_value;
        },
        productView() {
        	return this.variants[this.selectedVariantIndex].variantThumbnails[this.selectedThumbnailIndex];
        },
        productImages() {
        	return this.variants[this.selectedVariantIndex].variantThumbnails;
        },
        colorSwatches() {
        	let swatches = [];
        	for (let i=0; i < this.variants.length; i++) {
        		let variant = this.variants[i];
        		let swatchObject = {
        			variantId: variant.variantId, 
        			variantColor: variant.variantColor, 
        			variantSwatch: variant.variantSwatch,
        		}
        		swatches.push(swatchObject);
        	}
        	return swatches;
        },
	},
});      