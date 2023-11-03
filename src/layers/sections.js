import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

/**
 * Lot sections data layer.
 */
export default new FeatureLayer({
  portalItem: {
    id: '7f8f103d89b544b9b13b1fd7ffcd4338',
  },
  layerId: 1,
  definitionExpression: `SectionPublicVisible = 'Yes'`,
  outFields: ['*'],
  title: 'Lots',
  renderer: {
    type: 'unique-value',
    field: 'SectionColor',
    defaultSymbol: {type: 'simple-fill'},
    uniqueValueInfos: [{
      value: 'Blue',
      symbol: {type: 'simple-fill', color: [0, 0, 192, 0.5], outline: {color: '#0000bf'}},
    }, {
      value: 'Green',
      symbol: {type: 'simple-fill', color: [0, 128, 0, 0.5], outline: {color: '#008000'}},
    }, {
      value: 'Pink',
      symbol: {type: 'simple-fill', color: [255, 0, 255, 0.5], outline: {color: '#ff00ff'}},
    }, {
      value: 'Purple',
      symbol: {type: 'simple-fill', color: [128, 0, 128, 0.5], outline: {color: '#800080'}},
    }, {
      value: 'Red',
      symbol: {type: 'simple-fill', color: [192, 0, 0, 0.5], outline: {color: '#bf0000'}},
    }, {
      value: 'Yellow',
      symbol: {type: 'simple-fill', color: [192, 192, 0, 0.5], outline: {color: '#bfbf00'}},
    }],
  },
  labelingInfo: [{
    symbol: {
      type: 'text',
      color: 'white',
      haloColor: 'black',
      haloSize: 1.25,
      font: {
        size: 16,
      },
    },
    labelExpressionInfo: {
      expression: '$feature.SectionCode',
    },
    minScale: 36111,
  }],
  popupTemplate: {
    lastEditInfoEnabled: false,
    title: '{SectionName}',
    content: [{
      type: 'text', text: '{SectionAddress}',
    }, {
      type: 'custom',
      creator: ({graphic: {attributes}}) => {
        const color = formatColor(attributes['SectionColor']);
        const hours = formatHours(attributes['SectionColor'], attributes['SectionHours']);
        const permitEligibility = formatPermitEligibility(attributes['SectionColor']);
        const parkmobileZoneID = formatParkmobileZoneID(attributes['ParkmobileZoneID']);

        const wrapper = document.createElement('div');
        wrapper.appendChild(document.createRange().createContextualFragment(`
          <table class="esri-widget__table">
            <tbody>
              ${!(color) ? '' : `
                <tr>
                  <th class="esri-feature-fields__field-header">Color</th>
                  <td class="esri-feature-fields__field-data">${color}</td>
                </tr>
              `}
              ${!(hours) ? '' : `
                <tr>
                  <th class="esri-feature-fields__field-header">Hours</th>
                  <td class="esri-feature-fields__field-data">${hours}</td>
                </tr>
              `}
              ${!(permitEligibility) ? '' : `
                <tr>
                  <th class="esri-feature-fields__field-header">Permit Eligibility</th>
                  <td class="esri-feature-fields__field-data">${permitEligibility}</td>
                </tr>
              `}
              ${!(parkmobileZoneID) ? '' : `
                <tr>
                  <th class="esri-feature-fields__field-header">
                    <a href="https://www.umass.edu/transportation/pay-cell-parkmobile">ParkMobile</a>
                  </th>
                  <td class="esri-feature-fields__field-data">${parkmobileZoneID}</td>
                </tr>
              `}
            </tbody>
          </table>
        `));
        return wrapper;
      },
    }],
  },
});

/**
 * Formats a lot section's color for display.
 *
 * @param {*} color
 * @return {*}
 */
function formatColor(color) {
  if (color === 'Pink') {
    return 'Pink (Metered)';
  } else if (!!(color)) {
    return color;
  } else {
    return null;
  }
}

/**
 * Formats a lot section's enforcement hours for display.
 *
 * @param {*} color
 * @param {*} hours
 * @return {*}
 */
function formatHours(color, hours) {
  const requirement = (color === 'Pink') ? 'Payment' : 'Permit';
  if (hours === 'BusinessHours') {
    return `${requirement} required 7:00 AM to 5:00 PM Monday through Friday`;
  } else if (hours === 'Weekdays') {
    return `${requirement} required any time Monday through Friday`;
  } else if (hours === '24Hour') {
    return `${requirement} required at all times`;
  } else {
    return null;
  }
}

/**
 * Formats a lot section's permit eligibility for display.
 *
 * @param {*} color
 * @return {*}
 */
function formatPermitEligibility(color) {
  if (color === 'Blue') {
    return 'Faculty, staff and graduate students only';
  } else if (color === 'Green') {
    return 'Faculty, staff, graduate students and non-residential students only';
  } else if (color === 'Purple') {
    return 'Residential students only';
  } else if (color === 'Red') {
    return 'Faculty and staff only';
  } else if (color === 'Yellow') {
    return 'Any university community member';
  } else {
    return null;
  }
}

/**
 * Formats a lot section's Parkmobile zone for display.
 *
 * @param {*} parkmobileZoneID
 * @return {*}
 */
function formatParkmobileZoneID(parkmobileZoneID) {
  return !!(parkmobileZoneID) ? `Zone #${parkmobileZoneID}` : null;
}
