import { gql, useQuery } from "@apollo/client";

const GET_COUTRY_FLAG = gql`
query GetCountryFlag($countryCode: String!){
  country(iso2: $countryCode) {
    # Country Fields
    id
    name
    iso2
    emoji
    
  }
}
    `;

    export const useFlag = (countryCode) => {
        const {data, error, loading} = useQuery(GET_COUTRY_FLAG, {
            variables: {
                countryCode
            }
        });
    
        

        return {
            countryFlagData: data,
            countryFlagError: error,
            countryFlagLoading: loading,
        }
    }