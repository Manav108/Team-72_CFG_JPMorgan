import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        
        {/* Outlet is the placeholder for the actual component */}
        
         <Outlet/>
       
        
        
    </div>
  )
}

export default RootLayout