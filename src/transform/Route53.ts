import { flatten } from 'lodash';
import { Service } from '../service';
import { IResource, IService, TransformListFunctionType } from '../types';
import { Route53 as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const RecordSetList: TransformListFunctionType = function(
  AWSClient: AWS.Route53
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { HostedZones } = await AWSClient.listHostedZones().promise();
    const recordSetList = await Promise.all(
      HostedZones.map(r =>
        AWSClient.listResourceRecordSets({ HostedZoneId: r.Id }).promise()
      )
    );
    const recordSets = flatten(recordSetList.map(r => r.ResourceRecordSets));
    const resources = recordSets.map((r, i) =>
      service.RecordSet(r.Name, {
        AliasTarget: r.AliasTarget,
        // Comment: r.,
        Failover: r.Failover,
        GeoLocation: r.GeoLocation,
        HealthCheckId: r.HealthCheckId,
        // HostedZoneId: r.,
        HostedZoneName: String,
        Name: r.Name,
        Region: r.Region,
        ResourceRecords: r.ResourceRecords,
        SetIdentifier: r.SetIdentifier,
        TTL: r.TTL,
        Type: r.Type,
        Weight: r.Weight
      })
    );
    resolve(resources);
  });
};

/**
 * @hidden
 */
export const Route53 = {
  RecordSetList
};

/*
AWS::Route53::HealthCheck
AWS::Route53::HostedZone
AWS::Route53::RecordSetGroup
*/
