/**
 * Created by arming on 7/5/16.
 */
'use strict';

const wk = require('../index');

let t = new wk.Template();

let recordSet = new wk.Route53.RecordSet('RecordSet');
recordSet.Name = 'localdomain';
recordSet.Type = 'A';

t.add(recordSet);

console.log(t.toJson().Template);
