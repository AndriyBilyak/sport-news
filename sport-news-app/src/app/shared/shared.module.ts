import { NgModule } from '@angular/core';

import { MostPopularCommentsComponent } from './most-popular-comments/most-popular-comments.component';
import { ReaderPoolComponent } from './reader-pool/reader-pool.component';

@NgModule({
  declarations: [MostPopularCommentsComponent, ReaderPoolComponent],
  imports: [],
  exports: [MostPopularCommentsComponent, ReaderPoolComponent],
})
export class SharedModule {}
