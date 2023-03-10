import logo from './logo.svg';

import './App.css';
import {Route,Routes } from 'react-router-dom';
import AdminDashboard from './pages/admin/Dashboard';
import UserManage from './pages/admin/UserManage';
import AdminLogin from './pages/admin/Login';
import HostRide from './pages/user/HostRide';
import Wheels from './pages/user/Wheels';
import GetUser from './pages/user/GetUser';
import ForgotPassword from './pages/user/ForgotPassword';
import CheckMail from './pages/user/CheckMail';
import ChangePassword from './pages/user/ChangePassword';
import AddUser from './pages/user/AddUser';
import UserLogin from './pages/user/UserLogin';
import UserConfirmation from './pages/user/UserConfirmation';
import HomePage from './pages/user/HomePage';
import AddWheels from './pages/user/AddWheels';
import TestAddUser from './pages/user/TestAddUser';
import TestWheels from './pages/user/TestWheels';
import JoinRide from './pages/user/JoinRide';
import FoundPool from './pages/user/FoundPool';
import TestLogin from './pages/user/TestLogin';
import UserProfile from './pages/user/UserProfile';
import TripsHostedDetails from './pages/user/TripsHostedDetails';
import CheckRide from './pages/user/CheckRide';
import StartRide from './pages/user/StartRide';
import TripsHistory from './pages/user/TripsHistory';
import JoinedTripHistory from './pages/user/JoinedTripHistory';
import TripRequest from './pages/user/TripRequest';
import AdminProfile from './pages/admin/AdminProfile';
import AdminTripManagement from './pages/admin/AdminTripManagement';
import HostedTrips from './pages/admin/HostedTrips';
import PreviousTrips from './pages/admin/PreviousTrips';
import Privacy from './pages/user/Privacy';
import Services from './pages/user/Services';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin-dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path='/admin-users' element = {<UserManage></UserManage>}></Route>
        <Route path='/admin-login' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/host-ride' element={<HostRide></HostRide>}></Route>
        <Route path='/check-wheels' element={<Wheels></Wheels>}></Route>
        <Route path='/call-user' element={<GetUser></GetUser>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/check-mail' element={<CheckMail></CheckMail>}></Route>
        <Route path='/change-password' element={<ChangePassword></ChangePassword>}></Route>
        <Route path='/add-users' element={<AddUser></AddUser>}></Route>
        <Route path='/user-login' element={<UserLogin></UserLogin>}></Route>
        <Route path='/' element={<UserLogin></UserLogin>}></Route> 
        <Route path='/user-confirmation' element={<UserConfirmation></UserConfirmation>}></Route>
        <Route path='/home-page' element={<HomePage></HomePage>}></Route>
        <Route path='/add-wheels' element={<AddWheels></AddWheels>}></Route>
        <Route path='/test-add-user' element={<TestAddUser></TestAddUser>}></Route>    
        <Route path='/test-wheels' element={<TestWheels></TestWheels>}></Route>
        <Route path='/join-ride' element={<JoinRide></JoinRide>}></Route>
        <Route path='/found-pool' element={<FoundPool></FoundPool>}></Route>
        <Route path='/test-login' element={<TestLogin></TestLogin>}></Route>
        <Route path='/user-profile' element={<UserProfile></UserProfile>}></Route>
        <Route path='/trip-hosted' element={<TripsHostedDetails></TripsHostedDetails>}></Route>  
        <Route path='/check-ride/:id' element={<CheckRide></CheckRide>}></Route>  
        <Route path='/start-ride' element={<StartRide></StartRide>}></Route>  
        <Route path='/trip-history' element={<TripsHistory></TripsHistory>}></Route>  
        <Route path='/joined-trip-history' element={<JoinedTripHistory></JoinedTripHistory>}></Route> 
        <Route path='/trip-Request' element={<TripRequest></TripRequest>}></Route> 
      <Route path='/admin-profile' element={<AdminProfile></AdminProfile>}></Route>
      <Route path='/admin-trips' element={<AdminTripManagement></AdminTripManagement>}></Route>
      <Route path='/admin-trips-hosted' element={<HostedTrips></HostedTrips>}></Route>
      <Route path='/admin-trips-previous' element={<PreviousTrips></PreviousTrips>}></Route>
      <Route path='/privacy' element={<Privacy></Privacy>}></Route> 
      <Route path='/Services' element={<Services></Services>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
