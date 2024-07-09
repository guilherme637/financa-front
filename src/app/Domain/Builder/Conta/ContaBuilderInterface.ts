import {Builder} from "../Builder";
import {ContaPostDto} from "../../Dto/ContaPostDto";
import {ParcelaPostDto} from "../../Dto/Parcela/ParcelaPostDto";

export interface ContaBuilderInterface extends Builder {
  nome(nome: string): void
  valor(valor: number): void
  mesDivida(mesDivida: string): void
  categoria(categoria: number): void
  situacao(situacao: number): void
  parcela(dto: ParcelaPostDto): void
  build(): ContaPostDto
}
