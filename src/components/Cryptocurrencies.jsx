import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Input, Col } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Crytocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  // console.log(cryptos)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() =>{
      //  setCryptos(cryptosList?.data?.coins)
       const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
       setCryptos(filteredData)
  },[cryptosList, searchTerm])
  if (isFetching) return "Loading...."
  
  return (
    <>
    <div className='search-crypto'>
        <Input  placeholder='search cryptocurrencies' onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
    <Row gutter={[32, 32]} className="crypto-card-container">
      {cryptos && cryptos.map((currency) => (
        <Col xs={24} sm={12} lg={6} key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
            <Card title={`${currency.rank}. ${currency.name}`} 
              extra={<img className='crypto-image' src={currency.iconUrl}/>}
              hoverable
            >
              <p>Price: {millify(currency.price)}</p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)}%</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    
    
    </>
  )
}

export default Crytocurrencies