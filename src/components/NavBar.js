import React from 'react'
import {Menu, Typography, Avatar, Button} from "antd"
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import logo from "./images/icons.png"
const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
          <Avatar src={logo} size={"large"}/>
          <Typography.Title level={2} className="logo" >
                <Link to="/">Cryptoverse</Link>
          </Typography.Title>
        </div>
          <Menu theme='dark'>
              <Menu.Item  icon={<HomeOutlined />}>
              <Link to={"/"}>Home</Link>
          </Menu.Item>
              <Menu.Item  icon={<FundOutlined />}>
              <Link to={"/Cryptocurrencies"}>Crytocurrencies</Link>
              </Menu.Item>
          
              <Menu.Item  icon={<MoneyCollectOutlined />}>
              <Link to={"/Exchanges"}>Exchanges</Link>
          </Menu.Item>
              <Menu.Item  icon={<BulbOutlined />}>
              <Link to={"/News"}>News</Link>
          </Menu.Item>
          </Menu>
      
    </div>
  )
}

export default NavBar