import { NgModule } from "@angular/core";
import { RootComponent } from "./components/root/root.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatLegacyButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule } from "@angular/material/legacy-card";
import { MatLegacyListModule } from "@angular/material/legacy-list";
import { MatIconModule } from "@angular/material/icon";
import { DialogComponent } from "./components/dialog/dialog.component";
import { MatLegacyDialogModule } from "@angular/material/legacy-dialog";
import { MatLegacyFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyInputModule } from "@angular/material/legacy-input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  bootstrap: [RootComponent],
  declarations: [DialogComponent, RootComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatLegacyButtonModule,
    MatLegacyCardModule,
    MatLegacyListModule,
    MatIconModule,
    MatLegacyDialogModule,
    MatLegacyFormFieldModule,
    MatLegacyInputModule,
  ],
})
export class MainModule {}
