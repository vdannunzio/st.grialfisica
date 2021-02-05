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
    return this.http.get<{ papers: Paper[] }>(this.url).pipe(
      map((data) => data.papers),
      catchError(() => of([]))
    );
  }
}
