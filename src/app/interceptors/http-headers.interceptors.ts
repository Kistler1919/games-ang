import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        "x-rapidapi-key": "e7178227e2mshb7eacfc8ff538d6p119b63jsnee4273bdf6b1",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      },
      setParams: {
        key: "d51525a6c3ca4d32b507b8608fe6bd2f"
      }
    });
    return next.handle(req);
  }
}