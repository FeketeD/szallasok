import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function SzallasMod() {

    const param = useParams();
    const navigate = useNavigate();
    const id = param.szallasId;
    const [modname, setModname] = useState("");
    const [modlocation, setModLocation] = useState("");
    const [modhostname, setModHostname] = useState("");
    const [modprice, setModPrice] = useState("");
    const [modminimum_nights, setModMinimum_nights] = useState("");

    useEffect(() => {

        (async () => {
            try {
            const res = await fetch(`https://nodejs.sulla.hu/data/${id}`, {});
            const szallasData = await res.json();
            setModname(szallasData.name);
            setModHostname(szallasData.hostname);
            setModLocation(szallasData.location);
            setModMinimum_nights(szallasData.minimum_nights);
            setModPrice(szallasData.price);
        } catch (error) {
            console.log(error);   
        } 
    })();
}, [id, modname,modlocation, modhostname,modprice,modminimum_nights]);

const modName = (e) => {
    setModname(e.target.value);
}
const modLocation = (e) => {
    setModLocation(e.target.value);
}
const modHostname = (e) => {
    setModHostname(e.target.value);
}
const modPrice = (e) => {
    setModPrice(e.target.value);
}
const modMinimum_nights = (e) => {
    setModMinimum_nights(e.target.value);
}
return(
    <div className='p-5 content bg-lavender text-center'>
        <h2>Pizza módosítás</h2>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            fetch(`https://nodejs.sulla.hu/data/${id}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "id": id,
                    "name": e.target.elements.name.value,
                    "hostname": e.target.elements.hostname.value,
                    "price": parseInt(e.target.elements.price.value),
                    "location": e.target.elements.location.value,
                    "minimum_nights": e.target.elements.minimum_nights.value,
                }),
            })
            .then(() => {
                navigate("/");
            })
            .catch(console.log);
        }}>
            <div className="text-start w-50" style={{position: 'relative', left: "50%", transform: 'translate(-50%, 0)',}}>
            <div className='form-group row pb-3'>
                <div>
                    <label htmlFor="name" className='col-sm-3 col-form-label'> Név: </label>
                    <input type="text" id="name" name="name" className="form-control" defaultValue={modname} onChange={modName} autoComplete="off"/>
                </div>
            </div>
            <div className='form-group row pb-3'>
                <div>
                    <label htmlFor="location" className='col-sm-3 col-form-label'> Város: </label>
                    <input type="text" id="location" name="location" className="form-control" defaultValue={modlocation} onChange={modLocation} autoComplete="off"/>
                </div>
            </div>
            <div className='form-group row pb-3'>
                <div>
                    <label htmlFor="price" className='col-sm-3 col-form-label'> Ár: </label>
                    <input type="text" id="price" name="price" className="form-control" defaultValue={modprice} onChange={modPrice} autoComplete="off"/>
                </div>
            </div>
            <div className='form-group row pb-3'>
                <div>
                    <label htmlFor="hostname" className='col-sm-3 col-form-label'> Hostname: </label>
                    <input type="text" id="hostname" name="hostname" className="form-control" defaultValue={modhostname} onChange={modHostname} autoComplete="off"/>
                </div>
            </div>
            <div className='form-group row pb-3'>
                <div>
                    <label htmlFor="minimum_nights" className='col-sm-3 col-form-label'> Minimum éjszakák: </label>
                    <input type="text" id="minimum_nights" name="minimum_nights" className="form-control" defaultValue={modminimum_nights} onChange={modMinimum_nights} autoComplete="off"/>
                </div>
            </div>

            </div>
            
            <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        
    </div>
);
}