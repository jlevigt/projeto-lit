import { Field, HStack, Input, NativeSelect, Stack } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";

export default function Step4() {
  return (
    <Stack>
      <HStack>
        <Field.Root>
          <Field.Label>Escolaridade</Field.Label>
          <NativeSelect.Root size="sm" width="240px">
            <NativeSelect.Field placeholder="Selecione">
              <option value="nativo">Nativo</option>
              <option value="naturalizado">Naturalizado</option>
              <option value="estrangeiro">Estrangeiro</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Tipo de Escola</Field.Label>
          <NativeSelect.Root size="sm" width="240px">
            <NativeSelect.Field placeholder="Selecione">
              <option value="nativo">Nativo</option>
              <option value="naturalizado">Naturalizado</option>
              <option value="estrangeiro">Estrangeiro</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
      </HStack>

      <HStack>
        <Field.Root>
          <Field.Label>Profissão</Field.Label>
          <NativeSelect.Root size="sm" width="240px">
            <NativeSelect.Field placeholder="Selecione">
              <option value="nativo">Nativo</option>
              <option value="naturalizado">Naturalizado</option>
              <option value="estrangeiro">Estrangeiro</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Renda Familiar</Field.Label>
          <Input placeholder="Digite" />
        </Field.Root>
      </HStack>

      <HStack>
        <Field.Root>
          <Field.Label>Situação do Trabalhador</Field.Label>
          <NativeSelect.Root size="sm" width="240px">
            <NativeSelect.Field placeholder="Selecione">
              <option value="nativo">Nativo</option>
              <option value="naturalizado">Naturalizado</option>
              <option value="estrangeiro">Estrangeiro</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Nº de Membros na Família</Field.Label>
          <Input placeholder="Digite" />
        </Field.Root>
      </HStack>

      <Field.Root>
        <Field.Label>Recebe Algum Benefício do Governo ?</Field.Label>
        <Switch />
      </Field.Root>
    </Stack>
  );
}
