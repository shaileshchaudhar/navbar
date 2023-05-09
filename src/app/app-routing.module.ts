import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {path:'home',component:DummyComponent},
  {path:'aboutus',component:DummyComponent},
  {path:'project',component:DummyComponent},
  {path:'services',component:DummyComponent},
  {path:'contact',component:DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
