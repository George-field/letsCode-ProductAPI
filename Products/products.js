

module.exports = {
    getProducts : () => {
        return new Promise((resolve, reject) => {
            const products = [{
                id: 1,
                title: "Fujfilm Black Camera",
                info: "Nikon’s D5600 is a camera that can take images and do camera things becasue it is a camera and that is what they do",
                price: "$240.00",
                lineItem_id: 123456,
                imgUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            {
                id: 2,
                title: "Brown Watch",
                info: "I am a watch, I can tell the time and help you do things with time. Also, I have some metal",
                price: "$140.00",
                lineItem_id: 123456667,
                imgUrl: "https://images.pexels.com/photos/84475/night-product-watch-dramatic-84475.jpeg"
            },
            {
                id: 3,
                title: "Blue Ridge Gel",
                info: "I contain hemp. Gel that is useful for doing thoings around the sea and near beaches and rocks",
                price: "$14.00",
                lineItem_id: 123456667,
                imgUrl: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?"
            }
        ]
        resolve(products)
        } )
    }
}