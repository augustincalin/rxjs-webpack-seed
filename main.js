"use strict";
var rxjs_1 = require("rxjs");
/***** import all
import Rx from 'rxjs/Rx';
*/
/***** import only what needed
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
*/
var source = rxjs_1.Observable.of(1, 2, 3);
source.subscribe(function (value) { console.log(value); }, function (err) { console.error(err); }, function () { console.info('Complete!'); });
//# sourceMappingURL=main.js.map