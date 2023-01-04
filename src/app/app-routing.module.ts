import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {VoteComponent} from "./vote/vote.component";
import {ResultComponent} from "./result/result.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'vote/:address', component: VoteComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
