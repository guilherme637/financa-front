import {Observable} from "rxjs";
import {SituacaoResponseInterface} from "../../../Domain/Service/Situacao/SituacaoResponseInterface";
import {ClientAbstract} from "../ClientAbstract";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class SituacaoClient extends ClientAbstract {

  public getSituacoes(): Observable<Array<SituacaoResponseInterface>> {
    return this.client.get<Array<SituacaoResponseInterface>>(this.buildUrl('/v1/situacao'));
  }
}
