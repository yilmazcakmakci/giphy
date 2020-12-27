import axios from "axios"

export const clearGifObject = (gifs) => {
    return gifs.map(gif => ({
        id: gif.id,
        title: gif.title,
        preview: gif.images.preview_gif.url,
        url: gif.images.original.url
        // user: {
        //     name: gif.user.username,
        //     avatar: gif.user.avatar_url
        // }
    }))
}

export const fetchGifs = async (url, params) => {
    try {
        const res = await axios.get(url, {
            params: {
                ...params,
                api_key: process.env.VUE_APP_API_KEY,
                limit: 20
            }
        })
        const data = {
            gifs: clearGifObject(res.data.data),
            total_count: res.data.pagination.total_count
        }

        return data
    } 
    
    catch (err) {
        console.error(err)
    }
}

export const isBottomOfThePage = () => {
    const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

    return isBottom
}