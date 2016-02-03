import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('test', {path: 'ember/test'},function() {
    this.route('test', {path: "ember/test/:id_test"});
  });
});

export default Router;
