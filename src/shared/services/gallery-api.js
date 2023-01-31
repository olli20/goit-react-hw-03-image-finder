import axios from 'axios';

// const instance = axios.create({
//     baseURL: "https://pixabay.com/api",
//     params: {
//         key: "32051707-22cc9bd81885c5eb5ea8ac825",
//         per_page: 20,
//     }
// })

export const searchImages = async(q, page) => {
    const {data} = await axios.get(`https://pixabay.com/api/?key=32051707-22cc9bd81885c5eb5ea8ac825&q=${q}&image_type=photo&page=${page}`); 
    return data.hits;
}