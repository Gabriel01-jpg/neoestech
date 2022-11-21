import { Form, Input } from 'antd'
import { Button } from '../components/Button'
import Head from 'next/head'
import { useContext, useState } from 'react';
import loginService from '../services/login';
import { AuthContext } from '../context/AuthProvider';
import { withSSRGuest } from '../utils/WithSSRGuest';
import { setCookie } from 'nookies'
import { useRouter } from 'next/router';
import { serUserOnStorage } from '../utils/Helpers/storage/setUserOnStorage';
import { api } from '../services/api';

export default function Home() {
  const router = useRouter()
  const { setUser } = useContext(AuthContext)
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      setIsSubmiting(true);
      const user = await loginService({ username, password });
      user && setCookie(null, 'neo.token', user.token);
      user && serUserOnStorage(user);
      api.defaults.headers["Authorization"] = `Bearer ${user?.token}`;     
      router.push('/mapa');
    } catch(e){
      setIsSubmiting(false);
    }
  }

  return (
    <div className="">
      <Head>
        <title>Neo Estech</title>
      </Head>
      <main className='flex h-screen w-full items-center justify-center'>

        <Form className='flex-column w-full max-w-[450px] items-center justify-center px-8'>
          <div className='w-full flex justify-center mb-6'>
            <img src="logo.png" alt="Logo da página" />
          </div>
          <label className='font-serif font-medium'>Usuário</label>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Por favor, informe seu usuário' }]}
          >
            <Input className="py-3 font-serif" placeholder='Digite seu usuário' value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <label className='font-serif font-medium'>Senha</label>
          <Form.Item
            className='font-serif'
            name="password"
            rules={[{ required: true, message: 'Por favor, informe sua senha',  }]}
          >
            <Input className="py-3 font-serif" type="password" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Item>
          <a className='text-center w-full mb-6 mt-2 inline-block relative font-serif after:content-[""] after:w-[calc(100%-345px)]
          after:h-[1px] after:bg-black after:absolute after:mt-[10px] after:ml-[8px]
          before:content-[""] before:w-[calc(100%-345px)] before:left-0
          before:h-[1px] before:bg-black before:absolute before:mt-[10px]
          after:hover:bg-orange-800 before:hover:bg-orange-800
          hover:text-orange-800 hover:underline'>
            Primeiro acesso ou não sabe sua senha?
          </a>
          <Form.Item>
            <Button action={handleLogin} isLoading={isSubmiting} >Entrar</Button>
          </Form.Item>
        </Form>

      </main>
    </div>



  
  )
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
    
  return {
      props: {

      }
  }
})