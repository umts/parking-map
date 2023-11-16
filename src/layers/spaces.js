import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import accessibleIcon from '@fortawesome/fontawesome-free/svgs/solid/wheelchair-move.svg';
import chargingStationIcon from '@fortawesome/fontawesome-free/svgs/solid/charging-station.svg';
import circleDollarToSlotIcon from '@fortawesome/fontawesome-free/svgs/solid/circle-dollar-to-slot.svg';
import circleXmarkIcon from '@fortawesome/fontawesome-free/svgs/solid/circle-xmark.svg';
import motorcycleIcon from '@fortawesome/fontawesome-free/svgs/solid/motorcycle.svg';
import peopleCarryBoxIcon from '@fortawesome/fontawesome-free/svgs/solid/people-carry-box.svg';
import peopleGroupIcon from '@fortawesome/fontawesome-free/svgs/solid/people-group.svg';
import personWalkingLuggageIcon from '@fortawesome/fontawesome-free/svgs/solid/person-walking-luggage.svg';
import squareParkingIcon from '@fortawesome/fontawesome-free/svgs/solid/square-parking.svg';
import truckRampBoxIcon from '@fortawesome/fontawesome-free/svgs/solid/truck-ramp-box.svg';
import massachusettsIcon from '../assets/massachusetts.svg';

/**
 * Lot spaces data layer.
 */
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
  title: 'Spaces',
  renderer: {
    type: 'unique-value',
    field: 'ParkingSpaceSubCategory',
    defaultSymbol: {type: 'picture-marker', url: squareParkingIcon, width: 12, height: 12},
    uniqueValueInfos: [{
      value: 'Meter-Coin',
      symbol: {type: 'picture-marker', url: circleDollarToSlotIcon, width: 12, height: 12},
    }, {
      value: 'Meter-Paystation',
      symbol: {type: 'picture-marker', url: circleDollarToSlotIcon, width: 12, height: 12},
    }, {
      value: 'R-Carpool',
      symbol: {type: 'picture-marker', url: peopleGroupIcon, width: 12, height: 12},
    }, {
      value: 'R-Client',
      symbol: {type: 'picture-marker', url: circleXmarkIcon, width: 12, height: 12},
    }, {
      value: 'R-EV Stations',
      symbol: {type: 'picture-marker', url: chargingStationIcon, width: 12, height: 12},
    }, {
      value: 'R-Handicapped',
      symbol: {type: 'picture-marker', url: accessibleIcon, width: 12, height: 12},
    }, {
      value: 'R-Motorcycle',
      symbol: {type: 'picture-marker', url: motorcycleIcon, width: 12, height: 12},
    }, {
      value: 'Painted-Dock',
      symbol: {type: 'picture-marker', url: truckRampBoxIcon, width: 12, height: 12},
    }, {
      value: 'R-State',
      symbol: {type: 'picture-marker', url: massachusettsIcon, width: 12, height: 12},
    }, {
      value: 'R-Visitor',
      symbol: {type: 'picture-marker', url: personWalkingLuggageIcon, width: 12, height: 12},
    }, {
      value: 'R-15Min',
      symbol: {type: 'picture-marker', url: peopleCarryBoxIcon, width: 12, height: 12},
    }],
  },
  featureReduction: {
    type: 'cluster',
    clusterRadius: 36,
    clusterMinSize: 12,
    clusterMaxSize: 12,
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
  popupEnabled: false,
});
