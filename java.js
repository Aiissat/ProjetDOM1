



let ass = document.getElementsByClassName("shopping-card-container");

for (let i = 0; i < ass.length; i++) {
    let so = ass[i].getElementsByClassName('total')[0];
    let vh = ass[i].getElementsByClassName('unit-price')[0];
    let Unitprice = ass[i].getElementsByClassName('unit-price')[0];
    let btnQuantity = ass[i].getElementsByClassName('quantity')[0];
    let btnPlus = ass[i].getElementsByClassName('fa-plus-circle')[0];
    let btnMinus = ass[i].getElementsByClassName('fa-minus-circle')[0];
    let btnHeart = ass[i].getElementsByClassName('fa-heart')[0];
    let btnTrash = ass[i].getElementsByClassName('fa-trash-alt')[0];


    console.log(Unitprice

    )

    btnPlus.addEventListener("click", () => {
        let quantity = parseInt(btnQuantity.innerHTML);
        btnQuantity.innerHTML = quantity + 1;
        so.innerHTML = Number(so.innerHTML) + Number(Unitprice.innerHTML);
    });

    btnMinus.addEventListener("click", () => {
        let quantity = parseInt(btnQuantity.innerHTML);
        if (quantity > 0) {
            btnQuantity.innerHTML = quantity - 1;
            so.innerHTML = Number(so.innerHTML) - Number(Unitprice.innerHTML);
        }
    });

    btnHeart.addEventListener("click", () => {
        if (btnHeart.style.color === "black") {
            btnHeart.style.color = "red";
        } else {
            btnHeart.style.color = "black";
        }
    });

    btnTrash.addEventListener("click", () => {
        let item = btnTrash.closest('.card-body').parentElement.parentElement;
        console.log(item)
        item.remove();
        so.innerHTML = Number(so.innerHTML) - Number(Unitprice.innerHTML) * Number(btnQuantity.innerHTML);
    });
   

}

 
 

let stock = document.getElementsByClassName("shopping-card-container");

for (let i = 0; i <stock.length; i++) {
    let so =stock[i].getElementsByClassName('total')[0];
    let vh =stock[i].getElementsByClassName('unit-price')[1];
    console.log(vh);
    let Unitprice =stock[i].getElementsByClassName('unit-price')[1];
    let btnQuantity =stock[i].getElementsByClassName('quantity')[1];
    let btnPlus =stock[i].getElementsByClassName('fa-plus-circle')[1];
    let btnMinus =stock[i].getElementsByClassName('fa-minus-circle')[1];
    let btnHeart =stock[i].getElementsByClassName('fa-heart')[1];
    let btnTrash = stock[i].getElementsByClassName('fa-trash-alt')[1];

    btnPlus.addEventListener("click", () => {
        let quantity = parseInt(btnQuantity.innerHTML);
        btnQuantity.innerHTML = quantity + 1;
        so.innerHTML = Number(so.innerHTML) + Number(Unitprice.innerHTML);
    });

    btnMinus.addEventListener("click", () => {
        let quantity = parseInt(btnQuantity.innerHTML);
        if (quantity > 0) {
            btnQuantity.innerHTML = quantity - 1;
            so.innerHTML = Number(so.innerHTML) - Number(Unitprice.innerHTML);
        }
    });

    btnHeart.addEventListener("click", () => {
        if (btnHeart.style.color === "black") {
            btnHeart.style.color = "red";
        } else {
            btnHeart.style.color = "black";
        }
    });

    btnTrash.addEventListener("click", () => {
        let item = btnTrash.closest('.card-body').parentElement.parentElement;
        console.log(item)
        item.remove();
        so.innerHTML = Number(so.innerHTML) - Number(Unitprice.innerHTML) * Number(btnQuantity.innerHTML);
    });


}


let bag = document.getElementsByClassName("shopping-card-container");

for (let i = 0; i <stock.length; i++) {
    let so =bag[i].getElementsByClassName('total')[0];
    let vh =bag[i].getElementsByClassName('unit-price')[2];
    console.log(vh);
    let Unitprice =bag[i].getElementsByClassName('unit-price')[2];
    let btnQuantity =bag[i].getElementsByClassName('quantity')[2];
    let btnPlus =bag[i].getElementsByClassName('fa-plus-circle')[2];
    let btnMinus =bag[i].getElementsByClassName('fa-minus-circle')[2];
    let btnHeart =bag[i].getElementsByClassName('fa-heart')[2];
    let btnTrash = bag[i].getElementsByClassName('fa-trash-alt')[2];

    btnPlus.addEventListener("click", () => {
        let quantity = parseInt(btnQuantity.innerHTML);
        btnQuantity.innerHTML = quantity + 1;
        so.innerHTML = Number(so.innerHTML) + Number(Unitprice.innerHTML);
    });

    btnMinus.addEventListener("click", () => {
        let quantity = parseInt(btnQuantity.innerHTML);
        if (quantity > 0) {
            btnQuantity.innerHTML = quantity - 1;
            so.innerHTML = Number(so.innerHTML) - Number(Unitprice.innerHTML);
        }
    });

    btnHeart.addEventListener("click", () => {
        if (btnHeart.style.color === "black") {
            btnHeart.style.color = "red";
        } else {
            btnHeart.style.color = "black";
        }
    });

    btnTrash.addEventListener("click", () => {
        let item = btnTrash.closest('.card-body').parentElement.parentElement;
        console.log(item)
        item.remove();
        so.innerHTML = Number(so.innerHTML) - Number(Unitprice.innerHTML) * Number(btnQuantity.innerHTML);
    });
    
}