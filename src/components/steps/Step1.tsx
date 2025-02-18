import { Field, Input, Stack } from "@chakra-ui/react";

export default function Step1() {
  return (
    <Stack gap="4">
      <Field.Root>
        <Field.Label>Nome Completo</Field.Label>
        <Input placeholder="Digite seu nome" />
      </Field.Root>

      <Field.Root>
        <Field.Label>Telefone</Field.Label>
        <Input placeholder="Digite seu número de WhatsApp" />
      </Field.Root>

      <Field.Root>
        <Field.Label>E-mail</Field.Label>
        <Input placeholder="Digite seu e-mail" />
      </Field.Root>

      <Field.Root>
        <Field.Label>Confirme seu E-mail</Field.Label>
        <Input placeholder="Digite seu e-mail novamente" />
      </Field.Root>

      <Field.Root>
        <Field.Label>CPF</Field.Label>
        <Input placeholder="Digite seu CPF" />
      </Field.Root>
    </Stack>
  );
}
