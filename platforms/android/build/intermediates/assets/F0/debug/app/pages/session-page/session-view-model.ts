import {Observable} from 'data/observable';
import {Session, Speaker, RoomInfo } from '../../shared/interfaces';

export class SessionViewModel extends Observable{
    private _session: Session;
    private _favorite: boolean;

    constructor(source?: Session){
        super();

        if(source){
            this._session = source;
        }
    }

    get id(): string{
        return this._session.id;
    }
    get title(): string{
        return this._session.title;
    }
    get roomInfo(): RoomInfo{
        return this._session.roomInfo;
    }
    get room(): string{
        if(this._session.room){
            return this._session.room;
        }
        if(this._session.roomInfo){
            return this._session.roomInfo.name;
        }
        return null;
    }
    get start(): string{
        return this._session.start;
    }
    get end(): string{
        return this._session.end;
    }



    get speakers(): Array<Speaker>{
        return this._session.speakers;
    }
    get isBreak(): boolean{
        return this._session.isBreak;
    }
    get description(): string{
        return this._session.description;
    }
    get descriptionShort(): string{
        if(this.description.length > 160){
            return this.description.substr(0,157) + '...';
        }else{
            return this.description;
        }
    }
    get calandarEventId(): string{
        return this._session.calendarEventId;
    }
    get favorite(): boolean{
        return this._favorite;
    }
    set favorite(value:boolean){
        if(this._favorite !== value && !this._session.isBreak){
            this._favorite = value;
            this.notify({object:this,eventName:Observable.propertyChangeEvent, propertyName: 'favorite', value:this._favorite})
        }
    }
    public toggleFavourite(){
        this.favorite = !this.favorite;
    }
    
}