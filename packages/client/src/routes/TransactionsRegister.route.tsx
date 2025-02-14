import { z } from "zod";
import { Form, FormElement } from "../components/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { service } from "../services/api.service";
import axios from "axios";

const formSchema = z.object({
  name: z.string()
    .min(1, 'O nome é obrigatório'),
  amount: z.coerce.number() // change to currency
    .positive('A quantia não pode ser negativa')
    .min(0, 'A quantia é obrigatória'),
  description: z.string(),
  date: z.coerce.date({ errorMap: () => ({ message: 'A data é obrigatória' }) }),
  interval: z.string(),
  type: z.string(),
  category_id: z.string(), // change to a select element
  user_id: z.string(), // change to a select element
})

type formData = z.infer<typeof formSchema>


export const TransactionsRegister = () => {
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
          <input
            type="number"
            className={`outline-none w-full ${errors.amount ? 'text-red-700' : ''}`}
            autoComplete="off"
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
          <input
            type="text"
            className={`outline-none w-full ${errors.interval ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('interval')}
          />
        </FormElement>
        {
          errors.interval &&
          <span className="text-right text-red-700 font-bold">
            {errors.interval.message}
          </span>
        }
        <FormElement title="Type">
          <input
            type="text"
            className={`outline-none w-full ${errors.type ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('type')}
          />
        </FormElement>
        {
          errors.type &&
          <span className="text-right text-red-700 font-bold">
            {errors.type.message}
          </span>
        }
        <FormElement title="Category_id">
          <input
            type="text"
            className={`outline-none w-full ${errors.category_id ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('category_id')}
          />
        </FormElement>
        {
          errors.category_id &&
          <span className="text-right text-red-700 font-bold">
            {errors.category_id.message}
          </span>
        }
        <FormElement title="User_id">
          <input
            type="text"
            className={`outline-none w-full ${errors.user_id ? 'text-red-700' : ''}`}
            autoComplete="off"
            {...register('user_id')}
          />
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

