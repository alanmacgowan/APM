import { Collectible } from "./collectible.model";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CollectibleService{
    private _collectibleUrl = 'api/collectibles/collectibles.json';

    constructor(private _http: Http){
    }   

    getCollectible(): Observable<Collectible[]>{
        return this._http.get(this._collectibleUrl)
                         .map((response: Response) => <Collectible[]>response.json())
                         .catch(this.handleError);
    }

    getCollectibleDetail(id: number): Observable<Collectible>{
        return this._http.get(this._collectibleUrl)
                         .map((response: Response) => <Collectible>response.json()[0])
                         .catch(this.handleError);
    }
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
    
