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



const validations = {
  cep(value) {
    if (value.replace(/[-]/g, "").length !== 8) {
      return {
        error: "cep invalido",
      };
    }
  },
  cpf(value) {
    if (value.replace(/[.-]/g, "").length !== 11) {
      return {
        error: "cpf invalido",
      };
    }
  },
  celular(value) {
    if (value.replace(/[\(\s-\)]/g, "").length !== 11) {
      return {
        error: "error celular",
      };
    }
  },
  telefone(value) {
    if (
      value.replace(/[-]/g, "").length !== 8 &&
      value.replace(/[-]/g, "").length !== 9
    ) {
      return {
        error: "error celular",
      };
    }
  },
  dataNas(value) {
    if (
      value.replace(/[\/]/g, "").length !== 6 &&
      value.replace(/[\/]/g, "").length !== 8
    ) {
      return {
        error: "error dataNas",
      };
    }
  },
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

export { fields, maskInputs, validations };
