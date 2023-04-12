
function PeopleShow({person}){

    return(
        <tr>
            <td>{person.name}</td>
            <td>{person.height}</td>
            <td>{person.mass}</td>
            <td>{person.hair_color}</td>
            <td>{person.skin_color}</td>
            <td>{person.eye_color}</td>
            <td>{person.birth_year}</td>
            <td>{person.gender}</td>
        </tr>   
    )
};

export default PeopleShow;