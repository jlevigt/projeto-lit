interface StepProps {
  formData: { estado_civil: string; necessidade_especial: boolean };
  updateFormData: (newData: Partial<{ estado_civil: string; necessidade_especial: boolean }>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

function Step3({ formData, updateFormData, nextStep, prevStep }: StepProps) {
  return (
    <div className={"form-group"}>
      <label>Estado civil:</label>
      <br />
      <input
        type="text"
        name="estado_civil"
        value={formData.estado_civil}
        onChange={(e) => updateFormData({ estado_civil: e.target.value })}
        placeholder="Selecione seu estado civil"
        style={{ width: "30%" }}
        required
      />
      <div className={"form-group"}>
        <label>Necessidade especial:</label>
        <br />
        <input
          type="checkbox"
          name="necessidade_especial"
          checked={formData.necessidade_especial}
          onChange={(e) => updateFormData({ necessidade_especial: e.target.checked })}
          style={{ width: "30%" }}
          required
        />
      </div>
      <br />
      <button onClick={prevStep}>Voltar</button>
      <button onClick={nextStep}>Próximo</button>
    </div>
  );
}

export default Step3;
