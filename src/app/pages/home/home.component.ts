import { AfterViewInit, Component } from "@angular/core";
import { Paper } from "@interfaces/paper";
import { PaperService } from "src/app/services/papers.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit {
  papers: Paper[];

  constructor(private readonly paperService: PaperService) {}

  ngAfterViewInit(): void {
    this.paperService.getAll().subscribe((papers: Paper[]) => {
      this.papers = papers;
    });
  }
}
