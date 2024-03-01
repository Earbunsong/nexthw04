import React from 'react'
import NavbarComponent from './NavbarComponent'
import footer from './footer'
export default function layout({children}) {
  return (
    <>
     <NavbarComponent/>
     <main>
        {children}
     </main>
     <footer/>
    </>
  )
}
