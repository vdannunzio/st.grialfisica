import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Paper } from "@interfaces/paper";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class PaperService {
  constructor(private http: HttpClient) {}

  private url = "/assets/papers/papers.json";

  getAll(): Observable<Paper[]> {
    const timeStamp = new Date().getTime();
    const url = `${this.url}?t=${timeStamp}`;

    return this.http.get<{ papers: Paper[] }>(url).pipe(
      map((data) => data.papers),
      catchError(() => of([]))
    );
  }
}
