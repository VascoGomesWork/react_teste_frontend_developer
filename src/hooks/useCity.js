import { gql, useQuery } from "@apollo/client";
const GET_CITIES_IN_COUNTRY_LIST = gql`
{
    cities(
      filter: { ciso2: $id}
      page: { first: 900 }
    ) {
      totalCount
      edges {
        cursor
        node {
          name
          state_code
          country_code
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

    export const useCity = (id) => {
        const {data, error, loading} = useQuery(GET_CITIES_IN_COUNTRY_LIST, {
            variables: {
                id
            }
        });
    
        console.log("City ID = ", id)

        //Array to store the specific cities from a specific country
        let specificCitiesData = []
        console.log("CITY DATA = ", data)
        //Checks if data is undefined
        if(data !== undefined){ 
            //Maps the cities
            data.cities.edges.map(city => {
            
                //Checks if the country code is the same as the country selected
                if(city.node.country_code === id){
                    //Pushes the City inside the array
                    specificCitiesData.push(city.node.name)
                }
            })
        }

        return {
            //Returns the array with the filtered cities
            cityData: specificCitiesData,
            cityError: error,
            cityLoading: loading,
        }
    }