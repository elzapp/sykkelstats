// Code goes here

$(document).ready(function() {
  var prepend = "https://raw.githubusercontent.com/elzapp/sykkelstats/master/svv-tellepunkt/";
  var myStringArray = ["kanalveien", "fjosangerveien", "floenstien", "puddefjordsbroen", "sandviken", "solheimsviken","haavardstun","skjoldskiftet"];
  var append = ".csv";

  var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'måned', //the x-axis
      xFormat: '%Y-%m',
      url: prepend + myStringArray[0] + append,
      mimeType: 'csv'
    },
    axis: {

      x: {
        type: 'timeseries',
        localtime: false,
        tick: {
          format: '%Y-%m'
        }
      }
    }

  });


  var arrayLength = myStringArray.length;
  for (var i = 1; i < arrayLength; i++) {
    loadMore(prepend + myStringArray[i] + append);
  }

  function loadMore(theurl) {
      chart.load({
        url: theurl,
        mimeType: 'csv',
        type: 'line'

      });
  }


});
