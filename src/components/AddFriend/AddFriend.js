import React, { useState, Component } from "react";

import { gql, useQuery } from "@apollo/client";
import { useCountry } from "../../hooks/useCountry";
import { useCity } from "../../hooks/useCity";
import { useTimezone } from "../../hooks/useTimezone";



export default function AddFriend() {

    const {countryError, countryData, countryLoading} = useCountry()
    const {cityError, cityData, cityLoading} = useCity("AL")
    const {timezoneError, timezoneData, timezoneLoading} = useTimezone("AL")
  
    console.log("Country Data = ",{countryData, countryError, countryLoading})
    console.log("City Data = ", {cityData, cityError, cityLoading})
    console.log("Coutry Timezone Data = ", {timezoneData, timezoneError, timezoneLoading})
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
    <div className="AddFriendForm">
      {/* Nome */}
      <div className="col-md-12">
        <label for="name" class="form-label">Nome</label>
        <input value={name} onChange={(e => setName(e.target.value))} type="text" class="form-control" id="name"/>
      </div>

      {/* País */}
      <div className="col-md-12">
        <label for="country" class="form-label">País</label>
        <select value={country} onChange={(e => setCountry(e.target.value))} id="country" class="form-select">
          {/* Checks if there is data and if loading is false */}
          {!countryLoading && countryData !== undefined && countryData.countries.edges.map(country => {
            return (
              <option>{country.node.name}</option>
            )
          })}
        </select>
      </div>

      {/* Sítio - Cidade */}
      <div className="col-md-12">
        <label for="city" class="form-label">Cidade</label>
        <select value={city} onChange={(e => setCity(e.target.value))} id="city" class="form-select">
        {/* Checks if there is data and if loading is false */}
        {!cityLoading && cityData !== undefined && cityData.map(city => {
            return (
              <option>{city}</option>
            )
          })}
        </select>
      </div>

      {/* Telefone */}
      <div className="col-md-12">
        <label for="phone" class="form-label">Telefone</label>
        <input value={phone} onChange={(e => setPhone(e.target.value))} type="text" class="form-control" id="phone"/>
      </div>

      {/* Email */}
      <div className="col-md-12">
        <label for="email" class="form-label">Email</label>
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


