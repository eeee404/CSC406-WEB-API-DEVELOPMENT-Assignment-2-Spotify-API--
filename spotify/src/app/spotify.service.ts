import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBOlG7OI_DinzMB0bcnR2gBvZuqydzovgLfhNyKxuLHYBSkeAYE1ypDtHGmdcP-tvvMAlOqCQ-3XiFjevmoztIL78W3ouUkf30nFvVfMQgLqqyAbH8JVrzUtBZv9k-B3QVsjrGGaQJg7KChuXyR3gdAqg0mlP_IgYpoTynDyb-IQIZ6LhcpDITL7i1ABE9Z0Hy43wVkAhnj594BopABInoMQySnOZ06WA6xZ3BMC-4wKsv5L73bBa2nGmQk1-O6foR7dmmf"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }




  searchArtistAlbum(id: string) {
    const query = `artists/${id}/albums`;
    return this.getHeader(query);
  }

  searchArtist(id: string) {
    const query = `artists/${id}`;
    return this.getHeader(query);
  }

  searchAlbumById(id: string) {
    const query = `albums/${id}`;
    return this.getHeader(query);
  }

  searchAlbumByIdTracks(id: string) {
    const query = `albums/${id}/tracks`;
    return this.getHeader(query);
  }
}
