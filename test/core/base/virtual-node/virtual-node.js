/*global axe, VirtualNode */
describe('VirtualNode', function() {
	'use strict';
	var node;

	beforeEach(function() {
		node = document.createElement('div');
	});

	it('should be a function', function() {
		assert.isFunction(VirtualNode);
	});

	it('should accept three parameters', function() {
		assert.lengthOf(VirtualNode, 3);
	});

	describe('prototype', function() {
		it('should have public properties', function() {
			var parent = {};
			var vNode = new VirtualNode(node, parent, 'foo');

			assert.equal(vNode.shadowId, 'foo');
			assert.typeOf(vNode.children, 'array');
			assert.equal(vNode.actualNode, node);
			assert.equal(vNode.parent, parent);
		});

		it('should abstract Node properties', function() {
			node = document.createElement('input');
			node.id = 'monkeys';
			var vNode = new VirtualNode(node);

			assert.isDefined(vNode.props);
			assert.equal(vNode.props.nodeType, 1);
			assert.equal(vNode.props.nodeName, 'input');
			assert.equal(vNode.props.id, 'monkeys');
			assert.equal(vNode.props.type, 'text');
		});

		it('should lowercase nodeName', function() {
			var node = {
				nodeName: 'FOOBAR'
			};
			var vNode = new VirtualNode(node);

			assert.equal(vNode.props.nodeName, 'foobar');
		});

		describe('attr', function() {
			it('should return the value of the given attribute', function() {
				node.setAttribute('data-foo', 'bar');
				var vNode = new VirtualNode(node);

				assert.equal(vNode.attr('data-foo'), 'bar');
			});

			it('should return null for text nodes', function() {
				node.textContent = 'hello';
				var vNode = new VirtualNode(node.firstChild);

				assert.isNull(vNode.attr('data-foo'));
			});

			it('should return null if getAttribute is not a function', function() {
				var node = {
					nodeName: 'DIV',
					getAttribute: null
				};
				var vNode = new VirtualNode(node);

				assert.isNull(vNode.attr('data-foo'));
			});
		});

		describe('hasAttr', function() {
			it('should return true if the element has the attribute', function() {
				node.setAttribute('foo', 'bar');
				var vNode = new VirtualNode(node);

				assert.isTrue(vNode.hasAttr('foo'));
			});

			it('should return false if the element does not have the attribute', function() {
				var vNode = new VirtualNode(node);

				assert.isFalse(vNode.hasAttr('foo'));
			});

			it('should return false for text nodes', function() {
				node.textContent = 'hello';
				var vNode = new VirtualNode(node.firstChild);

				assert.isFalse(vNode.hasAttr('foo'));
			});

			it('should return false if hasAttribute is not a function', function() {
				var node = {
					nodeName: 'DIV',
					hasAttribute: null
				};
				var vNode = new VirtualNode(node);

				assert.isFalse(vNode.hasAttr('foo'));
			});
		});

		describe('isFocusable', function() {
			var commons;

			beforeEach(function() {
				commons = axe.commons = axe.commons;
			});

			afterEach(function() {
				axe.commons = commons;
			});

			it('should call dom.isFocusable', function() {
				var called = false;
				axe.commons = {
					dom: {
						isFocusable: function() {
							called = true;
						}
					}
				};
				var vNode = new VirtualNode(node);
				vNode.isFocusable;

				assert.isTrue(called);
			});

			it('should only call dom.isFocusable once', function() {
				var count = 0;
				axe.commons = {
					dom: {
						isFocusable: function() {
							count++;
						}
					}
				};
				var vNode = new VirtualNode(node);
				vNode.isFocusable;
				vNode.isFocusable;
				vNode.isFocusable;
				assert.equal(count, 1);
			});
		});

		describe('tabbableElements', function() {
			var commons;

			beforeEach(function() {
				commons = axe.commons = axe.commons;
			});

			afterEach(function() {
				axe.commons = commons;
			});

			it('should call dom.getTabbableElements', function() {
				var called = false;
				axe.commons = {
					dom: {
						getTabbableElements: function() {
							called = true;
						}
					}
				};
				var vNode = new VirtualNode(node);
				vNode.tabbableElements;

				assert.isTrue(called);
			});

			it('should only call dom.getTabbableElements once', function() {
				var count = 0;
				axe.commons = {
					dom: {
						getTabbableElements: function() {
							count++;
						}
					}
				};
				var vNode = new VirtualNode(node);
				vNode.tabbableElements;
				vNode.tabbableElements;
				vNode.tabbableElements;
				assert.equal(count, 1);
			});
		});
	});
});
