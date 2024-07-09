export class ContaPostDto {
  public nome: null|string;
  public valor: null|number;
  public mes_divida: null|string;
  public categoria: null|number;
  public situacao: null|number;
  public parcela: null|object;

  constructor() {
    this.nome = null;
    this.valor = null;
    this.categoria = null;
    this.mes_divida = null;
    this.situacao = null;
    this.parcela = null;
  }
}
