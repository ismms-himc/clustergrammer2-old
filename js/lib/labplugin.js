var clustergrammer2 = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'clustergrammer2',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'clustergrammer2',
          version: clustergrammer2.version,
          exports: clustergrammer2
      });
  },
  autoStart: true
};

