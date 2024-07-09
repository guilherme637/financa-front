import {ContaDtoBuilder} from "./ContaDtoBuilder";
import {ParcelaDirector} from "../Parcela/ParcelaDirector";

export class ContaDirector {
  public static builder(data: any): ContaDtoBuilder {
    let build = new ContaDtoBuilder();

    build.nome(data.nome);
    build.categoria(data.categoria);
    build.mesDivida(data.mesDivida);
    build.situacao(data.situacao);
    build.valor(data.valor);

    return build;
  }

  public static builderWithParcela(data: any): ContaDtoBuilder {
    let build = this.builder(data)

    build.parcela(
      ParcelaDirector.builder(data.parcela).build()
    )
    return build;
  }
}
