import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ApiCall() {
    const [data, setData] = useState()
    const [select, setSelect] = useState("character")

    useEffect(() => {
        console.log("llame a la api")
        axios.get(`https://rickandmortyapi.com/api/${select}/?page=1`)
            .then(response => setData(response.data.results))
    }, [select])

    return (
        <div>
            <h1>FROM API SEARCH</h1>
            <select onChange={(event)=>{setSelect(event.target.value)}}>
                <option value="character">Character</option>
                <option value="episode">Episode</option>
                <option value="location">Location</option>
            </select>
             <div style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", width:"80vw" }}>
                
                    <ul >
                    {data?.map((datos,index) =>
                        <li key={index}>{datos.name}</li>
                        )} 
                    </ul>
                
            </div> 
        </div>
    )
}