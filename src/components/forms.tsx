import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { push, ref, set } from 'firebase/database'
import { db } from '../firebaseConfig'

interface FormProps {
  device: string;
}

export default function Form({ device }: FormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [userAgent, setUserAgent] = useState('')
  const [pageUrl, setPageUrl] = useState('')
  const datetime = new Date().toISOString();
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value)
  
  const fetchUserAgent = () => {
    setUserAgent(window.navigator.userAgent)
  }

  useEffect(() => {
    fetchUserAgent()
    setPageUrl(window.location.href)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !telefone) {
      setErrorMessage('Todos os campos são obrigatórios.')
      return
    }

    if (!telefone.startsWith('+351')) {
      setErrorMessage('O telefone deve começar com o DDD de Portugal (+351).')
      return
    }

    setErrorMessage('')

    try {
      const usersRef = ref(db, 'fcis');
      const newDataRef = push(usersRef);

      await set(newDataRef, {
        name: name,
        email: email,
        telefone: telefone,
        datetime: datetime,
        device: device,
        userAgent: userAgent,
        pageUrl: pageUrl,
      });
      setSuccessMessage('Dados enviados com sucesso!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col text-center item-center'>
        <div className=' py-2'>
        <form onSubmit={handleSubmit} className='py-[5px] rounded-xl bg-white'>
        <p className='text-black py-6 pt-12 font-serif'>Um de nossos consultores vai entrar em contacto consigo</p>
      <div className='py-2'>
                    <input 
                        type="name" 
                        id="name" 
                        value={name} 
                        placeholder='Seu nome'
                        onChange={handleNameChange} 
                        className=" p-2 border w-full border-gray-300 rounded text-black"
                    />
        </div>
        <div className="py-2">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Seu melhor Email"
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="py-2">
          <input
            type="tel"
            id="telefone"
            value={telefone}
            placeholder="Seu Whatsapp"
            onChange={handleTelefoneChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
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
        <Button 
        type="submit"
        className="w-full"
        variant={'ProjectButton'}
        size={'ProjectButton'}>
          QUERO TER MINHA VIDA 
          <br />TRANSFORMADA
        </Button>
        <div>
            <p className='text-black pb-12 font-serif'>Preenche o formulário acima e <span className='font-bold'>tenha a vida transformada</span></p>
        </div>
      </form>
        </div>
    </div>
  )
}