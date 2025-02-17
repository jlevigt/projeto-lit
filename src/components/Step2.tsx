interface StepProps {
  formData: { rg: string };
  updateFormData: (newData: Partial<{ rg: string }>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

function Step2({ formData, updateFormData, nextStep, prevStep }: StepProps) {
  return (
    <div className={"form-group"}>
      <label>N.°RG:</label>
      <br />
      <input
        type="text"
        name="rg"
        value={formData.rg}
        onChange={(e) => updateFormData({ rg: e.target.value })}
        placeholder="Digite o número do seu RG"
        style={{ width: "30%" }}
        required
      />

      <br />
      <button onClick={prevStep}>Voltar</button>
      <button onClick={nextStep}>Próximo</button>
    </div>
  );
}

export default Step2;
