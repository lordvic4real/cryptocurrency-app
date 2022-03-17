import React, { useState } from 'react'
import{Row, Col, Typography, Select, Avatar, Card} from "antd"
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNews'
import { useGetCryptosQuery} from "../services/cryptoApi"
import Loader from "./Loader"


const {Text, Title} = Typography
const {Option} = Select
const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState("cryptocurrency")
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6 : 22 })
  const {data} = useGetCryptosQuery(100)
   console.log(cryptoNews)
   if(!cryptoNews?.value) return <Loader />
   const demoImageUrl = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"
  return (
    <>
     <Row gutter={[12, 12]}>
       {
         !simplified  && (
           <Col span={24}>
            <Select showSearch className='select-news'
              placeholder="select a crypto"
              optionFilterProp='children'
              onChange={(value) => setNewsCategory(value)}
              filterOption={(option, input) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="cryptocurrency">Cryptourrency</Option> 
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
            </Select> 
           
           </Col>
         )
       }
        {
         cryptoNews && cryptoNews.value?.map((news, i) => (
           <Col xs={24} sm={12} lg={8} key={i}>
             <Card hoverable className='news-card'>
               <a href={news.url} target="_blank" rel={'noreferrer'}>
                  <div className='news-image-container'>
                    <Title level={5} className="news-title">{news.name}</Title>
                    <img src={news?.image?.thumbnail?.contentUrl || demoImageUrl} alt="" style={{objectFit: "cover", maxHeight: 100, maxWidth:195}}/>
                  </div>
                  <p>
                    {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                  </p>
                  <div className='provider-container'>
                      <div>
                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl}  alt=""/>
                        <Text className='provider-name'>{news.provider[0]?.name}</Text>
                      </div>
                      <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                  </div>
               </a>
             </Card>
           </Col>
         ))
        }
     </Row>
    
    </>
  )
}

export default News