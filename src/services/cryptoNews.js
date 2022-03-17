import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsHeaders ={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '18b2b74b53msh49a2c364564c9a1p1d51a2jsn4a9609cbc78f'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com"
const createRequest =(url) => ({url, headers: cryptoNewsHeaders})
export const cryptoNewsApi = createApi({
    reducerPath:" cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      }) 
    })
 })

 export const {
    useGetCryptoNewsQuery
  } = cryptoNewsApi
  