import { useEffect } from "react";
import axios from "axios";

const AlcoholResults = (props) => {
    console.log(props.selectedAlcohol);

    useEffect(() => {
        axios({
            baseURL: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`,
            method: 'GET',
            dataResponse: 'json',
        }).then((data) => {
            console.log(data);
            
        })
    }, [props.alcohol])

    return(
        <ul>
            {props.selectedAlcohol?.map((alcohol) => {
                return(
                    <li key={alcohol.idDrink}>
                        <p>{alcohol.strDrink}</p>
                        <img src={alcohol.strDrinkThumb} alt={alcohol.strDrink} />
                    </li>
                )
            })
            }
        </ul>
    )
}

export default AlcoholResults; 