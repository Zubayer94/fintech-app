import React from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Header from './componenets/shared/Header';
import Wallet from './componenets/wallet/Wallet';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import './App.scss';
import WithdrawContextProvider from './context/WithdrawContext'
import Banner from './componenets/shared/Banner';
import Footer from './componenets/shared/Footer';
import DemoComponent from './componenets/upcomming/DemoComponent';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <WithdrawContextProvider>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Redirect to="/wallet" /> 
                )
              }}
          />
          <Route path="/wallet" component={Wallet} />
        </WithdrawContextProvider>
        <Route path="/history" component={DemoComponent} />
        <Route path="/recipients" component={DemoComponent} />
        <Route path="/QRcodes" component={DemoComponent} />
      <Banner />
      <Footer />
    </div>
    </Router>
  );
}

export default App;