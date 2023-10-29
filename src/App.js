import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList';
import AddFriend from './components/AddFriend/AddFriend'
import UpdateFriend from './components/UpdateFriend/UpdateFriend'
import DeleteFriend from './components/DeleteFriend/DeleteFriend'

function App() {
  return (
    <div className="App">
      <FriendsList></FriendsList>
      <AddFriend></AddFriend>
      <UpdateFriend></UpdateFriend>
      <DeleteFriend></DeleteFriend>
    </div>
  );
}

export default App;
