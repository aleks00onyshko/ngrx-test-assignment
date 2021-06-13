import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPhoto, IPost } from '../components/main-page/models';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  private photosUrl = `${environment.backendUrl}/photos`;
  private postsUrl = `${environment.backendUrl}/posts`;

  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.photosUrl);
  }

  public getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postsUrl);
  }

  public removePost(id: string): Observable<void> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  public addPost(post: IPost) {
    return this.http.post<IPost>(this.postsUrl, post);
  }

  public updatePost(
    id: string,
    title: string,
    body: string
  ): Observable<IPost> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.put(url, { title, body }) as Observable<IPost>;
  }
}
