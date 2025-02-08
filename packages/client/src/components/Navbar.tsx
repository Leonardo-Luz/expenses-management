import { faChevronLeft, faChevronRight, faMagnifyingGlass, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex m-5 p-2 bg-mint-500 self-start w-[97%] justify-around rounded-2xl shadow-md">
      <div className="flex items-center gap-8">
        <FontAwesomeIcon onClick={() => navigate(-1)} className="cursor-pointer bg-peach-500 p-2 w-4.5 rounded-full" icon={faChevronLeft} />
        <FontAwesomeIcon onClick={() => navigate(+1)} className="cursor-pointer bg-peach-500 p-2 w-4.5 rounded-full" icon={faChevronRight} />
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
