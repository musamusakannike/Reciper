const Button = (props) => {
    return (
        <button className="btn btn-danger" onClick={props.action}>{props.text}</button>
    )
}

export default Button