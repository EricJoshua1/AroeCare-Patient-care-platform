// import { Button } from "@/components/ui/button";
import PatientForm from "@/components/ui/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/aroe-care-logo.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />
        </div>
      </section>
    </div>
  );
}
