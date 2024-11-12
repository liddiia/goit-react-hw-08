import LoginForm from '../../components/LoginForm/LoginForm'
import css from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={css.loginPageCont} >
      <h2>LoginPage</h2>
      <LoginForm/>
      </div>
  )
}

export default LoginPage