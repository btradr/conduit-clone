import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { FeedModule } from '../shared/feed/feed.module';

// Components
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';

@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    FeedModule
  ]
})
export class GlobalFeedModule { }
