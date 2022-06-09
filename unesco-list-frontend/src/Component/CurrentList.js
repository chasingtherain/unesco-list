import Button from "./Button"

const CurrentList = ({currentRegion,unescoSiteData,handleButtonClick,visitedSite}) => {
    // console.log(unescoSiteData);
    let filteredByRegion = unescoSiteData.filter(object => object["admin_region"] === currentRegion)
    let uniqueSite = [...new Set(unescoSiteData.map(object => object.site))].sort()
    // console.log(filteredByRegion,unescoSiteData,uniqueSite);

    const listStyle = {
        listStyle: "none",
        marginLeft:-10,
        padding:0
      };

    if (currentRegion === "All"){
        return(
            <div>
                <h1>UNESCO sites in China</h1>
                <ul>
                    {
                       uniqueSite.map(
                           site => <li style={listStyle}>{site} <Button site={site} handleButtonClick={handleButtonClick} visitedSite={visitedSite}/> </li> 
                       )
                    }
                </ul>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>{currentRegion}'s UNESCO sites</h1>
                <ul>
                    {
                       filteredByRegion.map(
                           object => <li>{object.site} <Button site={object.site} handleButtonClick={handleButtonClick} visitedSite={visitedSite}/> </li> 
                       )
                    }
                </ul>
            </div>
        )
    }

}

export default CurrentList