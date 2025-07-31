import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID PUPtzUWhVRR0Xy6GPCJhoNdQ7jARQifGTkBrcPb5x2U,'
        },
        params: {
            query: term,
        },
    })
    return response.data.results;
}

export default searchImages
