"use client";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form/dist";
import { FormFieldType } from "./forms/PatientForm";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
}

const CustonFormField = ({ control, fieldType, name }: CustomProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
       <FormItem className="">

       </FormItem>
      )}
    />
  );
};

export default CustonFormField;
