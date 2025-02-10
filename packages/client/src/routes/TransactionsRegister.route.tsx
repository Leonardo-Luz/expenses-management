import { z } from "zod";
import { Form, FormElement } from "../components/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { service } from "../services/api.service";
import axios from "axios";

const formSchema = z.object({
  name: z.string()
    .min(1, 'O nome é obrigatório')
})

type formData = z.infer<typeof formSchema>


export const TransactionsRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
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
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
        <FormElement title="Amount">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
        <FormElement title="Description">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
        <FormElement title="Date">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
        <FormElement title="Interval">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
        <FormElement title="Type">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
        <FormElement title="Category_id">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
        <FormElement title="User_id">
          <input
            type="text"
            className="outline-none w-full"
            autoComplete="off"
            {...register('name')}
          />
          {
            errors.name &&
            <span>
              {errors.name.message}
            </span>
          }
        </FormElement>
      </Form>
    </>
  )
}

