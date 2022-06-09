// const PROVINCE = ["Anhui","Beijing",  "Chongqing",  "Fujian",  "Gansu",  "Guangdong",  "Guangxi",  "Guizhou",  "Hainan",  "Hebei",  "Heilongjiang",  "Henan",  "Hong Kong",  "Hubei",  "Hunan",  "Inner Mongolia",  "Jiangsu",  "Jiangxi",  "Jilin",  "Liaoning",  "Macau",  "Ningxia",  "Qinghai",  "Shaanxi",  "Shandong",  "Shanghai",  "Shanxi",  "Sichuan",  "Tianjin","Tibet",  "Xinjiang","Yunnan","Zhejiang"]

const Search = ({regionList, handleSelectionChange}) => {
    return(
        <div>
            <h3>Select a region <select name="province" id="province" onChange={handleSelectionChange}>{regionList.map(province => <option value={province}>{province}</option>)}</select></h3>
        </div>
    )
}

export default Search