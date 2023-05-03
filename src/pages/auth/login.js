import React from 'react'

export default function login() {
  return (
    <div className='container'>
        <h1>Login </h1>
        <form>
           <label >Username</label>
           <input type="text"/>
        </form>
        
    </div>
  )
}
login.getLayout = function getLayout({page}){
    return (
        <>
     <main>
        {page}
     </main>
    </>

    )
}