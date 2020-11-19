import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    private _log(suffix: string, sender: string, msg) {

    }
    public logI(sender: string, msg: any) {
        return this._log('I', sender, msg);
    }
}
