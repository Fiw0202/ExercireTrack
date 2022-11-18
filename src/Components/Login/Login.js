
import './Login.css'

const Login = () => {
    return (
        <div className='login-form'>
            <form>
                <span className="login-head">Login</span>
                <div className="form-login">
                    <label>Username</label><br />
                    <input type='text' placeholder='Username' />
                </div>
                <div className="form-login">
                    <label>Password</label><br />
                    <input type='text' placeholder='Password' />
                </div>
                <div>
                    <label className="checkbox">
                        <input type="checkbox" />
                        Remember me
                    </label>
                </div>
                <div className="login-button">
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
