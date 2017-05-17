import { Observable } from 'rxjs';
/***** import all
import Rx from 'rxjs/Rx';
*/

/***** import only what needed
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
*/
let source = Observable.of(1, 2, 3);

source.subscribe(
    (value: any) => { console.log(value) },
    (err: any) => { console.error(err) },
    () => { console.info('Complete!') }
);