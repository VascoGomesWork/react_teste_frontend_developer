import { gql, useQuery } from "@apollo/client";
const GET_COUNTRIES_LIST = gql`
{
  countries(
    page: { first: 25}
  ) {
    totalCount
    edges {
      cursor
      node {
        name
        iso2
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

    export const useCountry = (id) => {
        const {data, error, loading} = useQuery(GET_COUNTRIES_LIST);
    
        return {
            countryData: data,
            countryError: error,
            countryLoading: loading,
        }
    }