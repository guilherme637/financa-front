import {Injectable} from "@angular/core";
import {SituacaoClient} from "../../../Infrastructure/Client/Situacao/SituacaoClient";
import {SituacaoResponseInterface} from "./SituacaoResponseInterface";

@Injectable({providedIn: 'root'})

export class SituacaoService {
  private _situacaoClient: SituacaoClient;

  constructor(situacaoClient: SituacaoClient) {
    this._situacaoClient = situacaoClient;
  }

  public getAllSituacoes(): Array<SituacaoResponseInterface> {
    let situacao: Array<SituacaoResponseInterface> = [];

    this._situacaoClient
      .getSituacoes()
      .subscribe(
        data => {
          situacao = data;
        }
      )
    ;

    return situacao;
  }
}
