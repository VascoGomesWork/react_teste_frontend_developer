import React, { Component } from "react";

export default function FriendsList(){
  
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>);
  }

