import React, { useState, useEffect } from 'react';
import ViewTableData from './ViewTableData';
import user from './UserForm.module.css';


//get data form local storage using get method
const getData = () => {
    const data = localStorage.getItem('formData');
    if (data) {
        return JSON.parse(data);    //convert data into object
    } else {
        return [];
    }
};

export default function UserForm() {

    const [formData, setFormData] = useState(getData());

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');


    const handleUserSubmitForm = (e) => {
        e.preventDefault();
        //creating object to store input data
        let form = {
            'userName': userName,
            'email': email,
            'Password': Password,
        };
        setFormData([...formData, form]);
        setUserName('');
        setEmail('');
        setPassword('');
    };

    //remove data
    function RemoveData(Password) {
        const filterData = formData.filter((item) => {
            return item.Password !== Password

        });

        setFormData(filterData);
        // console.log(Password)
    }

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return (
        <div className={user.container}>
            <div className={user.Wrapper}>
                <div className={user.formStyle}>

                    <form className={user.form} onSubmit={handleUserSubmitForm}>
                        <h3>Registration Form</h3>
                        <label>UserName </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter Username"
                            required
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            className={user.inputFiled}
                        />
                        <br />
                        <label>Email Id </label>
                        <br />
                        <input
                            type="email"
                            placeholder="Enter Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className={user.inputFiled}
                        />
                        <br />
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={Password}
                            className={user.inputFiled}
                        />
                        <br />
                        <button type="submit" className={user.btn}>
                            Submit
                        </button>
                    </form>
                    
                </div>
                <div className={user.Datafiled}>
                        <ViewTableData formData={formData} RemoveData={RemoveData} />
                 </div>
            </div>
        </div>

    );
}
