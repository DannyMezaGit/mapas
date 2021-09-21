import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'fullscreen', component: FullScreenComponent },
      { path: 'zoom-range', component: FullScreenComponent },
      { path: 'marcadores', component: FullScreenComponent },
      { path: 'propiedades', component: FullScreenComponent },
      { path: '**', redirectTo: 'fullscreen' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
