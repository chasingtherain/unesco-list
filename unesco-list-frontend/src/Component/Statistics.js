
const Statistics = ({currentRegion,unescoSiteData,visitedSite}) => {
    let numOfSitesInRegion = unescoSiteData.filter(object => object["admin_region"] === currentRegion).length
    let sitesInRegionList = unescoSiteData.filter(object => object["admin_region"] === currentRegion).map(object => object.site)
    let visitedSiteInRegion = visitedSite.filter(site => sitesInRegionList.includes(site))

    if(currentRegion === "All"){
        return(
            <div>
                <p>You have visited <strong>{visitedSite.length}/56</strong> UNESCO sites in <strong>China</strong></p>
            </div>
        )
    }
    return(
            <div>
                {
                    (numOfSitesInRegion) ? 
                    <p>You have visited <strong>{visitedSiteInRegion.length}/{numOfSitesInRegion}</strong> UNESCO sites in <strong>{currentRegion}</strong></p>
                    : <p>No UNESCO site found in this region yet, we hope there will be one in the future</p>
                }
                <p>You have visited <strong>{visitedSite.length}/56</strong> UNESCO sites in <strong>China</strong></p>
            </div>
        )
}

export default Statistics