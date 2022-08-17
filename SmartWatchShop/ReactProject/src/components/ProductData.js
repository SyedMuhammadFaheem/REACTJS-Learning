const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: "Meet Fitbit Luxe—a fitness & wellness tracker that doesn't look like one. A sleek bracelet design pairs effortlessly with any outfit. Luxe tracks activity, sleep and more, making it a must-have wardrobe essential. The experience gets even better with a Fitbit Premium membership through personalised guidance and insights and in-app content. Luxe keeps your health journey moving.",
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;