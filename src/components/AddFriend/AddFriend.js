import React, { useState, Component } from "react";

import { gql, useQuery } from "@apollo/client";
import { useCountry } from "../../hooks/useCountry";
import { useCountryState } from "../../hooks/useState";
import { useTimezone } from "../../hooks/useTimezone";
import { SaveData } from "../../service/LocalStorage";



export default function AddFriend() {

  let countryCode = "US"

    const {countryError, countryData, countryLoading} = useCountry()
    const {stateError, stateData, stateLoading} = useCountryState(countryCode)
    const {timezoneError, timezoneData, timezoneLoading} = useTimezone(countryCode)
    //const {countryFlagError, countryFlagData, countryFlagLoading} = useTimezone("AL")
  
    console.log("Country Data = ",{countryData, countryError, countryLoading})
    console.log("City Data = ", {stateData, stateError, stateLoading})
    console.log("Coutry Timezone Data = ", {timezoneData, timezoneError, timezoneLoading})
    //console.log(data.countries.edges[1].node.name)
    

    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [timezone, setTimezone] = useState("")
    const [countryFlag, setCountryFlag] = useState("")

    let testCounter = 0

    function addNewFriend(){
      //console.log("Name = ", name, "\n", "Country = ", country, "\n", "City = ", city, "\n", "Phone = ", phone, "\n", "Email = ", email, "\n", "Timezone = ", timezone, "\n", "Country Flag = ", countryFlag, "\n")
    
      setName("Test Friend")
      setCountry("United States")
      setState("Test City")
      setPhone("987654321")
      setEmail("email@teste.com")
      setTimezone("Test/TEE")
      setCountryFlag("America")

      testCounter++
      //Save data in local storage
      SaveData(name, country, state, phone, email, timezone, countryFlag, testCounter)
    }

    return (
    <div className="addFriendForm" style={{margin: 5+"%"}}>
      {/* Nome */}
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2">
            <label for="name" class="form-label">Nome</label>
          </div>
          <div className="col-md-10">
            <input value={name} onChange={(e => setName(e.target.value))} type="text" class="form-control" id="name"/>
          </div>
        </div>
      </div>

      {/* País */}
      <div className="col-md-12">
      <div className="row">
        <div className="col-md-2">
          <label for="country" class="form-label">País</label>
        </div>
        <div className="col-md-10">
          <select value={country} onChange={(e => setCountry(e.target.value))} id="country" class="form-select">
            {/* Checks if there is data and if loading is false */}
            {!countryLoading && countryData !== undefined && countryData.countries.edges.map(country => {
              return (
                <option>{country.node.name}</option>
              )
            })}
          </select>
        </div>
        </div>
      </div>

      {/* Sítio - Cidade */}
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2">
            <label for="city" class="form-label">Estado</label>
          </div>
          <div className="col-md-10">
            <select value={state} onChange={(e => setState(e.target.value))} id="state" class="form-select">
            {/* Checks if there is data and if loading is false */}
            {!stateLoading && stateData !== undefined && stateData.states.edges.map(state => {
                return (
                  <option>{state.node.name}</option>
                )
              })}
            </select>
          </div>
        </div>
      </div>

      {/* Telefone */}
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2">
            <label for="phone" class="form-label">Telefone</label>
          </div>
        <div className="col-md-10">
          <input value={phone} onChange={(e => setPhone(e.target.value))} type="text" class="form-control" id="phone"/>
        </div>
        </div>
      </div>

      {/* Email */}
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2">
            <label for="email" class="form-label">Email</label>
          </div>
          <div className="col-md-10">
            <input value={email} onChange={(e => setEmail(e.target.value))} type="text" class="form-control" id="email"/>
          </div>
        </div>
      </div>

      { /* Timezone */}
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2">
              <label for="timezone" class="form-label">Timezone</label>
          </div>
          <div className="col-md-10">
            <select value={timezone} onChange={(e => setTimezone(e.target.value))} id="timezone" class="form-select">
              {/* Checks if there is data and if loading is false */}
              {!timezoneLoading && timezoneData !== undefined && timezoneData.country.timezones.map(timezone => {
                  return (
                    <option>{timezone.zone_name}</option>
                  )
                })}
            </select>
          </div>
        </div>
            </div>

      {/* Country Flag */}
      <div className="col-md-12">
        <div className="row">
        <div className="col-md-2">
          <label for="countryFlag" class="form-label">Country Flag</label>
        </div>
        <div className="col-md-10">
          <select value={countryFlag} onChange={(e => setCountryFlag(e.target.value))} id="countryFlag" class="form-select">
            <option>Disabled select</option>
          </select>
          </div>
        </div>
      </div>

      <button onClick={() => addNewFriend()} type="button" class="btn btn-primary">Add New Friend</button>

    </div>);
  }


