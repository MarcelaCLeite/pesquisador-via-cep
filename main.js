import axios from "axios";


class Api {
  static async getAddress(cep){
    const result = new Address ((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data);
    return result
  };
};

class Address {
  constructor({logradouro, bairro, localidade})
  {
    this.logradouro = logradouro,
    this.bairro = bairro,
    this.localidade = localidade
  }
}

Api.getAddress('12030205').then(v => {console.log(v)});