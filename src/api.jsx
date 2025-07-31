import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get(import.meta.env.VITE_API_URL, {
        headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`
        },
        params: {
            query: term,
        },
    })
    return response.data.results;
}

export default searchImages
