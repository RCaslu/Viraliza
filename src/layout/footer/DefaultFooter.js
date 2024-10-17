import React, { useState } from 'react';
import { db } from '@/pages/api/firebaseConfig';
import { push, ref, set } from 'firebase/database'
import { useEffect } from 'react';

const DefaultFooter = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [servico, setServico] = useState('');
  const [objetivos, setObjetivos] = useState('');
  const [userAgent, setUserAgent] = useState('')
  const pageUrl = window.location.href
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const fetchUserAgent = () => {
    setUserAgent(window.navigator.userAgent)
  }

  useEffect(() => {
    fetchUserAgent()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      nome,
      email,
      empresa,
      servico,
      objetivos
    };
    // Envie formData ao banco de dados aqui
    console.log(formData);

    if (!email || !nome || !empresa || !servico || !objetivos) {
      setErrorMessage('Todos os campos são obrigatórios.')
      return
    }


    setErrorMessage('')

    try {
      const usersRef = ref(db, 'viraliza');
      const newDataRef = push(usersRef);

      await set(newDataRef, {
        nome: nome,
        email: email,
        empresa: empresa,
        servico: servico,
        objetivos: objetivos,
        userAgent: userAgent,
        pageUrl: pageUrl
      });
      setSuccessMessage('Dados enviados com sucesso!')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <div className="col-lg-8 text-lg-end">
        <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
          <a href="#">
            <i className="fab fa-facebook-f" /> <span>Facebook</span>
          </a>
          <a href="#">
            <i className="fab fa-twitter" /> <span>Twitter</span>
          </a>
          <a href="#">
            <i className="fab fa-dribbble" /> <span>Dribbble</span>
          </a>
          <a href="#">
            <i className="fab fa-behance" /> <span>Behance</span>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="footer-left-content pt-80">
            <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
              <span>Quer aumentar as vendas na sua empresa?</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>Preencha o formulário e indique-nos os 
            serviços que o 
            ajudarão a tornar a sua empresa 
            um marco no seu mercado de atuação.
          </p>

          <form onSubmit={handleSubmit}>
            <label style={{width: '425px'}}>
              Nome:
              <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <br />
            <label style={{width: '425px'}}>
              Email:
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label style={{width: '425px'}}>
              Empresa:
              <input type="text" name="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
            </label>
            <br />
            <label style={{width: '425px'}}>
              Serviço que necessita:
              <input type="text" name="servico" value={servico} onChange={(e) => setServico(e.target.value)} />
            </label>
            <br />
            <label style={{width: '425px'}}>
              Conte-nos um pouco sobre os teus objetivos:
              <textarea name="objetivos" value={objetivos} onChange={(e) => setObjetivos(e.target.value)}></textarea>
            </label>
            {errorMessage && (
              <div className="py-2 text-red-500">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="py-2 text-green-500">
                {successMessage}
              </div>
            )}
            <br />
            <button style={{width: '425px',
              backgroundColor: 'green',
            }} type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DefaultFooter;