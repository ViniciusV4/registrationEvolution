import React from 'react'

const SignUpInfo = ({formData, setFormData}) => {
  return (
    <div className='sign-up-container'>
      <input type="text" placeholder='Email' 
      value={formData.email} 
      onChange={(event) => setFormData({...formData, email: event.target.value})}
      />
      <input type="text" placeholder='Senha' 
      value={formData.password} 
      onChange={(event) => setFormData({...formData, password: event.target.value})}
      />
      <input type="text" placeholder='Confirme a Senha'
      value={formData.confirmPassword} 
      onChange={(event) => setFormData({...formData, confirmPassword: event.target.value})}
      />
    </div>
  )
}

export default SignUpInfo
