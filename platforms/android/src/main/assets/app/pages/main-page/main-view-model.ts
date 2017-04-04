import {Observable} from 'data/observable';
import {Session} from '../../shared/interfaces'

export class MainViewModel extends Observable{
    private _tempSessions: Array<Session> = new Array<Session>();

    constructor(){
        super();
    }
    get sessions():Array<Session>{
        return this._tempSessions;
    }
    public init(){
        var sessionArray: Array<Session> = [
            {
                id:'1',
                title:'session 1',
                start:'2016-11-11T11:11:11Z',
                end:'2016-11-11T11:11:11Z',
                room:'stuff',
                roomInfo:{
                    roomId:'room1',
                    name:'room 1',
                    url:'',
                    theme:''
                },
                speakers:[],
                description: 'desc 1',
                descriptionShort:'short desc 1',
                calendarEventId:'',
                isBreak:false
            }
        ];
        for(var i = 0; i < sessionArray.length; i++){
            this._tempSessions.push(sessionArray[i]);
        }
    }
}