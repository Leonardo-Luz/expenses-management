import { faChevronLeft, faChevronRight, faMagnifyingGlass, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const canGoBack = location.key !== 'default'
  const canGoFoward = useRef(false)

  // useEffect(() => {
  //   canGoFoward.current = false
  // }, [location])

  return (
    <div className="flex m-5 p-2 bg-mint-500 self-start w-[97%] justify-around rounded-2xl shadow-md">
      <div className="flex items-center gap-8">
        <FontAwesomeIcon onClick={() => {
          if (canGoBack) {
            navigate(-1)
            canGoFoward.current = true
          }
        }} className={`inset-shadow-sm p-2 w-4.5 rounded-full  ${canGoBack ? "bg-peach-500  cursor-pointer hover:scale-120 transition-all" : "bg-mint-500"}`} icon={faChevronLeft} />
        <FontAwesomeIcon onClick={() => canGoFoward.current ? navigate(1) : ''} className={`inset-shadow-sm p-2 w-4.5 rounded-full  ${canGoFoward.current ? "bg-peach-500  cursor-pointer hover:scale-120 transition-all" : "bg-mint-500"}`} icon={faChevronRight} />
      </div>
      <label className="cursor-text inset-shadow-sm w-[40%] flex items-center gap-3 p-2 rounded-2xl bg-peach-500" >
        <FontAwesomeIcon className="w-[10%]" icon={faMagnifyingGlass} />
        <input className="w-[90%] outline-none" placeholder="Search" type="search" />
      </label>
      <Link to='/' className="flex items-center">
        <FontAwesomeIcon className="scale-170 cursor-pointer" icon={faMoneyBill} />
      </Link>
    </div>
  )
}
