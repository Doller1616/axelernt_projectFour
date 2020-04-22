import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header";
import { BodyComponent } from "./body/body";
import { FooterComponent } from "./footer/footer";

@NgModule({
  declarations: [AppComponent, BodyComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
