interface StepProps {
  formData: { name: string; phone_number: string; email: string; email_confirmation: string; cpf: string };
  updateFormData: (
    newData: Partial<{ name: string; phone_number: string; email: string; email_confirmation: string; cpf: string }>
  ) => void;
  nextStep: () => void;
}

function Step1({ formData, updateFormData, nextStep }: StepProps) {
  return (
    <div className={"form-group"}>
      <label>Nome Completo:</label>
      <br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => updateFormData({ name: e.target.value })}
        placeholder="Como prefere ser chamado"
        style={{ width: "90%" }}
        required
      />

      <div className={"form-group"}>
        <label>Telefone:</label> <br />
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={(e) => updateFormData({ phone_number: e.target.value })}
          placeholder="Digite seu número de WhatsApp"
          style={{ width: "90%" }}
          required
        />
      </div>

      <div className={"form-group"}>
        <label>E-mail:</label> <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="Digite seu e-mail"
          style={{ width: "90%" }}
          required
        />
      </div>

      <div className={"form-group"}>
        <label>Confirme seu E-mail:</label> <br />
        <input
          type="email"
          name="email_confirmation"
          value={formData.email_confirmation}
          onChange={(e) => updateFormData({ email_confirmation: e.target.value })}
          placeholder="Confirme seu E-mail"
          style={{ width: "90%" }}
          required
        />
      </div>

      <div className={"form-group"}>
        <label>CPF:</label> <br />
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={(e) => updateFormData({ cpf: e.target.value })}
          placeholder="Digite seu CPF"
          style={{ width: "90%" }}
          required
        />
      </div>

      <br />
      <button onClick={nextStep}>Próximo</button>
    </div>
  );
}

export default Step1;
