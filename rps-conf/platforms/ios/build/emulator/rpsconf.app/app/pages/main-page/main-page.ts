import {EventData, Observable} from "data/observable";
import {Page} from 'ui/page';
import {GestureEventData} from 'ui/gestures';

import{MainViewModel} from './main-view-model';
import{SessionViewModel} from '../session-page/session-view-model';

var page:Page;
var vm = new MainViewModel();

export function pageLoaded(args: EventData){
    page = <Page>args.object;
    page.bindingContext = vm;
    vm.init();
};

export function toggleFavorite(args: GestureEventData){
    var session = <SessionViewModel> args.view.bindingContext;
    session.toggleFavorite();
}
