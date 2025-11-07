function listCategories() {
    const categoryList = document.querySelector('#categories')
    const categorieItems = categoryList.querySelectorAll('.item')

    console.log(`Number of categories: ${categorieItems.length}`)

    categorieItems.forEach(categorieItem => {
        const title = categorieItem.querySelector('h2').textContent
        console.log(`Category: ${title}`)
        const itemList = categorieItem.querySelectorAll('li').length
        console.log(`Elements: ${itemList}`)
    })

}

listCategories()