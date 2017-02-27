'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../index');

let t = new wk.Template();

let recordSet = new wk.Route53.RecordSet('RecordSet');
recordSet.Name = 'localdomain';
recordSet.Type = 'A';

t.add(recordSet);

console.log(t.toJson().Template);
