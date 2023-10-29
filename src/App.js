import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList';
import AddFriend from './components/AddFriend/AddFriend'
import UpdateFriend from './components/UpdateFriend/UpdateFriend'
import DeleteFriend from './components/DeleteFriend/DeleteFriend'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route strict exact path="/" Component={FriendsList}></Route>
        <Route strict exact path="/addFriend" Component={AddFriend}></Route>
        <Route strict exact path="/updateFriend" Component={UpdateFriend}></Route>
        <Route strict exact path="/deleteFriend" Component={DeleteFriend}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
