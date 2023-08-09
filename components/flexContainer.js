app.component('flex-container', {
    template: 
    /*html*/
    `<div class="flex-container">
            <div class="row">
                <a :href="image_href" target="_blank"><img :src="image" :alt="image_alt" :class="[inStock ? '' : out-of-stock-img]"/></a>
            </div>
            <div class="row">
                <div>
                    <h1>{{ product }}</h1>
                    <!-- <p>I love {{ product }}</p> -->
                </div>
                <div class="inventory">
                    <p v-if="inStock">In stock</p>
                    <!-- <p v-else-if="inventory<=10 && inventory>0">Almost sold out...</p> -->
                    <p v-else>Out of stock</p>
                </div>
                <p v-if="onSale">{{title}}</p>
                <div class="size">
                    <ul>
                        <li v-for="size in sizes" style="list-style: none;">{{size}}</li>
                    </ul>
                </div>
                <div class="variants">
                    <div v-for="(variant,index) in variants" @click="updateVarient(index)" class="circle-color" :style="{'background-color': variant.color}"></div>
                </div>
                <button 
                    @click="addToCart" 
                    :disabled="!inStock"
                    :class="[inStock ? addToCartButtonStyles : disabledButton]"
                    >
                    Add To Cart
                </button>
            </div>
            <div class="row right-sec">
                <p class="cart-count">Cart ({{cart}})</p>
            </div>
        </div>`,
        data() {
            return {
                product: "Socks",
                brand: "Vue mastery",
                image_alt: "green socks",
                image_href: "https://google.com",
                onSale: true,
                sizes: ['UK4','UK5','UK6','UK7','UK8','UK9','UK10'],
                variants: [
                    {id: 2234, color: 'green', image: "../assets/socks_green.jpg", quantity: 0},
                    {id: 2235, color: 'blue', image: "../assets/socks_blue.jpg", quantity: 20}
                ],
                cart: 0,
                selectedVariant: 0
            }
        },
        methods: {
            addToCart() {
                this.cart++;
            },
            updateVarient(index) {
                this.selectedVariant = index;
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product;
            },
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            }
        }
})