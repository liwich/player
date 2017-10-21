import { Component } from '@angular/core';

import { SongsListPage } from '../songs-list/songs-list';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SongsListPage;
  tab2Root = FavoritesPage;

  constructor() {

  }
}
