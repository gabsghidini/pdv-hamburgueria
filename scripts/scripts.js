async function getItems() {
    const items = await fetch('../items.json')
        .then(response => response.json())  // Converte a resposta para um objeto JS
        .then(items => {
            return items
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });

    return items;
}

/* BUTTON FUNCTIONS */
function viewCart() {
    console.log("ver carrinho");
}

function clearCart() {
    console.log("limpar carrinho");
}

/* RENDER FUNCTIONS */
async function renderItems() {
    const itemsUl = document.getElementById("MainContent__Section--ItemsList");
    
    const items = await getItems()
    
    const itemsList = items.map((item) => {
        const li = document.createElement("li");
        
        li.innerHTML = `
        <img src=${item.img}>
        <h1>${item.name}</h1>
        <h2>R$ ${item.price.toFixed(2).replace(".", ",")}</h2>
        <h3>${item.type}</h3>
        `
        return li;
    })

    itemsList.forEach(element => {
        itemsUl.appendChild(element);
    });
}

renderItems()