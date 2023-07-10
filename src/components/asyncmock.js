const listaDeProductos = [
    {id: "1", nombre: "Street Fighter 6", precio: 10000, stock: 10, img: "../img/sf6.jpg", idCat:"1"},
    {id: "2", nombre: "Resident Evil 4", precio: 20000, stock: 10, img: "../img/re4.jpg", idCat:"1"},
    {id: "3", nombre: "God of War Ragnarok", precio: 30000, stock: 10, img: "../img/gowr.jpg", idCat:"1"},
    {id: "4", nombre: "Hogwarts Legacy", precio: 40000, stock: 10, img: "../img/hl.jpg", idCat:"1"},
    {id: "5", nombre: "Ratchet & Clank: Rift Apart", precio: 40000, stock: 10, img: "../img/ryc.jpg", idCat:"1"},
    {id: "6", nombre: "Diablo IV", precio: 40000, stock: 10, img: "../img/d4.jpg", idCat:"1"},
    {id: "7", nombre: "Sonic Frontiers", precio: 40000, stock: 10, img: "../img/sf.jpg", idCat:"1"},
    {id: "8", nombre: "Stray", precio: 40000, stock: 10, img: "../img/str.jpg", idCat:"1"},
    {id: "9", nombre: "COD: Modern Warfare II", precio: 50000, stock: 10, img: "../img/codmf.jpg", idCat:"2"},
    {id: "10", nombre: "Elden Ring", precio: 60000, stock: 10, img: "../img/er.jpg", idCat:"2"},
    {id: "11", nombre: "The Callisto Protocol", precio: 70000, stock: 10, img: "../img/cp.jpg", idCat:"2"},
    {id: "12", nombre: "FIFA 23", precio: 80000, stock: 10, img: "../img/f23.jpg", idCat:"2"},
    {id: "13", nombre: "A Plague Tale: Requiem", precio: 90000, stock: 10, img: "../img/aptr.jpg", idCat:"2"},
    {id: "14", nombre: "WWE 2K23", precio: 90000, stock: 10, img: "../img/wwe.jpg", idCat:"2"},
    {id: "15", nombre: "Gotham Knights", precio: 90000, stock: 10, img: "../img/gn.jpg", idCat:"2"},
    {id: "16", nombre: "Star Wars Jedi: Survivor", precio: 90000, stock: 10, img: "../img/js.jpg", idCat:"2"},
    {id: "17", nombre: "Xenoblades Chronicles 3", precio: 90000, stock: 10, img: "../img/xc3.jpg", idCat:"3"},
    {id: "18", nombre: "TLOZ: Tears of the Kingdom", precio: 90000, stock: 10, img: "../img/tofk.jpg", idCat:"3"},
    {id: "19", nombre: "Fire Emblem: Three Houses", precio: 90000, stock: 10, img: "../img/feth.jpg", idCat:"3"},
    {id: "20", nombre: "Metroid Prime Remastered", precio: 90000, stock: 10, img: "../img/mp.jpg", idCat:"3"},
    {id: "21", nombre: "Pokemon Scarlet", precio: 90000, stock: 10, img: "../img/ps.jpg", idCat:"3"},
    {id: "22", nombre: "Yoshi's Crafted World", precio: 90000, stock: 10, img: "../img/ycw.jpg", idCat:"3"},
    {id: "23", nombre: "Super Mario Odissey", precio: 90000, stock: 10, img: "../img/smo.jpg", idCat:"3"},
    {id: "24", nombre: "Catherine: Fullbody", precio: 90000, stock: 10, img: "../img/cfb.jpg", idCat:"3"},
    {id: "25", nombre: "PlayStation 5 - 825 GB", precio: 10000, stock: 10, img: "../img/ps5.jpg", idCat:"4"},
    {id: "26", nombre: "Xbox Series X - 1 TB", precio: 10000, stock: 10, img: "../img/xb.jpg", idCat:"4"},
    {id: "27", nombre: "Nintendo Switch - 64 GB", precio: 10000, stock: 10, img: "../img/ns.jpg", idCat:"4"},
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(listaDeProductos);
        }, 2000)
    })
}

export const getProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            const producto = listaDeProductos.find(item => item.id === id);
            resolve(producto)
        }, 2000)
    })
}

export const getProductosCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const productosCategoria = listaDeProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}