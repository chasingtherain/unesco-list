import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Component/Search";
import CurrentList from "./Component/CurrentList";
import unescoSiteData from "./unescoSiteData";
import Statistics from "./Component/Statistics";

const PROVINCE = ["Anhui","Beijing",  "Chongqing",  "Fujian",  "Gansu",  "Guangdong",  "Guangxi",  "Guizhou",  "Hainan",  "Hebei",  "Heilongjiang",  "Henan",  "Hong Kong",  "Hubei",  "Hunan",  "Inner Mongolia",  "Jiangsu",  "Jiangxi",  "Jilin",  "Liaoning",  "Macau",  "Ningxia",  "Qinghai",  "Shaanxi",  "Shandong",  "Shanghai",  "Shanxi",  "Sichuan",  "Tianjin","Tibet",  "Xinjiang","Yunnan","Zhejiang"]


function App() {
  const handleSelectionChange = (e) =>{
    setCurrentRegion(e.target.value)
  }

  const handleButtonClick = (e) => {
    console.log("clicked")
    if(!visitedSite.includes(e.target.id)) setVisitedSite(visitedSite.concat(e.target.id))
    // console.log(visitedSite);
  }
  
  // state
  const [unescoList, setUnescoList] = useState([])
  const [regionList, setRegionList] = useState(PROVINCE)

  // displays current region's list of unesco sites in table format
  const [currentRegion, setCurrentRegion] = useState("Anhui")

  //sets unesco sites already visited by user
  const [visitedSite, setVisitedSite] = useState([])

  // sets total visit made by user
  // const [totalVisitedCount, setTotalVisitedCount] = useState(0) 

  return (
    <div className="App">
        <Search regionList={regionList} handleSelectionChange={handleSelectionChange}/>
        <CurrentList currentRegion={currentRegion} unescoSiteData={unescoSiteData} handleButtonClick={handleButtonClick}/>
        <Statistics currentRegion={currentRegion} unescoSiteData={unescoSiteData} visitedSite={visitedSite}/>
    </div>
  );
}

export default App;
