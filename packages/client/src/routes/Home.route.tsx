import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { service } from "../services/api.service"
import { transactions } from "../types"

export const Home = () => {
  const [income, setIncome] = useState<number>(0)
  const [expense, setExpense] = useState<number>(0)

  const get = async () => {
    const response = await service.get('/transactions', {})

    const transactions = response.data.data as transactions[]

    transactions.forEach(el => {
      el.type == 'income' ?
        setIncome(income => income + parseFloat(el.amount)) :
        setExpense(expense => expense + parseFloat(el.amount))
    })
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <>
      <div className="w-full flex flex-col gap-5 ml-5 mt-5">
        <h1 className="w-full text-center bg-mint-500 py-4 px-6 rounded-2xl shadow-md font-bold">Home</h1>
      </div>
      <div className="w-full flex flex-row justify-between ml-5 mt-5">
        <div className="w-[48%] flex flex-row justify-between items-center text-center bg-mint-500 py-4 px-6 rounded-2xl shadow-md font-bold">
          <div className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon icon={faPlus} />
            <h1>Total Incomes</h1>
          </div>
          <h1 className='flex flex-row p-2 justify-center items-center min-w-[20%] bg-peach-500 rounded-2xl inset-shadow-sm cursor-pointer'>R$ {income.toFixed(2)}</h1>
        </div>

        <div className="w-[48%] flex flex-row justify-between items-center text-center bg-mint-500 py-4 px-6 rounded-2xl shadow-md font-bold">
          <div className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon icon={faMinus} />
            <h1>Total Expenses</h1>
          </div>
          <h1 className='flex flex-row p-2 justify-center items-center min-w-[20%] bg-peach-500 rounded-2xl inset-shadow-sm cursor-pointer'>R$ {expense.toFixed(2)}</h1>
        </div>
      </div>
    </>
  )
}
