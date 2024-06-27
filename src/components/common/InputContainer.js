import Button from "./Button"

const InputContainer = (props) => {
    return (
        <div id="input-container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 my-1">
                    <input type="text" value={props.inputValue} onChange={props.handleInputChange} placeholder="Input dish name..." id="search-input" className="form-control mx-1" />
                </div>
                <div className="col-12 col-md-2 text-center my-1">
                    <Button action={props.searchDish} text={"Search"} />
                </div>
            </div>
        </div>
    )
}

export default InputContainer