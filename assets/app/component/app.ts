import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CrisisListComponent}   from './crisis-list';
import {HeroListComponent}     from './hero-list';

@Component({
    selector: 'my-app',
    templateUrl: 'app/component/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/crisis-center',
        name: 'CrisisCenter',
        component: CrisisListComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroListComponent
    }
])
export class AppComponent {
}