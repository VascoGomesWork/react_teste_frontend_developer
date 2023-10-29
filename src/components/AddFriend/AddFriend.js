import React, { useState, Component } from "react";

import { gql, useQuery } from "@apollo/client";
import { useCountry } from "../../hooks/useCountry";



export default function AddFriend() {

    const {error, data, loading} = useCountry()
  
    console.log({data, error, loading})
    //console.log(data.countries.edges[1].node.name)
    

    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [timezone, setTimezone] = useState("")
    const [countryFlag, setCountryFlag] = useState("")


    function addNewFriend(){
      console.log("Name = ", name, "\n", "Country = ", country, "\n", "City = ", city, "\n", "Phone = ", phone, "\n", "Email = ", email, "\n", "Timezone = ", timezone, "\n", "Country Flag = ", countryFlag, "\n")
    
      //Save data in local storage
    }

    return (
    <div className="">
      {/* Nome */}
      <div className="col-md-12">
        <label for="name" class="form-label">Nome</label>
        <input value={name} onChange={(e => setName(e.target.value))} type="text" class="form-control" id="name"/>
      </div>

      {/* País */}
      <div className="col-md-12">
        <label for="country" class="form-label">País</label>
        <select value={country} onChange={(e => setCountry(e.target.value))} id="country" class="form-select">
          {!loading && data !== undefined && data.countries.edges.map(country => {
            return (
              <option value={country.name}>{country.node.name}</option>
            )
          })}
        </select>
      </div>

      {/* Sítio */}
      <div className="col-md-12">
        <label for="city" class="form-label">Cidade</label>
        <select value={city} onChange={(e => setCity(e.target.value))} id="city" class="form-select">
          <option>Disabled select</option>
        </select>
      </div>

      {/* Telefone */}
      <div className="col-md-12">
        <label for="phone" class="form-label">Telefone</label>
        <input value={phone} onChange={(e => setPhone(e.target.value))} type="text" class="form-control" id="phone"/>
      </div>

      {/* Email */}
      <div className="col-md-12">
        <label for="email" class="form-label">Telefone</label>
        <input value={email} onChange={(e => setEmail(e.target.value))} type="text" class="form-control" id="email"/>
      </div>

      {/* Timezone */}
      <div className="col-md-12">
        <label for="timezone" class="form-label">Timezone</label>
        <select value={timezone} onChange={(e => setTimezone(e.target.value))} id="timezone" class="form-select">
          <option>Disabled select</option>
        </select>
      </div>

      {/* Country Flag */}
      <div className="col-md-12">
        <label for="countryFlag" class="form-label">Country Flag</label>
        <select value={countryFlag} onChange={(e => setCountryFlag(e.target.value))} id="countryFlag" class="form-select">
          <option>Disabled select</option>
        </select>
      </div>

      <button onClick={() => addNewFriend()} type="button" class="btn btn-primary">Add New Friend</button>

    </div>);
  }


