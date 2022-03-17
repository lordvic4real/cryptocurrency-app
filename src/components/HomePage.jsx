import React from 'react'
import millify from 'millify'
import {Row, Col, Statistic, Typography} from "antd"
import { Link } from 'react-router-dom'
import {  useGetCryptosQuery } from '../services/cryptoApi'
import Crytocurrencies from './Cryptocurrencies'
import News from './News'
import Loader from './Loader'

const {Title} = Typography
const HomePage = () => {
  const {data, isFetching} =  useGetCryptosQuery(10)
  // console.log(data) 
  const globalStat = data?.data?.stats
  if (isFetching) return <Loader />
  return (
    <>
    <Title level={2} className="heading">Global crypto Stats</Title>
     <Row>
       <Col span={12}><Statistic title="total Crytocurrencies" value={globalStat?.total}/></Col>
       <Col span={12}><Statistic title="total Exchanges" value={millify(globalStat?.totalExchanges)}/></Col>
       <Col span={12}><Statistic title="total Market Cap" value={millify(globalStat?.totalMarketCap)}/></Col>
       <Col span={12}><Statistic title="total 24hrs Volume" value={millify(globalStat?.total24hVolume)}/></Col>
       <Col span={12}><Statistic title="total Market" value={millify(globalStat?.totalMarkets)}/></Col>
     </Row>
     <div className='home-heading-container'>
        <Title className='home-title' level={2}>Top 10 Cryptocurrencies in the World</Title>
        <Title className='show-more' level={3}><Link to={"/Cryptocurrencies"}>Show More</Link></Title>
     </div>
     <Crytocurrencies simplified/>
     <div className='home-heading-container'>
        <Title className='home-title' level={2}>Latest Crypto News</Title>
        <Title className='show-more' level={3}><Link to={"/News"}>Show More</Link></Title>
     </div>
     <News simplified={true}/>
    
    </>
  )
}

export default HomePage