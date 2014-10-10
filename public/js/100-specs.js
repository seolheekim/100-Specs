(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
var HundredSpecs = function() {
	js.mocha.M.describe("Unicorn",$bind(this,this.step1));
	js.mocha.M.describe("Videogame System",$bind(this,this.step2));
	js.mocha.M.describe("Sahara Animal",$bind(this,this.step3));
	js.mocha.M.describe("Planets",$bind(this,this.step4));
	js.mocha.M.describe("Galilean Moons",$bind(this,this.step5));
	js.mocha.M.describe("Golden Ratio φ",$bind(this,this.step6));
	js.mocha.M.describe("Water Comprising Earth's Surface",$bind(this,this.step7));
	js.mocha.M.describe("Club Name",$bind(this,this.step8));
	js.mocha.M.describe("Gender",$bind(this,this.step9));
	js.mocha.M.describe("Step 20",$bind(this,this.step20));
};
HundredSpecs.__name__ = true;
HundredSpecs.main = function() {
	js.mocha.Mocha.setup({ ui : js.mocha.Ui.BDD});
	new HundredSpecs();
	js.mocha.Mocha.run();
}
HundredSpecs.prototype = {
	step20: function() {
		js.mocha.M.it("should define a function named 'sahara_river'.",function() {
			js.expect.E.expect(sahara_river).to.be.a("function");
		});
		js.mocha.M.it("'sahara_river' should return the string 'Nile River'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(sahara_river()),"Nile River");
		});
	}
	,step9: function() {
		js.mocha.M.it("should declare a variable named 'Gender'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(Gender).not,null);
		});
		js.mocha.M.it("should have 3 properties",function() {
			js.expect.E.expect(Reflect.fields(Gender)).to.have.length(3);
		});
		js.mocha.M.it("should define genders female, male, and unknown.",function() {
			js.expect.E.expect(Gender.female).to.eql("female");
			js.expect.E.expect(Gender.male).to.eql("male");
			js.expect.E.expect(Gender.unknown).to.be.an("undefined");
		});
	}
	,step8: function() {
		js.mocha.M.it("should declare a variable named 'club_name' with a value of 'Fight Club'",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(club_name),"Fight Club");
		});
	}
	,step7: function() {
		js.mocha.M.it("should declare a variable named 'earths_water_composition' with a value representing 71%.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(earths_water_composition),0.71);
		});
	}
	,step6: function() {
		js.mocha.M.it("should declare a variable named 'golden_ratio' with a value of '1.61803398874'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(golden_ratio),1.61803398874);
		});
	}
	,step5: function() {
		js.mocha.M.it("should declare a variable named 'galilean_moons' that is an array.",function() {
			js.expect.E.expect(galilean_moons).to.be.an(Array);
		});
		js.mocha.M.it("should have 4 items",function() {
			js.expect.E.expect(galilean_moons).to.have.length(4);
		});
		js.mocha.M.it("should contain the name of each galilean moon of Jupiter",function() {
			var lowercase_moons = ["io","europa","ganymede","callisto"];
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[0].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[1].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[2].toLowerCase());
			js.expect.E.expect(lowercase_moons).to.contain(galilean_moons[3].toLowerCase());
		});
	}
	,step4: function() {
		js.mocha.M.it("should declare a variable named 'planets' that is an array.",function() {
			js.expect.E.expect(planets).to.be.an(Array);
		});
		js.mocha.M.it("should have 8 items",function() {
			js.expect.E.expect(planets.length).to.eql(8);
		});
		js.mocha.M.it("should contain the name of each of our solar system's planets",function() {
			js.expect.E.expect(planets.toLowerCase()).to.contain("mercury");
			js.expect.E.expect(planets.toLowerCase()).to.contain("venus");
			js.expect.E.expect(planets.toLowerCase()).to.contain("earth");
			js.expect.E.expect(planets.toLowerCase()).to.contain("mars");
			js.expect.E.expect(planets.toLowerCase()).to.contain("jupiter");
			js.expect.E.expect(planets.toLowerCase()).to.contain("saturn");
			js.expect.E.expect(planets.toLowerCase()).to.contain("uranus");
			js.expect.E.expect(planets.toLowerCase()).to.contain("neptune");
		});
		js.mocha.M.it("should have each planet listed in order",function() {
			js.expect.E.expect(planets[0].toLowerCase()).to.eql("mercury");
			js.expect.E.expect(planets[1].toLowerCase()).to.eql("venus");
			js.expect.E.expect(planets[2].toLowerCase()).to.eql("earth");
			js.expect.E.expect(planets[3].toLowerCase()).to.eql("mars");
			js.expect.E.expect(planets[4].toLowerCase()).to.eql("jupiter");
			js.expect.E.expect(planets[5].toLowerCase()).to.eql("saturn");
			js.expect.E.expect(planets[6].toLowerCase()).to.eql("uranus");
			js.expect.E.expect(planets[7].toLowerCase()).to.eql("neptune");
		});
	}
	,step3: function() {
		js.mocha.M.it("should declare a variable named 'sahara_animal' with a value of 'The Addax'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(new sahara_animal()),"The Addax");
		});
	}
	,step2: function() {
		js.mocha.M.it("should declare a variable named 'videogame_system' with a value of 'Atari'.",function() {
			js.expect.ExpectMixins.toBe(js.expect.E.expect(videogame_system),"Atari");
		});
	}
	,step1: function() {
		js.mocha.M.it("should declare a variable named 'unicorn' with no value set.",function() {
			if(unicorn == null) js.expect.E.expect(true).to.be.ok(); else js.expect.E.expect().fail("unicorn is not set");
		});
	}
}
var Reflect = function() { }
Reflect.__name__ = true;
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
var Std = function() { }
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
var js = {}
js.Boot = function() { }
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.expect = {}
js.expect.E = function() { }
js.expect.E.__name__ = true;
js.expect.E.expect = function(actual) {
	return js.expect.E._expect(actual);
}
js.expect.E.should = function(actual) {
	return js.expect.E._expect(actual);
}
js.expect.E.get_version = function() {
	return js.expect.E._expect.version;
}
js.expect.ExpectMixins = function() { }
js.expect.ExpectMixins.__name__ = true;
js.expect.ExpectMixins.toBe = function(e,expected) {
	return e.be(expected);
}
js.expect.ExpectMixins.match = function(e,pattern,modifiers) {
	return e.match(new RegExp(pattern,modifiers));
}
js.expect.ExpectMixins.throwExceptionMatch = function(e,pattern,modifiers) {
	return e.throwException(new RegExp(pattern,modifiers));
}
js.mocha = {}
js.mocha.Ui = { __ename__ : true, __constructs__ : ["BDD","EXPORTS","QUNIT","TDD"] }
js.mocha.Ui.BDD = ["BDD",0];
js.mocha.Ui.BDD.toString = $estr;
js.mocha.Ui.BDD.__enum__ = js.mocha.Ui;
js.mocha.Ui.EXPORTS = ["EXPORTS",1];
js.mocha.Ui.EXPORTS.toString = $estr;
js.mocha.Ui.EXPORTS.__enum__ = js.mocha.Ui;
js.mocha.Ui.QUNIT = ["QUNIT",2];
js.mocha.Ui.QUNIT.toString = $estr;
js.mocha.Ui.QUNIT.__enum__ = js.mocha.Ui;
js.mocha.Ui.TDD = ["TDD",3];
js.mocha.Ui.TDD.toString = $estr;
js.mocha.Ui.TDD.__enum__ = js.mocha.Ui;
js.mocha.Reporter = { __ename__ : true, __constructs__ : ["DOC","DOT","HTML","HTMLCOV","JSON","JSONCOV","JSONSTREAM","LANDING","LIST","MIN","NYAN","PROGRESS","SPEC","TAP","TEAMCITY","XUNIT"] }
js.mocha.Reporter.DOC = ["DOC",0];
js.mocha.Reporter.DOC.toString = $estr;
js.mocha.Reporter.DOC.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.DOT = ["DOT",1];
js.mocha.Reporter.DOT.toString = $estr;
js.mocha.Reporter.DOT.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.HTML = ["HTML",2];
js.mocha.Reporter.HTML.toString = $estr;
js.mocha.Reporter.HTML.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.HTMLCOV = ["HTMLCOV",3];
js.mocha.Reporter.HTMLCOV.toString = $estr;
js.mocha.Reporter.HTMLCOV.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSON = ["JSON",4];
js.mocha.Reporter.JSON.toString = $estr;
js.mocha.Reporter.JSON.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSONCOV = ["JSONCOV",5];
js.mocha.Reporter.JSONCOV.toString = $estr;
js.mocha.Reporter.JSONCOV.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.JSONSTREAM = ["JSONSTREAM",6];
js.mocha.Reporter.JSONSTREAM.toString = $estr;
js.mocha.Reporter.JSONSTREAM.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.LANDING = ["LANDING",7];
js.mocha.Reporter.LANDING.toString = $estr;
js.mocha.Reporter.LANDING.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.LIST = ["LIST",8];
js.mocha.Reporter.LIST.toString = $estr;
js.mocha.Reporter.LIST.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.MIN = ["MIN",9];
js.mocha.Reporter.MIN.toString = $estr;
js.mocha.Reporter.MIN.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.NYAN = ["NYAN",10];
js.mocha.Reporter.NYAN.toString = $estr;
js.mocha.Reporter.NYAN.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.PROGRESS = ["PROGRESS",11];
js.mocha.Reporter.PROGRESS.toString = $estr;
js.mocha.Reporter.PROGRESS.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.SPEC = ["SPEC",12];
js.mocha.Reporter.SPEC.toString = $estr;
js.mocha.Reporter.SPEC.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.TAP = ["TAP",13];
js.mocha.Reporter.TAP.toString = $estr;
js.mocha.Reporter.TAP.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.TEAMCITY = ["TEAMCITY",14];
js.mocha.Reporter.TEAMCITY.toString = $estr;
js.mocha.Reporter.TEAMCITY.__enum__ = js.mocha.Reporter;
js.mocha.Reporter.XUNIT = ["XUNIT",15];
js.mocha.Reporter.XUNIT.toString = $estr;
js.mocha.Reporter.XUNIT.__enum__ = js.mocha.Reporter;
js.mocha.Mocha = function() { }
js.mocha.Mocha.__name__ = true;
js.mocha.Mocha.setup = function(opts) {
	opts.ui = Std.string(opts.ui).toLowerCase();
	if(Reflect.hasField(opts,"reporter")) opts.reporter = Std.string(opts.reporter).toLowerCase();
	js.mocha.Mocha._mocha.setup(opts);
}
js.mocha.Mocha.run = function() {
	js.mocha.Mocha._mocha.run();
}
js.mocha.Mocha.timeout = function(milliseconds) {
	return js.mocha.Mocha._mocha.timeout(milliseconds);
}
js.mocha.Mocha.reporter = function(reporter) {
	return js.mocha.Mocha._mocha.reporter(reporter);
}
js.mocha.Mocha.bail = function() {
	js.mocha.Mocha._mocha.bail();
}
js.mocha.M = function() { }
js.mocha.M.__name__ = true;
js.mocha.M.describe = function(description,spec) {
	describe(description, spec);
}
js.mocha.M.describeOnly = function(description,spec) {
	describe.only(description, spec);
}
js.mocha.M.describeSkip = function(description,spec) {
	describe.skip(description, spec);
}
js.mocha.M.it = function(description,func) {
	it(description, func);
}
js.mocha.M.itOnly = function(description,func) {
	it.only(description, func);
}
js.mocha.M.itSkip = function(description,func) {
	it.skip(description, func);
}
js.mocha.M.before = function(func) {
	before(func);
}
js.mocha.M.after = function(func) {
	after(func);
}
js.mocha.M.beforeEach = function(func) {
	beforeEach(func);
}
js.mocha.M.afterEach = function(func) {
	afterEach(func);
}
js.mocha.M.suite = function(description,suite) {
	suite(description, suite);
}
js.mocha.M.setup = function(func) {
	setup(func);
}
js.mocha.M.test = function(description,test) {
	test(description, test);
}
js.mocha.M.teardown = function(func) {
	teardown(func);
}
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
String.__name__ = true;
Array.__name__ = true;
if(typeof expect !== 'undefined') js.expect.E._expect = expect; else if(typeof require !== 'undefined') js.expect.E._expect = require('expect.js'); else throw "make sure to include expect.js";
js.mocha.Mocha._mocha = mocha;
HundredSpecs.main();
})();
