import { gql, useQuery } from "@apollo/client";
const GET_COUTRY_TIMEZONE = gql`
{
    countries(
      page: { first: 100}
    ) {
      totalCount
      edges {
        node {
          name
          iso2
          timezones{zone_name}
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
    `;

    export const useTimezone = (id) => {
        const {data, error, loading} = useQuery(GET_COUTRY_TIMEZONE, {
            
        });
    
        console.log("Timezone City ID = ", id)

        //Array to store the specific cities from a specific country
        let specificCoutryTimezoneData = []

        //Checks if data is undefined
        console.log("TIMEZONE DATA = ", data)
        /*if(data !== undefined){ 
            //Maps the cities
            data.coutries.edges.map(coutry => {
            
                //Checks if the country code is the same as the country selected
                if(coutry.node.iso2 === id){
                    //Pushes the City inside the array
                    specificCoutryTimezoneData.push(coutry.node.timezones)
                }
            })
        }*/

        return {
            //Returns the array with the filtered cities
            cityData: specificCoutryTimezoneData,
            cityError: error,
            cityLoading: loading,
        }
    }