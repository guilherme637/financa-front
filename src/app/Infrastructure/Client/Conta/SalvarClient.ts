import {ClientAbstract} from "../ClientAbstract";
import {Injectable} from "@angular/core";
import {ContaPostDto} from "../../../Domain/Dto/ContaPostDto";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class SalvarClient extends ClientAbstract
{
    public post(dto: ContaPostDto): Observable<any> {
      return this.client.post(
        this.buildUrl('/v1/conta'),
        dto,
        this.auth()
      );
    }
}
