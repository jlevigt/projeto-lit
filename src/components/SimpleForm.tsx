import { useState } from "react";

// 📝 Tipo para os dados do formulário
interface FormData {
  name: string;
  phone_number: string;
  email: string;
  email_confirmation: string;
  cpf: string;
}

// 🏗️ Componente do formulário
export default function SimpleForm() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone_number: "",
    email: "",
    email_confirmation: "",
    cpf: "",
  });

  // Função para atualizar os campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nome: ${formData.name}\nE-mail: ${formData.email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "80%", height: "80%" }}>
        <p>
          1 Informações da Conta &gt; 2 Informações Pessoais &gt; 3 Estado Civil e Identificação &gt; 4 Perfil
          Socioeconômico
        </p>
        <form onSubmit={handleSubmit}>
          <div className={"form-group"}>
            <label>Nome Completo:</label> <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Como prefere ser chamado"
              style={{ width: "90%" }}
              required
            />
          </div>

          <div className={"form-group"}>
            <label>Telefone:</label> <br />
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Digite seu CPF"
              style={{ width: "90%" }}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-40">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
