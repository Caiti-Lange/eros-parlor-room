//The main dashboard showing your collection (“Your Parlor”). Displays all your muses, add button, etc

import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router-dom";

export default function parlorRoom (){
    const { token } = useAuth();
    const [muses, setMuse] = useState ([])

    useEffect (()=>{
        async function getMuse(){
            const response= await fetch ("http://localhost:8080/parlor-room", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
      },
    })
            const result= await response.json()
            console.log (result)

            setMuse(result)
        } getMuse()
    },[])

    return(
        <>
        {muses &&(
            muses.map((muse)=>(
                <div className ="parlor-room">
                    
                    <div className="muse_card" key={muse.id}>
                        <h1>{muse.name}</h1>
                        <h2>{muse.origin}</h2>
                        <h3>{muse.media_type}</h3>
                        <img
                            src={muse.portrait}
                            alt={muse.name}
                            style={{ width: "150px", height: "auto", objectFit: "cover" }}
                        ></img>
                {/*         <button
                            onClick={() => alert(muse.details || "No details available")}
                            style={{ marginRight: "10px" }}
                        >
                            Muse Details
                        </button> */}
                    </div>
                </div>
            ))
        
        )}
        <div className="add-muse">
            <nav>
                <NavLink to="/add-muse">🕯️Add a new Muse to your Parlor Room🕯️</NavLink>
            </nav>
        </div>
        </>
    )
}