"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl } from "@/components/ui/form";
import CustonFormField from "../CustonFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";




const  RegisterForm = ({user}: {user:User}) => {
  const router = useRouter();
   const [isLoading, setIsLoading] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
      const userData ={name, email, phone};

      const user = await createUser(userData);

      if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="space-y-12 flex-1">
        <section className="space-y-4">
          <h1 className="header">Welcome 👋🏾 </h1>
          <p className="text-dark-700">Let us know you</p>
        </section>

        <section className="space-y-6"> 
            <div className="mb-9 space-y-6">
            <h2 className="sub-header">Personal Information</h2>
            </div>
        </section>

        <CustonFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name= "name"
          label='full name'
          placeholder="Rose Anold"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
        <CustonFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name= "email"
          label= "Email"
          placeholder= "roseanold@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustonFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name= "phone"
          label= "Phone number"
          placeholder= "+82 10-5087-XXXX"  
        />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
        <CustonFormField
          fieldType={FormFieldType.DATE_PICKER}
          control={form.control}
          name= "birthDate"
          label= "Date of Birth"
        />

        <CustonFormField
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name= "gender"
          label= "Gender"
          renderSkeleton={(field) =>(
            <FormControl>
                
            </FormControl>

          )}
        />
        </div>


        <div className="flex flex-col gap-6 xl:flex-row">

        </div>


        <div className="flex flex-col gap-6 xl:flex-row">

        </div>


        <div className="flex flex-col gap-6 xl:flex-row">

        </div>


        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
