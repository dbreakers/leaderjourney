import { Injectable } from '@angular/core';

@Injectable()
export class Stubs {
    version: string = '1.0. 1';
    roles: object = [{"roles":[{"roleid":"481187","roledescription":"Group Scout Leader"},{"roleid":"1180888","roledescription":"Assistant Section Leader - Scouts"},{"roleid":"2037313","roledescription":"District Training Adviser"}],"name":"00122875 Joe Blogs"}]
    allroles: object = [[{"role":"Group Scout Leader","class":"Commissioner","location":"Group X","start":"01 May 2001","end":"","status":"Full","options":"","active":true,"roleid":"481187"},{"role":"Assistant Section Leader - Scouts","class":"Leader","location":"2nd Scout Group","start":"01 June 1992","end":"01 October 2018","status":"Full","options":"","active":true,"roleid":"1180888"},{"role":"District Training Advisor","class":"Advisor","location":"District XX","start":"01 June 1992","end":"","status":"Full","options":"","active":true,"roleid":"2037313"},{"role":"Group Assistant Venture Scout Leader","class":"Leader","location":"Unknown Group","start":"01 June 1985","end":"11 June 1996","status":"Full","options":"","active":false,"roleid":"2037"}]]
}