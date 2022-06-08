const Button = ({site,handleButtonClick,buttonState,visitedSite}) => {

    // console.log(handleButtonClick);
    const inactive = {
        color: "white",
        backgroundColor: "lightgrey",
        padding: "10px",
        fontFamily: "Arial"
      };

    const active = {
        color: "white",
        backgroundColor: "green",
        padding: "10px",
        fontFamily: "Arial"
      };

    return(
            (visitedSite.includes(site)) ? 
            <button value={buttonState} style={active} id={site} onClick={handleButtonClick}></button> 
            : <button value={buttonState} style={inactive} id={site} onClick={handleButtonClick}></button>
    )
}

export default Button