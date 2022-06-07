import Button from "./Button"

const CurrentList = ({currentRegion,unescoSiteData,handleButtonClick}) => {
    // console.log(unescoSiteData);
    let filteredByRegion = unescoSiteData.filter(object => object["admin_region"] === currentRegion)
    // console.log(filteredByRegion);
    return(
        <div>
            <h1>{currentRegion}'s UNESCO sites</h1>
            <ul>
                {
                   filteredByRegion.map(
                       object => <li>{object.site} <Button object={object}/> </li> 
                   )
                }
            </ul>
        </div>
    )
}

export default CurrentList