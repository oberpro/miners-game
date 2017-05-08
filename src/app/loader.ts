import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class Loader {

    constructor(private http: Http) {

    }
    loadJsonFile(name: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let data: any;
            this.http.get('src/app/data/' + name + '.json')
                .subscribe((res) => { resolve(res.json()) }, (error) => { reject(error) });
        });
    }

    getUnits(): Promise<any> {
        return this.loadJsonFile("units");
    }
}