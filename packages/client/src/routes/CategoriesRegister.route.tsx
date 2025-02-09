import { z } from "zod";
import { Form, FormElement } from "../components/Form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { service } from "../services/api.service";

const formSchema = z.object({
  name: z.string()
    .min(1, 'O nome é obrigatório')
})

type formData = z.infer<typeof formSchema>

export const CategoriesRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  });

  const registerHandler = async (data: formData) => {
    const response = await service.post('/categories', {
      category: data
    })

    alert(JSON.stringify(response))
  }

  return (
    <>
      <Form onSubmit={handleSubmit(registerHandler)} title="Categorie Registration">
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
      </Form>
    </>
  )
}
