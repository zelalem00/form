import React, { useState } from 'react';
const RegisterForm = props => {
    const a = useState("abc");

    console.log(a);

    const [ formState, setFormState ] = useState({
        firstName: "",

        lastName: "",

        email: "",

        password: "",

        confirmPassword: "",

        submitted: false
    })

    const onChangeHandler = event => {

        setFormState({

            ...formState,

            [event.target.name]: event.target.value

        });

        console.log (formState);

    }

    let message;

    if(formState.submitted){

        message=<h1>submitted</h1>;

    }else{

        message=<h1>Submit</h1>;

    }

    const onSubmitHandler = event => {

        event.preventDefault();

        setFormState({

            ...formState,

            submitted: true

        })

        console.log(formState);

    }

    return(

        <div className="box">

           <p>{message}</p>

            <form onSubmit={onSubmitHandler}>

                <label>First Name</label>

                <input type="text" name="firstName" onChange={onChangeHandler}/>

                <br/>       

                <label>Last Name</label>

                <input type="text" name="lastName" onChange={onChangeHandler}/>

                <br/>       

                <label>Email</label>

                <input type="email" name="email" onChange={onChangeHandler}/>

                <br/>       

                <label>Password</label>

                <input type="password" name="password" onChange={onChangeHandler}/>

                <br/>       

                <label>Confirm Password</label>

                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>

                <br/>  

                <input type="submit" />    

            </form>
                <br/>
                <div>
                    <p>First name:  </p>
                    <p>Last name: </p>
                    <p>Email name: </p>
                    <p>Password name: </p>
                    <p>confirmPassword: </p>

                </div>

        </div>
        
    );

}
export default RegisterForm;