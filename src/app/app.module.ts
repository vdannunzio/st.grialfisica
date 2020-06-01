import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarModule } from "@shared/navbar/navbar.module";
import { FooterModule } from "@shared/footer/footer.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
