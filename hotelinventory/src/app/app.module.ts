import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { APP_CONFIG, APP_SERVICE_CONFIG } from "./AppConfig/appconfig.service";
import { HeaderComponent } from "./header/header.component";
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [AppComponent, RoomsComponent, ContainerComponent, EmployeeComponent, HeaderComponent, RoomsListComponent],
    imports: [BrowserModule, CommonModule, HttpClientModule],
    providers: [
        {
            provide: APP_SERVICE_CONFIG,
            useValue: APP_CONFIG
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}