import NavBar from './NavBar'
import DashBoard from './DashBoard'

function App() {

  return (
    <div className='w-screen h-screen overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <NavBar />
      <DashBoard />
    </div>
  )
}

export default App
