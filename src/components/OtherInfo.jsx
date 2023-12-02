import React from 'react'

const OtherInfo = ({formData, setFormData}) => {
  return (
    <div className='other-info-container'>
      <input type="text" placeholder='Nacionalidade'
      value={formData.nacionality} 
      onChange={(event) => setFormData({...formData, nacionality: event.target.value})}
      />
      <input type="text" placeholder='Outros'
      value={formData.other} 
      onChange={(event) => setFormData({...formData, other: event.target.value})}
      />
    </div>
  )
}

export default OtherInfo
