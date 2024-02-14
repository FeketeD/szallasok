import { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
export function SzallasSingle() {

    const param = useParams();
    const id = param.szallasId;
    const [szallas, setSzallas] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async() => {
            try {
        const res = await fetch(`https://nodejs.sulla.hu/data/${id}`, {})
        const szallas =await res.json();
        setSzallas(szallas);
        } catch(error) {
            console.log(error);
        }
        finally{
            setPending(false);
        }
    })();
 }, [id]);
 return (
   <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !szallas.id ? ( <div className='spinner-border'></div>) : (       
                <div className='card p-3'>
                    <div className='card-body'>
                        <h1>{szallas.name}</h1>
                        <p>Város: {szallas.location}</p>
                        <p>Ár: {szallas.price} Ft</p>
                        <p>Minimum éjszakák száma: {szallas.minimum_nights}</p>
                        <p>{szallas.hostname}</p>
                        <NavLink key={szallas.id+1} to={"/put/" + szallas.id}>
                            <i className="bi bi-pencil-square mx-1">Módosítás</i>
                        </NavLink>
                        <NavLink key={szallas.id+2} to={"/delete/" + szallas.id} className={"text-danger"}>
                            <i className="bi bi-trash3">Törlés</i>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    ); 
}