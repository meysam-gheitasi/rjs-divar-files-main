const searchProducts = (data, search) => {

    if (!search) return data

    const searchProducts = data.filter(item => item.title.toLowerCase().includes(search))

    return searchProducts
}

export { searchProducts }