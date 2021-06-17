import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../classes/article';
import { baseURL } from '../baseurl';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(baseURL + 'blog');
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(baseURL + 'blog/' + id);
  }

  postArticle(article: FormData): Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/video/upload", article);
  }

  deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(baseURL + 'blog/' + id);
  }

  putArticle(article: FormData , id: number): Observable<Article> {
    return this.http.post<Article>(baseURL + 'blog/' + id , article);
  }
}
