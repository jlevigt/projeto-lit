interface StepProps {
  formData: { escolaridade: string };
  updateFormData: (newData: Partial<{ escolaridade: string }>) => void;
  prevStep: () => void;
}

function Step4({ formData, updateFormData, prevStep }: StepProps) {
  return (
    <div className={"form-group"}>
      <label>Escolaridade:</label>
      <br />
      <input
        type="text"
        name="escolaridade"
        value={formData.escolaridade}
        onChange={(e) => updateFormData({ escolaridade: e.target.value })}
        placeholder="Selecione sua escolaridade"
        style={{ width: "30%" }}
        required
      />
      <br />
      <button onClick={prevStep}>Voltar</button>
      <button type="submit">Enviar</button>
    </div>
  );
}

export default Step4;
