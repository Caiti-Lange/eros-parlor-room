//The main dashboard showing your collection (“Your Parlor”). Displays all your muses, add button, etc

import { useEffect, useState } from "react";

export default function Muses (){
    const [muses, setMuse] = useState ([])

    useEffect (()=>{
        async function getMuse(){
            const response= await fetch ("*API*")
            const result= await response.json()
            console.log (result)

            setMuse(result)
        } getMuse()
    },[])

    return(
        <>
        {muses &&(
            muses.map((muse)=>(
                < div key={muse.id}>
                    <h1>{muse.name}</h1>
                    <h2>{muse.origin}</h2>
                    <img
                        src={muse.portrait}
                        alt={muse.name}
                        style={{ width: "150px", height: "auto", objectFit: "cover" }}
                    ></img>
                    <button
                        onClick={() => alert(muse.details || "No details available")}
                        style={{ marginRight: "10px" }}
                    >
                        Muse Details
                    </button>
                </div>
            ))
        )
        }
        </>
    )
}