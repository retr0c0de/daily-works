import FooterLayout from './Components/Layouts/FooterLayout'
import HeaderLayout from './Components/Layouts/HeaderLayout'

function App({ children }) {
  return (
    <>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </>
  )
}

export default App
