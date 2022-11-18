import './Register.css'

const Register = () => {
    return (
        <div>
            <form className='register-container'>
                <span>Register Account Form</span>
                <div className="register-name">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Surname" />
                </div>
                <div className="register-form center">
                    <input type="text" placeholder="Username" /><br />
                    <input type="text" placeholder="Email" /><br />
                    <input type="password" placeholder="Password" /><br />
                    <input type="password" placeholder="Confirm-Password" />
                </div>
                <div className="register-checkbox">
                    <label className="checkbox"><br />
                    <input type="checkbox" />I agree with the terms and conditions and the Privacy Policy</label>
                </div>
                <div className="register-button center">
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default Register