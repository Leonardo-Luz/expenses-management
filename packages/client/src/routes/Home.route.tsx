import { faFilter, faMagnifyingGlass, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { service } from "../services/api.service"
import { transactions } from "../types"
import { Modal } from "../components/Modal"

export const Home = () => {
  const [income, setIncome] = useState<number>(0)
  const [expense, setExpense] = useState<number>(0)

  const [modal, setModal] = useState<boolean>(false)

  const get = async () => {
    const response = await service.get('/transactions', {})

    const transactions = response.data.data as transactions[]

    transactions.forEach(el => {
      el.type == 'income' ?
        setIncome(income => income + parseFloat(el.amount)) :
        setExpense(expense => expense + parseFloat(el.amount))
    })
  }

  const confirmFilters = () => {
    alert('WIP: create graphic to apply filters')
    setModal(false)
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
          <h1 className='text-green-600 flex flex-row p-2 justify-center items-center min-w-[20%] bg-peach-500 rounded-2xl inset-shadow-sm cursor-pointer'>R$ +{income.toFixed(2)}</h1>
        </div>

        <div className="w-[48%] flex flex-row justify-between items-center text-center bg-mint-500 py-4 px-6 rounded-2xl shadow-md font-bold">
          <div className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon icon={faMinus} />
            <h1>Total Expenses</h1>
          </div>
          <h1 className='text-red-600 flex flex-row p-2 justify-center items-center min-w-[20%] bg-peach-500 rounded-2xl inset-shadow-sm cursor-pointer'>R$ -{expense.toFixed(2)}</h1>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between items-center gap-5 ml-5 mt-5 bg-mint-500 py-4 px-6 rounded-2xl shadow-md ">
        <h1 className="text-center font-bold">Transactions Graphic</h1>
        <label className="cursor-text inset-shadow-sm w-[40%] flex items-center gap-3 p-2 rounded-2xl bg-peach-500" >
          <FontAwesomeIcon className="w-[10%]" icon={faMagnifyingGlass} />
          <input className="w-[90%] outline-none font-normal" placeholder="Search" type="search" />
        </label>
        <FontAwesomeIcon onClick={() => setModal(true)} icon={faFilter} className="cursor-pointer" />
      </div>
      {
        modal &&
        <Modal>
          <h1 className="font-bold">Set Filters</h1>
          <hr />

          <div className="flex flex-col gap-1 p-2">
            <details className="flex flex-col ">
              <summary>Type</summary>
              <label><input defaultChecked type="checkbox" value='income' /> Income</label>
              <label><input defaultChecked type="checkbox" value='expense' /> Expense</label>
            </details>

            <details className="flex flex-col ">
              <summary>Interval</summary>
              <label><input type="checkbox" value='none' /> None</label>
              <label><input defaultChecked type="checkbox" value='daily' /> Daily</label>
              <label><input defaultChecked type="checkbox" value='weekly' /> Weekly</label>
              <label><input defaultChecked type="checkbox" value='monthly' /> Monthly</label>
              <label><input defaultChecked type="checkbox" value='yearly' /> Yearly</label>
            </details>

            <div className="flex flex-row justify-between">
              <p>User:</p>
              <select className="w-[80%]">
                <option>Choose an user</option>
              </select>
            </div>

            <div className="flex flex-row justify-between">
              <p>Category:</p>
              <select className="w-[80%]">
                <option>Choose an category</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button onClick={() => confirmFilters()} className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Save</button>
            <button onClick={() => setModal(false)} className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
          </div>
        </Modal>
      }
    </>
  )
}
