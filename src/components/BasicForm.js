import { useState } from "react";

const BasicForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isName, setIsName] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [formStates, setFormStates] = useState(true)
  

  const emailLog = email.length !== '' && email.includes('@') && email.trim().length >6
  const emailClass = isValid ? 'form-control invalid' : 'form-control'

  const nameLog = name.length !== '' && name.trim().length > 4
  const nameClass = isName ? 'form-control invalid' : 'form-control'

  const passwordLog = password.length !== '' && password.trim().length > 7
  const passwordClass = isPassword ? 'form-control invalid' : 'form-control'


  function changeNameHandler(e){
    setName(e.target.value) 
    setIsName(true)
    if(nameLog){
      setIsName(false)
    }
    if(nameLog && emailLog && passwordLog){
      setFormStates(false)
    }else{
      setFormStates(true)
    }
    return
  }

  function changeEmailHandler(e){
    setEmail(e.target.value)
    setIsValid(true)
    if(emailLog){
      setIsValid(false)
    }
    if(nameLog && emailLog && passwordLog){
      setFormStates(false)
    }else{
      setFormStates(true)
    }
    return
  }
  
  function changePasswordHandler(e){
    setPassword(e.target.value)
    setIsPassword(true)
    if(passwordLog){
      setIsPassword(false)
    }
    if(nameLog && emailLog && passwordLog){
      setFormStates(false)
    }else{
      setFormStates(true)
    }
    return
  }


  function submitHandler(e){
    e.preventDefault()
    setEmail('')
    setName('')
    setPassword('')
    setFormStates(true)
  }


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div  className={nameClass}>
          <label htmlFor='name'>Name</label>
          <input value={name} onChange={changeNameHandler} type='text' id='name' />
          {isName && <p>Name field can\'t be empty and length  5.!</p>}
        </div>
        <div className= {emailClass}>
          <label htmlFor='name'>E-Mail Address</label>
          <input value={email} onChange={changeEmailHandler} type='text' id='name' />
          {isValid && <p>Email field can\'t be empty and (@).!</p>}
        </div>
        
      </div>
      <div className={passwordClass}>
        <label htmlFor='name'>Password</label>
        <input value={password} onChange={changePasswordHandler} type='text' id='name' />
        {isPassword && <p>Password field can\'t be empty and length  8.!</p>}
      </div>
      <div className={formStates ? 'form-actions' : 'form-actions'}>
        <button className={formStates ? 'but' : 'butbut'} disabled={formStates} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;









