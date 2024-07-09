import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({providedIn: 'root'})

export abstract class ClientAbstract {
  private _url: string = 'http://financa-service.com.br'
  private _token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXV0aC1zZXJ2aWNlLmNvbS5icjozMDMwIiwiZXhwIjoxNzIwNDgxOTU5LCJhdWQiOiJhcGk6ZmluYW5jYXMiLCJzdWIiOnsiaWQiOjEsInVzZXJuYW1lIjoiZ3VpbGhlcm1lIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJzY29wZSI6IlJPTEVfVVNFUiJ9LCJjbGllbnRfaWQiOiJlMjliZDE4M2Y3ZDVmMTlhM2U3NGFjN2FiYWY4NTUzMjM5MjZjY2IzZjNmYzVlMDIzMzZhZDVlZDU5YWE3NzRmNWYzOTdmMTNhNDk4ZGI0ZDUxZjFjYjRlZDYyYzJkYzQ2ZTBlYmM4MjE2MmQ2NDgwMWFkOGVkYjY4MWQ0NzEwZiIsImlhdCI6MTcyMDQ3ODM1OX0.TOH_NIe51qRodyL1srOeOnqBkMRIf2i9J8iMTYHjMVJkVdtJhQfJTq36r1lwxd9mgVoLUWwGwdckaSf70zGuwTFf32KHle_lwiyDgnTivWgTMy9IqEAry01io9JpvOq4vCFam6Cjqya5qCc1zLidvsgstSE3Yp17jufwdb8tbAFcNXpItuIaZfMZDyShIP80vfhnIyz960rWLCL2ki_uDBZRYWwTBKyHXRwCtuRbjEDmmwsfrKtSO9Oeaw8xCv3kEtjJHahDXWQbnmYJA-hREwcJcHtMWxysvCjclR5jQwBkebrPLHn79XAlnDlGLBRDrjaas-OAtOMIcB4fz74QaCI31VFoc6nJWRiQq7RN79GfvzOxP8-BeBL7IiC8B4jsJ9E2J-dDNsOVC5iTz3exBhQ1nrLgZk5SEjwzJ_EUurQvzOCYYeThf6FVonChTYVduYZLjf7RJXyPjul9YfQv8VdC1q7P9NvaeyF4smhK4JZKN5R3J2eXaNBWpIQSMuxp8xYoh2JMv1Ce0LJR2QQkqNKewv3e3u3yxa-pw_VZdX22-L8yb3kGMyI9t1FulxB-QKQtHcnd9VezEVplz2-bbs5V_M_G0JMOlAMlH4hI0Edme5Ut8Ch-QOgBtLURCD9cSliSSWFxgBeFI9ivrtuEq9UolMwqCtqBhQ-2OxoLu3g'

  constructor(protected client: HttpClient) {
  }

  protected buildUrl(path: string): string {
    return this._url.concat(path);
  }

  protected auth(): object {
    return {
      headers: {
        'Authorization': 'Bearer ' + this._token
      }
    };
  }
}
