/**
 * Everything in this file is generated by the 'tools/generate-operator-patches.ts' script.
 * Any manual edits to this file will be lost next time the script is run.
 **/
import {Observable} from '../../Observable';
import {withLatestFrom} from '../../operator/withLatestFrom';

Observable.prototype.withLatestFrom = withLatestFrom;

export var _void: void;