const ResultHeader = (props) => {
    return (
        <div id="result-header" style={{ display: "none" }}>
            <div className="bg-danger text-light text-center my-2 rounded">
                <h2>{props.dishName}</h2>
                <p className="lead">{props.dishArea}</p>
            </div>
            <div className="text-center">
                <img src={props.dishImage} alt="food image" className="food-image img-thumbnail rounded" />
            </div>
        </div>
    )
}

export default ResultHeader