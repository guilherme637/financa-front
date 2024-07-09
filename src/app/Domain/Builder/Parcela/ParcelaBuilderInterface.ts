import {Builder} from "../Builder";
import {ParcelaPostDto} from "../../Dto/Parcela/ParcelaPostDto";

export interface ParcelaBuilderInterface extends Builder{
  total(total: number): void;
  pago(pago: number): void;
  build(): ParcelaPostDto;
}
