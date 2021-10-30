import React from 'react';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import Home_Sections from './Component/home-page/homeSections'
import Product_Details from './Component/pages/product-details'
import Faq from './Component/pages/faq'
import Contact from './Component/pages/contact-us'
import About_Us from './Component/pages/about-us'
import Projects from './Component/pages/projects'
import News from './Component/pages/media-news'
import Events from './Component/pages/media-events'
import Home_Solutions from './Component/pages/services-home-solutions'
import Customer_Services from './Component/pages/services-customer-services'
import Technician_Training from './Component/pages/services-technician-training'
import Request_Certificate from './Component/pages/services-request-certificate'
import Water_Supply from './Component/pages/products-water-supply'
import Drainage_Solutions from './Component/pages/products-drainage'
import Others_Solutions from './Component/pages/products-others'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import './Component/navbar.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home_Sections} />
            <Route path='/waterSupply' component={Water_Supply} />
            <Route path='/drainageSolutions' component={Drainage_Solutions} />
            <Route path='/othersSolutions' component={Others_Solutions} />
            <Route path='/about' component={About_Us} />
            <Route path='/projects' component={Projects} />
            <Route path='/homeSolutions' component={Home_Solutions} />
            <Route path='/customerServices' component={Customer_Services} />
            <Route path='/technicianTraining' component={Technician_Training} />
            <Route path='/requestCertificate' component={Request_Certificate} />
            <Route path='/news' component={News} />
            <Route path='/events' component={Events} />
            <Route path='/faq' component={Faq} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
