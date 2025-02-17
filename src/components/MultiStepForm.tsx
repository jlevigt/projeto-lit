import { useState } from "react";
import Step1 from "./Step1.tsx";
import Step2 from "./Step2.tsx";
import Step3 from "./Step3.tsx";
import Step4 from "./Step4.tsx";

interface FormData {
  name: string;
  phone_number: string;
  email: string;
  email_confirmation: string;
  cpf: string;
  rg: string;
  estado_civil: string;
  necessidade_especial: boolean;
  escolaridade: string;
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1); // Controle da etapa
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone_number: "",
    email: "",
    email_confirmation: "",
    cpf: "",
    rg: "",
    estado_civil: "",
    escolaridade: "",
    necessidade_especial: false,
  });

  // Função para atualizar os dados do formulário
  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  // Função para avançar e voltar entre etapas
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nome: ${formData.name}\nE-mail: ${formData.email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "80%", height: "80%" }}>
        <p>
          1 Informações da Conta &gt; 2 Informações Pessoais &gt; 3 Estado Civil e Identificação &gt; 4 Perfil
          Socioeconômico
        </p>
        <form onSubmit={handleSubmit}>
          {step === 1 && <Step1 formData={formData} updateFormData={updateFormData} nextStep={nextStep} />}
          {step === 2 && (
            <Step2 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
          )}
          {step === 3 && (
            <Step3 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
          )}
          {step === 4 && <Step4 formData={formData} updateFormData={updateFormData} prevStep={prevStep} />}
        </form>
      </div>
    </div>
  );
}
