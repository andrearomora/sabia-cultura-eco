const products = [
    {
        id: '1',
        category: 'totes',
        name: 'Tote Bag XL',
        size: 'XL',
        price: 13800,
        discount: 0,
        unitsPerPack: 1,
        stock: 20,
        fabric: 'Lona 100% algodón',
        width: 45,
        large: 50,
        img: 'files/tote-bag-algodon-grande.png',
        description: 'Producto 100% Colombiano. <br>Resistencia, comodidad y capacidad: así es como deben ser las bolsas cuando de mercar se trata.<br>No más manijas rotas ni desconocidas. Con esta tote bag carga con seguridad tus compras y lleva todo lo que necesites sin preocuparte por el espacio.<br>CARACTERÍSTICAS Y BENEFICIOS<br>- Tela resistente.<br>- Manijas reforzadas en la costura.<br>- Terminado interno con costura francesa.<br>- Duraderas.<br>- Versátiles y multiusos.<br>NOTA<br>La tela se deja estampar con técnicas como serigrafía, vinilo textil o sublimación'
    },
    {
        id: '2',
        category: 'totes',
        name: 'Tote Bag L',
        size: 'L',
        price: 13800,
        discount: 0,
        unitsPerPack: 1,
        stock: 20,
        fabric: 'Lona 100% algodón',
        width: 35,
        large: 40,
        img: 'files/madreselva grande.png',
        description: ''
    },
    {
        id: '3',
        category: 'totes',
        name: 'Tote Bag M',
        size: 'M',
        price: 13800,
        discount: 20,
        unitsPerPack: 1,
        stock: 20,
        fabric: 'Lona 100% algodón',
        width: 35,
        large: 40,
        img: 'files/tote-bag-algodon-mediana.png',
        description: ''
    },
    {
        id: '4',
        category: 'totes',
        name: 'Tote Bag S',
        size: 'S',
        price: 13800,
        discount: 5,
        unitsPerPack: 1,
        stock: 20,
        fabric: 'Lona 100% algodón',
        width: 35,
        large: 40,
        img: 'files/tote-bag-algodon-pequeña.png',
        description: ''
    },
    {
        id: '5',
        category: 'adjustable',
        name: 'Bolsa ajustable L',
        size: 'L',
        price: 5800,
        discount: 0,
        unitsPerPack: 1,
        stock: 20,
        fabric: 'Lienzo 100% algodón',
        width: 30,
        large: 40,
        img: 'files/bolsa-ajustable-algodon-30x40-x5.png',
        description: ''
    },
    {
        id: '6',
        category: 'adjustable',
        name: 'Bolsa ajustable M',
        size: 'M',
        price: 5800,
        discount: 0,
        unitsPerPack: 1,
        stock: 20,
        fabric: 'Lienzo 100% algodón',
        width: 25,
        large: 25,
        img: 'files/bolsa-ajustable-algodon-25x25-x5.png',
        description: ''
    },
    {
        id: '7',
        category: 'adjustable',
        name: 'Bolsa ajustable S',
        size: 'S',
        price: 5800,
        discount: 0,
        unitsPerPack: 1,
        stock: 20,
        fabric: 'Lienzo 100% algodón',
        width: 15,
        large: 25,
        img: 'files/bolsa-ajustable-algodon-15x25-x5.png',
        description: ''
    },
    {
        id: '8',
        category: 'adjustable',
        name: 'Bolsa ajustable XS',
        size: 'XS',
        price: 5800,
        discount: 0,
        unitsPerPack: 1,
        stock: 20,
        fabric: 'Lienzo 100% algodón',
        width: 15,
        large: 15,
        img: 'files/bolsa-ajustable-algodon.png',
        description: ''
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (ProductId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === ProductId))
        }, 500)
    })
}

export const getProductsByCategory = (ProductCategory) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.category === ProductCategory))
        }, 500)
    })
}

