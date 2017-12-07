/**
 * Created by sesha on 7/26/17.
 */

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {YelpApiTestComponent} from './Yelp-API-test/yelp-api-test/yelp-api-test.component';
import {AuthGuard} from './services/auth-guard.service';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';

const APP_ROUTES: Routes = [
  {path: '', component : HomeComponent},
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/website/new', component: WebsiteNewComponent},
  {path: 'user/website/:wid', component: WebsiteEditComponent},
  {path: 'user/website', component: WebsiteListComponent},
  {path: 'user/website/:wid/page/new', component: PageNewComponent},
  {path: 'user/website/:wid/page/:pid', component: PageEditComponent},
  {path: 'user/website/:wid/page', component: PageListComponent},
  {path: 'user/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
  {path: 'user/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
  {path: 'user/website/:wid/page/:pid/widget', component: WidgetListComponent},
  {path: 'widget-header', component: WidgetHeaderComponent},
  {path: 'widget-image', component: WidgetImageComponent},
  {path: 'widget-youtube', component: WidgetYoutubeComponent},
  {path: 'yelp', component: YelpApiTestComponent},
  {path: 'user/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
