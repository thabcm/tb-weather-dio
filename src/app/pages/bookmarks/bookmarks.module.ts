import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './state/bookmarks.reducer';



@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
  ]
})
export class BookmarksModule { }
