import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IMovie} from "../../model/movie";
import {catchError} from "rxjs/operators";
import {DataServiceError} from "./data-error.service";


@Injectable()
export class IMovieDataService {
    apiUrlBase = environment.apiUrlBase;
    constructor(private http: HttpClient) {
    }

    getMovies(): Observable<IMovie[]> {
        return this.http.get<IMovie[]>(`${this.apiUrlBase}/movie`)
            .pipe(
                catchError(this.handleError())
            )
    }

    addMovie(movie: IMovie): Observable<IMovie> {
        return this.http.post<IMovie>(`${this.apiUrlBase}/movie`, movie)
            .pipe(
                catchError(this.handleError(movie))
            )
    }


    private handleError<T>(requestData?: T) {
        return (res: HttpErrorResponse) => {
            const error = new DataServiceError(res.error, requestData);
            console.error(error);
            // return new ErrorObservable(error);
            return throwError(error);
        };
    }
}
