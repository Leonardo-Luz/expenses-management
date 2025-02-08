import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { DropMenu, DropMenuElement } from './components/DropMenu'
import { faArrowRight, faHome, faMoneyBillTransfer, faPaperclip, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='flex flex-col justify-between bg-bg-light  text-emerald-900 h-[100vh]'>
      <nav className='w-full flex flex-row items-center'>
        <div className='w-[28vw] self-start'>
          <DropMenu title='Menu' open>
            <DropMenuElement to='/' icon={faHome} actionIcon={faArrowRight} title="Home" />
            <DropMenuElement to='/transactions' icon={faMoneyBillTransfer} actionIcon={faArrowRight} title="Transactions" />
            <DropMenuElement to='/users' icon={faUser} actionIcon={faArrowRight} title="Users" />
            <DropMenuElement to='/categories' icon={faPaperclip} actionIcon={faArrowRight} title="Categories" />
          </DropMenu>

          <DropMenu title='Register' open>
            <DropMenuElement to='/register/transactions' icon={faMoneyBillTransfer} actionIcon={faPlus} title="Add Transactions" />
            <DropMenuElement to='/register/users' icon={faUser} actionIcon={faPlus} title="Add Users" />
            <DropMenuElement to='/register/categories' icon={faPaperclip} actionIcon={faPlus} title="Add Categories" />
          </DropMenu>
        </div>
        <div className='w-[70%] self-start'>
          <Navbar />
          <div className='w-[97%] m-5 p-6 bg-mint-500 rounded-2xl'>
            <Outlet />
          </div>
        </div>
      </nav>

      <Footer />
    </div>
  )
}

export default App
