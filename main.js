axios.get('https://fakestoreapi.com/products')
    .then(res => {
        console.log(res.data);

        for (let el of res.data) {
            $('.productContainer').append(`<div class="product">
       <h4>${el.title}</h4>
       <div class= "picture">
       <img src="${el.image}" alt="picture">
       </div>
       <p class='price'>${el.price}>$</p>
       <div class="btnContainer">
       <button>Add to cart</button>
       </div>`)
        }
    })
