import { Form, FormElement, FormSubmitButton } from "../components/Form"

export const CategoriesRegister = () => {
  return (
    <>
      <Form title="Categorie Registration">
        <FormElement title="Name">
          <input type="text" className="outline-none w-full" />
        </FormElement>
      </Form>

      <FormSubmitButton />
    </>
  )
}
