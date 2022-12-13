class Product{
    constructor(tittle,description, price, thumbnail, code, stock){
        this.tittle = tittle;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}
class ProductManager{
    
    constructor(){
        this.productos =[];
    }
    addProduct(){
        let title = prompt("Digite titulo del producto");
        let description = prompt("Digite description del producto");
        let price = prompt("Digite el precio del producto");
        let thumbnail = prompt("Digite ruta de la imagen del producto");
        let code = prompt("Digite codigo del producto");
        let stock = prompt("Digite stock del producto");
        this.productos.push(new Product(title,description,price,thumbnail,code,stock))
        console.log(this.productos);

        
    }
    getProductById(){
    }
}
const manager = new ProductManager;
let boton = document.getElementById('agregar');
boton.addEventListener('click',()=>manager.addProduct())


