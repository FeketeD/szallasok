import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Bejelentkezes } from './Bejelentkezes';


export function SzallasLista(){
    const [szallasok, setSzallasok] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://nodejs.sulla.hu/data", {})
        .then((res) => res.json())
        .then((szallasok) => setSzallasok(szallasok))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
 }, []);
 return (
    <div className='p-5 m-auto text-center content bg-ivory'>
     { isFetchPending ? ( <div className='spinner-border'></div>) : (
         <div>
             <h2>Szállások</h2>
             {szallasok.map((szallas) => (
                 <div key={szallas.id + 4} className='card col-sm-3 d-inline-block m-1 p-2 shadow'>
                     <NavLink key={szallas.id} to={"/get/" + szallas.id} style={{textDecoration: 'none', color: 'black'}}>
                        <h5 className='text-muted'>{szallas.name}</h5>
                        <p>Város: {szallas.location}</p>
                     </NavLink>
                     <p>Ár: {szallas.price} Ft</p>
                     <NavLink key={szallas.id+1} to={"/put/" + szallas.id}>
                         <i className="bi bi-pencil-square mx-1">Módosítás</i>
                     </NavLink>
                     <NavLink key={szallas.id+2} to={"/delete/" + szallas.id} className={"text-danger"}>
                         <i className="bi bi-trash3">Törlés</i>
                     </NavLink>
                 </div>
                 
             ))}
         </div>
     )}
    </div> 
  );
}