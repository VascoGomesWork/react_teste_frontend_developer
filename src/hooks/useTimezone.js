import { gql, useQuery } from "@apollo/client";

const GET_COUTRY_TIMEZONE = gql`
query GetCountryTimezone($countryCode: String!){
  country(iso2: $countryCode) {
    # Country Fields
    id
    name
    iso2
	timezones{zone_name}
  }
}
    `;

    export const useTimezone = (countryCode) => {
        const {data, error, loading} = useQuery(GET_COUTRY_TIMEZONE, {
            variables: {
                countryCode
            }
        });
    
        return {
            timezoneData: data,
            timezoneError: error,
            timezoneLoading: loading,
        }
    }