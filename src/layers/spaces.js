import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import accessibleIcon from '../icons/accessible-icon.svg';
import chargingStationIcon from '../icons/charging-station.svg';
import circleDollarToSlotIcon from '../icons/circle-dollar-to-slot.svg';
import circleXmarkIcon from '../icons/circle-xmark.svg';
import massachusettsIcon from '../icons/massachusetts.svg';
import motorcycleIcon from '../icons/motorcycle.svg';
import peopleCarryBoxIcon from '../icons/people-carry-box.svg';
import peopleGroupIcon from '../icons/people-group.svg';
import personWalkingLuggageIcon from '../icons/person-walking-luggage.svg';
import squareParkingIcon from '../icons/square-parking.svg';
import truckRampBoxIcon from '../icons/truck-ramp-box.svg';

export default new FeatureLayer({
  portalItem: {
    id: '7f8f103d89b544b9b13b1fd7ffcd4338',
  },
  layerId: 0,
  definitionExpression: `
    ParkingSpaceSubCategory IN (
      'Meter-Coin',
      'Meter-Paystation',
      'R-Carpool',
      'R-Client',
      'R-EV Stations',
      'R-Handicapped',
      'R-Motorcycle',
      'Painted-Dock',
      'R-State',
      'R-Visitor',
      'R-15Min'
    )
  `,
  renderer: {
    type: 'unique-value',
    field: 'ParkingSpaceSubCategory',
    defaultSymbol: {type: 'picture-marker', url: squareParkingIcon},
    uniqueValueInfos: [{
      value: 'Meter-Coin',
      symbol: {type: 'picture-marker', url: circleDollarToSlotIcon},
    }, {
      value: 'Meter-Paystation',
      symbol: {type: 'picture-marker', url: circleDollarToSlotIcon},
    }, {
      value: 'R-Carpool',
      symbol: {type: 'picture-marker', url: peopleGroupIcon},
    }, {
      value: 'R-Client',
      symbol: {type: 'picture-marker', url: circleXmarkIcon},
    }, {
      value: 'R-EV Stations',
      symbol: {type: 'picture-marker', url: chargingStationIcon},
    }, {
      value: 'R-Handicapped',
      symbol: {type: 'picture-marker', url: accessibleIcon},
    }, {
      value: 'R-Motorcycle',
      symbol: {type: 'picture-marker', url: motorcycleIcon},
    }, {
      value: 'Painted-Dock',
      symbol: {type: 'picture-marker', url: truckRampBoxIcon},
    }, {
      value: 'R-State',
      symbol: {type: 'picture-marker', url: massachusettsIcon},
    }, {
      value: 'R-Visitor',
      symbol: {type: 'picture-marker', url: personWalkingLuggageIcon},
    }, {
      value: 'R-15Min',
      symbol: {type: 'picture-marker', url: peopleCarryBoxIcon},
    }],
  },
  featureReduction: {
    type: 'cluster',
    clusterRadius: '24',
    clusterMinSize: '12',
    clusterMaxSize: '12',
    labelingInfo: [{
      labelExpressionInfo: {
        expression: '$feature.cluster_count',
      },
      deconflictionStrategy: 'none',
      labelPlacement: 'below-center',
      symbol: {
        type: 'text',
        color: 'white',
        font: {
          size: '12px',
        },
        haloSize: 1,
        haloColor: 'black',
      },
    }],
  },
});
