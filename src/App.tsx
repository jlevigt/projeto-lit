import { useRef } from "react";
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

function App() {
  const formRef = useRef({});

  const handleSubmit = () => {
    console.log("Enviando os dados:", formRef.current);

    fetch("https://", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formRef.current),
    })
      .then((res) => res.json())
      .then((data) => console.log("Resposta da API:", data))
      .catch((err) => console.error("Erro ao enviar:", err));
  };

  const steps = [
    { title: "Informações da Conta", component: <Step1 formRef={formRef} /> },
    { title: "Informações Pessoais", component: <Step2 /> },
    { title: "Estado Civil Identificação", component: <Step3 formRef={formRef} /> },
    { title: "Perfil Socioeconômico", component: <Step4 /> },
  ];

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

          <form>
            {/* Conteúdo de Cada Etapa */}
            {steps.map((step, index) => (
              <StepsContent key={index} index={index}>
                {step.component}
              </StepsContent>
            ))}

            {/* Última Etapa */}
            <StepsCompletedContent>
              <p>Formulário concluído, clique no botão para enviar</p>
              <Button bg="green" onClick={handleSubmit}>
                Enviar
              </Button>
            </StepsCompletedContent>
          </form>

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
