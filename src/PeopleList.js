import PeopleShow from "./PeopleShow";
import './people.css';

function PeopleList({people}){

    const peopleShown = people.map((person) => {
        return <PeopleShow key={person.id} person={person}/>;
    });

    return <div className="people-list">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Height</th>
                            <th>Mass</th>
                            <th>Hair Color</th>
                            <th>Skin Color</th>
                            <th>Eye Color</th>
                            <th>Birth Year</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>{peopleShown}</tbody>
                </table>
            </div>
   
}

export default PeopleList;