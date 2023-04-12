import axios from "axios"

const searchPeople= async (term) =>{
    let response = await axios.get("https://swapi.dev/api/people", {
        params:{
            search: term
        }
    });
    return response.data.results;
} 

export default searchPeople;