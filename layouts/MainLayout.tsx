import React from 'react'

const MainLayout = (children: JSX.Element) => {
  return (
    <div>
        <p>Hola</p>
        <>{children}</>
    </div>
  )
}

export default MainLayout