import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CardPaperModule } from "@shared/card-paper/card-paper.module";
import { PaperService } from "src/app/services/papers.service";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CardPaperModule],
  providers: [PaperService],
})
export class HomeModule {}
