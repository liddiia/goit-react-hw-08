import UserRegistrForm from '../../components/UserRegistrForm/UserRegistrForm'
import css from './RegistrationPage.module.css'

const RegistrationPage = () => {
  return (
    <div className={css.registrationPageCont} >
      <h2>RegistrationPage</h2>
     <UserRegistrForm/> 
      </div>
  )
}

export default RegistrationPage