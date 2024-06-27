import Button from "./Button"

const IngredientSection = (props) => {
    const ingres = props.ingredients
    return (
        <div id="ingredients-section" className="my-2" style={{ display: "none" }}>
            <h3>Ingredients:</h3>
            <ul className="list-group">
                {ingres.map((ingre, index) => (
                    <li key={index} className="list-group-item">{ingre}</li>
                ))}
            </ul>
            <div className="row">
                <div className="col-6 text-start">
                    <Button action={props.newSearch} text={"New Search"} />
                </div>
                <div className="col-6 text-end">
                    <Button action={props.onRecipe} text={"View Recipe"} />
                </div>
            </div>
        </div>
    )
}

export default IngredientSection