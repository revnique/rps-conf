import {Observable} from 'data/observable';
import {Session} from '../../shared/interfaces';
import {SessionViewModel} from '../session-page/session-view-model';

export class MainViewModel extends Observable{
    private _tempSessions: Array<Session> = new Array<Session>();
    private _allSessions: Array<SessionViewModel> = new Array<SessionViewModel>();

    constructor(){
        super();
    }
    get sessions():Array<SessionViewModel>{
        return this._allSessions;
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
            },
            {
                id:'2',
                title:'session 2',
                start:'2016-11-11T11:11:11Z',
                end:'2016-11-11T11:11:11Z',
                room:'stuff 2',
                roomInfo:{
                    roomId:'room2',
                    name:'room 2',
                    url:'',
                    theme:''
                },
                speakers:[],
                description: 'desc 2',
                descriptionShort:'short desc 2',
                calendarEventId:'',
                isBreak:false
            }
        ];
        for(var i = 0; i < sessionArray.length; i++){
            //this._tempSessions.push(sessionArray[i]);
            
            this._allSessions.push(new SessionViewModel(sessionArray[i]));
        }
    }
}