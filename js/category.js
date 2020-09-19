//fetch data from my own data.json file

function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items)
}

function displayItems(items){
    const itemContainer = document.querySelector(".item-container");
    itemContainer.innerHTML = items.map(item => createHTML(item)).join('');
}

function createHTML(item){
    return `
    
    <div class="item">
        <img src="${item.image}" alt="">
        <div class="item-description">
            <span class='item-name'> ${item.name} </span>
            <span class='item-price'> $${item.price}</span>
        </div>
    </div>
    `
}


function setEventListeners(items){
    const categories= document.querySelector('.category_section');
    categories.addEventListener('click', e => categoryClick(e,items))
}


//function that categorized items depend on category section
function categoryClick(e, items){
    e.preventDefault();
    window.scrollTo(0,0);
    const dataset = e.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    console.log(value);
    if(key === null || value ===null){
        return;
    }
    displayItems(items.filter(item => item[key]===value))

}



loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})



