import Button from "./Button"

const RecipeSection = (props) => {
    return (
        <div id="recipe-section" className="my-2" style={{ display: "none" }}>
            <h3>Recipe Steps</h3>
            <ol className="list-group">
                <p>{props.instructions}</p>
            </ol>
            {props.source ? <h6>Recipe source: {props.source}</h6> : <h6>Recipe Source unavailable</h6>}
            <div className="row">
                <div className="col-6 text-start">
                    <Button action={props.newSearch} text={"New Search"} />
                </div>
                <div className="col-6 text-end">
                    <Button action={props.onIngredient} text={"View Ingredients"} />
                </div>
            </div>
        </div>
    )
}

export default RecipeSection