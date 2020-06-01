import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardPaperComponent } from "./card-paper.component";

@NgModule({
  declarations: [CardPaperComponent],
  imports: [CommonModule],
  exports: [CardPaperComponent],
})
export class CardPaperModule {}
