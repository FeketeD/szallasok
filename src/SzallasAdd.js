import { useNavigate } from 'react-router-dom';

export function SzallasAdd() {
const navigate = useNavigate();

return (
    <div className='p-5 content bg-whitesmoke text-center'>
        <h2>Szállás hozzáadása</h2>
        <form
        onSubmit={(e) => {
            e.persist();
            e.preventDefault();
            fetch("https://nodejs.sulla.hu/data", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": e.target.elements.name.value,
                    "location": e.target.elements.location.value,
                    "hostname": e.target.elements.hostname.value,
                    "price": parseInt(e.target.elements.price.value),
                    "minimum_nights": e.target.elements.minimum_nights.value
                })
            })
            .then(() => {
                navigate("/");
            })
            .catch(console.log);
        }}
            >
            <div className='container'>
                <div className='form-group row w-100 pb-3 text-start' style={{position: 'relative', left: "50%", transform: 'translate(-25%)',}}>
                    <label htmlFor="name" className='col-sm-5 col-form-label'> Szállás neve: </label>
                    <div>
                        <input type="text" id="name" name="name" className="form-control w-50" autoComplete='name' />
                    </div>

                    <label htmlFor="location" className='col-sm-5 col-form-label'> Város: </label>
                    <div>
                        <input type="text" id="location" name="location" className="form-control w-50" autoComplete='location' />
                    </div>

                    <label htmlFor="price" className='col-sm-5 col-form-label'> Ár: </label>
                    <div>
                        <input type="text" id="price" name="price" className="form-control w-50" autoComplete='price' />
                    </div>

                    <label htmlFor="minimum_nights" className='col-sm-5 col-form-label'> Minimum éjszakák száma: </label>
                    <div>
                        <input type="text" id="minimum_nights" name="minimum_nights" className="form-control w-50" autoComplete='minimum_nights' />
                    </div>

                    <label htmlFor="hostname" className='col-sm-5 col-form-label'> Hostname: </label>
                    <div>
                        <input type="text" id="hostname" name="hostname" className="form-control w-50" autoComplete='hostname' />
                    </div>
                </div>
                <button type="submit" className='btn btn-success'>Küldés</button>
            </div>
            </form>
    </div>
);
}