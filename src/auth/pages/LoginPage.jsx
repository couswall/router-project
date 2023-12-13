import { FaUser, FaLock } from "react-icons/fa";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';



export const LoginPage = () => {

  const { username, password, onInputChange } = useForm({
    username:'',
    password: '',
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();

    if ( username.trim().length <=1 || password.trim().length <=1 ) return;

    const user = {
      id: new Date().getTime() * 3, 
      username, 
      password,
    }

    login( user );
    navigate("/", { replace: true });

  }

  return (

    <>
      <section className="login-section flex">
        <article className="container">
          
          <form className="form" onSubmit={ onSubmitLogin }>
          <h1 className="text-center">Login</h1>

          <div className="input-box">
            <input 
              type="text"
              placeholder="Username" 
              name="username"
              value={ username }
              onChange={ onInputChange }
              autoComplete="off"
            />
            <FaUser className="icon"/>
          </div>

          <div className="input-box">
            <input 
              type="password"
              placeholder="Password" 
              required
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
            <FaLock className="icon"/>
          </div>

          <div className="remember-forgot flex">
            <label> 
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

            <button type="submit" className="btn">Login</button>

          <div className="register-link">
            <p className="text-center">
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>

          </form>
        </article>
      </section>
    </>

    )
}
