export default function SaveData(name, country, city, phone, email, timezone, countryFlag, testCounter){

    console.log("Local Storage Name = ", name)
    console.log("Local Storage Country = ", country)
    console.log("Local Storage City = ", city)
    console.log("Local Storage Phone = ", phone)
    console.log("Local Storage Email = ", email)
    console.log("Local Storage Timezone = ", timezone)
    console.log("Local Storage Coutry Flag = ", countryFlag)

    //In order to add data in Local Storage, it is needed to give a differente item's name

    //Get name of the Local Storage
    console.log("TESTE = ", localStorage.getItem("friend"))
    let newLocalStorageName = ""

    if(localStorage.getItem("friend") === null){
        newLocalStorageName = "friend"
    } else {
        console.log("TESTE SAVE DATA = ", testCounter)
        newLocalStorageName = "friend" +testCounter
    }


    localStorage.setItem(newLocalStorageName, JSON.stringify({
        name: name,
        country: country,
        city: city,
        phone: phone,
        email: email,
        timezone: timezone,
        countryFlag: countryFlag,
        localStorageItemName: newLocalStorageName
    }))
}

export function UpdateData(name, country, city, phone, email, timezone, countryFlag){

    console.log("Local Storage Name = ", name)
    console.log("Local Storage Country = ", country)
    console.log("Local Storage City = ", city)
    console.log("Local Storage Phone = ", phone)
    console.log("Local Storage Email = ", email)
    console.log("Local Storage Timezone = ", timezone)
    console.log("Local Storage Coutry Flag = ", countryFlag)

    //In order to update data in Local Storage, it is just needed to pass the item's name

    localStorage.setItem("friend", JSON.stringify({
        name: name,
        country: country,
        city: city,
        phone: phone,
        email: email,
        timezone: timezone,
        countryFlag: countryFlag
    }))
}