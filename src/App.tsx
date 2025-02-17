import { Box, Button, Field, Group, Input, Separator, Stack } from "@chakra-ui/react";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/ui/steps";

// Children ?
function Step1() {
  return (
    <Stack gap="4" maxW="sm" css={{ "--field-label-width": "96px" }}>
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

function App() {
  return (
    <Box
      minH="100vh"
      bgGradient="to-b"
      gradientFrom="black"
      gradientTo="#8a2be2"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="4"
    >
      <Box
        bg="white"
        w={{ base: "90%", md: "80%", lg: "60%" }} // Responsivo: 90% da largura em telas pequenas, 80% em médias, 60% em grandes
        h={{ base: "auto", md: "80vh" }} // Altura dinâmica em telas pequenas e 80% da altura em maiores
        shadow="lg"
        borderRadius="lg"
        p={6} // Adiciona padding interno
      >
        <StepsRoot defaultStep={0} count={4}>
          <StepsList>
            <StepsItem index={0} title="Informações da Conta" />
            <StepsItem index={1} title="Informações Pessoais" />
            <StepsItem index={2} title="Estado Civil e Identificação" />
            <StepsItem index={3} title="Perfil Socioeconômico" />
          </StepsList>

          <Separator />

          <StepsContent index={0}>
            <Step1 />
          </StepsContent>
          <StepsContent index={1}>Step 2</StepsContent>
          <StepsContent index={2}>Step 3</StepsContent>
          <StepsContent index={3}>Step 4</StepsContent>
          <StepsCompletedContent>Enviar Formulário</StepsCompletedContent>

          <Group>
            <StepsPrevTrigger asChild>
              <Button variant="outline" size="md" bg="gray" color="white">
                VOLTAR
              </Button>
            </StepsPrevTrigger>
            <StepsNextTrigger asChild>
              <Button variant="outline" size="md" bg="#8a2be2" color="white">
                CONTINUAR
              </Button>
            </StepsNextTrigger>
          </Group>
        </StepsRoot>
      </Box>
    </Box>
  );
}

export default App;
