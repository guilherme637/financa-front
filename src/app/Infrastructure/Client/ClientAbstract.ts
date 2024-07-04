import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})

export abstract class ClientAbstract {
  private url: string = 'http://financa-service.com.br'
  constructor(protected client: HttpClient) {
  }

  protected buildUrl(path: string): string {
    return this.url.concat(path);
  }
}
