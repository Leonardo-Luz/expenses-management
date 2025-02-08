import { faCode, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="flex m-5 py-3 px-12 w-[97%] justify-between align-center bg-gradient-to-br from-mint-500 to-peach-500 shadow-md">
      <a href='https://github.com/leonardo-luz/expenses-management' target="_blank" >
        <FontAwesomeIcon icon={faCode} />
      </a>
      <p>Copyright &copy; 2025 Leonardo Luz</p>
      <Link to='/'><FontAwesomeIcon icon={faMoneyBill} className="scale-170 self-center" /></Link>
    </div>
  )
}
