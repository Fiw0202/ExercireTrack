
const Register = () => {
    return (
        <div>
            <form>
                <span>Register Account Form</span>
                <div className="register-form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Surname" />
                </div>
                <div className="register-form">
                    <input type="text" placeholder="Username" /><br />
                    <input type="text" placeholder="Email" /><br />
                    <input type="text" placeholder="Password" /><br />
                    <input type="text" placeholder="Confirm-Password" />
                </div>
                <div className="register-form">
                    <label className="checkbox"><br />
                    <input type="checkbox" />I agree with the terms and conditions and the Privacy Policy</label>
                </div>
                <div className="register-button">
                    <button>Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default Register