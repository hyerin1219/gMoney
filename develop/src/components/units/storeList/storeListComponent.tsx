import * as A from "./storeList.styles";
import SearchComponent from "../../common/search/searchComponent";

export default function StoreListComponent():JSX.Element{


  return (
    <>

      <div className="container">
        <A.contentWrap>
            <SearchComponent></SearchComponent>
            <div id="map"></div>
        </A.contentWrap>
      </div>
    </>
  )
};