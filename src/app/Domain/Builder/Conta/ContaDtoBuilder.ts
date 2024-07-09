import {ContaBuilderInterface} from "./ContaBuilderInterface";
import {ContaPostDto} from "../../Dto/ContaPostDto";
import {ParcelaPostDto} from "../../Dto/Parcela/ParcelaPostDto";

export class ContaDtoBuilder implements ContaBuilderInterface {
  private _dto!: ContaPostDto;

  constructor() {
    this.reset()
  }

  public reset(): void {
    this._dto = new ContaPostDto();
  }

  public categoria(categoria: number): void {
    this._dto.categoria = categoria;
  }

  public mesDivida(mesDivida: string): void {
    this._dto.mes_divida = mesDivida;
  }

  public nome(nome: string): void {
    this._dto.nome = nome;
  }

  public parcela(dto: ParcelaPostDto): void {
    this._dto.parcela = dto;
  }

  public situacao(situacao: number): void {
    this._dto.situacao = situacao
  }

  public valor(valor: number): void {
    this._dto.valor = valor;
  }

  build(): ContaPostDto {
    let conta = this._dto;
    this.reset();

    return conta;
  }
}
