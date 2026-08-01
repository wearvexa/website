'use client'

import Form from "@/components/form/Form";
import { NumberField } from "@/components/form/fields/NumberField";

const LoginSection = () => {
  return (
    <section className={"px-5"}>
      <Form onSubmit={(e) => console.log(e)}>
        <NumberField name={"mobile"} label={"شماره تلفن"} required />
      </Form>
      <div className={"grid grid-cols-2 gap-2"}></div>
    </section>
  );
};

export default LoginSection;
