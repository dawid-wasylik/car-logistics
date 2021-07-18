import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    MenubarModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
