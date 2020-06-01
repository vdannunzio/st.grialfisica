import { Component, OnInit } from "@angular/core";
import { Paper } from "@interfaces/paper";
import { papers } from "./data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public papers: Array<Paper> = papers;

  constructor() {}

  ngOnInit(): void {}
}
