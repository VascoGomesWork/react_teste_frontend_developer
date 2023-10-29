import { gql, useQuery } from "@apollo/client";
const GET_COUNTRIES_LIST = gql`
{
  countries(
    page: { first: 10}
  ) {
    totalCount
    edges {
      cursor
      node {
        id
        name
        iso3
        emoji
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
            data,
            error,
            loading,
        }
    }