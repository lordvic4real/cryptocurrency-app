import { Route, Link, Routes} from "react-router-dom"
import { Layout, Space, Typography } from "antd";
import './App.css';
import{ NavBar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News} from "./components";

function App() {
  return (
    <div className="app">
        <div className="nav">
        <NavBar/>
    </div>
    <div className="main">
        <Layout style={{width:"100%"}}>
            <div className="routes">
                <Routes>
                  <Route exalt path="/" element={ <HomePage/>} />
                  <Route path="/Exchanges" element={<Exchanges/>} />
                  <Route path="/Cryptocurrencies" element={<Cryptocurrencies/>} />
                  <Route path="/crypto/:coinId" element={ <CryptoDetails/>} />
                  <Route path="/News" element={<News/>} />    
                </Routes>
            </div>
        </Layout>
    <div className="footer" level={5} style={{color: "white", textAlign: "center", width: "100%"}}>
        <Typography.Title style={{color: "white",}}>
           CrytoVerse <br/> All right reserved
        </Typography.Title>
        <Space>
          <Link to={"/"}>Home</Link>
          <Link to={"/Exchanges"}>Exchanges</Link>
          <Link to={"/News"}>News</Link>
        </Space>
    </div>
    </div>
    </div>
  );
}

export default App;
