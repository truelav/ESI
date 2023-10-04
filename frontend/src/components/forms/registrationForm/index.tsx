
import { SyntheticEvent, useState } from 'react';
// import {Button} from 'react-bootstrap';
// import {Form} from 'react-bootstrap';

function RegistrationForm() {

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
        re_password: ""
    })

    const onFormInput = (e: SyntheticEvent) => {
        // console.log(e.target.name)
        // const curField = e.target?.name
        // const curVal = e.target?.value
        if(e.target.name === "fullname"){
            setFormData({
                ...formData,
                full_name: e.target.value
            })
        }

    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
    }

  return (
        <form>
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input onChange={onFormInput} className="input" value={formData.full_name} type="text" name='fullname'/>

            <label className="label">Email</label>
            <input onChange={onFormInput} className="input" value={formData.email} type="email" name='email'/>

            <label className="label">Password</label>
            <input onChange={onFormInput} className="input" value={formData.password} type="password" name='password'/>

            <label className="label">Re Password</label>
            <input onChange={onFormInput} className="input" value={formData.re_password} type="password" name='repassword'/>

            <button onClick={handleSubmit} className="btn" type="submit">
                Submit
            </button>
        </form>
    );
}

export default RegistrationForm;