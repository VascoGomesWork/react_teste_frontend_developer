import { gql, useQuery } from "@apollo/client";
const GET_COUTRY_FLAG = gql`
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

    export const useFlag = (id) => {
        const {data, error, loading} = useQuery(GET_COUTRY_FLAG, {
            
        });
    
        console.log("Coutry Flag ID = ", id)

        //Array to store the specific cities from a specific country
        let specificCoutryTimezoneData = []

        //Checks if data is undefined
        console.log("Coutry Flag DATA = ", data)
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
            coutryFlagData: data,
            countryFlagError: error,
            countryFlagLoading: loading,
        }
    }