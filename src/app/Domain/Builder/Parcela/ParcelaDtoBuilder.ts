import {ParcelaBuilderInterface} from "./ParcelaBuilderInterface";
import {ParcelaPostDto} from "../../Dto/Parcela/ParcelaPostDto";

export class ParcelaDtoBuilder implements ParcelaBuilderInterface {
  private _dto!: ParcelaPostDto;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this._dto = new ParcelaPostDto();
  }
  public pago(pago:number): void {
    this._dto.pago = pago;
  }

  public total(total:number): void {
    this._dto.total = total;
  }

  public build(): ParcelaPostDto {
    let parcela = this._dto;
    this.reset();

    return parcela;
  }
}
