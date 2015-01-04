/**
 * @fileoverview Externs for React 0.10.0.
 *
 * @see http://facebook.github.io/react
 * @externs
 */

/**
 * @type {Object}
 * @const
 */
var React = {};

/**
 * @type {string}
 */
React.version;

/**
 * @param {boolean} shouldUseTouch
 */
React.initializeTouchEvents = function(shouldUseTouch) {};

/**
 * @param {Object} specification
 * @return {function(
      Object=,
      (string|React.ReactComponent|Array.<React.ReactComponent>)=
    ): React.ReactComponent}
 */
React.createClass = function(specification) {};

/**
 * @param {Object} specification
 */
React.createFactory = function(specification) {};

/**
 * @param {*} componentClass
 * @return {boolean}
 */
React.isValidClass = function(componentClass) {};

/**
 * @param {*} element
 * @return {boolean}
 */
React.isValidElement = function(element) {};

/**
 * @param {React.ReactComponent} container
 * @param {Element} mountPoint
 * @param {Function=} callback
 * @return {React.ReactComponent}
 */
React.renderComponent = function(container, mountPoint, callback) {};

/**
 * @param {React.ReactComponent} container
 * @param {Element} mountPoint
 * @param {Function=} callback
 * @return {React.ReactComponent}
 */
React.render = function(container, mountPoint, callback) {};

/**
 * @param {Element} container
 */
React.unmountComponentAtNode = function(container) {};

/**
 * @param {React.ReactComponent} component
 */
React.renderComponentToString = function(component) {};

/**
 * @param {React.ReactComponent} component
 */
React.renderToString = function(component) {};

/**
 * @param {React.ReactComponent} component
 * @return {string}
 */
React.renderComponentToStaticMarkup = function(component) {};

/**
 * @param {React.ReactComponent} component
 * @return {string}
 */
React.renderToStaticMarkup = function(component) {};

/**
 * @param {Function} constructor React component constructor.
 * @param {Object} props Initial props of the component instance.
 * @param {Element} container DOM element to render into.
 * @return {React.ReactComponent} Component instance rendered in `container`.
 */
React.constructAndRenderComponent = function(constructor, props, container) {};

/**
 * @param {Function} componentConstructor React component constructor
 * @param {Object} props Initial props of the component instance.
 * @param {string} id ID of the DOM element to render into.
 * @return {React.ReactComponent} Component instance rendered in the container node.
 */
React.constructAndRenderComponentByID = function(componentConstructor, props, id) {};

/**
 * @interface
 */
React.ReactComponent = function() {};

/**
 * @type {Object}
 */
React.ReactComponent.prototype.props;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.state;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.refs;

/**
 * @type {Object}
 */
React.ReactComponent.prototype.context;

/**
 * @type {Object}
 * @protected
 */
React.ReactComponent.prototype.propTypes;

/**
 * @type {Object}
 * @protected
 */
React.ReactComponent.prototype.contextTypes;

/**
 * @return {boolean} True if mounted, false otherwise.
 * @protected
 */
React.ReactComponent.prototype.isMounted = function() {};

/**
 * @param {Object} nextProps
 * @param {Function=} callback
 */
React.ReactComponent.prototype.setProps = function(nextProps, callback) {};

/**
 * @return {Object}
 */
React.ReactComponent.prototype.getInitialState = function() {};

/**
 * @return {Object}
 */
React.ReactComponent.prototype.getDefaultProps = function() {};

/**
 * @return {Object}
 */
React.ReactComponent.prototype.getChildContext = function() {};

/**
 * @return {Element}
 */
React.ReactComponent.prototype.getDOMNode = function() {};

/**
 * @param {Object} nextProps
 * @param {Function=} callback
 */
React.ReactComponent.prototype.replaceProps = function(nextProps, callback) {};

/**
 * @param {React.ReactComponent} targetComponent
 * @return {React.ReactComponent}
 * @protected
 */
React.ReactComponent.prototype.transferPropsTo = function(targetComponent) {};

/**
 * @param {Function=} callback
 * @protected
 */
React.ReactComponent.prototype.forceUpdate = function(callback) {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 * @protected
 */
React.ReactComponent.prototype.setState = function(nextState, callback) {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 * @protected
 */
React.ReactComponent.prototype.replaceState = function(nextState, callback) {};

/**
 * @protected
 */
React.ReactComponent.prototype.componentWillMount = function() {};

/**
 * @protected
 */
React.ReactComponent.prototype.componentDidMount = function() {};

/**
 * @param {Object} nextProps
 * @protected
 */
React.ReactComponent.prototype.componentWillReceiveProps = function(
  nextProps) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {boolean}
 * @protected
 */
React.ReactComponent.prototype.shouldComponentUpdate = function(
  nextProps, nextState) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @protected
 */
React.ReactComponent.prototype.componentWillUpdate = function(
  nextProps, nextState) {};

/**
 * @return {React.ReactComponent}
 * @protected
 */
React.ReactComponent.prototype.render = function() {};

/**
 * @param {Object} prevProps
 * @param {Object} prevState
 * @protected
 */
React.ReactComponent.prototype.componentDidUpdate = function(
  prevProps, prevState) {};

/**
 * @protected
 */
React.ReactComponent.prototype.componentWillUnmount = function() {};


/**
 * @type {Object}
 * @const
 */
React.DOM = {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.a = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.abbr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.address = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.area = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.article = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...React.ChildrenArgument} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.aside = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.audio = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.b = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.base = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.bdi = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.bdo = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.big = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.blockquote = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.body = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.br = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.button = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.canvas = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.caption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.cite = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.code = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.col = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.colgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.data = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.datalist = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.del = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.details = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dfn = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.div = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dl = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.em = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.embed = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.fieldset = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.figcaption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.figure = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.footer = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.form = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h1 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h2 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h3 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h4 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h5 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.h6 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.head = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.header = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.hr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.html = function(props, children) {};


/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.i = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.iframe = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.img = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ins = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.kbd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.keygen = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.label = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.legend = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.li = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.link = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.main = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.map = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.mark = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.menu = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.menuitem = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.meta = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.meter = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.nav = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.noscript = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.object = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ol = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.optgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.option = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.output = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.p = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.param = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.pre = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.progress = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.q = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.rp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.rt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ruby = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.s = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.samp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.script = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.section = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.select = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.small = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.source = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.span = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.strong = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.style = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.sub = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.summary = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.sup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.table = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tbody = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.td = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.textarea = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tfoot = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.th = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.thead = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.time = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.title = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.tr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.u = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.ul = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.video = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.wbr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.circle = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.g = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.line = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.linearGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.path = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.polygon = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.polyline = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.rect = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.stop = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.svg = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.text = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.dialog = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...string|React.ReactComponent|Array.<React.ReactComponent>} children
 * @return {React.ReactComponent}
 * @protected
 */
React.DOM.picture = function(props, children) {};
