'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../index');

const vpcCidr = '172.50.0.0/16';
const subnetCidrs = ['172.50.0.0/24', '172.50.1.0/24'];

let t = new wk.Template();

let vpc = new wk.EC2.VPC('vpc');
vpc.CidrBlock = vpcCidr;
vpc.Tags.add({ Key: 'Name', Value: 'Private' });
t.add(vpc);

let routeTable = new wk.EC2.RouteTable('routeTable');
routeTable.VpcId.ref(vpc);
t.add(routeTable);

let localRoute = new wk.EC2.Route('localRoute');
localRoute.DestinationCidrBlock = '172.50.0.0/16';
localRoute.RouteTableId.ref(routeTable);
t.add(localRoute);

subnetCidrs.forEach((cidr, index) => {
  let subnet = new wk.EC2.Subnet('Subnet' + index);
  subnet.CidrBlock = cidr;
  subnet.VpcId.ref(vpc);
  subnet.MapPublicIpOnLaunch = false;
  subnet.Tags.add('Name', 'Private' + index);
  t.add(subnet);
});

console.log(t.toJson().Template);
