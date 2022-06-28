const maskInputs = {
  cpf(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})(\d)/, "$1");
  },
  celular(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d)/, "$1");
  },
  cep(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})(\d)/, "$1");
  },
  telefone(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})(\d)/, "$1");
  },
  dataNas(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  },
};

const matchesRgx = {
  cep: /^\d{5}-\d{3}$/g,
  dataNas: /^(\d{2}\/){2}\d{2,4}$/g,
  telefone: /^\d{4,5}-\d{4}$/g,
  celular: /^\(\d{2}\)\s\d{5}-\d{4}$/g,
  cpf: /^(\d{3}\.){2}\d{3}-\d{2}$/g,
};

const fieldUser = {
  cep: "cep",
  telefone: "telefone",
  celular: "celular",
  dataNas: "dataNas",
  cpf: "cpf",
};

const errorField = {
  cep: "cep invalido",
  telefone: "telefone invalido",
  celular: "celular invalido",
  dataNas: "data invalida",
  cpf: "cpf invalido",
};

const fields = [
  "nome",
  "dataNas",
  "cpf",
  "celular",
  "telefone",
  "cep",
  "complemente",
  "logradouro",
  "bairro",
  "estado",
  "numero",
  "cidade",
];

export { fields, fieldUser, errorField, maskInputs, matchesRgx };
