import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { UserItemComponent } from './user-item/user-item.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EggHeadExerciesComponent } from './egg-head-exercies/egg-head-exercies.component';
import {MailService} from "./mail.service";
import { CustomEventComponent } from './custom-event/custom-event.component';
import { DirectiveComponent } from './directive/directive.component';
import { ViniDirective } from './vini.directive';
import { ServiceComponent1Component } from './service-component1/service-component1.component';
import { LoggingService } from "./logging.service"

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    OtherComponent,
    AnotherComponent,
    UserItemComponent,
    PropertyBindingComponent,
    EggHeadExerciesComponent,
    CustomEventComponent,
    DirectiveComponent,
    ViniDirective,
    ServiceComponent1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MailService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
