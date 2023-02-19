class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts = () =>{
        console.log(this.products);
        return;
    }

    addProduct = (title,description,price,thumbnail,code,stock)=>{

        const productExists = this.products.find((product) => product.code === code);

        if(!title||!description||!price||!thumbnail||!code||!stock){
            console.error("Complete all fields")
            return;
        }
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.products.length +1,
        };

        if(!productExists){
            this.products.push(product);
            console.log(`Prduct with code ${code} added succesfully`);
            return
        }else{
            console.log('el producto ya existe');
            return
        }
             
         
    }

    getProductByID = (productId)=>{
        const productIndex = this.products.findIndex((product)=>product.id ===productId);
        if(productIndex === -1){
            console.log('this product does not exist');
            return;
        }else{
            console.log('Resultado de la búsqueda:', this.products[productIndex]);
        }
    }
}

const productManager = new ProductManager();

productManager.addProduct('Smartphone','8gb ram, 128gb almacenamiento',1000,'no image','sp123',35)
productManager.addProduct('Smartwatch','android',1500,'no image','sw123',40)

productManager.getProductByID(2)
productManager.getProductByID(3)

productManager.getProducts();