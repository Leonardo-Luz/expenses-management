import { z } from "zod";
import { Form, FormElement, FormSubmitButton } from "../components/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

  const registerHandler = (data: formData) => {
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

