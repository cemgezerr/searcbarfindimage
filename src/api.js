import axios from "axios";

const searchİmages = async () => {
    const response = axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID eeGiIk4r72AE3FzzCvNzZzuz8V9waIU9UjPt0v9AfZw'
        },
        params:{
            query: 'cars'
        }
    });
    return response;
}
export default searchİmages;