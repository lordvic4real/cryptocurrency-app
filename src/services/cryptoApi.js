import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '18b2b74b53msh49a2c364564c9a1p1d51a2jsn4a9609cbc78f'
  
}
const baseUrl = "https://coinranking1.p.rapidapi.com"
export const cryptoApi = createApi({
   reducerPath:" cryptoApi",
   baseQuery: fetchBaseQuery({baseUrl}),
   endpoints:(builder) => ({
     getCryptos: builder.query({
       query: (count) => createRequest(`/coins?limit=${count}`)
     }), 
     
   getCryptoDetails: builder.query({
    query: (coinId) => createRequest(`/coin/${coinId}`),
  }),
  getCryptoHistory: builder.query({
    query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
  }),
  getExchanges: builder.query({
    query: () => createRequest('/exchanges'),
  }),
}),
})
const createRequest =(url) => ({url, headers: cryptoApiHeaders})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi



// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '18b2b74b53msh49a2c364564c9a1p1d51a2jsn4a9609cbc78f'
//   }
// };