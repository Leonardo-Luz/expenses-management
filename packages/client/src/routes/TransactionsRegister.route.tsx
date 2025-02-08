import { Form, FormElement } from "../components/Form"

export const TransactionsRegister = () => {
  return (
    <>
      <Form title="Transaction Registration">
        <FormElement title="Name">
          <input type="text" className="outline-none w-full" />
        </FormElement>
        <FormElement title="amount">
          <input type="text" className="outline-none w-full" />
        </FormElement>
        <FormElement title="description">
          <input type="text" className="outline-none w-full" />
        </FormElement>
        <FormElement title="date">
          <input type="text" className="outline-none w-full" />
        </FormElement>
        <FormElement title="interval">
          <input type="text" className="outline-none w-full" />
        </FormElement>
        <FormElement title="type">
          <input type="text" className="outline-none w-full" />
        </FormElement>
        <FormElement title="category_id">
          <input type="text" className="outline-none w-full" />
        </FormElement>
        <FormElement title="user_id">
          <input type="text" className="outline-none w-full" />
        </FormElement>
      </Form>
    </>
  )
}
