import React from 'react'

const PersonalInfo = ({formData, setFormData}) => {
  return (
    <div className='personal-info-container'>
      <input type="text" placeholder='Primeiro nome'
      value={formData.firstName} 
      onChange={(event) => setFormData({...formData, firstName: event.target.value})}
      />
      <input type="text" placeholder='Sobrenome'
      value={formData.lastName} 
      onChange={(event) => setFormData({...formData, lastName: event.target.value})}
      />
      <input type="text" placeholder='Nome de usuário'
      value={formData.userName} 
      onChange={(event) => setFormData({...formData, userName: event.target.value})}
      />
    </div>
  )
}

export default PersonalInfo
