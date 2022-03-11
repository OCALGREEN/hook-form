import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState(""); 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // errors
    const [firstNameError, setFirstNameError] = useState(""); 
    const [lastNameError, setLastNameError] = useState(""); 
    const [emailError, setEmailError] = useState(""); 
    const [passwordError, setPasswordError] = useState(""); 
    const [confirmError, setConfirmError] = useState(""); 
    const [passwordMatchError, setPasswordMatchError] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
        // validations
        if(firstName.length < 2){
            setFirstNameError("First Name must be at least 2 characters"); 
        }
        if(lastName.length < 2){
            setLastNameError("Last Name must be at least 2 characters"); 
        }
        if(email.length < 5){
            setEmailError("Email must be at least 5 characters"); 
        }
        if(password.length < 8){
            setPasswordError("Password must be at least 8 characters"); 
        }
        if(confirm.length < 8){
            setConfirmError("Password must be at least 8 characters"); 
        }
        if(password != confirm){
            setPasswordMatchError("Password and Confirm Password must match"); 
        }
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const userInfo = (props) => {
        if( hasBeenSubmitted ) {
            return (
                <div>
                    <div>
                        Your Form Data
                    </div>
                    <div>
                        First Name: {firstName}
                    </div>
                    <div>
                        Last Name: {lastName}
                    </div>
                    <div>
                        Email: {email}
                    </div>
                    <div>
                        Password: {password}
                    </div>
                    <div>
                        Confirm Password: {confirm}
                    </div>
                </div>
            );
        }
        else {
            return ;
        }
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <h3>{ formMessage() }</h3>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                    {
                        firstNameError
                        ?<p>{firstNameError}</p>
                        :<p></p>
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                    {
                        lastNameError
                        ?<p>{lastNameError}</p>
                        :<p></p>
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                    {
                        emailError
                        ?<p>{emailError}</p>
                        :<p></p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                    {
                        passwordError
                        ?<p>{passwordError}</p>
                        :<p></p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirm(e.target.value) } />
                    {
                        confirmError
                        ?<p>{confirmError}</p>
                        :<p></p>
                    }
                    {
                        passwordMatchError
                        ?<p>{passwordMatchError}</p>
                        :<p></p>
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h3>{ userInfo() }</h3>
        </div>
    );
};
    
export default UserForm;
