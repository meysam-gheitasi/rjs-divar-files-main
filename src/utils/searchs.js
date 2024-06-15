const searchInPosts = (data, search) => {

    if (!search) return data

    const searchPosts = data.filter(item => item.options?.title.toLowerCase().includes(search))

    return searchPosts
}

const filterPosts = (data, category) => {
    if (!category) return data
    const filterByCategory = data.filter(item => item.category === category)
    return filterByCategory
}

const createQueryObject = (currentQuery, newQuery) => {
    if (newQuery.category === '') {
        const { category, ...rest } = currentQuery
        return rest
    }
    if (newQuery.search === '') {
        const { search, ...rest } = currentQuery
        return rest
    }
    return { ...currentQuery, ...newQuery }
}

export { searchInPosts, filterPosts, createQueryObject }