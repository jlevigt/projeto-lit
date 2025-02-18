import { Field, Input, Stack } from "@chakra-ui/react";

interface StepProps {
  formRef: React.RefObject<any>;
}

export default function Step1({ formRef }: StepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formRef.current[e.target.name] = e.target.value;
  };

  return (
    <Stack gap="4">
      <Field.Root>
        <Field.Label>Nome Completo</Field.Label>
        <Input placeholder="Digite seu nome" name="nome" onBlur={handleChange} />
      </Field.Root>

      <Field.Root>
        <Field.Label>Telefone</Field.Label>
        <Input placeholder="Digite seu número de WhatsApp" name="telefone" onBlur={handleChange} />
      </Field.Root>

      <Field.Root>
        <Field.Label>E-mail</Field.Label>
        <Input placeholder="Digite seu e-mail" name="email" onBlur={handleChange} />
      </Field.Root>

      <Field.Root>
        <Field.Label>Confirme seu E-mail</Field.Label>
        <Input placeholder="Digite seu e-mail novamente" />
      </Field.Root>

      <Field.Root>
        <Field.Label>CPF</Field.Label>
        <Input placeholder="Digite seu CPF" name="cpf" onBlur={handleChange} />
      </Field.Root>
    </Stack>
  );
}
