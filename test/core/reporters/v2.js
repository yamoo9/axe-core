describe('reporters - v2', function() {
	'use strict';
	var orig,
		results,
		_results = [
			{
				id: 'gimmeLabel',
				helpUrl: 'things',
				description: 'something nifty',
				result: 'passed',
				impact: null,
				tags: ['tag1'],
				violations: [],
				passes: [
					{
						result: 'passed',
						any: [
							{
								result: true,
								impact: null,
								relatedNodes: [
									{
										selector: 'bob',
										source: 'fred'
									}
								],
								data: 'minkey'
							}
						],
						all: [],
						none: [],
						node: {
							selector: ['minkey'],
							frames: [],
							source: '<minkey>chimp</minky>'
						}
					}
				]
			},
			{
				id: 'idkStuff',
				description: 'something more nifty',
				pageLevel: true,
				result: 'failed',
				impact: 'cats',
				tags: ['tag2'],
				passes: [],
				violations: [
					{
						result: 'failed',
						all: [
							{
								relatedNodes: [
									{
										selector: 'joe',
										source: 'bob'
									}
								],
								result: false,
								data: 'pillock',
								impact: 'cats'
							},
							{
								relatedNodes: [],
								result: true
							}
						],
						any: [
							{
								relatedNodes: [],
								result: true
							}
						],
						none: [
							{
								relatedNodes: [],
								result: false
							}
						],
						node: {
							selector: ['q', 'r', 'pillock'],
							source: '<pillock>george bush</pillock>'
						},
						impact: 'cats'
					}
				]
			}
		];
	beforeEach(function() {
		results = JSON.parse(JSON.stringify(_results));
		axe._load({
			messages: {},
			rules: [],
			data: {}
		});
		orig = axe._runRules;
		axe._runRules = function(ctxt, options, cb) {
			cb(results, function noop() {});
		};
	});

	afterEach(function() {
		axe._audit = null;
		axe._runRules = orig;
	});

	var optionsV2 = { reporter: 'v2' };

	it('should merge the runRules results into violations and passes', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.isObject(results);
			assert.isArray(results.violations);
			assert.lengthOf(results.violations, 1);
			assert.isArray(results.passes);
			assert.lengthOf(results.passes, 1);

			done();
		});
	});
	it('should add the rule id to the rule result', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.equal(results.violations[0].id, 'idkStuff');
			assert.equal(results.passes[0].id, 'gimmeLabel');
			done();
		});
	});
	it('should add tags to the rule result', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.deepEqual(results.violations[0].tags, ['tag2']);
			assert.deepEqual(results.passes[0].tags, ['tag1']);
			done();
		});
	});
	it('should add the rule help to the rule result', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.isNotOk(results.violations[0].helpUrl);
			assert.equal(results.passes[0].helpUrl, 'things');
			done();
		});
	});
	it('should add the html to the node data', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.ok(results.violations[0].nodes);
			assert.equal(results.violations[0].nodes.length, 1);
			assert.equal(
				results.violations[0].nodes[0].html,
				'<pillock>george bush</pillock>'
			);
			assert.equal(results.passes[0].nodes[0].html, '<minkey>chimp</minky>');
			done();
		});
	});
	it('should add the target selector array to the node data', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.ok(results.violations[0].nodes);
			assert.equal(results.violations[0].nodes.length, 1);
			assert.deepEqual(results.violations[0].nodes[0].target, [
				'q',
				'r',
				'pillock'
			]);
			done();
		});
	});
	it('should add the description to the rule result', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.equal(results.violations[0].description, 'something more nifty');
			assert.equal(results.passes[0].description, 'something nifty');
			done();
		});
	});
	it('should add the impact to the rule result', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.equal(results.violations[0].impact, 'cats');
			assert.equal(results.violations[0].nodes[0].impact, 'cats');
			assert.isNotOk(results.passes[0].impact);
			assert.isNotOk(results.passes[0].nodes[0].impact);
			done();
		});
	});
	it('should map relatedNodes', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.lengthOf(results.violations[0].nodes[0].all[0].relatedNodes, 1);
			assert.equal(
				results.violations[0].nodes[0].all[0].relatedNodes[0].target,
				'joe'
			);
			assert.equal(
				results.violations[0].nodes[0].all[0].relatedNodes[0].html,
				'bob'
			);

			assert.lengthOf(results.passes[0].nodes[0].any[0].relatedNodes, 1);
			assert.equal(
				results.passes[0].nodes[0].any[0].relatedNodes[0].target,
				'bob'
			);
			assert.equal(
				results.passes[0].nodes[0].any[0].relatedNodes[0].html,
				'fred'
			);
			done();
		});
	});
	it('should add environment data', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.isNotNull(results.url);
			assert.isNotNull(results.timestamp);
			assert.isNotNull(results.testEnvironement);
			assert.isNotNull(results.testRunner);
			done();
		});
	});
	it('should add toolOptions property', function(done) {
		axe.run(optionsV2, function(err, results) {
			assert.isNull(err);
			assert.isNotNull(results.toolOptions);
			done();
		});
	});
});
