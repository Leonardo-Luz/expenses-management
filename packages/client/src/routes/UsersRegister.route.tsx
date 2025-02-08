import { Form, FormElement, FormSubmitButton } from "../components/Form"

export const UsersRegister = () => {
  return (
    <>
      <Form title="User Registration">
        <FormElement title="Name">
          <input type="text" className="outline-none w-full" />
        </FormElement>
        <FormElement title="Email">
          <input type="email" className="outline-none w-full" />
        </FormElement>
        <FormElement title="Cellphone">
          <input type="text" className="outline-none w-full" />
        </FormElement>
      </Form>

      <FormSubmitButton />
    </>
  )
}
