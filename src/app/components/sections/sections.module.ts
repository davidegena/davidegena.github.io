import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
