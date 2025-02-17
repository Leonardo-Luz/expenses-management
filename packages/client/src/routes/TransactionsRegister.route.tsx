import { z } from "zod";
import { Form, FormElement } from "../components/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { service } from "../services/api.service";
import axios from "axios";
import { useEffect, useState } from "react";
import { categories, transaction_interval, transaction_type, users } from "../types";

const formSchema = z.object({
  name: z.string()
    .min(1, 'O nome é obrigatório'),
  amount: z.coerce.number() // change to currency
    .nonnegative('A quantia não pode ser negativa')
    .min(0, 'A quantia é obrigatória'),
  description: z.string(),
  date: z.coerce.date({ errorMap: () => ({ message: 'A data é obrigatória' }) }),
  interval: z.enum([
    transaction_interval.daily,
    transaction_interval.weekly,
    transaction_interval.monthly,
    transaction_interval.yearly,
    transaction_interval.none
  ], { message: 'O interval é obrigatório' }),
  type: z.enum([transaction_type.income, transaction_type.expense], { message: 'O type é obrigatório' }),
  category_id: z.string()
    .min(1, 'A categoria é obrigatória'),
  user_id: z.string()
    .min(1, 'O user é obrigatório'),
})

type formData = z.infer<typeof formSchema>


export const TransactionsRegister = () => {
  const [users, setUsers] = useState<users[]>()
  const [categories, setCategories] = useState<categories[]>()

  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0.00,
    }
  });

  const registerHandler = async (data: formData) => {
    try {
      const response = await service.post('/transactions', {
        transaction: data
      })
      alert(JSON.stringify(response.data.message))
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
      }
    }
  }

  const getAllUsers = async () => {
    try {
      const response = await service.get('/users', {})

      setUsers(response.data.data)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
      }
    }
  }

  const getAllCategories = async () => {
    try {
      const response = await service.get('/categories', {})

      setCategories(response.data.data)
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
      }
    }
  }

  useEffect(() => {
    getAllCategories()
    getAllUsers()
  }, [])

  return (
    <>
      <Form onSubmit={handleSubmit(registerHandler)} title="Transaction Registration">
        <FormElement title="Name">
          <input
            type="text"
            className={`outline-none w-full ${errors.name ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('name')}
          />
        </FormElement>
        {
          errors.name &&
          <span className="text-right text-red-700 font-bold">
            {errors.name.message}
          </span>
        }
        <FormElement title="Amount">
          R$&nbsp;
          <input
            type="number"
            step='any'
            className={`outline-none w-full ${errors.amount ? 'text-red-700' : ''}`}
            {...register('amount')}
          />
        </FormElement>
        {
          errors.amount &&
          <span className="text-right text-red-700 font-bold">
            {errors.amount.message}
          </span>
        }
        <FormElement title="Description">
          <textarea
            rows={3}
            className={`resize-none outline-none w-full ${errors.description ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('description')}
          />
        </FormElement>
        {
          errors.description &&
          <span className="text-right text-red-700 font-bold">
            {errors.description.message}
          </span>
        }
        <FormElement title="Date">
          <input
            type="date"
            className={`outline-none w-full ${errors.date ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('date')}
          />
        </FormElement>
        {
          errors.date &&
          <span className="text-right text-red-700 font-bold">
            {errors.date.message}
          </span>
        }
        <FormElement title="Interval">
          <select
            className={`outline-none w-full ${errors.interval ? 'text-red-700' : ''}`}
            {...register('interval')}
          >
            <option value=''>Choose an option</option>
            {
              (Object.keys(transaction_interval) as Array<keyof typeof transaction_interval>).map(key =>
                <option value={key}>{key}</option>)
            }
          </select>
        </FormElement>
        {
          errors.interval &&
          <span className="text-right text-red-700 font-bold">
            {errors.interval.message}
          </span>
        }
        <FormElement title="Type">
          <select
            className={`outline-none w-full ${errors.type ? 'text-red-700' : ''}`}
            {...register('type')}
          >
            <option value=''>Choose an option</option>
            {
              (Object.keys(transaction_type) as Array<keyof typeof transaction_type>).map(key =>
                <option value={key}>{key}</option>)
            }
          </select>
        </FormElement>
        {
          errors.type &&
          <span className="text-right text-red-700 font-bold">
            {errors.type.message}
          </span>
        }
        <FormElement title="Category">
          <select
            {...register('category_id')}
            className={`outline-none w-full ${errors.category_id ? 'text-red-700' : ''}`}
          >
            <option value=''>Choose an option</option>
            {categories ?
              categories.map(category => (
                <option value={category.id}>{category.name}</option>
              )) :
              <option>Data not found!</option>
            }
          </select>
        </FormElement>
        {
          errors.category_id &&
          <span className="text-right text-red-700 font-bold">
            {errors.category_id.message}
          </span>
        }
        <FormElement title="User">
          <select
            className={`outline-none w-full ${errors.user_id ? 'text-red-700' : ''}`}
            {...register('user_id')}
          >
            <option value=''>Choose an option</option>
            {users ?
              users.map(user => (
                <option value={user.id}>{user.name}</option>
              )) :
              <option>Data not found!</option>
            }
          </select>
        </FormElement>
        {
          errors.user_id &&
          <span className="text-right text-red-700 font-bold">
            {errors.user_id.message}
          </span>
        }
      </Form>
    </>
  )
}

