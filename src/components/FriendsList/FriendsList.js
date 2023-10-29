import React, { Component, useEffect } from "react";

export default function FriendsList(){
  
  let counter
  console.log("Friends List = ", localStorage.getItem("friend"))

  

  Object.keys(localStorage).forEach(function(key) {
    console.log(localStorage.getItem(key));
  });

    return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">País</th>
      <th scope="col">Sítio</th>
      <th scope="col">Número de Telefone</th>
      <th scope="col">Email</th>
      <th scope="col">Timezone</th>
      <th scope="col">Bandeira do País</th>
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
    </tr>
    ))}
    

  </tbody>
</table>
    </div>);
  }

