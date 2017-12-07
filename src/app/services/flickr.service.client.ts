import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FlickrService {

  key = '22562b5b4be96360b0b5a69a4d838566';
  secret = 'b329929d7a325834';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }
}
