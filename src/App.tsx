import { Box, Button, Separator, Group } from "@chakra-ui/react";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/ui/steps";

import Step1 from "@/components/steps/Step1";
import Step2 from "@/components/steps/Step2";
import Step3 from "@/components/steps/Step3";
import Step4 from "@/components/steps/Step4";

const steps = [
  { title: "Informações da Conta", component: <Step1 /> },
  { title: "Informações Pessoais", component: <Step2 /> },
  { title: "Estado Civil Identificação", component: <Step3 /> },
  { title: "Perfil Socioeconômico", component: <Step4 /> },
];

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
        w={{ base: "90%", md: "80%", lg: "70%" }}
        h={{ base: "auto", md: "85vh" }}
        shadow="lg"
        borderRadius="lg"
        p={6}
      >
        <StepsRoot defaultStep={0} count={steps.length}>
          {/* Navegação das Etapas */}
          <StepsList>
            {steps.map((step, index) => (
              <StepsItem key={index} index={index} title={step.title} />
            ))}
          </StepsList>

          <Separator />

          {/* Conteúdo de Cada Etapa */}
          {steps.map((step, index) => (
            <StepsContent key={index} index={index}>
              {step.component}
            </StepsContent>
          ))}

          {/* Última Etapa */}
          <StepsCompletedContent>
            <p>Formulário concluído, clique no botão para enviar</p>
            <Button type="submit" bg="green">
              Enviar
            </Button>
          </StepsCompletedContent>

          {/* Botões de Navegação */}
          <Group mt={4}>
            <StepsPrevTrigger asChild>
              <Button variant="outline" size="md" bg="gray.600" color="white">
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
