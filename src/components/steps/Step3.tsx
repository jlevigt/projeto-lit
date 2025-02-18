import { Field, HStack, Input, NativeSelect, Stack } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";

export default function Step3() {
  return (
    <Stack>
      <HStack>
        <Field.Root>
          <Field.Label>Grupo Étnico</Field.Label>
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
          <Field.Label>Raça</Field.Label>
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
          <Field.Label>Estado Civil</Field.Label>
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
          <Field.Label>Sexo</Field.Label>
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

      <Field.Root>
        <Field.Label>Orientação Sexual</Field.Label>
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
        <Field.Label>Necessidade Especial</Field.Label>
        <Switch />
      </Field.Root>
    </Stack>
  );
}
