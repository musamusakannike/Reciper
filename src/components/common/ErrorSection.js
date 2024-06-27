import Button from "./Button";

const ErrorSection = (props) => {
  return (
    <div id="error-section" className="text-center my-3" style={{ display: "none" }}>
      <h3 className="text-danger">{props.errorMessage}</h3>
      <Button action={props.newSearch} text={"New Search"} />
    </div>
  );
};

export default ErrorSection;
