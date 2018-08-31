var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var cgm_fun = require('clustergrammer-gl')
var d3 = require('d3');

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'clustergrammer2',
        _view_module : 'clustergrammer2',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World',
        network:''
    })
});

function make_viz(args){
  var inst_container = document.getElementById(args.container_name)
  console.log('inst_container_2', inst_container)
  args.container = inst_container;
  var cgm = cgm_fun(args)
  console.log('making clustergram in make_viz');
  console.log(cgm);
}


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    render: function() {

        this.value_changed();
        this.model.on('change:value', this.value_changed, this);

        console.log('Clustergrammer2 Widget!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

        console.log('\n**********************************************');
        console.log('rendering using network json');
        console.log('**********************************************');

        console.log(this.model.get('network'))

        var inst_network_string = this.model.get('network');
        var inst_network = JSON.parse(inst_network_string);

        console.log(inst_network)

        // var container_name = this.cid;

        // // the cid appears to be the container id, which gives a unique view number
        // console.log('container_name', container_name)

        // // widget-subarea appears to be limited to a width of ~960px in nbviewer
        // var inst_container = d3.select(this.el)
        //     .append('div')
        //     .classed('clustergrammer_glidget', true)
        //     .attr('id', container_name)
        //     .style('width', '975px')
        //     .style('height', '975px');

        // var container_id = '#'+container_name;

        // console.log(container_name, inst_container, container_id);

        // // define arguments object
        // var args = {
        //     'container_name': container_name,
        //     'network': inst_network,
        // };

        // console.log(args);

        // setTimeout(make_viz, 10, args);
    },

    value_changed: function() {
        this.el.textContent = this.model.get('value');
    }
});


module.exports = {
    HelloModel : HelloModel,
    HelloView : HelloView
};
