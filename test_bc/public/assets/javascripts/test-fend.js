"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('test-fend/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'test-fend/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _testFendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _testFendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _testFendConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _testFendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('test-fend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'test-fend/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _testFendConfigEnvironment) {

  var name = _testFendConfigEnvironment['default'].APP.name;
  var version = _testFendConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('test-fend/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('test-fend/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('test-fend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'test-fend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _testFendConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_testFendConfigEnvironment['default'].APP.name, _testFendConfigEnvironment['default'].APP.version)
  };
});
define('test-fend/initializers/export-application-global', ['exports', 'ember', 'test-fend/config/environment'], function (exports, _ember, _testFendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_testFendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _testFendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_testFendConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('test-fend/router', ['exports', 'ember', 'test-fend/config/environment'], function (exports, _ember, _testFendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _testFendConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("test-fend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "test-fend/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('test-fend/config/environment', ['ember'], function(Ember) {
  var prefix = 'test-fend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("test-fend/app")["default"].create({"name":"test-fend","version":"0.0.0+422175be"});
}

/* jshint ignore:end */
//# sourceMappingURL=test-fend.map