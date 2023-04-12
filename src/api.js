import axios from "axios";

const searchPeople= async (term, page) =>{
    let response = await axios.get("https://swapi.dev/api/people", {
        params:{
            search: term,
            page: page
        }
    });
    return response.data.results;
} 


export default searchPeople;