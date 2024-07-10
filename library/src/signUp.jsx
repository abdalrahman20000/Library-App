import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from "./header";
import Footer from './footer';



// const user_data = JSON.parse(sessionStorage.getItem("user_data"));
// const arr_users = [];
// arr_users.push(user_data);


function SignUp() {
    const history = useHistory();

    // State variables for input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // Function to handle form submission
    const handleSignup = (e) => {
        e.preventDefault();

        // Create user object
        let u = {
            name: name,
            email: email,
            pass: pass
        };

        // Store user data in session storage
        sessionStorage.setItem("user_data", JSON.stringify(u));
        alert("Sign up Successfully !!!");

        // Reset input fields after submission
        setName('');
        setEmail('');
        setPass('');

        history.push("/")
    };

    return (
        <div>
            <Header />
            <div className="input">
                <form onSubmit={handleSignup}>
                    <label htmlFor="name">Name:
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="email">Email:
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="pass">Password:
                        <input
                            type="password"
                            id="pass"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="">

            </div>
            <Footer />
        </div>
    );
};

// console.log(document.getElementById("up"));


export default SignUp;