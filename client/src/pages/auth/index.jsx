import '../../index.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'


const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleLogin = async() => {
      console.log('login')
    }

    const  handleSignup = async() => {
      
    }
 
    return (<div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      
      <div className='h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl-grid-cols-2'>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='flex items-center justify-center'>
              <h1 className='text-5xl font-bold lg:text-6xl'>Welcome</h1>
            </div>
              <p className='my-1 font-medium text-center'>Please login or create an account to continue</p>
          </div>
          <div className='flex items-center justify-center w-full'>
            <Tabs defaultValue="account" className='w-3/4'>
              <TabsList className='w-full'>
                <TabsTrigger className='!outline-none data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all transition-all duration-300 w-1/2' value="login">
                Login</TabsTrigger>
                <TabsTrigger className='!outline-none data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all transition-all duration-300 w-1/2'value="signup">Signup</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className='flex flex-col gap-5 mt-10 items-center'>

                <Input placeholder='email' type='email' className='' value={email} onChange={event=>setEmail(event.target.value)}/>

                <Input placeholder='password' type='password' className='' value={password} onChange={event=> setPassword(event.target.value)}/>

                <Button className='w-1/2' onClick={handleLogin}>Login</Button>

              </TabsContent>

              <TabsContent value="signup" className='flex flex-col gap-5 items-center'>

              <Input placeholder='email' type='email' className='' value={email} onChange={event=>setEmail(event.target.value)}/>

              <Input placeholder='password' type='password' className='' value={password} onChange={event=> setPassword(event.target.value)}/>

              <Input placeholder='confirm password' type='password' className='' value={confirmpassword} onChange={event=> setConfirmPassword(event.target.value)}/>

              <Button className='w-1/2' onClick={handleSignup}>Signup</Button>

              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className='flex justify'>

        </div>
      </div>
    </div>)
  }
  
export default Auth;