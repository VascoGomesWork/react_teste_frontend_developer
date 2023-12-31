import React, { Component, useEffect } from "react";
import { DeleteData } from "../../service/LocalStorage";

export default function FriendsList(){
  
  //const [localStorageVar, setLocalStorageVar] = useEffect(localStorage)

  let counter
  console.log("Friends List = ", localStorage.getItem("friend"))

  function deleteFriend(friend){
    //console.log("Delete Dados = ", friend)
    localStorage = DeleteData(friend)
    console.log("Local Storage var = ", localStorage)
  }

  Object.keys(localStorage).forEach(function(key) {
    console.log(localStorage.getItem(key));
  });

    return (
    <div>
      <table class="table" style={{margin: 5+"%" + 15 + "%" + 25 + "%" + 1 + "%"}}>
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">País</th>
      <th scope="col">Sítio</th>
      <th scope="col">Número de Telefone</th>
      <th scope="col">Email</th>
      <th scope="col">Timezone</th>
      <th scope="col">Bandeira do País</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(localStorage).map((item) => (
      <tr>
      <td>{JSON.parse(localStorage.getItem(item)).name}</td>
      <td>{JSON.parse(localStorage.getItem(item)).coutry}</td>
      <td>{JSON.parse(localStorage.getItem(item)).city}</td>
      <td>{JSON.parse(localStorage.getItem(item)).phone}</td>
      <td>{JSON.parse(localStorage.getItem(item)).email}</td>
      <td>{JSON.parse(localStorage.getItem(item)).timezone}</td>
      <td>{JSON.parse(localStorage.getItem(item)).countryFlag}</td>
      <td><button className="btn btn-danger" onClick={() => deleteFriend(item)}>Delete Friend</button></td>
    </tr>
    ))}
    

  </tbody>
</table>
    </div>);
  }

