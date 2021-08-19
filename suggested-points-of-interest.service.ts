import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { from } from 'rxjs';
import { concatMap, map, mergeMap, tap, toArray } from 'rxjs/operators';

export interface Area {
  id: number;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface List {
  id: string;
  name: string;
  editable: boolean;
  public: boolean;
  collaborative: boolean;
  followers: number;
  venues: number;
  created: number;
  updated: number;
}

export interface Link {
  provider: string;
  url: string;
  id: string;
}

export interface SuggestedPointOfInterest {
  id: string;
  name: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  image?: string;
  facebook_username?: string;
  latitude: number;
  longitude: number;
  verified: number;
  tips: number;
  url?: string;
  likes: number;
  rating: number;
  description?: string;
  updated: number;
  categories: Category[];
  links?: Link[];
  lists: List[];
  similar: SuggestedPointOfInterest[];
  areas: Area[];
}

export interface RecommendedPointsOfInterestApiResponse {
  location: number[];
  categories: string[];
  profile: Record<string, number>;
  effective_profile: Record<string, number>;
  recommendations: string[];
}

export interface PopularPointsOfInterestApiResponse {
  location: number[];
  popular: string[];
}

const headers = new HttpHeaders({
  Authentication: `Token ${environment.promoteApiKey}`,
});

@Injectable({
  providedIn: 'root',
})
export class SuggestedPointsOfInterestService {
  constructor(private http: HttpClient) {}

  getPointOfInterestById(id: string) {
    return this.http
      .get<SuggestedPointOfInterest>(`${environment.promoteApiUrl}/poi/v3`, {
        headers,
        params: {
          id,
        },
      })
      .pipe(
        map((poi) => {
          const image = poi.image ?? environment.mainLogo;

          return {
            ...poi,
            image,
          };
        })
      );
  }

  getPopularPointsOfInterest(location: { lat: number; lng: number }) {
    return this.http
      .get<PopularPointsOfInterestApiResponse>(
        `${environment.promoteApiUrl}/recommendation/popular/v1`,
        {
          headers,
          params: {
            location: `${location.lat},${location.lng}`,
          },
        }
      )
      .pipe(
        concatMap((res) => {
          return from(res.popular).pipe(
            mergeMap((poiId) => {
              return this.getPointOfInterestById(poiId);
            })
          );
        }),
        toArray()
      );
  }

  getRecommendedPointsOfInterest(
    location: { lat: number; lng: number },
    profile?: Record<string, number>,
    filters?: { categories?: string[]; limit?: number }
  ) {
    filters = filters ?? {
      categories: [],
      limit: 50,
    };
    profile = profile ?? {};

    return this.http
      .post<RecommendedPointsOfInterestApiResponse>(
        `${environment.promoteApiUrl}/recommendation/recommend/v2`,
        {
          ...profile,
        },
        {
          headers,
          params: {
            location: `${location.lat},${location.lng}`,
            categories: filters.categories.join(','),
            limit: filters.limit,
          },
        }
      )
      .pipe(
        tap((res) => console.log('recommendation res ', res)),
        concatMap((res) => {
          return from(res.recommendations).pipe(
            mergeMap((poiId) => {
              return this.getPointOfInterestById(poiId);
            })
          );
        }),
        toArray()
      );
  }
}
