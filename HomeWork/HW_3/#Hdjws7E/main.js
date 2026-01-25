let products = [

    {
        title: 'milk',
        price: 22,
        image: 'https://www.health.com/thmb/G92Sp4jbV89vreXlXXVg0oGLayk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-IsOrganicMilkBetterForYou-7e90f834800447ddb43ddbd499260095.jpg'
    },

    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },

    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },

    {
        title: 'tea',
        price: 15,
        // image: 'https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg'
        image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg'

    }];


for (let product of products) {

    let TITLE=product.title;
    let PRICE=product.price;
    let IMAGE=product.image;

document.writeln(`

<div class=”product-card”>

        <h3 class=”product-title”>${TITLE}. Price – ${PRICE}</h3>

        <img src="${IMAGE}" alt="Some image" class="product-image" style="width: 200px;">

</div>

`)

}