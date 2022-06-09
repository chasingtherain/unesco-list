import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Component/Search";
import CurrentList from "./Component/CurrentList";
import unescoSiteData from "./unescoSiteData";
import Statistics from "./Component/Statistics";
import LoginButton from "./Component/LoginButton";
import auth from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const PROVINCE = ["All","Anhui","Beijing",  "Chongqing",  "Fujian",  "Gansu",  "Guangdong",  "Guangxi",  "Guizhou",  "Hainan",  "Hebei",  "Heilongjiang",  "Henan",  "Hong Kong",  "Hubei",  "Hunan",  "Inner Mongolia",  "Jiangsu",  "Jiangxi",  "Jilin",  "Liaoning",  "Macau",  "Ningxia",  "Qinghai",  "Shaanxi",  "Shandong",  "Shanghai",  "Shanxi",  "Sichuan",  "Tianjin","Tibet",  "Xinjiang","Yunnan","Zhejiang"]


function App() {
  const signInFunction = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(credential,token);
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const handleSelectionChange = (e) =>{
    setCurrentRegion(e.target.value)
  }

  const handleButtonClick = (e) => {
    // console.log("clicked", e.currentTarget)
    // console.log(buttonState);
    if(!visitedSite.includes(e.target.id)) setVisitedSite(visitedSite.concat(e.target.id))
    else {
      removeSiteFromList(e.target.id)
    }
  }
  
  const removeSiteFromList = (site) => {
    let removedSiteIndex = visitedSite.indexOf(site)
    let tempVisitedSite = visitedSite.slice(0,removedSiteIndex).concat(visitedSite.slice(removedSiteIndex+1))
    // console.log(visitedSite, tempVisitedSite);
    setVisitedSite(tempVisitedSite)
  }

  // state
  const [unescoList, setUnescoList] = useState([])
  const [regionList, setRegionList] = useState(PROVINCE)

  // displays current region's list of unesco sites in table format
  const [currentRegion, setCurrentRegion] = useState("All")

  //sets unesco sites already visited by user
  const [visitedSite, setVisitedSite] = useState(() => {
    const localData = localStorage.getItem("visitedSite")
    return (localData) ? JSON.parse(localData) : []
  })

  // effect runs each time visitedSite updates
  useEffect(() =>{
    localStorage.setItem("visitedSite",JSON.stringify(visitedSite))
  }
  ,[visitedSite])


  const [buttonState, setButtonState] = useState(false)


  return (
    <div className="App">
        <h1>UNESCO Diary</h1>
        <LoginButton signInFunction={signInFunction}/>
        <Search regionList={regionList} handleSelectionChange={handleSelectionChange}/>
        <Statistics currentRegion={currentRegion} unescoSiteData={unescoSiteData} visitedSite={visitedSite}/>
        <CurrentList currentRegion={currentRegion} unescoSiteData={unescoSiteData} handleButtonClick={handleButtonClick} visitedSite={visitedSite}/>
    </div>
  );
}

export default App;
