import { gql, useQuery } from "@apollo/client";


/*const GET_CITIES_IN_COUNTRY_LIST = gql`
query GetCities($countryCode: String!){
    cities(
      filter: { ciso2: $countryCode}
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
    `;*/

    const GET_STATE_IN_COUNTRY_LIST = gql `
    query GetCountryState($countryCode: String!){
        states(
          filter: { ciso2: $countryCode }
          page: { first: 25 }
        ) {
          totalCount
          edges {
            cursor
            node {
              name
              state_code
              country_code
              latitude
              longitude
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
    `

    export const useCountryState = (countryCode) => {
        console.log("STATE ID = ", countryCode)
        const {data, error, loading} = useQuery(GET_STATE_IN_COUNTRY_LIST, {
            variables: {
                countryCode,
            },
        });
    
        return {
            //Returns the array with the filtered cities
            stateData: data,
            stateError: error,
            stateLoading: loading,
        }
    }