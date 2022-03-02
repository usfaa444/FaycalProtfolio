function init(){
    let addProduct = document.getElementById("submit");
    addProduct.onclick = function (){
        let number = document.getElementById("productNumber");
        let stock = document.getElementById("stock");
        let name = document.getElementById("productName");
        let suplier = document.getElementById("supplier");
        let price = document.getElementById("price");
        let date = document.getElementById("dateSupp");
        let data = number.value + ", " + stock.value + ", " + name.value + ", " + suplier.value +
            ", " + price.value + ", " + date.value;
        console.log(data);
    }
}
init();