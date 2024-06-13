const searchInPosts = (data, search) => {

    if (!search) return data

    const searchPosts = data.filter(item => item.options?.title.toLowerCase().includes(search))

    return searchPosts
}

export { searchInPosts }