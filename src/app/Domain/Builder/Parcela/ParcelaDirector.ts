import {ParcelaDtoBuilder} from "./ParcelaDtoBuilder";

export class ParcelaDirector {
  public static builder(data: any): ParcelaDtoBuilder {
    let builder = new ParcelaDtoBuilder()

    builder.total(data.total);
    builder.pago(data.pago);

    return builder;
  }
}
