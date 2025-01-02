import axios from "axios"

const { parseStringPromise } = require('xml2js');

export const  storeList = async ():Promise<void> => {
    try {
      const result = await axios.get("https://openapi.gg.go.kr/RegionMnyFacltStus");
      const jsonData = await parseStringPromise(result.data, { explicitArray: false });
      console.log(jsonData)

    } catch (error) {
        if (error instanceof Error) {
          console.log(error)
        }
    }
    
  }

  
