import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    TranslateModule,
    AuthModule,
    I18nModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule {}
