document.addEventListener("DOMContentLoaded", function() {
/*function renderOneItem(item) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src="${item.imageURL}">
    <div class="content">
      <h4>${item.name}</h4>
      <p>${item.description}</p>
    </div>
    `

    document.querySelector('#itemlist').appendChild(card)
}

function getAllItems() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(resp => resp.json())
    .then(itemData => itemData.forEach(item => renderOneItem(item)))
}

function initialize() {
  getAllItems()
}
initialize()*/


let items = []
function displayItems(item) {
    const itemList = document.getElementById('itemlist')
    const li = document.createElement('li')
    const h5 = document.createElement('h5')
    const p = document.createElement('p')
    h5.innerText = `Title: ${items.name}`
    p.innerText = `Authors: ${items.authors}`
    li.appendChild(h5)
    li.appendChild(p)
    itemList.appendChild(li)

}


function getAllItems() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
   .then(resp => resp.json())
   .then(resp => resp.items.forEach(item => { 
       const newItem = {
           id: items.id,
           title: items.title,
           authors: items.authors
       }
    console.log(newItem)
       displayItems(newItem)
       items.push(item)
   }))
}
getAllItems()

})