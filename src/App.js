import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import About from './component/About/about';
import AddNewService from './component/AddNewService/AddNewService';
import Contuct from './component/Contuct/contuct';
import Experts from './component/Experts/Experts';
import Details from './component/Home/Home/Details/Details';
import Doctors from './component/Home/Home/Doctors/Doctors';
import Footer from './component/Home/Home/Footer/Footer';
import Home from './component/Home/Home/Home';
import NavBar from './component/Home/NavBar/NavBar';
import Login from './component/Login/Login';
import MyBookings from './component/MyBookings/MyBookings';
import MyOrders from './component/MyOrders/MyOrders';
import Notfound from './component/Notfound/Notfound';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import Services from './component/Services/services';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            {/* <Route path="/services">
              <Services />
            </Route> */}

            <Route path="/doctors">
              <Doctors />
            </Route>

            <Route path="/experts">
              <Experts />
            </Route>
            <Route path="/AddNewService">
              <AddNewService />
            </Route>
            <Route path="/MyBookings">
              <MyBookings />
            </Route>
            <Route path="/MyOrders">
              <MyOrders />
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contuct></Contuct>
            </Route>

            <Route path="/log">
              <Login />
            </Route>

            <Route path="/sign">
              <Signup />
            </Route>

            <PrivetRoute path="/details/:Id">
              <Details />
            </PrivetRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
