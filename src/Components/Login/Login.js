
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <form>
                <span className="login-head">Login</span>
                <div className="form-login center">
                    <input type='text' placeholder='Username' />
                </div>
                <div className="form-login center">
                    <input type='password' placeholder='Password' />
                </div>
                <div className="login-checkbox">
                    <label className="checkbox">
                        <input type="checkbox" />Remember me</label>
                </div>
                <div className="login-button center">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
