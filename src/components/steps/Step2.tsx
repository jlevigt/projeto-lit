import { Field, HStack, Input, NativeSelect, Separator, Stack } from "@chakra-ui/react";

export default function Step2() {
  return (
    <Stack>
      <HStack>
        <Field.Root>
          <Field.Label>Estado</Field.Label>
          <NativeSelect.Root size="sm" width="240px">
            <NativeSelect.Field placeholder="Selecione">
              <option value="ceara">Ceará</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>

        <Field.Root>
          <Field.Label>Município</Field.Label>
          <NativeSelect.Root size="sm" width="240px">
            <NativeSelect.Field placeholder="Selecione">
              <option value="fortaleza">Fortaleza</option>
              <option value="eusebio">Eusébio</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
      </HStack>

      <HStack>
        <Field.Root>
          <Field.Label>Nome Completo do Pai</Field.Label>
          <Input placeholder="Digite" width="360px" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Nome Completo da Mãe</Field.Label>
          <Input placeholder="Digite" width="360px" />
        </Field.Root>
      </HStack>

      <HStack>
        <Field.Root>
          <Field.Label>Data de Nascimento</Field.Label>
          <Input type="date" size="sm" width="240px" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Nacionalidade</Field.Label>
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

      <Separator size="md" />

      <HStack>
        <Field.Root>
          <Field.Label>Nº de RG</Field.Label>
          <Input placeholder="Digite" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Órgão Emissor</Field.Label>
          <Input placeholder="Digite" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Data de Emissão do RG</Field.Label>
          <Input type="date" size="sm" width="240px" />
        </Field.Root>
      </HStack>

      <HStack>
        <Field.Root>
          <Field.Label>Endereço</Field.Label>
          <Input placeholder="Digite" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Número</Field.Label>
          <Input placeholder="Digite" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Complemento</Field.Label>
          <Input placeholder="Digite" />
        </Field.Root>
      </HStack>

      <HStack>
        <Field.Root>
          <Field.Label>Bairro</Field.Label>
          <Input placeholder="Digite" width="300px" />
        </Field.Root>

        <Field.Root>
          <Field.Label>CEP</Field.Label>
          <Input placeholder="Digite" width="300px" />
        </Field.Root>
      </HStack>
    </Stack>
  );
}
