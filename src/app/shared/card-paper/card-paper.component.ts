import { Component, OnInit, Input } from "@angular/core";
import { Paper } from "@interfaces/paper";

@Component({
  selector: "app-card-paper",
  templateUrl: "./card-paper.component.html",
  styleUrls: ["./card-paper.component.scss"],
})
export class CardPaperComponent implements OnInit {
  @Input() data: Paper;

  ngOnInit() {
    this.data.desc = this.truncStr(this.data.desc, 180);
  }

  private truncStr(str, maxLenght: number) {
    if (str.length <= maxLenght) return str;

    return `${str.slice(0, maxLenght)}...`;
  }
}
