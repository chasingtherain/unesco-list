const Button = ({object,handleButtonClick}) => {
    const mystyle = {
        color: "white",
        backgroundColor: "lightgrey",
        padding: "10px",
        fontFamily: "Arial"
      };

    return(
        <button style={mystyle} id={object.site} onClick={handleButtonClick}></button>
    )
}

export default Button