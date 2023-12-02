import React, { useState } from 'react'
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';

const Form = () => {
    
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        userName: "",
        nacionality: "",
        other: "",
    });

    const FormTitles = ["Cadastro", "Informações Pessoais", "Outras Informações"];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData}/>;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData}/>;
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData}/>;
        }
    }
  return (
    <div>
      <div className="form">
        <div className="progressbar">
            <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}}></div>
        </div>
        <div className="form-container">
            <header className='header'>
                <h1>{FormTitles[page]}</h1>
            </header>
            <main className='body'>
                {PageDisplay()}
            </main>
            <footer className='footer'>
                <button
                disabled={page == 0}
                onClick={() => {
                    setPage((currPage) => currPage - 1);
                }}>Anterior</button>
                <button 
                onClick={() => {
                    if (page === FormTitles.length - 1) {
                        alert("Cadastro Finalizado") 
                         
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                }}>{page === FormTitles.length - 1 ? "Enviar" : "Avançar"}</button>
            </footer>
        </div>
      </div>
    </div>
  )
}

export default Form
