var AdminBro = (function (React, reactRedux, reactRouterDom, styled, reactI18next, i18n, styledSystem, CarbonIcons, ReactDatePicker, reactRouter, axios, flat, redux, reactDom, PropTypes$1, Select$1) {
	'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	var styled__default = 'default' in styled ? styled['default'] : styled;
	i18n = i18n && Object.prototype.hasOwnProperty.call(i18n, 'default') ? i18n['default'] : i18n;
	ReactDatePicker = ReactDatePicker && Object.prototype.hasOwnProperty.call(ReactDatePicker, 'default') ? ReactDatePicker['default'] : ReactDatePicker;
	axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;
	var flat__default = 'default' in flat ? flat['default'] : flat;
	var reactDom__default = 'default' in reactDom ? reactDom['default'] : reactDom;
	PropTypes$1 = PropTypes$1 && Object.prototype.hasOwnProperty.call(PropTypes$1, 'default') ? PropTypes$1['default'] : PropTypes$1;
	Select$1 = Select$1 && Object.prototype.hasOwnProperty.call(Select$1, 'default') ? Select$1['default'] : Select$1;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	   module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var regenerator = runtime_1;

	let globalAny = {};

	try {
	  globalAny = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}
	/**
	 * Params for a record action
	 * @alias RecordActionParams
	 * @memberof ViewHelpers
	 */


	const runDate = new Date();
	/**
	 * Collection of helper methods available in the views
	 */

	class ViewHelpers {
	  constructor({
	    options
	  } = {}) {
	    let opts = ViewHelpers.getPaths(options);
	    opts = opts || {
	      rootPath: '/admin'
	    }; // when ViewHelpers are used on the frontend, paths are taken from global Redux State

	    this.options = opts;
	  }

	  static getPaths(options) {
	    return options || globalAny.REDUX_STATE?.paths;
	  }
	  /**
	   * To each related path adds rootPath passed by the user, as well as a query string
	   * @private
	   * @param  {Array<string>} [paths]      list of parts of the url
	   * @return {string}       path
	   * @return {query}        [search=''] query string which can be fetch
	   *                                    from `location.search`
	   */


	  urlBuilder(paths = [], search = '') {
	    const separator = '/';
	    const replace = new RegExp(`${separator}{1,}`, 'g');
	    let {
	      rootPath
	    } = this.options;

	    if (!rootPath.startsWith(separator)) {
	      rootPath = `${separator}${rootPath}`;
	    }

	    const parts = [rootPath, ...paths];
	    return `${parts.join(separator).replace(replace, separator)}${search}`;
	  }
	  /**
	   * Returns login URL
	   * @return {string}
	   */


	  loginUrl() {
	    return this.options.loginPath;
	  }
	  /**
	   * Returns logout URL
	   * @return {string}
	   */


	  logoutUrl() {
	    return this.options.logoutPath;
	  }
	  /**
	   * Returns URL for the dashboard
	   * @return {string}
	   */


	  dashboardUrl() {
	    return this.options.rootPath;
	  }
	  /**
	   * Returns URL for given page name
	   * @param {string} pageName       page name which is a unique key specified in
	   *                                {@link AdminBroOptions}
	   * @return {string}
	   */


	  pageUrl(pageName) {
	    return this.urlBuilder(['pages', pageName]);
	  }

	  designSystemUrl() {
	    return this.urlBuilder(['design-system']);
	  }
	  /**
	   * Returns resourceAction url
	   *
	   * @param   {ResourceActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  resourceActionUrl({
	    resourceId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'actions', actionName], search);
	  }

	  resourceUrl({
	    resourceId,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId], search);
	  }
	  /**
	   * Returns recordAction url
	   *
	   * @param   {RecordActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.recordId
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  recordActionUrl({
	    resourceId,
	    recordId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'records', recordId, actionName], search);
	  }
	  /**
	   * Returns bulkAction url
	   *
	   * @param   {BulkActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  [options.recordIds]
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  bulkActionUrl({
	    resourceId,
	    recordIds,
	    actionName,
	    search
	  }) {
	    const url = this.urlBuilder(['resources', resourceId, 'bulk', actionName]);

	    if (recordIds && recordIds.length) {
	      const query = new URLSearchParams(search);
	      query.set('recordIds', recordIds.join(','));
	      return `${url}?${query.toString()}`;
	    }

	    return `${url}${search || ''}`;
	  }
	  /**
	   * Returns absolute path to a given asset.
	   * @private
	   *
	   * @param  {string} asset
	   * @return {string}
	   */


	  assetPath(asset) {
	    if (this.options.assetsCDN) {
	      const url = new URL(asset, this.options.assetsCDN).href; // adding timestamp to the href invalidates the CDN cache

	      return `${url}?date=${runDate.getTime()}`;
	    }

	    return this.urlBuilder(['frontend', 'assets', asset]);
	  }

	}

	// eslint-disable-next-line import/prefer-default-export
	const cssClass = (className, regularClass) => {
	  let names = [];

	  if (className.join) {
	    names = className;
	  } else {
	    names = [className];
	  }

	  const parsed = names.map(name => `admin-bro_${name}`);

	  if (regularClass) {
	    parsed.push(regularClass);
	  }

	  return parsed.join(' ');
	};

	/**
	 * Prop Types of an Button component.
	 * Apart from those defined below it extends all {@link ColorProps}, {@link SpaceProps}
	 * and {@link TypographyProps}
	 *
	 * @memberof Badge
	 * @alias BadgeProps
	 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
	 *                          and {@link TypographyProps}
	 */

	const variantStyle = (variantColor, props) => ({
	  bg: variantColor,
	  borderColor: variantColor,
	  color: props.outline ? variantColor : 'white'
	});

	const colorVariant = props => styledSystem.variant({
	  variants: {
	    primary: variantStyle('primary100', props),
	    danger: variantStyle('error', props),
	    success: variantStyle('success', props),
	    info: variantStyle('info', props),
	    secondary: variantStyle('accent', props)
	  }
	});

	const sizeVariants = styledSystem.variant({
	  prop: 'size',
	  variants: {
	    sm: {
	      py: 'xs'
	    },
	    lg: {
	      py: 'default',
	      px: '10px'
	    }
	  }
	});
	/**
	 * Component representing a badge.
	 *
	 * Usage
	 * ```javascript
	 * import { Badge, BadgeProps } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Atoms
	 * @example <caption>Color variants</caption>
	 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
	 * return (
	 * <Box py="lg">
	 *   <Badge mb="default" mr="default">default</Badge>
	 *   {variants.map(variant => (
	 *     <Badge mb="default" variant={variant} mr="default">{variant}</Badge>
	 *   ))}
	 * </Box>
	 * )
	 * @example <caption>Outline badges</caption>
	 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
	 * return (
	 * <Box py="lg">
	 *   <Badge mb="default" mr="default" outline>default</Badge>
	 *   {variants.map(variant => (
	 *     <Badge mb="default" variant={variant} mr="default" outline>{variant}</Badge>
	 *   ))}
	 * </Box>
	 * )
	 * @example <caption>Different sizes</caption>
	 * return (
	 * <Box py="lg">
	 *   <Badge ml="default" variant="primary" size="sm">small</Badge>
	 *   <Badge ml="default" variant="primary">regular</Badge>
	 *   <Badge ml="default" variant="primary" size="lg">large</Badge>
	 * </Box>
	 * )
	 */

	const Badge = styled__default.span.withConfig({
	  displayName: "badge__Badge",
	  componentId: "sc-1soge6a-0"
	})(["border-radius:12px;border:1px solid ", ";color:", ";vertical-align:middle;font-family:", ";", ";", ";", ";", ";", ";", ""], ({
	  theme
	}) => theme.colors.grey40, ({
	  outline,
	  theme
	}) => outline ? theme.colors.grey60 : theme.colors.white, ({
	  theme
	}) => theme.font, styledSystem.space, styledSystem.color, styledSystem.typography, props => colorVariant(props), sizeVariants, ({
	  outline
	}) => outline ? 'background: transparent;' : '');
	Badge.defaultProps = {
	  px: 'default',
	  py: '6px',
	  fontSize: 'xs',
	  bg: 'grey40',
	  className: cssClass('Badge')
	};

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct()) {
	    _construct = Reflect.construct;
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !_isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return _setPrototypeOf(Wrapper, Class);
	  };

	  return _wrapNativeSuper(Class);
	}

	// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

	/**
	 * Parse errors.md and turn it into a simple hash of code: message
	 * @private
	 */
	var ERRORS = {
	  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
	  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
	  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
	  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
	  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
	  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
	  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
	  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
	  "9": "Please provide a number of steps to the modularScale helper.\n\n",
	  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
	  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
	  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
	  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
	  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
	  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
	  "16": "You must provide a template to this method.\n\n",
	  "17": "You passed an unsupported selector state to this method.\n\n",
	  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
	  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
	  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
	  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
	  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
	  "23": "fontFace expects a name of a font-family.\n\n",
	  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
	  "25": "fontFace expects localFonts to be an array.\n\n",
	  "26": "fontFace expects fileFormats to be an array.\n\n",
	  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
	  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
	  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
	  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
	  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
	  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
	  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
	  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
	  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
	  "36": "Property must be a string value.\n\n",
	  "37": "Syntax Error at %s.\n\n",
	  "38": "Formula contains a function that needs parentheses at %s.\n\n",
	  "39": "Formula is missing closing parenthesis at %s.\n\n",
	  "40": "Formula has too many closing parentheses at %s.\n\n",
	  "41": "All values in a formula must have the same unit or be unitless.\n\n",
	  "42": "Please provide a number of steps to the modularScale helper.\n\n",
	  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
	  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
	  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
	  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
	  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
	  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
	  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
	  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
	  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
	  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
	  "53": "fontFace expects localFonts to be an array.\n\n",
	  "54": "fontFace expects fileFormats to be an array.\n\n",
	  "55": "fontFace expects a name of a font-family.\n\n",
	  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
	  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
	  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
	  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
	  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
	  "61": "Property must be a string value.\n\n",
	  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
	  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
	  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
	  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
	  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
	  "67": "You must provide a template to this method.\n\n",
	  "68": "You passed an unsupported selector state to this method.\n\n",
	  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
	  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
	  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
	  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
	  "73": "Please provide a valid CSS variable.\n\n",
	  "74": "CSS variable not found.\n"
	};
	/**
	 * super basic version of sprintf
	 * @private
	 */

	function format() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var a = args[0];
	  var b = [];
	  var c;

	  for (c = 1; c < args.length; c += 1) {
	    b.push(args[c]);
	  }

	  b.forEach(function (d) {
	    a = a.replace(/%[a-z]/, d);
	  });
	  return a;
	}
	/**
	 * Create an error file out of errors.md for development and a simple web link to the full errors
	 * in production mode.
	 * @private
	 */


	var PolishedError = /*#__PURE__*/function (_Error) {
	  _inheritsLoose(PolishedError, _Error);

	  function PolishedError(code) {
	    var _this;

	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
	    }

	    return _assertThisInitialized(_this);
	  }

	  return PolishedError;
	}( /*#__PURE__*/_wrapNativeSuper(Error));

	function colorToInt(color) {
	  return Math.round(color * 255);
	}

	function convertToInt(red, green, blue) {
	  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
	}

	function hslToRgb(hue, saturation, lightness, convert) {
	  if (convert === void 0) {
	    convert = convertToInt;
	  }

	  if (saturation === 0) {
	    // achromatic
	    return convert(lightness, lightness, lightness);
	  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


	  var huePrime = (hue % 360 + 360) % 360 / 60;
	  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
	  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
	  var red = 0;
	  var green = 0;
	  var blue = 0;

	  if (huePrime >= 0 && huePrime < 1) {
	    red = chroma;
	    green = secondComponent;
	  } else if (huePrime >= 1 && huePrime < 2) {
	    red = secondComponent;
	    green = chroma;
	  } else if (huePrime >= 2 && huePrime < 3) {
	    green = chroma;
	    blue = secondComponent;
	  } else if (huePrime >= 3 && huePrime < 4) {
	    green = secondComponent;
	    blue = chroma;
	  } else if (huePrime >= 4 && huePrime < 5) {
	    red = secondComponent;
	    blue = chroma;
	  } else if (huePrime >= 5 && huePrime < 6) {
	    red = chroma;
	    blue = secondComponent;
	  }

	  var lightnessModification = lightness - chroma / 2;
	  var finalRed = red + lightnessModification;
	  var finalGreen = green + lightnessModification;
	  var finalBlue = blue + lightnessModification;
	  return convert(finalRed, finalGreen, finalBlue);
	}

	var namedColorMap = {
	  aliceblue: 'f0f8ff',
	  antiquewhite: 'faebd7',
	  aqua: '00ffff',
	  aquamarine: '7fffd4',
	  azure: 'f0ffff',
	  beige: 'f5f5dc',
	  bisque: 'ffe4c4',
	  black: '000',
	  blanchedalmond: 'ffebcd',
	  blue: '0000ff',
	  blueviolet: '8a2be2',
	  brown: 'a52a2a',
	  burlywood: 'deb887',
	  cadetblue: '5f9ea0',
	  chartreuse: '7fff00',
	  chocolate: 'd2691e',
	  coral: 'ff7f50',
	  cornflowerblue: '6495ed',
	  cornsilk: 'fff8dc',
	  crimson: 'dc143c',
	  cyan: '00ffff',
	  darkblue: '00008b',
	  darkcyan: '008b8b',
	  darkgoldenrod: 'b8860b',
	  darkgray: 'a9a9a9',
	  darkgreen: '006400',
	  darkgrey: 'a9a9a9',
	  darkkhaki: 'bdb76b',
	  darkmagenta: '8b008b',
	  darkolivegreen: '556b2f',
	  darkorange: 'ff8c00',
	  darkorchid: '9932cc',
	  darkred: '8b0000',
	  darksalmon: 'e9967a',
	  darkseagreen: '8fbc8f',
	  darkslateblue: '483d8b',
	  darkslategray: '2f4f4f',
	  darkslategrey: '2f4f4f',
	  darkturquoise: '00ced1',
	  darkviolet: '9400d3',
	  deeppink: 'ff1493',
	  deepskyblue: '00bfff',
	  dimgray: '696969',
	  dimgrey: '696969',
	  dodgerblue: '1e90ff',
	  firebrick: 'b22222',
	  floralwhite: 'fffaf0',
	  forestgreen: '228b22',
	  fuchsia: 'ff00ff',
	  gainsboro: 'dcdcdc',
	  ghostwhite: 'f8f8ff',
	  gold: 'ffd700',
	  goldenrod: 'daa520',
	  gray: '808080',
	  green: '008000',
	  greenyellow: 'adff2f',
	  grey: '808080',
	  honeydew: 'f0fff0',
	  hotpink: 'ff69b4',
	  indianred: 'cd5c5c',
	  indigo: '4b0082',
	  ivory: 'fffff0',
	  khaki: 'f0e68c',
	  lavender: 'e6e6fa',
	  lavenderblush: 'fff0f5',
	  lawngreen: '7cfc00',
	  lemonchiffon: 'fffacd',
	  lightblue: 'add8e6',
	  lightcoral: 'f08080',
	  lightcyan: 'e0ffff',
	  lightgoldenrodyellow: 'fafad2',
	  lightgray: 'd3d3d3',
	  lightgreen: '90ee90',
	  lightgrey: 'd3d3d3',
	  lightpink: 'ffb6c1',
	  lightsalmon: 'ffa07a',
	  lightseagreen: '20b2aa',
	  lightskyblue: '87cefa',
	  lightslategray: '789',
	  lightslategrey: '789',
	  lightsteelblue: 'b0c4de',
	  lightyellow: 'ffffe0',
	  lime: '0f0',
	  limegreen: '32cd32',
	  linen: 'faf0e6',
	  magenta: 'f0f',
	  maroon: '800000',
	  mediumaquamarine: '66cdaa',
	  mediumblue: '0000cd',
	  mediumorchid: 'ba55d3',
	  mediumpurple: '9370db',
	  mediumseagreen: '3cb371',
	  mediumslateblue: '7b68ee',
	  mediumspringgreen: '00fa9a',
	  mediumturquoise: '48d1cc',
	  mediumvioletred: 'c71585',
	  midnightblue: '191970',
	  mintcream: 'f5fffa',
	  mistyrose: 'ffe4e1',
	  moccasin: 'ffe4b5',
	  navajowhite: 'ffdead',
	  navy: '000080',
	  oldlace: 'fdf5e6',
	  olive: '808000',
	  olivedrab: '6b8e23',
	  orange: 'ffa500',
	  orangered: 'ff4500',
	  orchid: 'da70d6',
	  palegoldenrod: 'eee8aa',
	  palegreen: '98fb98',
	  paleturquoise: 'afeeee',
	  palevioletred: 'db7093',
	  papayawhip: 'ffefd5',
	  peachpuff: 'ffdab9',
	  peru: 'cd853f',
	  pink: 'ffc0cb',
	  plum: 'dda0dd',
	  powderblue: 'b0e0e6',
	  purple: '800080',
	  rebeccapurple: '639',
	  red: 'f00',
	  rosybrown: 'bc8f8f',
	  royalblue: '4169e1',
	  saddlebrown: '8b4513',
	  salmon: 'fa8072',
	  sandybrown: 'f4a460',
	  seagreen: '2e8b57',
	  seashell: 'fff5ee',
	  sienna: 'a0522d',
	  silver: 'c0c0c0',
	  skyblue: '87ceeb',
	  slateblue: '6a5acd',
	  slategray: '708090',
	  slategrey: '708090',
	  snow: 'fffafa',
	  springgreen: '00ff7f',
	  steelblue: '4682b4',
	  tan: 'd2b48c',
	  teal: '008080',
	  thistle: 'd8bfd8',
	  tomato: 'ff6347',
	  turquoise: '40e0d0',
	  violet: 'ee82ee',
	  wheat: 'f5deb3',
	  white: 'fff',
	  whitesmoke: 'f5f5f5',
	  yellow: 'ff0',
	  yellowgreen: '9acd32'
	};
	/**
	 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
	 * @private
	 */

	function nameToHex(color) {
	  if (typeof color !== 'string') return color;
	  var normalizedColorName = color.toLowerCase();
	  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
	}

	var hexRegex = /^#[a-fA-F0-9]{6}$/;
	var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
	var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
	var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
	var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
	var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
	var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
	var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
	/**
	 * Returns an RgbColor or RgbaColor object. This utility function is only useful
	 * if want to extract a color component. With the color util `toColorString` you
	 * can convert a RgbColor or RgbaColor object back to a string.
	 *
	 * @example
	 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
	 * const color1 = parseToRgb('rgb(255, 0, 0)');
	 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
	 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
	 */

	function parseToRgb(color) {
	  if (typeof color !== 'string') {
	    throw new PolishedError(3);
	  }

	  var normalizedColor = nameToHex(color);

	  if (normalizedColor.match(hexRegex)) {
	    return {
	      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
	      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
	      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
	    };
	  }

	  if (normalizedColor.match(hexRgbaRegex)) {
	    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
	    return {
	      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
	      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
	      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
	      alpha: alpha
	    };
	  }

	  if (normalizedColor.match(reducedHexRegex)) {
	    return {
	      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
	      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
	      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
	    };
	  }

	  if (normalizedColor.match(reducedRgbaHexRegex)) {
	    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

	    return {
	      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
	      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
	      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
	      alpha: _alpha
	    };
	  }

	  var rgbMatched = rgbRegex.exec(normalizedColor);

	  if (rgbMatched) {
	    return {
	      red: parseInt("" + rgbMatched[1], 10),
	      green: parseInt("" + rgbMatched[2], 10),
	      blue: parseInt("" + rgbMatched[3], 10)
	    };
	  }

	  var rgbaMatched = rgbaRegex.exec(normalizedColor);

	  if (rgbaMatched) {
	    return {
	      red: parseInt("" + rgbaMatched[1], 10),
	      green: parseInt("" + rgbaMatched[2], 10),
	      blue: parseInt("" + rgbaMatched[3], 10),
	      alpha: parseFloat("" + rgbaMatched[4])
	    };
	  }

	  var hslMatched = hslRegex.exec(normalizedColor);

	  if (hslMatched) {
	    var hue = parseInt("" + hslMatched[1], 10);
	    var saturation = parseInt("" + hslMatched[2], 10) / 100;
	    var lightness = parseInt("" + hslMatched[3], 10) / 100;
	    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
	    var hslRgbMatched = rgbRegex.exec(rgbColorString);

	    if (!hslRgbMatched) {
	      throw new PolishedError(4, normalizedColor, rgbColorString);
	    }

	    return {
	      red: parseInt("" + hslRgbMatched[1], 10),
	      green: parseInt("" + hslRgbMatched[2], 10),
	      blue: parseInt("" + hslRgbMatched[3], 10)
	    };
	  }

	  var hslaMatched = hslaRegex.exec(normalizedColor);

	  if (hslaMatched) {
	    var _hue = parseInt("" + hslaMatched[1], 10);

	    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

	    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

	    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

	    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

	    if (!_hslRgbMatched) {
	      throw new PolishedError(4, normalizedColor, _rgbColorString);
	    }

	    return {
	      red: parseInt("" + _hslRgbMatched[1], 10),
	      green: parseInt("" + _hslRgbMatched[2], 10),
	      blue: parseInt("" + _hslRgbMatched[3], 10),
	      alpha: parseFloat("" + hslaMatched[4])
	    };
	  }

	  throw new PolishedError(5);
	}

	var focusShadowStyle = (theme => {
	  const rgb = parseToRgb(theme.colors.accent);
	  const color = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, .58)`;
	  return `0 1px 4px 0 ${color};`;
	});

	const variantShared = {
	  color: 'white',
	  'border-color': 'transparent',
	  [`& .${cssClass('Icon')} svg`]: {
	    fill: 'white'
	  },
	  '&:disabled': {
	    bg: 'grey40'
	  }
	};
	const buttonVariants = styledSystem.variant({
	  variants: {
	    primary: {
	      bg: 'primary100',
	      '&:hover': {
	        bg: 'hoverBg'
	      },
	      className: cssClass(['Button', 'Button_Primary']),
	      ...variantShared
	    },
	    danger: {
	      bg: 'error',
	      '&:hover': {
	        bg: 'errorDark'
	      },
	      className: cssClass(['Button', 'Button_Danger']),
	      ...variantShared
	    },
	    success: {
	      bg: 'success',
	      '&:hover': {
	        bg: 'successDark'
	      },
	      className: cssClass(['Button', 'Button_Success']),
	      ...variantShared
	    },
	    info: {
	      bg: 'info',
	      '&:hover': {
	        bg: 'infoDark'
	      },
	      className: cssClass(['Button', 'Button_Info']),
	      ...variantShared
	    },
	    secondary: {
	      bg: 'accent',
	      className: cssClass(['Button', 'Button_Secondary']),
	      ...variantShared
	    },
	    text: {
	      bg: 'transparent',
	      borderColor: 'transparent',
	      '&:disabled': {
	        'border-color': 'transparent'
	      },
	      '&:hover': {
	        background: 'transparent',
	        color: 'hoverBg',
	        'border-color': 'transparent',
	        'text-decoration': 'underline'
	      },
	      '&:focus': {
	        background: 'transparent',
	        'border-color': 'transparent'
	      },
	      '& svg': {
	        fill: 'primary100'
	      },
	      '&:hover svg': {
	        fill: 'hoverBg'
	      },
	      className: cssClass(['Button', 'Button_Text'])
	    }
	  }
	});
	const sizeVariants$1 = styledSystem.variant({
	  prop: 'size',
	  variants: {
	    sm: {
	      fontSize: 'default',
	      py: 'sm',
	      px: 'xxl',
	      [`& .${cssClass('Icon')}`]: {
	        paddingRight: 'sm'
	      }
	    },
	    lg: {
	      py: 'default',
	      lineHeight: 'lg'
	    },
	    icon: {
	      py: 'default',
	      px: 'default',
	      lineHeight: 'sm',
	      minWidth: '34px',
	      height: '34px',
	      [`& .${cssClass('Icon')}`]: {
	        padding: 0
	      }
	    }
	  }
	});
	/**
	 * Prop Types of an Button component.
	 * Apart from those defined below it extends all {@link ColorProps}, {@link SpaceProps}
	 * and {@link TypographyProps}
	 *
	 * @memberof Button
	 * @alias ButtonProps
	 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
	 *                          and {@link TypographyProps}
	 */

	/**
	 * Button CSS Styles which can be reused in another button-like component with styled-components
	 *
	 * Usage:
	 * ```
	 * import { ButtonCSS } from 'admin-bro'
	 * import { Link } from 'react-router-dom'
	 *
	 * const MyStyledLink = styled(Link)`
	 *   ${ButtonCSS}
	 * `
	 * ```
	 * @memberof Button
	 * @alias ButtonCSS
	 */
	const ButtonCSS = styled.css(["outline:0;display:inline-block;font-family:", ";line-height:", ";border:1px solid ", ";color:", ";cursor:pointer;text-decoration:none;padding:", " ", ";box-sizing:border-box;& > .", "{padding-bottom:2px;vertical-align:middle;padding-right:", ";}& .", " svg{width:16px;height:16px;fill:", ";}&:hover{color:", ";background:", ";border-color:", ";& .", " svg{fill:", ";}}&:focus{border-color:", ";", ";}&:disabled{color:", ";border-color:", ";background:", ";cursor:default;& .", " svg{fill:", ";}}", ";", ";", ";", ";", ";", ";"], ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.lineHeights.lg, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.default, ({
	  theme
	}) => theme.space.x3, cssClass('Icon'), ({
	  theme
	}) => theme.space.default, cssClass('Icon'), ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.colors.hoverBg, ({
	  theme
	}) => theme.colors.hoverBg, cssClass('Icon'), ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.colors.accent, ({
	  theme
	}) => `box-shadow: ${focusShadowStyle(theme)}`, ({
	  theme
	}) => theme.colors.grey60, ({
	  theme
	}) => theme.colors.grey80, ({
	  theme
	}) => theme.colors.white, cssClass('Icon'), ({
	  theme
	}) => theme.colors.grey60, ({
	  rounded
	}) => rounded ? 'border-radius: 9999px' : '', styledSystem.color, styledSystem.space, styledSystem.typography, buttonVariants, sizeVariants$1);
	/**
	 * Buttons make common actions immediately visible and easy to perform with one click or tap.
	 * They can be used for any type of action.
	 *
	 * * Usage
	 * ```javascript
	 * import { Button, ButtonCSS, ButtonProps } from 'admin-bro'
	 * ```
	 * @component
	 * @subcategory Atoms
	 * @example <caption>Color variants</caption>
	 * const variants = ['primary', 'danger', 'success', 'info', 'secondary', 'text']
	 * return (
	 * <Box py="lg">
	 *   <Button mb="default" mr="default">default</Button>
	 *   {variants.map(variant => (
	 *     <Button mb="default" variant={variant} mr="default">{variant}</Button>
	 *   ))}
	 * </Box>
	 * )
	 * @example <caption>Size variants</caption>
	 * return (
	 * <Box py="lg">
	 *   <Button size="sm">Small</Button>
	 *   <Button ml="default">Regular size</Button>
	 *   <Button size="lg" ml="default">Large</Button>
	 * </Box>
	 * )
	 * @example <caption>Icons</caption>
	 * return (
	 * <Box py="lg">
	 *  <Button mr="default">
	 *    <Icon icon="Settings" />
	 *    With icon
	 *  </Button>
	 *  <Button size="icon" mr="default"><Icon icon="Settings" /></Button>
	 *  <Button rounded size="icon" mr="default"><Icon icon="Settings" /></Button>
	 *  <Button variant="danger" mr="default">
	 *    <Icon icon="Delete" />
	 *    Delete me
	 *  </Button>
	 *  <Button mr="default" variant="text" size="sm">
	 *    <Icon icon="Add" />
	 *    Create new item
	 *  </Button>
	 * </Box>
	 * )
	 * @example <caption>State</caption>
	 * return (
	 * <Box py="lg">
	 *   <Button disabled>Disabled</Button>
	 *   <Button ml="default" variant="primary" disabled>Disabled</Button>
	 * </Box>
	 * )
	 *
	 */

	const Button = styled__default.button.withConfig({
	  displayName: "button__Button",
	  componentId: "sc-3bpuam-0"
	})(["", ""], ButtonCSS);
	Button.defaultProps = {
	  fontSize: 'default',
	  bg: 'transparent',
	  className: cssClass('Button')
	};

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	/**
	 * Prop Types of a Label component.
	 * Apart from those explicitly specified below it extends all {@link ColorProps},
	 * {@link SpaceProps} and {@link TypographyProps}
	 *
	 * @memberof Label
	 * @alias LabelProps
	 * @property {string} [...] All props default to _label_ html component like `htmlFor`,
	 *                          `id` etc.
	 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
	 *                          and {@link TypographyProps}
	 */

	/**
	 * Styled form of <label> element.
	 *
	 * Usage:
	 * ```javascript
	 * import { Label, LabelProps } from 'admin-bro'
	 * ```
	 * @component
	 * @subcategory Atoms
	 * @example <caption>2 Different versions</caption>
	 * return (
	 * <Box p="xl">
	 *   <Text>
	 *     <Label uppercase>Some uppercase label</Label>
	 *   </Text>
	 *   <Text mt="default">
	 *     <Label required>Label for required field</Label>
	 *   </Text>
	 * </Box>
	 * )
	 */
	const Label = styled__default.label.withConfig({
	  displayName: "label__Label",
	  componentId: "sc-17sbdx9-0"
	})(["display:", ";font-family:", ";font-size:", ";line-height:", ";margin-bottom:", ";&:before{content:\"", "\";color:", ";margin-right:", ";display:", ";}", " ", ";", ";", ";", ""], ({
	  inline
	}) => inline ? 'inline-block' : 'block', ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.fontSizes.sm, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme,
	  inline
	}) => inline ? '0' : theme.space.default, ({
	  required
	}) => required ? '*' : '', ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.sm, ({
	  required
	}) => required ? 'block-inline' : 'none', ({
	  uppercase
	}) => uppercase ? 'text-transform: uppercase;' : '', styledSystem.color, styledSystem.typography, styledSystem.space, ({
	  disabled,
	  theme
	}) => disabled ? `color: ${theme.colors.grey40};` : '');
	Label.defaultProps = {
	  className: cssClass('Label')
	};

	const Icon = styled__default.svg.withConfig({
	  displayName: "check-box__Icon",
	  componentId: "sc-11ip8bm-0"
	})(["fill:none;stroke:white;stroke-width:2px;"]);
	const CheckboxRadioContainer = styled__default.span.withConfig({
	  displayName: "check-box__CheckboxRadioContainer",
	  componentId: "sc-11ip8bm-1"
	})(["display:inline-block;vertical-align:middle;& + ", "{margin-left:", ";vertical-align:middle;margin-bottom:", ";}"], Label, ({
	  theme
	}) => theme.space.default, ({
	  theme
	}) => theme.space.sm); // Hide checkbox visually but remain accessible to screen readers.
	// Source: https://polished.js.org/docs/#hidevisually

	const HiddenCheckbox = styled__default.input.attrs({
	  type: 'checkbox'
	}).withConfig({
	  displayName: "check-box__HiddenCheckbox",
	  componentId: "sc-11ip8bm-2"
	})(["border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);

	const checkboxBackground = (theme, checked, disabled) => {
	  if (checked) {
	    return disabled ? theme.colors.grey40 : theme.colors.primary100;
	  }

	  return theme.colors.white;
	};

	const StyledCheckbox = styled__default.a.withConfig({
	  displayName: "check-box__StyledCheckbox",
	  componentId: "sc-11ip8bm-3"
	})(["display:inline-block;width:16px;font-size:12px;cursor:pointer;border:1px solid ", ";height:16px;background:", ";transition:all 150ms;position:relative;", ":focus + &{", ";}", ":hover + &{border-color:", ";}", "{visibility:", ";}&:after{content:'';position:absolute;left:-5px;top:-5px;width:24px;height:24px;opacity:0;background:", ";}&:after:before{opacity:0.1;}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  checked,
	  theme,
	  disabled
	}) => checkboxBackground(theme, checked, disabled), HiddenCheckbox, ({
	  theme
	}) => `box-shadow: ${focusShadowStyle(theme)};`, HiddenCheckbox, ({
	  theme
	}) => theme.colors.grey60, Icon, props => props.checked ? 'visible' : 'hidden', ({
	  theme
	}) => theme.colors.primary100);

	/**
	 * @typedef {object} CheckBoxProps
	 * @alias CheckBoxProps
	 * @memberof CheckBox
	 * @property {string} [...] All props default to _checkbox_ html input like `onChange`,
	 *                          `checked` etc.
	 */

	/**
	 * Wrapped checkbox input.
	 *
	 * Usage:
	 * ```javascript
	 * import { CheckBox, CheckBoxProps } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Atoms
	 * @example
	 * return (
	 *   <Box p="xl">
	 *      <CheckBox id="checkbox1"/>
	 *      <Label inline htmlFor="checkbox1" ml="default">Some example label</Label>
	 *   </Box>
	 * )
	 */
	const CheckBox = props => {
	  const {
	    className,
	    checked,
	    onChange,
	    disabled,
	    ...restProps
	  } = props;
	  const [isChecked, setChecked] = React.useState(checked ?? false);

	  const handleChange = event => {
	    if (onChange) {
	      onChange(event);
	    } else {
	      setChecked(!event.target.checked);
	    }
	  };

	  React.useEffect(() => {
	    setChecked(checked ?? false);
	  }, [checked]);
	  return /*#__PURE__*/React__default.createElement(CheckboxRadioContainer, {
	    className: [className ?? '', 'admin-bro_Checkbox'].join(' ')
	  }, /*#__PURE__*/React__default.createElement(HiddenCheckbox, _extends_1({
	    checked: isChecked,
	    onChange: handleChange
	  }, restProps, {
	    disabled: disabled
	  })), /*#__PURE__*/React__default.createElement(StyledCheckbox, {
	    checked: isChecked,
	    disabled: disabled,
	    onClick: event => handleChange && handleChange(event)
	  }, /*#__PURE__*/React__default.createElement(Icon, {
	    viewBox: "0 0 24 24"
	  }, /*#__PURE__*/React__default.createElement("polyline", {
	    points: "20 6 9 17 4 12"
	  }))));
	};

	const Circle = styled__default.span.withConfig({
	  displayName: "radio__Circle",
	  componentId: "i3rnxq-0"
	})(["display:block;width:8px;height:8px;margin-left:-4px;margin-top:-4px;border-radius:9999px;background:", ";position:absolute;top:50%;left:50%;"], ({
	  theme
	}) => theme.colors.white); // Hide checkbox visually but remain accessible to screen readers.
	// Source: https://polished.js.org/docs/#hidevisually

	const HiddenRadio = styled__default.input.attrs({
	  type: 'radio'
	}).withConfig({
	  displayName: "radio__HiddenRadio",
	  componentId: "i3rnxq-1"
	})(["border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"]);

	const radioBackground = (theme, checked, disabled) => {
	  if (checked) {
	    return disabled ? theme.colors.grey40 : theme.colors.primary100;
	  }

	  return theme.colors.white;
	};

	const StyledRadio = styled__default.span.withConfig({
	  displayName: "radio__StyledRadio",
	  componentId: "i3rnxq-2"
	})(["display:inline-block;width:16px;cursor:pointer;border:1px solid ", ";border-radius:1000px;height:16px;transition:all 150ms;position:relative;", ":focus + &{", ";}", ":hover + &{border-color:", ";}", "{visibility:", ";}background:", ";"], ({
	  theme
	}) => theme.colors.grey40, HiddenRadio, ({
	  theme
	}) => `box-shadow: ${focusShadowStyle(theme)}`, HiddenRadio, ({
	  theme
	}) => theme.colors.grey60, Circle, ({
	  checked
	}) => checked ? 'visible' : 'hidden', ({
	  checked,
	  theme,
	  disabled
	}) => radioBackground(theme, checked, disabled));

	/**
	 * @typedef {object} RadioProps
	 * @alias RadioProps
	 * @memberof Radio
	 * @property {string} [...] All props default to _radio_ html input like `onChange`,
	 *                          `checked` etc.
	 */

	/**
	 * Wrapped radio input.
	 *
	 * Usage:
	 * ```javascript
	 * import { Radio, RadioProps } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Atoms
	 * @example
	 * return (
	 *   <Box p="xl">
	 *      <Radio id="radio1"/>
	 *      <Label inline htmlFor="radio1" ml="default">Some example label</Label>
	 *   </Box>
	 * )
	 */
	const Radio = props => {
	  const {
	    className,
	    checked,
	    onChange,
	    disabled,
	    ...restProps
	  } = props;
	  const [isChecked, setChecked] = React.useState(checked ?? false);
	  const actuallyChecked = checked ?? isChecked;

	  const handleChange = event => {
	    setChecked(!event.target.checked);

	    if (onChange) {
	      onChange(event);
	    }
	  };

	  return /*#__PURE__*/React__default.createElement(CheckboxRadioContainer, {
	    className: className
	  }, /*#__PURE__*/React__default.createElement(HiddenRadio, _extends_1({
	    checked: actuallyChecked,
	    onChange: handleChange
	  }, restProps, {
	    disabled: disabled
	  })), /*#__PURE__*/React__default.createElement(StyledRadio, {
	    checked: actuallyChecked,
	    onClick: event => handleChange && handleChange(event),
	    disabled: disabled
	  }, /*#__PURE__*/React__default.createElement(Circle, null)));
	};

	const variants = styledSystem.variant({
	  variants: {
	    xs: {
	      fontSize: 'xs'
	    },
	    sm: {
	      fontSize: 'sm'
	    },
	    lg: {
	      fontSize: 'lg'
	    }
	  }
	});
	/**
	 * Prop Types of a Text component.
	 * Apart from variant it extends all {@link ColorProps}, {@link SpaceProps} and
	 * {@link TypographyProps}
	 *
	 * @memberof Text
	 * @alias TextProps
	 * @property {string} [...] Other props from {@link ColorProps}, {@link SpaceProps}
	 *                          and {@link TypographyProps}
	 */

	/**
	 * Use the Text component to control font size, weight, alignment, and color.
	 * By default it is rendered as a `div` but you can change this to other (like `span`)
	 * by using `as` prop,
	 *
	 * Usage:
	 * ```javascript
	 * import { Text, TextProps } from 'admin-bro'
	 * ```
	 * @component
	 * @subcategory Atoms
	 * @example <caption>Lorem ipsum</caption>
	 * return (
	 * <Box>
	 *   <Text>
	 *    In publishing and graphic design,
	 *    Lorem ipsum is a <b>placeholder</b> text commonly used to demonstrate the
	 *    visual form of a document or a typeface without relying on meaningful
	 *    content.
	 *   </Text>
	 *   <Text mt="default" variant="sm">This text was from Wikipedia</Text>
	 * </Box>
	 * )
	 */
	const Text = styled__default.div.withConfig({
	  displayName: "text__Text",
	  componentId: "njgcdt-0"
	})(["font-family:", ";margin:0;padding:0;& b,& strong{font-weight:bold;}", ";", ";", ";", ";", ";"], ({
	  theme
	}) => theme.font, styledSystem.typography, styledSystem.space, styledSystem.layout, styledSystem.color, variants);
	Text.defaultProps = {
	  lineHeight: 'lg',
	  fontSize: 'default',
	  fontWeight: 'normal',
	  className: cssClass('Text')
	};

	const sizeVariants$2 = styledSystem.variant({
	  prop: 'size',
	  variants: {
	    sm: {
	      fontSize: 'xs',
	      py: 'sm'
	    },
	    lg: {
	      fontSize: 'default'
	    }
	  }
	});
	const variants$1 = styledSystem.variant({
	  variants: {
	    primary: {
	      color: 'primary100',
	      '&:hover': {
	        color: 'hoverBg',
	        '& svg': {
	          fill: 'hoverBg'
	        }
	      },
	      '& svg': {
	        fill: 'primary100'
	      }
	    },
	    danger: {
	      color: 'error',
	      '&:hover': {
	        color: 'error'
	      },
	      '& svg': {
	        fill: 'error'
	      }
	    },
	    success: {
	      color: 'success',
	      '&:hover': {
	        color: 'success'
	      },
	      '& svg': {
	        fill: 'success'
	      }
	    },
	    info: {
	      color: 'primary60',
	      '&:hover': {
	        color: 'hoverBg'
	      },
	      '& svg': {
	        fill: 'primary60'
	      }
	    },
	    secondary: {
	      color: 'accent',
	      '&:hover': {
	        color: 'hoverBg'
	      },
	      '& svg': {
	        fill: 'accent'
	      }
	    }
	  }
	});
	/**
	 * Prop Types of a Link component.
	 * Apart from those explicitly specified below it extends all {@link ColorProps},
	 * and {@link SpaceProps}
	 *
	 * @memberof Link
	 * @alias LinkProps
	 * @property {string} [...] All props default to _a_ html component like `href`,
	 *                          `onClick` etc.
	 * @property {string} [...] Other props from {@link ColorProps} and {@link SpaceProps}
	 */

	/**
	 * Styled form of Link element.
	 *
	 * Usage:
	 * ```javascript
	 * import { Link, LinkProps } from 'admin-bro'
	 * ```
	 * @component
	 * @subcategory Atoms
	 * @example <caption>All color variants</caption>
	 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
	 * return (
	 * <Box py="xl">
	 *   {variants.map(variant => (
	 *      <Link href="#" variant={variant} mr="xl">{variant}</Link>
	 *   ))}
	 * </Box>
	 * )
	 * @example <caption>With icons</caption>
	 * return (
	 * <Box py="xl">
	 *   <Link href="#" mr="xl">
	 *     <Icon icon="Add" />
	 *     With an icon
	 *   </Link>
	 * </Box>
	 * )
	 */
	const Link = styled__default.a.withConfig({
	  displayName: "link__Link",
	  componentId: "sc-1uq0k19-0"
	})(["font-family:", ";vertical-align:middle;cursor:pointer;text-decoration:none;&:hover{text-decoration:underline;}& svg{padding-right:", ";vertical-align:text-top;}", " ", ";", ";", ";", ";"], ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.space.default, ({
	  uppercase
	}) => uppercase ? 'text-transform: uppercase;' : '', styledSystem.color, styledSystem.space, sizeVariants$2, variants$1);
	Link.defaultProps = {
	  color: 'grey60',
	  className: cssClass('Link')
	};

	/**
	 * Input CSS Styles which can be reused in another input component with styled-components
	 *
	 * Usage:
	 * ```
	 * import { InputCSS } from 'admin-bro'
	 *
	 * const MyStyledInput = styled.input`
	 *   ${InputCSS}
	 * `
	 * ```
	 * @memberof Input
	 * @alias InputCSS
	 */

	const InputCSS = styled.css(["box-sizing:border-box;color:", ";background:transparent;border:1px solid ", ";font-size:", ";line-height:", ";font-family:", ";outline:none;&:hover{border-color:", ";}&:focus{border-color:", ";", ";}&:disabled{color:", ";}"], ({
	  theme
	}) => theme.colors.grey80, ({
	  theme
	}) => theme.colors.inputBorder, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.lineHeights.lg, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.colors.grey60, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => `box-shadow: ${focusShadowStyle(theme)}`, ({
	  theme
	}) => theme.colors.grey40);
	/**
	 * Prop Types of an Input component.
	 * Apart from variant it extends all {@link LayoutProps} and {@link SpaceProps}
	 *
	 * @memberof Input
	 * @alias InputProps
	 * @property {string} [...] Other props from {@link LayoutProps}, {@link SpaceProps}
	 */

	/**
	 * Wrapped `input` html element.
	 *
	 * Usage:
	 * ```javascript
	 * import { Input, InputProps, InputCSS } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Atoms
	 * @example
	 * return (
	 *   <Box p="xl">
	 *      <Label htmlFor="input1">Some example label</Label>
	 *      <Input id="input1" width={1/2} />
	 *   </Box>
	 * )
	 */
	const Input = styled__default.input.withConfig({
	  displayName: "input__Input",
	  componentId: "sc-19lylr8-0"
	})(["", ";", ";", ";"], InputCSS, styledSystem.space, styledSystem.layout);
	Input.defaultProps = {
	  px: 'default',
	  py: 'sm',
	  className: cssClass('Input')
	};

	/**
	 * Prop Types of a TextArea component.
	 * It extends all {@link SpaceProps}, {@link TypographyProps} and {@link LayoutProps}
	 * @memberof TextArea
	 * @alias TextAreaProps
	 * @property {string} [...] All props default to _textarea_ html component like `onChange`,
	 *                          `value` etc.
	 * @property {string} [...] Props from {@link SpaceProps}, {@link TypographyProps}
	 *                          and {@link LayoutProps}
	 */

	/**
	 * Wrapped `textarea` html element.
	 *
	 * Usage:
	 * ```javascript
	 * import { TextArea, TextAreaProps } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Atoms
	 * @example
	 * return (
	 *   <Box p="xl">
	 *      <Label htmlFor="textarea1">Some example label</Label>
	 *      <TextArea id="textarea1" width={1/2} />
	 *   </Box>
	 * )
	 */
	const TextArea = styled__default.textarea.withConfig({
	  displayName: "text-area__TextArea",
	  componentId: "r7fig8-0"
	})(["", " ", ";", ";", ";"], InputCSS, styledSystem.space, styledSystem.layout, styledSystem.typography);
	TextArea.defaultProps = {
	  px: 'default',
	  py: 'default',
	  fontSize: 'lg',
	  className: cssClass('TextArea')
	};

	const Moon = props => {
	  const {
	    width,
	    height
	  } = props;
	  const svgWidth = width || '260px';
	  const svgHeight = height || '260px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 260 260",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("circle", {
	    id: "path-1",
	    cx: "106",
	    cy: "106",
	    r: "106"
	  }), /*#__PURE__*/React__default.createElement("filter", {
	    x: "-17.0%",
	    y: "-17.0%",
	    width: "134.0%",
	    height: "134.0%",
	    filterUnits: "objectBoundingBox",
	    id: "filter-2"
	  }, /*#__PURE__*/React__default.createElement("feOffset", {
	    dx: "0",
	    dy: "0",
	    in: "SourceAlpha",
	    result: "shadowOffsetOuter1"
	  }), /*#__PURE__*/React__default.createElement("feGaussianBlur", {
	    stdDeviation: "12",
	    in: "shadowOffsetOuter1",
	    result: "shadowBlurOuter1"
	  }), /*#__PURE__*/React__default.createElement("feColorMatrix", {
	    values: "0 0 0 0 0.958112299   0 0 0 0 0.910577834   0 0 0 0 0.855913579  0 0 0 1 0",
	    type: "matrix",
	    in: "shadowBlurOuter1"
	  })), /*#__PURE__*/React__default.createElement("circle", {
	    id: "path-3",
	    cx: "106",
	    cy: "106",
	    r: "106"
	  })), /*#__PURE__*/React__default.createElement("g", {
	    id: "Main-Templates",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group-12",
	    transform: "translate(24.000000, 24.000000)"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Oval"
	  }, /*#__PURE__*/React__default.createElement("use", {
	    fill: "black",
	    fillOpacity: "1",
	    filter: "url(#filter-2)",
	    href: "#path-1"
	  }), /*#__PURE__*/React__default.createElement("use", {
	    fill: "#F4E8DB",
	    fillRule: "evenodd",
	    href: "#path-1"
	  })), /*#__PURE__*/React__default.createElement("g", {
	    id: "Path-7"
	  }, /*#__PURE__*/React__default.createElement("mask", {
	    id: "mask-4",
	    fill: "white"
	  }, /*#__PURE__*/React__default.createElement("use", {
	    href: "#path-3"
	  })), /*#__PURE__*/React__default.createElement("use", {
	    id: "Mask",
	    fill: "#F4E8DB",
	    href: "#path-3"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M39.8069626,3.76747066 C45.3021184,115.593145 97.2894125,176.043124 195.768845,185.117407 C294.248278,194.191689 253.575457,215.872553 73.750384,250.16 L-33.92,160.780637 L-25.2907546,24.0909209 L26.5457822,-4.24 L39.8069626,3.76747066 Z",
	    fill: "#C8BBB2",
	    mask: "url(#mask-4)"
	  })), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval",
	    fill: "#C8BBB2",
	    cx: "80.5",
	    cy: "37.5",
	    r: "22.5"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy-3",
	    fill: "#C8BBB2",
	    cx: "158",
	    cy: "66",
	    r: "17"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy-4",
	    stroke: "#F4E8DB",
	    strokeWidth: "3",
	    fill: "#C8BBB2",
	    cx: "124",
	    cy: "166",
	    r: "17"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy-5",
	    stroke: "#F4E8DB",
	    strokeWidth: "1.6875",
	    fill: "#C8BBB2",
	    cx: "58.5",
	    cy: "92.5",
	    r: "9.5"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy",
	    fill: "#C8BBB2",
	    cx: "157.5",
	    cy: "124.5",
	    r: "8.5"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy-6",
	    fill: "#C8BBB2",
	    cx: "190",
	    cy: "96",
	    r: "3"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy-8",
	    fill: "#C8BBB2",
	    cx: "81",
	    cy: "113",
	    r: "3"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy-7",
	    fill: "#C8BBB2",
	    cx: "126",
	    cy: "29",
	    r: "3"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy-2",
	    fill: "#C8BBB2",
	    cx: "97.5",
	    cy: "101.5",
	    r: "8.5"
	  }))));
	};

	const Rocket = () => /*#__PURE__*/React__default.createElement("svg", {
	  width: "249px",
	  height: "179px",
	  viewBox: "0 0 249 179",
	  version: "1.1",
	  xmlns: "http://www.w3.org/2000/svg"
	}, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("linearGradient", {
	  x1: "50%",
	  y1: "0%",
	  x2: "50%",
	  y2: "100%",
	  id: "linearGradient-1"
	}, /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFAB86",
	  offset: "0%"
	}), /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFB44E",
	  offset: "100%"
	})), /*#__PURE__*/React__default.createElement("linearGradient", {
	  x1: "50%",
	  y1: "0%",
	  x2: "50%",
	  y2: "100%",
	  id: "linearGradient-2"
	}, /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFAB86",
	  offset: "0%"
	}), /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFB44E",
	  offset: "100%"
	})), /*#__PURE__*/React__default.createElement("linearGradient", {
	  x1: "50%",
	  y1: "0%",
	  x2: "50%",
	  y2: "100%",
	  id: "linearGradient-3"
	}, /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFF2B1",
	  offset: "0%"
	}), /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFEA7E",
	  offset: "100%"
	})), /*#__PURE__*/React__default.createElement("linearGradient", {
	  x1: "50%",
	  y1: "0%",
	  x2: "50%",
	  y2: "100%",
	  id: "linearGradient-4"
	}, /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFF2B1",
	  offset: "0%"
	}), /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFCD7E",
	  offset: "100%"
	})), /*#__PURE__*/React__default.createElement("linearGradient", {
	  x1: "50%",
	  y1: "0%",
	  x2: "50%",
	  y2: "100%",
	  id: "linearGradient-5"
	}, /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFAB86",
	  offset: "0%"
	}), /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFB44E",
	  offset: "100%"
	})), /*#__PURE__*/React__default.createElement("linearGradient", {
	  x1: "50%",
	  y1: "0%",
	  x2: "50%",
	  y2: "100%",
	  id: "linearGradient-6"
	}, /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFF2B1",
	  offset: "0%"
	}), /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFEA7E",
	  offset: "100%"
	})), /*#__PURE__*/React__default.createElement("linearGradient", {
	  x1: "50%",
	  y1: "0%",
	  x2: "50%",
	  y2: "100%",
	  id: "linearGradient-7"
	}, /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFF2B1",
	  offset: "0%"
	}), /*#__PURE__*/React__default.createElement("stop", {
	  stopColor: "#FFCD7E",
	  offset: "100%"
	}))), /*#__PURE__*/React__default.createElement("g", {
	  id: "Main-Templates",
	  stroke: "none",
	  strokeWidth: "1",
	  fill: "none",
	  fillRule: "evenodd"
	}, /*#__PURE__*/React__default.createElement("g", {
	  id: "Rocket-with-motion",
	  transform: "translate(140.500000, 74.000000) rotate(17.000000) translate(-140.500000, -74.000000) translate(19.000000, -40.000000)"
	}, /*#__PURE__*/React__default.createElement("g", {
	  id: "Rocket",
	  transform: "translate(137.662345, 112.855740) rotate(7.000000) translate(-137.662345, -112.855740) translate(44.162345, 11.355740)"
	}, /*#__PURE__*/React__default.createElement("g", {
	  id: "Group-15"
	}, /*#__PURE__*/React__default.createElement("ellipse", {
	  id: "Oval-Copy-29",
	  fill: "#F4E8DB",
	  cx: "116.379625",
	  cy: "57.5932962",
	  rx: "2.01348833",
	  ry: "2.01375162"
	}), /*#__PURE__*/React__default.createElement("ellipse", {
	  id: "Oval-Copy-31",
	  fill: "#F4E8DB",
	  cx: "34.2293016",
	  cy: "155.058874",
	  rx: "2.01348833",
	  ry: "2.01375162"
	}), /*#__PURE__*/React__default.createElement("ellipse", {
	  id: "Oval-Copy-19",
	  fill: "#F4E8DB",
	  cx: "160.273671",
	  cy: "140.157112",
	  rx: "4.02697665",
	  ry: "4.02750323"
	}), /*#__PURE__*/React__default.createElement("ellipse", {
	  id: "Oval-Copy-23",
	  fill: "#F4E8DB",
	  cx: "74.0963704",
	  cy: "51.5520414",
	  rx: "4.02697665",
	  ry: "4.02750323"
	}), /*#__PURE__*/React__default.createElement("g", {
	  id: "Group-13",
	  transform: "translate(7.404023, 136.898722)"
	}, /*#__PURE__*/React__default.createElement("path", {
	  d: "M29.2933675,62.4051811 C35.8296538,62.4051811 41.1280139,56.981389 41.127586,50.2898688 C41.1271581,43.5983485 33.1286817,0.598536152 29.2894151,0.598536152 C25.4501486,0.598536152 17.4571716,43.5968348 17.4575995,50.2883551 C17.4580274,56.9798753 22.7570812,62.4051811 29.2933675,62.4051811 Z",
	  id: "Oval-Copy-38",
	  fill: "url(#linearGradient-2)",
	  transform: "translate(29.292593, 31.501859) rotate(-141.000000) translate(-29.292593, -31.501859) "
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M31.7199672,52.9593428 C36.0774914,52.9593428 39.6097439,49.5375303 39.6094739,45.3158883 C39.609204,41.0942463 36.2259176,5.20641018 31.9585807,5.20641018 C27.6912437,5.20641018 23.829213,41.0932372 23.8294829,45.3148792 C23.8297529,49.5365212 27.362443,52.9593428 31.7199672,52.9593428 Z",
	  id: "Oval-Copy-39",
	  fill: "url(#linearGradient-3)",
	  transform: "translate(31.719478, 29.082876) rotate(-141.000000) translate(-31.719478, -29.082876) "
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M34.9968773,41.9727682 C38.5555221,41.9727682 41.440206,39.3509657 41.4399991,36.1163003 C41.4397923,32.8816348 39.1523789,8.14353111 35.5937342,8.14353111 C32.0350894,8.14353111 28.5527996,32.8808107 28.5530065,36.1154762 C28.5532133,39.3501416 31.4382326,41.9727682 34.9968773,41.9727682 Z",
	  id: "Oval-Copy-39",
	  fill: "url(#linearGradient-4)",
	  transform: "translate(34.996503, 25.058150) rotate(-141.000000) translate(-34.996503, -25.058150) "
	})), /*#__PURE__*/React__default.createElement("g", {
	  id: "Group-11",
	  transform: "translate(102.175136, 89.252917) rotate(40.000000) translate(-102.175136, -89.252917) translate(59.675136, 8.752917)",
	  fillRule: "nonzero",
	  stroke: "#C9D1F6",
	  strokeWidth: "1.97424893"
	}, /*#__PURE__*/React__default.createElement("path", {
	  d: "M67.7777024,49.7502517 L70.9362925,43.3067657 C71.4162191,42.3277211 72.598949,41.9231061 73.5779935,42.4030327 C73.9711105,42.5957382 74.289021,42.9136487 74.4817265,43.3067657 L77.6403166,49.7502517 C78.8999695,52.3199286 79.5548698,55.1437885 79.5548698,58.0055999 L79.5548698,151.358137 C79.5548698,151.903311 79.1129192,152.345261 78.5677454,152.345261 L66.8502737,152.345261 C66.3050999,152.345261 65.8631492,151.903311 65.8631492,151.358137 L65.8631492,58.0055999 C65.8631492,55.1437885 66.5180495,52.3199286 67.7777024,49.7502517 Z",
	  id: "Rectangle",
	  fill: "#FFFFFF",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M7.91445895,50.2479489 L11.0730491,43.8044629 C11.5529757,42.8254183 12.7357055,42.4208033 13.7147501,42.9007299 C14.107867,43.0934354 14.4257776,43.4113459 14.6184831,43.8044629 L17.7770732,50.2479489 C19.0367261,52.8176258 19.6916264,55.6414857 19.6916264,58.5032971 L19.6916264,151.855834 C19.6916264,152.401008 19.2496757,152.842959 18.7045019,152.842959 L6.98703021,152.842959 C6.44185643,152.842959 5.99990575,152.401008 5.99990575,151.855834 L5.99990575,58.5032971 C5.99990575,55.6414857 6.65480605,52.8176258 7.91445895,50.2479489 Z",
	  id: "Rectangle-Copy-11",
	  fill: "#FFFFFF",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M33.0906011,11.354303 L39.4002623,2.2723825 C40.6444904,0.481481126 43.104949,0.0383148853 44.8958504,1.282543 C45.2821175,1.55090196 45.6173309,1.88611536 45.8856899,2.2723825 L52.195351,11.354303 C57.249981,18.6297726 59.9589757,27.2769281 59.9589757,36.1359202 L59.9589757,116.427862 L59.9589757,116.427862 L25.3269765,116.427862 L25.3269765,36.1359202 C25.3269765,27.2769281 28.0359712,18.6297726 33.0906011,11.354303 Z",
	  id: "Rectangle",
	  fill: "#F0F1F9",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M51.0709343,145.945436 L52.4616111,78.430609 L57.2782797,97.1345431 C59.5841699,106.088702 64.1795587,114.289067 70.6130652,120.930158 L75.1292812,125.592095 C78.7263886,129.305267 81.1674641,133.983364 82.155819,139.057808 L83.2511862,144.681678 C83.2493456,145.075537 83.1550246,145.406318 82.9636792,145.638528 C82.7984747,145.839014 82.5607084,145.945436 82.2993925,145.945436 L51.0709343,145.945436 Z",
	  id: "Path-3",
	  fill: "#F0F1F9"
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M1.47150229,145.425806 L2.86217912,77.9109797 L7.67884773,96.6149137 C9.98473789,105.569073 14.5801267,113.769438 21.0136332,120.410529 L25.5298492,125.072466 C29.1269566,128.785638 31.5680321,133.463734 32.556387,138.538179 L33.6517543,144.162049 C33.6499136,144.555907 33.5555926,144.886689 33.3642472,145.118899 C33.1990427,145.319385 32.9612764,145.425806 32.6999605,145.425806 L1.47150229,145.425806 Z",
	  id: "Path-3-Copy",
	  fill: "#F0F1F9",
	  transform: "translate(17.779835, 108.554400) scale(-1, 1) translate(-17.779835, -108.554400) "
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M34.132116,58.9706471 L38.6749518,50.4371325 C39.9558754,48.0309746 42.9448456,47.1187919 45.3510036,48.3997155 C46.2176737,48.8610893 46.9270468,49.5704624 47.3884206,50.4371325 L51.9312564,58.9706471 C53.7557124,62.3978065 54.7099185,66.2208379 54.7099185,70.1033707 L54.7099185,151.938396 L54.7099185,151.938396 L31.3534539,151.938396 L31.3534539,70.1033707 C31.3534539,66.2208379 32.3076599,62.3978065 34.132116,58.9706471 Z",
	  id: "Rectangle-2",
	  fill: "#FFFFFF",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M59.4280489,155.429317 L25.9649033,155.429317 L25.9649033,146.347684 C25.9649033,143.83986 26.9813998,141.569451 28.6248522,139.925999 C30.2683047,138.282547 32.5387131,137.26605 35.0465369,137.26605 L50.3464153,137.26605 C52.8542392,137.26605 55.1246476,138.282547 56.7681,139.925999 C58.4115525,141.569451 59.4280489,143.83986 59.4280489,146.347684 L59.4280489,155.429317 Z",
	  id: "Rectangle",
	  fill: "#FFFFFF"
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M42.9716921,126.282389 L42.9716921,160.264511",
	  id: "Line-2",
	  fill: "#F0F1F9",
	  strokeLinecap: "round"
	})), /*#__PURE__*/React__default.createElement("g", {
	  id: "Group-14",
	  transform: "translate(45.907534, 162.711131)"
	}, /*#__PURE__*/React__default.createElement("path", {
	  d: "M17.7186,38.6625878 C21.7220753,38.6625878 24.9673209,35.3405151 24.9670588,31.241959 C24.9667967,27.1434028 19.3527647,0.806017733 17.7161791,0.806017733 C16.0795936,0.806017733 10.46893,27.1424757 10.469192,31.2410318 C10.4694541,35.339588 13.7151246,38.6625878 17.7186,38.6625878 Z",
	  id: "Oval",
	  fill: "url(#linearGradient-5)",
	  transform: "translate(17.718125, 19.734303) rotate(-141.000000) translate(-17.718125, -19.734303) "
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M19.8990176,30.9168623 C22.5680012,30.9168623 24.7315058,28.8210022 24.7313405,26.2352465 C24.7311751,23.6494907 23.015537,3.87414324 20.3465534,3.87414324 C17.6775699,3.87414324 15.0659306,23.6488726 15.066096,26.2346284 C15.0662613,28.8203841 17.2300341,30.9168623 19.8990176,30.9168623 Z",
	  id: "Oval-Copy-35",
	  fill: "url(#linearGradient-6)",
	  transform: "translate(19.898718, 17.395503) rotate(-141.000000) translate(-19.898718, -17.395503) "
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M21.5173735,25.4314166 C23.5191112,25.4314166 25.1417404,23.8708065 25.1416173,21.9454104 C25.1414942,20.0200143 23.8547724,5.29496477 21.8530347,5.29496477 C19.851297,5.29496477 17.8925608,20.0195507 17.8926839,21.9449468 C17.8928071,23.8703429 19.5156359,25.4314166 21.5173735,25.4314166 Z",
	  id: "Oval-Copy-40",
	  fill: "url(#linearGradient-7)",
	  transform: "translate(21.517151, 15.363191) rotate(-141.000000) translate(-21.517151, -15.363191) "
	})), /*#__PURE__*/React__default.createElement("g", {
	  id: "Group-14-Copy",
	  transform: "translate(0.000000, 124.047100)"
	}, /*#__PURE__*/React__default.createElement("path", {
	  d: "M17.7186,38.6625878 C21.7220753,38.6625878 24.9673209,35.3405151 24.9670588,31.241959 C24.9667967,27.1434028 19.3527647,0.806017733 17.7161791,0.806017733 C16.0795936,0.806017733 10.46893,27.1424757 10.469192,31.2410318 C10.4694541,35.339588 13.7151246,38.6625878 17.7186,38.6625878 Z",
	  id: "Oval",
	  fill: "url(#linearGradient-5)",
	  transform: "translate(17.718125, 19.734303) rotate(-141.000000) translate(-17.718125, -19.734303) "
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M19.8990176,30.9168623 C22.5680012,30.9168623 24.7315058,28.8210022 24.7313405,26.2352465 C24.7311751,23.6494907 23.015537,3.87414324 20.3465534,3.87414324 C17.6775699,3.87414324 15.0659306,23.6488726 15.066096,26.2346284 C15.0662613,28.8203841 17.2300341,30.9168623 19.8990176,30.9168623 Z",
	  id: "Oval-Copy-35",
	  fill: "url(#linearGradient-6)",
	  transform: "translate(19.898718, 17.395503) rotate(-141.000000) translate(-19.898718, -17.395503) "
	}), /*#__PURE__*/React__default.createElement("path", {
	  d: "M21.5173735,25.4314166 C23.5191112,25.4314166 25.1417404,23.8708065 25.1416173,21.9454104 C25.1414942,20.0200143 23.8547724,5.29496477 21.8530347,5.29496477 C19.851297,5.29496477 17.8925608,20.0195507 17.8926839,21.9449468 C17.8928071,23.8703429 19.5156359,25.4314166 21.5173735,25.4314166 Z",
	  id: "Oval-Copy-40",
	  fill: "url(#linearGradient-7)",
	  transform: "translate(21.517151, 15.363191) rotate(-141.000000) translate(-21.517151, -15.363191) "
	}))), /*#__PURE__*/React__default.createElement("path", {
	  d: "M80.0494403,116.335122 C88.8076699,101.144407 113.894541,71.6934295 155.310052,27.9821891 L155.310052,13.433931 L76.2854597,24.2179367 L9.01739077,110.071572 L67.1069868,158.925202 L90.4566162,178.55709 C74.7602694,152.266493 71.2912108,131.525837 80.0494403,116.335122 Z",
	  id: "Path-8",
	  fillOpacity: "0.16",
	  fill: "#192035"
	}), /*#__PURE__*/React__default.createElement("ellipse", {
	  id: "Oval",
	  stroke: "#ACB3D7",
	  strokeWidth: "0.987124464",
	  fill: "#CBD5FD",
	  cx: "134.150589",
	  cy: "51.1969656",
	  rx: "6.09273175",
	  ry: "6.08892935"
	}), /*#__PURE__*/React__default.createElement("ellipse", {
	  id: "Oval-Copy-36",
	  fill: "#ACB3D7",
	  cx: "134.13899",
	  cy: "51.1391751",
	  rx: "3.80795734",
	  ry: "3.80558084"
	}), /*#__PURE__*/React__default.createElement("ellipse", {
	  id: "Oval-Copy-37",
	  fill: "#CBD4FF",
	  cx: "131.474713",
	  cy: "49.3326297",
	  rx: "2.28477441",
	  ry: "2.28334851"
	}), /*#__PURE__*/React__default.createElement("ellipse", {
	  id: "Oval-Copy-41",
	  fill: "#CBD4FF",
	  cx: "135.128283",
	  cy: "51.6142094",
	  rx: "1",
	  ry: "1"
	})), /*#__PURE__*/React__default.createElement("circle", {
	  id: "Oval-Copy-31",
	  fill: "#F4E8DB",
	  cx: "38.1284868",
	  cy: "108.303169",
	  r: "1"
	}), /*#__PURE__*/React__default.createElement("circle", {
	  id: "Oval-Copy-22",
	  fill: "#F4E8DB",
	  cx: "4.32112887",
	  cy: "163.723438",
	  r: "3.94849785"
	}), /*#__PURE__*/React__default.createElement("line", {
	  x1: "153.739825",
	  y1: "166.762478",
	  x2: "133.010212",
	  y2: "186.504967",
	  id: "Path-9-Copy",
	  stroke: "#F4E8DA",
	  strokeWidth: "2.96137339",
	  strokeLinecap: "round",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("line", {
	  x1: "71.0180476",
	  y1: "196.046139",
	  x2: "54.2369317",
	  y2: "210.853006",
	  id: "Path-9-Copy-2",
	  stroke: "#F4E8DA",
	  strokeWidth: "2.96137339",
	  strokeLinecap: "round",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("line", {
	  x1: "39.4304561",
	  y1: "139.905466",
	  x2: "27.5849626",
	  y2: "150.763835",
	  id: "Path-9-Copy-5",
	  stroke: "#F4E8DA",
	  strokeWidth: "2.96137339",
	  strokeLinecap: "round",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("line", {
	  x1: "27.0808447",
	  y1: "220.357763",
	  x2: "18.1967246",
	  y2: "226.28051",
	  id: "Path-9-Copy-6",
	  stroke: "#F4E8DA",
	  strokeWidth: "2.96137339",
	  strokeLinecap: "round",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("line", {
	  x1: "42.5501636",
	  y1: "169.913846",
	  x2: "4.05230955",
	  y2: "203.476077",
	  id: "Path-9-Copy-3",
	  stroke: "#F4E8DA",
	  strokeWidth: "2.96137339",
	  strokeLinecap: "round",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React__default.createElement("line", {
	  x1: "143.094269",
	  y1: "193.740995",
	  x2: "104.596415",
	  y2: "227.303226",
	  id: "Path-9-Copy-4",
	  stroke: "#F4E8DA",
	  strokeWidth: "2.96137339",
	  strokeLinecap: "round",
	  strokeLinejoin: "round"
	}))));

	const Astronaut = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '152px';
	  const svgHeight = height || '169px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 152 169",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group",
	    transform: "translate(2.000000, 2.000000)",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M74,123.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
	    id: "Path-Copy-2",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M104.072464,59.4347826 L107.42029,59.4347826 C110.501879,59.4347826 113,61.9329039 113,65.0144928 L113,72.826087 C113,75.9076758 110.501879,78.4057971 107.42029,78.4057971 L104.072464,78.4057971",
	    id: "Path",
	    fill: theme.colors.primary20
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M36,59.4347826 L39.3478261,59.4347826 C42.4294149,59.4347826 44.9275362,61.9329039 44.9275362,65.0144928 L44.9275362,72.826087 C44.9275362,75.9076758 42.4294149,78.4057971 39.3478261,78.4057971 L36,78.4057971",
	    id: "Path-Copy-8",
	    fill: theme.colors.primary20,
	    transform: "translate(40.463768, 68.920290) scale(-1, 1) translate(-40.463768, -68.920290) "
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M73.942029,36 L75.057971,36 C91.6985507,36 105.188406,49.4898551 105.188406,66.1304348 L105.188406,74.2608696 C105.188406,86.4111341 95.3386703,96.2608696 83.1884058,96.2608696 L65.8115942,96.2608696 C53.6613297,96.2608696 43.8115942,86.4111341 43.8115942,74.2608696 L43.8115942,66.1304348 C43.8115942,49.4898551 57.3014493,36 73.942029,36 Z",
	    id: "Rectangle"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M61.6231884,54.9710145 L87.3768116,54.9710145 C92.8996591,54.9710145 97.3768116,59.448167 97.3768116,64.9710145 L97.3768116,71.1521739 C97.3768116,80.0887815 90.1322598,87.3333333 81.1956522,87.3333333 L67.8043478,87.3333333 C58.8677402,87.3333333 51.6231884,80.0887815 51.6231884,71.1521739 L51.6231884,64.9710145 C51.6231884,59.448167 56.1003409,54.9710145 61.6231884,54.9710145 Z",
	    id: "Rectangle",
	    fill: theme.colors.primary20
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M98.1625549,96.4072839 C104.039008,97.3212203 108.536232,102.403535 108.536232,108.536232 L108.536232,118.134734 C108.536232,119.211784 107.767028,120.135188 106.707715,120.329844 C106.055061,120.449774 105.513749,120.546295 105.083779,120.619408 C95.9922338,122.165353 85.5737028,123.043478 74.5,123.043478",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M63.9958478,122.775649 C56.839568,122.406752 50.0823079,121.667204 43.9319499,120.622082 C43.4981804,120.548372 42.951644,120.450947 42.2923407,120.329807 C41.2329855,120.135184 40.4637681,119.211754 40.4637681,118.134669 L40.4637681,108.536232 C40.4637681,102.446055 44.8988464,97.391746 50.715414,96.426894",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M100.724638,87.6057924 C100.724638,97.4668767 92.7306494,105.188406 82.8695652,105.188406 L66.1304348,105.188406 C56.2693506,105.188406 48.2753623,97.4668767 48.2753623,87.6057924",
	    id: "Path",
	    strokeLinecap: "round"
	  }))));
	};

	const DocumentCheck = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '152px';
	  const svgHeight = height || '169px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 152 169",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group",
	    transform: "translate(2.000000, 2.000000)",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M74,126.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
	    id: "Path-Copy-5",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M105,70.0296545 C105,87.5771932 105,100.077741 105,107.531297 L105,120.263384 C105,121.093743 105,122.339282 105,124 C105,125.104569 104.104569,126 103,126 L73.9676297,126",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M54,42.2162102 L54,54 C54,55.1045695 53.1045695,56 52,56 L40.1644979,56",
	    id: "Path-Copy-9",
	    fill: theme.colors.primary20
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M58.7460443,126 L42,126 C40.8954305,126 40,125.104569 40,124 L40,55.6898628 L53.6898628,42 C63.9564524,42 71.6563946,42 76.7896894,42",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "58.5",
	    y1: "89.5",
	    x2: "86.8715634",
	    y2: "89.5",
	    id: "Line-4",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "58.5",
	    y1: "104.5",
	    x2: "86.8715634",
	    y2: "104.5",
	    id: "Line-4-Copy",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval",
	    fill: theme.colors.primary20,
	    cx: "92",
	    cy: "55",
	    r: "20"
	  }), /*#__PURE__*/React__default.createElement("polyline", {
	    id: "Path",
	    strokeLinecap: "round",
	    strokeLinejoin: "round",
	    points: "103.727922 49 91 61.7279221 83.8715634 54.5994855"
	  }))));
	};

	const DocumentSearch = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '152px';
	  const svgHeight = height || '169px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 152 169",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group",
	    transform: "translate(2.000000, 2.000000)",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M74,126.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
	    id: "Path-Copy-4",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M106,120.263384 C106,121.093743 106,122.339282 106,124 C106,125.104569 105.104569,126 104,126 L74,126",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M55,42.2162102 L55,54 C55,55.1045695 54.1045695,56 53,56 L41.1644979,56",
	    id: "Path",
	    fill: theme.colors.primary20
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M56.5220968,126 L43,126 C41.8954305,126 41,125.104569 41,124 L41,55.6898628 L54.6898628,42 L104,42 C105.104569,42 106,42.8954305 106,44 C106,75.6283541 106,96.8054529 106,107.531297",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval",
	    fill: theme.colors.primary20,
	    cx: "76",
	    cy: "84",
	    r: "18"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy-2",
	    fill: theme.colors.white,
	    cx: "76",
	    cy: "84",
	    r: "10"
	  }), /*#__PURE__*/React__default.createElement("rect", {
	    id: "Rectangle",
	    fill: theme.colors.primary20,
	    transform: "translate(105.316743, 113.185977) rotate(-315.000000) translate(-105.316743, -113.185977) ",
	    x: "91.8167434",
	    y: "108.685977",
	    width: "27",
	    height: "9",
	    rx: "2"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "88.5",
	    y1: "96.5",
	    x2: "95.4689509",
	    y2: "103.468951",
	    id: "Line-3"
	  }))));
	};

	const FileSearch = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '152px';
	  const svgHeight = height || '169px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 152 169",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("linearGradient", {
	    x1: "50%",
	    y1: "0%",
	    x2: "50%",
	    y2: "100%",
	    id: "linearGradient-1"
	  }, /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: theme.colors.primary60,
	    offset: "0%"
	  }), /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: theme.colors.primary100,
	    offset: "100%"
	  })), /*#__PURE__*/React__default.createElement("linearGradient", {
	    x1: "50%",
	    y1: "0%",
	    x2: "50%",
	    y2: "156.737419%",
	    id: "linearGradient-2"
	  }, /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: theme.colors.primary60,
	    offset: "0%"
	  }), /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: theme.colors.primary100,
	    offset: "99.9727331%"
	  }), /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: theme.colors.filterBg,
	    offset: "100%"
	  })), /*#__PURE__*/React__default.createElement("linearGradient", {
	    x1: "50%",
	    y1: "0%",
	    x2: "50%",
	    y2: "100%",
	    id: "linearGradient-3"
	  }, /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: theme.colors.primary60,
	    offset: "0%"
	  }), /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: theme.colors.primary100,
	    offset: "100%"
	  }))), /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd",
	    strokeLinecap: "round",
	    strokeLinejoin: "round"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group-10",
	    transform: "translate(2.000000, 2.000000)"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M74,124.741589 L74,161.762456 C74,163.553649 72.5479505,165.005699 70.7567568,165.005699 C70.191601,165.005699 69.6362551,164.858017 69.1457523,164.57729 L6.67495026,128.823589 L6.67495026,128.823589 C2.54398439,126.459328 0,122.095239 0,117.373019 L0,47.9293229 C0,43.2071024 2.54398439,38.843014 6.67495026,36.4787525 L67.3072083,1.77729956 C71.4477337,-0.592433188 76.5522663,-0.592433188 80.6927917,1.77729956 L141.32505,36.4787525 C145.456016,38.843014 148,43.2071024 148,47.9293229 L148,117.373019 C148,122.095239 145.456016,126.459328 141.32505,128.823589 L92.2812226,156.892675",
	    id: "Path-Copy-5",
	    stroke: "url(#linearGradient-1)",
	    strokeWidth: "3"
	  }), /*#__PURE__*/React__default.createElement("g", {
	    id: "Group",
	    transform: "translate(26.000000, 44.000000)",
	    fill: "url(#linearGradient-2)",
	    stroke: "url(#linearGradient-3)",
	    strokeWidth: "0.5"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M27.9631397,3.55271368e-15 C33.4624013,3.55271368e-15 38.3808566,2.52087 41.6553672,6.48487465 L81.9472527,6.48596321 C84.0762362,6.48596321 85.8021183,8.23554166 85.8021183,10.3937561 L85.802,28.325 L88.2515308,28.3252823 L88.251,32.429 L93,32.4298161 L93,59.7472937 L85.8455246,67 L58.8980359,67 L58.898,62.186 L54.8490941,62.1863343 L54.849,59.703 L23.5644342,59.7032914 C21.4354508,59.7032914 19.7095687,57.9537129 19.7095687,55.7954985 L19.7093454,34.1452905 C18.6082798,33.562194 17.574686,32.8660733 16.6235455,32.0721158 L14.6182598,34.103252 L14.8620406,34.3506585 C15.8011053,35.3026166 15.8011053,36.8460456 14.8620406,37.7980037 L7.72142069,45.0366643 C6.78235595,45.9886224 5.25983119,45.9886224 4.32076645,45.0366643 L1.70429855,42.3842723 C0.765233815,41.4323142 0.765233815,39.8888852 1.70429855,38.9369271 L8.84491844,31.6982665 C9.78398317,30.7463084 11.3065079,30.7463084 12.2455727,31.6982665 L12.4882598,31.944252 L14.4672092,29.9403992 C11.7540916,26.766322 10.112393,22.6254316 10.112393,18.0958374 C10.112393,8.10178235 18.1044446,3.55271368e-15 27.9631397,3.55271368e-15 Z M91.688386,33.7594385 L60.2096499,33.7594385 L60.2096499,65.6703775 L84.84,65.67 L84.840268,58.7282349 L91.688,58.728 L91.688386,33.7594385 Z M91.538,59.348 L85.4523545,59.3487254 L85.452,65.518 L91.538,59.348 Z M87.6394442,28.9457728 L55.4611807,28.9457728 L55.4611807,61.5658438 L58.898,61.565 L58.8980359,32.4298161 L87.639,32.429 L87.6394442,28.9457728 Z M84.49,15.163 L45.5807319,15.1635935 C45.7341329,16.1179982 45.8138864,17.0974762 45.8138864,18.0958374 C45.8138864,28.0898924 37.8218349,36.1916747 27.9631397,36.1916747 C25.5007911,36.1916747 23.1548876,35.6862683 21.0208682,34.7722046 L21.0211827,55.7954985 C21.0211827,57.2193827 22.1598352,58.3736689 23.5644342,58.3736689 L54.849,58.373 L54.8490941,28.3252823 L84.49,28.325 L84.49,15.163 Z M78.4992495,48.4723056 C78.6682725,48.4723056 78.8052927,48.6112071 78.8052927,48.7825508 C78.8052927,48.9538945 78.6682725,49.0927961 78.4992495,49.0927961 L67.0125174,49.0927961 C66.8434944,49.0927961 66.7064742,48.9538945 66.7064742,48.7825508 C66.7064742,48.6112071 66.8434944,48.4723056 67.0125174,48.4723056 L78.4992495,48.4723056 Z M9.77236959,32.6384516 L2.63174971,39.8771121 C2.2049021,40.3098203 2.2049021,41.011379 2.63174971,41.4440872 L5.24821761,44.0964792 C5.67506522,44.5291874 6.36712193,44.5291874 6.79396954,44.0964792 L13.9345894,36.8578186 C14.361437,36.4251104 14.361437,35.7235518 13.9345894,35.2908435 L11.3181215,32.6384516 C10.8912739,32.2057433 10.1992172,32.2057433 9.77236959,32.6384516 Z M85.5477644,42.7970878 C85.7167874,42.7970878 85.8538076,42.9359893 85.8538076,43.107333 C85.8538076,43.2786767 85.7167874,43.4175783 85.5477644,43.4175783 L67.1689931,43.4175783 C66.9999701,43.4175783 66.8629499,43.2786767 66.8629499,43.107333 C66.8629499,42.9359893 66.9999701,42.7970878 67.1689931,42.7970878 L85.5477644,42.7970878 Z M27.9631397,1.32962246 C18.828829,1.32962246 11.424007,8.83611256 11.424007,18.0958374 C11.424007,27.3555622 18.828829,34.8620523 27.9631397,34.8620523 C37.0974505,34.8620523 44.5022724,27.3555622 44.5022724,18.0958374 C44.5022724,8.83611256 37.0974505,1.32962246 27.9631397,1.32962246 Z M14.8764421,30.4029656 L12.9212598,32.383252 L14.1852598,33.665252 L16.1555297,31.6676037 C15.7087055,31.2678064 15.281777,30.8456865 14.8764421,30.4029656 Z M27.9631397,4.408293 C35.4201767,4.408293 41.4652995,10.5364153 41.4652995,18.0958374 C41.4652995,25.6552594 35.4201767,31.7833817 27.9631397,31.7833817 C20.5061028,31.7833817 14.46098,25.6552594 14.46098,18.0958374 C14.46098,10.5364153 20.5061028,4.408293 27.9631397,4.408293 Z M27.9631397,5.02878348 C20.8441489,5.02878348 15.0730665,10.8791028 15.0730665,18.0958374 C15.0730665,25.312572 20.8441489,31.1628913 27.9631397,31.1628913 C35.0821306,31.1628913 40.853213,25.312572 40.853213,18.0958374 C40.853213,10.8791028 35.0821306,5.02878348 27.9631397,5.02878348 Z M27.9631397,8.46202001 C28.1321628,8.46202001 28.269183,8.60092153 28.269183,8.77226525 C28.269183,8.94360896 28.1321628,9.08251049 27.9631397,9.08251049 C23.0526379,9.08251049 19.0718897,13.1179144 19.0718897,18.0958374 C19.0718897,18.2671811 18.9348694,18.4060826 18.7658464,18.4060826 C18.5968234,18.4060826 18.4598031,18.2671811 18.4598031,18.0958374 C18.4598031,12.775227 22.7145919,8.46202001 27.9631397,8.46202001 Z M42.6549454,7.81468876 C44.0125608,9.8045911 44.9869199,12.0837237 45.4698482,14.5424266 L84.49,14.542 L84.4905043,10.3937561 C84.4905043,8.96987187 83.3518518,7.81558567 81.9472527,7.81558567 L42.6549454,7.81468876 Z",
	    id: "Combined-Shape"
	  })))));
	};

	const FlagInCog = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '152px';
	  const svgHeight = height || '169px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 152 169",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group",
	    transform: "translate(2.000000, 2.000000)",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M74,102.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
	    id: "Path-Copy-3",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M51,49 L119,49 C120.104569,49 121,49.8954305 121,51 L121,92 C121,93.1045695 120.104569,94 119,94 L51,94 L51,94",
	    id: "Path",
	    fill: theme.colors.primary20
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "50.5",
	    y1: "117.664666",
	    x2: "50.5",
	    y2: "46",
	    id: "Line-2",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M90.239435,81.7782712 C90.0631269,82.1676449 89.8758447,82.5512259 89.6779671,82.9286394 L82.2989672,82.9286393 L81.8937728,82.0669236 L78.1172716,83.9875645 L76.5591632,79.8394848 C76.3961623,79.1332341 76.5739129,78.396551 77.0393222,77.8413752 L79.8721037,74.4622162 C79.8249919,73.8746857 79.8009823,73.2808202 79.8009823,72.6814838 C79.8009823,67.7927344 81.3963573,63.2674855 84.107847,59.5756058 C84.5362871,59.0098353 84.997813,58.7370453 85.4095325,58.6086382 C86.0930507,58.3954624 86.7419904,58.5264664 87.2751427,58.9131117 C90.61381,63.2761567 92.1990177,67.7991512 92.1990177,72.6814838 C92.1990177,73.2808202 92.1750081,73.8746857 92.1278963,74.4622162 L94.9606778,77.8413752 C95.3806819,78.3423882 95.5664172,78.9912204 95.4788634,79.6321076 L94.9309945,83.6424664 L90.239435,81.7782712 Z",
	    id: "Path",
	    fill: theme.colors.white
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M18.4450668,124.33815 C20.3880749,122.496562 22.421736,120.749671 24.5386602,119.104867 L22.349674,115.734124 C21.7480823,114.807754 22.0113671,113.569097 22.9377371,112.967505 L31.3244427,107.521115 C32.2508127,106.919523 33.4894703,107.182808 34.0910619,108.109178 L36.2893205,111.494199 C43.9325843,107.429769 52.2997247,104.546693 61.1471982,103.088517",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M74.5,102 C86.2343886,102 97.389559,104.479928 107.469997,108.944271 L109.522759,105.388784 C110.075043,104.432199 111.298224,104.104449 112.254809,104.656733 L125.245191,112.156733 C126.201776,112.709018 126.529526,113.932199 125.977241,114.888784 L123.825459,118.615781 C126.097192,120.345426 128.275354,122.191655 130.351025,124.145546",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "82.5",
	    y1: "19.5",
	    x2: "82.5",
	    y2: "32.5278784",
	    id: "Line-6",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "82.5",
	    y1: "19.5",
	    x2: "82.5",
	    y2: "32.5278784",
	    id: "Line-6-Copy",
	    strokeLinecap: "round",
	    transform: "translate(82.500000, 26.000000) rotate(-270.000000) translate(-82.500000, -26.000000) "
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "30.5",
	    y1: "40.3",
	    x2: "30.5",
	    y2: "48.1167271",
	    id: "Line-6",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "30.4916365",
	    y1: "40.2916365",
	    x2: "30.4916365",
	    y2: "48.1083635",
	    id: "Line-6-Copy",
	    strokeLinecap: "round",
	    transform: "translate(30.491636, 44.200000) rotate(-270.000000) translate(-30.491636, -44.200000) "
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "17.5",
	    y1: "78.4333333",
	    x2: "17.5",
	    y2: "89.7241613",
	    id: "Line-6",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "17.4879193",
	    y1: "78.4212527",
	    x2: "17.4879193",
	    y2: "89.7120807",
	    id: "Line-6-Copy",
	    strokeLinecap: "round",
	    transform: "translate(17.487919, 84.066667) rotate(-270.000000) translate(-17.487919, -84.066667) "
	  }))));
	};

	const Folders = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '152px';
	  const svgHeight = height || '169px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 152 169",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group",
	    transform: "translate(2.000000, 2.000000)"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M74,124.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
	    id: "Path-Copy-6",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M80,75.4190948 C80,70.9185608 80,64.1677599 80,55.166692 L89.166692,46 L122.184615,46 C122.924232,46 123.52381,46.5995776 123.52381,47.3391941 C123.52381,68.5174474 123.52381,82.6975707 123.52381,89.8795641 L123.52381,98.4049324 C123.52381,98.9609384 123.52381,99.7949476 123.52381,100.90696 C123.52381,101.646576 122.924232,102.246154 122.184615,102.246154 C119.775905,102.246154 117.969372,102.246154 116.765016,102.246154 L107.980724,68.9485742 L80,75.4190948 Z",
	    id: "Path",
	    fill: theme.colors.primary20,
	    transform: "translate(101.761905, 74.123077) rotate(-345.000000) translate(-101.761905, -74.123077) "
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M80,75.4190948 C80,70.9185608 80,64.1677599 80,55.166692 L89.166692,46 L122.184615,46 C122.924232,46 123.52381,46.5995776 123.52381,47.3391941 C123.52381,68.5174474 123.52381,82.6975707 123.52381,89.8795641 L123.52381,98.4049324 L123.52381,98.4049324 C123.52381,98.9609384 123.52381,99.7949476 123.52381,100.90696 C123.52381,101.646576 122.924232,102.246154 122.184615,102.246154 C119.775905,102.246154 117.969372,102.246154 116.765016,102.246154",
	    id: "Path-Copy-7",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3",
	    transform: "translate(101.761905, 74.123077) rotate(-345.000000) translate(-101.761905, -74.123077) "
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M96.001211,42.535856 L96.001211,50.4262472 C96.001211,51.1658637 95.4016334,51.7654413 94.6620169,51.7654413 L86.7369994,51.7654413",
	    id: "Path-Copy-10",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3",
	    transform: "translate(91.369105, 47.150649) rotate(-345.000000) translate(-91.369105, -47.150649) "
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M48.907368,38.345876 L48.907368,46.2362671 C48.907368,46.9758836 48.3077904,47.5754613 47.5681739,47.5754613 L39.6431564,47.5754613",
	    id: "Path-Copy-10",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3",
	    fill: theme.colors.primary20,
	    transform: "translate(44.275262, 42.960669) rotate(-15.000000) translate(-44.275262, -42.960669) "
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M40.6569874,54.4287231 C40.6569874,51.8308869 40.6569874,47.9341327 40.6569874,42.7384605 L49.8236794,33.5717685 L82.8416028,33.5717685 C83.5812193,33.5717685 84.1807969,34.1713461 84.1807969,34.9109626 C84.1807969,43.0635825 84.1807969,50.179161 84.1807969,56.257698",
	    id: "Path",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3",
	    transform: "translate(62.418892, 44.914733) rotate(-15.000000) translate(-62.418892, -44.914733) "
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M53.634268,124 L34,124 C32.8954305,124 32,123.104569 32,122 L32,62 C32,60.8954305 32.8954305,60 34,60 L53.5584816,60 C54.4193424,60 55.1836201,60.5508602 55.4558482,61.3675445 L58.3333333,70 L107,70 C108.104569,70 109,70.8954305 109,72 L109,122 C109,123.104569 108.104569,124 107,124 L74,124",
	    id: "Path",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "32",
	    y1: "80.4611735",
	    x2: "96.5731",
	    y2: "80.4611735",
	    id: "Line-7",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3",
	    strokeLinecap: "round"
	  }))));
	};

	const Launch = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '165px';
	  const svgHeight = height || '184px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 165 184",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group",
	    transform: "translate(2.000000, 1.000000)",
	    fillRule: "nonzero"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M80.5,163.67556 L80.5,177.071797 C80.5,179.280936 78.709139,181.071797 76.5,181.071797 C75.7978533,181.071797 75.1080768,180.886972 74.5,180.535898 L5.39265015,140.636751 L5.39265015,140.636751 C2.29863938,138.850423 0.39265015,135.549153 0.39265015,131.976497 L0.39265015,51.0235027 C0.39265015,47.4508468 2.29863938,44.1495766 5.39265015,42.3632487 L75.5,1.88675135 C78.5940108,0.100423396 82.4059892,0.100423396 85.5,1.88675135 L155.60735,42.3632487 C158.701361,44.1495766 160.60735,47.4508468 160.60735,51.0235027 L160.60735,131.976497 C160.60735,135.549153 158.701361,138.850423 155.60735,140.636751 L94.0407624,176.182237",
	    id: "Path",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("g", {
	    id: "Group-11",
	    transform: "translate(47.000000, 21.000000)",
	    stroke: theme.colors.primary60,
	    strokeWidth: "2"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M53.9942579,39.5219471 L55.8288797,35.8527035 C56.3228582,34.8647465 57.5242043,34.4642978 58.5121613,34.9582763 C58.8992161,35.1518037 59.2130611,35.4656487 59.4065885,35.8527035 L61.2412103,39.5219471 C62.5603369,42.1602003 63.2470936,45.0693486 63.2470936,48.0190054 L63.2470936,122.095329 C63.2470936,122.647613 62.7993784,123.095329 62.2470936,123.095329 L52.9883746,123.095329 C52.4360898,123.095329 51.9883746,122.647613 51.9883746,122.095329 L51.9883746,48.0190054 C51.9883746,45.0693486 52.6751313,42.1602003 53.9942579,39.5219471 Z",
	    id: "Rectangle",
	    fill: theme.colors.white,
	    strokeLinejoin: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M5.75878973,39.5219471 L7.59341152,35.8527035 C8.08739002,34.8647465 9.2887361,34.4642978 10.2766931,34.9582763 C10.6637479,35.1518037 10.9775929,35.4656487 11.1711203,35.8527035 L13.0057421,39.5219471 C14.3248687,42.1602003 15.0116254,45.0693486 15.0116254,48.0190054 L15.0116254,122.095329 C15.0116254,122.647613 14.5639102,123.095329 14.0116254,123.095329 L4.75290636,123.095329 C4.20062161,123.095329 3.75290636,122.647613 3.75290636,122.095329 L3.75290636,48.0190054 C3.75290636,45.0693486 4.43966311,42.1602003 5.75878973,39.5219471 Z",
	    id: "Rectangle",
	    fill: theme.colors.white,
	    strokeLinejoin: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M26.5571232,7.82445311 L30.2061982,2.5285507 C31.4596375,0.709434189 33.9504362,0.250862247 35.7695527,1.5043016 C36.1704572,1.78053976 36.5175637,2.12764628 36.7938018,2.5285507 L40.4428768,7.82445311 C44.9645408,14.386744 47.3857535,22.1679451 47.3857535,30.1372052 L47.3857535,93.8226591 L47.3857535,93.8226591 L19.6142465,93.8226591 L19.6142465,30.1372052 C19.6142465,22.1679451 22.0354592,14.386744 26.5571232,7.82445311 Z",
	    id: "Rectangle",
	    fill: theme.colors.primary60,
	    strokeLinejoin: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M40.5745738,117.355362 L41.6399673,64.4923457 L45.0007027,77.8303078 C46.8757338,85.2718617 50.6334929,92.105976 55.9127551,97.6757028 L59.211122,101.155546 C62.0658223,104.167311 63.9962059,107.93508 64.7730365,112.011424 L65.5485066,116.080629 C65.5463599,116.477108 65.4504565,116.810566 65.2566953,117.04474 C65.0889845,117.247429 64.8478844,117.355362 64.582866,117.355362 L40.5745738,117.355362 Z",
	    id: "Path-3",
	    fill: theme.colors.primary60
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M1.02035692,117.355362 L2.08575042,64.4923457 L5.44648581,77.8303078 C7.32151692,85.2718617 11.079276,92.105976 16.3585383,97.6757028 L19.6569052,101.155546 C22.5116054,104.167311 24.441989,107.93508 25.2188196,112.011424 L25.9942897,116.080629 C25.992143,116.477108 25.8962396,116.810566 25.7024785,117.04474 C25.5347676,117.247429 25.2936675,117.355362 25.0286491,117.355362 L1.02035692,117.355362 Z",
	    id: "Path-3-Copy",
	    fill: theme.colors.primary60,
	    transform: "translate(13.722892, 87.691223) scale(-1, 1) translate(-13.722892, -87.691223) "
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M26.9474568,46.6158047 L29.0688728,42.5574438 C30.348114,40.1101998 33.3690271,39.1633464 35.816271,40.4425876 C36.7204907,40.9152479 37.4584669,41.6532241 37.9311272,42.5574438 L40.0525432,46.6158047 C41.8462831,50.0473072 42.7831325,53.8618634 42.7831325,57.7339058 L42.7831325,122.875685 L42.7831325,122.875685 L24.2168675,122.875685 L24.2168675,57.7339058 C24.2168675,53.8618634 25.1537169,50.0473072 26.9474568,46.6158047 Z",
	    id: "Rectangle",
	    fill: theme.colors.white,
	    strokeLinejoin: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M46.626506,125.104601 L20.373494,125.104601 L20.373494,118.032312 C20.373494,116.079353 21.1650869,114.311281 22.4449195,113.031448 C23.7247521,111.751616 25.4928244,110.960023 27.4457831,110.960023 L39.5542169,110.960023 C41.5071756,110.960023 43.2752479,111.751616 44.5550805,113.031448 C45.8349131,114.311281 46.626506,116.079353 46.626506,118.032312 L46.626506,125.104601 Z",
	    id: "Rectangle",
	    fill: theme.colors.white
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "33.5",
	    y1: "101.484119",
	    x2: "33.5",
	    y2: "129.203332",
	    id: "Line",
	    fill: theme.colors.primary20,
	    strokeLinecap: "round"
	  })))));
	};

	const Planet = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '152px';
	  const svgHeight = height || '169px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 152 169",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Group",
	    transform: "translate(2.000000, 2.000000)",
	    stroke: theme.colors.primary60,
	    strokeWidth: "3"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M74,117.371134 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M108.882866,90.7418658 C109.714261,87.6976379 110.158112,84.4934359 110.158112,81.185567 C110.158112,61.2008302 93.9572813,45 73.9725445,45 C53.9878077,45 37.7869775,61.2008302 37.7869775,81.185567 C37.7869775,97.3610095 48.4003337,111.05757 63.0430857,115.691287",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M73.9725445,117.371134 C77.5908988,117.371134 81.0852119,116.840051 84.3817866,115.851582 C89.8928309,114.19911 94.8512468,111.268362 98.9127122,107.40366",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval-Copy",
	    fillOpacity: "0.196268575",
	    fill: theme.colors.primary60,
	    cx: "104.127184",
	    cy: "99.2783505",
	    r: "9.64948454"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M120.255984,85.4659665 C128.43855,89.8418956 133.002057,93.9015871 132.226834,96.7947568 C131.38817,99.9246931 124.455699,101.112837 113.853361,100.515516",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M94.0573111,98.0477535 C86.8513781,96.7649447 79.0016836,95.0204726 70.8507066,92.8364249 C38.6777508,84.2157074 13.9941115,72.0109683 15.718255,65.5763772 C16.4982546,62.6653791 22.5493576,61.4340187 31.9215354,61.7565326",
	    id: "Path",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "96.5",
	    y1: "22.5",
	    x2: "96.5",
	    y2: "35.5278784",
	    id: "Line-6",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "96.5",
	    y1: "22.5",
	    x2: "96.5",
	    y2: "35.5278784",
	    id: "Line-6-Copy",
	    strokeLinecap: "round",
	    transform: "translate(96.500000, 29.000000) rotate(-270.000000) translate(-96.500000, -29.000000) "
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "38.5",
	    y1: "38.3",
	    x2: "38.5",
	    y2: "46.1167271",
	    id: "Line-6",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "38.4916365",
	    y1: "38.2916365",
	    x2: "38.4916365",
	    y2: "46.1083635",
	    id: "Line-6-Copy",
	    strokeLinecap: "round",
	    transform: "translate(38.491636, 42.200000) rotate(-270.000000) translate(-38.491636, -42.200000) "
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "98",
	    y1: "122.266667",
	    x2: "98",
	    y2: "129.214868",
	    id: "Line-6",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "97.9925658",
	    y1: "122.259232",
	    x2: "97.9925658",
	    y2: "129.207434",
	    id: "Line-6-Copy",
	    strokeLinecap: "round",
	    transform: "translate(97.992566, 125.733333) rotate(-270.000000) translate(-97.992566, -125.733333) "
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "40.5",
	    y1: "122.433333",
	    x2: "40.5",
	    y2: "133.724161",
	    id: "Line-6",
	    strokeLinecap: "round"
	  }), /*#__PURE__*/React__default.createElement("line", {
	    x1: "40.4879193",
	    y1: "122.421253",
	    x2: "40.4879193",
	    y2: "133.712081",
	    id: "Line-6-Copy",
	    strokeLinecap: "round",
	    transform: "translate(40.487919, 128.066667) rotate(-270.000000) translate(-40.487919, -128.066667) "
	  }))));
	};

	const AdminBroLogo = props => {
	  const {
	    width,
	    height
	  } = props;
	  const svgWidth = width || '70px';
	  const svgHeight = height || '70px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 70 70",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("linearGradient", {
	    x1: "50%",
	    y1: "0%",
	    x2: "50%",
	    y2: "156.737419%",
	    id: "linearGradient-1"
	  }, /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: "#879FFA",
	    offset: "0%"
	  }), /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: "#4268F6",
	    offset: "99.9727331%"
	  }), /*#__PURE__*/React__default.createElement("stop", {
	    stopColor: "#343F87",
	    offset: "100%"
	  }))), /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Titles",
	    transform: "translate(-385.000000, -7458.000000)"
	  }), /*#__PURE__*/React__default.createElement("g", {
	    id: "Atoms/Logotype/AdminBro-Icon",
	    transform: "translate(-1.000000, 0.000000)",
	    fill: "url(#linearGradient-1)"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M16.7602339,70 C8.05609707,70 1,62.8533093 1,54.0374194 C1,53.9682136 1,53.8991107 1.00130187,53.8301132 L1,22.9143087 C1,20.8434493 2.09140055,18.9297567 3.86338726,17.8935646 L33.1323931,0.778135721 C34.9066409,-0.259378574 37.0933591,-0.259378574 38.8676069,0.778135721 L68.1366127,17.8935646 C69.9085995,18.9297567 71,20.8434493 71,22.9143087 L71,53.8301132 C71,53.8991107 71,53.9682136 71,54.0374194 C71,62.8533093 63.9439029,70 55.2397661,70 C48.956271,70 43.5316289,66.2756016 41.000388,60.8874748 L30.9996134,60.8874746 C28.4683711,66.2756016 23.043729,70 16.7602339,70 Z M42.4071164,52.0535685 L49.286347,55.9002087 C49.3726881,55.9484877 49.4674103,55.9799906 49.5654997,55.9930498 C49.9942382,56.0501299 50.3881408,55.7493582 50.4453059,55.3212573 L50.9862522,51.2701936 C51.0435183,50.8413367 50.9203125,50.4079524 50.6459328,50.0730981 L44.5789333,42.6689041 C44.7320926,41.2424028 44.8106582,39.7936129 44.8106582,38.3265003 C44.8106582,29.5814111 42.0191822,21.4873364 37.2774223,14.8842173 C37.1963826,14.7713658 37.102102,14.6428342 36.9945806,14.4986225 C36.9225034,14.40195 36.8366488,14.3163052 36.7397388,14.2444037 C36.1904687,13.8368773 35.4140149,13.950685 35.0054843,14.4986027 C34.8964818,14.6447939 34.8009947,14.7749825 34.7190227,14.8891686 C29.9794226,21.4913824 27.1893418,29.5835968 27.1893418,38.3265003 C27.1893418,39.7936129 27.2679074,41.2424028 27.4210667,42.6689041 L21.3540672,50.0730981 C21.0796875,50.4079524 20.9564817,50.8413367 21.0137478,51.2701936 L21.5546941,55.3212573 C21.6118592,55.7493582 22.0057618,56.0501299 22.4345003,55.9930498 C22.5325897,55.9799906 22.6273119,55.9484877 22.713653,55.9002087 L29.5928836,52.0535685 C29.9697355,53.091548 30.3881053,54.1096585 30.8459893,55.1058994 L41.1540107,55.1058994 C41.6118947,54.1096585 42.0302645,53.091548 42.4071164,52.0535685 Z M35.5,34 C33.5670034,34 32,32.4329966 32,30.5 C32,28.5670034 33.5670034,27 35.5,27 C37.4329966,27 39,28.5670034 39,30.5 C39,32.4329966 37.4329966,34 35.5,34 Z",
	    id: "Shape-Copy-5"
	  }))));
	};

	const SoftwareBrothersLogo = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '72px';
	  const svgHeight = height || '72px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 72 72",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("polygon", {
	    id: "path-1",
	    points: "0 0.0011886196 40.3991072 0.0011886196 40.3991072 46.0126533 0 46.0126533"
	  })), /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Atoms/Logotype/SoftwareBrothers"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "software-brothers-logo-compact"
	  }, /*#__PURE__*/React__default.createElement("circle", {
	    id: "Oval",
	    fill: theme.colors.love,
	    fillRule: "nonzero",
	    cx: "36",
	    cy: "36",
	    r: "36"
	  }), /*#__PURE__*/React__default.createElement("g", {
	    id: "Clipped",
	    transform: "translate(14.794521, 11.835616)"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Path"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    d: "M15.1239452,41.020451 C12.7951716,42.4990938 10.8553199,43.139787 8.58363578,43.139787 C8.36241418,43.139787 6.87095246,43.1552118 5.78982111,42.4503604 C5.04765834,41.964215 4.54098952,41.1690285 4.54098952,40.4463477 C4.54098952,39.0200042 5.62568896,37.9359831 7.5132087,37.7838398 C10.8469944,37.517589 13.0247188,39.0057408 15.0882643,40.6103772 L15.3891732,40.8528556 L15.1239452,41.020451 Z M39.4250185,22.9760169 C39.3631716,22.3115785 39.3370056,21.5829547 39.5391974,20.9648725 C42.3591781,12.3140991 38.0560612,3.78337619 29.3380274,1.04598525 C25.7842095,-0.0689399368 21.7379952,-0.142634352 18.4850862,0.142634352 C14.5685125,0.484956797 10.7482772,1.63435195 7.38832554,3.89510643 C3.49672844,6.51244679 0.780222401,9.92259642 0.116557615,14.7590896 C-0.38297502,18.3950769 0.788547945,21.4593383 2.80689766,24.4320759 C3.08164061,24.8362065 3.71081386,25.4947018 4.16515068,25.4947018 C4.60402579,25.4947018 4.902556,25.0430263 4.77172603,24.622255 C4.56557384,23.9463415 4.3689131,23.267573 4.18180177,22.5861496 C2.67368896,17.0329189 4.53147462,11.4262002 9.00704915,8.02080506 C14.1296374,4.11856691 24.3462691,3.56942466 29.8530218,6.89993678 C33.9729766,9.38890622 36.0781499,14.0518609 34.6045286,18.4961096 C34.2834005,19.4672118 33.7541338,20.0936143 33.6601741,21.0421328 C33.5852442,21.8004721 33.791004,24.2894415 33.8778276,25.9392455 C33.9135085,26.625079 33.9943852,27.3132898 33.9920064,28.0015005 C33.9896277,28.8763246 33.4900951,29.4290327 32.5790427,29.4290327 C30.7807252,29.4290327 30.665357,30.2016354 30.4227268,31.4461201 C30.0564029,33.3158188 29.8030685,35.2473256 29.1322675,37.0088599 C27.739523,40.6721855 23.6397873,43.3917471 20.5212764,41.3901117 C20.8852216,41.0014331 21.2182434,40.6293952 21.4668203,40.3465037 C21.8022208,39.9613909 22.1197808,39.5620148 22.4087961,39.1400548 C23.9906495,36.8376986 24.6281483,34.6209231 24.8208251,33.7912666 C25.5106559,30.8173404 24.5151587,27.3109125 21.3490733,26.0652392 L20.9066301,25.8917007 L21.3264754,25.665863 C21.7566362,25.4369843 22.1768613,25.1899243 22.5860113,24.925353 C27.6622143,21.6186133 28.9181821,18.8122824 29.4533956,17.6129652 C29.8458856,16.7333867 30.4762482,14.0863309 29.0763674,11.8814415 C28.2331088,10.4871907 26.6976406,9.18446365 24.3070201,8.59847418 C21.8628783,7.99822129 19.2224915,8.06359536 16.8318711,8.49149842 C15.4462627,8.74110854 12.3836519,9.60404636 10.3676809,11.5284215 C8.1959033,13.6013741 7.14807413,16.6751444 8.31721837,18.2262929 C8.44329089,18.3938883 8.63121031,18.3808135 8.70614021,18.3665501 C8.90945547,18.3270044 9.07422409,18.178348 9.13431104,17.9802487 C10.1048316,14.7816733 12.5513521,12.5946133 16.2086446,11.6567924 C19.1832425,10.8936986 21.9092635,11.1860991 23.0784077,11.4321433 C24.6376632,11.7602023 25.8079968,12.6813825 26.2088122,13.9448851 C26.5894085,15.1453909 26.6108171,17.213589 23.8277067,20.2517007 C20.5605254,23.8175595 16.3703981,25.3389926 14.0927671,25.9285479 L13.6503239,26.0426554 L13.8406221,25.6242613 C14.3163674,24.5747102 14.7849766,23.5703267 15.2393135,22.6004131 C15.4795649,22.088118 15.7114907,21.5900864 15.9350911,21.1075068 C16.0183465,20.9411001 16.2003191,20.5654963 16.4274875,20.100746 C16.9543755,19.0238567 17.7167575,17.466765 17.9760387,16.9509041 C18.3364158,16.2317893 18.1663368,15.4128303 17.5740338,15.001568 L16.789054,14.4583688 C16.5220516,14.2752054 16.1876343,14.219504 15.8756229,14.3062255 C15.5681267,14.387068 15.3116076,14.5986726 15.1738985,14.8850832 C13.0702745,19.4788203 10.9785737,24.0780012 8.89881708,28.6825796 C8.72041257,29.0855216 8.75371475,29.5443288 8.9892087,29.9104236 C9.3793199,30.5178082 9.87171636,31.062196 10.4521257,31.5269463 C10.5845427,31.6350458 10.7598401,31.6752234 10.9261587,31.635593 C11.0924773,31.5959625 11.2307763,31.4810613 11.3001418,31.3248809 C11.6664658,30.4857155 12.4288477,28.7645943 12.4288477,28.7645943 L12.5121031,28.7325016 C13.9725165,28.1693248 15.5212024,27.8691176 17.0863948,27.8457914 C18.7895633,27.8101328 20.019365,28.249922 20.729415,29.1497071 C21.1016857,29.621589 21.5857566,30.5831823 21.3276648,31.9156249 C21.1147687,33.0115321 20.5973956,34.3083161 19.9170798,35.583705 C19.806469,35.792902 19.5376728,36.2612181 19.518643,36.2956881 C18.9155462,37.3180961 18.1946324,38.2663466 17.3706527,39.1210369 C16.7189303,38.5316649 16.0431957,37.9693676 15.3451668,37.4355743 C14.3342079,36.6594057 12.5204287,35.5658757 10.9825818,35.0654668 C9.59816277,34.6161686 8.52892506,34.3938967 6.81029492,34.5424742 C4.06167607,34.7825753 1.85064948,36.5346006 1.47243191,39.3623267 C1.19887832,41.3960548 2.25741176,43.9717935 4.80264948,45.1461496 C5.92550458,45.6227031 7.1202934,45.9079553 8.33743755,45.9900695 C10.0025463,46.0934795 12.0090024,45.8189083 13.8620306,45.3125564 C15.5770927,44.8442403 17.1779758,43.8648177 18.3506882,43.1385711 C18.5802353,43.2693193 19.2593618,43.723372 19.9706011,44.0549968 C20.7436873,44.4163372 21.5524545,44.657627 21.8581209,44.7396417 C25.501141,45.7202529 30.3228203,44.6861538 32.6016406,40.4724974 C33.9408638,37.9966027 34.8424013,35.2782297 35.8961773,32.6501918 C36.1851926,31.9310769 36.5063207,30.8577534 36.8119871,30.5427692 C37.0974343,30.2503688 37.5374988,30.1933151 38.8303368,30.1933151 C39.865083,30.1933151 40.2825496,29.5645353 40.1552877,28.5328135 C39.9269299,26.6821328 39.5962869,24.8314521 39.4238292,22.9748282 L39.4250185,22.9760169 Z",
	    id: "Shape",
	    fill: theme.colors.white,
	    fillRule: "nonzero"
	  }))))));
	};

	const GithubLogo = props => {
	  const {
	    width,
	    height,
	    theme
	  } = props;
	  const svgWidth = width || '72px';
	  const svgHeight = height || '71px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "0 0 72 71",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Symbols",
	    stroke: "none",
	    strokeWidth: "1",
	    fill: "none",
	    fillRule: "evenodd"
	  }, /*#__PURE__*/React__default.createElement("g", {
	    id: "Atoms/Logotype/Github",
	    transform: "translate(0.000000, 1.000000)",
	    fill: theme.colors.grey100,
	    fillRule: "nonzero"
	  }, /*#__PURE__*/React__default.createElement("path", {
	    d: "M67.1013759,17.4238423 C63.8854852,11.9137922 59.5233349,7.55147781 54.0137768,4.33591517 C48.5033986,1.12018851 42.4877084,-0.487264789 35.9624419,-0.487264789 C29.4379954,-0.487264789 23.4203371,1.12068054 17.9111071,4.33591517 C12.4010569,7.5513138 8.03907062,11.9137922 4.82317995,17.4238423 C1.60778132,22.9337284 -4.26325641e-14,28.9505666 -4.26325641e-14,35.4741931 C-4.26325641e-14,43.3105484 2.28628702,50.3571999 6.86000911,56.6159516 C11.4332392,62.8751953 17.3411754,67.206348 24.5833257,69.6099015 C25.4263326,69.7663662 26.0503872,69.6563161 26.4561458,69.2825393 C26.8620683,68.9082705 27.0647836,68.4395325 27.0647836,67.8782933 C27.0647836,67.7846441 27.0567472,66.9421293 27.0411663,65.3497648 C27.0250934,63.7574004 27.017549,62.3682432 27.017549,61.1829493 L25.9405011,61.3692637 C25.253795,61.4950587 24.3874989,61.5483616 23.3416128,61.5332728 C22.2962187,61.518676 21.2109704,61.4091179 20.087344,61.2054186 C18.9632255,61.0035234 17.9176674,60.5352774 16.9498497,59.8016646 C15.9825239,59.0680518 15.2958178,58.1077785 14.8898952,56.9223206 L14.4216492,55.8447808 C14.1095399,55.1274049 13.6181686,54.3304846 12.9468793,53.4569721 C12.27559,52.5826395 11.5967563,51.9899106 10.9100501,51.6778013 L10.5821959,51.4431042 C10.3637358,51.2871316 10.1610205,51.0990131 9.97355809,50.880717 C9.78625968,50.6624209 9.64603189,50.4439607 9.55238269,50.2251726 C9.45856948,50.0062204 9.53630979,49.8266304 9.78642369,49.6857466 C10.0365376,49.5448628 10.4885467,49.476471 11.1444191,49.476471 L12.0805831,49.6163707 C12.7049658,49.7415097 13.4772847,50.1152865 14.3985239,50.7399972 C15.3192711,51.3642158 16.0761731,52.1757329 16.6693941,53.1742204 C17.387754,54.4544755 18.2532301,55.4300017 19.2682825,56.101291 C20.2825148,56.7725803 21.3051116,57.1076509 22.3350888,57.1076509 C23.3650661,57.1076509 24.2546515,57.0295826 25.0041731,56.874266 C25.7528747,56.7181293 26.4553257,56.4834322 27.1111982,56.1714869 C27.3921458,54.0790587 28.1570843,52.4716054 29.4053576,51.3479789 C27.6261868,51.1610086 26.0266059,50.8794049 24.605795,50.5049721 C23.1858041,50.1300473 21.7184146,49.5215735 20.2046105,48.6779106 C18.6899863,47.8353958 17.4335125,46.7891817 16.434861,45.5410723 C15.4360456,44.292307 14.616328,42.6528719 13.9768565,40.6242432 C13.3370569,38.5947944 13.0170752,36.2537284 13.0170752,33.600389 C13.0170752,29.8224391 14.2504237,26.6075325 16.7166287,23.9538651 C15.5613485,21.1135553 15.6704146,17.9294824 17.0441549,14.4019744 C17.9494852,14.1206988 19.2920638,14.3317785 21.0712346,15.0339015 C22.8507335,15.7363525 24.1536219,16.338102 24.9812118,16.8370177 C25.8088018,17.3357694 26.4718907,17.7584209 26.9714624,18.1011999 C29.8752437,17.2898468 32.8718542,16.8840883 35.9621139,16.8840883 C39.0523736,16.8840883 42.0496401,17.2898468 44.9535854,18.1011999 L46.7329203,16.9779015 C47.9497039,16.2283799 49.3865877,15.5415097 51.0401276,14.917127 C52.6946515,14.2930723 53.9598178,14.1211908 54.8343144,14.4024664 C56.2385604,17.9301384 56.3636993,21.1140473 55.2080911,23.9543571 C57.6741321,26.6080245 58.9079727,29.8237512 58.9079727,33.600881 C58.9079727,36.2542204 58.5868428,38.6026669 57.9480273,40.6476965 C57.3083918,42.6930541 56.4816219,44.3308491 55.4673895,45.5645256 C54.4520091,46.7980382 53.1874989,47.8360518 51.6736948,48.6784026 C50.1595626,49.5214095 48.6916811,50.1298833 47.2716902,50.5048081 C45.8510433,50.8797329 44.2514624,51.1615006 42.4722916,51.348799 C44.0949977,52.753045 44.9065148,54.9696281 44.9065148,57.9975644 L44.9065148,67.8769812 C44.9065148,68.4382204 45.1016856,68.9067944 45.4923554,69.2812272 C45.882533,69.655004 46.4987153,69.7650541 47.3417221,69.6084254 C54.5848565,67.2051999 60.4927927,62.8738833 65.0658588,56.6146395 C69.6384328,50.3558878 71.9255399,43.3092364 71.9255399,35.472881 C71.9238998,28.9500746 70.3152984,22.9337284 67.1013759,17.4238423 Z",
	    id: "Path"
	  }))));
	};

	const Slack = props => {
	  const {
	    width,
	    height
	  } = props;
	  const svgWidth = width || '72px';
	  const svgHeight = height || '72px';
	  return /*#__PURE__*/React__default.createElement("svg", {
	    width: svgWidth,
	    height: svgHeight,
	    viewBox: "70 70 140 140",
	    version: "1.1",
	    xmlns: "http://www.w3.org/2000/svg"
	  }, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
	    style: {
	      fill: '#E01E5A'
	    },
	    d: "M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    style: {
	      fill: '#E01E5A'
	    },
	    d: "M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"
	  })), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
	    style: {
	      fill: '#36C5F0'
	    },
	    d: "M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    style: {
	      fill: '#36C5F0'
	    },
	    d: "M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"
	  })), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
	    style: {
	      fill: '#2EB67D'
	    },
	    d: "M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    style: {
	      fill: '#2EB67D'
	    },
	    d: "M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"
	  })), /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
	    style: {
	      fill: '#ECB22E'
	    },
	    d: "M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"
	  }), /*#__PURE__*/React__default.createElement("path", {
	    style: {
	      fill: '#ECB22E'
	    },
	    d: "M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"
	  }))));
	};



	var Illustrations = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Moon: Moon,
		Rocket: Rocket,
		Astronaut: Astronaut,
		DocumentCheck: DocumentCheck,
		DocumentSearch: DocumentSearch,
		FileSearch: FileSearch,
		FlagInCog: FlagInCog,
		Folders: Folders,
		Launch: Launch,
		Planet: Planet,
		AdminBroLogo: AdminBroLogo,
		SoftwareBrothersLogo: SoftwareBrothersLogo,
		GithubLogo: GithubLogo,
		SlackLogo: Slack
	});

	/**
	 * @memberof Illustration
	 * @alias IllustrationProps
	 */

	const RawIllustration = props => {
	  const {
	    variant,
	    ...other
	  } = props;
	  const IllustrationComponent = Illustrations[variant];
	  return /*#__PURE__*/React__default.createElement(IllustrationComponent, other);
	};
	/**
	 * Awesome database with all the illustrations provided with AdminBro.
	 *
	 * The best thing about them is that they follow your {@link Theme} color palette.
	 *
	 * @component
	 * @subcategory Atoms
	 *
	 * @example <caption>Folders</caption>
	 * return (
	 *   <Illustration variant="Folders" />
	 * )
	 * @example <caption>DocumentSearch</caption>
	 * return (
	 *   <Illustration variant="DocumentSearch" />
	 * )
	 * @example <caption>Rocket</caption>
	 * return (
	 *   <Box bg="grey100" p="xxl"><Illustration variant="Rocket" /></Box>
	 * )
	 */


	const Illustration = styled.withTheme(RawIllustration);

	const variants$2 = styledSystem.variant({
	  variants: {
	    grey: {
	      flexGrow: 1,
	      bg: 'bg',
	      py: 'xl',
	      px: ['0', 'xl'],
	      className: cssClass(['Box', 'Box_Grey'])
	    },
	    white: {
	      px: ['default', 'xxl'],
	      py: 'xxl',
	      bg: 'white',
	      className: cssClass(['Box', 'Box_White'])
	    }
	  }
	});

	/**
	 * Main component which allows you to define entire layout of the application
	 *
	 * @component
	 * @subcategory Atoms
	 * @example <caption>Simple White/Gray wrapper</caption>
	 * return (
	 * <Box variant="grey">
	 *   <Box variant="white">
	 *     <Text>This is the default wrapper in the application</Text>
	 *   </Box>
	 * </Box>
	 * )
	 * @example <caption>Positioning buttons</caption>
	 * return (
	 * <Box variant="grey">
	 *   <Box variant="white" flex flexDirection="row">
	 *     <Box flexGrow={1}>
	 *       <Header.H3>Some header</Header.H3>
	 *     </Box>
	 *     <Box flexShrink={0}>
	 *       <Button>Example Button On The Right</Button>
	 *     </Box>
	 *   </Box>
	 * </Box>
	 * )
	 */
	const Box = styled__default.section.withConfig({
	  displayName: "box__Box",
	  componentId: "sc-2cgj74-0"
	})(["box-sizing:border-box;min-width:0;", " font-family:", ";line-height:", ";font-size:", ";font-weight:normal;", ";", ";", ";", ";", ";", ";", ";", ";", ";"], ({
	  flex
	}) => flex && typeof flex === 'boolean' ? 'display: flex;' : '', ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.fontSizes.default, ({
	  animate
	}) => animate ? 'transition: all 500ms;' : '', styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.shadow, styledSystem.position, variants$2);
	Box.defaultProps = {
	  className: cssClass('Box')
	};

	const Overlay = styled__default(Box).withConfig({
	  displayName: "overlay__Overlay",
	  componentId: "z9dpgi-0"
	})([""]);
	Overlay.defaultProps = {
	  width: '100%',
	  height: '100%',
	  bg: 'grey100',
	  opacity: 0.2,
	  position: 'fixed',
	  top: 0,
	  left: 0,
	  zIndex: 40,
	  className: cssClass('Overlay')
	};

	/**
	 * Main Table wrapper. Along with _TableRow_, _TableCell_, _TableCaption_,
	 * _TableHead_ and _TableBody_ gives you the powerful tool for building tables.
	 *
	 *
	 * Props:
	 * - _Table_: {@link LayoutProps} & standard table html props
	 * - _TableBody_: standard tbody html props
	 * - _TableCell_: {@link SpaceProps} & {@link ColorProps} & standard td html props
	 * - _TableHead_: standard thead html props
	 * - _TableRow_:  standard tr html props
	 *
	 * Example
	 * ```javascript
	 * import { Table, TableRow, TableCell, TableCaption, TableHead, TableBody } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Atoms
	 * @example
	 * return (
	 * <Box pt="x4">
	 * <Table>
	 *   <TableCaption>
	 *     <Text as="span">Monthly savings</Text>
	 *     <Button variant="text" size="sm">
	 *       <Icon icon="Delete" />
	 *       Remove
	 *     </Button>
	 *   </TableCaption>
	 *   <TableHead>
	 *     <TableRow>
	 *       <TableCell><CheckBox /></TableCell>
	 *       <TableCell>
	 *         <Link href="#">
	 *           Name
	 *           <Icon icon="CaretUp" />
	 *         </Link>
	 *       </TableCell>
	 *       <TableCell>
	 *         <Link href="#">
	 *           Last
	 *           <Icon icon="CaretDown" />
	 *         </Link>
	 *       </TableCell>
	 *       <TableCell>Surname</TableCell>
	 *       <TableCell>Gender</TableCell>
	 *       <TableCell>Age</TableCell>
	 *     </TableRow>
	 *   </TableHead>
	 *   <TableBody>
	 *     <TableRow>
	 *       <TableCell><CheckBox /></TableCell>
	 *       <TableCell>Value 1</TableCell>
	 *       <TableCell>Value 2</TableCell>
	 *       <TableCell>Value 2</TableCell>
	 *       <TableCell>Value 2</TableCell>
	 *       <TableCell>Value 2</TableCell>
	 *     </TableRow>
	 *     <TableRow>
	 *       <TableCell><CheckBox /></TableCell>
	 *       <TableCell>Value 1</TableCell>
	 *       <TableCell>Value 2</TableCell>
	 *       <TableCell>Value 2</TableCell>
	 *       <TableCell>Value 2</TableCell>
	 *       <TableCell>Value 2</TableCell>
	 *     </TableRow>
	 *   </TableBody>
	 * </Table>
	 * </Box>
	 * )
	 */

	const Table = styled__default.table.withConfig({
	  displayName: "table__Table",
	  componentId: "sc-7ko7xv-0"
	})(["position:relative;font-family:", ";color:", ";", ";border-collapse:collapse;"], ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.colors.grey100, styledSystem.layout);
	Table.defaultProps = {
	  width: 1,
	  className: cssClass('Table')
	};

	/**
	 * @component
	 * @private
	 */

	const TableHead = styled__default.thead.withConfig({
	  displayName: "table-head__TableHead",
	  componentId: "sc-1ek6hvp-0"
	})(["background:", ";& a{color:", ";text-decoration:none;font-size:", ";white-space:nowrap;}"], ({
	  theme
	}) => theme.colors.grey20, ({
	  theme
	}) => theme.colors.grey60, ({
	  theme
	}) => theme.fontSizes.sm);
	TableHead.defaultProps = {
	  className: cssClass('TableHead')
	};

	/**
	 * @component
	 * @private
	 */

	const TableBody = styled__default.tbody.withConfig({
	  displayName: "table-body__TableBody",
	  componentId: "sc-1ip1gg6-0"
	})([""]);
	TableBody.defaultProps = {
	  className: cssClass('TableBody')
	};

	/**
	 * @component
	 * @private
	 */

	const TableCell = styled__default.td.withConfig({
	  displayName: "table-cell__TableCell",
	  componentId: "sc-6zc8qa-0"
	})(["border-bottom:1px solid ", ";font-size:", ";line-height:", ";", ";", ";", ";", " &{color:", ";border:none;}"], ({
	  theme
	}) => theme.colors.grey20, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.lineHeights.default, styledSystem.color, styledSystem.space, styledSystem.layout, TableHead, ({
	  theme
	}) => theme.colors.grey60);
	TableCell.defaultProps = {
	  p: 'lg',
	  color: 'grey100',
	  className: cssClass('TableCell')
	};

	/**
	 * @component
	 * @private
	 */

	const TableRow = styled__default.tr.withConfig({
	  displayName: "table-row__TableRow",
	  componentId: "sc-1bdcf55-0"
	})(["&:hover{background:", ";}"], ({
	  theme
	}) => theme.colors.grey20);
	TableRow.defaultProps = {
	  className: cssClass('TableRow')
	};

	const CAPTION_HEIGHT = '42px';
	/**
	 * @component
	 * @private
	 */

	const TableCaption = styled__default.caption.withConfig({
	  displayName: "table-caption__TableCaption",
	  componentId: "sc-1bghgra-0"
	})(["font-family:", ";padding:", " ", ";text-align:left;color:", ";font-size:", ";line-height:", ";position:absolute;height:", ";left:0;right:0;top:-", ";background:", ";box-sizing:border-box;& ", "{color:", ";& > span svg{fill:", ";}&:hover{color:", ";}}& ", "{color:", ";}"], ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.space.sm, ({
	  theme
	}) => theme.space.lg, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.lineHeights.default, CAPTION_HEIGHT, CAPTION_HEIGHT, ({
	  theme
	}) => theme.colors.primary100, Button, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.colors.white, Text, ({
	  theme
	}) => theme.colors.white);
	TableCaption.defaultProps = {
	  className: cssClass('TableCaption')
	};

	/**
	 * Prop Types of an Header components.
	 * Apart from all props for a standard hx elements it extends
	 * {@link TypographyProps} and {@link SpaceProps}
	 *
	 * @memberof Header
	 * @alias HeaderProps
	 * @property {string} [...] Other props from {@link TypographyProps}, {@link SpaceProps}
	 */

	const Base = styled__default.h3.withConfig({
	  displayName: "header__Base",
	  componentId: "sc-166yp31-0"
	})(["font-family:", ";vertical-align:middle;margin:", " 0;padding:0;*{vertical-align:middle;}& ", ",a{vertical-align:bottom;}", ";", ";"], ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.space.default, Button, styledSystem.typography, styledSystem.space);
	Base.defaultProps = {
	  fontWeight: 'normal',
	  fontSize: 'h3',
	  lineHeight: 'xl',
	  className: cssClass(['Header', 'H3'])
	};
	const H1 = styled__default(props => /*#__PURE__*/React__default.createElement(Base, _extends_1({
	  as: "h1"
	}, props))).withConfig({
	  displayName: "header__H1",
	  componentId: "sc-166yp31-1"
	})([""]);
	H1.defaultProps = {
	  fontSize: 'h1',
	  lineHeight: 'xxl',
	  className: cssClass(['Header', 'H1'])
	};
	const H2 = styled__default(props => /*#__PURE__*/React__default.createElement(Base, _extends_1({
	  as: "h2"
	}, props))).withConfig({
	  displayName: "header__H2",
	  componentId: "sc-166yp31-2"
	})(["& ", ",a{margin-bottom:4px;}"], Button);
	H2.defaultProps = {
	  fontSize: 'h2',
	  lineHeight: 'xxl',
	  className: cssClass(['Header', 'H2'])
	};
	const H3 = Base;
	const H4 = styled__default(props => /*#__PURE__*/React__default.createElement(Base, _extends_1({
	  as: "h4"
	}, props))).withConfig({
	  displayName: "header__H4",
	  componentId: "sc-166yp31-3"
	})([""]);
	H4.defaultProps = {
	  fontSize: 'h4',
	  lineHeight: 'xl',
	  className: cssClass(['Header', 'H4'])
	};
	const H5 = styled__default(props => /*#__PURE__*/React__default.createElement(Base, _extends_1({
	  as: "h5"
	}, props))).withConfig({
	  displayName: "header__H5",
	  componentId: "sc-166yp31-4"
	})([""]);
	H5.defaultProps = {
	  fontSize: 'xl',
	  lineHeight: 'lg',
	  className: cssClass(['Header', 'H5'])
	};
	const H6 = styled__default(props => /*#__PURE__*/React__default.createElement(Base, _extends_1({
	  as: "h6"
	}, props))).withConfig({
	  displayName: "header__H6",
	  componentId: "sc-166yp31-5"
	})([""]);
	H6.defaultProps = {
	  fontSize: 'lg',
	  lineHeight: 'lg',
	  className: cssClass(['Header', 'H6'])
	};
	/**
	 *
	 * The Header component is a base for all text components intended as headings.
	 *
	 * Usage
	 * ```javascript
	 * import { H1, H2, H3, H4, H5, H6, HeaderProps } from 'admin-bro'
	 *
	 * // or
	 *
	 * import { Header } from 'admin-bro'
	 * // Header.H1
	 * ```
	 * By default, the Heading component renders an __h3__ element.
	 *
	 * @component
	 * @subcategory Atoms
	 * @example
	 * return (
	 * <Box py="lg">
	 *   <Header.H1>H1 Header - 40</Header.H1>
	 *   <Text variant="sm" mb={5}>Roboto 40 - line height - 40</Text>
	 *   <Header.H2>H2 Header - 32</Header.H2>
	 *   <Text variant="sm" mb={5}>Roboto 32 - line height - 40</Text>
	 *   <Header.H3>H3 Header - 28</Header.H3>
	 *   <Text variant="sm" mb={5}>Roboto 28 - line height - 32</Text>
	 *   <Header.H4>H4 Header - 24</Header.H4>
	 *   <Text variant="sm" mb={5}>Roboto 24 - line height - 32</Text>
	 *   <Header.H5>H5 Header - 18</Header.H5>
	 *   <Text variant="sm" mb={5}>Roboto 18 - line height - 24</Text>
	 *   <Header.H6>H6 Header - 16</Header.H6>
	 *   <Text variant="sm" mb={5}>Roboto 16 - line height - 24</Text>
	 * </Box>
	 * )
	 *
	 *
	 */

	const Header = H3;
	Header.H1 = H1;
	Header.H2 = H2;
	Header.H3 = H3;
	Header.H4 = H4;
	Header.H5 = H5;
	Header.H6 = H6;

	/**
	 * Prop Types of an Icon component.
	 * Apart from props defined below it extends all {@link ColorProps} and {@link SpaceProps}
	 *
	 * @memberof Icon
	 * @alias IconProps
	 * @property {string} [...] Other props from {@link ColorProps} and {@link SpaceProps}
	 */

	const spinCss = styled.css(["@keyframes iconSpin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}animation-name:iconSpin;animation-duration:1000ms;animation-iteration-count:infinite;animation-timing-function:linear;"]);
	const Wrapper = styled__default.span.withConfig({
	  displayName: "icon__Wrapper",
	  componentId: "sc-1votnx1-0"
	})(["vertical-align:middle;display:inline-block;line-height:", ";font-size:", ";& > svg{", ";", ";}", ";", ";", ";"], ({
	  theme
	}) => theme.lineHeights.sm, ({
	  theme
	}) => theme.fontSizes.sm, ({
	  theme,
	  color: colorProp
	}) => colorProp ? `fill: ${theme.colors[colorProp]}` : '', ({
	  spin
	}) => spin ? spinCss : '', ({
	  rounded
	}) => rounded ? 'border-radius: 9999px;' : '', styledSystem.space, styledSystem.color);
	/**
	 * Component wrapping [@carbon/icons-react](https://www.npmjs.com/package/@carbon/icons-react).
	 * List of all icons can be found here: https://www.carbondesignsystem.com/guidelines/icons/library/
	 * but keys are not always 1 to 1 in a relation to the `icons-react` library.
	 * If you have problem verifying the key of given icon - you can always open the
	 * Chrome Terminal (with AdminBro open) and write there:
	 *
	 * ```
	 * Object.keys(CarbonIcons)
	 * ```
	 *
	 * to see list of all possible icon keys.
	 *
	 *
	 *
	 * @component
	 * @subcategory Atoms
	 * @example <caption>Icons inside other elements</caption>
	 * return (
	 *   <Box variant="grey">
	 *     <Label mb="default"><Icon icon="Accessibility" />Icon in Label</Label>
	 *     <Button><Icon icon="Accessibility" />Icon in button</Button>
	 *   </Box>
	 * )
	 * @example <caption>Different sizes</caption>
	 * const sizes = [16, 20, 24, 32]
	 * return (
	 *   <Box variant="grey">
	 *     {sizes.map(size => (
	 *       <Label m="default"><Icon icon="Accessibility" size={size}/>Icon {size}</Label>
	 *     ))}
	 *   </Box>
	 * )
	 *
	 * @example <caption>Big rounded icon with background</caption>
	 * return (
	 *   <Box variant="grey">
	 *     <Icon icon="Add" color="white" bg="primary100" rounded size={32} p="default"/>
	 *   </Box>
	 * )
	 */

	const Icon$1 = props => {
	  const {
	    icon,
	    size,
	    color: givenColor,
	    ...other
	  } = props;
	  const iconSize = size || 16;
	  const CarbonIcon = CarbonIcons[`${icon}${iconSize}`] || CarbonIcons.ErrorOutline16;

	  if (CarbonIcon) {
	    return /*#__PURE__*/React__default.createElement(Wrapper, _extends_1({
	      className: cssClass('Icon'),
	      color: givenColor || 'grey100'
	    }, other), /*#__PURE__*/React__default.createElement(CarbonIcon, null));
	  }

	  return null;
	};

	/* eslint-disable import/prefer-default-export */
	/**
	 * Marks group of fields as a section. Has the same props as [Box]{@link BoxProps}
	 *
	 * Usage:
	 * ```javascript
	 * import { Section } from 'admin-bro'
	 * ```
	 * @component
	 * @subcategory Atoms
	 * @example
	 * return (
	 *   <Section>
	 *     <Text>Some text within a section</Text>
	 *     <Section>
	 *       <Text>Section can be nested</Text>
	 *     </Section>
	 *   </Section>
	 * )
	 */

	const Section = styled__default(Box).withConfig({
	  displayName: "section__Section",
	  componentId: "sc-4f436f-0"
	})(["border-left:", " solid ", ";padding-left:", ";"], ({
	  theme
	}) => theme.space.sm, ({
	  theme
	}) => theme.colors.primary20, ({
	  theme
	}) => theme.space.default);
	Section.defaultProps = {
	  className: cssClass('Section')
	};

	/* eslint-disable import/prefer-default-export */
	const Spinner = styled__default.div.attrs({
	  className: 'lds-facebook'
	}).withConfig({
	  displayName: "loader__Spinner",
	  componentId: "g7821c-0"
	})(["&{display:inline-block;position:relative;width:64px;height:64px;}& div{display:inline-block;position:absolute;left:6px;width:13px;background:", ";animation:lds-facebook 1.2s cubic-bezier(0,0.5,0.5,1) infinite;}& div:nth-child(1){left:6px;animation-delay:-0.24s;}& div:nth-child(2){left:26px;animation-delay:-0.12s;}& div:nth-child(3){left:45px;animation-delay:0;}@keyframes lds-facebook{0%{top:6px;height:51px;}50%,100%{top:19px;height:26px;}}"], ({
	  theme
	}) => theme.colors.primary100);
	/**
	 * Simple loader
	 *
	 * @component
	 * @subcategory Atoms
	 * @example
	 * return (
	 *   <Loader/>
	 * )
	 */

	const Loader = () => /*#__PURE__*/React__default.createElement(Box, {
	  p: "x3",
	  style: {
	    textAlign: 'center'
	  },
	  "data-testid": "Loader",
	  className: cssClass('Loader')
	}, /*#__PURE__*/React__default.createElement(Spinner, null, /*#__PURE__*/React__default.createElement("div", null), /*#__PURE__*/React__default.createElement("div", null), /*#__PURE__*/React__default.createElement("div", null)));

	const linearGradient = theme => `linear-gradient(to right, ${theme.colors.grey60} 8%, ${theme.colors.grey40} 18%, ${theme.colors.grey20} 33%)`;

	const StyledPlaceholder = styled__default.div.withConfig({
	  displayName: "placeholder__StyledPlaceholder",
	  componentId: "sc-44t4fq-0"
	})(["@keyframes placeHolderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer;animation-timing-function:linear;background:", ";background:", ";background-size:1000px 104px;height:338px;position:relative;overflow:hidden;", ";"], ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => linearGradient(theme), styledSystem.layout);
	/**
	 * Renders placeholder
	 *
	 * Usage:
	 * ```javascript
	 * import { Placeholder, PlaceholderProps } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Atoms
	 * @example <caption>Image placeholder</caption>
	 * return (
	 *   <Box>
	 *     <Placeholder width={100} height={200} />
	 *   </Box>
	 * )
	 *
	 * @example <caption>Text placeholder</caption>
	 * return (
	 *   <Box>
	 *     <Label>Some name</Label>
	 *     <Placeholder width={400} height={14} />
	 *   </Box>
	 * )
	 */

	const Placeholder = ({
	  as: htmlAs,
	  ref,
	  ...other
	}) => /*#__PURE__*/React__default.createElement(StyledPlaceholder, _extends_1({
	  as: htmlAs
	}, other, {
	  className: cssClass('Placeholder')
	}));

	/**
	 * @component
	 * @private
	 */

	const InputGroup = styled__default.div.withConfig({
	  displayName: "input-group__InputGroup",
	  componentId: "sc-130uw8f-0"
	})(["position:relative;display:flex;width:100%;", "{flex-grow:1;}", ":not(:last-child){border-right:none;}", ",", ":last-child,", ":last-child{padding:", ";border:solid ", ";border-width:1px 1px 1px 0;margin:0;color:", ";}", ":last-child:hover{background:", ";}", ",", ",", "{flex-shrink:0;}", ",", "{line-height:", ";}", ":first-child,", ":first-child{border-right:0;}", ":hover{& + ", ",& + ", ",& + ", "{border-color:", ";}}", ":focus{& + ", ",& + ", ",& + ", "{border-color:", ";}}"], Input, Input, Label, Button, Link, ({
	  theme
	}) => theme.space.sm, ({
	  theme
	}) => theme.colors.inputBorder, ({
	  theme
	}) => theme.colors.grey40, Button, ({
	  theme
	}) => theme.colors.hoverBg, Label, Button, Link, Label, Link, ({
	  theme
	}) => theme.lineHeights.lg, Button, Link, Input, Label, Button, Link, ({
	  theme
	}) => theme.colors.grey60, Input, Label, Button, Link, ({
	  theme
	}) => theme.colors.primary100);

	const formGroupDisabledCSS = styled.css(["color:", ";"], ({
	  theme
	}) => theme.colors.grey40);
	const formGroupWithErrorCSS = styled.css(["color:", ";", "{color:", ";border-color:", ";}&&& ", "{color:", ";&:before{color:", ";}}&&& ", ",&&& ", ",&&& ", "{border-color:", ";}"], ({
	  theme
	}) => theme.colors.error, Input, ({
	  theme
	}) => theme.colors.error, ({
	  theme
	}) => theme.colors.error, Label, ({
	  theme
	}) => theme.colors.error, ({
	  theme
	}) => theme.colors.error, Label, Button, Link, ({
	  theme
	}) => theme.colors.error);
	/**
	 * Props for FormGroup. Apart from props defined here FormGroup supports also all {@link SpaceProps}
	 * @alias FormGroupProps
	 * @memberof FormGroup
	 */

	/**
	 * FormGroup comes with other, from-related components like: FormMessage and InputGroup.
	 * Together they allow you to build form elements.
	 *
	 * Usage:
	 * ```javascript
	 * import { FormGroup, FormGroupProps, InputGroup, FormMessage } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Molecules
	 * @example <caption>Example 1: input with all sorts of buttons</caption>
	 * return (
	 * <Box py="xl">
	 *   <FormGroup>
	 *     <Label required>Name</Label>
	 *     <InputGroup>
	 *       <Button variant="primary" size="icon">
	 *         <Icon icon="ChevronRight" />
	 *       </Button>
	 *       <Input />
	 *       <Label>100 KM</Label>
	 *       <Button variant="primary" size="icon">
	 *         <Icon icon="ChevronRight" />
	 *       </Button>
	 *     </InputGroup>
	 *     <FormMessage>And the optional message</FormMessage>
	 *   </FormGroup>
	 * </Box>
	 * )
	 * @example <caption>Example 2: the same input with errors</caption>
	 * return (
	 * <Box py="xl">
	 *   <FormGroup error>
	 *     <Label required>Name</Label>
	 *     <InputGroup>
	 *       <Button variant="primary" size="icon">
	 *         <Icon icon="ChevronRight" />
	 *       </Button>
	 *       <Input />
	 *       <Label>100 KM</Label>
	 *       <Button variant="primary" size="icon">
	 *         <Icon icon="ChevronRight" />
	 *       </Button>
	 *     </InputGroup>
	 *     <FormMessage>And the optional message</FormMessage>
	 *   </FormGroup>
	 * </Box>
	 * )
	 * @example <caption>Example 3: disabled field</caption>
	 * return (
	 * <Box py="xl">
	 *   <FormGroup disabled>
	 *     <Label>Disabled field</Label>
	 *     <InputGroup>
	 *       <Input disabled />
	 *     </InputGroup>
	 *     <FormMessage />
	 *   </FormGroup>
	 * </Box>
	 * )
	 * @example <caption>Example 4: with a link</caption>
	 * return (
	 * <Box py="xl">
	 *   <FormGroup>
	 *     <Label>Some form data with button link</Label>
	 *     <InputGroup>
	 *       <Input />
	 *       <Link href="#someHref">This is link</Link>
	 *     </InputGroup>
	 *     <FormMessage />
	 *   </FormGroup>
	 * </Box>
	 * )
	 */
	const FormGroup = styled__default.div.withConfig({
	  displayName: "form-group__FormGroup",
	  componentId: "sc-1r7v1ei-0"
	})(["width:100%;", ";", ";", ";& > ", "{width:100%;}& ", "{", ";", ";&:hover{border-color:", ";}}& ", "{", ",", ":last-child,", ":last-child{", ";}}"], ({
	  error
	}) => error ? formGroupWithErrorCSS : '', ({
	  disabled
	}) => disabled ? formGroupDisabledCSS : '', styledSystem.space, Input, Input, ({
	  variant,
	  theme
	}) => variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '', ({
	  variant,
	  theme
	}) => variant === 'filter' ? `color: ${theme.colors.white}` : '', ({
	  variant,
	  theme
	}) => variant === 'filter' ? theme.colors.grey60 : theme.colors.grey60, InputGroup, Label, Button, Link, ({
	  variant,
	  theme
	}) => variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '');
	FormGroup.defaultProps = {
	  mb: 'lg'
	};

	/**
	 * @component
	 * @private
	 */

	const FormMessage = styled__default(Text).withConfig({
	  displayName: "form-message__FormMessage",
	  componentId: "t6vn9f-0"
	})(["box-sizing:border-box;vertical-align:middle;height:", ";margin:", " 0 0;font-weight:normal;font-size:", ";"], ({
	  theme
	}) => theme.space.xl, ({
	  theme
	}) => theme.space.sm, ({
	  theme
	}) => theme.fontSizes.sm);

	var styles = styled.css([".react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle,.react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow{margin-left:-8px;position:absolute;}.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle,.react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow,.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before,.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before,.react-datepicker__year-read-view--down-arrow::before,.react-datepicker__month-read-view--down-arrow::before,.react-datepicker__month-year-read-view--down-arrow::before{box-sizing:content-box;position:absolute;border:8px solid transparent;height:0;width:1px;}.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before,.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before,.react-datepicker__year-read-view--down-arrow::before,.react-datepicker__month-read-view--down-arrow::before,.react-datepicker__month-year-read-view--down-arrow::before{content:\"\";z-index:-1;border-width:8px;left:-8px;border-bottom-color:#aeaeae;}.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle{top:0;margin-top:-8px;}.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle,.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before{border-top:none;border-bottom-color:#f0f0f0;}.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before{top:-1px;border-bottom-color:#aeaeae;}.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle,.react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow{bottom:0;margin-bottom:-8px;}.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle,.react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow,.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before,.react-datepicker__year-read-view--down-arrow::before,.react-datepicker__month-read-view--down-arrow::before,.react-datepicker__month-year-read-view--down-arrow::before{border-bottom:none;border-top-color:#fff;}.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before,.react-datepicker__year-read-view--down-arrow::before,.react-datepicker__month-read-view--down-arrow::before,.react-datepicker__month-year-read-view--down-arrow::before{bottom:-1px;border-top-color:#aeaeae;}.react-datepicker-wrapper{display:inline-block;padding:0;border:0;}.react-datepicker{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:0.8rem;background-color:#fff;color:#000;border:1px solid #aeaeae;border-radius:0.3rem;display:inline-block;position:relative;}.react-datepicker--time-only .react-datepicker__triangle{left:35px;}.react-datepicker--time-only .react-datepicker__time-container{border-left:0;}.react-datepicker--time-only .react-datepicker__time{border-radius:0.3rem;}.react-datepicker--time-only .react-datepicker__time-box{border-radius:0.3rem;}.react-datepicker__triangle{position:absolute;left:50px;}.react-datepicker-popper{z-index:1;}.react-datepicker-popper[data-placement^=\"bottom\"]{margin-top:10px;}.react-datepicker-popper[data-placement=\"bottom-end\"] .react-datepicker__triangle,.react-datepicker-popper[data-placement=\"top-end\"] .react-datepicker__triangle{left:auto;right:50px;}.react-datepicker-popper[data-placement^=\"top\"]{margin-bottom:10px;}.react-datepicker-popper[data-placement^=\"right\"]{margin-left:8px;}.react-datepicker-popper[data-placement^=\"right\"] .react-datepicker__triangle{left:auto;right:42px;}.react-datepicker-popper[data-placement^=\"left\"]{margin-right:8px;}.react-datepicker-popper[data-placement^=\"left\"] .react-datepicker__triangle{left:42px;right:auto;}.react-datepicker__header{text-align:center;background-color:#f0f0f0;border-bottom:1px solid #aeaeae;border-top-left-radius:0.3rem;border-top-right-radius:0.3rem;padding-top:8px;position:relative;}.react-datepicker__header--time{padding-bottom:8px;padding-left:5px;padding-right:5px;}.react-datepicker__year-dropdown-container--select,.react-datepicker__month-dropdown-container--select,.react-datepicker__month-year-dropdown-container--select,.react-datepicker__year-dropdown-container--scroll,.react-datepicker__month-dropdown-container--scroll,.react-datepicker__month-year-dropdown-container--scroll{display:inline-block;margin:0 2px;}.react-datepicker__current-month,.react-datepicker-time__header,.react-datepicker-year-header{margin-top:0;color:#000;font-weight:bold;font-size:0.944rem;}.react-datepicker-time__header{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}.react-datepicker__navigation{background:none;line-height:1.7rem;text-align:center;cursor:pointer;position:absolute;top:10px;width:0;padding:0;border:0.45rem solid transparent;z-index:1;height:10px;width:10px;text-indent:-999em;overflow:hidden;}.react-datepicker__navigation--previous{left:10px;border-right-color:#ccc;}.react-datepicker__navigation--previous:hover{border-right-color:#b3b3b3;}.react-datepicker__navigation--previous--disabled,.react-datepicker__navigation--previous--disabled:hover{border-right-color:#e6e6e6;cursor:default;}.react-datepicker__navigation--next{right:10px;border-left-color:#ccc;}.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button){right:80px;}.react-datepicker__navigation--next:hover{border-left-color:#b3b3b3;}.react-datepicker__navigation--next--disabled,.react-datepicker__navigation--next--disabled:hover{border-left-color:#e6e6e6;cursor:default;}.react-datepicker__navigation--years{position:relative;top:0;display:block;margin-left:auto;margin-right:auto;}.react-datepicker__navigation--years-previous{top:4px;border-top-color:#ccc;}.react-datepicker__navigation--years-previous:hover{border-top-color:#b3b3b3;}.react-datepicker__navigation--years-upcoming{top:-4px;border-bottom-color:#ccc;}.react-datepicker__navigation--years-upcoming:hover{border-bottom-color:#b3b3b3;}.react-datepicker__month-container{float:left;}.react-datepicker__month{margin:0.4rem;text-align:center;}.react-datepicker__month .react-datepicker__month-text,.react-datepicker__month .react-datepicker__quarter-text{display:inline-block;width:4rem;margin:2px;}.react-datepicker__input-time-container{clear:both;width:100%;float:left;margin:5px 0 10px 15px;text-align:left;}.react-datepicker__input-time-container .react-datepicker-time__caption{display:inline-block;}.react-datepicker__input-time-container .react-datepicker-time__input-container{display:inline-block;}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input{display:inline-block;margin-left:10px;}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input{width:85px;}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"]::-webkit-inner-spin-button,.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"]{-moz-appearance:textfield;}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter{margin-left:5px;display:inline-block;}.react-datepicker__time-container{float:right;border-left:1px solid #aeaeae;width:85px;}.react-datepicker__time-container--with-today-button{display:inline;border:1px solid #aeaeae;border-radius:0.3rem;position:absolute;right:-72px;top:0;}.react-datepicker__time-container .react-datepicker__time{position:relative;background:white;}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box{width:85px;overflow-x:hidden;margin:0 auto;text-align:center;}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list{list-style:none;margin:0;height:calc(195px + (1.7rem / 2));overflow-y:scroll;padding-right:0px;padding-left:0px;width:100%;box-sizing:content-box;}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{height:30px;padding:5px 10px;white-space:nowrap;}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{cursor:pointer;background-color:#f0f0f0;}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{background-color:#216ba5;color:white;font-weight:bold;}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover{background-color:#216ba5;}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled{color:#ccc;}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover{cursor:default;background-color:transparent;}.react-datepicker__week-number{color:#ccc;display:inline-block;width:1.7rem;line-height:1.7rem;text-align:center;margin:0.166rem;}.react-datepicker__week-number.react-datepicker__week-number--clickable{cursor:pointer;}.react-datepicker__week-number.react-datepicker__week-number--clickable:hover{border-radius:0.3rem;background-color:#f0f0f0;}.react-datepicker__day-names,.react-datepicker__week{white-space:nowrap;}.react-datepicker__day-name,.react-datepicker__day,.react-datepicker__time-name{color:#000;display:inline-block;width:1.7rem;line-height:1.7rem;text-align:center;margin:0.166rem;}.react-datepicker__month--selected,.react-datepicker__month--in-selecting-range,.react-datepicker__month--in-range,.react-datepicker__quarter--selected,.react-datepicker__quarter--in-selecting-range,.react-datepicker__quarter--in-range{border-radius:0.3rem;background-color:#216ba5;color:#fff;}.react-datepicker__month--selected:hover,.react-datepicker__month--in-selecting-range:hover,.react-datepicker__month--in-range:hover,.react-datepicker__quarter--selected:hover,.react-datepicker__quarter--in-selecting-range:hover,.react-datepicker__quarter--in-range:hover{background-color:#1d5d90;}.react-datepicker__month--disabled,.react-datepicker__quarter--disabled{color:#ccc;pointer-events:none;}.react-datepicker__month--disabled:hover,.react-datepicker__quarter--disabled:hover{cursor:default;background-color:transparent;}.react-datepicker__day,.react-datepicker__month-text,.react-datepicker__quarter-text{cursor:pointer;}.react-datepicker__day:hover,.react-datepicker__month-text:hover,.react-datepicker__quarter-text:hover{border-radius:0.3rem;background-color:#f0f0f0;}.react-datepicker__day--today,.react-datepicker__month-text--today,.react-datepicker__quarter-text--today{font-weight:bold;}.react-datepicker__day--highlighted,.react-datepicker__month-text--highlighted,.react-datepicker__quarter-text--highlighted{border-radius:0.3rem;background-color:#3dcc4a;color:#fff;}.react-datepicker__day--highlighted:hover,.react-datepicker__month-text--highlighted:hover,.react-datepicker__quarter-text--highlighted:hover{background-color:#32be3f;}.react-datepicker__day--highlighted-custom-1,.react-datepicker__month-text--highlighted-custom-1,.react-datepicker__quarter-text--highlighted-custom-1{color:magenta;}.react-datepicker__day--highlighted-custom-2,.react-datepicker__month-text--highlighted-custom-2,.react-datepicker__quarter-text--highlighted-custom-2{color:green;}.react-datepicker__day--selected,.react-datepicker__day--in-selecting-range,.react-datepicker__day--in-range,.react-datepicker__month-text--selected,.react-datepicker__month-text--in-selecting-range,.react-datepicker__month-text--in-range,.react-datepicker__quarter-text--selected,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__quarter-text--in-range{border-radius:0.3rem;background-color:#216ba5;color:#fff;}.react-datepicker__day--selected:hover,.react-datepicker__day--in-selecting-range:hover,.react-datepicker__day--in-range:hover,.react-datepicker__month-text--selected:hover,.react-datepicker__month-text--in-selecting-range:hover,.react-datepicker__month-text--in-range:hover,.react-datepicker__quarter-text--selected:hover,.react-datepicker__quarter-text--in-selecting-range:hover,.react-datepicker__quarter-text--in-range:hover{background-color:#1d5d90;}.react-datepicker__day--keyboard-selected,.react-datepicker__month-text--keyboard-selected,.react-datepicker__quarter-text--keyboard-selected{border-radius:0.3rem;background-color:#2a87d0;color:#fff;}.react-datepicker__day--keyboard-selected:hover,.react-datepicker__month-text--keyboard-selected:hover,.react-datepicker__quarter-text--keyboard-selected:hover{background-color:#1d5d90;}.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range{background-color:rgba(33,107,165,0.5);}.react-datepicker__month--selecting-range .react-datepicker__day--in-range,.react-datepicker__month--selecting-range .react-datepicker__month-text--in-range,.react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range{background-color:#f0f0f0;color:#000;}.react-datepicker__day--disabled,.react-datepicker__month-text--disabled,.react-datepicker__quarter-text--disabled{cursor:default;color:#ccc;}.react-datepicker__day--disabled:hover,.react-datepicker__month-text--disabled:hover,.react-datepicker__quarter-text--disabled:hover{background-color:transparent;}.react-datepicker__month-text.react-datepicker__month--selected:hover,.react-datepicker__month-text.react-datepicker__month--in-range:hover,.react-datepicker__month-text.react-datepicker__quarter--selected:hover,.react-datepicker__month-text.react-datepicker__quarter--in-range:hover,.react-datepicker__quarter-text.react-datepicker__month--selected:hover,.react-datepicker__quarter-text.react-datepicker__month--in-range:hover,.react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,.react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover{background-color:#216ba5;}.react-datepicker__month-text:hover,.react-datepicker__quarter-text:hover{background-color:#f0f0f0;}.react-datepicker__input-container{position:relative;display:inline-block;width:100%;}.react-datepicker__year-read-view,.react-datepicker__month-read-view,.react-datepicker__month-year-read-view{border:1px solid transparent;border-radius:0.3rem;}.react-datepicker__year-read-view:hover,.react-datepicker__month-read-view:hover,.react-datepicker__month-year-read-view:hover{cursor:pointer;}.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow{border-top-color:#b3b3b3;}.react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow{border-top-color:#ccc;float:right;margin-left:20px;top:8px;position:relative;border-width:0.45rem;}.react-datepicker__year-dropdown,.react-datepicker__month-dropdown,.react-datepicker__month-year-dropdown{background-color:#f0f0f0;position:absolute;width:50%;left:25%;top:30px;z-index:1;text-align:center;border-radius:0.3rem;border:1px solid #aeaeae;}.react-datepicker__year-dropdown:hover,.react-datepicker__month-dropdown:hover,.react-datepicker__month-year-dropdown:hover{cursor:pointer;}.react-datepicker__year-dropdown--scrollable,.react-datepicker__month-dropdown--scrollable,.react-datepicker__month-year-dropdown--scrollable{height:150px;overflow-y:scroll;}.react-datepicker__year-option,.react-datepicker__month-option,.react-datepicker__month-year-option{line-height:20px;width:100%;display:block;margin-left:auto;margin-right:auto;}.react-datepicker__year-option:first-of-type,.react-datepicker__month-option:first-of-type,.react-datepicker__month-year-option:first-of-type{border-top-left-radius:0.3rem;border-top-right-radius:0.3rem;}.react-datepicker__year-option:last-of-type,.react-datepicker__month-option:last-of-type,.react-datepicker__month-year-option:last-of-type{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom-left-radius:0.3rem;border-bottom-right-radius:0.3rem;}.react-datepicker__year-option:hover,.react-datepicker__month-option:hover,.react-datepicker__month-year-option:hover{background-color:#ccc;}.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming{border-bottom-color:#b3b3b3;}.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous{border-top-color:#b3b3b3;}.react-datepicker__year-option--selected,.react-datepicker__month-option--selected,.react-datepicker__month-year-option--selected{position:absolute;left:15px;}.react-datepicker__close-icon{cursor:pointer;background-color:transparent;border:0;outline:0;padding:0px 6px 0px 0px;position:absolute;top:0;right:0;height:100%;display:table-cell;vertical-align:middle;}.react-datepicker__close-icon::after{cursor:pointer;background-color:#216ba5;color:#fff;border-radius:50%;height:16px;width:16px;padding:2px;font-size:12px;line-height:1;text-align:center;display:table-cell;vertical-align:middle;content:\"00d7\";}.react-datepicker__today-button{background:#f0f0f0;border-top:1px solid #aeaeae;cursor:pointer;text-align:center;font-weight:bold;padding:5px 0;clear:left;}.react-datepicker__portal{position:fixed;width:100vw;height:100vh;background-color:rgba(0,0,0,0.8);left:0;top:0;justify-content:center;align-items:center;display:flex;z-index:2147483647;}.react-datepicker__portal .react-datepicker__day-name,.react-datepicker__portal .react-datepicker__day,.react-datepicker__portal .react-datepicker__time-name{width:3rem;line-height:3rem;}@media (max-width:400px),(max-height:550px){.react-datepicker__portal .react-datepicker__day-name,.react-datepicker__portal .react-datepicker__day,.react-datepicker__portal .react-datepicker__time-name{width:2rem;line-height:2rem;}}.react-datepicker__portal .react-datepicker__current-month,.react-datepicker__portal .react-datepicker-time__header{font-size:1.44rem;}.react-datepicker__portal .react-datepicker__navigation{border:0.81rem solid transparent;}.react-datepicker__portal .react-datepicker__navigation--previous{border-right-color:#ccc;}.react-datepicker__portal .react-datepicker__navigation--previous:hover{border-right-color:#b3b3b3;}.react-datepicker__portal .react-datepicker__navigation--previous--disabled,.react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover{border-right-color:#e6e6e6;cursor:default;}.react-datepicker__portal .react-datepicker__navigation--next{border-left-color:#ccc;}.react-datepicker__portal .react-datepicker__navigation--next:hover{border-left-color:#b3b3b3;}.react-datepicker__portal .react-datepicker__navigation--next--disabled,.react-datepicker__portal .react-datepicker__navigation--next--disabled:hover{border-left-color:#e6e6e6;cursor:default;}"]);

	const StyledDatePicker = styled__default(InputGroup).withConfig({
	  displayName: "date-picker__StyledDatePicker",
	  componentId: "sc-1vgx0t3-0"
	})(["", ";position:relative;&.active ", ",&.active ", "{z-index:101;}& .react-datepicker{border-radius:0;border:1px solid ", ";padding:", ";font-family:", ";z-index:101;}& .react-datepicker__navigation--next{border-left-color:", ";}& .react-datepicker__navigation--next:hover{border-left-color:", ";}& .react-datepicker__navigation--previous{border-right-color:", ";}& .react-datepicker__navigation--previous:hover{border-right-color:", ";}& .react-datepicker__navigation{outline:none;top:16px;}& .react-datepicker__header{background:", ";font-size:", ";border:none;}& .react-datepicker__current-month{font-weight:normal;padding-bottom:", ";}& .react-datepicker__month{margin-top:0;}& .react-datepicker__day-name{color:", ";}& .react-datepicker__day--outside-month{color:", ";}& .react-datepicker__day--today{color:", ";}& .react-datepicker__day:hover,& .react-datepicker__day{border-radius:15px;}& .react-datepicker__day--selected{background:", ";border-radius:15px;color:", ";}"], styles, Input, Button, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.default, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.colors.primary60, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.colors.primary60, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.space.lg, ({
	  theme
	}) => theme.colors.primary60, ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.colors.white);
	const Overlay$1 = styled__default.div.withConfig({
	  displayName: "date-picker__Overlay",
	  componentId: "sc-1vgx0t3-1"
	})(["opacity:0;background:#ccc;position:fixed;top:0;left:0;bottom:0;right:0;z-index:100;&.hidden{display:none;}"]);
	const DatePickerWrapper = styled__default.div.withConfig({
	  displayName: "date-picker__DatePickerWrapper",
	  componentId: "sc-1vgx0t3-2"
	})(["position:absolute;right:0;top:", ";"], ({
	  theme
	}) => theme.space.xxl);
	/**
	 * Props for DatePicker
	 * @memberof DatePicker
	 * @alias DatePickerProps
	 */

	const pad = n => n < 10 ? `0${n.toString()}` : n.toString();

	const format$1 = date => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
	/**
	 * Component responsible for showing dates. It is a wrapper to
	 * [react datepicker]{@link https://reactdatepicker.com/}.
	 *
	 * @component
	 * @subcategory Molecules
	 * @see https://reactdatepicker.com/
	 *
	 * @example
	 * return (
	 * <Box width={1/2} height="300px">
	 *   <DatePicker onChange={(date) => console.log(date)}/>
	 * </Box>
	 * )
	 */


	const DatePicker = props => {
	  const {
	    value,
	    onChange,
	    disabled,
	    ...other
	  } = props;
	  const [hidden, setHidden] = React.useState(true);
	  let dateValue;
	  let stringValue = value && value.toString();

	  if (value && value.constructor.name !== 'Date') {
	    const dateNum = Date.parse(value) || undefined;

	    if (dateNum) {
	      dateValue = new Date(dateNum);
	    }
	  } else if (value && value.constructor.name === 'Date') {
	    stringValue = format$1(value);
	  }

	  const onDatePickerChange = date => {
	    if (!disabled) {
	      onChange(format$1(date));
	    }
	  };

	  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Overlay$1, {
	    onClick: () => setHidden(true),
	    className: hidden ? 'hidden' : 'visible'
	  }), /*#__PURE__*/React__default.createElement(StyledDatePicker, {
	    className: cssClass('DatePicker', hidden ? 'normal' : 'active')
	  }, /*#__PURE__*/React__default.createElement(Input, {
	    value: stringValue || '',
	    onChange: event => onChange(event.target.value),
	    onFocus: () => setHidden(false),
	    disabled: disabled
	  }), /*#__PURE__*/React__default.createElement(Button, {
	    variant: "primary",
	    type: "button",
	    size: "icon",
	    disabled: disabled,
	    onClick: () => setHidden(!hidden)
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Calendar"
	  })), !hidden ? /*#__PURE__*/React__default.createElement(DatePickerWrapper, null, /*#__PURE__*/React__default.createElement(ReactDatePicker, _extends_1({
	    selected: dateValue,
	    onChange: onDatePickerChange,
	    inline: true
	  }, other))) : ''));
	};

	const sizeVariants$3 = styledSystem.variant({
	  prop: 'size',
	  variants: {
	    sm: {
	      boxShadow: 'none',
	      '& > section, & + section': {
	        px: 'lg',
	        py: 'default'
	      },
	      [`& > ${Button}`]: {
	        margin: '0px'
	      }
	    }
	  }
	});

	const variants$3 = theme => styledSystem.variant({
	  variants: {
	    success: {},
	    danger: {
	      bg: 'errorLight',
	      'box-shadow': `0 2px 0 0 ${theme.colors.error};`,
	      '& + section': {
	        borderColor: 'errorLight'
	      }
	    },
	    info: {
	      bg: 'primary20',
	      'box-shadow': `0 2px 0 0 ${theme.colors.primary100};`,
	      '& + section': {
	        borderColor: 'primary20'
	      }
	    }
	  }
	});

	const StyledMessageBox = styled__default.div.withConfig({
	  displayName: "message-box__StyledMessageBox",
	  componentId: "sc-1wpq7j8-0"
	})(["line-height:", ";box-shadow:0 2px 0 0 ", ";background:", ";color:", ";& > ", "{float:right;margin:8px;& svg{fill:", ";}}", ";", ";"], ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.colors.success, ({
	  theme
	}) => theme.colors.successLight, ({
	  theme
	}) => theme.colors.grey80, Button, ({
	  theme
	}) => theme.colors.grey80, ({
	  theme
	}) => variants$3(theme), sizeVariants$3);
	const StyledCaption = styled__default(Box).withConfig({
	  displayName: "message-box__StyledCaption",
	  componentId: "sc-1wpq7j8-1"
	})([""]);
	StyledCaption.defaultProps = {
	  px: 'xl',
	  py: 'lg'
	};
	const StyledChildren = styled__default(Box).withConfig({
	  displayName: "message-box__StyledChildren",
	  componentId: "sc-1wpq7j8-2"
	})(["padding:", " ", ";background:", ";border-style:solid;border-width:0 1px 1px 1px;border-color:", ";"], ({
	  theme
	}) => theme.space.lg, ({
	  theme
	}) => theme.space.xl, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.colors.successLight);
	/**
	 * Prop Types of a MessageBox component.
	 * Apart from those defined below it extends all {@link SpaceProps}
	 *
	 * @memberof MessageBox
	 * @alias MessageBoxProps
	 */

	/**
	 * Component responsible for rendering standard danger/info/success
	 * messages.
	 *
	 * It has 2 size versions: default and small. Also it can either contain or
	 * don't contain children, which causes different look.
	 *
	 * Usage
	 * ```javascript
	 * import { MessageBox, MessageBoxProps } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Molecules
	 * @example <caption>Different variants</caption>
	 * return (
	 *  <Box py="lg">
	 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')} />
	 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')} />
	 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')} />
	 *  </Box>
	 * )
	 * @example <caption>Different variants with children</caption>
	 * return (
	 *  <Box py="lg">
	 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')}>
	 *     With inside text
	 *   </MessageBox>
	 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')}>
	 *     With inside text
	 *   </MessageBox>
	 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')}>
	 *     With inside text
	 *   </MessageBox>
	 *  </Box>
	 * )
	 * @example <caption>Small with an icon and inside text</caption>
	 * return (
	 *  <Box py="lg">
	 *   <MessageBox
	 *     size="sm"
	 *     message="Info message"
	 *     mt="default"
	 *     variant="info"
	 *     icon="AddComment"
	 *     onCloseClick={() => alert('close clicked')}
	 *   >
	 *     With inside text
	 *   </MessageBox>
	 *  </Box>
	 * )
	 */
	const MessageBox = props => {
	  const {
	    onCloseClick,
	    message,
	    icon,
	    children,
	    variant,
	    size,
	    ...other
	  } = props;
	  return /*#__PURE__*/React__default.createElement(Box, _extends_1({
	    className: cssClass('MessageBox')
	  }, other), /*#__PURE__*/React__default.createElement(StyledMessageBox, {
	    variant: variant,
	    size: size
	  }, onCloseClick ? /*#__PURE__*/React__default.createElement(Button, {
	    variant: "text",
	    size: "icon",
	    onClick: onCloseClick
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Close"
	  })) : '', /*#__PURE__*/React__default.createElement(StyledCaption, null, icon ? /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: icon,
	    mr: "default"
	  }) : '', message)), children ? /*#__PURE__*/React__default.createElement(StyledChildren, null, children) : '');
	};

	const DropZoneImg = styled__default.div.withConfig({
	  displayName: "drop-zone-item__DropZoneImg",
	  componentId: "sc-1nsf303-0"
	})(["width:80px;height:80px;margin-right:", ";background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:50% 50%;display:inline-block;"], ({
	  theme
	}) => theme.space.lg, ({
	  src
	}) => src);
	/**
	 * @memberof DropZoneItem
	 * @alias DropZoneItemProps
	 */

	/**
	 * Single uploaded file. Usually it is used within {@link DropZone}, but it can also be
	 * reused anywhere
	 *
	 * @example
	 * return (
	 *  <DropZoneItem
	 *    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2019%2F05%2F17%2F724262019%2Fgrumpy-cat-dies-her-spirit-will-live-on-family-says&psig=AOvVaw2ZKtTEZr8N43fx9x-lTITa&ust=1581083274368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKidqqyIvecCFQAAAAAdAAAAABAD"
	 *    filename="shut-up-it-works.png"
	 *  />
	 * )
	 * @component
	 * @subcategory Molecules
	 */
	const DropZoneItem = props => {
	  const {
	    file,
	    onRemove,
	    filename
	  } = props;
	  let {
	    src
	  } = props;

	  if (file && ['image/png', 'image/jpeg', 'image/gif'].includes(file.type)) {
	    src = URL.createObjectURL(file);
	  }

	  return /*#__PURE__*/React__default.createElement(Box, {
	    bg: "grey20",
	    px: "lg",
	    py: "default",
	    mt: "default",
	    flex: true,
	    alignItems: "center"
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Attachment",
	    mr: "default"
	  }), src ? /*#__PURE__*/React__default.createElement(DropZoneImg, {
	    src: src
	  }) : '', /*#__PURE__*/React__default.createElement(Box, {
	    flexGrow: 1
	  }, file?.name || filename), onRemove && /*#__PURE__*/React__default.createElement(Button, {
	    variant: "text",
	    m: "-8px",
	    size: "icon",
	    type: "button",
	    onClick: () => onRemove && onRemove()
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Close"
	  })));
	};

	/* Solution inspired by https://stackoverflow.com/a/20732091/2594227 answer */
	const UNITS = ['B', 'KB', 'MB', 'GB', 'TB']; // eslint-disable-next-line import/prefer-default-export

	const humanFileSize = (size, unit) => {
	  let foundUnitIndex = null;

	  if (unit) {
	    foundUnitIndex = UNITS.findIndex(u => u === unit);
	  }

	  const unitIndex = foundUnitIndex || Math.min(Math.floor(Math.log(+size) / Math.log(1024)), UNITS.length);
	  const calculatedSize = +size / 1024 ** unitIndex;
	  const guessedUnit = ['B', 'kB', 'MB', 'GB', 'TB'][unitIndex];
	  return `${Math.round(calculatedSize)} ${guessedUnit}`;
	};

	const validateContentType = (mimeTypes, mimeType) => {
	  if (!mimeTypes || !mimeTypes.length) {
	    return true;
	  }

	  return mimeTypes.includes(mimeType);
	};

	const validateSize = (maxSize, size) => {
	  if (!maxSize) {
	    return true;
	  }

	  if (!size) {
	    return true;
	  }

	  return +maxSize >= +size;
	};

	const inUnit = (size, unit) => {
	  if (!size) {
	    return '';
	  }

	  return humanFileSize(size, unit);
	};
	/**
	 * @memberof DropZone
	 * @alias FileSizeUnit
	 */


	const UploadInput = styled__default.input.withConfig({
	  displayName: "drop-zone__UploadInput",
	  componentId: "sc-1c5k64f-0"
	})(["font-size:100px;position:absolute;left:0;top:0;opacity:0;bottom:0;cursor:pointer;width:100%;"]);
	const StyledDropZone = styled__default(Box).withConfig({
	  displayName: "drop-zone__StyledDropZone",
	  componentId: "sc-1c5k64f-1"
	})(["border:1px dashed ", ";position:relative;text-align:center;& ", "{color:", ";font-size:", ";padding-right:4px;letter-spacing:1px;}"], ({
	  theme
	}) => theme.colors.grey80, Label, ({
	  theme
	}) => theme.colors.grey60, ({
	  theme
	}) => theme.fontSizes.xs);

	/**
	 * DropZone which can be used for uploading files.
	 *
	 * General usage:
	 * ```javascript
	 * import { DropZone, DropZoneProps } from 'admin-bro'
	 * ```
	 *
	 * how to use it in your custom component.tsx (TypesScript):
	 * ```
	 * import React, { useState } from 'react'
	 * import { DropZone, Label, BasePropertyProps } from 'admin-bro'
	 * import { unflatten } from 'flat'
	 *
	 * const UploadPhoto: React.FC<BasePropertyProps> = (props) => {
	 *   const { property, record, onChange } = props
	 *
	 *   const onUpload = (files: FileList) => {
	 *     const newRecord = {...record}
	 *     const file = files.length && files[0]
	 *
	 *     onChange({
	 *       ...newRecord,
	 *       params: {
	 *         ...newRecord.params,
	 *         [property.name]: file,
	 *       }
	 *     })
	 *     event.preventDefault()
	 *   }
	 *
	 *   return (
	 *     <Box>
	 *       <Label>{property.label}</Label>
	 *       <DropZone onChange={onUpload} />
	 *     </Box>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @subcategory Molecules
	 *
	 * @example <caption>Single file with validation</caption>
	 * const maxSize = 1024 * 100
	 * const mimeTypes = ['application/pdf']
	 * const onUpload = (files) => { alert(files,length ? files[0].name : 'no files' ) }
	 * return (
	 * <Box>
	 *   <DropZone
	 *     onChange={onUpload}
	 *     validate= { { maxSize, mimeTypes } }
	 *   />
	 * </Box>
	 * )
	 *
	 * @example <caption>Multi file of photos</caption>
	 * const mimeTypes = ['image/png']
	 * const onUpload = (files) => { alert(files.length ? files.length : 'no files' ) }
	 * return (
	 * <Box>
	 *   <DropZone
	 *     multiple
	 *     onChange={onUpload}
	 *     validate= { { mimeTypes } }
	 *   />
	 * </Box>
	 * )
	 */
	const DropZone = props => {
	  const {
	    validate,
	    onChange,
	    multiple,
	    files: filesFromProps,
	    uploadLimitIn,
	    ...other
	  } = props;
	  const [, setIsDragging] = React.useState(false);
	  const [error, setError] = React.useState(null);
	  const [filesToUpload, setFilesToUpload] = React.useState(filesFromProps ?? []);
	  React.useEffect(() => {
	    if (filesFromProps) {
	      setFilesToUpload(filesFromProps);
	    }
	  }, [filesFromProps]);

	  const onDragEnter = () => setIsDragging(true);

	  const onDragLeave = () => setIsDragging(false);

	  const onDragOver = () => setIsDragging(true);

	  const removeItem = React.useCallback(index => {
	    const newItems = [...filesToUpload];
	    newItems.splice(index, 1);

	    if (onChange) {
	      onChange(newItems);
	    }

	    setFilesToUpload(newItems);
	  }, [filesToUpload, setFilesToUpload, onChange]);
	  const onDrop = React.useCallback(event => {
	    event.preventDefault();
	    setIsDragging(false);
	    const {
	      files
	    } = event.dataTransfer || event.target;
	    const validatedFiles = [];

	    for (let i = 0; i < files.length; i += 1) {
	      const file = files.item(i);

	      if (!file) {
	        return;
	      }

	      if (validate && !validateSize(validate.maxSize, file && file.size)) {
	        setError({
	          message: `File: ${file.name} size is too big`,
	          title: 'Wrong Size'
	        });
	        return;
	      }

	      if (validate && !validateContentType(validate.mimeTypes, file.type)) {
	        setError({
	          message: `File: ${file.name} has unsupported type: ${file.type}`,
	          title: 'Wrong Type'
	        });
	        return;
	      }

	      validatedFiles.push(file);
	      setError(null);
	    }

	    let newFiles;

	    if (!multiple && validatedFiles.length) {
	      newFiles = [validatedFiles[0]];
	    } else {
	      newFiles = [...filesToUpload, ...validatedFiles];
	    }

	    if (onChange) {
	      onChange(newFiles);
	    }

	    setFilesToUpload(newFiles);
	  }, [onChange, setFilesToUpload, setIsDragging]);
	  const displayUploadLimit = React.useCallback(() => {
	    if (validate && validate.maxSize) {
	      return inUnit(validate.maxSize, uploadLimitIn);
	    }

	    return '';
	  }, [validate]);
	  return /*#__PURE__*/React__default.createElement(Box, null, /*#__PURE__*/React__default.createElement(StyledDropZone, _extends_1({
	    onDragEnter: onDragEnter,
	    onDragOver: onDragOver,
	    onDragLeave: onDragLeave,
	    onDrop: onDrop
	  }, other, {
	    p: "xl"
	  }), /*#__PURE__*/React__default.createElement(UploadInput, {
	    type: "file",
	    onChange: event => onDrop(event),
	    multiple: multiple
	  }), /*#__PURE__*/React__default.createElement(Box, null, /*#__PURE__*/React__default.createElement(Text, {
	    fontSize: "sm"
	  }, "Pick or Drop File here to upload it."), /*#__PURE__*/React__default.createElement(Box, null, validate && validate.maxSize ? /*#__PURE__*/React__default.createElement(Text, {
	    variant: "xs",
	    color: "grey60",
	    lineHeight: "default",
	    mt: "sm"
	  }, /*#__PURE__*/React__default.createElement(Label, {
	    inline: true,
	    uppercase: true
	  }, "Max size:"), displayUploadLimit()) : '', validate && validate.mimeTypes && validate.mimeTypes.length ? /*#__PURE__*/React__default.createElement(Text, {
	    variant: "xs",
	    color: "grey60",
	    lineHeight: "default",
	    mt: "sm"
	  }, validate.mimeTypes.join(', ')) : ''))), error ? /*#__PURE__*/React__default.createElement(MessageBox, {
	    mt: "default",
	    variant: "danger",
	    size: "sm",
	    icon: "Warning",
	    message: error.title,
	    onCloseClick: () => setError(null)
	  }, error.message) : '', filesToUpload.map((file, index) =>
	  /*#__PURE__*/
	  // eslint-disable-next-line react/no-array-index-key
	  React__default.createElement(DropZoneItem, {
	    file: file,
	    key: index,
	    onRemove: () => removeItem(index)
	  })));
	};

	const StyledInfoBox = styled__default(Box).withConfig({
	  displayName: "info-box__StyledInfoBox",
	  componentId: "eur4y4-0"
	})(["display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;"]);
	/**
	 * @memberof InfoBox
	 * @alias InfoBoxProps
	 */

	/**
	 * @class
	 * Used for all type of information like:
	 *
	 * > you don't have x - please add first one"
	 *
	 * in the system.
	 *
	 * Usage:
	 * ```javascript
	 * import { InfoBox, InfoBoxProps } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Molecules
	 * @example
	 * return (
	 * <InfoBox title="There are no cars in the system">
	 *   <Text>Currently there are no cars in the system</Text>
	 *   <Text>To create first click</Text>
	 *   <Button mt="lg"><Icon icon="Add" />Create</Button>
	 * </InfoBox>
	 * )
	 */
	const InfoBox = props => {
	  const {
	    children,
	    title,
	    testId
	  } = props;
	  return /*#__PURE__*/React__default.createElement(StyledInfoBox, {
	    "data-testid": testId,
	    variant: "white",
	    className: cssClass('InfoBox')
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    width: 1 / 2
	  }, /*#__PURE__*/React__default.createElement(H4, {
	    mb: "lg"
	  }, title), children));
	};

	const StyledDropDown = styled__default.div.withConfig({
	  displayName: "drop-down__StyledDropDown",
	  componentId: "nlvl2c-0"
	})(["position:relative;display:inline-block;"]);
	/**
	 * Simple set of components allowing you to create a dropdowns.
	 * Usage
	 * ```javascript
	 * import { DropDown, DropDownTrigger, DropDownMenu, DropDownItem } from 'admin-bro'
	 * ```
	 *
	 * It contains couple of sub components:
	 *
	 * - DropDown - an actual wrapper for entire DropDown
	 * - DropDownTrigger - it has to be right inside the DropDown.
	 *   It is what user sees when the DropDown is not hovered
	 * - DropDownMenu - wraps elements which are hidden by default.
	 *   Shown after hovering Trigger
	 * - DropDownMenuItem - it is a wrapper for a menu item list.
	 *   It can next contain either Link or Button.
	 *
	 * Props:
	 * - DropDownMenu extends {@link PositionProps}, so you can add prop like `top="xl"`
	 * - DropDownItem extends {@link SpaceProps}
	 * - DropDownTrigger also extends {@link SpaceProps}
	 *
	 * @example
	 * return (
	 *   <Box px="300px" pt="lg" pb="200px">
	 *     <DropDown>
	 *       <DropDownTrigger p="default">
	 *         <Text as="span">This is trigger -> </Text>
	 *         <Icon icon="OverflowMenuHorizontal" />
	 *       </DropDownTrigger>
	 *       <DropDownMenu top="xxl">
	 *         <DropDownItem>
	 *           <Link href="/some">
	 *             <Icon icon="Video" />
	 *             Some menu item
	 *           </Link>
	 *         </DropDownItem>
	 *         <DropDownItem>
	 *           <Link href="/some">Other item</Link>
	 *         </DropDownItem>
	 *       </DropDownMenu>
	 *     </DropDown>
	 *   </Box>
	 * )
	 * @component
	 * @subcategory Molecules
	 */

	const DropDown = props => {
	  const {
	    children
	  } = props;
	  const [isVisible, setIsVisible] = React.useState(false);
	  const elements = React__default.Children.map(children, child => {
	    const type = child && child.type && child.type.displayName;

	    if (type === 'DropDownTrigger') {
	      return /*#__PURE__*/React__default.cloneElement(child, {
	        onMouseEnter: () => setIsVisible(true)
	      });
	    }

	    if (type === 'DropDownMenu') {
	      return /*#__PURE__*/React__default.cloneElement(child, {
	        isVisible
	      });
	    }

	    return child;
	  });
	  return /*#__PURE__*/React__default.createElement(StyledDropDown, {
	    onMouseEnter: () => setIsVisible(true),
	    onMouseLeave: () => setIsVisible(false)
	  }, elements);
	};

	/**
	 * @component
	 * @private
	 */

	const DropDownItem = styled__default(Box).withConfig({
	  displayName: "drop-down-item__DropDownItem",
	  componentId: "iszfll-0"
	})(["position:relative;z-index:10000;border:none;color:", ";display:block;font-family:", ";border:solid transparent;border-width:0 ", ";&:hover{border-color:", ";background:", ";}& svg{vertical-align:middle;padding-bottom:2px;padding-right:", ";fill:", ";}& a{color:", ";}", ";& > ", ",& > a{padding:", ";display:block;&:hover{text-decoration:none;}}"], ({
	  theme
	}) => theme.colors.grey80, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.space.sm, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.colors.grey20, ({
	  theme
	}) => theme.space.default, ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.colors.grey80, styledSystem.space, Link, ({
	  theme
	}) => theme.space.lg);

	/**
	 * @component
	 * @private
	 */
	const DropDownMenu = styled__default(Box).withConfig({
	  displayName: "drop-down-menu__DropDownMenu",
	  componentId: "sc-1a9dmxr-0"
	})(["background:", ";display:inline-block;position:absolute;z-index:40;right:0;top:24px;box-shadow:", ";min-width:200px;", ";", ";"], ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.shadows.card, ({
	  isVisible
	}) => isVisible ? '' : 'display: none;', styledSystem.position);
	DropDownMenu.displayName = 'DropDownMenu';

	/**
	 * @component
	 * @private
	 */

	const DropDownTrigger = styled__default.span.withConfig({
	  displayName: "drop-down-trigger__DropDownTrigger",
	  componentId: "m5q3wa-0"
	})(["display:inline-block;", ";"], styledSystem.space);
	DropDownTrigger.displayName = 'DropDownTrigger';

	function paginate(totalItems, currentPage, pageSize, maxPages) {
	    if (currentPage === void 0) { currentPage = 1; }
	    if (pageSize === void 0) { pageSize = 10; }
	    if (maxPages === void 0) { maxPages = 10; }
	    // calculate total pages
	    var totalPages = Math.ceil(totalItems / pageSize);
	    // ensure current page isn't out of range
	    if (currentPage < 1) {
	        currentPage = 1;
	    }
	    else if (currentPage > totalPages) {
	        currentPage = totalPages;
	    }
	    var startPage, endPage;
	    if (totalPages <= maxPages) {
	        // total pages less than max so show all pages
	        startPage = 1;
	        endPage = totalPages;
	    }
	    else {
	        // total pages more than max so calculate start and end pages
	        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
	        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
	        if (currentPage <= maxPagesBeforeCurrentPage) {
	            // current page near the start
	            startPage = 1;
	            endPage = maxPages;
	        }
	        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
	            // current page near the end
	            startPage = totalPages - maxPages + 1;
	            endPage = totalPages;
	        }
	        else {
	            // current page somewhere in the middle
	            startPage = currentPage - maxPagesBeforeCurrentPage;
	            endPage = currentPage + maxPagesAfterCurrentPage;
	        }
	    }
	    // calculate start and end item indexes
	    var startIndex = (currentPage - 1) * pageSize;
	    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
	    // create an array of pages to ng-repeat in the pager control
	    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
	    // return object with all pager properties required by the view
	    return {
	        totalItems: totalItems,
	        currentPage: currentPage,
	        pageSize: pageSize,
	        totalPages: totalPages,
	        startPage: startPage,
	        endPage: endPage,
	        startIndex: startIndex,
	        endIndex: endIndex,
	        pages: pages
	    };
	}
	var jwPaginate = paginate;

	/**
	 * @alias PaginationProps
	 * @memberof Pagination
	 */

	const PaginationLink = styled__default(Button).attrs(props => ({
	  size: 'icon',
	  variant: props.variant ? props.variant : 'text'
	})).withConfig({
	  displayName: "pagination__PaginationLink",
	  componentId: "mldysb-0"
	})(["min-width:28px;height:28px;line-height:12px;padding:3px 6px;text-align:center;"]);
	PaginationLink.defaultProps = {
	  className: cssClass('PaginationLink')
	};
	const PaginationWrapper = styled__default(Box).withConfig({
	  displayName: "pagination__PaginationWrapper",
	  componentId: "mldysb-1"
	})(["display:inline-block;padding:2px;border:1px solid ", ";& >:first-child{width:56px;border-right:1px solid ", ";}& >:nth-child(2){padding-left:16px;}& >:last-child{width:56px;border-left:1px solid ", ";}& >:nth-last-child(2){padding-right:16px;}"], ({
	  theme
	}) => theme.colors.grey20, ({
	  theme
	}) => theme.colors.grey20, ({
	  theme
	}) => theme.colors.grey20);
	/**
	 * Pagination component
	 *
	 * @component
	 * @subcategory Molecules
	 * @example
	 * const location = { search: ''}
	 * return (
	 *   <Text py="xl" textAlign="center">
	 *     <Pagination
	 *      total={100}
	 *      page={4}
	 *      perPage={10}
	 *      location={location}
	 *      onChange={(item) => alert(`clicked ${item}`)}
	 *   />
	 *   </Text>
	 * )
	 */

	const Pagination = props => {
	  const {
	    total,
	    page,
	    perPage,
	    onChange,
	    ...rest
	  } = props;
	  const currentPage = page || 1;
	  const paginate = jwPaginate(total, currentPage, perPage);
	  const isFirstPage = currentPage === paginate.startPage;
	  const isLastPage = currentPage === paginate.endPage;
	  const prevPage = isFirstPage ? currentPage : currentPage - 1;
	  const nextPage = isLastPage ? currentPage : currentPage + 1;

	  if (paginate.totalPages === 1 || total === 0) {
	    return null;
	  }

	  return /*#__PURE__*/React__default.createElement(PaginationWrapper, _extends_1({
	    className: cssClass('Pagination')
	  }, rest), /*#__PURE__*/React__default.createElement(PaginationLink, {
	    "data-testid": "previous",
	    disabled: isFirstPage,
	    onClick: () => !isFirstPage ? onChange(prevPage) : undefined
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "ChevronLeft"
	  })), paginate.pages.map(p => /*#__PURE__*/React__default.createElement(PaginationLink, {
	    key: p,
	    onClick: () => onChange(p),
	    variant: p === currentPage ? 'primary' : 'text',
	    className: cssClass('PaginationLink', p === currentPage ? 'current' : ''),
	    "data-testid": `page-${p}`
	  }, p)), /*#__PURE__*/React__default.createElement(PaginationLink, {
	    "data-testid": "next",
	    onClick: () => !isLastPage ? onChange(nextPage) : undefined,
	    disabled: isLastPage
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "ChevronRight"
	  })));
	};

	/**
	 * @component
	 * @private
	 */

	const DrawerFooter = styled__default.section.withConfig({
	  displayName: "drawer-footer__DrawerFooter",
	  componentId: "sc-3rx7tf-0"
	})(["padding:", " ", ";text-align:center;flex-shrink:0;", ";"], ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.lg, styledSystem.space);

	const DOCS = 'https://softwarebrothers.github.io/admin-bro-dev';
	const DEFAULT_PATHS = {
	  rootPath: '/admin',
	  logoutPath: '/admin/logout',
	  loginPath: '/admin/login',
	};

	const DEFAULT_DRAWER_WIDTH = '500px';

	/* eslint-disable no-shadow */
	/**
	 * Props for Drawer component. Apart from those described below it also extends all
	 * {@link SpaceProps}.
	 *
	 * @alias DrawerProps
	 * @memberof Drawer
	 */

	const variants$4 = styledSystem.variant({
	  variants: {
	    filter: {
	      bg: 'filterBg',
	      width: '400px',
	      color: 'white',
	      className: cssClass(['Drawer', 'Drawer_Filter'])
	    }
	  }
	});
	/**
	 * Drawer component renders a huge side area where {@link BaseActionComponent} renders
	 * all actions where {@link Action.showInDrawer} is set to true.
	 *
	 * You probably don't want to use it directly in your actions, but if you decide to set
	 * `showInDrawer` to true you will probably want to use `DrawerContent` or `DrawerFooter`
	 * components.
	 *
	 * All these components: Drawer, DrawerContent and Drawer Footer extends {@link SpaceProps}.
	 *
	 * Usage
	 * ```javascript
	 * import { Drawer, DrawerProps, DrawerContent, DrawerFooter } from 'admin-bro
	 * ```
	 *
	 * @component
	 * @subcategory Molecules
	 * @example
	 * return (
	 * <Box height="500px">
	 *   <Drawer>
	 *     <DrawerContent>
	 *       <Header.H3>
	 *         <Button size="icon" rounded mr="lg">
	 *           <Icon icon="ChevronRight" />
	 *         </Button>
	 *         Edit
	 *       </Header.H3>
	 *       <Box my="x3" p={0}>
	 *         <Button size="sm">
	 *           <Icon icon="Information" />
	 *           Info
	 *         </Button>
	 *         <Button size="sm" ml="lg">
	 *           <Icon icon="Delete" />
	 *           Delete
	 *         </Button>
	 *       </Box>
	 *
	 *     </DrawerContent>
	 *     <DrawerFooter>
	 *       <Button variant="primary">
	 *         Save
	 *       </Button>
	 *     </DrawerFooter>
	 *   </Drawer>
	 * </Box>
	 * )
	 */

	const Drawer = styled__default.section.withConfig({
	  displayName: "drawer__Drawer",
	  componentId: "cg2yfu-0"
	})(["z-index:100;position:fixed;display:flex;flex-direction:column;top:0;right:", ";&.hidden{right:", ";}box-shadow:0 3px 6px ", ";height:100%;overflow-y:auto;overflow-x:hidden;transition:all 500ms;background:", ";box-sizing:border-box;& > ", "{border-top:1px solid ", ";", ";}max-width:100%;", ";", ";", ";"], ({
	  isHidden,
	  width
	}) => isHidden ? `-${width?.toString()}` : '0px;', ({
	  width
	}) => `-${width?.toString()}`, ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.colors.white, DrawerFooter, ({
	  theme
	}) => theme.colors.primary20, ({
	  variant,
	  theme
	}) => variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '', styledSystem.space, styledSystem.layout, variants$4);
	Drawer.defaultProps = {
	  width: DEFAULT_DRAWER_WIDTH,
	  className: cssClass('Drawer')
	};

	/**
	 * @component
	 * @private
	 */

	const DrawerContent = styled__default.section.withConfig({
	  displayName: "drawer-content__DrawerContent",
	  componentId: "sc-1j25263-0"
	})(["flex-grow:1;overflow:auto;padding:", " ", " ", ";box-sizing:border-box;", ";"], ({
	  theme
	}) => theme.space.x3, ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.xl, styledSystem.space);

	const height = '46px';
	const LoggedUserInfo = styled__default(Box).withConfig({
	  displayName: "logged-user__LoggedUserInfo",
	  componentId: "sc-18venfn-0"
	})(["display:flex;flex-direction:row;vertical-align:middle;color:", ";height:", ";& img{border-radius:9999px;margin-right:0 8px;width:36px;height:36px;object-fit:cover;border-radius:9999px;}"], ({
	  theme
	}) => theme.colors.grey60, height);
	const LoggedUser = props => {
	  const {
	    email,
	    title,
	    avatarUrl,
	    children
	  } = props;
	  return /*#__PURE__*/React__default.createElement(DropDown, null, /*#__PURE__*/React__default.createElement(DropDownTrigger, null, /*#__PURE__*/React__default.createElement(LoggedUserInfo, {
	    pr: "xl"
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    mr: "default"
	  }, /*#__PURE__*/React__default.createElement(Text, {
	    fontSize: "default",
	    lineHeight: title ? 'lg' : 'xl',
	    fontWeight: "normal"
	  }, email), /*#__PURE__*/React__default.createElement(Text, {
	    fontSize: "sm",
	    color: "grey40",
	    lineHeight: "sm"
	  }, title)), avatarUrl ? /*#__PURE__*/React__default.createElement("img", {
	    src: avatarUrl,
	    alt: "avatar"
	  }) : null, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "OverflowMenuVertical",
	    size: 16,
	    my: "default",
	    color: "grey60"
	  }))), /*#__PURE__*/React__default.createElement(DropDownMenu, {
	    top: height
	  }, children));
	};

	const NavGroupTitle = styled__default(Text).withConfig({
	  displayName: "nav-group__NavGroupTitle",
	  componentId: "cgnh9m-0"
	})(["padding:11px 20px;color:", ";border-radius:9999px;display:flex;cursor:pointer;& > ", "{display:block;flex-grow:1;line-height:", ";}& svg{vertical-align:middle;padding-bottom:2px;flex-shrink:0;}& svg:first-child{padding-right:", ";}& svg:last-child{}"], ({
	  theme
	}) => theme.colors.grey100, Text, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.space.lg);
	NavGroupTitle.defaultProps = {
	  className: cssClass('NavGroupTitle')
	};
	/**
	 * @memberof NavGroup
	 * @alias NavGroupProps
	 */

	/**
	 * NavGroup is used in a navigation sidebar to group similar elements
	 *
	 * Usage
	 * ```javascript
	 * import { NavGroup, NavGroupProps } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Molecules
	 * @example
	 * return (
	 *   <Box py="xl">
	 *     <NavGroup title="Some group title" icon="Add">
	 *       <Text>Some group element</Text>
	 *     </NavGroup>
	 *   </Box>
	 * )
	 */
	const NavGroup = props => {
	  const {
	    title,
	    icon,
	    children
	  } = props;
	  const [isItOpen, toggleOpen] = React.useState(true);
	  const chevron = isItOpen ? 'ChevronUp' : 'ChevronDown';
	  return /*#__PURE__*/React__default.createElement(Box, {
	    className: cssClass('NavGroup')
	  }, /*#__PURE__*/React__default.createElement(NavGroupTitle, {
	    onClick: () => toggleOpen(!isItOpen),
	    bg: isItOpen ? 'grey20' : 'transparent'
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: icon || 'Settings'
	  }), /*#__PURE__*/React__default.createElement(Text, null, title), /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: chevron
	  })), isItOpen ? /*#__PURE__*/React__default.createElement(Box, {
	    pl: "x3",
	    pb: "xl",
	    pt: "sm"
	  }, children) : '');
	};

	/**
	 * Handler which is invoked when user clicks given step
	 *
	 * @alias OnStepClickHandler
	 * @memberof Step
	 */

	const Circle$1 = styled__default(Box).withConfig({
	  displayName: "step__Circle",
	  componentId: "lwj9a7-0"
	})(["border-width:1px;border-style:solid;border-radius:9999px;text-align:center;"]);
	Circle$1.defaultProps = {
	  py: 'default',
	  px: 'default',
	  minWidth: '34px',
	  height: '34px'
	};
	const StyledStep = styled__default.div.withConfig({
	  displayName: "step__StyledStep",
	  componentId: "lwj9a7-1"
	})(["flex:1 1 0px;display:flex;flex-direction:row;& > ", "{", ";border-bottom:2px solid ", ";}", ";"], Box, ({
	  disabled
	}) => !disabled ? 'cursor: pointer' : '', ({
	  active,
	  theme
	}) => active ? theme.colors.primary100 : 'transparent', styledSystem.space);
	/**
	 * Step represents one of the tab in placed inside {@link Stepper} component.
	 * You can use it alone or with before-mentioned {@link Stepper}.
	 *
	 * @subcategory Molecules
	 * @component
	 * @example <caption>Regular step</caption>
	 * return (
	 *   <Box p="default">
	 *     <Step number="1">Normal Step</Step>
	 *  </Box>
	 * )
	 *
	 * @example <caption>Active steps</caption>
	 * return (
	 *   <Box p="default">
	 *     <Step number="1" active>I am active</Step>
	 *  </Box>
	 * )
	 *
	 * @example <caption>Active steps</caption>
	 * return (
	 *   <Box p="default">
	 *     <Step number="1" completed>This was done !!!</Step>
	 *  </Box>
	 * )
	 *
	 * @example <caption>Clickable step</caption>
	 * const onClick = () => alert('Why did you click me?')
	 *
	 * return (
	 *   <Box p="default">
	 *     <Step number="1" onClick={onClick}>Click me if you dare</Step>
	 *  </Box>
	 * )
	 *
	 */

	const Step = props => {
	  const {
	    number,
	    completed,
	    children,
	    active,
	    disabled,
	    onClick,
	    className
	  } = props;
	  return /*#__PURE__*/React__default.createElement(StyledStep, {
	    active: active,
	    disabled: disabled || !onClick,
	    className: cssClass('Step', className)
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    flexShrink: 1,
	    flexGrow: 0,
	    flex: true,
	    flexDirection: "row",
	    pt: "lg",
	    pb: "default",
	    onClick: () => !disabled && onClick && onClick(number)
	  }, /*#__PURE__*/React__default.createElement(Circle$1, {
	    bg: completed ? 'grey40' : 'transparent',
	    borderColor: active ? 'primary100' : 'grey40',
	    color: active ? 'primary100' : 'grey40'
	  }, completed ? /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Checkmark",
	    color: "white"
	  }) : number), /*#__PURE__*/React__default.createElement(Text, {
	    my: "sm",
	    pl: "default",
	    py: "sm",
	    color: active || completed ? 'grey100' : 'grey40'
	  }, children)));
	};

	/**
	 * It provides wizard workflow where user can go through a couple of steps.
	 * Stepper makes sense when you use it along with {@link Step} component.
	 *
	 * It receives all the same props as {@link Box} - {@link BoxProps}.
	 *
	 * @component
	 * @subcategory Molecules
	 * @example <caption>Clickable steps</caption>
	 * const { useState } = React
	 * const steps = [{
	 *   number: 1, label: "Do this first",
	 * }, {
	 *   number: 2, label: "Don't forget this",
	 * }, {
	 *   number: 3, label: "And finally this",
	 * }]
	 * const ComponentWithStepper = () => {
	 *   const [currentStep, setCurrentStep] = useState(1)
	 *   return (
	 *   <Box>
	 *     <Stepper>
	 *     {steps.map(step => (
	 *        <Step
	 *          active={currentStep === step.number}
	 *          completed={currentStep > step.number}
	 *          onClick={setCurrentStep}
	 *          number={step.number}
	 *        >
	 *          {step.label}
	 *        </Step>
	 *     ))}
	 *     </Stepper>
	 *   </Box>
	 *   )
	 * }
	 *
	 * return (<ComponentWithStepper />)
	 *
	 * @example <caption>Steps with bottom navigation</caption>
	 * const { useState } = React
	 * const steps = [{
	 *   number: 1, label: "Do this first",
	 * }, {
	 *   number: 2, label: "Don't forget this",
	 * }, {
	 *   number: 3, label: "And finally this",
	 * }]
	 * const ComponentWithStepper = () => {
	 *   const [currentStep, setCurrentStep] = useState(1)
	 *   return (
	 *   <Box>
	 *     <Stepper>
	 *     {steps.map(step => (
	 *        <Step
	 *          active={currentStep === step.number}
	 *          completed={currentStep > step.number}
	 *          number={step.number}
	 *        >
	 *          {step.label}
	 *        </Step>
	 *     ))}
	 *     </Stepper>
	 *     <Box mt="xl">
	 *       <Button
	 *         disabled={currentStep === 1}
	 *         mr="default"
	 *         onClick={() => setCurrentStep(currentStep - 1)}
	 *       >
	 *         Previous Step
	 *       </Button>
	 *       <Button
	 *         disabled={currentStep === 3}
	 *         variant="primary"
	 *         onClick={() => setCurrentStep(currentStep + 1)}
	 *       >
	 *         Next Step
	 *       </Button>
	 *     </Box>
	 *   </Box>
	 *   )
	 * }
	 *
	 * return (<ComponentWithStepper />)

	 */

	const Stepper = styled__default(Box).withConfig({
	  displayName: "stepper__Stepper",
	  componentId: "sc-4y3vcc-0"
	})([""]);
	Stepper.defaultProps = {
	  flex: true,
	  flexDirection: ['column', 'row'],
	  borderBottom: '1px solid',
	  borderBottomColor: 'separator',
	  className: cssClass('Stepper')
	};

	/* eslint-disable import/prefer-default-export */
	const Navigation = styled__default(Box).withConfig({
	  displayName: "navigation__Navigation",
	  componentId: "sc-1bfbg8s-0"
	})(["height:100%;width:", ";padding:", ";display:flex;flex-direction:column;overflow:auto;border-right:1px solid ", ";flex-shrink:0;background:", ";z-index:50;transition:all 500ms;left:0;&.hidden{left:-", ";transition:all 500ms;}"], ({
	  theme
	}) => theme.sizes.sidebarWidth, ({
	  theme
	}) => theme.space.lg, ({
	  theme
	}) => theme.colors.grey20, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.sizes.sidebarWidth);
	Navigation.defaultProps = {
	  className: cssClass('Navigation')
	};



	var Components = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Badge: Badge,
		ButtonCSS: ButtonCSS,
		Button: Button,
		CheckboxRadioContainer: CheckboxRadioContainer,
		CheckBox: CheckBox,
		Radio: Radio,
		Text: Text,
		Label: Label,
		Link: Link,
		InputCSS: InputCSS,
		Input: Input,
		TextArea: TextArea,
		Illustration: Illustration,
		Overlay: Overlay,
		Box: Box,
		Table: Table,
		TableHead: TableHead,
		TableBody: TableBody,
		TableCell: TableCell,
		TableRow: TableRow,
		TableCaption: TableCaption,
		Header: Header,
		H1: H1,
		H2: H2,
		H3: H3,
		H4: H4,
		H5: H5,
		H6: H6,
		Icon: Icon$1,
		Section: Section,
		Loader: Loader,
		Placeholder: Placeholder,
		FormGroup: FormGroup,
		InputGroup: InputGroup,
		FormMessage: FormMessage,
		DatePicker: DatePicker,
		DropZone: DropZone,
		DropZoneItem: DropZoneItem,
		InfoBox: InfoBox,
		MessageBox: MessageBox,
		DropDown: DropDown,
		DropDownItem: DropDownItem,
		DropDownMenu: DropDownMenu,
		DropDownTrigger: DropDownTrigger,
		Pagination: Pagination,
		Drawer: Drawer,
		DrawerContent: DrawerContent,
		DrawerFooter: DrawerFooter,
		LoggedUser: LoggedUser,
		NavGroup: NavGroup,
		Step: Step,
		Stepper: Stepper,
		Navigation: Navigation
	});

	const LogoLink = styled__default(reactRouterDom.Link).withConfig({
	  displayName: "sidebar-branding__LogoLink",
	  componentId: "sc-1ozeetj-0"
	})(["display:flex;align-items:center;text-decoration:none;color:", ";& > img{margin-right:12px;}"], ({
	  theme
	}) => theme.colors.grey80);

	const SidebarBranding = props => {
	  const {
	    branding
	  } = props;
	  const {
	    logo,
	    companyName
	  } = branding;
	  const h = new ViewHelpers();
	  return /*#__PURE__*/React__default.createElement(H5, null, /*#__PURE__*/React__default.createElement(LogoLink, {
	    to: h.dashboardUrl()
	  }, logo && /*#__PURE__*/React__default.createElement("img", {
	    src: logo,
	    alt: companyName,
	    height: "35px"
	  }), /*#__PURE__*/React__default.createElement("span", null, companyName)));
	};

	const SidebarLink = styled__default(reactRouterDom.NavLink).withConfig({
	  displayName: "sidebar-linkstyled__SidebarLink",
	  componentId: "sc-13hc6f5-0"
	})(["color:", ";padding:", ";display:block;text-decoration:none;&:hover{color:", ";}&.active span{color:", ";}"], ({
	  theme
	}) => theme.colors.grey80, ({
	  theme
	}) => theme.space.sm, ({
	  theme
	}) => theme.colors.hoverBg, ({
	  theme
	}) => theme.colors.primary100);

	const SidebarResource = props => {
	  const {
	    resource
	  } = props;
	  const regExp = new RegExp(`/resources/${resource.id}($|/)`);

	  const isActive = (match, location) => !!location.pathname.match(regExp);

	  if (!resource.href) {
	    return null;
	  }

	  return /*#__PURE__*/React__default.createElement(SidebarLink, {
	    to: resource.href,
	    isActive: isActive,
	    "data-testid": "sidebar-resource-link"
	  }, /*#__PURE__*/React__default.createElement(Text, {
	    as: "span"
	  }, resource.name));
	};

	var SidebarResource$1 = reactRouterDom.withRouter(SidebarResource);

	/* eslint-disable no-alert */
	let globalAny$1 = {};

	try {
	  globalAny$1 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  } else {
	    globalAny$1 = {
	      isOnServer: true
	    };
	  }
	}
	/**
	 * Type of an [axios request]{@link https://github.com/axios/axios/blob/master/index.d.ts#L43}
	 *
	 * @typedef {object} AxiosRequestConfig
	 * @alias AxiosRequestConfig
	 * @memberof ApiClient
	 * @see https://github.com/axios/axios/blob/master/index.d.ts#L43
	 */


	const checkResponse = response => {
	  if (globalAny$1.isOnServer) {
	    return;
	  }

	  const loginUrl = [globalAny$1.location.origin, globalAny$1.REDUX_STATE.paths.loginPath].join(''); // if response has redirect to loginUrl

	  if (response.request.responseURL && response.request.responseURL.match(loginUrl)) {
	    // eslint-disable-next-line no-undef
	    alert('Your session expired. You will be redirected to login screen');
	    globalAny$1.location.assign(loginUrl);
	  }
	};
	/**
	 * Extends {@link AxiosRequestConfig}
	 *
	 * @alias ResourceActionAPIParams
	 * @memberof ApiClient
	 * @property {any}   ...    any property supported by {@link AxiosRequestConfig}
	 */


	/**
	 * Client which access the admin API.
	 * Use it to fetch data from auto generated AdminBro API.
	 *
	 * In the backend it uses [axios](https://github.com/axios/axios) client
	 * library.
	 *
	 * Usage:
	 * ```javascript
	 * import { ApiClient } from 'admin-bro'
	 *
	 * const api = new ApiClient()
	 * // fetching all records
	 * api.resourceAction({ resourceId: 'Comments', actionName: 'list' }).then(results => {...})
	 * ```
	 * @see https://github.com/axios/axios
	 */
	class ApiClient {
	  constructor() {
	    this.baseURL = ApiClient.getBaseUrl();
	    this.client = axios.create({
	      baseURL: this.baseURL
	    });
	  }

	  static getBaseUrl() {
	    if (globalAny$1.isOnServer) {
	      return '';
	    }

	    return [globalAny$1.location.origin, globalAny$1.REDUX_STATE?.paths.rootPath].join('');
	  }
	  /**
	   * Search by query string for records in a given resource.
	   *
	   * @param   {Object}  options
	   * @param   {String}  options.resourceId  id of a {@link ResourceJSON}
	   * @param   {String}  options.query       query string
	   *
	   * @return  {Promise<SearchResponse>}
	   */


	  async searchRecords({
	    resourceId,
	    query
	  }) {
	    if (globalAny$1.isOnServer) {
	      return [];
	    }

	    const actionName = 'search';
	    const response = await this.resourceAction({
	      resourceId,
	      actionName,
	      query
	    });
	    checkResponse(response);
	    return response.data.records;
	  }
	  /**
	   * Invokes given resource {@link Action} on the backend.
	   *
	   * @param   {ResourceActionAPIParams}     options
	   * @return  {Promise<ActionResponse>}     response from an {@link Action}
	   */


	  async resourceAction(options) {
	    const {
	      resourceId,
	      actionName,
	      data,
	      query,
	      ...axiosParams
	    } = options;
	    let url = `/api/resources/${resourceId}/actions/${actionName}`;

	    if (query) {
	      const q = encodeURIComponent(query);
	      url = [url, q].join('/');
	    }

	    const response = await this.client.request({
	      url,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given record {@link Action} on the backend.
	   *
	   * @param   {RecordActionAPIParams} options
	   * @return  {Promise<RecordActionResponse>}            response from an {@link Action}
	   */


	  async recordAction(options) {
	    const {
	      resourceId,
	      recordId,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/records/${recordId}/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given bulk {@link Action} on the backend.
	   *
	   * @param   {BulkActionAPIParams} options
	   * @return  {Promise<BulkActionResponse>}            response from an {@link Action}
	   */


	  async bulkAction(options) {
	    const {
	      resourceId,
	      recordIds,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const params = new URLSearchParams();
	    params.set('recordIds', recordIds.join(','));
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/bulk/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data,
	      params
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes dashboard handler.
	   *
	   * @param   {AxiosRequestConfig}       options
	   * @return  {Promise<any>}             response from the handler function defined in
	   *                                     {@link AdminBroOptions#dashboard}
	   */


	  async getDashboard(options = {}) {
	    const response = await this.client.get('/api/dashboard', options);
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes handler function of given page and returns its response.
	   *
	   * @param   {GetPageAPIParams}                options
	   * @return  {Promise<any>}                    response from the handler of given page
	   *                                            defined in {@link AdminBroOptions#pages}
	   */


	  async getPage(options) {
	    const {
	      pageName,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/pages/${pageName}`,
	      ...axiosParams
	    });
	    checkResponse(response);
	    return response;
	  }

	}

	const {
	  flatten,
	  unflatten
	} = flat__default;
	/**
	 * Changes RecordJSON that it can be send as a FormData to the backend.
	 *
	 * @param   {RecordJSON}  record
	 * @return  {FormData}
	 */

	function recordToFormData(record) {
	  const formData = new FormData(); // First let make sure that all the fields in the record.params are properly flatten.
	  // That is why we unflatten all properties and create regular object, where flat
	  // overwrite prevents from having 2 keys referencing the same property. And
	  // the result is flatten again.

	  const normalizedParams = flatten(unflatten(record.params, {
	    overwrite: true
	  }));
	  Object.entries(normalizedParams).forEach(([key, value]) => {
	    // flatten does not change empty objects "{}" - so in order to prevent having them changed to
	    // "[object Object]" we have to set them to empty strings. File objects has to go through.
	    // eslint-disable-next-line no-undef
	    if (value === null || typeof value === 'object' && value.constructor !== File) {
	      formData.set(key, '');
	    } else {
	      formData.set(key, value);
	    }
	  });
	  return formData;
	}

	const REFRESH_KEY = 'refresh';
	/**
	 * Adds refresh=true to the url, which in turn should cause list to reload.
	 *
	 * @param {string} url      url to which function should add `refresh`
	 * @param {string} [search] optional search query which should be updated,
	 *                          if not given function will use window.location.search
	 * @private
	 */

	const appendForceRefresh = (url, search) => {
	  const params = new URLSearchParams(search ?? window.location.search);
	  params.set(REFRESH_KEY, 'true');
	  return `${url}?${params}`;
	};
	const hasForceRefresh = search => {
	  const params = new URLSearchParams(search);
	  return !!params.get(REFRESH_KEY);
	};
	const removeForceRefresh = search => {
	  const params = new URLSearchParams(search);

	  if (params.get(REFRESH_KEY)) {
	    params.delete(REFRESH_KEY);
	  }

	  return params.toString();
	};

	const api = new ApiClient();

	const useResourceEdit = (initialRecord, resourceId, onNotice) => {
	  const [record, setRecord] = React.useState({ ...initialRecord,
	    params: initialRecord?.params ?? {},
	    errors: initialRecord?.errors ?? {},
	    populated: initialRecord?.populated ?? {}
	  });
	  const [loading, setLoading] = React.useState(false);
	  const history = reactRouter.useHistory();

	  const handleChange = (propertyOrRecord, value) => {
	    if (typeof value === 'undefined' && !(typeof propertyOrRecord === 'string') && propertyOrRecord.params) {
	      setRecord(propertyOrRecord);
	    } else {
	      setRecord(prev => ({ ...prev,
	        params: { ...prev.params,
	          [propertyOrRecord]: value
	        }
	      }));
	    }
	  };

	  const handleSubmit = event => {
	    const formData = recordToFormData(record);
	    setLoading(true);
	    api.recordAction({
	      resourceId,
	      actionName: 'edit',
	      recordId: record.id,
	      data: formData,
	      headers: {
	        'Content-Type': 'multipart/form-data'
	      }
	    }).then(response => {
	      if (response.data.notice) {
	        onNotice(response.data.notice);
	      }

	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      } else {
	        setRecord(prev => ({ ...prev,
	          errors: response.data.record.errors
	        }));
	        setLoading(false);
	      }
	    }).catch(() => {
	      setLoading(false);
	      onNotice({
	        message: 'There was an error updating record, Check out console to see more information.',
	        type: 'error'
	      });
	    });
	    event.preventDefault();
	    return false;
	  };

	  return {
	    record,
	    handleChange,
	    handleSubmit,
	    loading
	  };
	};

	const api$1 = new ApiClient();

	const useResourceNew = (initialRecord, resourceId, onNotice) => {
	  const [record, setRecord] = React.useState({ ...initialRecord,
	    params: initialRecord?.params ?? {},
	    errors: initialRecord?.errors ?? {},
	    populated: initialRecord?.populated ?? {}
	  });
	  const [loading, setLoading] = React.useState(false);
	  const history = reactRouter.useHistory();

	  const handleChange = (propertyOrRecord, value) => {
	    if (typeof value === 'undefined' && !(typeof propertyOrRecord === 'string') && propertyOrRecord.params) {
	      setRecord(propertyOrRecord);
	    } else {
	      setRecord(prev => ({ ...prev,
	        params: { ...prev.params,
	          [propertyOrRecord]: value
	        }
	      }));
	    }
	  };

	  const handleSubmit = event => {
	    const formData = recordToFormData(record);
	    setLoading(true);
	    api$1.resourceAction({
	      resourceId,
	      actionName: 'new',
	      data: formData,
	      headers: {
	        'Content-Type': 'multipart/form-data'
	      }
	    }).then(response => {
	      if (response.data.notice) {
	        onNotice(response.data.notice);
	      }

	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      } else {
	        setRecord(prev => ({ ...prev,
	          errors: response.data.record.errors
	        }));
	        setLoading(false);
	      }
	    }).catch(() => {
	      setLoading(false);
	      onNotice({
	        message: 'There was an error updating record, Check out console to see more information.',
	        type: 'error'
	      });
	    });
	    event.preventDefault();
	    return false;
	  };

	  return {
	    record,
	    handleChange,
	    handleSubmit,
	    loading
	  };
	};

	const useSelectedRecords = records => {
	  const [selectedRecords, setSelectedRecords] = React.useState([]);

	  const handleSelect = record => {
	    const selectedIndex = selectedRecords.findIndex(selected => selected.id === record.id);

	    if (selectedIndex < 0) {
	      setSelectedRecords([...selectedRecords, record]);
	    } else {
	      const newSelectedRecords = [...selectedRecords];
	      newSelectedRecords.splice(selectedIndex, 1);
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  const handleSelectAll = () => {
	    const missing = records.filter(record => !selectedRecords.find(selected => selected.id === record.id) && record.bulkActions.length);

	    if (missing.length) {
	      setSelectedRecords([...selectedRecords, ...missing]);
	    } else {
	      const newSelectedRecords = selectedRecords.filter(selected => !records.find(record => record.id === selected.id));
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  return {
	    handleSelect,
	    handleSelectAll,
	    selectedRecords,
	    setSelectedRecords
	  };
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	const setCurrentAdmin = (data = null) => ({
	  type: 'SESSION_INITIALIZE',
	  data
	});
	const addNotice = (data = {
	  message: ''
	}) => ({
	  type: 'ADD_NOTICE',
	  data: {
	    message: data.message,
	    id: Math.random().toString(36).substr(2, 9),
	    type: data.type || 'success',
	    progress: 0
	  }
	});
	const setNoticeProgress = ({
	  noticeId,
	  progress
	}) => ({
	  type: 'SET_NOTICE_PROGRESS',
	  data: {
	    noticeId,
	    progress
	  }
	});
	const dropNotice = noticeId => ({
	  type: 'DROP_NOTICE',
	  data: {
	    noticeId
	  }
	});

	const resourcesReducer = (state = [], action) => {
	  switch (action.type) {
	    case 'RESOURCES_INITIALIZE':
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pagesReducer = (state = [], action) => {
	  switch (action.type) {
	    case 'PAGES_INITIALIZE':
	      return action.data;

	    default:
	      return state;
	  }
	};

	const localesReducer = (state = {
	  language: 'en',
	  translations: {}
	}, action) => {
	  switch (action.type) {
	    case 'LOCALE_INITIALIZE':
	      return action.data;

	    default:
	      return state;
	  }
	};

	const brandingReducer = (state = {}, action) => {
	  switch (action.type) {
	    case 'BRANDING_INITIALIZE':
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pathsReducer = (state = DEFAULT_PATHS, action) => {
	  switch (action.type) {
	    case 'PATHS_INITIALIZE':
	      return action.data;

	    default:
	      return state;
	  }
	};

	const dashboardReducer = (state = {}, action) => {
	  switch (action.type) {
	    case 'DASHBOARD_INITIALIZE':
	      return action.data;

	    default:
	      return state;
	  }
	};

	const sessionReducer = (state = null, action) => {
	  switch (action.type) {
	    case 'SESSION_INITIALIZE':
	      return action.data;

	    default:
	      return state;
	  }
	};

	const versionsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case 'VERSIONS_INITIALIZE':
	      return {
	        admin: action.data.admin,
	        app: action.data.app
	      };

	    default:
	      return state;
	  }
	};

	const noticesReducer = (state = [], action) => {
	  switch (action.type) {
	    case 'ADD_NOTICE':
	      {
	        const notices = [action.data];
	        return notices;
	      }

	    case 'DROP_NOTICE':
	      {
	        return state.filter(notice => notice.id !== action.data.noticeId);
	      }

	    case 'SET_NOTICE_PROGRESS':
	      {
	        return state.map(notice => ({ ...notice,
	          progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
	        }));
	      }

	    default:
	      return state;
	  }
	};

	const reducer = redux.combineReducers({
	  resources: resourcesReducer,
	  branding: brandingReducer,
	  paths: pathsReducer,
	  session: sessionReducer,
	  dashboard: dashboardReducer,
	  notices: noticesReducer,
	  versions: versionsReducer,
	  pages: pagesReducer,
	  locale: localesReducer
	});
	var createStore = ((initialState = {}) => redux.createStore(reducer, initialState));

	/**
	 * Hook which allows you to add notice message to the app.
	 *
	 * ```usage
	 * import { useNotice, Button } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const sendNotice = useNotice()
	 *   render (
	 *     <Button onClick={() => sendNotice({ message: 'I am awesome' })}>I am awesome</Button>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @subcategory Hooks
	 */
	const useNotice = () => {
	  const dispatch = reactRedux.useDispatch();
	  return notice => dispatch(addNotice(notice));
	};

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = _basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboRange + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString_1(string);
	  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr;

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords;

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$1 = '[' + rsComboRange$1 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString_1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos$1, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ$1 = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$2 + rsVarRange$1 + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

	/** Used to compose unicode character classes. */
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsVarRange$2 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$2 + ']',
	    rsCombo$2 = '[' + rsComboRange$3 + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return _hasUnicode(string)
	    ? _unicodeToArray(string)
	    : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString_1(string);

	    var strSymbols = _hasUnicode(string)
	      ? _stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? _castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = _createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst;

	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */
	var startCase = _createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + upperFirst_1(word);
	});

	var startCase_1 = startCase;

	/**
	 * @memberof TranslateFunctions
	 * @alias TranslateFunction
	 */

	const formatName = name => name.split('.').join('&#46;');

	const translate = (i18n, key, name, resourceId, options) => {
	  const realOptions = (typeof resourceId === 'string' ? options : resourceId) || {};
	  const formattedName = formatName(name);
	  let keys = [`${key}.${formattedName}`];

	  if (resourceId) {
	    keys = [`resources.${resourceId}.${key}.${formattedName}`, ...keys];
	  }

	  if (i18n.exists(keys)) {
	    return i18n.t(keys, realOptions);
	  }

	  return realOptions.defaultValue ?? startCase_1(name);
	};

	const createFunctions = i18n => {
	  const translateAction = (actionName, resourceId, options) => translate(i18n, 'actions', actionName, resourceId, options);

	  const translateButton = (buttonLabel, resourceId, options) => translate(i18n, 'buttons', buttonLabel, resourceId, options);

	  const translateLabel = (label, resourceId, options) => translate(i18n, 'labels', label, resourceId, options);

	  const translateProperty = (propertyName, resourceId, options) => translate(i18n, 'properties', propertyName, resourceId, options);

	  const translateMessage = (messageName, resourceId, options) => translate(i18n, 'messages', messageName, resourceId, options);

	  return {
	    translateAction,
	    ta: translateAction,
	    translateButton,
	    tb: translateButton,
	    translateLabel,
	    tl: translateLabel,
	    translateProperty,
	    tp: translateProperty,
	    translateMessage,
	    tm: translateMessage,
	    t: i18n.t,
	    translate: i18n.t
	  };
	};

	/**
	 * Extends {@link TranslateFunctions}. Apart from that it also returns all the properties
	 * defined below.
	 *
	 * ```javascript
	 * import { useTranslation } from 'admin-bro'
	 *
	 * const MyComponent = () => {
	 *   const { translateButton } = useTranslation()
	 *
	 *   return (
	 *     <Box>
	 *       <Button variant="primary" onClick={...}>{translateButton('save')}<Button>
	 *     </Box>
	 *   )
	 * }
	 * ```
	 *
	 * @memberof useTranslation
	 * @alias UseTranslationResponse
	 *
	 * @property {TranslateFunction} ... All functions defined in {@link TranslateFunctions}
	 */

	/**
	 * Extends the useTranslation hook from react-i18next library.
	 *
	 * Returns all the {@link TranslateFunctions} + methods returned by the original
	 * useTranslation method from react-i18next like: `i18n` instance and `ready` flag.
	 *
	 * @component
	 * @subcategory Hooks
	 */
	const useTranslation = () => {
	  // eslint-disable-next-line no-shadow
	  const {
	    i18n,
	    ...rest
	  } = reactI18next.useTranslation();
	  const translateFunctions = createFunctions(i18n);
	  return { ...rest,
	    i18n,
	    ...translateFunctions
	  };
	};

	/**
	 * Handlers of all [Actions]{@link Action} of type `record` returns record.
	 * Depending on a place and response we have to merge what was returned
	 * to the actual state. It is done in following places:
	 * - {@link useRecord} hook
	 * - {@link RecordInList} component
	 * - {@link RecordAction} component
	 *
	 * @private
	 */
	const mergeRecordResponse = (record, response) => ({ // we start from the response because it can have different recordActions or bulkActions
	  ...(response.record || record),
	  // records has to be reset every time because so that user wont
	  // see old errors which are not relevant anymore
	  errors: response.record.errors,
	  populated: { ...record.populated,
	    ...response.record.populated
	  },
	  params: { ...record.params,
	    ...response.record.params
	  }
	});

	/**
	 * Returns a function which takes a record and returns an updated record.
	 *
	 * @param {string}      property    property that must be updated, supports nesting
	 *                                  with dots
	 * @param {any}         value       value that must be set, undefined or null if
	 *                                  deleting, will be flattened
	 * @param {RecordJSON}  refRecord   if value is reference ID, this must be a record
	 *                                  it's referencing to
	 * @private
	 */
	const updateRecord = (property, value, refRecord) => previousRecord => {
	  let populatedModified = false;
	  const populatedCopy = { ...previousRecord.populated
	  };
	  const paramsCopy = { ...previousRecord.params
	  }; // clear previous value

	  Object.keys(paramsCopy).filter(key => key === property || key.startsWith(`${property}.`)).forEach(k => delete paramsCopy[k]);

	  if (property in populatedCopy) {
	    delete populatedCopy[property];
	    populatedModified = true;
	  } // set new value


	  if (typeof value !== 'undefined') {
	    if (typeof value === 'object' && !(value instanceof File) && value !== null) {
	      const flattened = flat__default.flatten(value);
	      Object.keys(flattened).forEach(key => {
	        paramsCopy[`${property}.${key}`] = flattened[key];
	      });
	    } else {
	      paramsCopy[property] = value;
	    }

	    if (refRecord) {
	      populatedCopy[property] = refRecord;
	      populatedModified = true;
	    }
	  }

	  return { ...previousRecord,
	    params: paramsCopy,
	    populated: populatedModified ? populatedCopy : previousRecord.populated
	  };
	};

	const api$2 = new ApiClient();
	/**
	 * Result of useRecord hook
	 *
	 * @memberof useRecord
	 * @alias UseRecordResult
	 */

	/**
	 * A powerful, hook which allows you to manage an entire record of given type.
	 *
	 * Take a look of creating a component which renders form for some non-existing record.
	 * Form have name and surname fields. After clicking "save" user will create a new record.
	 * Consecutive calls will update it.
	 *
	 * ```javascript
	 * import { BasePropertyComponent, useRecord, Box, useTranslation } from 'admin-bro'
	 *
	 * const MyRecordActionComponent = (props) => {
	 *   const { record: initialRecord, resource, action } = props
	 *
	 *   const { record, handleChange, submit } = useRecord(initialRecord, resource.id)
	 *   const { translateButton } = useTranslation()
	 *
	 *   const nameProperty = resource.editProperties.find((property) => property.name === 'name')
	 *   const surnameProperty = resource.editProperties.find((property) => property.name === 'surname')
	 *
	 *   const handleSubmit = (event) => {
	 *     submit().then(() => {
	 *        // do something
	 *     })
	 *   }
	 *
	 *   return (
	 *     <Box
	 *       as="form"
	 *       onSubmit={handleSubmit}
	 *     >
	 *       <BasePropertyComponent
	 *         where="edit"
	 *         onChange={handleChange}
	 *         property={nameProperty}
	 *         resource={resource}
	 *         record={record}
	 *       />
	 *       <BasePropertyComponent
	 *         where="edit"
	 *         onChange={handleChange}
	 *         property={surnameProperty}
	 *         resource={resource}
	 *         record={record}
	 *       />
	 *       <Button variant="primary" size="lg">
	 *         {translateButton('save', resource.id)}
	 *       </Button>
	 *     </Box>
	 *   )
	 * }
	 * export default MyRecordActionComponent
	 * ```
	 *
	 * Returns {@link UseRecordResult}.
	 *
	 * @subcategory Hooks
	 * @component
	 */
	const useRecord = (initialRecord, resourceId) => {
	  const [loading, setLoading] = React.useState(false);
	  const [progress, setProgress] = React.useState(0);
	  const [record, setRecord] = React.useState({ ...initialRecord,
	    params: initialRecord?.params ?? {},
	    errors: initialRecord?.errors ?? {},
	    populated: initialRecord?.populated ?? {}
	  });
	  const onNotice = useNotice();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);
	  const handleChange = React.useCallback((propertyOrRecord, value, incomingRecord) => {
	    if (typeof value === 'undefined' && !(typeof propertyOrRecord === 'string') && propertyOrRecord.params) {
	      setRecord(propertyOrRecord);
	    } else {
	      setRecord(updateRecord(propertyOrRecord, value, incomingRecord));
	    }
	  }, [setRecord]);
	  const handleSubmit = React.useCallback((customParams = {}) => {
	    setLoading(true);
	    const formData = recordToFormData(record);
	    Object.entries(customParams).forEach(([key, value]) => formData.set(key, value));
	    const params = {
	      resourceId,
	      onUploadProgress: e => setProgress(Math.round(e.loaded * 100 / e.total)),
	      data: formData,
	      headers: {
	        'Content-Type': 'multipart/form-data'
	      }
	    };
	    const promise = record.id ? api$2.recordAction({ ...params,
	      actionName: 'edit',
	      recordId: record.id
	    }) : api$2.resourceAction({ ...params,
	      actionName: 'new'
	    });
	    promise.then(response => {
	      if (response.data.notice) {
	        onNotice(response.data.notice);
	      }

	      setRecord(prev => mergeRecordResponse(prev, response.data));
	      setProgress(0);
	      setLoading(false);
	    }).catch(() => {
	      onNotice({
	        message: 'There was an error updating record, Check out console to see more information.',
	        type: 'error'
	      });
	      setProgress(0);
	      setLoading(false);
	    });
	    return promise;
	  }, [record, resourceId, setLoading, setProgress]);
	  return {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    progress
	  };
	};

	const api$3 = new ApiClient();
	const useRecords = resourceId => {
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const [perPage, setPerPage] = React.useState(10);
	  const [page, setPage] = React.useState(1);
	  const [total, setTotal] = React.useState(0);
	  const [direction, setDirection] = React.useState('asc');
	  const [sortBy, setSortBy] = React.useState();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const onNotice = useNotice();

	  const fetchData = () => {
	    setLoading(true);
	    const query = new URLSearchParams(location.search);
	    const promise = api$3.resourceAction({
	      actionName: 'list',
	      resourceId,
	      params: query
	    });
	    promise.then(response => {
	      const listActionResponse = response.data;

	      if (listActionResponse.notice) {
	        onNotice(listActionResponse.notice);
	      }

	      if (listActionResponse.redirectUrl) {
	        history.push(listActionResponse.redirectUrl);
	        return;
	      }

	      setRecords(listActionResponse.records);
	      setPage(listActionResponse.meta.page);
	      setPerPage(listActionResponse.meta.perPage);
	      setTotal(listActionResponse.meta.total);
	      setDirection(listActionResponse.meta.direction);
	      setSortBy(listActionResponse.meta.sortBy);
	      setLoading(false);
	    }).catch(() => {
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	    });
	    return promise;
	  };

	  React.useEffect(() => {
	    if (hasForceRefresh(location.search)) {
	      history.replace([location.pathname, removeForceRefresh(location.search).toString()].join('?'));
	    } else {
	      fetchData();
	    }
	  }, [resourceId, location.search]);
	  return {
	    records,
	    loading,
	    page,
	    total,
	    direction,
	    sortBy,
	    perPage,
	    fetchData
	  };
	};

	/**
	 * Hook which allows you to get and set currentAdmin
	 *
	 * ```usage
	 * import { useCurrentAdmin } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
	 *   // ...
	 * }
	 * ```
	 *
	 * @component
	 * @subcategory Hooks
	 */
	const useCurrentAdmin = () => {
	  const currentAdmin = reactRedux.useSelector(state => state.session);
	  const dispatch = reactRedux.useDispatch();
	  return [currentAdmin, admin => dispatch(setCurrentAdmin(admin))];
	};



	var Hooks = /*#__PURE__*/Object.freeze({
		__proto__: null,
		useResourceEdit: useResourceEdit,
		useResourceNew: useResourceNew,
		updateRecord: updateRecord,
		useSelectedRecords: useSelectedRecords,
		useNotice: useNotice,
		useTranslation: useTranslation,
		useRecord: useRecord,
		useRecords: useRecords,
		useCurrentAdmin: useCurrentAdmin
	});

	const SidebarParent = props => {
	  const {
	    parent
	  } = props;
	  const {
	    icon,
	    name,
	    resources
	  } = parent;
	  const {
	    translateLabel
	  } = useTranslation();

	  if (!parent.name) {
	    return /*#__PURE__*/React__default.createElement(Box, {
	      pl: "default",
	      pb: "xl",
	      pt: "sm",
	      ml: "sm",
	      className: cssClass('SidebarParent')
	    }, resources.map(resource => /*#__PURE__*/React__default.createElement(SidebarResource$1, {
	      resource: resource,
	      key: resource.id
	    })));
	  }

	  return /*#__PURE__*/React__default.createElement(NavGroup, {
	    icon: icon,
	    title: translateLabel(name)
	  }, resources.map(resource => /*#__PURE__*/React__default.createElement(SidebarResource$1, {
	    resource: resource,
	    key: resource.id
	  })));
	};

	const SidebarPages = props => {
	  const {
	    pages
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const h = new ViewHelpers();

	  if (!pages || !pages.length) {
	    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null);
	  }

	  const isActive = (page, location) => !!location.pathname.match(`/pages/${page.name}`);

	  return /*#__PURE__*/React__default.createElement(Box, {
	    ml: "lg"
	  }, /*#__PURE__*/React__default.createElement(Label, {
	    uppercase: true,
	    color: "grey60",
	    mb: "lg"
	  }, translateLabel('pages')), pages.map(page => /*#__PURE__*/React__default.createElement(SidebarLink, {
	    to: h.pageUrl(page.name),
	    key: page.name,
	    isActive: (match, location) => isActive(page, location),
	    "data-testid": "sidebar-page-link"
	  }, /*#__PURE__*/React__default.createElement(Text, {
	    as: "span"
	  }, translateLabel(page.name)))));
	};

	/* eslint-disable no-param-reassign */
	var groupResources = (resources => {
	  const visibleResources = resources.filter(res => res.href);
	  const map = visibleResources.reduce((memo, resource) => {
	    const key = resource.parent?.name || '';

	    if (memo[key]) {
	      memo[key].push(resource);
	    } else {
	      memo[key] = [resource];
	    }

	    memo[key].icon = resource.parent?.icon;
	    return memo;
	  }, {});
	  return Object.keys(map).map(parentName => ({
	    name: parentName,
	    icon: map[parentName].icon,
	    resources: map[parentName]
	  }));
	});

	/**
	 * @private
	 *
	 * Overrides one of the component form AdminBro core when user pass its name to
	 * {@link AdminBro.bundle} method.
	 *
	 * If case of being overridden, component receives additional prop: `OriginalComponent`
	 *
	 * @example
	 * AdminBro.bundle('./path/to/component', 'SidebarFooter')
	 */

	function allowOverride(OriginalComponent, name) {
	  const WrapperComponent = props => {
	    let globalAny = window;
	    globalAny = window;
	    let Component = OriginalComponent;

	    if (globalAny.AdminBro && globalAny.AdminBro.UserComponents && globalAny.AdminBro.UserComponents[name]) {
	      Component = globalAny.AdminBro.UserComponents[name];
	      return /*#__PURE__*/React__default.createElement(Component, _extends_1({}, props, {
	        OriginalComponent: OriginalComponent
	      }));
	    }

	    return /*#__PURE__*/React__default.createElement(Component, props);
	  };

	  return WrapperComponent;
	}

	const SidebarFooter = () => /*#__PURE__*/React__default.createElement(Box, {
	  mt: "lg"
	}, /*#__PURE__*/React__default.createElement(Text, {
	  color: "grey60",
	  textAlign: "center",
	  fontSize: "sm"
	}, "With", /*#__PURE__*/React__default.createElement(Icon$1, {
	  icon: "FavoriteFilled",
	  color: "love",
	  mx: "xs"
	}), "by", /*#__PURE__*/React__default.createElement(Link, {
	  href: "http://softwarebrothers.co",
	  target: "_blank",
	  rel: "noopener noreferrer",
	  mx: "xs"
	}, "SoftwareBrothers")));

	var SidebarFooter$1 = allowOverride(SidebarFooter, 'SidebarFooter');

	const Sidebar = props => {
	  const {
	    isVisible
	  } = props;
	  const [branding, resources, pages] = reactRedux.useSelector(state => [state.branding, state.resources, state.pages]);
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(Navigation, {
	    className: isVisible ? 'visible' : 'hidden',
	    position: ['absolute', 'absolute', 'absolute', 'absolute', 'inherit']
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    flexShrink: 0,
	    px: "lg",
	    pb: "xxl",
	    className: cssClass('Logo')
	  }, /*#__PURE__*/React__default.createElement(SidebarBranding, {
	    branding: branding
	  })), /*#__PURE__*/React__default.createElement(Box, {
	    flexGrow: 1,
	    className: cssClass('Resources')
	  }, /*#__PURE__*/React__default.createElement(Label, {
	    uppercase: true,
	    ml: "lg",
	    color: "grey60"
	  }, translateLabel('navigation')), groupResources(resources).map(parent => /*#__PURE__*/React__default.createElement(SidebarParent, {
	    parent: parent,
	    key: parent.name
	  }))), /*#__PURE__*/React__default.createElement(SidebarPages, {
	    pages: pages
	  }), branding.softwareBrothers && /*#__PURE__*/React__default.createElement(SidebarFooter$1, null));
	};

	const LoggedIn = props => {
	  const {
	    session,
	    paths
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(Box, {
	    flexShrink: 0,
	    py: "lg"
	  }, /*#__PURE__*/React__default.createElement(LoggedUser, {
	    email: session.email,
	    title: session.title,
	    avatarUrl: session.avatarUrl
	  }, /*#__PURE__*/React__default.createElement(DropDownItem, null, /*#__PURE__*/React__default.createElement(Link, {
	    href: paths.logoutPath
	  }, translateButton('logout')))));
	};

	var LoggedIn$1 = allowOverride(LoggedIn, 'LoggedIn');

	const VersionItem = styled__default(Text).withConfig({
	  displayName: "version__VersionItem",
	  componentId: "rgspw3-0"
	})(["padding:12px 24px 12px 0;"]);
	VersionItem.defaultProps = {
	  display: ['none', 'block'],
	  color: 'grey100'
	};

	const Version = props => {
	  const {
	    versions
	  } = props;
	  const {
	    admin,
	    app
	  } = versions;
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(Box, {
	    flex: true,
	    flexGrow: 1,
	    py: "default",
	    px: "xxl",
	    className: cssClass('Version')
	  }, admin && /*#__PURE__*/React__default.createElement(VersionItem, null, translateLabel('adminVersion', {
	    version: admin
	  })), app && /*#__PURE__*/React__default.createElement(VersionItem, null, translateLabel('appVersion', {
	    version: app
	  })));
	};

	const NavBar = styled__default(Box).withConfig({
	  displayName: "top-bar__NavBar",
	  componentId: "sc-1qk1nql-0"
	})(["height:", ";border-bottom:1px solid ", ";background:", ";display:flex;flex-direction:row;flex-shrink:0;"], ({
	  theme
	}) => theme.sizes.navbarHeight, ({
	  theme
	}) => theme.colors.grey20, ({
	  theme
	}) => theme.colors.white);
	NavBar.defaultProps = {
	  className: cssClass('NavBar')
	};

	const TopBar = props => {
	  const {
	    toggleSidebar
	  } = props;
	  const [session, paths, versions] = reactRedux.useSelector(state => [state.session, state.paths, state.versions]);
	  return /*#__PURE__*/React__default.createElement(NavBar, null, /*#__PURE__*/React__default.createElement(Box, {
	    py: "lg",
	    px: ['default', 'lg'],
	    onClick: toggleSidebar,
	    display: ['block', 'block', 'block', 'block', 'none'],
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Menu",
	    size: 32,
	    color: "grey100"
	  })), /*#__PURE__*/React__default.createElement(Version, {
	    versions: versions
	  }), session && session.email ? /*#__PURE__*/React__default.createElement(LoggedIn$1, {
	    session: session,
	    paths: paths
	  }) : '');
	};

	const TIME_TO_DISAPPEAR = 3;

	class NoticeElement extends React__default.Component {
	  constructor(props) {
	    super(props);
	    const {
	      notice
	    } = props;
	    this.timer = null;
	    this.state = {
	      progress: notice.progress || 0
	    };
	  }

	  componentDidMount() {
	    const {
	      drop,
	      notice,
	      notifyProgress
	    } = this.props;
	    this.timer = setInterval(() => {
	      this.setState(state => {
	        const progress = state.progress + 100 / TIME_TO_DISAPPEAR;
	        notifyProgress({
	          noticeId: notice.id,
	          progress
	        });
	        return {
	          progress
	        };
	      });
	    }, 1000);
	    setTimeout(() => {
	      if (this.timer) {
	        clearInterval(this.timer);
	      }

	      drop();
	    }, 1000 * (TIME_TO_DISAPPEAR + 1));
	  }

	  componentWillUnmount() {
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	  }

	  render() {
	    const {
	      notice,
	      drop
	    } = this.props;
	    return /*#__PURE__*/React__default.createElement(MessageBox, {
	      style: {
	        minWidth: '480px'
	      },
	      message: notice.message,
	      variant: notice.type === 'success' ? 'success' : 'danger',
	      onCloseClick: drop
	    });
	  }

	}

	const NoticeBox = props => {
	  const {
	    drop,
	    notices,
	    notifyProgress
	  } = props;
	  const notice = notices.length ? notices[notices.length - 1] : null;

	  if (notice) {
	    return /*#__PURE__*/React__default.createElement(NoticeElement, {
	      key: notice.id,
	      notice: notice,
	      drop: () => drop(notice.id),
	      notifyProgress: notifyProgress
	    });
	  }

	  return /*#__PURE__*/React__default.createElement("div", null);
	};

	const mapStateToProps = state => ({
	  notices: state.notices
	});

	const mapDispatchToProps = dispatch => ({
	  drop: noticeId => dispatch(dropNotice(noticeId)),
	  notifyProgress: ({
	    noticeId,
	    progress
	  }) => dispatch(setNoticeProgress({
	    noticeId,
	    progress
	  }))
	});

	var Notice = reactRedux.connect(mapStateToProps, mapDispatchToProps)(NoticeBox);

	const pageHeaderHeight = 284;
	const pageHeaderPaddingY = 74;
	const pageHeaderPaddingX = 250;

	const DashboardHeader = () => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(Box, {
	    position: "relative",
	    overflow: "hidden"
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    position: "absolute",
	    top: 50,
	    left: -10,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default.createElement(Illustration, {
	    variant: "Rocket"
	  })), /*#__PURE__*/React__default.createElement(Box, {
	    position: "absolute",
	    top: -70,
	    right: -15,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default.createElement(Illustration, {
	    variant: "Moon"
	  })), /*#__PURE__*/React__default.createElement(Box, {
	    bg: "grey100",
	    height: pageHeaderHeight,
	    py: pageHeaderPaddingY,
	    px: ['default', 'lg', pageHeaderPaddingX]
	  }, /*#__PURE__*/React__default.createElement(Text, {
	    textAlign: "center",
	    color: "white"
	  }, /*#__PURE__*/React__default.createElement(H2, null, translateMessage('welcomeOnBoard_title')), /*#__PURE__*/React__default.createElement(Text, {
	    opacity: "0.8"
	  }, translateMessage('welcomeOnBoard_subtitle')))));
	};

	const boxes = ({
	  translateMessage
	}) => [{
	  variant: 'Planet',
	  title: translateMessage('addingResources_title'),
	  subtitle: translateMessage('addingResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-passing-resources.html'
	}, {
	  variant: 'DocumentCheck',
	  title: translateMessage('customizeResources_title'),
	  subtitle: translateMessage('customizeResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-customizing-resources.html'
	}, {
	  variant: 'DocumentSearch',
	  title: translateMessage('customizeActions_title'),
	  subtitle: translateMessage('customizeActions_subtitle'),
	  href: 'https://adminbro.com/tutorial-actions.html'
	}, {
	  variant: 'FlagInCog',
	  title: translateMessage('writeOwnComponents_title'),
	  subtitle: translateMessage('writeOwnComponents_subtitle'),
	  href: 'https://adminbro.com/tutorial-writing-react-components.html'
	}, {
	  variant: 'Folders',
	  title: translateMessage('customDashboard_title'),
	  subtitle: translateMessage('customDashboard_subtitle'),
	  href: 'https://adminbro.com/tutorial-custom-dashboard.html'
	}, {
	  variant: 'Astronaut',
	  title: translateMessage('roleBasedAccess_title'),
	  subtitle: translateMessage('roleBasedAccess_subtitle'),
	  href: 'https://adminbro.com/tutorial-rbac.html'
	}];

	const Card = styled__default(Box).withConfig({
	  displayName: "default-dashboard__Card",
	  componentId: "y6jxa9-0"
	})(["display:", ";color:", ";text-decoration:none;border:1px solid transparent;&:hover{border:1px solid ", ";box-shadow:", ";}"], ({
	  flex
	}) => flex ? 'flex' : 'block', ({
	  theme
	}) => theme.colors.grey100, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.shadows.cardHover);
	Card.defaultProps = {
	  variant: 'white',
	  boxShadow: 'card'
	};

	const Dashboard = () => {
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(Box, null, /*#__PURE__*/React__default.createElement(DashboardHeader, null), /*#__PURE__*/React__default.createElement(Box, {
	    mt: ['xl', 'xl', '-100px'],
	    mb: "xl",
	    mx: [0, 0, 0, 'auto'],
	    px: ['default', 'lg', 'xxl', '0'],
	    position: "relative",
	    flex: true,
	    flexDirection: "row",
	    flexWrap: "wrap",
	    width: [1, 1, 1, 1024]
	  }, boxes({
	    translateMessage
	  }).map((box, index) =>
	  /*#__PURE__*/
	  // eslint-disable-next-line react/no-array-index-key
	  React__default.createElement(Box, {
	    key: index,
	    width: [1, 1 / 2, 1 / 2, 1 / 3],
	    p: "lg"
	  }, /*#__PURE__*/React__default.createElement(Card, {
	    as: "a",
	    href: box.href
	  }, /*#__PURE__*/React__default.createElement(Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default.createElement(Illustration, {
	    variant: box.variant,
	    width: 100,
	    height: 70
	  }), /*#__PURE__*/React__default.createElement(H5, {
	    mt: "lg"
	  }, box.title), /*#__PURE__*/React__default.createElement(Text, null, box.subtitle))))), /*#__PURE__*/React__default.createElement(Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default.createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw"
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default.createElement(Illustration, {
	    variant: "SlackLogo"
	  })), /*#__PURE__*/React__default.createElement(Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default.createElement(H4, null, translateMessage('community_title')), /*#__PURE__*/React__default.createElement(Text, null, translateMessage('community_subtitle'))))), /*#__PURE__*/React__default.createElement(Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default.createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://github.com/SoftwareBrothers/admin-bro/issues"
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default.createElement(Illustration, {
	    variant: "GithubLogo"
	  })), /*#__PURE__*/React__default.createElement(Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default.createElement(H4, null, translateMessage('foundBug_title')), /*#__PURE__*/React__default.createElement(Text, null, translateMessage('foundBug_subtitle'))))), /*#__PURE__*/React__default.createElement(Box, {
	    variant: "white",
	    boxShadow: "card",
	    width: 1,
	    m: "lg"
	  }, /*#__PURE__*/React__default.createElement(Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default.createElement(Illustration, {
	    variant: "SoftwareBrothersLogo"
	  }), /*#__PURE__*/React__default.createElement(H4, null, translateMessage('needMoreSolutions_title')), /*#__PURE__*/React__default.createElement(Text, null, translateMessage('needMoreSolutions_subtitle')), /*#__PURE__*/React__default.createElement(Text, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default.createElement(Button, {
	    as: "a",
	    size: "sm",
	    variant: "primary",
	    href: "https://softwarebrothers.co/services"
	  }, translateButton('contactUs')))))));
	};

	const ErrorMessage = ({
	  error
	}) => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(MessageBox, {
	    m: "xxl",
	    variant: "danger",
	    message: "Javascript Error"
	  }, /*#__PURE__*/React__default.createElement(Text, null, error.toString()), /*#__PURE__*/React__default.createElement(Text, {
	    mt: "default"
	  }, translateMessage('seeConsoleForMore')));
	};

	class ErrorBoundary extends React__default.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      error: null
	    };
	  }

	  componentDidCatch(error) {
	    this.setState({
	      error
	    });
	  }

	  render() {
	    const {
	      children
	    } = this.props;
	    const {
	      error
	    } = this.state;

	    if (error !== null) {
	      return /*#__PURE__*/React__default.createElement(ErrorMessage, {
	        error: error
	      });
	    }

	    return children || null;
	  }

	}

	class Dashboard$1 extends React__default.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      dashboard
	    } = this.props;
	    const {
	      isClient
	    } = this.state;
	    let Component;

	    if (dashboard && dashboard.component && isClient && AdminBro.UserComponents[dashboard.component]) {
	      Component = AdminBro.UserComponents[dashboard.component];
	    } else {
	      Component = Dashboard;
	    }

	    return /*#__PURE__*/React__default.createElement(ErrorBoundary, null, /*#__PURE__*/React__default.createElement(Component, null));
	  }

	}

	const mapStateToProps$1 = state => ({
	  dashboard: state.dashboard
	});

	var Dashboard$2 = reactRedux.connect(mapStateToProps$1)(Dashboard$1);

	/**
	 * Converts flatten params to array items when given property is an array.
	 *
	 * What problem it solves:
	 * so let say user has a record with record.property:
	 * ```
	 * Item.0.imageVariants.0.dateCreated: "2019-09-19T10:00:00.000Z"
	 * Item.0.imageVariants.0.imageURL: "url to help"
	 * Item.0.imageVariants.0.isApproved: true
	 * Item.0.imageVariants.0.isDeleted: false
	 * Item.0.imageVariants.1.dateCreated: "2019-09-19T19:10:34.919Z"
	 * Item.0.imageVariants.1.imageURL: "url 2"
	 * ```
	 *
	 * this function for property: `Item.0.imageVariants` should return array with 2 items. Where for
	 * property `Item` array with one element
	 *
	 * @param {PropertyJSON} property
	 * @param {RecordJSON} record
	 *
	 * @private
	 */
	const convertParamsToArrayItems = (property, record) => {
	  const tempName = 'arrayField';
	  const regex = new RegExp(`^${property.name}`);
	  /**
	   * in this step we filter keys which starts with regex the same as name. So let say
	   * property name is: Item.0.imageVariants and the record.params is:
	   * {
	   *  'anyOtherKey': 'value'
	   *  'Item.0.imageVariants.0.dateCreated': '2019-09-19T10:00:00.000Z',
	   *  'Item.0.imageVariants.0.imageURL': 'url to help'
	   * }
	   *
	   * so keys will be `Item.0.imageVariants.0.dateCreated` and `Item.0.imageVariants.0.imageURL`
	   */

	  const keys = Object.keys(record.params).filter(key => key.match(regex));
	  /**
	   * Next, we create new object with only those keys. But we have to rename the regex part
	   * because it could has dots (take a look at const tempName = 'arrayField' on the top).
	   * If we didn't do this - then unflatten function wouldn't work.
	   *
	   * so in our example obj is not: {
	   *  'Item.0.imageVariants.0.dateCreated': '2019-09-19T10:00:00.000Z',
	   *  'Item.0.imageVariants.0.imageURL': 'url to help'
	   * }
	   *
	   * but: {
	   *  'arrayField.0.dateCreated': '2019-09-19T10:00:00.000Z',
	   *  'arrayField.0.imageURL': 'url to help'
	   * }
	   */

	  const obj = keys.reduce((memo, key) => ({ ...memo,
	    [key.replace(regex, tempName)]: record.params[key]
	  }), {});
	  /**
	   * In the last step we unflatten the object and return 'tempName' property:
	   * {
	   *  'arrayField: [{
	   *     dateCreated': '2019-09-19T10:00:00.000Z',
	   *     'arrayField.0.imageURL': 'url to help',
	   *   }],
	   * }['arrayField']
	   */

	  const unflatten = flat__default.unflatten(obj);
	  return unflatten[tempName] || [];
	};

	const {
	  flatten: flatten$1
	} = flat__default;
	/**
	 * for given params:
	 *
	 * example:
	 * ```
	 * anotherItem: 'value'
	 * Item.0.imageVariants.0.dateCreated: "2019-09-19T10:00:00.000Z"
	 * Item.0.imageVariants.0.imageURL: "url to help"
	 * Item.0.imageVariants.0.isApproved: true
	 * Item.0.imageVariants.0.isDeleted: false
	 * Item.0.imageVariants.1.dateCreated: "2019-09-19T19:10:34.919Z"
	 * Item.0.imageVariants.1.imageURL: "url 2"
	 * ```
	 *
	 * and given propertyPath, example: `Item.0.imageVariants`
	 * and new array, example: [{
	 *   dateCreated: "2019-09-19T19:10:34.919Z"
	 *   imageURL: "url 2"
	 * }]
	 *
	 * returns:
	 * ```
	 * anotherItem: 'value'
	 * Item.0.imageVariants.1.dateCreated: "2019-09-19T19:10:34.919Z"
	 * Item.0.imageVariants.1.imageURL: "url 2"
	 * ```
	 *
	 * @private
	 */

	function updateParamsArray(params, propertyPath, array) {
	  const regex = new RegExp(`^${propertyPath}`);
	  const filteredParams = Object.entries(params).filter(([key]) => !key.match(regex)).reduce((memo, [key, value]) => ({ ...memo,
	    [key]: value
	  }), {});
	  return flatten$1({ ...filteredParams,
	    [propertyPath]: array
	  });
	}

	const AddNewItemButton = props => {
	  const {
	    resource,
	    property
	  } = props;
	  const {
	    translateProperty,
	    translateButton
	  } = useTranslation();
	  const label = translateProperty(`${property.name}.addNewItem`, resource.id, {
	    defaultValue: translateButton('addNewItem', resource.id)
	  });
	  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Add"
	  }), label);
	};

	const {
	  flatten: flatten$2,
	  unflatten: unflatten$1
	} = flat__default;

	const normalizeParams = params => flatten$2(unflatten$1(params, {
	  overwrite: true
	}));

	const ItemRenderer = props => {
	  const {
	    ItemComponent,
	    property,
	    i,
	    onDelete
	  } = props;
	  return /*#__PURE__*/React__default.createElement(Box, {
	    flex: true,
	    flexDirection: "row",
	    alignItems: "center"
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    flexGrow: 1
	  }, /*#__PURE__*/React__default.createElement(ItemComponent, _extends_1({}, props, {
	    property: { ...property,
	      name: `${property.name}.${i}`,
	      label: `[${i + 1}]`,
	      isArray: false
	    }
	  }))), /*#__PURE__*/React__default.createElement(Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default.createElement(Button, {
	    ml: "default",
	    type: "button",
	    size: "icon",
	    onClick: event => onDelete(event),
	    variant: "danger"
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Delete"
	  }))));
	};

	class Edit extends React__default.Component {
	  constructor(props) {
	    super(props);
	    this.addNew = this.addNew.bind(this);
	  }

	  addNew(event) {
	    const {
	      property,
	      record,
	      onChange
	    } = this.props;
	    const items = convertParamsToArrayItems(property, record);
	    const newRecord = { ...record
	    };
	    newRecord.params = normalizeParams({ ...newRecord.params,
	      // otherwise yarn types is not working
	      [property.name]: [...items, property.subProperties.length ? {} : '']
	    });
	    onChange(newRecord);
	    event.preventDefault();
	    return false;
	  }

	  removeItem(i, event) {
	    const {
	      property,
	      record,
	      onChange
	    } = this.props;
	    const items = convertParamsToArrayItems(property, record);
	    const newItems = [...items];
	    newItems.splice(i, 1);
	    const newRecord = { ...record
	    };
	    newRecord.params = updateParamsArray(newRecord.params, property.name, newItems);
	    onChange(newRecord);
	    event.preventDefault();
	    return false;
	  }

	  renderInput() {
	    const {
	      property,
	      record,
	      resource
	    } = this.props;
	    const items = convertParamsToArrayItems(property, record);
	    return /*#__PURE__*/React__default.createElement(Section, {
	      mt: "xl"
	    }, items.map((item, i) => /*#__PURE__*/React__default.createElement(ItemRenderer, _extends_1({}, this.props, {
	      // eslint-disable-next-line react/no-array-index-key
	      key: i,
	      i: i,
	      onDelete: event => this.removeItem(i, event)
	    }))), /*#__PURE__*/React__default.createElement(Button, {
	      onClick: this.addNew,
	      type: "button",
	      size: "sm"
	    }, /*#__PURE__*/React__default.createElement(AddNewItemButton, {
	      resource: resource,
	      property: property
	    })));
	  }

	  render() {
	    const {
	      property,
	      record,
	      testId
	    } = this.props;
	    const error = record.errors && record.errors[property.name];
	    return /*#__PURE__*/React__default.createElement(FormGroup, {
	      error: !!error,
	      "data-testid": testId
	    }, /*#__PURE__*/React__default.createElement(Label, {
	      htmlFor: property.name
	    }, property.label), this.renderInput(), /*#__PURE__*/React__default.createElement(FormMessage, null, error && error.message));
	  }

	}

	const List = props => {
	  const {
	    property,
	    record
	  } = props;
	  const unflatten = flat__default.unflatten(record.params);
	  const values = unflatten[property.name] || [];
	  return /*#__PURE__*/React__default.createElement("span", null, `length: ${values.length}`);
	};

	class Show extends React__default.PureComponent {
	  render() {
	    const {
	      property,
	      record,
	      ItemComponent
	    } = this.props;
	    const items = convertParamsToArrayItems(property, record);
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement(Section, null, items.map((item, i) => /*#__PURE__*/React__default.createElement(ItemComponent, _extends_1({}, this.props, {
	      // eslint-disable-next-line react/no-array-index-key
	      key: i,
	      property: { ...property,
	        name: `${property.name}.${i}`,
	        label: `[${i + 1}]`,
	        isArray: false
	      }
	    })))));
	  }

	}

	// import Show from './show'

	var ArrayType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show,
		edit: Edit,
		list: List
	});

	const Edit$1 = props => {
	  const {
	    property,
	    record,
	    ItemComponent
	  } = props;
	  const error = record.errors && record.errors[property.name];
	  return /*#__PURE__*/React__default.createElement(FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default.createElement(Label, {
	    htmlFor: property.name
	  }, property.label), /*#__PURE__*/React__default.createElement(Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => /*#__PURE__*/React__default.createElement(ItemComponent, _extends_1({}, props, {
	    key: subProperty.name,
	    property: { ...subProperty,
	      name: `${property.name}.${subProperty.name}`
	    }
	  })))), /*#__PURE__*/React__default.createElement(FormMessage, null, error && error.message));
	};

	const Show$1 = props => {
	  const {
	    property,
	    ItemComponent
	  } = props;
	  return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement(Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => /*#__PURE__*/React__default.createElement(ItemComponent, _extends_1({}, props, {
	    key: subProperty.name,
	    property: { ...subProperty,
	      name: `${property.name}.${subProperty.name}`
	    }
	  })))));
	};

	// TODO define ItemComponent interface
	class List$1 extends React__default.PureComponent {
	  renderItems() {
	    const {
	      property,
	      ItemComponent
	    } = this.props;
	    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => /*#__PURE__*/React__default.createElement("div", {
	      key: subProperty.name
	    }, /*#__PURE__*/React__default.createElement(Label, {
	      inline: true
	    }, `${subProperty.label}: `), /*#__PURE__*/React__default.createElement(ItemComponent, _extends_1({}, this.props, {
	      key: subProperty.name,
	      property: { ...subProperty,
	        name: `${property.name}.${subProperty.name}`
	      }
	    })))));
	  }

	  render() {
	    const {
	      property,
	      record,
	      resource
	    } = this.props;
	    const showAction = record.recordActions.find(a => a.name === 'show');

	    if (resource.titleProperty.name === property.name && showAction) {
	      const h = new ViewHelpers();
	      const href = h.recordActionUrl({
	        resourceId: resource.id,
	        recordId: record.id,
	        actionName: 'show'
	      });
	      return /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
	        to: href
	      }, this.renderItems());
	    }

	    return this.renderItems();
	  }

	}

	// import Show from './show'

	var MixedType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$1,
		edit: Edit$1,
		list: List$1
	});

	const DefaultPropertyValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const rawValue = record?.params[property.name];

	  if (typeof rawValue === 'undefined') {
	    return null;
	  }

	  if (property.availableValues) {
	    const option = property.availableValues.find(opt => opt.value === rawValue);

	    if (!option) {
	      return rawValue;
	    }

	    return /*#__PURE__*/React__default.createElement(Badge, null, option?.label || rawValue);
	  }

	  return rawValue;
	};

	class Show$2 extends React__default.PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement(DefaultPropertyValue, this.props));
	  }

	}

	function areInputsEqual(newInputs, lastInputs) {
	    if (newInputs.length !== lastInputs.length) {
	        return false;
	    }
	    for (var i = 0; i < newInputs.length; i++) {
	        if (newInputs[i] !== lastInputs[i]) {
	            return false;
	        }
	    }
	    return true;
	}

	function memoizeOne(resultFn, isEqual) {
	    if (isEqual === void 0) { isEqual = areInputsEqual; }
	    var lastThis;
	    var lastArgs = [];
	    var lastResult;
	    var calledOnce = false;
	    function memoized() {
	        var newArgs = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            newArgs[_i] = arguments[_i];
	        }
	        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
	            return lastResult;
	        }
	        lastResult = resultFn.apply(this, newArgs);
	        calledOnce = true;
	        lastThis = this;
	        lastArgs = newArgs;
	        return lastResult;
	    }
	    return memoized;
	}

	function memoize(fn) {
	  var cache = {};
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	/* eslint-disable */
	// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
	function murmurhash2_32_gc(str) {
	  var l = str.length,
	      h = l ^ l,
	      i = 0,
	      k;

	  while (l >= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    k ^= k >>> 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
	    l -= 4;
	    ++i;
	  }

	  switch (l) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  }

	  h ^= h >>> 13;
	  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  h ^= h >>> 15;
	  return (h >>> 0).toString(36);
	}

	function stylis_min (W) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
	      g = e.charCodeAt(l);
	      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

	      if (0 === b + n + v + m) {
	        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;

	            default:
	              f += e.charAt(l);
	          }

	          g = 59;
	        }

	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;

	            for (t = ++l; l < B;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;

	                case 125:
	                  k--;
	                  break;

	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < J; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }

	                              break;

	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }

	                          }
	                        }

	                        l = u;
	                      }

	                  }

	                  break;

	                case 91:
	                  g++;

	                case 40:
	                  g++;

	                case 34:
	                case 39:
	                  for (; l++ < J && e.charCodeAt(l) !== g;) {
	                  }

	              }

	              if (0 === k) break;
	              l++;
	            }

	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);

	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;

	                  default:
	                    r = O;
	                }

	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(da, ea);

	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;

	                  case 107:
	                    f = f.replace(fa, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;

	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;

	              default:
	                k = M(c, X(c, f, I), k, h, a + 1);
	            }

	            F += k;
	            k = I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;

	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;

	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }

	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }

	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
	          z = 1;
	          D++;
	          break;

	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            z++;
	            break;
	          }

	        default:
	          z++;
	          y = e.charAt(l);

	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;

	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;

	            case 0:
	              y = '\\0';
	              break;

	            case 12:
	              y = '\\f';
	              break;

	            case 11:
	              y = '\\v';
	              break;

	            case 38:
	              0 === n + b + m && (r = I = 1, y = '\f' + y);
	              break;

	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

	                case 8:
	                  111 === K && (E = K);
	              }
	              break;

	            case 58:
	              0 === n + b + m && (u = l);
	              break;

	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;

	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;

	            case 91:
	              0 === n + b + v && m++;
	              break;

	            case 93:
	              0 === n + b + v && m--;
	              break;

	            case 41:
	              0 === n + b + m && v--;
	              break;

	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * K) {
	                  case 533:
	                    break;

	                  default:
	                    q = 1;
	                }
	                v++;
	              }

	              break;

	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;

	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;

	                    case 220:
	                      t = l, b = 42;
	                  }

	                  break;

	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }

	          0 === b && (f += y);
	      }

	      K = x;
	      x = g;
	      l++;
	    }

	    t = p.length;

	    if (0 < t) {
	      r = c;
	      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';

	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);

	        switch (E) {
	          case 111:
	            p = p.replace(ha, ':-moz-$1') + p;
	            break;

	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }

	        E = 0;
	      }
	    }

	    return G + p + F;
	  }

	  function X(d, c, e) {
	    var h = c.trim().split(ia);
	    c = h;
	    var a = h.length,
	        m = d.length;

	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;

	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = Z(d, c[b], e).trim();
	        }

	        break;

	      default:
	        var v = b = 0;

	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = Z(d[n] + ' ', h[b], e).trim();
	          }
	        }

	    }

	    return c;
	  }

	  function Z(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));

	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());

	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());

	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }

	    return d + c;
	  }

	  function P(d, c, e, h) {
	    var a = d + ';',
	        m = 2 * c + 3 * e + 4 * h;

	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }

	    if (0 === w || 2 === w && !L(a, 1)) return a;

	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;

	      case 969:
	      case 942:
	        return '-webkit-' + a + a;

	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;

	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
	        break;

	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;

	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;

	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

	      case 1005:
	        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;

	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;

	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;

	          case 220:
	            b = a.replace(G, 'lr');
	            break;

	          default:
	            return a;
	        }

	        return '-webkit-' + a + '-ms-' + b + a;

	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;

	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;

	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;

	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }

	        return a + ';';

	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
	        }
	        break;

	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

	      case 931:
	      case 953:
	        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;

	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
	    }

	    return a;
	  }

	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	        h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
	  }

	  function ea(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
	  }

	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < A; ++g) {
	      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;

	        default:
	          x = w;
	      }
	    }

	    if (x !== c) return x;
	  }

	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        A = S.length = 0;
	        break;

	      default:
	        switch (d.constructor) {
	          case Array:
	            for (var c = 0, e = d.length; c < e; ++c) {
	              T(d[c]);
	            }

	            break;

	          case Function:
	            S[A++] = d;
	            break;

	          case Boolean:
	            Y = !!d | 0;
	        }

	    }

	    return T;
	  }

	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }

	  function B(d, c) {
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];

	    if (0 < A) {
	      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }

	    var a = M(O, e, c, 0, 0);
	    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    z = D = 1;
	    return a;
	  }

	  var ca = /^\0+/g,
	      N = /[\0\r\f]/g,
	      aa = /: */g,
	      ka = /zoo|gra/,
	      ma = /([,: ])(transform)/g,
	      ia = /,\r+?/g,
	      F = /([\t\r\n ])*\f?&/g,
	      fa = /@(k\w+)\s*(\S*)\s*/,
	      Q = /::(place)/g,
	      ha = /:(read-only)/g,
	      G = /[svh]\w+-[tblr]{2}/,
	      da = /\(\s*(.*)\s*\)/g,
	      oa = /([\s\S]*?);/g,
	      ba = /-self|flex-/g,
	      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	      la = /stretch|:\s*\w+\-(?:conte|avail)/,
	      ja = /([^-])(image-set\()/,
	      z = 1,
	      D = 1,
	      E = 0,
	      w = 1,
	      O = [],
	      S = [],
	      A = 0,
	      R = null,
	      Y = 0,
	      V = '';
	  B.use = T;
	  B.set = U;
	  void 0 !== W && U(W);
	  return B;
	}

	var stylisRuleSheet = createCommonjsModule(function (module, exports) {
	(function (factory) {
		 (module['exports'] = factory()) ;
	}(function () {

		return function (insertRule) {
			var delimiter = '/*|*/';
			var needle = delimiter+'}';

			function toSheet (block) {
				if (block)
					try {
						insertRule(block + '}');
					} catch (e) {}
			}

			return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
				switch (context) {
					// property
					case 1:
						// @import
						if (depth === 0 && content.charCodeAt(0) === 64)
							return insertRule(content+';'), ''
						break
					// selector
					case 2:
						if (ns === 0)
							return content + delimiter
						break
					// at-rule
					case 3:
						switch (ns) {
							// @font-face, @page
							case 102:
							case 112:
								return insertRule(selectors[0]+content), ''
							default:
								return content + (at === 0 ? delimiter : '')
						}
					case -2:
						content.split(needle).forEach(toSheet);
				}
			}
		}
	}));
	});

	var hyphenateRegex = /[A-Z]|^ms/g;
	var processStyleName = memoize(function (styleName) {
	  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});
	var processStyleValue = function processStyleValue(key, value) {
	  if (value == null || typeof value === 'boolean') {
	    return '';
	  }

	  if (unitlessKeys[key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
	  !isNaN(value) && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	{
	  var contentValuePattern = /(attr|calc|counters?|url)\(/;
	  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
	  var oldProcessStyleValue = processStyleValue;

	  processStyleValue = function processStyleValue(key, value) {
	    if (key === 'content') {
	      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
	        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
	      }
	    }

	    return oldProcessStyleValue(key, value);
	  };
	}

	var classnames = function classnames(args) {
	  var len = args.length;
	  var i = 0;
	  var cls = '';

	  for (; i < len; i++) {
	    var arg = args[i];
	    if (arg == null) continue;
	    var toAdd = void 0;

	    switch (typeof arg) {
	      case 'boolean':
	        break;

	      case 'function':
	        {
	          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
	        }

	        toAdd = classnames([arg()]);
	        break;

	      case 'object':
	        {
	          if (Array.isArray(arg)) {
	            toAdd = classnames(arg);
	          } else {
	            toAdd = '';

	            for (var k in arg) {
	              if (arg[k] && k) {
	                toAdd && (toAdd += ' ');
	                toAdd += k;
	              }
	            }
	          }

	          break;
	        }

	      default:
	        {
	          toAdd = arg;
	        }
	    }

	    if (toAdd) {
	      cls && (cls += ' ');
	      cls += toAdd;
	    }
	  }

	  return cls;
	};
	var isBrowser = typeof document !== 'undefined';

	/*

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side

	// usage

	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()

	styleSheet.inject()
	- 'injects' the stylesheet into the page (or into memory if on server)

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function makeStyleTag(opts) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', opts.key || '');

	  if (opts.nonce !== undefined) {
	    tag.setAttribute('nonce', opts.nonce);
	  }

	  tag.appendChild(document.createTextNode('')) // $FlowFixMe
	  ;
	  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
	  return tag;
	}

	var StyleSheet =
	/*#__PURE__*/
	function () {
	  function StyleSheet(options) {
	    this.isSpeedy = "development" === 'production'; // the big drawback here is that the css won't be editable in devtools

	    this.tags = [];
	    this.ctr = 0;
	    this.opts = options;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.inject = function inject() {
	    if (this.injected) {
	      throw new Error('already injected!');
	    }

	    this.tags[0] = makeStyleTag(this.opts);
	    this.injected = true;
	  };

	  _proto.speedy = function speedy(bool) {
	    if (this.ctr !== 0) {
	      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
	      throw new Error("cannot change speedy now");
	    }

	    this.isSpeedy = !!bool;
	  };

	  _proto.insert = function insert(rule, sourceMap) {
	    // this is the ultrafast version, works across browsers
	    if (this.isSpeedy) {
	      var tag = this.tags[this.tags.length - 1];
	      var sheet = sheetForTag(tag);

	      try {
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	        {
	          console.warn('illegal rule', rule); // eslint-disable-line no-console
	        }
	      }
	    } else {
	      var _tag = makeStyleTag(this.opts);

	      this.tags.push(_tag);

	      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
	    }

	    this.ctr++;

	    if (this.ctr % 65000 === 0) {
	      this.tags.push(makeStyleTag(this.opts));
	    }
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0; // todo - look for remnants in document.styleSheets

	    this.injected = false;
	  };

	  return StyleSheet;
	}();

	function createEmotion(context, options) {
	  if (context.__SECRET_EMOTION__ !== undefined) {
	    return context.__SECRET_EMOTION__;
	  }

	  if (options === undefined) options = {};
	  var key = options.key || 'css';

	  {
	    if (/[^a-z-]/.test(key)) {
	      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
	    }
	  }

	  var current;

	  function insertRule(rule) {
	    current += rule;

	    if (isBrowser) {
	      sheet.insert(rule, currentSourceMap);
	    }
	  }

	  var insertionPlugin = stylisRuleSheet(insertRule);
	  var stylisOptions;

	  if (options.prefix !== undefined) {
	    stylisOptions = {
	      prefix: options.prefix
	    };
	  }

	  var caches = {
	    registered: {},
	    inserted: {},
	    nonce: options.nonce,
	    key: key
	  };
	  var sheet = new StyleSheet(options);

	  if (isBrowser) {
	    // 🚀
	    sheet.inject();
	  }

	  var stylis = new stylis_min(stylisOptions);
	  stylis.use(options.stylisPlugins)(insertionPlugin);
	  var currentSourceMap = '';

	  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
	    if (interpolation == null) {
	      return '';
	    }

	    switch (typeof interpolation) {
	      case 'boolean':
	        return '';

	      case 'function':
	        if (interpolation.__emotion_styles !== undefined) {
	          var selector = interpolation.toString();

	          if (selector === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
	            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	          }

	          return selector;
	        }

	        if (this === undefined && "development" !== 'production') {
	          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
	        }

	        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
	        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

	      case 'object':
	        return createStringFromObject.call(this, interpolation);

	      default:
	        var cached = caches.registered[interpolation];
	        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
	    }
	  }

	  var objectToStringCache = new WeakMap();

	  function createStringFromObject(obj) {
	    if (objectToStringCache.has(obj)) {
	      // $FlowFixMe
	      return objectToStringCache.get(obj);
	    }

	    var string = '';

	    if (Array.isArray(obj)) {
	      obj.forEach(function (interpolation) {
	        string += handleInterpolation.call(this, interpolation, false);
	      }, this);
	    } else {
	      Object.keys(obj).forEach(function (key) {
	        if (typeof obj[key] !== 'object') {
	          if (caches.registered[obj[key]] !== undefined) {
	            string += key + "{" + caches.registered[obj[key]] + "}";
	          } else {
	            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
	          }
	        } else {
	          if (key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
	            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	          }

	          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
	            obj[key].forEach(function (value) {
	              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
	            });
	          } else {
	            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
	          }
	        }
	      }, this);
	    }

	    objectToStringCache.set(obj, string);
	    return string;
	  }

	  var name;
	  var stylesWithLabel;
	  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

	  var createClassName = function createClassName(styles, identifierName) {
	    return murmurhash2_32_gc(styles + identifierName) + identifierName;
	  };

	  {
	    var oldCreateClassName = createClassName;
	    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

	    createClassName = function createClassName(styles, identifierName) {
	      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
	        currentSourceMap = sourceMap;
	        return '';
	      }), identifierName);
	    };
	  }

	  var createStyles = function createStyles(strings) {
	    var stringMode = true;
	    var styles = '';
	    var identifierName = '';

	    if (strings == null || strings.raw === undefined) {
	      stringMode = false;
	      styles += handleInterpolation.call(this, strings, false);
	    } else {
	      styles += strings[0];
	    }

	    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }

	    interpolations.forEach(function (interpolation, i) {
	      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
	      );

	      if (stringMode === true && strings[i + 1] !== undefined) {
	        styles += strings[i + 1];
	      }
	    }, this);
	    stylesWithLabel = styles;
	    styles = styles.replace(labelPattern, function (match, p1) {
	      identifierName += "-" + p1;
	      return '';
	    });
	    name = createClassName(styles, identifierName);
	    return styles;
	  };

	  {
	    var oldStylis = stylis;

	    stylis = function stylis(selector, styles) {
	      oldStylis(selector, styles);
	      currentSourceMap = '';
	    };
	  }

	  function insert(scope, styles) {
	    if (caches.inserted[name] === undefined) {
	      current = '';
	      stylis(scope, styles);
	      caches.inserted[name] = current;
	    }
	  }

	  var css = function css() {
	    var styles = createStyles.apply(this, arguments);
	    var selector = key + "-" + name;

	    if (caches.registered[selector] === undefined) {
	      caches.registered[selector] = stylesWithLabel;
	    }

	    insert("." + selector, styles);
	    return selector;
	  };

	  var keyframes = function keyframes() {
	    var styles = createStyles.apply(this, arguments);
	    var animation = "animation-" + name;
	    insert('', "@keyframes " + animation + "{" + styles + "}");
	    return animation;
	  };

	  var injectGlobal = function injectGlobal() {
	    var styles = createStyles.apply(this, arguments);
	    insert('', styles);
	  };

	  function getRegisteredStyles(registeredStyles, classNames) {
	    var rawClassName = '';
	    classNames.split(' ').forEach(function (className) {
	      if (caches.registered[className] !== undefined) {
	        registeredStyles.push(className);
	      } else {
	        rawClassName += className + " ";
	      }
	    });
	    return rawClassName;
	  }

	  function merge(className, sourceMap) {
	    var registeredStyles = [];
	    var rawClassName = getRegisteredStyles(registeredStyles, className);

	    if (registeredStyles.length < 2) {
	      return className;
	    }

	    return rawClassName + css(registeredStyles, sourceMap);
	  }

	  function cx() {
	    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      classNames[_key2] = arguments[_key2];
	    }

	    return merge(classnames(classNames));
	  }

	  function hydrateSingleId(id) {
	    caches.inserted[id] = true;
	  }

	  function hydrate(ids) {
	    ids.forEach(hydrateSingleId);
	  }

	  function flush() {
	    if (isBrowser) {
	      sheet.flush();
	      sheet.inject();
	    }

	    caches.inserted = {};
	    caches.registered = {};
	  }

	  if (isBrowser) {
	    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
	    Array.prototype.forEach.call(chunks, function (node) {
	      // $FlowFixMe
	      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

	      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
	    });
	  }

	  var emotion = {
	    flush: flush,
	    hydrate: hydrate,
	    cx: cx,
	    merge: merge,
	    getRegisteredStyles: getRegisteredStyles,
	    injectGlobal: injectGlobal,
	    keyframes: keyframes,
	    css: css,
	    sheet: sheet,
	    caches: caches
	  };
	  context.__SECRET_EMOTION__ = emotion;
	  return emotion;
	}

	var context = typeof global !== 'undefined' ? global : {};

	var _createEmotion = createEmotion(context),
	    flush = _createEmotion.flush,
	    hydrate = _createEmotion.hydrate,
	    cx = _createEmotion.cx,
	    merge = _createEmotion.merge,
	    getRegisteredStyles = _createEmotion.getRegisteredStyles,
	    injectGlobal = _createEmotion.injectGlobal,
	    keyframes = _createEmotion.keyframes,
	    css = _createEmotion.css,
	    sheet = _createEmotion.sheet,
	    caches = _createEmotion.caches;

	var performanceNow = createCommonjsModule(function (module) {
	// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(commonjsGlobal);


	});

	var root$1 = typeof window === 'undefined' ? commonjsGlobal : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root$1['request' + suffix]
	  , caf = root$1['cancel' + suffix] || root$1['cancelRequest' + suffix];

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root$1[vendors[i] + 'Request' + suffix];
	  caf = root$1[vendors[i] + 'Cancel' + suffix]
	      || root$1[vendors[i] + 'CancelRequest' + suffix];
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60;

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = performanceNow()
	        , next = Math.max(0, frameDuration - (_now - last));
	      last = next + _now;
	      setTimeout(function() {
	        var cp = queue.slice(0);
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0;
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last);
	            } catch(e) {
	              setTimeout(function() { throw e }, 0);
	            }
	          }
	        }
	      }, Math.round(next));
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    });
	    return id
	  };

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true;
	      }
	    }
	  };
	}

	var raf_1 = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root$1, fn)
	};
	var cancel = function() {
	  caf.apply(root$1, arguments);
	};
	var polyfill = function(object) {
	  if (!object) {
	    object = root$1;
	  }
	  object.requestAnimationFrame = raf;
	  object.cancelAnimationFrame = caf;
	};
	raf_1.cancel = cancel;
	raf_1.polyfill = polyfill;

	var AutosizeInput_1 = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



	var _react2 = _interopRequireDefault(React__default);



	var _propTypes2 = _interopRequireDefault(PropTypes$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var sizerStyle = {
		position: 'absolute',
		top: 0,
		left: 0,
		visibility: 'hidden',
		height: 0,
		overflow: 'scroll',
		whiteSpace: 'pre'
	};

	var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

	var cleanInputProps = function cleanInputProps(inputProps) {
		INPUT_PROPS_BLACKLIST.forEach(function (field) {
			return delete inputProps[field];
		});
		return inputProps;
	};

	var copyStyles = function copyStyles(styles, node) {
		node.style.fontSize = styles.fontSize;
		node.style.fontFamily = styles.fontFamily;
		node.style.fontWeight = styles.fontWeight;
		node.style.fontStyle = styles.fontStyle;
		node.style.letterSpacing = styles.letterSpacing;
		node.style.textTransform = styles.textTransform;
	};

	var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

	var generateId = function generateId() {
		// we only need an auto-generated ID for stylesheet injection, which is only
		// used for IE. so if the browser is not IE, this should return undefined.
		return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
	};

	var AutosizeInput = function (_Component) {
		_inherits(AutosizeInput, _Component);

		function AutosizeInput(props) {
			_classCallCheck(this, AutosizeInput);

			var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

			_this.inputRef = function (el) {
				_this.input = el;
				if (typeof _this.props.inputRef === 'function') {
					_this.props.inputRef(el);
				}
			};

			_this.placeHolderSizerRef = function (el) {
				_this.placeHolderSizer = el;
			};

			_this.sizerRef = function (el) {
				_this.sizer = el;
			};

			_this.state = {
				inputWidth: props.minWidth,
				inputId: props.id || generateId()
			};
			return _this;
		}

		_createClass(AutosizeInput, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.mounted = true;
				this.copyInputStyles();
				this.updateInputWidth();
			}
		}, {
			key: 'UNSAFE_componentWillReceiveProps',
			value: function UNSAFE_componentWillReceiveProps(nextProps) {
				var id = nextProps.id;

				if (id !== this.props.id) {
					this.setState({ inputId: id || generateId() });
				}
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {
				if (prevState.inputWidth !== this.state.inputWidth) {
					if (typeof this.props.onAutosize === 'function') {
						this.props.onAutosize(this.state.inputWidth);
					}
				}
				this.updateInputWidth();
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.mounted = false;
			}
		}, {
			key: 'copyInputStyles',
			value: function copyInputStyles() {
				if (!this.mounted || !window.getComputedStyle) {
					return;
				}
				var inputStyles = this.input && window.getComputedStyle(this.input);
				if (!inputStyles) {
					return;
				}
				copyStyles(inputStyles, this.sizer);
				if (this.placeHolderSizer) {
					copyStyles(inputStyles, this.placeHolderSizer);
				}
			}
		}, {
			key: 'updateInputWidth',
			value: function updateInputWidth() {
				if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
					return;
				}
				var newInputWidth = void 0;
				if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
					newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
				} else {
					newInputWidth = this.sizer.scrollWidth + 2;
				}
				// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
				var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
				newInputWidth += extraWidth;
				if (newInputWidth < this.props.minWidth) {
					newInputWidth = this.props.minWidth;
				}
				if (newInputWidth !== this.state.inputWidth) {
					this.setState({
						inputWidth: newInputWidth
					});
				}
			}
		}, {
			key: 'getInput',
			value: function getInput() {
				return this.input;
			}
		}, {
			key: 'focus',
			value: function focus() {
				this.input.focus();
			}
		}, {
			key: 'blur',
			value: function blur() {
				this.input.blur();
			}
		}, {
			key: 'select',
			value: function select() {
				this.input.select();
			}
		}, {
			key: 'renderStyles',
			value: function renderStyles() {
				// this method injects styles to hide IE's clear indicator, which messes
				// with input size detection. the stylesheet is only injected when the
				// browser is IE, and can also be disabled by the `injectStyles` prop.
				var injectStyles = this.props.injectStyles;

				return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
						__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
					} }) : null;
			}
		}, {
			key: 'render',
			value: function render() {
				var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
					if (previousValue !== null && previousValue !== undefined) {
						return previousValue;
					}
					return currentValue;
				});

				var wrapperStyle = _extends({}, this.props.style);
				if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

				var inputStyle = _extends({
					boxSizing: 'content-box',
					width: this.state.inputWidth + 'px'
				}, this.props.inputStyle);

				var inputProps = _objectWithoutProperties(this.props, []);

				cleanInputProps(inputProps);
				inputProps.className = this.props.inputClassName;
				inputProps.id = this.state.inputId;
				inputProps.style = inputStyle;

				return _react2.default.createElement(
					'div',
					{ className: this.props.className, style: wrapperStyle },
					this.renderStyles(),
					_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
					_react2.default.createElement(
						'div',
						{ ref: this.sizerRef, style: sizerStyle },
						sizerValue
					),
					this.props.placeholder ? _react2.default.createElement(
						'div',
						{ ref: this.placeHolderSizerRef, style: sizerStyle },
						this.props.placeholder
					) : null
				);
			}
		}]);

		return AutosizeInput;
	}(React__default.Component);

	AutosizeInput.propTypes = {
		className: _propTypes2.default.string, // className for the outer element
		defaultValue: _propTypes2.default.any, // default field value
		extraWidth: _propTypes2.default.oneOfType([// additional width for input element
		_propTypes2.default.number, _propTypes2.default.string]),
		id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
		injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
		inputClassName: _propTypes2.default.string, // className for the input element
		inputRef: _propTypes2.default.func, // ref callback for the input element
		inputStyle: _propTypes2.default.object, // css styles for the input element
		minWidth: _propTypes2.default.oneOfType([// minimum width for input element
		_propTypes2.default.number, _propTypes2.default.string]),
		onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
		onChange: _propTypes2.default.func, // onChange handler: function(event) {}
		placeholder: _propTypes2.default.string, // placeholder text
		placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
		style: _propTypes2.default.object, // css styles for the outer element
		value: _propTypes2.default.any // field value
	};
	AutosizeInput.defaultProps = {
		minWidth: 1,
		injectStyles: true
	};

	exports.default = AutosizeInput;
	});

	var AutosizeInput = unwrapExports(AutosizeInput_1);

	var interopRequireDefault = createCommonjsModule(function (module) {
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}

	module.exports = _interopRequireDefault;
	});

	unwrapExports(interopRequireDefault);

	var hasClass_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = hasClass;

	function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
	}

	module.exports = exports["default"];
	});

	unwrapExports(hasClass_1);

	var addClass_1 = createCommonjsModule(function (module, exports) {



	exports.__esModule = true;
	exports.default = addClass;

	var _hasClass = interopRequireDefault(hasClass_1);

	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
	}

	module.exports = exports["default"];
	});

	unwrapExports(addClass_1);

	function replaceClassName(origClass, classToRemove) {
	  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	}

	var removeClass = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}

	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}

	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;

	function polyfill$1(Component) {
	  var prototype = Component.prototype;

	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }

	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }

	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';

	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }

	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }

	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }

	    prototype.componentWillUpdate = componentWillUpdate;

	    var componentDidUpdate = prototype.componentDidUpdate;

	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;

	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }

	  return Component;
	}

	var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
		__proto__: null,
		polyfill: polyfill$1
	});

	var PropTypes = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.classNamesShape = exports.timeoutsShape = void 0;

	var _propTypes = _interopRequireDefault(PropTypes$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var timeoutsShape =  _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
	  enter: _propTypes.default.number,
	  exit: _propTypes.default.number,
	  appear: _propTypes.default.number
	}).isRequired]) ;
	exports.timeoutsShape = timeoutsShape;
	var classNamesShape =  _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
	  enter: _propTypes.default.string,
	  exit: _propTypes.default.string,
	  active: _propTypes.default.string
	}), _propTypes.default.shape({
	  enter: _propTypes.default.string,
	  enterDone: _propTypes.default.string,
	  enterActive: _propTypes.default.string,
	  exit: _propTypes.default.string,
	  exitDone: _propTypes.default.string,
	  exitActive: _propTypes.default.string
	})]) ;
	exports.classNamesShape = classNamesShape;
	});

	unwrapExports(PropTypes);
	var PropTypes_1 = PropTypes.classNamesShape;
	var PropTypes_2 = PropTypes.timeoutsShape;

	var Transition_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

	var PropTypes$2 = _interopRequireWildcard(PropTypes$1);

	var _react = _interopRequireDefault(React__default);

	var _reactDom = _interopRequireDefault(reactDom__default);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

	var UNMOUNTED = 'unmounted';
	exports.UNMOUNTED = UNMOUNTED;
	var EXITED = 'exited';
	exports.EXITED = EXITED;
	var ENTERING = 'entering';
	exports.ENTERING = ENTERING;
	var ENTERED = 'entered';
	exports.ENTERED = ENTERED;
	var EXITING = 'exiting';
	/**
	 * The Transition component lets you describe a transition from one component
	 * state to another _over time_ with a simple declarative API. Most commonly
	 * it's used to animate the mounting and unmounting of a component, but can also
	 * be used to describe in-place transition states as well.
	 *
	 * ---
	 *
	 * **Note**: `Transition` is a platform-agnostic base component. If you're using
	 * transitions in CSS, you'll probably want to use
	 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
	 * instead. It inherits all the features of `Transition`, but contains
	 * additional features necessary to play nice with CSS transitions (hence the
	 * name of the component).
	 *
	 * ---
	 *
	 * By default the `Transition` component does not alter the behavior of the
	 * component it renders, it only tracks "enter" and "exit" states for the
	 * components. It's up to you to give meaning and effect to those states. For
	 * example we can add styles to a component when it enters or exits:
	 *
	 * ```jsx
	 * import { Transition } from 'react-transition-group';
	 *
	 * const duration = 300;
	 *
	 * const defaultStyle = {
	 *   transition: `opacity ${duration}ms ease-in-out`,
	 *   opacity: 0,
	 * }
	 *
	 * const transitionStyles = {
	 *   entering: { opacity: 0 },
	 *   entered:  { opacity: 1 },
	 * };
	 *
	 * const Fade = ({ in: inProp }) => (
	 *   <Transition in={inProp} timeout={duration}>
	 *     {state => (
	 *       <div style={{
	 *         ...defaultStyle,
	 *         ...transitionStyles[state]
	 *       }}>
	 *         I'm a fade Transition!
	 *       </div>
	 *     )}
	 *   </Transition>
	 * );
	 * ```
	 *
	 * There are 4 main states a Transition can be in:
	 *  - `'entering'`
	 *  - `'entered'`
	 *  - `'exiting'`
	 *  - `'exited'`
	 *
	 * Transition state is toggled via the `in` prop. When `true` the component
	 * begins the "Enter" stage. During this stage, the component will shift from
	 * its current transition state, to `'entering'` for the duration of the
	 * transition and then to the `'entered'` stage once it's complete. Let's take
	 * the following example (we'll use the
	 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
	 *
	 * ```jsx
	 * function App() {
	 *   const [inProp, setInProp] = useState(false);
	 *   return (
	 *     <div>
	 *       <Transition in={inProp} timeout={500}>
	 *         {state => (
	 *           // ...
	 *         )}
	 *       </Transition>
	 *       <button onClick={() => setInProp(true)}>
	 *         Click to Enter
	 *       </button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the button is clicked the component will shift to the `'entering'` state
	 * and stay there for 500ms (the value of `timeout`) before it finally switches
	 * to `'entered'`.
	 *
	 * When `in` is `false` the same thing happens except the state moves from
	 * `'exiting'` to `'exited'`.
	 */

	exports.EXITING = EXITING;

	var Transition =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Transition, _React$Component);

	  function Transition(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;
	    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

	    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	    var initialStatus;
	    _this.appearStatus = null;

	    if (props.in) {
	      if (appear) {
	        initialStatus = EXITED;
	        _this.appearStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }

	    _this.state = {
	      status: initialStatus
	    };
	    _this.nextCallback = null;
	    return _this;
	  }

	  var _proto = Transition.prototype;

	  _proto.getChildContext = function getChildContext() {
	    return {
	      transitionGroup: null // allows for nested Transitions

	    };
	  };

	  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
	    var nextIn = _ref.in;

	    if (nextIn && prevState.status === UNMOUNTED) {
	      return {
	        status: EXITED
	      };
	    }

	    return null;
	  }; // getSnapshotBeforeUpdate(prevProps) {
	  //   let nextStatus = null
	  //   if (prevProps !== this.props) {
	  //     const { status } = this.state
	  //     if (this.props.in) {
	  //       if (status !== ENTERING && status !== ENTERED) {
	  //         nextStatus = ENTERING
	  //       }
	  //     } else {
	  //       if (status === ENTERING || status === ENTERED) {
	  //         nextStatus = EXITING
	  //       }
	  //     }
	  //   }
	  //   return { nextStatus }
	  // }


	  _proto.componentDidMount = function componentDidMount() {
	    this.updateStatus(true, this.appearStatus);
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var nextStatus = null;

	    if (prevProps !== this.props) {
	      var status = this.state.status;

	      if (this.props.in) {
	        if (status !== ENTERING && status !== ENTERED) {
	          nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          nextStatus = EXITING;
	        }
	      }
	    }

	    this.updateStatus(false, nextStatus);
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  _proto.getTimeouts = function getTimeouts() {
	    var timeout = this.props.timeout;
	    var exit, enter, appear;
	    exit = enter = appear = timeout;

	    if (timeout != null && typeof timeout !== 'number') {
	      exit = timeout.exit;
	      enter = timeout.enter; // TODO: remove fallback for next major

	      appear = timeout.appear !== undefined ? timeout.appear : enter;
	    }

	    return {
	      exit: exit,
	      enter: enter,
	      appear: appear
	    };
	  };

	  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
	    if (mounting === void 0) {
	      mounting = false;
	    }

	    if (nextStatus !== null) {
	      // nextStatus will always be ENTERING or EXITING.
	      this.cancelNextCallback();

	      var node = _reactDom.default.findDOMNode(this);

	      if (nextStatus === ENTERING) {
	        this.performEnter(node, mounting);
	      } else {
	        this.performExit(node);
	      }
	    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	      this.setState({
	        status: UNMOUNTED
	      });
	    }
	  };

	  _proto.performEnter = function performEnter(node, mounting) {
	    var _this2 = this;

	    var enter = this.props.enter;
	    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
	    var timeouts = this.getTimeouts();
	    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
	    // if we are mounting and running this it means appear _must_ be set

	    if (!mounting && !enter) {
	      this.safeSetState({
	        status: ENTERED
	      }, function () {
	        _this2.props.onEntered(node);
	      });
	      return;
	    }

	    this.props.onEnter(node, appearing);
	    this.safeSetState({
	      status: ENTERING
	    }, function () {
	      _this2.props.onEntering(node, appearing);

	      _this2.onTransitionEnd(node, enterTimeout, function () {
	        _this2.safeSetState({
	          status: ENTERED
	        }, function () {
	          _this2.props.onEntered(node, appearing);
	        });
	      });
	    });
	  };

	  _proto.performExit = function performExit(node) {
	    var _this3 = this;

	    var exit = this.props.exit;
	    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

	    if (!exit) {
	      this.safeSetState({
	        status: EXITED
	      }, function () {
	        _this3.props.onExited(node);
	      });
	      return;
	    }

	    this.props.onExit(node);
	    this.safeSetState({
	      status: EXITING
	    }, function () {
	      _this3.props.onExiting(node);

	      _this3.onTransitionEnd(node, timeouts.exit, function () {
	        _this3.safeSetState({
	          status: EXITED
	        }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };

	  _proto.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  _proto.safeSetState = function safeSetState(nextState, callback) {
	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    callback = this.setNextCallback(callback);
	    this.setState(nextState, callback);
	  };

	  _proto.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
	    this.setNextCallback(handler);
	    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

	    if (!node || doesNotHaveTimeoutOrListener) {
	      setTimeout(this.nextCallback, 0);
	      return;
	    }

	    if (this.props.addEndListener) {
	      this.props.addEndListener(node, this.nextCallback);
	    }

	    if (timeout != null) {
	      setTimeout(this.nextCallback, timeout);
	    }
	  };

	  _proto.render = function render() {
	    var status = this.state.status;

	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _this$props = this.props,
	        children = _this$props.children,
	        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


	    delete childProps.in;
	    delete childProps.mountOnEnter;
	    delete childProps.unmountOnExit;
	    delete childProps.appear;
	    delete childProps.enter;
	    delete childProps.exit;
	    delete childProps.timeout;
	    delete childProps.addEndListener;
	    delete childProps.onEnter;
	    delete childProps.onEntering;
	    delete childProps.onEntered;
	    delete childProps.onExit;
	    delete childProps.onExiting;
	    delete childProps.onExited;

	    if (typeof children === 'function') {
	      return children(status, childProps);
	    }

	    var child = _react.default.Children.only(children);

	    return _react.default.cloneElement(child, childProps);
	  };

	  return Transition;
	}(_react.default.Component);

	Transition.contextTypes = {
	  transitionGroup: PropTypes$2.object
	};
	Transition.childContextTypes = {
	  transitionGroup: function transitionGroup() {}
	};
	Transition.propTypes =  {
	  /**
	   * A `function` child can be used instead of a React element. This function is
	   * called with the current transition status (`'entering'`, `'entered'`,
	   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
	   * specific props to a component.
	   *
	   * ```jsx
	   * <Transition in={this.state.in} timeout={150}>
	   *   {state => (
	   *     <MyComponent className={`fade fade-${state}`} />
	   *   )}
	   * </Transition>
	   * ```
	   */
	  children: PropTypes$2.oneOfType([PropTypes$2.func.isRequired, PropTypes$2.element.isRequired]).isRequired,

	  /**
	   * Show the component; triggers the enter or exit states
	   */
	  in: PropTypes$2.bool,

	  /**
	   * By default the child component is mounted immediately along with
	   * the parent `Transition` component. If you want to "lazy mount" the component on the
	   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
	   * mounted, even on "exited", unless you also specify `unmountOnExit`.
	   */
	  mountOnEnter: PropTypes$2.bool,

	  /**
	   * By default the child component stays mounted after it reaches the `'exited'` state.
	   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
	   */
	  unmountOnExit: PropTypes$2.bool,

	  /**
	   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
	   * If you want to transition on the first mount set `appear` to `true`, and the
	   * component will transition in as soon as the `<Transition>` mounts.
	   *
	   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
	   */
	  appear: PropTypes$2.bool,

	  /**
	   * Enable or disable enter transitions.
	   */
	  enter: PropTypes$2.bool,

	  /**
	   * Enable or disable exit transitions.
	   */
	  exit: PropTypes$2.bool,

	  /**
	   * The duration of the transition, in milliseconds.
	   * Required unless `addEndListener` is provided.
	   *
	   * You may specify a single timeout for all transitions:
	   *
	   * ```jsx
	   * timeout={500}
	   * ```
	   *
	   * or individually:
	   *
	   * ```jsx
	   * timeout={{
	   *  appear: 500,
	   *  enter: 300,
	   *  exit: 500,
	   * }}
	   * ```
	   *
	   * - `appear` defaults to the value of `enter`
	   * - `enter` defaults to `0`
	   * - `exit` defaults to `0`
	   *
	   * @type {number | { enter?: number, exit?: number, appear?: number }}
	   */
	  timeout: function timeout(props) {
	    var pt = PropTypes.timeoutsShape;
	    if (!props.addEndListener) pt = pt.isRequired;

	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return pt.apply(void 0, [props].concat(args));
	  },

	  /**
	   * Add a custom transition end trigger. Called with the transitioning
	   * DOM node and a `done` callback. Allows for more fine grained transition end
	   * logic. **Note:** Timeouts are still used as a fallback if provided.
	   *
	   * ```jsx
	   * addEndListener={(node, done) => {
	   *   // use the css transitionend event to mark the finish of a transition
	   *   node.addEventListener('transitionend', done, false);
	   * }}
	   * ```
	   */
	  addEndListener: PropTypes$2.func,

	  /**
	   * Callback fired before the "entering" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool) -> void
	   */
	  onEnter: PropTypes$2.func,

	  /**
	   * Callback fired after the "entering" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEntering: PropTypes$2.func,

	  /**
	   * Callback fired after the "entered" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool) -> void
	   */
	  onEntered: PropTypes$2.func,

	  /**
	   * Callback fired before the "exiting" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExit: PropTypes$2.func,

	  /**
	   * Callback fired after the "exiting" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExiting: PropTypes$2.func,

	  /**
	   * Callback fired after the "exited" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExited: PropTypes$2.func // Name the function so it is clearer in the documentation

	} ;

	function noop() {}

	Transition.defaultProps = {
	  in: false,
	  mountOnEnter: false,
	  unmountOnExit: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	Transition.UNMOUNTED = 0;
	Transition.EXITED = 1;
	Transition.ENTERING = 2;
	Transition.ENTERED = 3;
	Transition.EXITING = 4;

	var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

	exports.default = _default;
	});

	unwrapExports(Transition_1);
	var Transition_2 = Transition_1.EXITING;
	var Transition_3 = Transition_1.ENTERED;
	var Transition_4 = Transition_1.ENTERING;
	var Transition_5 = Transition_1.EXITED;
	var Transition_6 = Transition_1.UNMOUNTED;

	var CSSTransition_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = void 0;

	var PropTypes$2 = _interopRequireWildcard(PropTypes$1);

	var _addClass = _interopRequireDefault(addClass_1);

	var _removeClass = _interopRequireDefault(removeClass);

	var _react = _interopRequireDefault(React__default);

	var _Transition = _interopRequireDefault(Transition_1);



	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

	var addClass = function addClass(node, classes) {
	  return node && classes && classes.split(' ').forEach(function (c) {
	    return (0, _addClass.default)(node, c);
	  });
	};

	var removeClass$1 = function removeClass(node, classes) {
	  return node && classes && classes.split(' ').forEach(function (c) {
	    return (0, _removeClass.default)(node, c);
	  });
	};
	/**
	 * A transition component inspired by the excellent
	 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
	 * using CSS transitions or animations. It's built upon the
	 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
	 * component, so it inherits all of its props.
	 *
	 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
	 * and `exit` states of the transition. The first class is applied and then a
	 * second `*-active` class in order to activate the CSSS transition. After the
	 * transition, matching `*-done` class names are applied to persist the
	 * transition state.
	 *
	 * ```jsx
	 * function App() {
	 *   const [inProp, setInProp] = useState(false);
	 *   return (
	 *     <div>
	 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
	 *         <div>
	 *           {"I'll receive my-node-* classes"}
	 *         </div>
	 *       </CSSTransition>
	 *       <button type="button" onClick={() => setInProp(true)}>
	 *         Click to Enter
	 *       </button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the `in` prop is set to `true`, the child component will first receive
	 * the class `example-enter`, then the `example-enter-active` will be added in
	 * the next tick. `CSSTransition` [forces a
	 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	 * between before adding the `example-enter-active`. This is an important trick
	 * because it allows us to transition between `example-enter` and
	 * `example-enter-active` even though they were added immediately one after
	 * another. Most notably, this is what makes it possible for us to animate
	 * _appearance_.
	 *
	 * ```css
	 * .my-node-enter {
	 *   opacity: 0;
	 * }
	 * .my-node-enter-active {
	 *   opacity: 1;
	 *   transition: opacity 200ms;
	 * }
	 * .my-node-exit {
	 *   opacity: 1;
	 * }
	 * .my-node-exit-active {
	 *   opacity: 0;
	 *   transition: opacity: 200ms;
	 * }
	 * ```
	 *
	 * `*-active` classes represent which styles you want to animate **to**.
	 */


	var CSSTransition =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(CSSTransition, _React$Component);

	  function CSSTransition() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	    _this.onEnter = function (node, appearing) {
	      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
	          className = _this$getClassNames.className;

	      _this.removeClasses(node, 'exit');

	      addClass(node, className);

	      if (_this.props.onEnter) {
	        _this.props.onEnter(node, appearing);
	      }
	    };

	    _this.onEntering = function (node, appearing) {
	      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
	          activeClassName = _this$getClassNames2.activeClassName;

	      _this.reflowAndAddClass(node, activeClassName);

	      if (_this.props.onEntering) {
	        _this.props.onEntering(node, appearing);
	      }
	    };

	    _this.onEntered = function (node, appearing) {
	      var appearClassName = _this.getClassNames('appear').doneClassName;

	      var enterClassName = _this.getClassNames('enter').doneClassName;

	      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

	      _this.removeClasses(node, appearing ? 'appear' : 'enter');

	      addClass(node, doneClassName);

	      if (_this.props.onEntered) {
	        _this.props.onEntered(node, appearing);
	      }
	    };

	    _this.onExit = function (node) {
	      var _this$getClassNames3 = _this.getClassNames('exit'),
	          className = _this$getClassNames3.className;

	      _this.removeClasses(node, 'appear');

	      _this.removeClasses(node, 'enter');

	      addClass(node, className);

	      if (_this.props.onExit) {
	        _this.props.onExit(node);
	      }
	    };

	    _this.onExiting = function (node) {
	      var _this$getClassNames4 = _this.getClassNames('exit'),
	          activeClassName = _this$getClassNames4.activeClassName;

	      _this.reflowAndAddClass(node, activeClassName);

	      if (_this.props.onExiting) {
	        _this.props.onExiting(node);
	      }
	    };

	    _this.onExited = function (node) {
	      var _this$getClassNames5 = _this.getClassNames('exit'),
	          doneClassName = _this$getClassNames5.doneClassName;

	      _this.removeClasses(node, 'exit');

	      addClass(node, doneClassName);

	      if (_this.props.onExited) {
	        _this.props.onExited(node);
	      }
	    };

	    _this.getClassNames = function (type) {
	      var classNames = _this.props.classNames;
	      var isStringClassNames = typeof classNames === 'string';
	      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
	      var className = isStringClassNames ? prefix + type : classNames[type];
	      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
	      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
	      return {
	        className: className,
	        activeClassName: activeClassName,
	        doneClassName: doneClassName
	      };
	    };

	    return _this;
	  }

	  var _proto = CSSTransition.prototype;

	  _proto.removeClasses = function removeClasses(node, type) {
	    var _this$getClassNames6 = this.getClassNames(type),
	        className = _this$getClassNames6.className,
	        activeClassName = _this$getClassNames6.activeClassName,
	        doneClassName = _this$getClassNames6.doneClassName;

	    className && removeClass$1(node, className);
	    activeClassName && removeClass$1(node, activeClassName);
	    doneClassName && removeClass$1(node, doneClassName);
	  };

	  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
	    // This is for to force a repaint,
	    // which is necessary in order to transition styles when adding a class name.
	    if (className) {
	      /* eslint-disable no-unused-expressions */
	      node && node.scrollTop;
	      /* eslint-enable no-unused-expressions */

	      addClass(node, className);
	    }
	  };

	  _proto.render = function render() {
	    var props = _extends({}, this.props);

	    delete props.classNames;
	    return _react.default.createElement(_Transition.default, _extends({}, props, {
	      onEnter: this.onEnter,
	      onEntered: this.onEntered,
	      onEntering: this.onEntering,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }));
	  };

	  return CSSTransition;
	}(_react.default.Component);

	CSSTransition.defaultProps = {
	  classNames: ''
	};
	CSSTransition.propTypes =  _extends({}, _Transition.default.propTypes, {
	  /**
	   * The animation classNames applied to the component as it enters, exits or
	   * has finished the transition. A single name can be provided and it will be
	   * suffixed for each stage: e.g.
	   *
	   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
	   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
	   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
	   *
	   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
	   * This allows you to define different behavior for when appearing is done and
	   * when regular entering is done, using selectors like
	   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
	   * epic entrance animation when element first appears in the DOM using
	   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
	   * simply use `fade-enter-done` for defining both cases.
	   *
	   * Each individual classNames can also be specified independently like:
	   *
	   * ```js
	   * classNames={{
	   *  appear: 'my-appear',
	   *  appearActive: 'my-active-appear',
	   *  appearDone: 'my-done-appear',
	   *  enter: 'my-enter',
	   *  enterActive: 'my-active-enter',
	   *  enterDone: 'my-done-enter',
	   *  exit: 'my-exit',
	   *  exitActive: 'my-active-exit',
	   *  exitDone: 'my-done-exit',
	   * }}
	   * ```
	   *
	   * If you want to set these classes using CSS Modules:
	   *
	   * ```js
	   * import styles from './styles.css';
	   * ```
	   *
	   * you might want to use camelCase in your CSS file, that way could simply
	   * spread them instead of listing them one by one:
	   *
	   * ```js
	   * classNames={{ ...styles }}
	   * ```
	   *
	   * @type {string | {
	   *  appear?: string,
	   *  appearActive?: string,
	   *  appearDone?: string,
	   *  enter?: string,
	   *  enterActive?: string,
	   *  enterDone?: string,
	   *  exit?: string,
	   *  exitActive?: string,
	   *  exitDone?: string,
	   * }}
	   */
	  classNames: PropTypes.classNamesShape,

	  /**
	   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
	   * applied.
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEnter: PropTypes$2.func,

	  /**
	   * A `<Transition>` callback fired immediately after the 'enter-active' or
	   * 'appear-active' class is applied.
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEntering: PropTypes$2.func,

	  /**
	   * A `<Transition>` callback fired immediately after the 'enter' or
	   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEntered: PropTypes$2.func,

	  /**
	   * A `<Transition>` callback fired immediately after the 'exit' class is
	   * applied.
	   *
	   * @type Function(node: HtmlElement)
	   */
	  onExit: PropTypes$2.func,

	  /**
	   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
	   *
	   * @type Function(node: HtmlElement)
	   */
	  onExiting: PropTypes$2.func,

	  /**
	   * A `<Transition>` callback fired immediately after the 'exit' classes
	   * are **removed** and the `exit-done` class is added to the DOM node.
	   *
	   * @type Function(node: HtmlElement)
	   */
	  onExited: PropTypes$2.func
	}) ;
	var _default = CSSTransition;
	exports.default = _default;
	module.exports = exports["default"];
	});

	unwrapExports(CSSTransition_1);

	var ChildMapping = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.getChildMapping = getChildMapping;
	exports.mergeChildMappings = mergeChildMappings;
	exports.getInitialChildMapping = getInitialChildMapping;
	exports.getNextChildMapping = getNextChildMapping;



	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */
	function getChildMapping(children, mapFn) {
	  var mapper = function mapper(child) {
	    return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
	  };

	  var result = Object.create(null);
	  if (children) React__default.Children.map(children, function (c) {
	    return c;
	  }).forEach(function (child) {
	    // run the map function here instead so that the key is the computed one
	    result[child.key] = mapper(child);
	  });
	  return result;
	}
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */


	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};

	  function getValueForKey(key) {
	    return key in next ? next[key] : prev[key];
	  } // For each key of `next`, the list of keys to insert before that key in
	  // the combined list


	  var nextKeysPending = Object.create(null);
	  var pendingKeys = [];

	  for (var prevKey in prev) {
	    if (prevKey in next) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }

	  var i;
	  var childMapping = {};

	  for (var nextKey in next) {
	    if (nextKeysPending[nextKey]) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }

	    childMapping[nextKey] = getValueForKey(nextKey);
	  } // Finally, add the keys which didn't appear before any key in `next`


	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }

	  return childMapping;
	}

	function getProp(child, prop, props) {
	  return props[prop] != null ? props[prop] : child.props[prop];
	}

	function getInitialChildMapping(props, onExited) {
	  return getChildMapping(props.children, function (child) {
	    return (0, React__default.cloneElement)(child, {
	      onExited: onExited.bind(null, child),
	      in: true,
	      appear: getProp(child, 'appear', props),
	      enter: getProp(child, 'enter', props),
	      exit: getProp(child, 'exit', props)
	    });
	  });
	}

	function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	  var nextChildMapping = getChildMapping(nextProps.children);
	  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	  Object.keys(children).forEach(function (key) {
	    var child = children[key];
	    if (!(0, React__default.isValidElement)(child)) return;
	    var hasPrev = key in prevChildMapping;
	    var hasNext = key in nextChildMapping;
	    var prevChild = prevChildMapping[key];
	    var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

	    if (hasNext && (!hasPrev || isLeaving)) {
	      // console.log('entering', key)
	      children[key] = (0, React__default.cloneElement)(child, {
	        onExited: onExited.bind(null, child),
	        in: true,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    } else if (!hasNext && hasPrev && !isLeaving) {
	      // item is old (exiting)
	      // console.log('leaving', key)
	      children[key] = (0, React__default.cloneElement)(child, {
	        in: false
	      });
	    } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
	      // item hasn't changed transition states
	      // copy over the last transition props;
	      // console.log('unchanged', key)
	      children[key] = (0, React__default.cloneElement)(child, {
	        onExited: onExited.bind(null, child),
	        in: prevChild.props.in,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    }
	  });
	  return children;
	}
	});

	unwrapExports(ChildMapping);
	var ChildMapping_1 = ChildMapping.getChildMapping;
	var ChildMapping_2 = ChildMapping.mergeChildMappings;
	var ChildMapping_3 = ChildMapping.getInitialChildMapping;
	var ChildMapping_4 = ChildMapping.getNextChildMapping;

	var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = void 0;

	var _propTypes = _interopRequireDefault(PropTypes$1);

	var _react = _interopRequireDefault(React__default);





	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	var values = Object.values || function (obj) {
	  return Object.keys(obj).map(function (k) {
	    return obj[k];
	  });
	};

	var defaultProps = {
	  component: 'div',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	  /**
	   * The `<TransitionGroup>` component manages a set of transition components
	   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
	   * components, `<TransitionGroup>` is a state machine for managing the mounting
	   * and unmounting of components over time.
	   *
	   * Consider the example below. As items are removed or added to the TodoList the
	   * `in` prop is toggled automatically by the `<TransitionGroup>`.
	   *
	   * Note that `<TransitionGroup>`  does not define any animation behavior!
	   * Exactly _how_ a list item animates is up to the individual transition
	   * component. This means you can mix and match animations across different list
	   * items.
	   */

	};

	var TransitionGroup =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(TransitionGroup, _React$Component);

	  function TransitionGroup(props, context) {
	    var _this;

	    _this = _React$Component.call(this, props, context) || this;

	    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


	    _this.state = {
	      handleExited: handleExited,
	      firstRender: true
	    };
	    return _this;
	  }

	  var _proto = TransitionGroup.prototype;

	  _proto.getChildContext = function getChildContext() {
	    return {
	      transitionGroup: {
	        isMounting: !this.appeared
	      }
	    };
	  };

	  _proto.componentDidMount = function componentDidMount() {
	    this.appeared = true;
	    this.mounted = true;
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };

	  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
	    var prevChildMapping = _ref.children,
	        handleExited = _ref.handleExited,
	        firstRender = _ref.firstRender;
	    return {
	      children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
	      firstRender: false
	    };
	  };

	  _proto.handleExited = function handleExited(child, node) {
	    var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
	    if (child.key in currentChildMapping) return;

	    if (child.props.onExited) {
	      child.props.onExited(node);
	    }

	    if (this.mounted) {
	      this.setState(function (state) {
	        var children = _extends({}, state.children);

	        delete children[child.key];
	        return {
	          children: children
	        };
	      });
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Component = _this$props.component,
	        childFactory = _this$props.childFactory,
	        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

	    var children = values(this.state.children).map(childFactory);
	    delete props.appear;
	    delete props.enter;
	    delete props.exit;

	    if (Component === null) {
	      return children;
	    }

	    return _react.default.createElement(Component, props, children);
	  };

	  return TransitionGroup;
	}(_react.default.Component);

	TransitionGroup.childContextTypes = {
	  transitionGroup: _propTypes.default.object.isRequired
	};
	TransitionGroup.propTypes =  {
	  /**
	   * `<TransitionGroup>` renders a `<div>` by default. You can change this
	   * behavior by providing a `component` prop.
	   * If you use React v16+ and would like to avoid a wrapping `<div>` element
	   * you can pass in `component={null}`. This is useful if the wrapping div
	   * borks your css styles.
	   */
	  component: _propTypes.default.any,

	  /**
	   * A set of `<Transition>` components, that are toggled `in` and out as they
	   * leave. the `<TransitionGroup>` will inject specific transition props, so
	   * remember to spread them through if you are wrapping the `<Transition>` as
	   * with our `<Fade>` example.
	   *
	   * While this component is meant for multiple `Transition` or `CSSTransition`
	   * children, sometimes you may want to have a single transition child with
	   * content that you want to be transitioned out and in when you change it
	   * (e.g. routes, images etc.) In that case you can change the `key` prop of
	   * the transition child as you change its content, this will cause
	   * `TransitionGroup` to transition the child out and back in.
	   */
	  children: _propTypes.default.node,

	  /**
	   * A convenience prop that enables or disables appear animations
	   * for all children. Note that specifying this will override any defaults set
	   * on individual children Transitions.
	   */
	  appear: _propTypes.default.bool,

	  /**
	   * A convenience prop that enables or disables enter animations
	   * for all children. Note that specifying this will override any defaults set
	   * on individual children Transitions.
	   */
	  enter: _propTypes.default.bool,

	  /**
	   * A convenience prop that enables or disables exit animations
	   * for all children. Note that specifying this will override any defaults set
	   * on individual children Transitions.
	   */
	  exit: _propTypes.default.bool,

	  /**
	   * You may need to apply reactive updates to a child as it is exiting.
	   * This is generally done by using `cloneElement` however in the case of an exiting
	   * child the element has already been removed and not accessible to the consumer.
	   *
	   * If you do need to update a child as it leaves you can provide a `childFactory`
	   * to wrap every child, even the ones that are leaving.
	   *
	   * @type Function(child: ReactElement) -> ReactElement
	   */
	  childFactory: _propTypes.default.func
	} ;
	TransitionGroup.defaultProps = defaultProps;

	var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

	exports.default = _default;
	module.exports = exports["default"];
	});

	unwrapExports(TransitionGroup_1);

	var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = void 0;

	var _propTypes = _interopRequireDefault(PropTypes$1);

	var _react = _interopRequireDefault(React__default);



	var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

	/**
	 * The `<ReplaceTransition>` component is a specialized `Transition` component
	 * that animates between two children.
	 *
	 * ```jsx
	 * <ReplaceTransition in>
	 *   <Fade><div>I appear first</div></Fade>
	 *   <Fade><div>I replace the above</div></Fade>
	 * </ReplaceTransition>
	 * ```
	 */
	var ReplaceTransition =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(ReplaceTransition, _React$Component);

	  function ReplaceTransition() {
	    var _this;

	    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
	      _args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

	    _this.handleEnter = function () {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return _this.handleLifecycle('onEnter', 0, args);
	    };

	    _this.handleEntering = function () {
	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      return _this.handleLifecycle('onEntering', 0, args);
	    };

	    _this.handleEntered = function () {
	      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }

	      return _this.handleLifecycle('onEntered', 0, args);
	    };

	    _this.handleExit = function () {
	      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }

	      return _this.handleLifecycle('onExit', 1, args);
	    };

	    _this.handleExiting = function () {
	      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }

	      return _this.handleLifecycle('onExiting', 1, args);
	    };

	    _this.handleExited = function () {
	      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }

	      return _this.handleLifecycle('onExited', 1, args);
	    };

	    return _this;
	  }

	  var _proto = ReplaceTransition.prototype;

	  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
	    var _child$props;

	    var children = this.props.children;

	    var child = _react.default.Children.toArray(children)[idx];

	    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
	    if (this.props[handler]) this.props[handler]((0, reactDom__default.findDOMNode)(this));
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        children = _this$props.children,
	        inProp = _this$props.in,
	        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

	    var _React$Children$toArr = _react.default.Children.toArray(children),
	        first = _React$Children$toArr[0],
	        second = _React$Children$toArr[1];

	    delete props.onEnter;
	    delete props.onEntering;
	    delete props.onEntered;
	    delete props.onExit;
	    delete props.onExiting;
	    delete props.onExited;
	    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
	      key: 'first',
	      onEnter: this.handleEnter,
	      onEntering: this.handleEntering,
	      onEntered: this.handleEntered
	    }) : _react.default.cloneElement(second, {
	      key: 'second',
	      onEnter: this.handleExit,
	      onEntering: this.handleExiting,
	      onEntered: this.handleExited
	    }));
	  };

	  return ReplaceTransition;
	}(_react.default.Component);

	ReplaceTransition.propTypes =  {
	  in: _propTypes.default.bool.isRequired,
	  children: function children(props, propName) {
	    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
	    return null;
	  }
	} ;
	var _default = ReplaceTransition;
	exports.default = _default;
	module.exports = exports["default"];
	});

	unwrapExports(ReplaceTransition_1);

	var reactTransitionGroup = createCommonjsModule(function (module) {

	var _CSSTransition = _interopRequireDefault(CSSTransition_1);

	var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

	var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

	var _Transition = _interopRequireDefault(Transition_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  Transition: _Transition.default,
	  TransitionGroup: _TransitionGroup.default,
	  ReplaceTransition: _ReplaceTransition.default,
	  CSSTransition: _CSSTransition.default
	};
	});

	unwrapExports(reactTransitionGroup);
	var reactTransitionGroup_1 = reactTransitionGroup.Transition;
	var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
	var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
	var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    });
	  }

	  return target;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf$1(subClass, superClass);
	}

	function _getPrototypeOf$1(o) {
	  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf$1(o);
	}

	function _setPrototypeOf$1(o, p) {
	  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf$1(o, p);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized$1(self);
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  }
	}

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	// ==============================
	// NO OP
	// ==============================
	var noop = function noop() {};
	// Class Name Prefixer
	// ==============================

	/**
	 String representation of component state for styling with class names.

	 Expects an array of strings OR a string/object pair:
	 - className(['comp', 'comp-arg', 'comp-arg-2'])
	   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
	 - className('comp', { some: true, state: false })
	   @returns 'react-select__comp react-select__comp--some'
	*/

	function applyPrefixToName(prefix, name) {
	  if (!name) {
	    return prefix;
	  } else if (name[0] === '-') {
	    return prefix + name;
	  } else {
	    return prefix + '__' + name;
	  }
	}

	function classNames(prefix, cssKey, state, className) {
	  var arr = [cssKey, className];

	  if (state && prefix) {
	    for (var key in state) {
	      if (state.hasOwnProperty(key) && state[key]) {
	        arr.push("".concat(applyPrefixToName(prefix, key)));
	      }
	    }
	  }

	  return arr.filter(function (i) {
	    return i;
	  }).map(function (i) {
	    return String(i).trim();
	  }).join(' ');
	} // ==============================
	// Clean Value
	// ==============================

	var cleanValue = function cleanValue(value) {
	  if (Array.isArray(value)) return value.filter(Boolean);
	  if (_typeof(value) === 'object' && value !== null) return [value];
	  return [];
	}; // ==============================
	// Handle Input Change
	// ==============================

	function handleInputChange(inputValue, actionMeta, onInputChange) {
	  if (onInputChange) {
	    var newValue = onInputChange(inputValue, actionMeta);
	    if (typeof newValue === 'string') return newValue;
	  }

	  return inputValue;
	} // ==============================
	// Scroll Helpers
	// ==============================

	function isDocumentElement(el) {
	  return [document.documentElement, document.body, window].indexOf(el) > -1;
	} // Normalized Scroll Top
	// ------------------------------

	function getScrollTop(el) {
	  if (isDocumentElement(el)) {
	    return window.pageYOffset;
	  }

	  return el.scrollTop;
	}
	function scrollTo(el, top) {
	  // with a scroll distance, we perform scroll on the element
	  if (isDocumentElement(el)) {
	    window.scrollTo(0, top);
	    return;
	  }

	  el.scrollTop = top;
	} // Get Scroll Parent
	// ------------------------------

	function getScrollParent(element) {
	  var style = getComputedStyle(element);
	  var excludeStaticParent = style.position === 'absolute';
	  var overflowRx = /(auto|scroll)/;
	  var docEl = document.documentElement; // suck it, flow...

	  if (style.position === 'fixed') return docEl;

	  for (var parent = element; parent = parent.parentElement;) {
	    style = getComputedStyle(parent);

	    if (excludeStaticParent && style.position === 'static') {
	      continue;
	    }

	    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
	      return parent;
	    }
	  }

	  return docEl;
	} // Animated Scroll To
	// ------------------------------

	/**
	  @param t: time (elapsed)
	  @param b: initial value
	  @param c: amount of change
	  @param d: duration
	*/

	function easeOutCubic(t, b, c, d) {
	  return c * ((t = t / d - 1) * t * t + 1) + b;
	}

	function animatedScrollTo(element, to) {
	  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
	  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
	  var start = getScrollTop(element);
	  var change = to - start;
	  var increment = 10;
	  var currentTime = 0;

	  function animateScroll() {
	    currentTime += increment;
	    var val = easeOutCubic(currentTime, start, change, duration);
	    scrollTo(element, val);

	    if (currentTime < duration) {
	      raf_1(animateScroll);
	    } else {
	      callback(element);
	    }
	  }

	  animateScroll();
	} // Scroll Into View
	// ------------------------------

	function scrollIntoView(menuEl, focusedEl) {
	  var menuRect = menuEl.getBoundingClientRect();
	  var focusedRect = focusedEl.getBoundingClientRect();
	  var overScroll = focusedEl.offsetHeight / 3;

	  if (focusedRect.bottom + overScroll > menuRect.bottom) {
	    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
	  } else if (focusedRect.top - overScroll < menuRect.top) {
	    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
	  }
	} // ==============================
	// Get bounding client object
	// ==============================
	// cannot get keys using array notation with DOMRect

	function getBoundingClientObj(element) {
	  var rect = element.getBoundingClientRect();
	  return {
	    bottom: rect.bottom,
	    height: rect.height,
	    left: rect.left,
	    right: rect.right,
	    top: rect.top,
	    width: rect.width
	  };
	}
	// Touch Capability Detector
	// ==============================

	function isTouchCapable() {
	  try {
	    document.createEvent('TouchEvent');
	    return true;
	  } catch (e) {
	    return false;
	  }
	} // ==============================
	// Mobile Device Detector
	// ==============================

	function isMobileDevice() {
	  try {
	    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  } catch (e) {
	    return false;
	  }
	}

	function getMenuPlacement(_ref) {
	  var maxHeight = _ref.maxHeight,
	      menuEl = _ref.menuEl,
	      minHeight = _ref.minHeight,
	      placement = _ref.placement,
	      shouldScroll = _ref.shouldScroll,
	      isFixedPosition = _ref.isFixedPosition,
	      theme = _ref.theme;
	  var spacing = theme.spacing;
	  var scrollParent = getScrollParent(menuEl);
	  var defaultState = {
	    placement: 'bottom',
	    maxHeight: maxHeight
	  }; // something went wrong, return default state

	  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
	  // the menu is rendered

	  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
	      scrollHeight = _scrollParent$getBoun.height;

	  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
	      menuBottom = _menuEl$getBoundingCl.bottom,
	      menuHeight = _menuEl$getBoundingCl.height,
	      menuTop = _menuEl$getBoundingCl.top;

	  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
	      containerTop = _menuEl$offsetParent$.top;

	  var viewHeight = window.innerHeight;
	  var scrollTop = getScrollTop(scrollParent);
	  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
	  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
	  var viewSpaceAbove = containerTop - marginTop;
	  var viewSpaceBelow = viewHeight - menuTop;
	  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
	  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
	  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
	  var scrollUp = scrollTop + menuTop - marginTop;
	  var scrollDuration = 160;

	  switch (placement) {
	    case 'auto':
	    case 'bottom':
	      // 1: the menu will fit, do nothing
	      if (viewSpaceBelow >= menuHeight) {
	        return {
	          placement: 'bottom',
	          maxHeight: maxHeight
	        };
	      } // 2: the menu will fit, if scrolled


	      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
	        }

	        return {
	          placement: 'bottom',
	          maxHeight: maxHeight
	        };
	      } // 3: the menu will fit, if constrained


	      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
	        } // we want to provide as much of the menu as possible to the user,
	        // so give them whatever is available below rather than the minHeight.


	        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
	        return {
	          placement: 'bottom',
	          maxHeight: constrainedHeight
	        };
	      } // 4. Forked beviour when there isn't enough space below
	      // AUTO: flip the menu, render above


	      if (placement === 'auto' || isFixedPosition) {
	        // may need to be constrained after flipping
	        var _constrainedHeight = maxHeight;
	        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

	        if (spaceAbove >= minHeight) {
	          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
	        }

	        return {
	          placement: 'top',
	          maxHeight: _constrainedHeight
	        };
	      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


	      if (placement === 'bottom') {
	        scrollTo(scrollParent, scrollDown);
	        return {
	          placement: 'bottom',
	          maxHeight: maxHeight
	        };
	      }

	      break;

	    case 'top':
	      // 1: the menu will fit, do nothing
	      if (viewSpaceAbove >= menuHeight) {
	        return {
	          placement: 'top',
	          maxHeight: maxHeight
	        };
	      } // 2: the menu will fit, if scrolled


	      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
	        }

	        return {
	          placement: 'top',
	          maxHeight: maxHeight
	        };
	      } // 3: the menu will fit, if constrained


	      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
	        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
	        // so give them whatever is available below rather than the minHeight.

	        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
	          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
	        }

	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
	        }

	        return {
	          placement: 'top',
	          maxHeight: _constrainedHeight2
	        };
	      } // 4. not enough space, the browser WILL NOT increase scrollable area when
	      // absolutely positioned element rendered above the viewport (only below).
	      // Flip the menu, render below


	      return {
	        placement: 'bottom',
	        maxHeight: maxHeight
	      };

	    default:
	      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
	  } // fulfil contract with flow: implicit return value of undefined


	  return defaultState;
	} // Menu Component
	// ------------------------------

	function alignToControl(placement) {
	  var placementToCSSProp = {
	    bottom: 'top',
	    top: 'bottom'
	  };
	  return placement ? placementToCSSProp[placement] : 'bottom';
	}

	var coercePlacement = function coercePlacement(p) {
	  return p === 'auto' ? 'bottom' : p;
	};

	var menuCSS = function menuCSS(_ref2) {
	  var _ref3;

	  var placement = _ref2.placement,
	      _ref2$theme = _ref2.theme,
	      borderRadius = _ref2$theme.borderRadius,
	      spacing = _ref2$theme.spacing,
	      colors = _ref2$theme.colors;
	  return _ref3 = {
	    label: 'menu'
	  }, _defineProperty(_ref3, alignToControl(placement), '100%'), _defineProperty(_ref3, "backgroundColor", colors.neutral0), _defineProperty(_ref3, "borderRadius", borderRadius), _defineProperty(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty(_ref3, "marginBottom", spacing.menuGutter), _defineProperty(_ref3, "marginTop", spacing.menuGutter), _defineProperty(_ref3, "position", 'absolute'), _defineProperty(_ref3, "width", '100%'), _defineProperty(_ref3, "zIndex", 1), _ref3;
	}; // NOTE: internal only

	var MenuPlacer =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(MenuPlacer, _Component);

	  function MenuPlacer() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, MenuPlacer);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(MenuPlacer)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
	      maxHeight: _this.props.maxMenuHeight,
	      placement: null
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getPlacement", function (ref) {
	      var _this$props = _this.props,
	          minMenuHeight = _this$props.minMenuHeight,
	          maxMenuHeight = _this$props.maxMenuHeight,
	          menuPlacement = _this$props.menuPlacement,
	          menuPosition = _this$props.menuPosition,
	          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
	          theme = _this$props.theme;
	      var getPortalPlacement = _this.context.getPortalPlacement;
	      if (!ref) return; // DO NOT scroll if position is fixed

	      var isFixedPosition = menuPosition === 'fixed';
	      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
	      var state = getMenuPlacement({
	        maxHeight: maxMenuHeight,
	        menuEl: ref,
	        minHeight: minMenuHeight,
	        placement: menuPlacement,
	        shouldScroll: shouldScroll,
	        isFixedPosition: isFixedPosition,
	        theme: theme
	      });
	      if (getPortalPlacement) getPortalPlacement(state);

	      _this.setState(state);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getUpdatedProps", function () {
	      var menuPlacement = _this.props.menuPlacement;
	      var placement = _this.state.placement || coercePlacement(menuPlacement);
	      return _objectSpread({}, _this.props, {
	        placement: placement,
	        maxHeight: _this.state.maxHeight
	      });
	    });

	    return _this;
	  }

	  _createClass(MenuPlacer, [{
	    key: "render",
	    value: function render() {
	      var children = this.props.children;
	      return children({
	        ref: this.getPlacement,
	        placerProps: this.getUpdatedProps()
	      });
	    }
	  }]);

	  return MenuPlacer;
	}(React.Component);

	_defineProperty(MenuPlacer, "contextTypes", {
	  getPortalPlacement: PropTypes$1.func
	});

	var Menu = function Menu(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerRef = props.innerRef,
	      innerProps = props.innerProps;
	  var cn = cx(
	  /*#__PURE__*/
	  css(getStyles('menu', props)), {
	    menu: true
	  }, className);
	  return React__default.createElement("div", _extends({
	    className: cn
	  }, innerProps, {
	    ref: innerRef
	  }), children);
	};
	// Menu List
	// ==============================

	var menuListCSS = function menuListCSS(_ref4) {
	  var maxHeight = _ref4.maxHeight,
	      baseUnit = _ref4.theme.spacing.baseUnit;
	  return {
	    maxHeight: maxHeight,
	    overflowY: 'auto',
	    paddingBottom: baseUnit,
	    paddingTop: baseUnit,
	    position: 'relative',
	    // required for offset[Height, Top] > keyboard scroll
	    WebkitOverflowScrolling: 'touch'
	  };
	};
	var MenuList = function MenuList(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      isMulti = props.isMulti,
	      innerRef = props.innerRef;
	  return React__default.createElement("div", {
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('menuList', props)), {
	      'menu-list': true,
	      'menu-list--is-multi': isMulti
	    }, className),
	    ref: innerRef
	  }, children);
	}; // ==============================
	// Menu Notices
	// ==============================

	var noticeCSS = function noticeCSS(_ref5) {
	  var _ref5$theme = _ref5.theme,
	      baseUnit = _ref5$theme.spacing.baseUnit,
	      colors = _ref5$theme.colors;
	  return {
	    color: colors.neutral40,
	    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
	    textAlign: 'center'
	  };
	};

	var noOptionsMessageCSS = noticeCSS;
	var loadingMessageCSS = noticeCSS;
	var NoOptionsMessage = function NoOptionsMessage(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return React__default.createElement("div", _extends({
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('noOptionsMessage', props)), {
	      'menu-notice': true,
	      'menu-notice--no-options': true
	    }, className)
	  }, innerProps), children);
	};
	NoOptionsMessage.defaultProps = {
	  children: 'No options'
	};
	var LoadingMessage = function LoadingMessage(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return React__default.createElement("div", _extends({
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('loadingMessage', props)), {
	      'menu-notice': true,
	      'menu-notice--loading': true
	    }, className)
	  }, innerProps), children);
	};
	LoadingMessage.defaultProps = {
	  children: 'Loading...'
	}; // ==============================
	// Menu Portal
	// ==============================

	var menuPortalCSS = function menuPortalCSS(_ref6) {
	  var rect = _ref6.rect,
	      offset = _ref6.offset,
	      position = _ref6.position;
	  return {
	    left: rect.left,
	    position: position,
	    top: offset,
	    width: rect.width,
	    zIndex: 1
	  };
	};
	var MenuPortal =
	/*#__PURE__*/
	function (_Component2) {
	  _inherits(MenuPortal, _Component2);

	  function MenuPortal() {
	    var _getPrototypeOf3;

	    var _this2;

	    _classCallCheck(this, MenuPortal);

	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf$1(MenuPortal)).call.apply(_getPrototypeOf3, [this].concat(args)));

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this2)), "state", {
	      placement: null
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this2)), "getPortalPlacement", function (_ref7) {
	      var placement = _ref7.placement;
	      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

	      if (placement !== initialPlacement) {
	        _this2.setState({
	          placement: placement
	        });
	      }
	    });

	    return _this2;
	  }

	  _createClass(MenuPortal, [{
	    key: "getChildContext",
	    value: function getChildContext() {
	      return {
	        getPortalPlacement: this.getPortalPlacement
	      };
	    } // callback for occassions where the menu must "flip"

	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props2 = this.props,
	          appendTo = _this$props2.appendTo,
	          children = _this$props2.children,
	          controlElement = _this$props2.controlElement,
	          menuPlacement = _this$props2.menuPlacement,
	          position = _this$props2.menuPosition,
	          getStyles = _this$props2.getStyles;
	      var isFixed = position === 'fixed'; // bail early if required elements aren't present

	      if (!appendTo && !isFixed || !controlElement) {
	        return null;
	      }

	      var placement = this.state.placement || coercePlacement(menuPlacement);
	      var rect = getBoundingClientObj(controlElement);
	      var scrollDistance = isFixed ? 0 : window.pageYOffset;
	      var offset = rect[placement] + scrollDistance;
	      var state = {
	        offset: offset,
	        position: position,
	        rect: rect
	      }; // same wrapper element whether fixed or portalled

	      var menuWrapper = React__default.createElement("div", {
	        className:
	        /*#__PURE__*/

	        /*#__PURE__*/
	        css(getStyles('menuPortal', state))
	      }, children);
	      return appendTo ? reactDom.createPortal(menuWrapper, appendTo) : menuWrapper;
	    }
	  }]);

	  return MenuPortal;
	}(React.Component);

	_defineProperty(MenuPortal, "childContextTypes", {
	  getPortalPlacement: PropTypes$1.func
	});

	var isArray$1 = Array.isArray;
	var keyList = Object.keys;
	var hasProp = Object.prototype.hasOwnProperty;

	function equal(a, b) {
	  // fast-deep-equal index.js 2.0.1
	  if (a === b) return true;

	  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
	    var arrA = isArray$1(a),
	        arrB = isArray$1(b),
	        i,
	        length,
	        key;

	    if (arrA && arrB) {
	      length = a.length;
	      if (length != b.length) return false;

	      for (i = length; i-- !== 0;) {
	        if (!equal(a[i], b[i])) return false;
	      }

	      return true;
	    }

	    if (arrA != arrB) return false;
	    var dateA = a instanceof Date,
	        dateB = b instanceof Date;
	    if (dateA != dateB) return false;
	    if (dateA && dateB) return a.getTime() == b.getTime();
	    var regexpA = a instanceof RegExp,
	        regexpB = b instanceof RegExp;
	    if (regexpA != regexpB) return false;
	    if (regexpA && regexpB) return a.toString() == b.toString();
	    var keys = keyList(a);
	    length = keys.length;

	    if (length !== keyList(b).length) {
	      return false;
	    }

	    for (i = length; i-- !== 0;) {
	      if (!hasProp.call(b, keys[i])) return false;
	    } // end fast-deep-equal
	    // Custom handling for React


	    for (i = length; i-- !== 0;) {
	      key = keys[i];

	      if (key === '_owner' && a.$$typeof) {
	        // React-specific: avoid traversing React elements' _owner.
	        //  _owner contains circular references
	        // and is not needed when comparing the actual elements (and not their owners)
	        // .$$typeof and ._store on just reasonable markers of a react element
	        continue;
	      } else {
	        // all other properties should be traversed as usual
	        if (!equal(a[key], b[key])) return false;
	      }
	    } // fast-deep-equal index.js 2.0.1


	    return true;
	  }

	  return a !== a && b !== b;
	} // end fast-deep-equal


	function exportedEqual(a, b) {
	  try {
	    return equal(a, b);
	  } catch (error) {
	    if (error.message && error.message.match(/stack|recursion/i)) {
	      // warn on circular references, don't crash
	      // browsers give this different errors name and messages:
	      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
	      // firefox: "InternalError", too much recursion"
	      // edge: "Error", "Out of stack space"
	      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
	      return false;
	    } // some other error. we should definitely know about these


	    throw error;
	  }
	}

	var diacritics = [{
	  base: 'A',
	  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
	}, {
	  base: 'AA',
	  letters: /[\uA732]/g
	}, {
	  base: 'AE',
	  letters: /[\u00C6\u01FC\u01E2]/g
	}, {
	  base: 'AO',
	  letters: /[\uA734]/g
	}, {
	  base: 'AU',
	  letters: /[\uA736]/g
	}, {
	  base: 'AV',
	  letters: /[\uA738\uA73A]/g
	}, {
	  base: 'AY',
	  letters: /[\uA73C]/g
	}, {
	  base: 'B',
	  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
	}, {
	  base: 'C',
	  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
	}, {
	  base: 'D',
	  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
	}, {
	  base: 'DZ',
	  letters: /[\u01F1\u01C4]/g
	}, {
	  base: 'Dz',
	  letters: /[\u01F2\u01C5]/g
	}, {
	  base: 'E',
	  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
	}, {
	  base: 'F',
	  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
	}, {
	  base: 'G',
	  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
	}, {
	  base: 'H',
	  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
	}, {
	  base: 'I',
	  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
	}, {
	  base: 'J',
	  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
	}, {
	  base: 'K',
	  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
	}, {
	  base: 'L',
	  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
	}, {
	  base: 'LJ',
	  letters: /[\u01C7]/g
	}, {
	  base: 'Lj',
	  letters: /[\u01C8]/g
	}, {
	  base: 'M',
	  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
	}, {
	  base: 'N',
	  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
	}, {
	  base: 'NJ',
	  letters: /[\u01CA]/g
	}, {
	  base: 'Nj',
	  letters: /[\u01CB]/g
	}, {
	  base: 'O',
	  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
	}, {
	  base: 'OI',
	  letters: /[\u01A2]/g
	}, {
	  base: 'OO',
	  letters: /[\uA74E]/g
	}, {
	  base: 'OU',
	  letters: /[\u0222]/g
	}, {
	  base: 'P',
	  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
	}, {
	  base: 'Q',
	  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
	}, {
	  base: 'R',
	  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
	}, {
	  base: 'S',
	  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
	}, {
	  base: 'T',
	  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
	}, {
	  base: 'TZ',
	  letters: /[\uA728]/g
	}, {
	  base: 'U',
	  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
	}, {
	  base: 'V',
	  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
	}, {
	  base: 'VY',
	  letters: /[\uA760]/g
	}, {
	  base: 'W',
	  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
	}, {
	  base: 'X',
	  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
	}, {
	  base: 'Y',
	  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
	}, {
	  base: 'Z',
	  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
	}, {
	  base: 'a',
	  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
	}, {
	  base: 'aa',
	  letters: /[\uA733]/g
	}, {
	  base: 'ae',
	  letters: /[\u00E6\u01FD\u01E3]/g
	}, {
	  base: 'ao',
	  letters: /[\uA735]/g
	}, {
	  base: 'au',
	  letters: /[\uA737]/g
	}, {
	  base: 'av',
	  letters: /[\uA739\uA73B]/g
	}, {
	  base: 'ay',
	  letters: /[\uA73D]/g
	}, {
	  base: 'b',
	  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
	}, {
	  base: 'c',
	  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
	}, {
	  base: 'd',
	  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
	}, {
	  base: 'dz',
	  letters: /[\u01F3\u01C6]/g
	}, {
	  base: 'e',
	  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
	}, {
	  base: 'f',
	  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
	}, {
	  base: 'g',
	  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
	}, {
	  base: 'h',
	  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
	}, {
	  base: 'hv',
	  letters: /[\u0195]/g
	}, {
	  base: 'i',
	  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
	}, {
	  base: 'j',
	  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
	}, {
	  base: 'k',
	  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
	}, {
	  base: 'l',
	  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
	}, {
	  base: 'lj',
	  letters: /[\u01C9]/g
	}, {
	  base: 'm',
	  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
	}, {
	  base: 'n',
	  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
	}, {
	  base: 'nj',
	  letters: /[\u01CC]/g
	}, {
	  base: 'o',
	  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
	}, {
	  base: 'oi',
	  letters: /[\u01A3]/g
	}, {
	  base: 'ou',
	  letters: /[\u0223]/g
	}, {
	  base: 'oo',
	  letters: /[\uA74F]/g
	}, {
	  base: 'p',
	  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
	}, {
	  base: 'q',
	  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
	}, {
	  base: 'r',
	  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
	}, {
	  base: 's',
	  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
	}, {
	  base: 't',
	  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
	}, {
	  base: 'tz',
	  letters: /[\uA729]/g
	}, {
	  base: 'u',
	  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
	}, {
	  base: 'v',
	  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
	}, {
	  base: 'vy',
	  letters: /[\uA761]/g
	}, {
	  base: 'w',
	  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
	}, {
	  base: 'x',
	  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
	}, {
	  base: 'y',
	  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
	}, {
	  base: 'z',
	  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
	}];
	var stripDiacritics = function stripDiacritics(str) {
	  for (var i = 0; i < diacritics.length; i++) {
	    str = str.replace(diacritics[i].letters, diacritics[i].base);
	  }

	  return str;
	};

	var trimString = function trimString(str) {
	  return str.replace(/^\s+|\s+$/g, '');
	};

	var defaultStringify = function defaultStringify(option) {
	  return "".concat(option.label, " ").concat(option.value);
	};

	var createFilter = function createFilter(config) {
	  return function (option, rawInput) {
	    var _ignoreCase$ignoreAcc = _objectSpread({
	      ignoreCase: true,
	      ignoreAccents: true,
	      stringify: defaultStringify,
	      trim: true,
	      matchFrom: 'any'
	    }, config),
	        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
	        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
	        stringify = _ignoreCase$ignoreAcc.stringify,
	        trim = _ignoreCase$ignoreAcc.trim,
	        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

	    var input = trim ? trimString(rawInput) : rawInput;
	    var candidate = trim ? trimString(stringify(option)) : stringify(option);

	    if (ignoreCase) {
	      input = input.toLowerCase();
	      candidate = candidate.toLowerCase();
	    }

	    if (ignoreAccents) {
	      input = stripDiacritics(input);
	      candidate = stripDiacritics(candidate);
	    }

	    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
	  };
	};

	var A11yText = function A11yText(props) {
	  return React__default.createElement("span", _extends({
	    className:
	    /*#__PURE__*/

	    /*#__PURE__*/
	    css({
	      label: 'a11yText',
	      zIndex: 9999,
	      border: 0,
	      clip: 'rect(1px, 1px, 1px, 1px)',
	      height: 1,
	      width: 1,
	      position: 'absolute',
	      overflow: 'hidden',
	      padding: 0,
	      whiteSpace: 'nowrap',
	      backgroundColor: 'red',
	      color: 'blue'
	    })
	  }, props));
	};

	var DummyInput =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(DummyInput, _Component);

	  function DummyInput() {
	    _classCallCheck(this, DummyInput);

	    return _possibleConstructorReturn(this, _getPrototypeOf$1(DummyInput).apply(this, arguments));
	  }

	  _createClass(DummyInput, [{
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          inProp = _this$props.in,
	          out = _this$props.out,
	          onExited = _this$props.onExited,
	          appear = _this$props.appear,
	          enter = _this$props.enter,
	          exit = _this$props.exit,
	          innerRef = _this$props.innerRef,
	          emotion = _this$props.emotion,
	          props = _objectWithoutProperties(_this$props, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

	      return React__default.createElement("input", _extends({
	        ref: innerRef
	      }, props, {
	        className:
	        /*#__PURE__*/

	        /*#__PURE__*/
	        css({
	          label: 'dummyInput',
	          // get rid of any default styles
	          background: 0,
	          border: 0,
	          fontSize: 'inherit',
	          outline: 0,
	          padding: 0,
	          // important! without `width` browsers won't allow focus
	          width: 1,
	          // remove cursor on desktop
	          color: 'transparent',
	          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
	          left: -100,
	          opacity: 0,
	          position: 'relative',
	          transform: 'scale(0)'
	        })
	      }));
	    }
	  }]);

	  return DummyInput;
	}(React.Component);

	var NodeResolver =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(NodeResolver, _Component);

	  function NodeResolver() {
	    _classCallCheck(this, NodeResolver);

	    return _possibleConstructorReturn(this, _getPrototypeOf$1(NodeResolver).apply(this, arguments));
	  }

	  _createClass(NodeResolver, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.props.innerRef(reactDom.findDOMNode(this));
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.props.innerRef(null);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return NodeResolver;
	}(React.Component);

	var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
	var LOCK_STYLES = {
	  boxSizing: 'border-box',
	  // account for possible declaration `width: 100%;` on body
	  overflow: 'hidden',
	  position: 'relative',
	  height: '100%'
	};

	function preventTouchMove(e) {
	  e.preventDefault();
	}
	function allowTouchMove(e) {
	  e.stopPropagation();
	}
	function preventInertiaScroll() {
	  var top = this.scrollTop;
	  var totalScroll = this.scrollHeight;
	  var currentScroll = top + this.offsetHeight;

	  if (top === 0) {
	    this.scrollTop = 1;
	  } else if (currentScroll === totalScroll) {
	    this.scrollTop = top - 1;
	  }
	} // `ontouchstart` check works on most browsers
	// `maxTouchPoints` works on IE10/11 and Surface

	function isTouchDevice() {
	  return 'ontouchstart' in window || navigator.maxTouchPoints;
	}

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	var activeScrollLocks = 0;

	var ScrollLock =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(ScrollLock, _Component);

	  function ScrollLock() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, ScrollLock);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(ScrollLock)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "originalStyles", {});

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "listenerOptions", {
	      capture: false,
	      passive: false
	    });

	    return _this;
	  }

	  _createClass(ScrollLock, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (!canUseDOM) return;
	      var _this$props = this.props,
	          accountForScrollbars = _this$props.accountForScrollbars,
	          touchScrollTarget = _this$props.touchScrollTarget;
	      var target = document.body;
	      var targetStyle = target && target.style;

	      if (accountForScrollbars) {
	        // store any styles already applied to the body
	        STYLE_KEYS.forEach(function (key) {
	          var val = targetStyle && targetStyle[key];
	          _this2.originalStyles[key] = val;
	        });
	      } // apply the lock styles and padding if this is the first scroll lock


	      if (accountForScrollbars && activeScrollLocks < 1) {
	        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
	        var clientWidth = document.body ? document.body.clientWidth : 0;
	        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
	        Object.keys(LOCK_STYLES).forEach(function (key) {
	          var val = LOCK_STYLES[key];

	          if (targetStyle) {
	            targetStyle[key] = val;
	          }
	        });

	        if (targetStyle) {
	          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
	        }
	      } // account for touch devices


	      if (target && isTouchDevice()) {
	        // Mobile Safari ignores { overflow: hidden } declaration on the body.
	        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

	        if (touchScrollTarget) {
	          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
	          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
	        }
	      } // increment active scroll locks


	      activeScrollLocks += 1;
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      var _this3 = this;

	      if (!canUseDOM) return;
	      var _this$props2 = this.props,
	          accountForScrollbars = _this$props2.accountForScrollbars,
	          touchScrollTarget = _this$props2.touchScrollTarget;
	      var target = document.body;
	      var targetStyle = target && target.style; // safely decrement active scroll locks

	      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

	      if (accountForScrollbars && activeScrollLocks < 1) {
	        STYLE_KEYS.forEach(function (key) {
	          var val = _this3.originalStyles[key];

	          if (targetStyle) {
	            targetStyle[key] = val;
	          }
	        });
	      } // remove touch listeners


	      if (target && isTouchDevice()) {
	        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

	        if (touchScrollTarget) {
	          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
	          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
	        }
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return null;
	    }
	  }]);

	  return ScrollLock;
	}(React.Component);

	_defineProperty(ScrollLock, "defaultProps", {
	  accountForScrollbars: true
	});

	// NOTE:
	// We shouldn't need this after updating to React v16.3.0, which introduces:
	// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
	// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
	var ScrollBlock =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(ScrollBlock, _PureComponent);

	  function ScrollBlock() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, ScrollBlock);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(ScrollBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
	      touchScrollTarget: null
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getScrollTarget", function (ref) {
	      if (ref === _this.state.touchScrollTarget) return;

	      _this.setState({
	        touchScrollTarget: ref
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "blurSelectInput", function () {
	      if (document.activeElement) {
	        document.activeElement.blur();
	      }
	    });

	    return _this;
	  }

	  _createClass(ScrollBlock, [{
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          children = _this$props.children,
	          isEnabled = _this$props.isEnabled;
	      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

	      if (!isEnabled) return children;
	      /*
	       * Div
	       * ------------------------------
	       * blocks scrolling on non-body elements behind the menu
	        * NodeResolver
	       * ------------------------------
	       * we need a reference to the scrollable element to "unlock" scroll on
	       * mobile devices
	        * ScrollLock
	       * ------------------------------
	       * actually does the scroll locking
	       */

	      return React__default.createElement("div", null, React__default.createElement("div", {
	        onClick: this.blurSelectInput,
	        className:
	        /*#__PURE__*/

	        /*#__PURE__*/
	        css({
	          position: 'fixed',
	          left: 0,
	          bottom: 0,
	          right: 0,
	          top: 0
	        })
	      }), React__default.createElement(NodeResolver, {
	        innerRef: this.getScrollTarget
	      }, children), touchScrollTarget ? React__default.createElement(ScrollLock, {
	        touchScrollTarget: touchScrollTarget
	      }) : null);
	    }
	  }]);

	  return ScrollBlock;
	}(React.PureComponent);

	var ScrollCaptor =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(ScrollCaptor, _Component);

	  function ScrollCaptor() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, ScrollCaptor);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(ScrollCaptor)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "isBottom", false);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "isTop", false);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "scrollTarget", void 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "touchStart", void 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "cancelScroll", function (event) {
	      event.preventDefault();
	      event.stopPropagation();
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "handleEventDelta", function (event, delta) {
	      var _this$props = _this.props,
	          onBottomArrive = _this$props.onBottomArrive,
	          onBottomLeave = _this$props.onBottomLeave,
	          onTopArrive = _this$props.onTopArrive,
	          onTopLeave = _this$props.onTopLeave;
	      var _this$scrollTarget = _this.scrollTarget,
	          scrollTop = _this$scrollTarget.scrollTop,
	          scrollHeight = _this$scrollTarget.scrollHeight,
	          clientHeight = _this$scrollTarget.clientHeight;
	      var target = _this.scrollTarget;
	      var isDeltaPositive = delta > 0;
	      var availableScroll = scrollHeight - clientHeight - scrollTop;
	      var shouldCancelScroll = false; // reset bottom/top flags

	      if (availableScroll > delta && _this.isBottom) {
	        if (onBottomLeave) onBottomLeave(event);
	        _this.isBottom = false;
	      }

	      if (isDeltaPositive && _this.isTop) {
	        if (onTopLeave) onTopLeave(event);
	        _this.isTop = false;
	      } // bottom limit


	      if (isDeltaPositive && delta > availableScroll) {
	        if (onBottomArrive && !_this.isBottom) {
	          onBottomArrive(event);
	        }

	        target.scrollTop = scrollHeight;
	        shouldCancelScroll = true;
	        _this.isBottom = true; // top limit
	      } else if (!isDeltaPositive && -delta > scrollTop) {
	        if (onTopArrive && !_this.isTop) {
	          onTopArrive(event);
	        }

	        target.scrollTop = 0;
	        shouldCancelScroll = true;
	        _this.isTop = true;
	      } // cancel scroll


	      if (shouldCancelScroll) {
	        _this.cancelScroll(event);
	      }
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onWheel", function (event) {
	      _this.handleEventDelta(event, event.deltaY);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchStart", function (event) {
	      // set touch start so we can calculate touchmove delta
	      _this.touchStart = event.changedTouches[0].clientY;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchMove", function (event) {
	      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

	      _this.handleEventDelta(event, deltaY);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getScrollTarget", function (ref) {
	      _this.scrollTarget = ref;
	    });

	    return _this;
	  }

	  _createClass(ScrollCaptor, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.startListening(this.scrollTarget);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.stopListening(this.scrollTarget);
	    }
	  }, {
	    key: "startListening",
	    value: function startListening(el) {
	      // bail early if no scroll available
	      if (!el) return;
	      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

	      if (typeof el.addEventListener === 'function') {
	        el.addEventListener('wheel', this.onWheel, false);
	      }

	      if (typeof el.addEventListener === 'function') {
	        el.addEventListener('touchstart', this.onTouchStart, false);
	      }

	      if (typeof el.addEventListener === 'function') {
	        el.addEventListener('touchmove', this.onTouchMove, false);
	      }
	    }
	  }, {
	    key: "stopListening",
	    value: function stopListening(el) {
	      // bail early if no scroll available
	      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

	      if (typeof el.removeEventListener === 'function') {
	        el.removeEventListener('wheel', this.onWheel, false);
	      }

	      if (typeof el.removeEventListener === 'function') {
	        el.removeEventListener('touchstart', this.onTouchStart, false);
	      }

	      if (typeof el.removeEventListener === 'function') {
	        el.removeEventListener('touchmove', this.onTouchMove, false);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React__default.createElement(NodeResolver, {
	        innerRef: this.getScrollTarget
	      }, this.props.children);
	    }
	  }]);

	  return ScrollCaptor;
	}(React.Component);

	var ScrollCaptorSwitch =
	/*#__PURE__*/
	function (_Component2) {
	  _inherits(ScrollCaptorSwitch, _Component2);

	  function ScrollCaptorSwitch() {
	    _classCallCheck(this, ScrollCaptorSwitch);

	    return _possibleConstructorReturn(this, _getPrototypeOf$1(ScrollCaptorSwitch).apply(this, arguments));
	  }

	  _createClass(ScrollCaptorSwitch, [{
	    key: "render",
	    value: function render() {
	      var _this$props2 = this.props,
	          isEnabled = _this$props2.isEnabled,
	          props = _objectWithoutProperties(_this$props2, ["isEnabled"]);

	      return isEnabled ? React__default.createElement(ScrollCaptor, props) : this.props.children;
	    }
	  }]);

	  return ScrollCaptorSwitch;
	}(React.Component);

	_defineProperty(ScrollCaptorSwitch, "defaultProps", {
	  isEnabled: true
	});

	var instructionsAriaMessage = function instructionsAriaMessage(event) {
	  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var isSearchable = context.isSearchable,
	      isMulti = context.isMulti,
	      label = context.label,
	      isDisabled = context.isDisabled;

	  switch (event) {
	    case 'menu':
	      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu, press Tab to select the option and exit the menu.");

	    case 'input':
	      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

	    case 'value':
	      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
	  }
	};
	var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
	  var value = context.value,
	      isDisabled = context.isDisabled;
	  if (!value) return;

	  switch (event) {
	    case 'deselect-option':
	    case 'pop-value':
	    case 'remove-value':
	      return "option ".concat(value, ", deselected.");

	    case 'select-option':
	      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
	  }
	};
	var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
	  var focusedValue = _ref.focusedValue,
	      getOptionLabel = _ref.getOptionLabel,
	      selectValue = _ref.selectValue;
	  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
	};
	var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
	  var focusedOption = _ref2.focusedOption,
	      getOptionLabel = _ref2.getOptionLabel,
	      options = _ref2.options;
	  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
	};
	var resultsAriaMessage = function resultsAriaMessage(_ref3) {
	  var inputValue = _ref3.inputValue,
	      screenReaderMessage = _ref3.screenReaderMessage;
	  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
	};

	var formatGroupLabel = function formatGroupLabel(group) {
	  return group.label;
	};
	var getOptionLabel = function getOptionLabel(option) {
	  return option.label;
	};
	var getOptionValue = function getOptionValue(option) {
	  return option.value;
	};
	var isOptionDisabled = function isOptionDisabled(option) {
	  return !!option.isDisabled;
	};

	var containerCSS = function containerCSS(_ref) {
	  var isDisabled = _ref.isDisabled,
	      isRtl = _ref.isRtl;
	  return {
	    label: 'container',
	    direction: isRtl ? 'rtl' : null,
	    pointerEvents: isDisabled ? 'none' : null,
	    // cancel mouse events when disabled
	    position: 'relative'
	  };
	};
	var SelectContainer = function SelectContainer(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps,
	      isDisabled = props.isDisabled,
	      isRtl = props.isRtl;
	  return React__default.createElement("div", _extends({
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('container', props)), {
	      '--is-disabled': isDisabled,
	      '--is-rtl': isRtl
	    }, className)
	  }, innerProps), children);
	}; // ==============================
	// Value Container
	// ==============================

	var valueContainerCSS = function valueContainerCSS(_ref2) {
	  var spacing = _ref2.theme.spacing;
	  return {
	    alignItems: 'center',
	    display: 'flex',
	    flex: 1,
	    flexWrap: 'wrap',
	    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
	    WebkitOverflowScrolling: 'touch',
	    position: 'relative',
	    overflow: 'hidden'
	  };
	};
	var ValueContainer =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(ValueContainer, _Component);

	  function ValueContainer() {
	    _classCallCheck(this, ValueContainer);

	    return _possibleConstructorReturn(this, _getPrototypeOf$1(ValueContainer).apply(this, arguments));
	  }

	  _createClass(ValueContainer, [{
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          children = _this$props.children,
	          className = _this$props.className,
	          cx = _this$props.cx,
	          isMulti = _this$props.isMulti,
	          getStyles = _this$props.getStyles,
	          hasValue = _this$props.hasValue;
	      return React__default.createElement("div", {
	        className: cx(
	        /*#__PURE__*/
	        css(getStyles('valueContainer', this.props)), {
	          'value-container': true,
	          'value-container--is-multi': isMulti,
	          'value-container--has-value': hasValue
	        }, className)
	      }, children);
	    }
	  }]);

	  return ValueContainer;
	}(React.Component); // ==============================
	// Indicator Container
	// ==============================

	var indicatorsContainerCSS = function indicatorsContainerCSS() {
	  return {
	    alignItems: 'center',
	    alignSelf: 'stretch',
	    display: 'flex',
	    flexShrink: 0
	  };
	};
	var IndicatorsContainer = function IndicatorsContainer(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles;
	  return React__default.createElement("div", {
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('indicatorsContainer', props)), {
	      'indicators': true
	    }, className)
	  }, children);
	};

	// ==============================
	// Dropdown & Clear Icons
	// ==============================
	var Svg = function Svg(_ref) {
	  var size = _ref.size,
	      props = _objectWithoutProperties(_ref, ["size"]);

	  return React__default.createElement("svg", _extends({
	    height: size,
	    width: size,
	    viewBox: "0 0 20 20",
	    "aria-hidden": "true",
	    focusable: "false",
	    className:
	    /*#__PURE__*/

	    /*#__PURE__*/
	    css({
	      display: 'inline-block',
	      fill: 'currentColor',
	      lineHeight: 1,
	      stroke: 'currentColor',
	      strokeWidth: 0
	    })
	  }, props));
	};

	var CrossIcon = function CrossIcon(props) {
	  return React__default.createElement(Svg, _extends({
	    size: 20
	  }, props), React__default.createElement("path", {
	    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
	  }));
	};
	var DownChevron = function DownChevron(props) {
	  return React__default.createElement(Svg, _extends({
	    size: 20
	  }, props), React__default.createElement("path", {
	    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
	  }));
	}; // ==============================
	// Dropdown & Clear Buttons
	// ==============================

	var baseCSS = function baseCSS(_ref2) {
	  var isFocused = _ref2.isFocused,
	      _ref2$theme = _ref2.theme,
	      baseUnit = _ref2$theme.spacing.baseUnit,
	      colors = _ref2$theme.colors;
	  return {
	    label: 'indicatorContainer',
	    color: isFocused ? colors.neutral60 : colors.neutral20,
	    display: 'flex',
	    padding: baseUnit * 2,
	    transition: 'color 150ms',
	    ':hover': {
	      color: isFocused ? colors.neutral80 : colors.neutral40
	    }
	  };
	};

	var dropdownIndicatorCSS = baseCSS;
	var DropdownIndicator = function DropdownIndicator(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return React__default.createElement("div", _extends({}, innerProps, {
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('dropdownIndicator', props)), {
	      'indicator': true,
	      'dropdown-indicator': true
	    }, className)
	  }), children || React__default.createElement(DownChevron, null));
	};
	var clearIndicatorCSS = baseCSS;
	var ClearIndicator = function ClearIndicator(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return React__default.createElement("div", _extends({}, innerProps, {
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('clearIndicator', props)), {
	      'indicator': true,
	      'clear-indicator': true
	    }, className)
	  }), children || React__default.createElement(CrossIcon, null));
	}; // ==============================
	// Separator
	// ==============================

	var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
	  var isDisabled = _ref3.isDisabled,
	      _ref3$theme = _ref3.theme,
	      baseUnit = _ref3$theme.spacing.baseUnit,
	      colors = _ref3$theme.colors;
	  return {
	    label: 'indicatorSeparator',
	    alignSelf: 'stretch',
	    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
	    marginBottom: baseUnit * 2,
	    marginTop: baseUnit * 2,
	    width: 1
	  };
	};
	var IndicatorSeparator = function IndicatorSeparator(props) {
	  var className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return React__default.createElement("span", _extends({}, innerProps, {
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('indicatorSeparator', props)), {
	      'indicator-separator': true
	    }, className)
	  }));
	}; // ==============================
	// Loading
	// ==============================

	var keyframesName = 'react-select-loading-indicator';
	var keyframesInjected = false;
	var loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
	  var isFocused = _ref4.isFocused,
	      size = _ref4.size,
	      _ref4$theme = _ref4.theme,
	      colors = _ref4$theme.colors,
	      baseUnit = _ref4$theme.spacing.baseUnit;
	  return {
	    label: 'loadingIndicator',
	    color: isFocused ? colors.neutral60 : colors.neutral20,
	    display: 'flex',
	    padding: baseUnit * 2,
	    transition: 'color 150ms',
	    alignSelf: 'center',
	    fontSize: size,
	    lineHeight: 1,
	    marginRight: size,
	    textAlign: 'center',
	    verticalAlign: 'middle'
	  };
	};

	var LoadingDot = function LoadingDot(_ref5) {
	  var color = _ref5.color,
	      delay = _ref5.delay,
	      offset = _ref5.offset;
	  return React__default.createElement("span", {
	    className:
	    /*#__PURE__*/

	    /*#__PURE__*/
	    css({
	      animationDuration: '1s',
	      animationDelay: "".concat(delay, "ms"),
	      animationIterationCount: 'infinite',
	      animationName: keyframesName,
	      animationTimingFunction: 'ease-in-out',
	      backgroundColor: color,
	      borderRadius: '1em',
	      display: 'inline-block',
	      marginLeft: offset ? '1em' : null,
	      height: '1em',
	      verticalAlign: 'top',
	      width: '1em'
	    })
	  });
	};

	var LoadingIndicator = function LoadingIndicator(props) {
	  var className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps,
	      isFocused = props.isFocused,
	      isRtl = props.isRtl,
	      colors = props.theme.colors;
	  var color = isFocused ? colors.neutral80 : colors.neutral20;

	  if (!keyframesInjected) {
	    // eslint-disable-next-line no-unused-expressions
	    injectGlobal("@keyframes ", keyframesName, "{0%,80%,100%{opacity:0;}40%{opacity:1;}};");
	    keyframesInjected = true;
	  }

	  return React__default.createElement("div", _extends({}, innerProps, {
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('loadingIndicator', props)), {
	      'indicator': true,
	      'loading-indicator': true
	    }, className)
	  }), React__default.createElement(LoadingDot, {
	    color: color,
	    delay: 0,
	    offset: isRtl
	  }), React__default.createElement(LoadingDot, {
	    color: color,
	    delay: 160,
	    offset: true
	  }), React__default.createElement(LoadingDot, {
	    color: color,
	    delay: 320,
	    offset: !isRtl
	  }));
	};
	LoadingIndicator.defaultProps = {
	  size: 4
	};

	var css$1 = function css$$1(_ref) {
	  var isDisabled = _ref.isDisabled,
	      isFocused = _ref.isFocused,
	      _ref$theme = _ref.theme,
	      colors = _ref$theme.colors,
	      borderRadius = _ref$theme.borderRadius,
	      spacing = _ref$theme.spacing;
	  return {
	    label: 'control',
	    alignItems: 'center',
	    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
	    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
	    borderRadius: borderRadius,
	    borderStyle: 'solid',
	    borderWidth: 1,
	    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
	    cursor: 'default',
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-between',
	    minHeight: spacing.controlHeight,
	    outline: '0 !important',
	    position: 'relative',
	    transition: 'all 100ms',
	    '&:hover': {
	      borderColor: isFocused ? colors.primary : colors.neutral30
	    }
	  };
	};

	var Control = function Control(props) {
	  var children = props.children,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      className = props.className,
	      isDisabled = props.isDisabled,
	      isFocused = props.isFocused,
	      innerRef = props.innerRef,
	      innerProps = props.innerProps,
	      menuIsOpen = props.menuIsOpen;
	  return React__default.createElement("div", _extends({
	    ref: innerRef,
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('control', props)), {
	      'control': true,
	      'control--is-disabled': isDisabled,
	      'control--is-focused': isFocused,
	      'control--menu-is-open': menuIsOpen
	    }, className)
	  }, innerProps), children);
	};

	var groupCSS = function groupCSS(_ref) {
	  var spacing = _ref.theme.spacing;
	  return {
	    paddingBottom: spacing.baseUnit * 2,
	    paddingTop: spacing.baseUnit * 2
	  };
	};

	var Group = function Group(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      Heading = props.Heading,
	      headingProps = props.headingProps,
	      label = props.label,
	      theme = props.theme,
	      selectProps = props.selectProps;
	  return React__default.createElement("div", {
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('group', props)), {
	      'group': true
	    }, className)
	  }, React__default.createElement(Heading, _extends({}, headingProps, {
	    selectProps: selectProps,
	    theme: theme,
	    getStyles: getStyles,
	    cx: cx
	  }), label), React__default.createElement("div", null, children));
	};

	var groupHeadingCSS = function groupHeadingCSS(_ref2) {
	  var spacing = _ref2.theme.spacing;
	  return {
	    label: 'group',
	    color: '#999',
	    cursor: 'default',
	    display: 'block',
	    fontSize: '75%',
	    fontWeight: '500',
	    marginBottom: '0.25em',
	    paddingLeft: spacing.baseUnit * 3,
	    paddingRight: spacing.baseUnit * 3,
	    textTransform: 'uppercase'
	  };
	};
	var GroupHeading = function GroupHeading(props) {
	  var className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      theme = props.theme,
	      selectProps = props.selectProps,
	      cleanProps = _objectWithoutProperties(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

	  return React__default.createElement("div", _extends({
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('groupHeading', _objectSpread({
	      theme: theme
	    }, cleanProps))), {
	      'group-heading': true
	    }, className)
	  }, cleanProps));
	};

	var inputCSS = function inputCSS(_ref) {
	  var isDisabled = _ref.isDisabled,
	      _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      colors = _ref$theme.colors;
	  return {
	    margin: spacing.baseUnit / 2,
	    paddingBottom: spacing.baseUnit / 2,
	    paddingTop: spacing.baseUnit / 2,
	    visibility: isDisabled ? 'hidden' : 'visible',
	    color: colors.neutral80
	  };
	};

	var inputStyle = function inputStyle(isHidden) {
	  return {
	    label: 'input',
	    background: 0,
	    border: 0,
	    fontSize: 'inherit',
	    opacity: isHidden ? 0 : 1,
	    outline: 0,
	    padding: 0,
	    color: 'inherit'
	  };
	};

	var Input$1 = function Input(_ref2) {
	  var className = _ref2.className,
	      cx = _ref2.cx,
	      getStyles = _ref2.getStyles,
	      innerRef = _ref2.innerRef,
	      isHidden = _ref2.isHidden,
	      isDisabled = _ref2.isDisabled,
	      theme = _ref2.theme,
	      selectProps = _ref2.selectProps,
	      props = _objectWithoutProperties(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

	  return React__default.createElement("div", {
	    className:
	    /*#__PURE__*/

	    /*#__PURE__*/
	    css(getStyles('input', _objectSpread({
	      theme: theme
	    }, props)))
	  }, React__default.createElement(AutosizeInput, _extends({
	    className: cx(null, {
	      'input': true
	    }, className),
	    inputRef: innerRef,
	    inputStyle: inputStyle(isHidden),
	    disabled: isDisabled
	  }, props)));
	};

	var multiValueCSS = function multiValueCSS(_ref) {
	  var _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      borderRadius = _ref$theme.borderRadius,
	      colors = _ref$theme.colors;
	  return {
	    label: 'multiValue',
	    backgroundColor: colors.neutral10,
	    borderRadius: borderRadius / 2,
	    display: 'flex',
	    margin: spacing.baseUnit / 2,
	    minWidth: 0 // resolves flex/text-overflow bug

	  };
	};
	var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
	  var _ref2$theme = _ref2.theme,
	      borderRadius = _ref2$theme.borderRadius,
	      colors = _ref2$theme.colors,
	      cropWithEllipsis = _ref2.cropWithEllipsis;
	  return {
	    borderRadius: borderRadius / 2,
	    color: colors.neutral80,
	    fontSize: '85%',
	    overflow: 'hidden',
	    padding: 3,
	    paddingLeft: 6,
	    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
	    whiteSpace: 'nowrap'
	  };
	};
	var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
	  var _ref3$theme = _ref3.theme,
	      spacing = _ref3$theme.spacing,
	      borderRadius = _ref3$theme.borderRadius,
	      colors = _ref3$theme.colors,
	      isFocused = _ref3.isFocused;
	  return {
	    alignItems: 'center',
	    borderRadius: borderRadius / 2,
	    backgroundColor: isFocused && colors.dangerLight,
	    display: 'flex',
	    paddingLeft: spacing.baseUnit,
	    paddingRight: spacing.baseUnit,
	    ':hover': {
	      backgroundColor: colors.dangerLight,
	      color: colors.danger
	    }
	  };
	};
	var MultiValueGeneric = function MultiValueGeneric(_ref4) {
	  var children = _ref4.children,
	      innerProps = _ref4.innerProps;
	  return React__default.createElement("div", innerProps, children);
	};
	var MultiValueContainer = MultiValueGeneric;
	var MultiValueLabel = MultiValueGeneric;
	var MultiValueRemove =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(MultiValueRemove, _Component);

	  function MultiValueRemove() {
	    _classCallCheck(this, MultiValueRemove);

	    return _possibleConstructorReturn(this, _getPrototypeOf$1(MultiValueRemove).apply(this, arguments));
	  }

	  _createClass(MultiValueRemove, [{
	    key: "render",
	    value: function render() {
	      var _this$props = this.props,
	          children = _this$props.children,
	          innerProps = _this$props.innerProps;
	      return React__default.createElement("div", innerProps, children || React__default.createElement(CrossIcon, {
	        size: 14
	      }));
	    }
	  }]);

	  return MultiValueRemove;
	}(React.Component);

	var MultiValue =
	/*#__PURE__*/
	function (_Component2) {
	  _inherits(MultiValue, _Component2);

	  function MultiValue() {
	    _classCallCheck(this, MultiValue);

	    return _possibleConstructorReturn(this, _getPrototypeOf$1(MultiValue).apply(this, arguments));
	  }

	  _createClass(MultiValue, [{
	    key: "render",
	    value: function render() {
	      var _this$props2 = this.props,
	          children = _this$props2.children,
	          className = _this$props2.className,
	          components = _this$props2.components,
	          cx = _this$props2.cx,
	          data = _this$props2.data,
	          getStyles = _this$props2.getStyles,
	          innerProps = _this$props2.innerProps,
	          isDisabled = _this$props2.isDisabled,
	          removeProps = _this$props2.removeProps,
	          selectProps = _this$props2.selectProps;
	      var Container = components.Container,
	          Label = components.Label,
	          Remove = components.Remove;

	      var containerInnerProps = _objectSpread({
	        className: cx(
	        /*#__PURE__*/
	        css(getStyles('multiValue', this.props)), {
	          'multi-value': true,
	          'multi-value--is-disabled': isDisabled
	        }, className)
	      }, innerProps);

	      var labelInnerProps = {
	        className: cx(
	        /*#__PURE__*/
	        css(getStyles('multiValueLabel', this.props)), {
	          'multi-value__label': true
	        }, className)
	      };

	      var removeInnerProps = _objectSpread({
	        className: cx(
	        /*#__PURE__*/
	        css(getStyles('multiValueRemove', this.props)), {
	          'multi-value__remove': true
	        }, className)
	      }, removeProps);

	      return React__default.createElement(Container, {
	        data: data,
	        innerProps: containerInnerProps,
	        selectProps: selectProps
	      }, React__default.createElement(Label, {
	        data: data,
	        innerProps: labelInnerProps,
	        selectProps: selectProps
	      }, children), React__default.createElement(Remove, {
	        data: data,
	        innerProps: removeInnerProps,
	        selectProps: selectProps
	      }));
	    }
	  }]);

	  return MultiValue;
	}(React.Component);

	_defineProperty(MultiValue, "defaultProps", {
	  cropWithEllipsis: true
	});

	var optionCSS = function optionCSS(_ref) {
	  var isDisabled = _ref.isDisabled,
	      isFocused = _ref.isFocused,
	      isSelected = _ref.isSelected,
	      _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      colors = _ref$theme.colors;
	  return {
	    label: 'option',
	    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
	    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
	    cursor: 'default',
	    display: 'block',
	    fontSize: 'inherit',
	    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
	    width: '100%',
	    userSelect: 'none',
	    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
	    // provide some affordance on touch devices
	    ':active': {
	      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
	    }
	  };
	};

	var Option = function Option(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      isDisabled = props.isDisabled,
	      isFocused = props.isFocused,
	      isSelected = props.isSelected,
	      innerRef = props.innerRef,
	      innerProps = props.innerProps;
	  return React__default.createElement("div", _extends({
	    ref: innerRef,
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('option', props)), {
	      'option': true,
	      'option--is-disabled': isDisabled,
	      'option--is-focused': isFocused,
	      'option--is-selected': isSelected
	    }, className)
	  }, innerProps), children);
	};

	var placeholderCSS = function placeholderCSS(_ref) {
	  var _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      colors = _ref$theme.colors;
	  return {
	    label: 'placeholder',
	    color: colors.neutral50,
	    marginLeft: spacing.baseUnit / 2,
	    marginRight: spacing.baseUnit / 2,
	    position: 'absolute',
	    top: '50%',
	    transform: 'translateY(-50%)'
	  };
	};

	var Placeholder$1 = function Placeholder(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return React__default.createElement("div", _extends({
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('placeholder', props)), {
	      'placeholder': true
	    }, className)
	  }, innerProps), children);
	};

	var css$2 = function css$$1(_ref) {
	  var isDisabled = _ref.isDisabled,
	      _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      colors = _ref$theme.colors;
	  return {
	    label: 'singleValue',
	    color: isDisabled ? colors.neutral40 : colors.neutral80,
	    marginLeft: spacing.baseUnit / 2,
	    marginRight: spacing.baseUnit / 2,
	    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
	    overflow: 'hidden',
	    position: 'absolute',
	    textOverflow: 'ellipsis',
	    whiteSpace: 'nowrap',
	    top: '50%',
	    transform: 'translateY(-50%)'
	  };
	};

	var SingleValue = function SingleValue(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      isDisabled = props.isDisabled,
	      innerProps = props.innerProps;
	  return React__default.createElement("div", _extends({
	    className: cx(
	    /*#__PURE__*/
	    css(getStyles('singleValue', props)), {
	      'single-value': true,
	      'single-value--is-disabled': isDisabled
	    }, className)
	  }, innerProps), children);
	};

	var components = {
	  ClearIndicator: ClearIndicator,
	  Control: Control,
	  DropdownIndicator: DropdownIndicator,
	  DownChevron: DownChevron,
	  CrossIcon: CrossIcon,
	  Group: Group,
	  GroupHeading: GroupHeading,
	  IndicatorsContainer: IndicatorsContainer,
	  IndicatorSeparator: IndicatorSeparator,
	  Input: Input$1,
	  LoadingIndicator: LoadingIndicator,
	  Menu: Menu,
	  MenuList: MenuList,
	  MenuPortal: MenuPortal,
	  LoadingMessage: LoadingMessage,
	  NoOptionsMessage: NoOptionsMessage,
	  MultiValue: MultiValue,
	  MultiValueContainer: MultiValueContainer,
	  MultiValueLabel: MultiValueLabel,
	  MultiValueRemove: MultiValueRemove,
	  Option: Option,
	  Placeholder: Placeholder$1,
	  SelectContainer: SelectContainer,
	  SingleValue: SingleValue,
	  ValueContainer: ValueContainer
	};
	var defaultComponents = function defaultComponents(props) {
	  return _objectSpread({}, components, props.components);
	};

	var defaultStyles = {
	  clearIndicator: clearIndicatorCSS,
	  container: containerCSS,
	  control: css$1,
	  dropdownIndicator: dropdownIndicatorCSS,
	  group: groupCSS,
	  groupHeading: groupHeadingCSS,
	  indicatorsContainer: indicatorsContainerCSS,
	  indicatorSeparator: indicatorSeparatorCSS,
	  input: inputCSS,
	  loadingIndicator: loadingIndicatorCSS,
	  loadingMessage: loadingMessageCSS,
	  menu: menuCSS,
	  menuList: menuListCSS,
	  menuPortal: menuPortalCSS,
	  multiValue: multiValueCSS,
	  multiValueLabel: multiValueLabelCSS,
	  multiValueRemove: multiValueRemoveCSS,
	  noOptionsMessage: noOptionsMessageCSS,
	  option: optionCSS,
	  placeholder: placeholderCSS,
	  singleValue: css$2,
	  valueContainer: valueContainerCSS
	}; // Merge Utility

	var colors = {
	  primary: '#2684FF',
	  primary75: '#4C9AFF',
	  primary50: '#B2D4FF',
	  primary25: '#DEEBFF',
	  danger: '#DE350B',
	  dangerLight: '#FFBDAD',
	  neutral0: 'hsl(0, 0%, 100%)',
	  neutral5: 'hsl(0, 0%, 95%)',
	  neutral10: 'hsl(0, 0%, 90%)',
	  neutral20: 'hsl(0, 0%, 80%)',
	  neutral30: 'hsl(0, 0%, 70%)',
	  neutral40: 'hsl(0, 0%, 60%)',
	  neutral50: 'hsl(0, 0%, 50%)',
	  neutral60: 'hsl(0, 0%, 40%)',
	  neutral70: 'hsl(0, 0%, 30%)',
	  neutral80: 'hsl(0, 0%, 20%)',
	  neutral90: 'hsl(0, 0%, 10%)'
	};
	var borderRadius = 4;
	var baseUnit = 4;
	/* Used to calculate consistent margin/padding on elements */

	var controlHeight = 38;
	/* The minimum height of the control */

	var menuGutter = baseUnit * 2;
	/* The amount of space between the control and menu */

	var spacing = {
	  baseUnit: baseUnit,
	  controlHeight: controlHeight,
	  menuGutter: menuGutter
	};
	var defaultTheme = {
	  borderRadius: borderRadius,
	  colors: colors,
	  spacing: spacing
	};

	var defaultProps = {
	  backspaceRemovesValue: true,
	  blurInputOnSelect: isTouchCapable(),
	  captureMenuScroll: !isTouchCapable(),
	  closeMenuOnSelect: true,
	  closeMenuOnScroll: false,
	  components: {},
	  controlShouldRenderValue: true,
	  escapeClearsValue: false,
	  filterOption: createFilter(),
	  formatGroupLabel: formatGroupLabel,
	  getOptionLabel: getOptionLabel,
	  getOptionValue: getOptionValue,
	  isDisabled: false,
	  isLoading: false,
	  isMulti: false,
	  isRtl: false,
	  isSearchable: true,
	  isOptionDisabled: isOptionDisabled,
	  loadingMessage: function loadingMessage() {
	    return 'Loading...';
	  },
	  maxMenuHeight: 300,
	  minMenuHeight: 140,
	  menuIsOpen: false,
	  menuPlacement: 'bottom',
	  menuPosition: 'absolute',
	  menuShouldBlockScroll: false,
	  menuShouldScrollIntoView: !isMobileDevice(),
	  noOptionsMessage: function noOptionsMessage() {
	    return 'No options';
	  },
	  openMenuOnFocus: false,
	  openMenuOnClick: true,
	  options: [],
	  pageSize: 5,
	  placeholder: 'Select...',
	  screenReaderStatus: function screenReaderStatus(_ref) {
	    var count = _ref.count;
	    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
	  },
	  styles: {},
	  tabIndex: '0',
	  tabSelectsValue: true
	};
	var instanceId = 1;

	var Select =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(Select, _Component);

	  // Misc. Instance Properties
	  // ------------------------------
	  // TODO
	  // Refs
	  // ------------------------------
	  // Lifecycle
	  // ------------------------------
	  function Select(_props) {
	    var _this;

	    _classCallCheck(this, Select);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf$1(Select).call(this, _props));

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
	      ariaLiveSelection: '',
	      ariaLiveContext: '',
	      focusedOption: null,
	      focusedValue: null,
	      inputIsHidden: false,
	      isFocused: false,
	      menuOptions: {
	        render: [],
	        focusable: []
	      },
	      selectValue: []
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "blockOptionHover", false);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "isComposing", false);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "clearFocusValueOnUpdate", false);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "commonProps", void 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "components", void 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "hasGroups", false);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "initialTouchX", 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "initialTouchY", 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "inputIsHiddenAfterUpdate", void 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "instancePrefix", '');

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "openAfterFocus", false);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "scrollToFocusedOptionOnUpdate", false);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "userIsDragging", void 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "controlRef", null);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getControlRef", function (ref) {
	      _this.controlRef = ref;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "focusedOptionRef", null);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getFocusedOptionRef", function (ref) {
	      _this.focusedOptionRef = ref;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "menuListRef", null);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getMenuListRef", function (ref) {
	      _this.menuListRef = ref;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "inputRef", null);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getInputRef", function (ref) {
	      _this.inputRef = ref;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "cacheComponents", function (components$$1) {
	      _this.components = defaultComponents({
	        components: components$$1
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "focus", _this.focusInput);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "blur", _this.blurInput);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onChange", function (newValue, actionMeta) {
	      var _this$props = _this.props,
	          onChange = _this$props.onChange,
	          name = _this$props.name;
	      onChange(newValue, _objectSpread({}, actionMeta, {
	        name: name
	      }));
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "setValue", function (newValue) {
	      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
	      var option = arguments.length > 2 ? arguments[2] : undefined;
	      var _this$props2 = _this.props,
	          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
	          isMulti = _this$props2.isMulti;

	      _this.onInputChange('', {
	        action: 'set-value'
	      });

	      if (closeMenuOnSelect) {
	        _this.inputIsHiddenAfterUpdate = !isMulti;

	        _this.onMenuClose();
	      } // when the select value should change, we should reset focusedValue


	      _this.clearFocusValueOnUpdate = true;

	      _this.onChange(newValue, {
	        action: action,
	        option: option
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "selectOption", function (newValue) {
	      var _this$props3 = _this.props,
	          blurInputOnSelect = _this$props3.blurInputOnSelect,
	          isMulti = _this$props3.isMulti;
	      var selectValue = _this.state.selectValue;

	      if (isMulti) {
	        if (_this.isOptionSelected(newValue, selectValue)) {
	          var candidate = _this.getOptionValue(newValue);

	          _this.setValue(selectValue.filter(function (i) {
	            return _this.getOptionValue(i) !== candidate;
	          }), 'deselect-option', newValue);

	          _this.announceAriaLiveSelection({
	            event: 'deselect-option',
	            context: {
	              value: _this.getOptionLabel(newValue)
	            }
	          });
	        } else {
	          if (!_this.isOptionDisabled(newValue, selectValue)) {
	            _this.setValue([].concat(_toConsumableArray(selectValue), [newValue]), 'select-option', newValue);

	            _this.announceAriaLiveSelection({
	              event: 'select-option',
	              context: {
	                value: _this.getOptionLabel(newValue)
	              }
	            });
	          } else {
	            // announce that option is disabled
	            _this.announceAriaLiveSelection({
	              event: 'select-option',
	              context: {
	                value: _this.getOptionLabel(newValue),
	                isDisabled: true
	              }
	            });
	          }
	        }
	      } else {
	        if (!_this.isOptionDisabled(newValue, selectValue)) {
	          _this.setValue(newValue, 'select-option');

	          _this.announceAriaLiveSelection({
	            event: 'select-option',
	            context: {
	              value: _this.getOptionLabel(newValue)
	            }
	          });
	        } else {
	          // announce that option is disabled
	          _this.announceAriaLiveSelection({
	            event: 'select-option',
	            context: {
	              value: _this.getOptionLabel(newValue),
	              isDisabled: true
	            }
	          });
	        }
	      }

	      if (blurInputOnSelect) {
	        _this.blurInput();
	      }
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "removeValue", function (removedValue) {
	      var selectValue = _this.state.selectValue;

	      var candidate = _this.getOptionValue(removedValue);

	      _this.onChange(selectValue.filter(function (i) {
	        return _this.getOptionValue(i) !== candidate;
	      }), {
	        action: 'remove-value',
	        removedValue: removedValue
	      });

	      _this.announceAriaLiveSelection({
	        event: 'remove-value',
	        context: {
	          value: removedValue ? _this.getOptionLabel(removedValue) : ''
	        }
	      });

	      _this.focusInput();
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "clearValue", function () {
	      var isMulti = _this.props.isMulti;

	      _this.onChange(isMulti ? [] : null, {
	        action: 'clear'
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "popValue", function () {
	      var selectValue = _this.state.selectValue;
	      var lastSelectedValue = selectValue[selectValue.length - 1];

	      _this.announceAriaLiveSelection({
	        event: 'pop-value',
	        context: {
	          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
	        }
	      });

	      _this.onChange(selectValue.slice(0, selectValue.length - 1), {
	        action: 'pop-value',
	        removedValue: lastSelectedValue
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getOptionLabel", function (data) {
	      return _this.props.getOptionLabel(data);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getOptionValue", function (data) {
	      return _this.props.getOptionValue(data);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getStyles", function (key, props) {
	      var base = defaultStyles[key](props);
	      base.boxSizing = 'border-box';
	      var custom = _this.props.styles[key];
	      return custom ? custom(base, props) : base;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getElementId", function (element) {
	      return "".concat(_this.instancePrefix, "-").concat(element);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getActiveDescendentId", function () {
	      var menuIsOpen = _this.props.menuIsOpen;
	      var _this$state = _this.state,
	          menuOptions = _this$state.menuOptions,
	          focusedOption = _this$state.focusedOption;
	      if (!focusedOption || !menuIsOpen) return undefined;
	      var index = menuOptions.focusable.indexOf(focusedOption);
	      var option = menuOptions.render[index];
	      return option && option.key;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "announceAriaLiveSelection", function (_ref2) {
	      var event = _ref2.event,
	          context = _ref2.context;

	      _this.setState({
	        ariaLiveSelection: valueEventAriaMessage(event, context)
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "announceAriaLiveContext", function (_ref3) {
	      var event = _ref3.event,
	          context = _ref3.context;

	      _this.setState({
	        ariaLiveContext: instructionsAriaMessage(event, _objectSpread({}, context, {
	          label: _this.props['aria-label']
	        }))
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onMenuMouseDown", function (event) {
	      if (event.button !== 0) {
	        return;
	      }

	      event.stopPropagation();
	      event.preventDefault();

	      _this.focusInput();
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onMenuMouseMove", function (event) {
	      _this.blockOptionHover = false;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onControlMouseDown", function (event) {
	      var openMenuOnClick = _this.props.openMenuOnClick;

	      if (!_this.state.isFocused) {
	        if (openMenuOnClick) {
	          _this.openAfterFocus = true;
	        }

	        _this.focusInput();
	      } else if (!_this.props.menuIsOpen) {
	        if (openMenuOnClick) {
	          _this.openMenu('first');
	        }
	      } else {
	        //$FlowFixMe
	        if (event.target.tagName !== 'INPUT') {
	          _this.onMenuClose();
	        }
	      } //$FlowFixMe


	      if (event.target.tagName !== 'INPUT') {
	        event.preventDefault();
	      }
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onDropdownIndicatorMouseDown", function (event) {
	      // ignore mouse events that weren't triggered by the primary button
	      if (event && event.type === 'mousedown' && event.button !== 0) {
	        return;
	      }

	      if (_this.props.isDisabled) return;
	      var _this$props4 = _this.props,
	          isMulti = _this$props4.isMulti,
	          menuIsOpen = _this$props4.menuIsOpen;

	      _this.focusInput();

	      if (menuIsOpen) {
	        _this.inputIsHiddenAfterUpdate = !isMulti;

	        _this.onMenuClose();
	      } else {
	        _this.openMenu('first');
	      }

	      event.preventDefault();
	      event.stopPropagation();
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onClearIndicatorMouseDown", function (event) {
	      // ignore mouse events that weren't triggered by the primary button
	      if (event && event.type === 'mousedown' && event.button !== 0) {
	        return;
	      }

	      _this.clearValue();

	      event.stopPropagation();
	      _this.openAfterFocus = false;
	      setTimeout(function () {
	        return _this.focusInput();
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onScroll", function (event) {
	      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
	        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
	          _this.props.onMenuClose();
	        }
	      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
	        if (_this.props.closeMenuOnScroll(event)) {
	          _this.props.onMenuClose();
	        }
	      }
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onCompositionStart", function () {
	      _this.isComposing = true;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onCompositionEnd", function () {
	      _this.isComposing = false;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchStart", function (_ref4) {
	      var touches = _ref4.touches;
	      var touch = touches.item(0);

	      if (!touch) {
	        return;
	      }

	      _this.initialTouchX = touch.clientX;
	      _this.initialTouchY = touch.clientY;
	      _this.userIsDragging = false;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchMove", function (_ref5) {
	      var touches = _ref5.touches;
	      var touch = touches.item(0);

	      if (!touch) {
	        return;
	      }

	      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
	      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
	      var moveThreshold = 5;
	      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchEnd", function (event) {
	      if (_this.userIsDragging) return; // close the menu if the user taps outside
	      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
	      // on events on child elements, not the document (which we've attached this handler to).

	      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
	        _this.blurInput();
	      } // reset move vars


	      _this.initialTouchX = 0;
	      _this.initialTouchY = 0;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onControlTouchEnd", function (event) {
	      if (_this.userIsDragging) return;

	      _this.onControlMouseDown(event);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onClearIndicatorTouchEnd", function (event) {
	      if (_this.userIsDragging) return;

	      _this.onClearIndicatorMouseDown(event);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onDropdownIndicatorTouchEnd", function (event) {
	      if (_this.userIsDragging) return;

	      _this.onDropdownIndicatorMouseDown(event);
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "handleInputChange", function (event) {
	      var inputValue = event.currentTarget.value;
	      _this.inputIsHiddenAfterUpdate = false;

	      _this.onInputChange(inputValue, {
	        action: 'input-change'
	      });

	      _this.onMenuOpen();
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onInputFocus", function (event) {
	      var _this$props5 = _this.props,
	          isSearchable = _this$props5.isSearchable,
	          isMulti = _this$props5.isMulti;

	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }

	      _this.inputIsHiddenAfterUpdate = false;

	      _this.announceAriaLiveContext({
	        event: 'input',
	        context: {
	          isSearchable: isSearchable,
	          isMulti: isMulti
	        }
	      });

	      _this.setState({
	        isFocused: true
	      });

	      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
	        _this.openMenu('first');
	      }

	      _this.openAfterFocus = false;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onInputBlur", function (event) {
	      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
	        _this.inputRef.focus();

	        return;
	      }

	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }

	      _this.onInputChange('', {
	        action: 'input-blur'
	      });

	      _this.onMenuClose();

	      _this.setState({
	        focusedValue: null,
	        isFocused: false
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onOptionHover", function (focusedOption) {
	      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
	        return;
	      }

	      _this.setState({
	        focusedOption: focusedOption
	      });
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "shouldHideSelectedOptions", function () {
	      var _this$props6 = _this.props,
	          hideSelectedOptions = _this$props6.hideSelectedOptions,
	          isMulti = _this$props6.isMulti;
	      if (hideSelectedOptions === undefined) return isMulti;
	      return hideSelectedOptions;
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onKeyDown", function (event) {
	      var _this$props7 = _this.props,
	          isMulti = _this$props7.isMulti,
	          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
	          escapeClearsValue = _this$props7.escapeClearsValue,
	          inputValue = _this$props7.inputValue,
	          isClearable = _this$props7.isClearable,
	          isDisabled = _this$props7.isDisabled,
	          menuIsOpen = _this$props7.menuIsOpen,
	          onKeyDown = _this$props7.onKeyDown,
	          tabSelectsValue = _this$props7.tabSelectsValue,
	          openMenuOnFocus = _this$props7.openMenuOnFocus;
	      var _this$state2 = _this.state,
	          focusedOption = _this$state2.focusedOption,
	          focusedValue = _this$state2.focusedValue,
	          selectValue = _this$state2.selectValue;
	      if (isDisabled) return;

	      if (typeof onKeyDown === 'function') {
	        onKeyDown(event);

	        if (event.defaultPrevented) {
	          return;
	        }
	      } // Block option hover events when the user has just pressed a key


	      _this.blockOptionHover = true;

	      switch (event.key) {
	        case 'ArrowLeft':
	          if (!isMulti || inputValue) return;

	          _this.focusValue('previous');

	          break;

	        case 'ArrowRight':
	          if (!isMulti || inputValue) return;

	          _this.focusValue('next');

	          break;

	        case 'Delete':
	        case 'Backspace':
	          if (inputValue) return;

	          if (focusedValue) {
	            _this.removeValue(focusedValue);
	          } else {
	            if (!backspaceRemovesValue) return;

	            if (isMulti) {
	              _this.popValue();
	            } else if (isClearable) {
	              _this.clearValue();
	            }
	          }

	          break;

	        case 'Tab':
	          if (_this.isComposing) return;

	          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
	          // option is already selected; it breaks the flow of navigation
	          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
	            return;
	          }

	          _this.selectOption(focusedOption);

	          break;

	        case 'Enter':
	          if (event.keyCode === 229) {
	            // ignore the keydown event from an Input Method Editor(IME)
	            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
	            break;
	          }

	          if (menuIsOpen) {
	            if (!focusedOption) return;
	            if (_this.isComposing) return;

	            _this.selectOption(focusedOption);

	            break;
	          }

	          return;

	        case 'Escape':
	          if (menuIsOpen) {
	            _this.inputIsHiddenAfterUpdate = false;

	            _this.onInputChange('', {
	              action: 'menu-close'
	            });

	            _this.onMenuClose();
	          } else if (isClearable && escapeClearsValue) {
	            _this.clearValue();
	          }

	          break;

	        case ' ':
	          // space
	          if (inputValue) {
	            return;
	          }

	          if (!menuIsOpen) {
	            _this.openMenu('first');

	            break;
	          }

	          if (!focusedOption) return;

	          _this.selectOption(focusedOption);

	          break;

	        case 'ArrowUp':
	          if (menuIsOpen) {
	            _this.focusOption('up');
	          } else {
	            _this.openMenu('last');
	          }

	          break;

	        case 'ArrowDown':
	          if (menuIsOpen) {
	            _this.focusOption('down');
	          } else {
	            _this.openMenu('first');
	          }

	          break;

	        case 'PageUp':
	          if (!menuIsOpen) return;

	          _this.focusOption('pageup');

	          break;

	        case 'PageDown':
	          if (!menuIsOpen) return;

	          _this.focusOption('pagedown');

	          break;

	        case 'Home':
	          if (!menuIsOpen) return;

	          _this.focusOption('first');

	          break;

	        case 'End':
	          if (!menuIsOpen) return;

	          _this.focusOption('last');

	          break;

	        default:
	          return;
	      }

	      event.preventDefault();
	    });

	    var value = _props.value;
	    _this.cacheComponents = memoizeOne(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized$1(_assertThisInitialized$1(_this)));

	    _this.cacheComponents(_props.components);

	    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

	    var _selectValue = cleanValue(value);

	    var _menuOptions = _this.buildMenuOptions(_props, _selectValue);

	    _this.state.menuOptions = _menuOptions;
	    _this.state.selectValue = _selectValue;
	    return _this;
	  }

	  _createClass(Select, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.startListeningComposition();
	      this.startListeningToTouch();

	      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
	        // Listen to all scroll events, and filter them out inside of 'onScroll'
	        document.addEventListener('scroll', this.onScroll, true);
	      }

	      if (this.props.autoFocus) {
	        this.focusInput();
	      }
	    }
	  }, {
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this$props8 = this.props,
	          options = _this$props8.options,
	          value = _this$props8.value,
	          inputValue = _this$props8.inputValue; // re-cache custom components

	      this.cacheComponents(nextProps.components); // rebuild the menu options

	      if (nextProps.value !== value || nextProps.options !== options || nextProps.inputValue !== inputValue) {
	        var selectValue = cleanValue(nextProps.value);
	        var menuOptions = this.buildMenuOptions(nextProps, selectValue);
	        var focusedValue = this.getNextFocusedValue(selectValue);
	        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
	        this.setState({
	          menuOptions: menuOptions,
	          selectValue: selectValue,
	          focusedOption: focusedOption,
	          focusedValue: focusedValue
	        });
	      } // some updates should toggle the state of the input visibility


	      if (this.inputIsHiddenAfterUpdate != null) {
	        this.setState({
	          inputIsHidden: this.inputIsHiddenAfterUpdate
	        });
	        delete this.inputIsHiddenAfterUpdate;
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      var _this$props9 = this.props,
	          isDisabled = _this$props9.isDisabled,
	          menuIsOpen = _this$props9.menuIsOpen;
	      var isFocused = this.state.isFocused;

	      if ( // ensure focus is restored correctly when the control becomes enabled
	      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
	      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
	        this.focusInput();
	      } // scroll the focused option into view if necessary


	      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
	        scrollIntoView(this.menuListRef, this.focusedOptionRef);
	      }

	      this.scrollToFocusedOptionOnUpdate = false;
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.stopListeningComposition();
	      this.stopListeningToTouch();
	      document.removeEventListener('scroll', this.onScroll, true);
	    }
	  }, {
	    key: "onMenuOpen",
	    // ==============================
	    // Consumer Handlers
	    // ==============================
	    value: function onMenuOpen() {
	      this.props.onMenuOpen();
	    }
	  }, {
	    key: "onMenuClose",
	    value: function onMenuClose() {
	      var _this$props10 = this.props,
	          isSearchable = _this$props10.isSearchable,
	          isMulti = _this$props10.isMulti;
	      this.announceAriaLiveContext({
	        event: 'input',
	        context: {
	          isSearchable: isSearchable,
	          isMulti: isMulti
	        }
	      });
	      this.onInputChange('', {
	        action: 'menu-close'
	      });
	      this.props.onMenuClose();
	    }
	  }, {
	    key: "onInputChange",
	    value: function onInputChange(newValue, actionMeta) {
	      this.props.onInputChange(newValue, actionMeta);
	    } // ==============================
	    // Methods
	    // ==============================

	  }, {
	    key: "focusInput",
	    value: function focusInput() {
	      if (!this.inputRef) return;
	      this.inputRef.focus();
	    }
	  }, {
	    key: "blurInput",
	    value: function blurInput() {
	      if (!this.inputRef) return;
	      this.inputRef.blur();
	    } // aliased for consumers

	  }, {
	    key: "openMenu",
	    value: function openMenu(focusOption) {
	      var _this$state3 = this.state,
	          menuOptions = _this$state3.menuOptions,
	          selectValue = _this$state3.selectValue,
	          isFocused = _this$state3.isFocused;
	      var isMulti = this.props.isMulti;
	      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

	      if (!isMulti) {
	        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

	        if (selectedIndex > -1) {
	          openAtIndex = selectedIndex;
	        }
	      } // only scroll if the menu isn't already open


	      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
	      this.inputIsHiddenAfterUpdate = false;
	      this.onMenuOpen();
	      this.setState({
	        focusedValue: null,
	        focusedOption: menuOptions.focusable[openAtIndex]
	      });
	      this.announceAriaLiveContext({
	        event: 'menu'
	      });
	    }
	  }, {
	    key: "focusValue",
	    value: function focusValue(direction) {
	      var _this$props11 = this.props,
	          isMulti = _this$props11.isMulti,
	          isSearchable = _this$props11.isSearchable;
	      var _this$state4 = this.state,
	          selectValue = _this$state4.selectValue,
	          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

	      if (!isMulti) return;
	      this.setState({
	        focusedOption: null
	      });
	      var focusedIndex = selectValue.indexOf(focusedValue);

	      if (!focusedValue) {
	        focusedIndex = -1;
	        this.announceAriaLiveContext({
	          event: 'value'
	        });
	      }

	      var lastIndex = selectValue.length - 1;
	      var nextFocus = -1;
	      if (!selectValue.length) return;

	      switch (direction) {
	        case 'previous':
	          if (focusedIndex === 0) {
	            // don't cycle from the start to the end
	            nextFocus = 0;
	          } else if (focusedIndex === -1) {
	            // if nothing is focused, focus the last value first
	            nextFocus = lastIndex;
	          } else {
	            nextFocus = focusedIndex - 1;
	          }

	          break;

	        case 'next':
	          if (focusedIndex > -1 && focusedIndex < lastIndex) {
	            nextFocus = focusedIndex + 1;
	          }

	          break;
	      }

	      if (nextFocus === -1) {
	        this.announceAriaLiveContext({
	          event: 'input',
	          context: {
	            isSearchable: isSearchable,
	            isMulti: isMulti
	          }
	        });
	      }

	      this.setState({
	        inputIsHidden: nextFocus === -1 ? false : true,
	        focusedValue: selectValue[nextFocus]
	      });
	    }
	  }, {
	    key: "focusOption",
	    value: function focusOption() {
	      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
	      var pageSize = this.props.pageSize;
	      var _this$state5 = this.state,
	          focusedOption = _this$state5.focusedOption,
	          menuOptions = _this$state5.menuOptions;
	      var options = menuOptions.focusable;
	      if (!options.length) return;
	      var nextFocus = 0; // handles 'first'

	      var focusedIndex = options.indexOf(focusedOption);

	      if (!focusedOption) {
	        focusedIndex = -1;
	        this.announceAriaLiveContext({
	          event: 'menu'
	        });
	      }

	      if (direction === 'up') {
	        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
	      } else if (direction === 'down') {
	        nextFocus = (focusedIndex + 1) % options.length;
	      } else if (direction === 'pageup') {
	        nextFocus = focusedIndex - pageSize;
	        if (nextFocus < 0) nextFocus = 0;
	      } else if (direction === 'pagedown') {
	        nextFocus = focusedIndex + pageSize;
	        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
	      } else if (direction === 'last') {
	        nextFocus = options.length - 1;
	      }

	      this.scrollToFocusedOptionOnUpdate = true;
	      this.setState({
	        focusedOption: options[nextFocus],
	        focusedValue: null
	      });
	      this.announceAriaLiveContext({
	        event: 'menu',
	        context: {
	          isDisabled: isOptionDisabled(options[nextFocus])
	        }
	      });
	    }
	  }, {
	    key: "getTheme",
	    // ==============================
	    // Getters
	    // ==============================
	    value: function getTheme() {
	      // Use the default theme if there are no customizations.
	      if (!this.props.theme) {
	        return defaultTheme;
	      } // If the theme prop is a function, assume the function
	      // knows how to merge the passed-in default theme with
	      // its own modifications.


	      if (typeof this.props.theme === 'function') {
	        return this.props.theme(defaultTheme);
	      } // Otherwise, if a plain theme object was passed in,
	      // overlay it with the default theme.


	      return _objectSpread({}, defaultTheme, this.props.theme);
	    }
	  }, {
	    key: "getCommonProps",
	    value: function getCommonProps() {
	      var clearValue = this.clearValue,
	          getStyles = this.getStyles,
	          setValue = this.setValue,
	          selectOption = this.selectOption,
	          props = this.props;
	      var classNamePrefix = props.classNamePrefix,
	          isMulti = props.isMulti,
	          isRtl = props.isRtl,
	          options = props.options;
	      var selectValue = this.state.selectValue;
	      var hasValue = this.hasValue();

	      var getValue = function getValue() {
	        return selectValue;
	      };

	      var cx = classNames.bind(null, classNamePrefix);
	      return {
	        cx: cx,
	        clearValue: clearValue,
	        getStyles: getStyles,
	        getValue: getValue,
	        hasValue: hasValue,
	        isMulti: isMulti,
	        isRtl: isRtl,
	        options: options,
	        selectOption: selectOption,
	        setValue: setValue,
	        selectProps: props,
	        theme: this.getTheme()
	      };
	    }
	  }, {
	    key: "getNextFocusedValue",
	    value: function getNextFocusedValue(nextSelectValue) {
	      if (this.clearFocusValueOnUpdate) {
	        this.clearFocusValueOnUpdate = false;
	        return null;
	      }

	      var _this$state6 = this.state,
	          focusedValue = _this$state6.focusedValue,
	          lastSelectValue = _this$state6.selectValue;
	      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

	      if (lastFocusedIndex > -1) {
	        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

	        if (nextFocusedIndex > -1) {
	          // the focused value is still in the selectValue, return it
	          return focusedValue;
	        } else if (lastFocusedIndex < nextSelectValue.length) {
	          // the focusedValue is not present in the next selectValue array by
	          // reference, so return the new value at the same index
	          return nextSelectValue[lastFocusedIndex];
	        }
	      }

	      return null;
	    }
	  }, {
	    key: "getNextFocusedOption",
	    value: function getNextFocusedOption(options) {
	      var lastFocusedOption = this.state.focusedOption;
	      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
	    }
	  }, {
	    key: "hasValue",
	    value: function hasValue() {
	      var selectValue = this.state.selectValue;
	      return selectValue.length > 0;
	    }
	  }, {
	    key: "hasOptions",
	    value: function hasOptions() {
	      return !!this.state.menuOptions.render.length;
	    }
	  }, {
	    key: "countOptions",
	    value: function countOptions() {
	      return this.state.menuOptions.focusable.length;
	    }
	  }, {
	    key: "isClearable",
	    value: function isClearable() {
	      var _this$props12 = this.props,
	          isClearable = _this$props12.isClearable,
	          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
	      // multi select, by default, IS clearable

	      if (isClearable === undefined) return isMulti;
	      return isClearable;
	    }
	  }, {
	    key: "isOptionDisabled",
	    value: function isOptionDisabled$$1(option, selectValue) {
	      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
	    }
	  }, {
	    key: "isOptionSelected",
	    value: function isOptionSelected(option, selectValue) {
	      var _this2 = this;

	      if (selectValue.indexOf(option) > -1) return true;

	      if (typeof this.props.isOptionSelected === 'function') {
	        return this.props.isOptionSelected(option, selectValue);
	      }

	      var candidate = this.getOptionValue(option);
	      return selectValue.some(function (i) {
	        return _this2.getOptionValue(i) === candidate;
	      });
	    }
	  }, {
	    key: "filterOption",
	    value: function filterOption(option, inputValue) {
	      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
	    }
	  }, {
	    key: "formatOptionLabel",
	    value: function formatOptionLabel(data, context) {
	      if (typeof this.props.formatOptionLabel === 'function') {
	        var inputValue = this.props.inputValue;
	        var selectValue = this.state.selectValue;
	        return this.props.formatOptionLabel(data, {
	          context: context,
	          inputValue: inputValue,
	          selectValue: selectValue
	        });
	      } else {
	        return this.getOptionLabel(data);
	      }
	    }
	  }, {
	    key: "formatGroupLabel",
	    value: function formatGroupLabel$$1(data) {
	      return this.props.formatGroupLabel(data);
	    } // ==============================
	    // Mouse Handlers
	    // ==============================

	  }, {
	    key: "startListeningComposition",
	    // ==============================
	    // Composition Handlers
	    // ==============================
	    value: function startListeningComposition() {
	      if (document && document.addEventListener) {
	        document.addEventListener('compositionstart', this.onCompositionStart, false);
	        document.addEventListener('compositionend', this.onCompositionEnd, false);
	      }
	    }
	  }, {
	    key: "stopListeningComposition",
	    value: function stopListeningComposition() {
	      if (document && document.removeEventListener) {
	        document.removeEventListener('compositionstart', this.onCompositionStart);
	        document.removeEventListener('compositionend', this.onCompositionEnd);
	      }
	    }
	  }, {
	    key: "startListeningToTouch",
	    // ==============================
	    // Touch Handlers
	    // ==============================
	    value: function startListeningToTouch() {
	      if (document && document.addEventListener) {
	        document.addEventListener('touchstart', this.onTouchStart, false);
	        document.addEventListener('touchmove', this.onTouchMove, false);
	        document.addEventListener('touchend', this.onTouchEnd, false);
	      }
	    }
	  }, {
	    key: "stopListeningToTouch",
	    value: function stopListeningToTouch() {
	      if (document && document.removeEventListener) {
	        document.removeEventListener('touchstart', this.onTouchStart);
	        document.removeEventListener('touchmove', this.onTouchMove);
	        document.removeEventListener('touchend', this.onTouchEnd);
	      }
	    }
	  }, {
	    key: "buildMenuOptions",
	    // ==============================
	    // Menu Options
	    // ==============================
	    value: function buildMenuOptions(props, selectValue) {
	      var _this3 = this;

	      var _props$inputValue = props.inputValue,
	          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
	          options = props.options;

	      var toOption = function toOption(option, id) {
	        var isDisabled = _this3.isOptionDisabled(option, selectValue);

	        var isSelected = _this3.isOptionSelected(option, selectValue);

	        var label = _this3.getOptionLabel(option);

	        var value = _this3.getOptionValue(option);

	        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({
	          label: label,
	          value: value,
	          data: option
	        }, inputValue)) {
	          return;
	        }

	        var onHover = isDisabled ? undefined : function () {
	          return _this3.onOptionHover(option);
	        };
	        var onSelect = isDisabled ? undefined : function () {
	          return _this3.selectOption(option);
	        };
	        var optionId = "".concat(_this3.getElementId('option'), "-").concat(id);
	        return {
	          innerProps: {
	            id: optionId,
	            onClick: onSelect,
	            onMouseMove: onHover,
	            onMouseOver: onHover,
	            tabIndex: -1
	          },
	          data: option,
	          isDisabled: isDisabled,
	          isSelected: isSelected,
	          key: optionId,
	          label: label,
	          type: 'option',
	          value: value
	        };
	      };

	      return options.reduce(function (acc, item, itemIndex) {
	        if (item.options) {
	          // TODO needs a tidier implementation
	          if (!_this3.hasGroups) _this3.hasGroups = true;
	          var items = item.options;
	          var children = items.map(function (child, i) {
	            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
	            if (option) acc.focusable.push(child);
	            return option;
	          }).filter(Boolean);

	          if (children.length) {
	            var groupId = "".concat(_this3.getElementId('group'), "-").concat(itemIndex);
	            acc.render.push({
	              type: 'group',
	              key: groupId,
	              data: item,
	              options: children
	            });
	          }
	        } else {
	          var option = toOption(item, "".concat(itemIndex));

	          if (option) {
	            acc.render.push(option);
	            acc.focusable.push(item);
	          }
	        }

	        return acc;
	      }, {
	        render: [],
	        focusable: []
	      });
	    } // ==============================
	    // Renderers
	    // ==============================

	  }, {
	    key: "constructAriaLiveMessage",
	    value: function constructAriaLiveMessage() {
	      var _this$state7 = this.state,
	          ariaLiveContext = _this$state7.ariaLiveContext,
	          selectValue = _this$state7.selectValue,
	          focusedValue = _this$state7.focusedValue,
	          focusedOption = _this$state7.focusedOption;
	      var _this$props13 = this.props,
	          options = _this$props13.options,
	          menuIsOpen = _this$props13.menuIsOpen,
	          inputValue = _this$props13.inputValue,
	          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

	      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
	        focusedValue: focusedValue,
	        getOptionLabel: this.getOptionLabel,
	        selectValue: selectValue
	      }) : ''; // An aria live message representing the currently focused option in the select.

	      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
	        focusedOption: focusedOption,
	        getOptionLabel: this.getOptionLabel,
	        options: options
	      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

	      var resultsMsg = resultsAriaMessage({
	        inputValue: inputValue,
	        screenReaderMessage: screenReaderStatus({
	          count: this.countOptions()
	        })
	      });
	      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
	    }
	  }, {
	    key: "renderInput",
	    value: function renderInput() {
	      var _this$props14 = this.props,
	          isDisabled = _this$props14.isDisabled,
	          isSearchable = _this$props14.isSearchable,
	          inputId = _this$props14.inputId,
	          inputValue = _this$props14.inputValue,
	          tabIndex = _this$props14.tabIndex;
	      var Input = this.components.Input;
	      var inputIsHidden = this.state.inputIsHidden;
	      var id = inputId || this.getElementId('input');

	      if (!isSearchable) {
	        // use a dummy input to maintain focus/blur functionality
	        return React__default.createElement(DummyInput, {
	          id: id,
	          innerRef: this.getInputRef,
	          onBlur: this.onInputBlur,
	          onChange: noop,
	          onFocus: this.onInputFocus,
	          readOnly: true,
	          disabled: isDisabled,
	          tabIndex: tabIndex,
	          value: ""
	        });
	      } // aria attributes makes the JSX "noisy", separated for clarity


	      var ariaAttributes = {
	        'aria-autocomplete': 'list',
	        'aria-label': this.props['aria-label'],
	        'aria-labelledby': this.props['aria-labelledby']
	      };
	      var _this$commonProps = this.commonProps,
	          cx = _this$commonProps.cx,
	          theme = _this$commonProps.theme,
	          selectProps = _this$commonProps.selectProps;
	      return React__default.createElement(Input, _extends({
	        autoCapitalize: "none",
	        autoComplete: "off",
	        autoCorrect: "off",
	        cx: cx,
	        getStyles: this.getStyles,
	        id: id,
	        innerRef: this.getInputRef,
	        isDisabled: isDisabled,
	        isHidden: inputIsHidden,
	        onBlur: this.onInputBlur,
	        onChange: this.handleInputChange,
	        onFocus: this.onInputFocus,
	        selectProps: selectProps,
	        spellCheck: "false",
	        tabIndex: tabIndex,
	        theme: theme,
	        type: "text",
	        value: inputValue
	      }, ariaAttributes));
	    }
	  }, {
	    key: "renderPlaceholderOrValue",
	    value: function renderPlaceholderOrValue() {
	      var _this4 = this;

	      var _this$components = this.components,
	          MultiValue = _this$components.MultiValue,
	          MultiValueContainer = _this$components.MultiValueContainer,
	          MultiValueLabel = _this$components.MultiValueLabel,
	          MultiValueRemove = _this$components.MultiValueRemove,
	          SingleValue = _this$components.SingleValue,
	          Placeholder = _this$components.Placeholder;
	      var commonProps = this.commonProps;
	      var _this$props15 = this.props,
	          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
	          isDisabled = _this$props15.isDisabled,
	          isMulti = _this$props15.isMulti,
	          inputValue = _this$props15.inputValue,
	          placeholder = _this$props15.placeholder;
	      var _this$state8 = this.state,
	          selectValue = _this$state8.selectValue,
	          focusedValue = _this$state8.focusedValue,
	          isFocused = _this$state8.isFocused;

	      if (!this.hasValue() || !controlShouldRenderValue) {
	        return inputValue ? null : React__default.createElement(Placeholder, _extends({}, commonProps, {
	          key: "placeholder",
	          isDisabled: isDisabled,
	          isFocused: isFocused
	        }), placeholder);
	      }

	      if (isMulti) {
	        var selectValues = selectValue.map(function (opt) {
	          var isOptionFocused = opt === focusedValue;
	          return React__default.createElement(MultiValue, _extends({}, commonProps, {
	            components: {
	              Container: MultiValueContainer,
	              Label: MultiValueLabel,
	              Remove: MultiValueRemove
	            },
	            isFocused: isOptionFocused,
	            isDisabled: isDisabled,
	            key: _this4.getOptionValue(opt),
	            removeProps: {
	              onClick: function onClick() {
	                return _this4.removeValue(opt);
	              },
	              onTouchEnd: function onTouchEnd() {
	                return _this4.removeValue(opt);
	              },
	              onMouseDown: function onMouseDown(e) {
	                e.preventDefault();
	                e.stopPropagation();
	              }
	            },
	            data: opt
	          }), _this4.formatOptionLabel(opt, 'value'));
	        });
	        return selectValues;
	      }

	      if (inputValue) {
	        return null;
	      }

	      var singleValue = selectValue[0];
	      return React__default.createElement(SingleValue, _extends({}, commonProps, {
	        data: singleValue,
	        isDisabled: isDisabled
	      }), this.formatOptionLabel(singleValue, 'value'));
	    }
	  }, {
	    key: "renderClearIndicator",
	    value: function renderClearIndicator() {
	      var ClearIndicator = this.components.ClearIndicator;
	      var commonProps = this.commonProps;
	      var _this$props16 = this.props,
	          isDisabled = _this$props16.isDisabled,
	          isLoading = _this$props16.isLoading;
	      var isFocused = this.state.isFocused;

	      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
	        return null;
	      }

	      var innerProps = {
	        onMouseDown: this.onClearIndicatorMouseDown,
	        onTouchEnd: this.onClearIndicatorTouchEnd,
	        'aria-hidden': 'true'
	      };
	      return React__default.createElement(ClearIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderLoadingIndicator",
	    value: function renderLoadingIndicator() {
	      var LoadingIndicator = this.components.LoadingIndicator;
	      var commonProps = this.commonProps;
	      var _this$props17 = this.props,
	          isDisabled = _this$props17.isDisabled,
	          isLoading = _this$props17.isLoading;
	      var isFocused = this.state.isFocused;
	      if (!LoadingIndicator || !isLoading) return null;
	      var innerProps = {
	        'aria-hidden': 'true'
	      };
	      return React__default.createElement(LoadingIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderIndicatorSeparator",
	    value: function renderIndicatorSeparator() {
	      var _this$components2 = this.components,
	          DropdownIndicator = _this$components2.DropdownIndicator,
	          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

	      if (!DropdownIndicator || !IndicatorSeparator) return null;
	      var commonProps = this.commonProps;
	      var isDisabled = this.props.isDisabled;
	      var isFocused = this.state.isFocused;
	      return React__default.createElement(IndicatorSeparator, _extends({}, commonProps, {
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderDropdownIndicator",
	    value: function renderDropdownIndicator() {
	      var DropdownIndicator = this.components.DropdownIndicator;
	      if (!DropdownIndicator) return null;
	      var commonProps = this.commonProps;
	      var isDisabled = this.props.isDisabled;
	      var isFocused = this.state.isFocused;
	      var innerProps = {
	        onMouseDown: this.onDropdownIndicatorMouseDown,
	        onTouchEnd: this.onDropdownIndicatorTouchEnd,
	        'aria-hidden': 'true'
	      };
	      return React__default.createElement(DropdownIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderMenu",
	    value: function renderMenu() {
	      var _this5 = this;

	      var _this$components3 = this.components,
	          Group = _this$components3.Group,
	          GroupHeading = _this$components3.GroupHeading,
	          Menu$$1 = _this$components3.Menu,
	          MenuList$$1 = _this$components3.MenuList,
	          MenuPortal$$1 = _this$components3.MenuPortal,
	          LoadingMessage$$1 = _this$components3.LoadingMessage,
	          NoOptionsMessage$$1 = _this$components3.NoOptionsMessage,
	          Option = _this$components3.Option;
	      var commonProps = this.commonProps;
	      var _this$state9 = this.state,
	          focusedOption = _this$state9.focusedOption,
	          menuOptions = _this$state9.menuOptions;
	      var _this$props18 = this.props,
	          captureMenuScroll = _this$props18.captureMenuScroll,
	          inputValue = _this$props18.inputValue,
	          isLoading = _this$props18.isLoading,
	          loadingMessage = _this$props18.loadingMessage,
	          minMenuHeight = _this$props18.minMenuHeight,
	          maxMenuHeight = _this$props18.maxMenuHeight,
	          menuIsOpen = _this$props18.menuIsOpen,
	          menuPlacement = _this$props18.menuPlacement,
	          menuPosition = _this$props18.menuPosition,
	          menuPortalTarget = _this$props18.menuPortalTarget,
	          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
	          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
	          noOptionsMessage = _this$props18.noOptionsMessage,
	          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
	          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
	      if (!menuIsOpen) return null; // TODO: Internal Option Type here

	      var render = function render(props) {
	        // for performance, the menu options in state aren't changed when the
	        // focused option changes so we calculate additional props based on that
	        var isFocused = focusedOption === props.data;
	        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
	        return React__default.createElement(Option, _extends({}, commonProps, props, {
	          isFocused: isFocused
	        }), _this5.formatOptionLabel(props.data, 'menu'));
	      };

	      var menuUI;

	      if (this.hasOptions()) {
	        menuUI = menuOptions.render.map(function (item) {
	          if (item.type === 'group') {
	            var type = item.type,
	                group = _objectWithoutProperties(item, ["type"]);

	            var headingId = "".concat(item.key, "-heading");
	            return React__default.createElement(Group, _extends({}, commonProps, group, {
	              Heading: GroupHeading,
	              headingProps: {
	                id: headingId
	              },
	              label: _this5.formatGroupLabel(item.data)
	            }), item.options.map(function (option) {
	              return render(option);
	            }));
	          } else if (item.type === 'option') {
	            return render(item);
	          }
	        });
	      } else if (isLoading) {
	        var message = loadingMessage({
	          inputValue: inputValue
	        });
	        if (message === null) return null;
	        menuUI = React__default.createElement(LoadingMessage$$1, commonProps, message);
	      } else {
	        var _message = noOptionsMessage({
	          inputValue: inputValue
	        });

	        if (_message === null) return null;
	        menuUI = React__default.createElement(NoOptionsMessage$$1, commonProps, _message);
	      }

	      var menuPlacementProps = {
	        minMenuHeight: minMenuHeight,
	        maxMenuHeight: maxMenuHeight,
	        menuPlacement: menuPlacement,
	        menuPosition: menuPosition,
	        menuShouldScrollIntoView: menuShouldScrollIntoView
	      };
	      var menuElement = React__default.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref6) {
	        var ref = _ref6.ref,
	            _ref6$placerProps = _ref6.placerProps,
	            placement = _ref6$placerProps.placement,
	            maxHeight = _ref6$placerProps.maxHeight;
	        return React__default.createElement(Menu$$1, _extends({}, commonProps, menuPlacementProps, {
	          innerRef: ref,
	          innerProps: {
	            onMouseDown: _this5.onMenuMouseDown,
	            onMouseMove: _this5.onMenuMouseMove
	          },
	          isLoading: isLoading,
	          placement: placement
	        }), React__default.createElement(ScrollCaptorSwitch, {
	          isEnabled: captureMenuScroll,
	          onTopArrive: onMenuScrollToTop,
	          onBottomArrive: onMenuScrollToBottom
	        }, React__default.createElement(ScrollBlock, {
	          isEnabled: menuShouldBlockScroll
	        }, React__default.createElement(MenuList$$1, _extends({}, commonProps, {
	          innerRef: _this5.getMenuListRef,
	          isLoading: isLoading,
	          maxHeight: maxHeight
	        }), menuUI))));
	      }); // positioning behaviour is almost identical for portalled and fixed,
	      // so we use the same component. the actual portalling logic is forked
	      // within the component based on `menuPosition`

	      return menuPortalTarget || menuPosition === 'fixed' ? React__default.createElement(MenuPortal$$1, _extends({}, commonProps, {
	        appendTo: menuPortalTarget,
	        controlElement: this.controlRef,
	        menuPlacement: menuPlacement,
	        menuPosition: menuPosition
	      }), menuElement) : menuElement;
	    }
	  }, {
	    key: "renderFormField",
	    value: function renderFormField() {
	      var _this6 = this;

	      var _this$props19 = this.props,
	          delimiter = _this$props19.delimiter,
	          isDisabled = _this$props19.isDisabled,
	          isMulti = _this$props19.isMulti,
	          name = _this$props19.name;
	      var selectValue = this.state.selectValue;
	      if (!name || isDisabled) return;

	      if (isMulti) {
	        if (delimiter) {
	          var value = selectValue.map(function (opt) {
	            return _this6.getOptionValue(opt);
	          }).join(delimiter);
	          return React__default.createElement("input", {
	            name: name,
	            type: "hidden",
	            value: value
	          });
	        } else {
	          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
	            return React__default.createElement("input", {
	              key: "i-".concat(i),
	              name: name,
	              type: "hidden",
	              value: _this6.getOptionValue(opt)
	            });
	          }) : React__default.createElement("input", {
	            name: name,
	            type: "hidden"
	          });
	          return React__default.createElement("div", null, input);
	        }
	      } else {
	        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

	        return React__default.createElement("input", {
	          name: name,
	          type: "hidden",
	          value: _value
	        });
	      }
	    }
	  }, {
	    key: "renderLiveRegion",
	    value: function renderLiveRegion() {
	      if (!this.state.isFocused) return null;
	      return React__default.createElement(A11yText, {
	        "aria-live": "assertive"
	      }, React__default.createElement("p", {
	        id: "aria-selection-event"
	      }, "\xA0", this.state.ariaLiveSelection), React__default.createElement("p", {
	        id: "aria-context"
	      }, "\xA0", this.constructAriaLiveMessage()));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$components4 = this.components,
	          Control = _this$components4.Control,
	          IndicatorsContainer = _this$components4.IndicatorsContainer,
	          SelectContainer = _this$components4.SelectContainer,
	          ValueContainer = _this$components4.ValueContainer;
	      var _this$props20 = this.props,
	          className = _this$props20.className,
	          id = _this$props20.id,
	          isDisabled = _this$props20.isDisabled,
	          menuIsOpen = _this$props20.menuIsOpen;
	      var isFocused = this.state.isFocused;
	      var commonProps = this.commonProps = this.getCommonProps();
	      return React__default.createElement(SelectContainer, _extends({}, commonProps, {
	        className: className,
	        innerProps: {
	          id: id,
	          onKeyDown: this.onKeyDown
	        },
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }), this.renderLiveRegion(), React__default.createElement(Control, _extends({}, commonProps, {
	        innerRef: this.getControlRef,
	        innerProps: {
	          onMouseDown: this.onControlMouseDown,
	          onTouchEnd: this.onControlTouchEnd
	        },
	        isDisabled: isDisabled,
	        isFocused: isFocused,
	        menuIsOpen: menuIsOpen
	      }), React__default.createElement(ValueContainer, _extends({}, commonProps, {
	        isDisabled: isDisabled
	      }), this.renderPlaceholderOrValue(), this.renderInput()), React__default.createElement(IndicatorsContainer, _extends({}, commonProps, {
	        isDisabled: isDisabled
	      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
	    }
	  }]);

	  return Select;
	}(React.Component);

	_defineProperty(Select, "defaultProps", defaultProps);

	var defaultProps$1 = {
	  defaultInputValue: '',
	  defaultMenuIsOpen: false,
	  defaultValue: null
	};

	var manageState = function manageState(SelectComponent) {
	  var _class, _temp;

	  return _temp = _class =
	  /*#__PURE__*/
	  function (_Component) {
	    _inherits(StateManager, _Component);

	    function StateManager() {
	      var _getPrototypeOf2;

	      var _this;

	      _classCallCheck(this, StateManager);

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(StateManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "select", void 0);

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
	        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
	        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
	        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
	      });

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onChange", function (value, actionMeta) {
	        _this.callProp('onChange', value, actionMeta);

	        _this.setState({
	          value: value
	        });
	      });

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onInputChange", function (value, actionMeta) {
	        // TODO: for backwards compatibility, we allow the prop to return a new
	        // value, but now inputValue is a controllable prop we probably shouldn't
	        var newValue = _this.callProp('onInputChange', value, actionMeta);

	        _this.setState({
	          inputValue: newValue !== undefined ? newValue : value
	        });
	      });

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onMenuOpen", function () {
	        _this.callProp('onMenuOpen');

	        _this.setState({
	          menuIsOpen: true
	        });
	      });

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onMenuClose", function () {
	        _this.callProp('onMenuClose');

	        _this.setState({
	          menuIsOpen: false
	        });
	      });

	      return _this;
	    }

	    _createClass(StateManager, [{
	      key: "focus",
	      value: function focus() {
	        this.select.focus();
	      }
	    }, {
	      key: "blur",
	      value: function blur() {
	        this.select.blur();
	      } // FIXME: untyped flow code, return any

	    }, {
	      key: "getProp",
	      value: function getProp(key) {
	        return this.props[key] !== undefined ? this.props[key] : this.state[key];
	      } // FIXME: untyped flow code, return any

	    }, {
	      key: "callProp",
	      value: function callProp(name) {
	        if (typeof this.props[name] === 'function') {
	          var _this$props;

	          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	          }

	          return (_this$props = this.props)[name].apply(_this$props, args);
	        }
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var _this2 = this;

	        var _this$props2 = this.props,
	            defaultInputValue = _this$props2.defaultInputValue,
	            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
	            defaultValue = _this$props2.defaultValue,
	            props = _objectWithoutProperties(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

	        return React__default.createElement(SelectComponent, _extends({}, props, {
	          ref: function ref(_ref) {
	            _this2.select = _ref;
	          },
	          inputValue: this.getProp('inputValue'),
	          menuIsOpen: this.getProp('menuIsOpen'),
	          onChange: this.onChange,
	          onInputChange: this.onInputChange,
	          onMenuClose: this.onMenuClose,
	          onMenuOpen: this.onMenuOpen,
	          value: this.getProp('value')
	        }));
	      }
	    }]);

	    return StateManager;
	  }(React.Component), _defineProperty(_class, "defaultProps", defaultProps$1), _temp;
	};

	var defaultProps$2 = {
	  cacheOptions: false,
	  defaultOptions: false,
	  filterOption: null
	};
	var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
	  var _class, _temp;

	  return _temp = _class =
	  /*#__PURE__*/
	  function (_Component) {
	    _inherits(Async, _Component);

	    function Async(props) {
	      var _this;

	      _classCallCheck(this, Async);

	      _this = _possibleConstructorReturn(this, _getPrototypeOf$1(Async).call(this));

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "select", void 0);

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "lastRequest", void 0);

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "mounted", false);

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "optionsCache", {});

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "handleInputChange", function (newValue, actionMeta) {
	        var _this$props = _this.props,
	            cacheOptions = _this$props.cacheOptions,
	            onInputChange = _this$props.onInputChange; // TODO

	        var inputValue = handleInputChange(newValue, actionMeta, onInputChange);

	        if (!inputValue) {
	          delete _this.lastRequest;

	          _this.setState({
	            inputValue: '',
	            loadedInputValue: '',
	            loadedOptions: [],
	            isLoading: false,
	            passEmptyOptions: false
	          });

	          return;
	        }

	        if (cacheOptions && _this.optionsCache[inputValue]) {
	          _this.setState({
	            inputValue: inputValue,
	            loadedInputValue: inputValue,
	            loadedOptions: _this.optionsCache[inputValue],
	            isLoading: false,
	            passEmptyOptions: false
	          });
	        } else {
	          var request = _this.lastRequest = {};

	          _this.setState({
	            inputValue: inputValue,
	            isLoading: true,
	            passEmptyOptions: !_this.state.loadedInputValue
	          }, function () {
	            _this.loadOptions(inputValue, function (options) {
	              if (!_this.mounted) return;

	              if (options) {
	                _this.optionsCache[inputValue] = options;
	              }

	              if (request !== _this.lastRequest) return;
	              delete _this.lastRequest;

	              _this.setState({
	                isLoading: false,
	                loadedInputValue: inputValue,
	                loadedOptions: options || [],
	                passEmptyOptions: false
	              });
	            });
	          });
	        }

	        return inputValue;
	      });

	      _this.state = {
	        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
	        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
	        isLoading: props.defaultOptions === true ? true : false,
	        loadedOptions: [],
	        passEmptyOptions: false
	      };
	      return _this;
	    }

	    _createClass(Async, [{
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        var _this2 = this;

	        this.mounted = true;
	        var defaultOptions = this.props.defaultOptions;
	        var inputValue = this.state.inputValue;

	        if (defaultOptions === true) {
	          this.loadOptions(inputValue, function (options) {
	            if (!_this2.mounted) return;
	            var isLoading = !!_this2.lastRequest;

	            _this2.setState({
	              defaultOptions: options || [],
	              isLoading: isLoading
	            });
	          });
	        }
	      }
	    }, {
	      key: "componentWillReceiveProps",
	      value: function componentWillReceiveProps(nextProps) {
	        // if the cacheOptions prop changes, clear the cache
	        if (nextProps.cacheOptions !== this.props.cacheOptions) {
	          this.optionsCache = {};
	        }

	        if (nextProps.defaultOptions !== this.props.defaultOptions) {
	          this.setState({
	            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
	          });
	        }
	      }
	    }, {
	      key: "componentWillUnmount",
	      value: function componentWillUnmount() {
	        this.mounted = false;
	      }
	    }, {
	      key: "focus",
	      value: function focus() {
	        this.select.focus();
	      }
	    }, {
	      key: "blur",
	      value: function blur() {
	        this.select.blur();
	      }
	    }, {
	      key: "loadOptions",
	      value: function loadOptions(inputValue, callback) {
	        var loadOptions = this.props.loadOptions;
	        if (!loadOptions) return callback();
	        var loader = loadOptions(inputValue, callback);

	        if (loader && typeof loader.then === 'function') {
	          loader.then(callback, function () {
	            return callback();
	          });
	        }
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var _this3 = this;

	        var _this$props2 = this.props,
	            loadOptions = _this$props2.loadOptions,
	            props = _objectWithoutProperties(_this$props2, ["loadOptions"]);

	        var _this$state = this.state,
	            defaultOptions = _this$state.defaultOptions,
	            inputValue = _this$state.inputValue,
	            isLoading = _this$state.isLoading,
	            loadedInputValue = _this$state.loadedInputValue,
	            loadedOptions = _this$state.loadedOptions,
	            passEmptyOptions = _this$state.passEmptyOptions;
	        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
	        return React__default.createElement(SelectComponent, _extends({}, props, {
	          ref: function ref(_ref) {
	            _this3.select = _ref;
	          },
	          options: options,
	          isLoading: isLoading,
	          onInputChange: this.handleInputChange
	        }));
	      }
	    }]);

	    return Async;
	  }(React.Component), _defineProperty(_class, "defaultProps", defaultProps$2), _temp;
	};
	var SelectState = manageState(Select);
	var Async = makeAsyncSelect(SelectState);

	var compareOption = function compareOption() {
	  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var option = arguments.length > 1 ? arguments[1] : undefined;
	  var candidate = String(inputValue).toLowerCase();
	  var optionValue = String(option.value).toLowerCase();
	  var optionLabel = String(option.label).toLowerCase();
	  return optionValue === candidate || optionLabel === candidate;
	};

	var builtins = {
	  formatCreateLabel: function formatCreateLabel(inputValue) {
	    return "Create \"".concat(inputValue, "\"");
	  },
	  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
	    return !(!inputValue || selectValue.some(function (option) {
	      return compareOption(inputValue, option);
	    }) || selectOptions.some(function (option) {
	      return compareOption(inputValue, option);
	    }));
	  },
	  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
	    return {
	      label: optionLabel,
	      value: inputValue,
	      __isNew__: true
	    };
	  }
	};
	var defaultProps$3 = _objectSpread({
	  allowCreateWhileLoading: false,
	  createOptionPosition: 'last'
	}, builtins);
	var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
	  var _class, _temp;

	  return _temp = _class =
	  /*#__PURE__*/
	  function (_Component) {
	    _inherits(Creatable, _Component);

	    function Creatable(props) {
	      var _this;

	      _classCallCheck(this, Creatable);

	      _this = _possibleConstructorReturn(this, _getPrototypeOf$1(Creatable).call(this, props));

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "select", void 0);

	      _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onChange", function (newValue, actionMeta) {
	        var _this$props = _this.props,
	            getNewOptionData = _this$props.getNewOptionData,
	            inputValue = _this$props.inputValue,
	            isMulti = _this$props.isMulti,
	            onChange = _this$props.onChange,
	            onCreateOption = _this$props.onCreateOption,
	            value = _this$props.value;

	        if (actionMeta.action !== 'select-option') {
	          return onChange(newValue, actionMeta);
	        }

	        var newOption = _this.state.newOption;
	        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

	        if (valueArray[valueArray.length - 1] === newOption) {
	          if (onCreateOption) onCreateOption(inputValue);else {
	            var newOptionData = getNewOptionData(inputValue, inputValue);
	            var newActionMeta = {
	              action: 'create-option'
	            };

	            if (isMulti) {
	              onChange([].concat(_toConsumableArray(cleanValue(value)), [newOptionData]), newActionMeta);
	            } else {
	              onChange(newOptionData, newActionMeta);
	            }
	          }
	          return;
	        }

	        onChange(newValue, actionMeta);
	      });

	      var options = props.options || [];
	      _this.state = {
	        newOption: undefined,
	        options: options
	      };
	      return _this;
	    }

	    _createClass(Creatable, [{
	      key: "componentWillReceiveProps",
	      value: function componentWillReceiveProps(nextProps) {
	        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
	            createOptionPosition = nextProps.createOptionPosition,
	            formatCreateLabel = nextProps.formatCreateLabel,
	            getNewOptionData = nextProps.getNewOptionData,
	            inputValue = nextProps.inputValue,
	            isLoading = nextProps.isLoading,
	            isValidNewOption = nextProps.isValidNewOption,
	            value = nextProps.value;
	        var options = nextProps.options || [];
	        var newOption = this.state.newOption;

	        if (isValidNewOption(inputValue, cleanValue(value), options)) {
	          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
	        } else {
	          newOption = undefined;
	        }

	        this.setState({
	          newOption: newOption,
	          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(_toConsumableArray(options)) : [].concat(_toConsumableArray(options), [newOption]) : options
	        });
	      }
	    }, {
	      key: "focus",
	      value: function focus() {
	        this.select.focus();
	      }
	    }, {
	      key: "blur",
	      value: function blur() {
	        this.select.blur();
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var _this2 = this;

	        var props = _extends({}, this.props);

	        var options = this.state.options;
	        return React__default.createElement(SelectComponent, _extends({}, props, {
	          ref: function ref(_ref) {
	            _this2.select = _ref;
	          },
	          options: options,
	          onChange: this.onChange
	        }));
	      }
	    }]);

	    return Creatable;
	  }(React.Component), _defineProperty(_class, "defaultProps", defaultProps$3), _temp;
	}; // TODO: do this in package entrypoint

	var SelectCreatable = makeCreatableSelect(Select);
	var Creatable = manageState(SelectCreatable);

	var SelectCreatable$1 = makeCreatableSelect(Select);
	var SelectCreatableState = manageState(SelectCreatable$1);
	var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

	// strip transition props off before spreading onto select component
	// note we need to be explicit about innerRef for flow
	var AnimatedInput = function AnimatedInput(WrappedComponent) {
	  return function (_ref) {
	    var inProp = _ref.in,
	        onExited = _ref.onExited,
	        appear = _ref.appear,
	        enter = _ref.enter,
	        exit = _ref.exit,
	        props = _objectWithoutProperties(_ref, ["in", "onExited", "appear", "enter", "exit"]);

	    return React__default.createElement(WrappedComponent, props);
	  };
	};

	var Fade = function Fade(_ref) {
	  var Tag = _ref.component,
	      _ref$duration = _ref.duration,
	      duration = _ref$duration === void 0 ? 1 : _ref$duration,
	      inProp = _ref.in,
	      onExited = _ref.onExited,
	      props = _objectWithoutProperties(_ref, ["component", "duration", "in", "onExited"]);

	  var transition = {
	    entering: {
	      opacity: 0
	    },
	    entered: {
	      opacity: 1,
	      transition: "opacity ".concat(duration, "ms")
	    },
	    exiting: {
	      opacity: 0
	    },
	    exited: {
	      opacity: 0
	    }
	  };
	  return React__default.createElement(reactTransitionGroup_1, {
	    mountOnEnter: true,
	    unmountOnExit: true,
	    in: inProp,
	    timeout: duration
	  }, function (state) {
	    var innerProps = {
	      style: _objectSpread({}, transition[state])
	    };
	    return React__default.createElement(Tag, _extends({
	      innerProps: innerProps
	    }, props));
	  });
	}; // ==============================
	// Collapse Transition
	// ==============================

	var collapseDuration = 260;
	// wrap each MultiValue with a collapse transition; decreases width until
	// finally removing from DOM
	var Collapse =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(Collapse, _Component);

	  function Collapse() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, Collapse);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf$1(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "duration", collapseDuration);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "rafID", void 0);

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
	      width: 'auto'
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "transition", {
	      exiting: {
	        width: 0,
	        transition: "width ".concat(_this.duration, "ms ease-out")
	      },
	      exited: {
	        width: 0
	      }
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getWidth", function (ref) {
	      if (ref && isNaN(_this.state.width)) {
	        /*
	          Here we're invoking requestAnimationFrame with a callback invoking our
	          call to getBoundingClientRect and setState in order to resolve an edge case
	          around portalling. Certain portalling solutions briefly remove children from the DOM
	          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
	          while the Select component is in this state.
	        */
	        // cannot use `offsetWidth` because it is rounded
	        _this.rafID = window.requestAnimationFrame(function () {
	          var _ref$getBoundingClien = ref.getBoundingClientRect(),
	              width = _ref$getBoundingClien.width;

	          _this.setState({
	            width: width
	          });
	        });
	      }
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getStyle", function (width) {
	      return {
	        overflow: 'hidden',
	        whiteSpace: 'nowrap',
	        width: width
	      };
	    });

	    _defineProperty(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getTransition", function (state) {
	      return _this.transition[state];
	    });

	    return _this;
	  }

	  _createClass(Collapse, [{
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (this.rafID) {
	        window.cancelAnimationFrame(this.rafID);
	      }
	    } // width must be calculated; cannot transition from `undefined` to `number`

	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _this$props = this.props,
	          children = _this$props.children,
	          inProp = _this$props.in;
	      var width = this.state.width;
	      return React__default.createElement(reactTransitionGroup_1, {
	        enter: false,
	        mountOnEnter: true,
	        unmountOnExit: true,
	        in: inProp,
	        timeout: this.duration
	      }, function (state) {
	        var style = _objectSpread({}, _this2.getStyle(width), _this2.getTransition(state));

	        return React__default.createElement("div", {
	          ref: _this2.getWidth,
	          style: style
	        }, children);
	      });
	    }
	  }]);

	  return Collapse;
	}(React.Component);

	var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
	  return function (_ref) {
	    var inProp = _ref.in,
	        onExited = _ref.onExited,
	        props = _objectWithoutProperties(_ref, ["in", "onExited"]);

	    return React__default.createElement(Collapse, {
	      in: inProp,
	      onExited: onExited
	    }, React__default.createElement(WrappedComponent, _extends({
	      cropWithEllipsis: inProp
	    }, props)));
	  };
	};

	var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
	  return function (props) {
	    return React__default.createElement(Fade, _extends({
	      component: WrappedComponent,
	      duration: props.isMulti ? collapseDuration : 1
	    }, props));
	  };
	};

	var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
	  return function (props) {
	    return React__default.createElement(Fade, _extends({
	      component: WrappedComponent
	    }, props));
	  };
	};

	// make ValueContainer a transition group
	var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
	  return function (props) {
	    return React__default.createElement(reactTransitionGroup_2, _extends({
	      component: WrappedComponent
	    }, props));
	  };
	};

	var makeAnimated = function makeAnimated() {
	  var externalComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var components$$1 = defaultComponents({
	    components: externalComponents
	  });

	  var Input = components$$1.Input,
	      MultiValue = components$$1.MultiValue,
	      Placeholder = components$$1.Placeholder,
	      SingleValue = components$$1.SingleValue,
	      ValueContainer = components$$1.ValueContainer,
	      rest = _objectWithoutProperties(components$$1, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

	  return _objectSpread({
	    Input: AnimatedInput(Input),
	    MultiValue: AnimatedMultiValue(MultiValue),
	    Placeholder: AnimatedPlaceholder(Placeholder),
	    SingleValue: AnimatedSingleValue(SingleValue),
	    ValueContainer: AnimatedValueContainer(ValueContainer)
	  }, rest);
	};

	var AnimatedComponents = makeAnimated();
	var Input$1$1 = AnimatedComponents.Input;
	var MultiValue$1 = AnimatedComponents.MultiValue;
	var Placeholder$1$1 = AnimatedComponents.Placeholder;
	var SingleValue$1 = AnimatedComponents.SingleValue;
	var ValueContainer$1 = AnimatedComponents.ValueContainer;
	var index = memoizeOne(makeAnimated, exportedEqual);

	var index$1 = manageState(Select);

	/* eslint-disable @typescript-eslint/explicit-function-return-type */

	const selectStyles = theme => ({
	  control: (provided, state) => ({ ...provided,
	    borderRadius: '0px',
	    borderWidth: '1px',
	    background: theme.colors.white,
	    color: theme.colors.grey80,
	    '&:hover': {
	      borderColor: theme.colors.grey60
	    },
	    borderColor: state.isFocused ? theme.colors.primary100 : theme.colors.inputBorder,
	    boxShadow: state.isFocused ? focusShadowStyle(theme) : 'none'
	  }),
	  menu: provided => ({ ...provided,
	    borderRadius: '0px',
	    borderColor: theme.colors.grey20,
	    background: theme.colors.white
	  }),
	  input: () => ({
	    color: theme.colors.grey80,
	    background: theme.colors.white,
	    border: 'none'
	  }),
	  singleValue: () => ({
	    color: theme.colors.grey80
	  }),
	  option: (provided, state) => {
	    let color = state.isSelected ? theme.colors.grey80 : theme.colors.grey60;

	    if (state.isFocused) {
	      color = theme.colors.white;
	    }

	    return { ...provided,
	      color,
	      background: state.isFocused ? theme.colors.primary100 : 'transparent'
	    };
	  }
	});

	const filterStyles = theme => ({
	  control: (provided, state) => ({ ...provided,
	    border: state.isFocused ? `1px solid ${theme.colors.primary100}` : `1px solid ${theme.colors.filterInputBorder}`,
	    borderRadius: '0px',
	    background: 'transparent',
	    color: theme.colors.white,
	    boxShadow: state.isFocused ? focusShadowStyle(theme) : 'none'
	  }),
	  input: () => ({
	    color: theme.colors.white
	  }),
	  singleValue: () => ({
	    color: theme.colors.white
	  }),
	  option: (provided, state) => ({ ...provided,
	    color: state.isSelected ? theme.colors.white : theme.colors.grey20,
	    background: state.isFocused ? 'rgba(32,39,62,0.25)' : 'transparent'
	  }),
	  menu: provided => ({ ...provided,
	    borderRadius: '0px',
	    borderColor: theme.colors.grey20,
	    background: theme.colors.filterBg,
	    zIndex: 5
	  })
	});

	/* eslint-disable import/prefer-default-export */

	/**
	 * Function used in React memo to compare if previous property value and next
	 * property value are the same.
	 *
	 * @private
	 */
	const recordPropertyIsEqual = (prevProps, nextProps) => {
	  const prevValue = prevProps.record.params[prevProps.property.name];
	  const nextValue = nextProps.record.params[nextProps.property.name];
	  const prevError = prevProps.record.errors[prevProps.property.name];
	  const nextError = nextProps.record.errors[nextProps.property.name];
	  return prevValue === nextValue && prevError === nextError;
	};

	class Edit$2 extends React__default.Component {
	  constructor(props) {
	    super(props);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSelectChange = this.handleSelectChange.bind(this);
	  }

	  shouldComponentUpdate(prevProps) {
	    return !recordPropertyIsEqual(prevProps, this.props);
	  }

	  handleInputChange(event) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.name, event.target.value);
	  }

	  handleSelectChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.name, value);
	  }

	  renderInput() {
	    const {
	      property,
	      record,
	      theme
	    } = this.props;
	    const value = record.params && typeof record.params[property.name] !== 'undefined' ? record.params[property.name] : '';

	    if (property.availableValues) {
	      const styles = selectStyles(theme);
	      const selected = property.availableValues.find(av => av.value === value);
	      return /*#__PURE__*/React__default.createElement(index$1, {
	        isClearable: true,
	        styles: styles,
	        value: selected,
	        options: property.availableValues,
	        onChange: this.handleSelectChange,
	        isDisabled: property.isDisabled
	      });
	    }

	    return /*#__PURE__*/React__default.createElement(Input, {
	      id: property.name,
	      name: property.name,
	      onChange: this.handleInputChange,
	      value: value,
	      disabled: property.isDisabled
	    });
	  }

	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const error = record.errors && record.errors[property.name];
	    return /*#__PURE__*/React__default.createElement(FormGroup, {
	      error: !!error
	    }, /*#__PURE__*/React__default.createElement(Label, {
	      htmlFor: property.name,
	      required: property.isRequired
	    }, property.label), this.renderInput(), /*#__PURE__*/React__default.createElement(FormMessage, null, error && error.message));
	  }

	}

	var edit = styled.withTheme(Edit$2);

	class Filter extends React__default.PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSelectChange = this.handleSelectChange.bind(this);
	  }

	  handleInputChange(event) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.name, event.target.value);
	  }

	  handleSelectChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.name, value);
	  }

	  renderInput() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const filterKey = `filter-${property.name}`;
	    const value = filter[property.name] || '';

	    if (property.availableValues) {
	      const selected = property.availableValues.find(av => av.value === value);
	      return /*#__PURE__*/React__default.createElement(index$1, {
	        value: typeof selected === 'undefined' ? '' : selected,
	        isClearable: true,
	        options: property.availableValues,
	        styles: filterStyles(theme),
	        onChange: this.handleSelectChange
	      });
	    }

	    return /*#__PURE__*/React__default.createElement(Input, {
	      name: filterKey,
	      onChange: this.handleInputChange,
	      value: value
	    });
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default.createElement(FormGroup, {
	      variant: "filter"
	    }, /*#__PURE__*/React__default.createElement(Label, null, property.label), this.renderInput());
	  }

	}

	var filter = styled.withTheme(Filter);

	class List$2 extends React__default.PureComponent {
	  render() {
	    return /*#__PURE__*/React__default.createElement(DefaultPropertyValue, this.props);
	  }

	}



	var defaultType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$2,
		edit: edit,
		filter: filter,
		list: List$2
	});

	const parseValue = value => !(!value || value === 'false');

	const Edit$3 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = parseValue(record.params && record.params[property.name]);
	  const error = record.errors && record.errors[property.name];

	  const handleChange = () => {
	    if (!property.isDisabled) {
	      onChange(property.name, !value);
	    }
	  };

	  return /*#__PURE__*/React__default.createElement(FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default.createElement(CheckBox, {
	    id: property.name,
	    name: property.name,
	    onChange: handleChange,
	    checked: value,
	    disabled: property.isDisabled
	  }), /*#__PURE__*/React__default.createElement(Label, {
	    inline: true,
	    htmlFor: property.name
	  }, property.label), /*#__PURE__*/React__default.createElement(FormMessage, null, error && error.message));
	};

	var edit$1 = /*#__PURE__*/React.memo(Edit$3, recordPropertyIsEqual);

	var mapValue = (value => {
	  if (typeof value === 'undefined') {
	    return '';
	  }

	  return value ? 'Yes' : 'No';
	});

	const BooleanPropertyValue = props => {
	  const {
	    record,
	    property,
	    resource
	  } = props;
	  const {
	    translateProperty
	  } = useTranslation();
	  const rawValue = record?.params[property.name];

	  if (typeof rawValue === 'undefined' || rawValue === '') {
	    return null;
	  }

	  const base = mapValue(rawValue);
	  const translation = translateProperty(`${property.name}.${rawValue}`, resource.id, {
	    defaultValue: base
	  });
	  return /*#__PURE__*/React__default.createElement(Badge, {
	    outline: true,
	    size: "sm"
	  }, translation);
	};

	class Show$3 extends React__default.PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement(BooleanPropertyValue, this.props));
	  }

	}

	class List$3 extends React__default.PureComponent {
	  render() {
	    return /*#__PURE__*/React__default.createElement(BooleanPropertyValue, this.props);
	  }

	}

	class Filter$1 extends React__default.PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.name, value);
	  }

	  render() {
	    const {
	      property,
	      filter = {},
	      theme
	    } = this.props;
	    const value = typeof filter[property.name] === 'undefined' ? '' : filter[property.name];
	    const options = [{
	      value: true,
	      label: mapValue(true)
	    }, {
	      value: false,
	      label: mapValue(false)
	    }];
	    const selected = options.find(o => o.value === value);
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement(index$1, {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      options: options,
	      styles: filterStyles(theme),
	      onChange: this.handleChange
	    }));
	  }

	}

	var filter$1 = styled.withTheme(Filter$1);



	var boolean = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$1,
		show: Show$3,
		list: List$3,
		filter: filter$1
	});

	const Edit$4 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = record.params && record.params[property.name] || '';
	  const error = record.errors && record.errors[property.name];
	  return /*#__PURE__*/React__default.createElement(FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default.createElement(Label, {
	    htmlFor: property.name
	  }, property.label), /*#__PURE__*/React__default.createElement(DatePicker, {
	    value: value,
	    disabled: property.isDisabled,
	    onChange: data => onChange(property.name, data)
	  }), /*#__PURE__*/React__default.createElement(FormMessage, null, error && error.message));
	};

	var edit$2 = /*#__PURE__*/React.memo(Edit$4, recordPropertyIsEqual);

	var mapValue$1 = (value => {
	  if (!value) {
	    return '';
	  }

	  const date = new Date(value);
	  return date.toLocaleString();
	});

	class Show$4 extends React__default.PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue$1(record.params[property.name]);
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), value);
	  }

	}

	class List$4 extends React__default.PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue$1(record.params[property.name]);
	    return /*#__PURE__*/React__default.createElement("span", null, value);
	  }

	}

	const PARAM_SEPARATOR = '~~';

	/**
	 * Filter object wrapping up selected filters.
	 * @private
	 */
	class Filter$2 {
	  /**
	   * Changes raw nested filters to form Object<path, value>.
	   *
	   * @example
	   * const filters = {
	   *  nested: {field: 'ala'},
	   *  'dataField~~from': '2019-08-14'
	   * }
	   *
	   * const normalized = Filter.normalizeFilters(filters)
	   * // {
	   * //   'nested.filter': 'ala',
	   * //   'dataField': {from: '2019-08-14'}
	   * // }
	   *
	   *
	   * @param   {Object}  filters
	   *
	   * @return  {Object}
	   */
	  static normalizeKeys(filters) {
	    return flat.unflatten(flat.flatten(filters), {
	      delimiter: PARAM_SEPARATOR
	    });
	  }
	  /**
	   * @param   {Object<String,Object | String>}  filters   selected filters
	   * @param   {BaseResource}                    resource    resource which is filtered
	   */


	  constructor(filters = {}, resource) {
	    this.resource = resource;
	    const normalized = Filter$2.normalizeKeys(filters);
	    this.filters = Object.keys(normalized).reduce((memo, path) => ({
	      [path]: {
	        path,
	        property: this.resource.property(path),
	        value: normalized[path]
	      },
	      ...memo
	    }), {});
	  }
	  /**
	   * Returns filter for a given property key
	   *
	   * @param {String} key      property key
	   * @returns {Filter.Property | undefined}
	   */


	  get(key) {
	    return this.filters[key];
	  }
	  /**
	   * Populates all filtered properties which refers to other resources
	   */


	  async populate() {
	    const keys = Object.keys(this.filters);

	    for (let index = 0; index < keys.length; index += 1) {
	      const key = keys[index];
	      const referenceResource = this.resource.decorate().getPropertyByKey(key).reference();

	      if (referenceResource) {
	        this.filters[key].populated = await referenceResource.findOne(this.filters[key].value);
	      }
	    }

	    return this;
	  }

	  reduce(callback, initial) {
	    return Object.values(this.filters).reduce(callback, initial || {});
	  }

	  isVisible() {
	    return !!Object.keys(this.filters).length;
	  }

	}

	var BackendFilter = /*#__PURE__*/Object.freeze({
		__proto__: null,
		PARAM_SEPARATOR: PARAM_SEPARATOR,
		'default': Filter$2
	});

	const {
	  PARAM_SEPARATOR: PARAM_SEPARATOR$1
	} = BackendFilter;

	const Filter$3 = props => {
	  const {
	    property,
	    filter,
	    onChange
	  } = props;
	  const fromKey = `${property.name}${PARAM_SEPARATOR$1}from`;
	  const toKey = `${property.name}${PARAM_SEPARATOR$1}to`;
	  const fromValue = filter[fromKey];
	  const toValue = filter[toKey];
	  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement(Label, null, "- From: "), /*#__PURE__*/React__default.createElement(DatePicker, {
	    value: fromValue,
	    onChange: data => onChange(fromKey, data)
	  }), /*#__PURE__*/React__default.createElement(Label, {
	    mt: "default"
	  }, "- To: "), /*#__PURE__*/React__default.createElement(DatePicker, {
	    value: toValue,
	    onChange: data => onChange(toKey, data)
	  })));
	};



	var datetime = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$2,
		show: Show$4,
		list: List$4,
		filter: Filter$3
	});

	/* eslint-disable jsx-a11y/label-has-for */
	const toolbarOptions = [[{
	  header: [1, 2, 3, 4, 5, 6, false]
	}], ['bold', 'italic', 'underline', 'strike'], // toggled buttons
	['blockquote', 'code-block'], [{
	  list: 'ordered'
	}, {
	  list: 'bullet'
	}], [{
	  script: 'sub'
	}, {
	  script: 'super'
	}], // superscript/subscript
	[{
	  indent: '-1'
	}, {
	  indent: '+1'
	}], // indent
	[{
	  direction: 'rtl'
	}], // text direction
	[{
	  size: ['small', false, 'large', 'huge']
	}], // custom dropdown
	[{
	  color: []
	}, {
	  background: []
	}], // dropdown with defaults from theme
	[{
	  font: []
	}], [{
	  align: []
	}], ['clean'] // remove formatting button
	];
	const Wrapper$1 = styled__default.div.attrs({
	  className: 'control has-icons-right'
	}).withConfig({
	  displayName: "edit__Wrapper",
	  componentId: "sc-1ilg3d7-0"
	})([".ql-toolbar{border-color:", ";.ql-picker{color:", ";}}.ql-container{border-color:", ";background:", ";}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.colors.grey60, ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.colors.white);
	class Edit$5 extends React__default.Component {
	  constructor(props) {
	    super(props);
	    this.wysiwigRef = /*#__PURE__*/React__default.createRef();
	  }

	  componentDidMount() {
	    this.setupWysiwig();
	  }

	  shouldComponentUpdate(nextProps) {
	    const {
	      record,
	      property
	    } = this.props;

	    if (!nextProps) {
	      return false;
	    }

	    const oldError = record.errors && record.errors[property.name] && record.errors[property.name].message;
	    const newError = nextProps.record.errors && nextProps.record.errors[property.name] && nextProps.record.errors[property.name].message;
	    return oldError !== newError;
	  }

	  componentDidUpdate() {
	    this.setupWysiwig();
	  }

	  setupWysiwig() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params && record.params[property.name] || '';
	    this.wysiwigRef.current.innerHTML = value;

	    if (this.quill) {
	      delete this.quill; // eslint-disable-next-line react/no-find-dom-node

	      const thisNode = reactDom.findDOMNode(this);
	      const toolbars = thisNode.getElementsByClassName('ql-toolbar');

	      for (let index = 0; index < toolbars.length; index += 1) {
	        toolbars[index].remove();
	      }
	    }

	    this.quill = new Quill(this.wysiwigRef.current, {
	      modules: {
	        toolbar: toolbarOptions
	      },
	      theme: 'snow'
	    });
	    this.quill.on('text-change', () => {
	      this.handleChange(this.wysiwigRef.current.children[0].innerHTML);
	    });
	  }

	  handleChange(value) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.name, value);
	  }

	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const error = record.errors && record.errors[property.name];
	    return /*#__PURE__*/React__default.createElement(FormGroup, {
	      error: !!error
	    }, /*#__PURE__*/React__default.createElement(Label, {
	      htmlFor: property.name
	    }, property.label), /*#__PURE__*/React__default.createElement(Wrapper$1, null, /*#__PURE__*/React__default.createElement("div", {
	      className: "quill-editor",
	      ref: this.wysiwigRef,
	      style: {
	        height: '400px'
	      }
	    })), /*#__PURE__*/React__default.createElement(FormMessage, null, error && error.message));
	  }

	}

	class Show$5 extends React__default.PureComponent {
	  constructor(props) {
	    super(props);
	    this.contentRef = /*#__PURE__*/React__default.createRef();
	  }

	  componentDidMount() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.name];
	    this.contentRef.current.innerHTML = value;
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement("div", {
	      className: "rich-text-value content",
	      ref: this.contentRef
	    }));
	  }

	}

	const List$5 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const original = record.params[property.name] || '';
	  const value = original.substring(0, 15) + (original.length > 15 ? '...' : '');
	  return /*#__PURE__*/React__default.createElement("span", null, value);
	};



	var richtext = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: Edit$5,
		show: Show$5,
		list: List$5
	});

	const Edit$6 = props => {
	  const {
	    onChange,
	    property,
	    record,
	    theme
	  } = props;
	  const {
	    reference: resourceId
	  } = property;

	  if (!resourceId) {
	    throw new Error(`Cannot reference resource in property '${property.name}'`);
	  }

	  const handleChange = selected => {
	    if (selected) {
	      onChange(property.name, selected.value, selected.record);
	    } else {
	      onChange(property.name, '');
	    }
	  };

	  const loadOptions = async inputValue => {
	    const api = new ApiClient();
	    const optionRecords = await api.searchRecords({
	      resourceId,
	      query: inputValue
	    });
	    return optionRecords.map(optionRecord => ({
	      value: optionRecord.id,
	      label: optionRecord.title,
	      record: optionRecord
	    }));
	  };

	  const error = record?.errors[property.name];
	  const selectedId = record?.params[property.name];
	  const [loadedRecord, setLoadedRecord] = React.useState();
	  const [loadingRecord, setLoadingRecord] = React.useState(0);
	  const selectedValue = record?.populated[property.name] ?? loadedRecord;
	  const selectedOption = selectedId && selectedValue ? {
	    value: selectedValue.id,
	    label: selectedValue.title
	  } : {
	    value: '',
	    label: ''
	  };
	  const styles = selectStyles(theme);
	  React.useEffect(() => {
	    if (!selectedValue && selectedId) {
	      setLoadingRecord(c => c + 1);
	      const api = new ApiClient();
	      api.recordAction({
	        actionName: 'show',
	        resourceId,
	        recordId: selectedId
	      }).then(({
	        data
	      }) => {
	        setLoadedRecord(data.record);
	      }).finally(() => {
	        setLoadingRecord(c => c - 1);
	      });
	    }
	  }, [selectedValue, selectedId, resourceId]);
	  return /*#__PURE__*/React__default.createElement(FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default.createElement(Label, {
	    htmlFor: property.name
	  }, property.label), /*#__PURE__*/React__default.createElement(Select$1, {
	    cacheOptions: true,
	    value: selectedOption,
	    styles: styles,
	    defaultOptions: true,
	    loadOptions: loadOptions,
	    onChange: handleChange,
	    isDisabled: property.isDisabled,
	    isLoading: loadingRecord
	  }), /*#__PURE__*/React__default.createElement(FormMessage, null, error?.message));
	};

	var edit$3 = styled.withTheme(Edit$6);

	const StyledLink = styled__default(reactRouterDom.Link).withConfig({
	  displayName: "reference-value__StyledLink",
	  componentId: "flgaqr-0"
	})(["", " padding-left:", ";padding-right:", ";"], ButtonCSS, ({
	  theme
	}) => theme.space.xs, ({
	  theme
	}) => theme.space.xs);

	const ReferenceValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const h = new ViewHelpers();
	  const refId = record.params[property.name];
	  const populated = record.populated[property.name];
	  const value = populated && populated.title || refId;

	  if (!property.reference) {
	    throw new Error(`property: "${property.name}" does not have a reference`);
	  }

	  if (populated && populated.recordActions.find(a => a.name === 'show')) {
	    const href = h.recordActionUrl({
	      resourceId: property.reference,
	      recordId: refId,
	      actionName: 'show'
	    });
	    return /*#__PURE__*/React__default.createElement(StyledLink, {
	      variant: "text",
	      to: href
	    }, value);
	  }

	  return /*#__PURE__*/React__default.createElement("span", null, value);
	};

	class Show$6 extends React__default.PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement(ReferenceValue, {
	      property: property,
	      record: record
	    }));
	  }

	}

	class List$6 extends React__default.PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default.createElement(ReferenceValue, {
	      property: property,
	      record: record
	    });
	  }

	}

	class Filter$4 extends React__default.PureComponent {
	  constructor(props) {
	    super(props);
	    this.api = new ApiClient();
	    this.options = [];
	    this.loadOptions = this.loadOptions.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.name, selected ? selected.value : '');
	  }

	  async loadOptions(inputValue) {
	    const {
	      property
	    } = this.props;
	    const records = await this.api.searchRecords({
	      resourceId: property.reference,
	      query: inputValue
	    });
	    this.options = records.map(r => ({
	      value: r.id,
	      label: r.title
	    }));
	    return this.options;
	  }

	  render() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const value = typeof filter[property.name] === 'undefined' ? '' : filter[property.name];
	    const selected = (this.options || []).find(o => o.value === value);
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), /*#__PURE__*/React__default.createElement(Select$1, {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      cacheOptions: true,
	      styles: filterStyles(theme),
	      loadOptions: this.loadOptions,
	      onChange: this.handleChange,
	      defaultOptions: true
	    }));
	  }

	}

	var filter$2 = styled.withTheme(Filter$4);



	var reference = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$3,
		show: Show$6,
		list: List$6,
		filter: filter$2
	});

	class Show$7 extends React__default.PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.name] || '';
	    return /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(Label, null, property.label), value.split(/(?:\r\n|\r|\n)/g).map((line, i) =>
	    /*#__PURE__*/
	    // eslint-disable-next-line react/no-array-index-key
	    React__default.createElement(React__default.Fragment, {
	      key: i
	    }, line, /*#__PURE__*/React__default.createElement("br", null))));
	  }

	}

	const Edit$7 = props => {
	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const handleInputChange = React.useCallback(event => {
	    onChange(property.name, event.target.value);
	  }, [onChange, property.name]);
	  const value = record.params && typeof record.params[property.name] !== 'undefined' && record.params[property.name] !== null ? record.params[property.name] : '';
	  const error = record.errors && record.errors[property.name];
	  return /*#__PURE__*/React__default.createElement(FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default.createElement(Label, {
	    htmlFor: property.name
	  }, property.label), /*#__PURE__*/React__default.createElement(Input, {
	    as: "textarea",
	    rows: (value.match(/\n/g) || []).length + 1,
	    id: property.name,
	    name: property.name,
	    onChange: handleInputChange,
	    value: value,
	    disabled: property.isDisabled
	  }), /*#__PURE__*/React__default.createElement(FormMessage, null, error && error.message));
	};

	var edit$4 = /*#__PURE__*/React.memo(Edit$7, recordPropertyIsEqual);



	var textarea = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$7,
		edit: edit$4
	});

	const Edit$8 = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const value = record.params[property.name];
	  const error = record.errors && record.errors[property.name];
	  const [isInput, setIsInput] = React.useState(false);
	  return /*#__PURE__*/React__default.createElement(FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default.createElement(Label, {
	    htmlFor: property.name
	  }, property.label), /*#__PURE__*/React__default.createElement(InputGroup, null, /*#__PURE__*/React__default.createElement(Input, {
	    type: isInput ? 'input' : 'password',
	    className: "input",
	    id: property.name,
	    name: property.name,
	    onChange: event => onChange(property.name, event.target.value),
	    value: value ?? '',
	    disabled: property.isDisabled
	  }), /*#__PURE__*/React__default.createElement(Button, {
	    variant: isInput ? 'primary' : 'text',
	    type: "button",
	    size: "icon",
	    onClick: () => setIsInput(!isInput)
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "View"
	  }))), /*#__PURE__*/React__default.createElement(FormMessage, null, error && error.message));
	};

	var edit$5 = /*#__PURE__*/React.memo(Edit$8, recordPropertyIsEqual);

	/* eslint-disable import/prefer-default-export */

	var password = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$5
	});

	let globalAny$2 = {};

	try {
	  globalAny$2 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}

	const types = {
	  textarea,
	  boolean,
	  datetime,
	  reference,
	  password,
	  date: datetime,
	  richtext,
	  string: defaultType,
	  number: defaultType,
	  float: defaultType,
	  mixed: null
	};
	/**
	 * Component which renders properties in all the places in the AdminBro UI. By all the
	 * places I mean:
	 * - **list**: on the List,
	 * - **edit**: on default actions where user can modify the record like: {@link EditAction},
	 * and {@link NewAction},
	 * - **show**: on the default {@link ShowAction} where user can see the details of a record,
	 * - **filter**: and finally on the sidebar filter,
	 *
	 * Based on the type of given property and where the property is rendered **BasePropertyComponent**
	 * picks Component to use. That is how **date** fields are rendered as **datepicker**
	 * or **boolean** values as **checkbox**'es.
	 *
	 * ### Overriding default render logic
	 *
	 * By default BasePropertyComponent will render corresponding
	 * component: input for string, DatePicker for dates etc.
	 * But you can override this by passing a custom component to {@link PropertyOptions}.
	 *
	 * Take a look at the following example:
	 *
	 * ```
	 * const AdminBro = require('admin-bro')
	 * const ResourceModel = require('./resource-model')
	 * const AdminBroOptions = {
	 *   resources: [{
	 *     resource: ResourceModel
	 *     options: {
	 *       properties: {
	 *         name: {
	 *           components: {
	 *             show: AdminBro.bundle('./my-react-component'),
	 *           },
	 *         },
	 *       },
	 *     },
	 *   }],
	 * }
	 * ```
	 *
	 * In the example above we are altering how **name** property will look
	 * like on the Show action. We can define **my-react-component.jsx** like this:
	 *
	 * ```
	 * import React from 'react'
	 * import { InputGroup, Label } from 'admin-bro'
	 *
	 * const MyReactComponent = props => {
	 *   const { record, property } = props
	 *   const value = record.params[property.name]
	 *   return (
	 *     <InputGroup>
	 *       <Label>{property.name}</Label>
	 *       {value} [meters]
	 *     </InputGroup>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @name BasePropertyComponent
	 * @subcategory Application
	 * @example
	 * const booleanProperty = {
	 *   isTitle: false,
	 *   name: 'awesome',
	 *   isId: false,
	 *   position: -1,
	 *   label: 'I am awesome',
	 *   type: 'boolean',
	 * }
	 *
	 * const stringProperty = {
	 *   isTitle: true,
	 *   name: 'name',
	 *   isId: false,
	 *   position: -1,
	 *   label: 'Name of a user',
	 *   type: 'string',
	 * }
	 * // Resource is taken from the database
	 * const resource = {
	 *   id: 'User',
	 *   name: 'User Model',
	 *   titleProperty: 'name',
	 *   resourceActions: [],
	 *   listProperties: [booleanProperty, stringProperty],
	 *   editProperties: [booleanProperty, stringProperty],
	 *   showProperties: [booleanProperty, stringProperty],
	 *   filterProperties: [booleanProperty, stringProperty],
	 * }
	 *
	 * const initialRecord = {
	 *   id: '1',
	 *   title: 'John',
	 *   params: {
	 *     name: 'John',
	 *     gender: 'male',
	 *   },
	 *   recordActions: [],
	 * }
	 * const Wrapper = () => {
	 *   const { record, handleChange, submit } = useRecord(initialRecord, resource.id)
	 *   const params = JSON.stringify(record.params)
	 *   return (
	 *     <Box py="lg">
	 *       <BasePropertyComponent
	 *         property={booleanProperty}
	 *         resource={resource}
	 *         onChange={handleChange}
	 *         where="edit"
	 *         record={record}
	 *       />
	 *       <BasePropertyComponent
	 *         property={stringProperty}
	 *         resource={resource}
	 *         onChange={handleChange}
	 *         where="edit"
	 *         record={record}
	 *       />
	 *      <Box>
	 *        <Label>Params:</Label>
	 *        {params}
	 *      </Box>
	 *      <Box my="lg">
	 *        <Button variant="primary" onClick={submit}>Submit</Button>
	 *        <Text variant="sm">
	 *          This will throw an error because there is no AdminBro instance running
	 *        </Text>
	 *      </Box>
	 *     </Box>
	 *   )
	 * }
	 *
	 * return (<Wrapper />)
	 */

	class BasePropertyComponent extends React__default.Component {
	  render() {
	    const {
	      property,
	      resource,
	      record,
	      filter,
	      where,
	      onChange
	    } = this.props;
	    const testId = `property-${where}-${property.name}`;
	    let Component = types[property.type] && types[property.type][where] || defaultType[where];

	    if (property.components && property.components[where]) {
	      const component = property.components[where];

	      if (!component) {
	        throw new Error(`there is no "${property.name}.components.${where}"`);
	      }

	      Component = globalAny$2.AdminBro.UserComponents[component];
	      return /*#__PURE__*/React__default.createElement(ErrorBoundary, null, /*#__PURE__*/React__default.createElement(Box, {
	        "data-testid": testId
	      }, /*#__PURE__*/React__default.createElement(Component, {
	        property: property,
	        resource: resource,
	        record: record,
	        filter: filter,
	        onChange: onChange,
	        where: where
	      })));
	    }

	    const Array = ArrayType[where];
	    const Mixed = MixedType[where];

	    if (property.isArray) {
	      if (!Array) {
	        return /*#__PURE__*/React__default.createElement("div", null);
	      }

	      return /*#__PURE__*/React__default.createElement(Array, _extends_1({}, this.props, {
	        ItemComponent: BasePropertyComponent,
	        testId: testId
	      }));
	    }

	    if (property.type === 'mixed' && property.subProperties && property.subProperties.length) {
	      if (!Mixed) {
	        return /*#__PURE__*/React__default.createElement("div", null);
	      }

	      return /*#__PURE__*/React__default.createElement(Mixed, _extends_1({}, this.props, {
	        ItemComponent: BasePropertyComponent,
	        testId: testId
	      }));
	    }

	    return /*#__PURE__*/React__default.createElement(ErrorBoundary, null, /*#__PURE__*/React__default.createElement(Box, {
	      "data-testid": testId
	    }, /*#__PURE__*/React__default.createElement(Component, {
	      property: property,
	      resource: resource,
	      record: record,
	      filter: filter,
	      onChange: onChange,
	      where: where
	    })));
	  }

	}

	function camelizePropertyType(type) {
	  return {
	    Edit: type.edit,
	    Show: type.show,
	    List: type.list,
	    Filter: type.filter
	  };
	}

	BasePropertyComponent.DefaultType = camelizePropertyType(defaultType);
	BasePropertyComponent.Boolean = camelizePropertyType(boolean);
	BasePropertyComponent.DateTime = camelizePropertyType(datetime);
	BasePropertyComponent.RichText = camelizePropertyType(richtext);
	BasePropertyComponent.Reference = camelizePropertyType(reference);
	BasePropertyComponent.TextArea = camelizePropertyType(textarea);
	BasePropertyComponent.Password = camelizePropertyType(password);

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	/**
	 * NoticeMessage which can be presented as a "Toast" message.
	 * @alias NoticeMessage
	 * @memberof withNotice
	 */

	const mapDispatchToProps$1 = dispatch => ({
	  addNotice: notice => dispatch(addNotice(notice))
	});
	/**
	 * High Order Component which allows you to post notice messages from your components
	 *
	 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
	 *
	 * ```javascript
	 * import { withNotice } from 'admin-bro'
	 *
	 * const MY_MESSAGE = {
	 *   message: 'I am toast message',
	 *   type: 'success',
	 * }
	 * const MyCustomComponent = ({ addNotice }) => {
	 *   return (
	 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
	 *   )
	 * }
	 * export default withNotice(MyCustomComponent)
	 * ```
	 *
	 * @component
	 * @subcategory HOC
	 */


	const withNotice = Component => reactRedux.connect(null, mapDispatchToProps$1)(Component);

	/* eslint-disable no-undef */
	/**
	 * @alias ActionButtonProps
	 * @memberof ActionButton
	 */

	const StyledLink$1 = styled__default(reactRouterDom.Link).withConfig({
	  displayName: "action-button__StyledLink",
	  componentId: "sc-1tnwd9t-0"
	})(["text-decoration:none;"]);
	/**
	 * Renders Button which redirects to given action
	 *
	 * @component
	 * @subcategory Application
	 */

	class ActionButton extends React__default.PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	  }

	  href() {
	    const {
	      action,
	      resourceId,
	      recordId,
	      recordIds,
	      location
	    } = this.props;
	    const h = new ViewHelpers();
	    const {
	      name: actionName,
	      actionType
	    } = action;

	    switch (actionType) {
	      case 'record':
	        if (!recordId) {
	          throw new Error('You have to specify "recordId" for record action');
	        }

	        return h.recordActionUrl({
	          resourceId,
	          recordId,
	          actionName,
	          search: location.search
	        });

	      case 'resource':
	        return h.resourceActionUrl({
	          resourceId,
	          actionName,
	          search: location.search
	        });

	      case 'bulk':
	        return h.bulkActionUrl({
	          resourceId,
	          recordIds,
	          actionName,
	          search: location.search
	        });

	      default:
	        throw new Error('"actionType" should be either record, resource or bulk');
	    }
	  }

	  callApi() {
	    const {
	      action,
	      resourceId,
	      recordId,
	      location,
	      history,
	      actionPerformed,
	      addNotice,
	      recordIds
	    } = this.props;
	    const api = new ApiClient();
	    let promise;

	    switch (action.actionType) {
	      case 'record':
	        if (!recordId) {
	          throw new Error('You have to specify "recordId" for record action');
	        }

	        promise = api.recordAction({
	          resourceId,
	          actionName: action.name,
	          recordId
	        });
	        break;

	      case 'resource':
	        promise = api.resourceAction({
	          resourceId,
	          actionName: action.name
	        });
	        break;

	      case 'bulk':
	        if (!recordIds) {
	          throw new Error('You have to specify "recordIds" for bulk action');
	        }

	        promise = api.bulkAction({
	          resourceId,
	          actionName: action.name,
	          recordIds
	        });
	        break;

	      default:
	        throw new Error('"actionType" should be either record, resource or bulk');
	    }

	    promise.then(response => {
	      const {
	        data
	      } = response;

	      if (data.notice) {
	        addNotice(data.notice);
	      }

	      if (data.redirectUrl && location.pathname !== data.redirectUrl) {
	        history.push(appendForceRefresh(data.redirectUrl));
	      }

	      if (actionPerformed) {
	        actionPerformed(data);
	      }
	    }).catch(error => {
	      throw error;
	    });
	  }

	  handleClick(event) {
	    const {
	      action
	    } = this.props;

	    if (action.guard && !confirm(action.guard)) {
	      event.preventDefault();
	      return;
	    }

	    if (typeof action.component !== 'undefined' && action.component === false) {
	      event.preventDefault();
	      this.callApi();
	    }
	  }

	  render() {
	    const {
	      children,
	      action
	    } = this.props;

	    if (!action) {
	      return null;
	    }

	    return /*#__PURE__*/React__default.createElement(StyledLink$1, {
	      to: this.href(),
	      onClick: this.handleClick
	    }, children);
	  }

	} // TODO - remove this hack


	var ActionButton$1 = reactRouterDom.withRouter(withNotice(ActionButton));

	const BreadcrumbLink = styled__default(reactRouterDom.Link).withConfig({
	  displayName: "breadcrumbs__BreadcrumbLink",
	  componentId: "yjyesi-0"
	})(["color:", ";font-family:", ";line-height:", ";font-size:", ";text-decoration:none;&:hover{color:", ";}&:after{content:'/';padding:0 ", ";}&:last-child{&:after{content:'';}}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.default);
	/**
	 * @memberof Breadcrumbs
	 */

	/**
	 * @component
	 * @private
	 */
	const Breadcrumbs = props => {
	  const {
	    resource,
	    record,
	    actionName
	  } = props;
	  const action = resource.actions.find(a => a.name === actionName);
	  const h = new ViewHelpers();
	  return /*#__PURE__*/React__default.createElement(Box, {
	    flexGrow: 1,
	    className: cssClass('Breadcrumbs')
	  }, /*#__PURE__*/React__default.createElement(BreadcrumbLink, {
	    to: h.dashboardUrl()
	  }, "Dashboard"), /*#__PURE__*/React__default.createElement(BreadcrumbLink, {
	    to: resource.href ? resource.href : '/',
	    className: record ? 'is-active' : ''
	  }, resource.name), action && record ? /*#__PURE__*/React__default.createElement(BreadcrumbLink, {
	    to: "#"
	  }, action.label) : null);
	};

	/* eslint-disable jsx-a11y/anchor-is-valid */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const StyledLink$2 = styled__default(({
	  rounded,
	  ...rest
	}) => /*#__PURE__*/React__default.createElement(reactRouterDom.Link, rest)).withConfig({
	  displayName: "action-header__StyledLink",
	  componentId: "sc-17u6jqx-0"
	})(["", ""], ButtonCSS);
	/**
	 * Header of an action. It renders Action name with buttons for all the actions.
	 *
	 * @component
	 * @subcategory Application
	 */

	const ActionHeader = props => {
	  const {
	    translateButton
	  } = useTranslation();
	  const h = new ViewHelpers();
	  const {
	    resource,
	    toggleFilter,
	    actionPerformed,
	    record,
	    action,
	    tag,
	    omitActions
	  } = props;

	  if (action.hideActionHeader) {
	    return null;
	  }

	  const resourceId = resource.id;
	  const actions = record ? record.recordActions.filter(ra => !action || action.name !== ra.name) // only new action should be seen in regular "Big" actions place
	  : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)); // list and new actions are special and are are always

	  const customResourceActions = resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name));
	  const title = action ? action.label : resource.name;
	  const isList = action && action.name === 'list';
	  const listAction = resource.resourceActions.find(ra => ra.name === 'list'); // styled which differs if action header is in the drawer or not

	  const cssIsRootFlex = !action.showInDrawer;
	  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
	  const cssCloseIcon = action.showInDrawer ? 'ChevronRight' : 'ChevronLeft';
	  const cssActionButtonSize = action.showInDrawer ? 'sm' : 'lg';
	  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
	  const CssHComponent = action.showInDrawer ? H3 : H2;
	  return /*#__PURE__*/React__default.createElement(Box, {
	    className: cssClass('ActionHeader')
	  }, action.showInDrawer ? '' : /*#__PURE__*/React__default.createElement(Box, {
	    flex: true,
	    flexDirection: "row",
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default.createElement(Breadcrumbs, {
	    resource: resource,
	    actionName: action.name,
	    record: record
	  }), /*#__PURE__*/React__default.createElement(Box, {
	    flexShrink: 0
	  }, customResourceActions.map(customAction => /*#__PURE__*/React__default.createElement(ActionButton$1, {
	    action: customAction,
	    key: customAction.name,
	    resourceId: resource.id
	  }, /*#__PURE__*/React__default.createElement(Link, {
	    as: "span",
	    ml: "lg"
	  }, customAction.icon ? /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: customAction.icon
	  }) : null, customAction.label))))), /*#__PURE__*/React__default.createElement(Box, {
	    display: ['block', cssIsRootFlex ? 'flex' : 'block']
	  }, /*#__PURE__*/React__default.createElement(Box, {
	    mt: cssHeaderMT,
	    flexGrow: 1,
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default.createElement(CssHComponent, {
	    mb: "lg"
	  }, !isList && listAction ? /*#__PURE__*/React__default.createElement(StyledLink$2, {
	    size: "icon",
	    to: h.resourceUrl({
	      resourceId,
	      search: window.location.search
	    }),
	    rounded: true,
	    mr: "lg",
	    type: "button"
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: cssCloseIcon
	  })) : '', title, tag ? /*#__PURE__*/React__default.createElement(Badge, {
	    variant: "primary",
	    ml: "default"
	  }, tag) : '')), omitActions ? '' : /*#__PURE__*/React__default.createElement(Box, {
	    mt: "xl",
	    mb: cssActionsMB,
	    flexShrink: 0
	  }, actions.map(headerAction => /*#__PURE__*/React__default.createElement(ActionButton$1, {
	    action: headerAction,
	    key: headerAction.name,
	    actionPerformed: actionPerformed,
	    resourceId: resource.id,
	    recordId: record && record.id
	  }, /*#__PURE__*/React__default.createElement(Button, {
	    as: "span",
	    mr: action.showInDrawer ? 'default' : '',
	    ml: !action.showInDrawer ? 'default' : '',
	    mb: "default",
	    variant: headerAction.name === 'new' ? 'primary' : undefined,
	    size: cssActionButtonSize
	  }, headerAction.icon ? /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: headerAction.icon
	  }) : null, headerAction.label))), toggleFilter && /*#__PURE__*/React__default.createElement(Button, {
	    onClick: toggleFilter,
	    ml: "default"
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "SettingsAdjust"
	  }), translateButton('filter', resource.id)))));
	};

	const New = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      } // if record has id === has been created


	      if (response.data.record.id) {
	        handleChange({
	          params: {},
	          populated: {},
	          errors: {}
	        });
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default.createElement(Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default.createElement(DrawerContent, null, action?.showInDrawer ? /*#__PURE__*/React__default.createElement(ActionHeader, props) : null, resource.editProperties.map(property => /*#__PURE__*/React__default.createElement(BasePropertyComponent, {
	    key: property.name,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default.createElement(DrawerFooter, null, /*#__PURE__*/React__default.createElement(Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	const Edit$9 = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default.createElement(Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default.createElement(DrawerContent, null, action?.showInDrawer ? /*#__PURE__*/React__default.createElement(ActionHeader, props) : null, resource.editProperties.map(property => /*#__PURE__*/React__default.createElement(BasePropertyComponent, {
	    key: property.name,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default.createElement(DrawerFooter, null, /*#__PURE__*/React__default.createElement(Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const Show$8 = props => {
	  const {
	    resource,
	    record,
	    action
	  } = props;
	  const properties = resource.showProperties;
	  return /*#__PURE__*/React__default.createElement(DrawerContent, null, action?.showInDrawer ? /*#__PURE__*/React__default.createElement(ActionHeader, props) : null, properties.map(property => /*#__PURE__*/React__default.createElement(BasePropertyComponent, {
	    key: property.name,
	    where: "show",
	    property: property,
	    resource: resource,
	    record: record
	  })));
	};

	class SortLink extends React__default.PureComponent {
	  constructor(props) {
	    super(props);
	    this.isActive = this.isActive.bind(this);
	  }

	  isActive() {
	    const {
	      sortBy,
	      property
	    } = this.props;
	    return sortBy === property.name;
	  }

	  render() {
	    const {
	      property,
	      location,
	      direction
	    } = this.props;
	    const query = new URLSearchParams(location.search);
	    const oppositeDirection = this.isActive() && direction === 'asc' ? 'desc' : 'asc';
	    const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`;
	    query.set('direction', oppositeDirection);
	    query.set('sortBy', property.name);
	    return /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, {
	      to: {
	        search: query.toString()
	      },
	      className: cssClass('SortLink')
	    }, property.label, this.isActive() ? /*#__PURE__*/React__default.createElement(Icon$1, {
	      icon: sortedByIcon,
	      color: "primary100",
	      ml: "default"
	    }) : '');
	  }

	}

	var SortLink$1 = reactRouterDom.withRouter(SortLink);

	const PropertyHeader = props => {
	  const {
	    property,
	    titleProperty,
	    display
	  } = props;
	  const isMain = property.name === titleProperty.name;
	  return /*#__PURE__*/React__default.createElement(TableCell, {
	    className: isMain ? 'main' : undefined,
	    display: display
	  }, property.isSortable ? /*#__PURE__*/React__default.createElement(SortLink$1, props) : property.label);
	};

	/**
	 * @memberof RecordsTableHeader
	 * @alias RecordsTableHeader
	 */

	const display = isTitle => [isTitle ? 'table-cell' : 'none', isTitle ? 'table-cell' : 'none', 'table-cell', 'table-cell'];
	/**
	 * Prints `thead` section for table with records.
	 *
	 * @component
	 * @subcategory Application
	 * @example <caption>List with 2 properties</caption>
	 * const properties = [{
	 *   label: 'First Name',
	 *   name: 'firstName',
	 *   isSortable: true,
	 * }, {
	 *   label: 'Last Name',
	 *   name: 'lastName',
	 * }]
	 * return (
	 * <Box py="xl">
	 *   <Table>
	 *    <RecordsTableHeader
	 *      properties={properties}
	 *      titleProperty={properties[0]}
	 *      sortBy={'firstName'}
	 *      direction={'asc'}
	 *    />
	 *    <TableBody>
	 *      <TableRow>
	 *        <TableCell>John</TableCell>
	 *        <TableCell>Doe</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *      <TableRow>
	 *        <TableCell>Max</TableCell>
	 *        <TableCell>Kodaly</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *    </TableBody>
	 *   </Table>
	 * </Box>
	 * )
	 */

	const RecordsTableHeader = props => {
	  const {
	    titleProperty,
	    properties,
	    sortBy,
	    direction,
	    onSelectAll,
	    selectedAll
	  } = props;
	  return /*#__PURE__*/React__default.createElement(TableHead, null, /*#__PURE__*/React__default.createElement(TableRow, null, /*#__PURE__*/React__default.createElement(TableCell, null, onSelectAll ? /*#__PURE__*/React__default.createElement(CheckBox, {
	    style: {
	      marginLeft: 5
	    },
	    onChange: () => onSelectAll(),
	    checked: selectedAll
	  }) : null), properties.map(property => /*#__PURE__*/React__default.createElement(PropertyHeader, {
	    display: display(property.isTitle),
	    key: property.name,
	    titleProperty: titleProperty,
	    property: property,
	    sortBy: sortBy,
	    direction: direction
	  })), /*#__PURE__*/React__default.createElement(TableCell, {
	    key: "actions",
	    style: {
	      width: 80
	    }
	  })));
	};

	const RecordInList = props => {
	  const {
	    resource,
	    record: recordFromProps,
	    actionPerformed,
	    isLoading,
	    onSelect,
	    isSelected
	  } = props;
	  const [record, setRecord] = React.useState(recordFromProps);
	  const history = reactRouterDom.useHistory();
	  React.useEffect(() => {
	    setRecord(recordFromProps);
	  }, [recordFromProps]);
	  const {
	    recordActions
	  } = record;
	  const show = record.recordActions.find(({
	    name
	  }) => name === 'show');
	  const edit = record.recordActions.find(({
	    name
	  }) => name === 'edit');
	  const actionName = show && show.name || edit && edit.name;

	  const handleClick = event => {
	    const h = new ViewHelpers();
	    const targetTagName = event.target.tagName.toLowerCase();

	    if (actionName && targetTagName !== 'a' && targetTagName !== 'button' && targetTagName !== 'svg') {
	      const actionUrl = h.recordActionUrl({
	        resourceId: resource.id,
	        recordId: record.id,
	        actionName,
	        search: window.location.search
	      });
	      history.push(actionUrl);
	    }
	  };

	  const handleActionPerformed = React.useCallback(actionResponse => {
	    if (actionResponse.record && !actionResponse.redirectUrl) {
	      setRecord(mergeRecordResponse(record, actionResponse));
	    } else if (actionPerformed) {
	      actionPerformed(actionResponse);
	    }
	  }, [actionPerformed]);
	  return /*#__PURE__*/React__default.createElement(TableRow, {
	    onClick: event => handleClick(event),
	    "data-id": record.id
	  }, /*#__PURE__*/React__default.createElement(TableCell, {
	    className: isSelected ? 'selected' : 'not-selected'
	  }, onSelect && record.bulkActions.length ? /*#__PURE__*/React__default.createElement(CheckBox, {
	    onChange: () => onSelect(record),
	    checked: isSelected
	  }) : null), resource.listProperties.map(property => /*#__PURE__*/React__default.createElement(TableCell, {
	    style: {
	      cursor: 'pointer'
	    },
	    key: property.name,
	    "data-property-name": property.name,
	    display: display(property.isTitle)
	  }, isLoading ? /*#__PURE__*/React__default.createElement(Placeholder, {
	    style: {
	      height: 14
	    }
	  }) : /*#__PURE__*/React__default.createElement(BasePropertyComponent, {
	    key: property.name,
	    where: "list",
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default.createElement(TableCell, {
	    key: "options"
	  }, recordActions.length ? /*#__PURE__*/React__default.createElement(DropDown, null, /*#__PURE__*/React__default.createElement(DropDownTrigger, {
	    py: "sm",
	    px: "xl"
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "OverflowMenuHorizontal",
	    color: "grey100"
	  })), /*#__PURE__*/React__default.createElement(DropDownMenu, null, recordActions.map(action => /*#__PURE__*/React__default.createElement(DropDownItem, {
	    key: action.name
	  }, /*#__PURE__*/React__default.createElement(ActionButton$1, {
	    action: action,
	    resourceId: resource.id,
	    recordId: record.id,
	    actionPerformed: handleActionPerformed
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: action.icon
	  }), action.label))))) : ''));
	};

	const NoRecordsOriginal = props => {
	  const {
	    resource
	  } = props;
	  const h = new ViewHelpers();
	  const {
	    translateButton,
	    translateMessage
	  } = useTranslation();
	  const canCreate = resource.resourceActions.find(a => a.name === 'new');
	  const newAction = h.resourceActionUrl({
	    resourceId: resource.id,
	    actionName: 'new'
	  });
	  return /*#__PURE__*/React__default.createElement(InfoBox, {
	    title: "No records"
	  }, /*#__PURE__*/React__default.createElement(Text, null, translateMessage('noRecordsInResource', resource.id)), canCreate ? /*#__PURE__*/React__default.createElement(Text, {
	    mt: "xl"
	  }, /*#__PURE__*/React__default.createElement(reactRouterDom.Link, {
	    to: newAction
	  }, /*#__PURE__*/React__default.createElement(Button, {
	    variant: "primary",
	    as: "span"
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Add"
	  }), translateButton('createFirstRecord', resource.id)))) : '');
	}; // This hack prevents rollup from throwing an error


	const NoRecords = allowOverride(NoRecordsOriginal, 'NoRecords');

	const getBulkActionsFromRecords = records => {
	  const actions = Object.values(records.reduce((memo, record) => ({ ...memo,
	    ...record.bulkActions.reduce((actionsMemo, action) => ({ ...actionsMemo,
	      [action.name]: action
	    }), {})
	  }), {}));
	  return actions;
	};

	const SelectedRecords = props => {
	  const {
	    resource,
	    selectedRecords
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();

	  if (!selectedRecords || !selectedRecords.length) {
	    return null;
	  }

	  const bulkActions = getBulkActionsFromRecords(selectedRecords);
	  return /*#__PURE__*/React__default.createElement(TableCaption, null, /*#__PURE__*/React__default.createElement(Text, {
	    as: "span",
	    mr: "lg"
	  }, translateLabel('selectedRecords', resource.id, {
	    selected: selectedRecords.length
	  })), bulkActions.map(action => /*#__PURE__*/React__default.createElement(ActionButton$1, {
	    action: action,
	    key: action.name,
	    resourceId: resource.id,
	    recordIds: selectedRecords.map(records => records.id)
	  }, /*#__PURE__*/React__default.createElement(Button, {
	    variant: "text",
	    size: "sm"
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: action.icon
	  }), action.label))));
	};

	const RecordsTable = props => {
	  const {
	    resource,
	    records,
	    actionPerformed,
	    sortBy,
	    direction,
	    isLoading,
	    onSelect,
	    selectedRecords,
	    onSelectAll
	  } = props;

	  if (!records.length) {
	    if (isLoading) {
	      return /*#__PURE__*/React__default.createElement(Loader, null);
	    }

	    return /*#__PURE__*/React__default.createElement(NoRecords, {
	      resource: resource
	    });
	  }

	  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
	  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
	  return /*#__PURE__*/React__default.createElement(Table, null, /*#__PURE__*/React__default.createElement(SelectedRecords, {
	    resource: resource,
	    selectedRecords: selectedRecords
	  }), /*#__PURE__*/React__default.createElement(RecordsTableHeader, {
	    properties: resource.listProperties,
	    titleProperty: resource.titleProperty,
	    direction: direction,
	    sortBy: sortBy,
	    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
	    selectedAll: selectedAll
	  }), /*#__PURE__*/React__default.createElement(TableBody, null, records.map(record => /*#__PURE__*/React__default.createElement(RecordInList, {
	    record: record,
	    resource: resource,
	    key: record.id,
	    actionPerformed: actionPerformed,
	    isLoading: isLoading,
	    onSelect: onSelect,
	    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
	  }))));
	};

	const List$7 = ({
	  resource,
	  setTag
	}) => {
	  const {
	    records,
	    loading,
	    direction,
	    sortBy,
	    page,
	    total,
	    fetchData,
	    perPage
	  } = useRecords(resource.id);
	  const {
	    selectedRecords,
	    handleSelect,
	    handleSelectAll,
	    setSelectedRecords
	  } = useSelectedRecords(records);
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (setTag) {
	      setTag(total.toString());
	    }
	  }, [total]);
	  React.useEffect(() => {
	    setSelectedRecords([]);
	  }, [resource.id]);
	  React.useEffect(() => {
	    const search = new URLSearchParams(location.search);

	    if (search.get(REFRESH_KEY)) {
	      setSelectedRecords([]);
	    }
	  }, [location.search]);

	  const handleActionPerformed = () => fetchData();

	  const handlePaginationChange = pageNumber => {
	    const search = new URLSearchParams(location.search);
	    search.set('page', pageNumber.toString());
	    history.push({
	      search: search.toString()
	    });
	  };

	  return /*#__PURE__*/React__default.createElement(Box, {
	    variant: "white"
	  }, /*#__PURE__*/React__default.createElement(RecordsTable, {
	    resource: resource,
	    records: records,
	    actionPerformed: handleActionPerformed,
	    onSelect: handleSelect,
	    onSelectAll: handleSelectAll,
	    selectedRecords: selectedRecords,
	    direction: direction,
	    sortBy: sortBy,
	    isLoading: loading
	  }), /*#__PURE__*/React__default.createElement(Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, /*#__PURE__*/React__default.createElement(Pagination, {
	    page: page,
	    perPage: perPage,
	    total: total,
	    onChange: handlePaginationChange
	  })));
	};

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const BulkDelete = props => {
	  const {
	    resource,
	    records,
	    action,
	    addNotice,
	    history
	  } = props;
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();

	  if (!records) {
	    return /*#__PURE__*/React__default.createElement(Text, null, translateMessage('pickSomeFirstToRemove', resource.id));
	  }

	  const handleClick = () => {
	    const api = new ApiClient();
	    setLoading(true);
	    const recordIds = records.map(r => r.id);
	    api.bulkAction({
	      resourceId: resource.id,
	      actionName: action.name,
	      recordIds,
	      method: 'post'
	    }).then(response => {
	      setLoading(false);

	      if (response.data.notice) {
	        addNotice(response.data.notice);
	      }

	      if (response.data.redirectUrl) {
	        const search = new URLSearchParams(window.location.search); // bulk function have recordIds in the URL so it has to be stripped before redirect

	        search.delete('recordIds');
	        history.push(appendForceRefresh(response.data.redirectUrl, search.toString()));
	      }
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('bulkDeleteError', resource.id),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(DrawerContent, null, action?.showInDrawer ? /*#__PURE__*/React__default.createElement(ActionHeader, _extends_1({
	    omitActions: true
	  }, props)) : null, /*#__PURE__*/React__default.createElement(MessageBox, {
	    mb: "xxl",
	    variant: "danger",
	    message: translateMessage('theseRecordsWillBeRemoved', resource.id, {
	      count: records.length
	    })
	  }), /*#__PURE__*/React__default.createElement(Table, null, /*#__PURE__*/React__default.createElement(TableBody, null, records.map(record => /*#__PURE__*/React__default.createElement(TableRow, {
	    key: record.id
	  }, /*#__PURE__*/React__default.createElement(TableCell, null, /*#__PURE__*/React__default.createElement(BasePropertyComponent, {
	    where: "list",
	    property: resource.titleProperty,
	    resource: resource,
	    record: record
	  }))))))), /*#__PURE__*/React__default.createElement(DrawerFooter, null, /*#__PURE__*/React__default.createElement(Button, {
	    variant: "primary",
	    size: "lg",
	    onClick: handleClick
	  }, loading ? /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('confirmRemovalMany', resource.id, {
	    count: records.length
	  }))));
	};

	var bulkDelete = withNotice(reactRouter.withRouter(BulkDelete));



	var actions = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'new': New,
		edit: Edit$9,
		show: Show$8,
		list: List$7,
		bulkDelete: bulkDelete
	});

	/**
	 * Component which renders all the default and custom actions for both the Resource and the Record.
	 *
	 * It passes all props down to the actual Action component.
	 *
	 * Example of creating your own actions:
	 * ```
	 * // AdminBro options
	 * const AdminBroOptions = {
	 *   resources: [
	 *      resource,
	 *      options: {
	 *        actions: {
	 *           myNewAction: {
	 *             label: 'amazing action',
	 *             icon: 'Add',
	 *             inVisible: (resource, record) => record.param('email') !== '',
	 *             actionType: 'record',
	 *             component: AdminBro.bundle('./my-new-action'),
	 *             handler: (request, response, data) => {
	 *               return {
	 *                  ...
	 *               }
	 *             }
	 *           }
	 *        }
	 *      }
	 *   ]
	 * }
	 * ```
	 *
	 * ```
	 * // ./my-new-action.jsx
	 * import { Box } from 'admin-bro'
	 *
	 * const MyNewAction = (props) => {
	 *   const { resource, action, record } = props
	 *   // do something with the props and render action
	 *   return (
	 *     <Box>Some Action Content</Box>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @name BaseActionComponent
	 * @subcategory Application
	 */
	const BaseActionComponent = props => {
	  const {
	    resource,
	    action,
	    record,
	    records,
	    setTag
	  } = props;
	  const documentationLink = [DOCS, 'BaseAction.html'].join('/');
	  const {
	    translateMessage
	  } = useTranslation();
	  let Action = actions[action.name];

	  if (action.component) {
	    Action = AdminBro.UserComponents[action.component];
	  }

	  if (Action) {
	    return /*#__PURE__*/React__default.createElement(ErrorBoundary, null, /*#__PURE__*/React__default.createElement(Action, {
	      action: action,
	      resource: resource,
	      record: record,
	      records: records,
	      setTag: setTag
	    }));
	  }

	  return Action || /*#__PURE__*/React__default.createElement(MessageBox, {
	    variant: "danger"
	  }, translateMessage('noActionComponent'), /*#__PURE__*/React__default.createElement(reactI18next.Trans, {
	    key: "messages.buttons.seeTheDocumentation"
	  }, "See:", /*#__PURE__*/React__default.createElement(Link, {
	    ml: "default",
	    href: documentationLink
	  }, "the documentation")));
	};

	/**
	 * @class
	 * Prints error message
	 *
	 * @component
	 * @private
	 * @example
	 * return (
	 * <ErrorMessageBox title={'Some error'}>
	 *   <p>Text below the title</p>
	 * </ErrorMessageBox>
	 * )
	 */
	const ErrorMessageBox = props => {
	  const {
	    children,
	    title,
	    testId
	  } = props;
	  return /*#__PURE__*/React__default.createElement(MessageBox, {
	    "data-testid": testId,
	    message: title
	  }, /*#__PURE__*/React__default.createElement(Text, null, children));
	};

	const NoResourceError = props => {
	  const {
	    resourceId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoResourceError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default.createElement(Text, null, translateMessage('error404Resource', resourceId, {
	    resourceId
	  })));
	};

	const NoActionError = props => {
	  const {
	    resourceId,
	    actionName
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoActionError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default.createElement(Text, null, translateMessage('error404Action', resourceId, {
	    resourceId,
	    actionName
	  })));
	};

	const NoRecordError = props => {
	  const {
	    resourceId,
	    recordId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default.createElement(MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoRecordError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default.createElement(Text, null, translateMessage('error404Record', resourceId, {
	    resourceId,
	    recordId
	  })));
	};

	const StyledWrapper = styled__default(Box).withConfig({
	  displayName: "wrapper__StyledWrapper",
	  componentId: "gd2y70-0"
	})(["& ", "{background:", ";padding:", ";overflow:visible;}& ", "{background:", ";padding:0 ", " ", ";}"], DrawerContent, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, DrawerFooter, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.xxl);

	const Wrapper$2 = props => {
	  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  const {
	    children,
	    variant,
	    color,
	    ...rest
	  } = props;
	  return /*#__PURE__*/React__default.createElement(StyledWrapper, _extends_1({}, rest, {
	    variant: "grey",
	    mx: "auto"
	  }), children);
	};

	const parseQuery = location => {
	  const filter = {};
	  const query = new URLSearchParams(location.search);

	  for (const entry of query.entries()) {
	    const [key, value] = entry;

	    if (key.match('filters.')) {
	      filter[key.replace('filters.', '')] = value;
	    }
	  }

	  return filter;
	};

	const FilterContainer = props => {
	  const {
	    resource,
	    isVisible,
	    toggleFilter
	  } = props;
	  const properties = resource.filterProperties;
	  const location = reactRouterDom.useLocation();
	  const [filter, setFilter] = React.useState(parseQuery(location));
	  const match = reactRouterDom.useRouteMatch();
	  const history = reactRouterDom.useHistory();
	  const {
	    translateLabel,
	    translateButton
	  } = useTranslation();
	  React.useEffect(() => setFilter({}), [match.params.resourceId]);

	  const handleSubmit = event => {
	    event.preventDefault();
	    const search = new URLSearchParams(window.location.search);
	    Object.keys(filter).forEach(key => {
	      if (filter[key] !== '') {
	        search.set(`filters.${key}`, filter[key]);
	      } else {
	        search.delete(`filters.${key}`);
	      }
	    });
	    search.set('page', '1');
	    history.push(`${history.location.pathname}?${search.toString()}`);
	    return false;
	  };

	  const resetFilter = event => {
	    event.preventDefault();
	    const filteredSearch = new URLSearchParams();
	    const search = new URLSearchParams(window.location.search);

	    for (const key of search.keys()) {
	      if (!key.match('filters.')) {
	        filteredSearch.set(key, search.get(key));
	      }
	    }

	    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
	    history.push(history.location.pathname + query);
	    setFilter({});
	  };

	  const handleChange = (propertyName, value) => {
	    if (propertyName.params) {
	      throw new Error('you can not pass RecordJSON to filters');
	    }

	    setFilter({ ...filter,
	      [propertyName]: value
	    });
	  };

	  return /*#__PURE__*/React__default.createElement(Drawer, {
	    variant: "filter",
	    isHidden: !isVisible,
	    as: "form",
	    onSubmit: handleSubmit
	  }, /*#__PURE__*/React__default.createElement(DrawerContent, null, /*#__PURE__*/React__default.createElement(H3, null, /*#__PURE__*/React__default.createElement(Button, {
	    type: "button",
	    size: "icon",
	    rounded: true,
	    mr: "lg",
	    onClick: () => toggleFilter()
	  }, /*#__PURE__*/React__default.createElement(Icon$1, {
	    icon: "ChevronRight",
	    color: "white"
	  })), translateLabel('filters', resource.id)), /*#__PURE__*/React__default.createElement(Box, {
	    my: "x3"
	  }, properties.map(property => /*#__PURE__*/React__default.createElement(BasePropertyComponent, {
	    key: property.name,
	    where: "filter",
	    onChange: handleChange,
	    property: property,
	    filter: filter,
	    resource: resource
	  })))), /*#__PURE__*/React__default.createElement(DrawerFooter, null, /*#__PURE__*/React__default.createElement(Button, {
	    variant: "primary",
	    size: "lg"
	  }, translateButton('applyChanges', resource.id)), /*#__PURE__*/React__default.createElement(Button, {
	    variant: "text",
	    size: "lg",
	    onClick: resetFilter,
	    type: "button",
	    color: "white"
	  }, translateButton('resetFilter', resource.id))));
	};



	var AppComponents = /*#__PURE__*/Object.freeze({
		__proto__: null,
		ActionButton: ActionButton$1,
		ActionHeader: ActionHeader,
		BaseActionComponent: BaseActionComponent,
		Breadcrumbs: Breadcrumbs,
		DefaultDashboard: Dashboard,
		ErrorBoundary: ErrorBoundary,
		Filter: FilterContainer,
		LoggedIn: LoggedIn$1,
		Notice: Notice,
		PropertyHeader: PropertyHeader,
		RecordInList: RecordInList,
		RecordsTableHeader: RecordsTableHeader,
		RecordsTable: RecordsTable,
		TopBar: TopBar,
		Version: Version,
		SortLink: SortLink$1,
		NoRecords: NoRecords
	});

	/**
	 * @alias DrawerPortalProps
	 * @memberof DrawerPortal
	 */

	const DRAWER_PORTAL_ID = 'drawerPortal';
	/**
	 * Shows all of its children in a Drawer on the right.
	 * Instead of rendering it's own {@link Drawer} component it reuses
	 * the global Drawer via React Portal.
	 *
	 * @component
	 * @subcategory Application
	 */

	const DrawerPortal = ({
	  children,
	  width
	}) => {
	  const [drawerElement, setDrawerElement] = React.useState(window.document.getElementById(DRAWER_PORTAL_ID));

	  if (!drawerElement && window) {
	    const innerWrapper = window.document.createElement('div');
	    const DrawerWrapper = /*#__PURE__*/React__default.createElement(styled.ThemeProvider, {
	      theme: window.THEME
	    }, /*#__PURE__*/React__default.createElement(Drawer, {
	      id: DRAWER_PORTAL_ID,
	      className: "hidden"
	    }));
	    window.document.body.appendChild(innerWrapper);
	    reactDom.render(DrawerWrapper, innerWrapper, () => {
	      setDrawerElement(window.document.getElementById(DRAWER_PORTAL_ID));
	    });
	  }

	  React.useEffect(() => {
	    if (drawerElement) {
	      drawerElement.classList.remove('hidden');

	      if (width) {
	        drawerElement.style.width = Array.isArray(width) ? width[0].toString() : width.toString();
	      }

	      return () => {
	        drawerElement.style.width = DEFAULT_DRAWER_WIDTH;
	        drawerElement.classList.add('hidden');
	      };
	    }

	    return () => undefined;
	  }, [drawerElement]);

	  if (!drawerElement) {
	    return null;
	  }

	  return /*#__PURE__*/reactDom.createPortal(children, drawerElement);
	};

	const api$4 = new ApiClient();

	const RecordAction = () => {
	  const [record, setRecord] = React.useState();
	  const [loading, setLoading] = React.useState(true);
	  const match = reactRouter.useRouteMatch();
	  const resources = reactRedux.useSelector(state => state.resources);
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const {
	    actionName,
	    recordId,
	    resourceId
	  } = match.params;
	  const resource = resources.find(r => r.id === resourceId);
	  const action = record && record.recordActions.find(r => r.name === actionName);

	  const fetchRecord = () => {
	    setLoading(true);
	    api$4.recordAction(match.params).then(response => {
	      setLoading(false);
	      setRecord(response.data.record);
	    }).catch(error => {
	      addNotice({
	        message: translateMessage('errorFetchingRecord', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecord();
	  }, [actionName, recordId, resourceId]);
	  const handleActionPerformed = React.useCallback((oldRecord, response) => {
	    if (response.record) {
	      setRecord(mergeRecordResponse(oldRecord, response));
	    } else {
	      fetchRecord();
	    }
	  }, [fetchRecord]);

	  if (!resource) {
	    return /*#__PURE__*/React__default.createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  if (loading) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return actionFromResource?.showInDrawer ? /*#__PURE__*/React__default.createElement(DrawerPortal, null, /*#__PURE__*/React__default.createElement(Loader, null)) : /*#__PURE__*/React__default.createElement(Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default.createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (!record) {
	    return /*#__PURE__*/React__default.createElement(NoRecordError, {
	      resourceId: resourceId,
	      recordId: recordId
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default.createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default.createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      record: record
	    }));
	  }

	  return /*#__PURE__*/React__default.createElement(Wrapper$2, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default.createElement(ActionHeader, {
	    resource: resource,
	    action: action,
	    record: record,
	    actionPerformed: response => handleActionPerformed(record, response)
	  }), /*#__PURE__*/React__default.createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    record: record
	  }));
	};

	const ResourceAction = props => {
	  const {
	    resources,
	    match
	  } = props;
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default.createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const action = resource.resourceActions.find(r => r.name === actionName);

	  if (!action) {
	    return /*#__PURE__*/React__default.createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default.createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default.createElement(BaseActionComponent, {
	      action: action,
	      resource: resource
	    }));
	  }

	  return /*#__PURE__*/React__default.createElement(Wrapper$2, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default.createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }), /*#__PURE__*/React__default.createElement(BaseActionComponent, {
	    action: action,
	    resource: resource
	  }));
	};

	const mapStateToProps$2 = state => ({
	  resources: state.resources
	});

	var ResourceAction$1 = reactRedux.connect(mapStateToProps$2)(ResourceAction);

	const api$5 = new ApiClient();

	const BulkAction = () => {
	  const resources = reactRedux.useSelector(state => state.resources);
	  const match = reactRouter.useRouteMatch();
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage
	  } = useTranslation();
	  const addNotice = useNotice();
	  const location = reactRouter.useLocation();
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = resources.find(r => r.id === resourceId);

	  const fetchRecords = () => {
	    const recordIdsString = new URLSearchParams(location.search).get('recordIds');
	    const recordIds = recordIdsString ? recordIdsString.split(',') : [];
	    setLoading(true);
	    return api$5.bulkAction({
	      resourceId,
	      recordIds,
	      actionName
	    }).then(response => {
	      setLoading(false);
	      setRecords(response.data.records);
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecords();
	  }, [match.params.resourceId, match.params.actionName]);

	  if (!resource) {
	    return /*#__PURE__*/React__default.createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  if (!records && !loading) {
	    return /*#__PURE__*/React__default.createElement(ErrorMessageBox, {
	      title: "No records"
	    }, /*#__PURE__*/React__default.createElement("p", null, translateMessage('noRecordsSelected', resourceId)));
	  }

	  const action = getBulkActionsFromRecords(records || []).find(r => r.name === actionName);

	  if (loading) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return actionFromResource?.showInDrawer ? /*#__PURE__*/React__default.createElement(DrawerPortal, null, /*#__PURE__*/React__default.createElement(Loader, null)) : /*#__PURE__*/React__default.createElement(Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default.createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default.createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default.createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      records: records
	    }));
	  }

	  return /*#__PURE__*/React__default.createElement(Wrapper$2, {
	    width: action.containerWidth
	  }, !action?.showInDrawer ? /*#__PURE__*/React__default.createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }) : '', /*#__PURE__*/React__default.createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    records: records
	  }));
	};

	class Page extends React__default.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      pages,
	      match
	    } = this.props;
	    const {
	      params
	    } = match;
	    const {
	      pageName
	    } = params;
	    const {
	      isClient
	    } = this.state;
	    const currentPage = pages.find(page => page.name === pageName);

	    if (!currentPage) {
	      return /*#__PURE__*/React__default.createElement(ErrorMessageBox, {
	        title: "There is no page of given name"
	      }, /*#__PURE__*/React__default.createElement("p", null, "Page:", /*#__PURE__*/React__default.createElement("b", null, ` "${pageName}" `), "does not exist."));
	    }

	    const Component = AdminBro.UserComponents[currentPage.component];

	    if (!Component || !isClient) {
	      return /*#__PURE__*/React__default.createElement(ErrorMessageBox, {
	        title: "No component specified"
	      }, /*#__PURE__*/React__default.createElement("p", null, "You have to specify component which will render this Page"));
	    }

	    return /*#__PURE__*/React__default.createElement(ErrorBoundary, null, /*#__PURE__*/React__default.createElement(Component, null));
	  }

	}

	const mapStateToProps$3 = state => ({
	  pages: state.pages
	});

	var Page$1 = reactRedux.connect(mapStateToProps$3)(Page);

	var queryHasFilter = (queryString => {
	  const query = new URLSearchParams(queryString);

	  for (const key of query.keys()) {
	    if (key.match('filters.')) {
	      return true;
	    }
	  }

	  return false;
	});

	const getAction = resource => {
	  const h = new ViewHelpers();
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceActionMatch = reactRouterDom.useRouteMatch(resourceActionUrl);
	  const recordActionMatch = reactRouterDom.useRouteMatch(recordActionUrl);
	  const bulkActionMatch = reactRouterDom.useRouteMatch(bulkActionUrl);
	  const action = resourceActionMatch?.params.actionName || recordActionMatch?.params.actionName || bulkActionMatch?.params.actionName;
	  return action ? resource.actions.find(a => a.name === action) : undefined;
	};

	const ResourceAction$2 = props => {
	  const {
	    resources,
	    match,
	    location
	  } = props;
	  const {
	    resourceId
	  } = match.params;
	  const [filterVisible, setFilerVisible] = React.useState(queryHasFilter(location.search));
	  const [tag, setTag] = React.useState('');
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default.createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const realEndAction = getAction(resource);

	  if (realEndAction && !realEndAction.showInDrawer) {
	    return null;
	  }

	  const listActionName = 'list';
	  const listAction = resource.resourceActions.find(r => r.name === listActionName);

	  if (!listAction) {
	    return /*#__PURE__*/React__default.createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: listActionName
	    });
	  }

	  const toggleFilter = listAction.showFilter ? () => setFilerVisible(!filterVisible) : undefined;
	  return /*#__PURE__*/React__default.createElement(Box, {
	    variant: "grey",
	    width: listAction.containerWidth,
	    mx: "auto"
	  }, /*#__PURE__*/React__default.createElement(ActionHeader, {
	    resource: resource,
	    action: listAction,
	    tag: tag,
	    toggleFilter: toggleFilter
	  }), /*#__PURE__*/React__default.createElement(BaseActionComponent, {
	    action: listAction,
	    resource: resource,
	    setTag: setTag
	  }), listAction.showFilter ? /*#__PURE__*/React__default.createElement(FilterContainer, {
	    resource: resource,
	    isVisible: filterVisible,
	    toggleFilter: () => {
	      setFilerVisible(!filterVisible);
	    }
	  }) : '');
	};

	const mapStateToProps$4 = state => ({
	  resources: state.resources
	});

	var Resource = reactRedux.connect(mapStateToProps$4)(ResourceAction$2);

	const DesignSystem = () => /*#__PURE__*/React__default.createElement("p", null, "design system");

	styled.withTheme(DesignSystem);

	/* eslint-disable react/no-children-prop */
	const GlobalStyle = styled.createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: ${({
  theme
}) => theme.colors.grey100}
  }
`;

	const App = () => {
	  const [sidebarVisible, toggleSidebar] = React.useState(false);
	  const h = new ViewHelpers();
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const pageName = ':pageName';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceUrl = h.resourceUrl({
	    resourceId
	  });
	  const pageUrl = h.pageUrl(pageName);
	  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(GlobalStyle, null), /*#__PURE__*/React__default.createElement(Box, {
	    height: "100%",
	    flex: true
	  }, sidebarVisible ? /*#__PURE__*/React__default.createElement(Overlay, {
	    onClick: () => toggleSidebar(!sidebarVisible)
	  }) : null, /*#__PURE__*/React__default.createElement(Sidebar, {
	    isVisible: sidebarVisible
	  }), /*#__PURE__*/React__default.createElement(Box, {
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column",
	    overflowY: "auto",
	    bg: "bg"
	  }, /*#__PURE__*/React__default.createElement(TopBar, {
	    toggleSidebar: () => toggleSidebar(!sidebarVisible)
	  }), /*#__PURE__*/React__default.createElement(Box, {
	    position: "absolute",
	    top: 0
	  }, /*#__PURE__*/React__default.createElement(Notice, null)), /*#__PURE__*/React__default.createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
	    path: h.dashboardUrl(),
	    exact: true,
	    component: Dashboard$2
	  }), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
	    path: resourceUrl,
	    component: Resource
	  }), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
	    path: pageUrl,
	    exact: true,
	    component: Page$1
	  })), /*#__PURE__*/React__default.createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
	    path: recordActionUrl,
	    component: RecordAction
	  }), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
	    path: resourceActionUrl,
	    component: ResourceAction$1
	  }), /*#__PURE__*/React__default.createElement(reactRouterDom.Route, {
	    path: bulkActionUrl,
	    component: BulkAction
	  })))));
	};

	/* eslint-disable max-len */

	/**
	 * @interface Theme
	 * @subcategory Frontend
	 * @description
	 * Entire AdminBro interface is build with
	 * [styled-components]{@link https://styled-components.com/} backed by
	 * [styled-system]{@link https://styled-system.com/}. The core of
	 * the style information is the Theme. It is base on the
	 * [Theme Specification]{@link https://styled-system.com/theme-specification/} and
	 * it is used by almost all the components provided by AdminBro.
	 *
	 * So let's say you would like to create a box with the same background as our
	 * primary100 color. This is one way of achieving that:
	 *
	 * ```javascript
	 * import styled from 'styled-components'
	 * import { Box } from 'admin-bro'
	 *
	 * const MyBlueBox = styled(Box)`
	 *   background: ${({ theme }) => theme.colors.primary100};
	 *   // other css styles you want to override.
	 * `
	 * ```
	 *
	 * But, since AdminBro uses [styled-system]{@link https://styled-system.com/}, you also can achieve
	 * a similar result by passing a `bg` Prop to the [Box Component]{@link Box},
	 * everything because Box supports all the {@link ColorProps}.
	 *
	 * ```javascript
	 * import { Box } from 'admin-bro'
	 *
	 * const ComponentWhereIWantToUseBlueBox = () => (
	 *   <Box bg="primary100">
	 *   ...
	 *   </Box>
	 * )
	 * ```
	 *
	 * The last way of accessing theme is to use withTheme HOC provided by
	 * [styled-components]{@link https://styled-components.com/}
	 *
	 * ```
	 * import { withTheme } from 'styled-components'
	 *
	 *
	 * const MyComponent = (props) => {
	 *   const { theme } = props
	 *   // theme.colors.primary100
	 * }
	 *
	 * export default withTheme(MyComponent)
	 *
	 * ```
	 *
	 * {@link ColorProps} is only one of the extensions we provided. Take a look at the documentation
	 * below to see all possible options, but let me give you one last example:
	 *
	 * ```
	 * import { Box } from 'admin-bro'
	 *
	 * const ComponentWhereIWantToUseResponsiveStyle = () => (
	 *   <Box flex flexDirection="column">
	 *     <Box width={[1, 1/2, 1/3]}>Sidebar</Box>
	 *     <Box width={[1, 1/2, 2/3]}>Content</Box>
	 *   </Box>
	 * )
	 * ```
	 *
	 * Above we defined that the Sidebar box should have 100% width until viewport reach the first
	 * breakpoint, then 50% (until the next breakpoint) and then 1/3rd of the page for the remaining 2
	 * breakpoints.
	 *
	 * You can read more about responsive features on styled-system page
	 * https://styled-system.com/responsive-styles
	 *
	 * <style>
	 * .shadow-div { display: block; width: 80px; height: 80px;}
	 * .space-box { display: inline-block; height: 20px; background: #4268F6; vertical-align: middle;}
	 * </style>
	 */

	/**
	 * Color palette.
	 *
	 * @memberof Theme
	 * @alias colors
	 * @property {string} primary100=#4268F6      <div style="background: #4268F6; height: 20px;" />
	 * @property {string} primary80=#6483F8     <div style="background: #6483F8; height: 20px;" />
	 * @property {string} primary60=#879FFA     <div style="background: #879FFA; height: 20px;" />
	 * @property {string} primary40=#A9BAFA     <div style="background: #A9BAFA; height: 20px;" />
	 * @property {string} primary20=#CBD5FD     <div style="background: #CBD5FD; height: 20px;" />
	 * @property {string} accent=#38CAF1      <div style="background: #38CAF1; height: 20px;" />
	 * @property {string} love=#e6282b      <div style="background: #e6282b; height: 20px;" />
	 * @property {string} grey100=#1C1C38     <div style="background: #1C1C38; height: 20px;" />
	 * @property {string} grey80=#454655      <div style="background: #454655; height: 20px;" />
	 * @property {string} grey60=#898A9A      <div style="background: #898A9A; height: 20px;" />
	 * @property {string} grey40=#C0C0CA      <div style="background: #C0C0CA; height: 20px;" />
	 * @property {string} grey20=#F6F7FB      <div style="background: #F6F7FB; height: 20px;" />
	 * @property {string} white=#fff      <div style="background: #fff; height: 20px;" />
	 * @property {string} errorDark=#DE405D     <div style="background: #DE405D; height: 20px;" />
	 * @property {string} error=#FF4567     <div style="background: #FF4567; height: 20px;" />
	 * @property {string} errorLight=#FFA5B5      <div style="background: #FFA5B5; height: 20px;" />
	 * @property {string} successDark=#32A887     <div style="background: #32A887; height: 20px;" />
	 * @property {string} success=#70C9B0     <div style="background: #70C9B0; height: 20px;" />
	 * @property {string} successLight=#DBF0F1      <div style="background: #DBF0F1; height: 20px;" />
	 * @property {string} infoDark=#4268F6      <div style="background: #4268F6; height: 20px;" />
	 * @property {string} info=#879FFA      <div style="background: #879FFA; height: 20px;" />
	 * @property {string} infoLight=#CBD5FD     <div style="background: #CBD5FD; height: 20px;" />
	 * @property {string} filterBg=#343F87      <div style="background: #343F87; height: 20px;" />
	 * @property {string} hoverBg=#535B8E     <div style="background: #535B8E; height: 20px;" />
	 * @property {string} inputBorder=#898A9A     <div style="background: #898A9A; height: 20px;" />
	 * @property {string} separator=#C0C0CA     <div style="background: #C0C0CA; height: 20px;" />
	 * @property {string} highlight=#F6F7FB     <div style="background: #F6F7FB; height: 20px;" />
	 * @property {string} filterInputBorder=rgba(255,255,255,0.15)      <div style="background: rgba(255,255,255,0.15); height: 20px;" />
	 * @property {string} filterDisabled=rgba(83,91,142,0.05)      <div style="background: rgba(83,91,142,0.05); height: 20px;" />
	 * @property {string} bg=#F6F7FB      <div style="background: #F6F7FB; height: 20px;" />
	 */
	const colors$1 = {
	  // Primary
	  primary100: '#4268F6',
	  primary80: '#6483F8',
	  primary60: '#879FFA',
	  primary40: '#A9BAFA',
	  primary20: '#CBD5FD',
	  // accent
	  accent: '#38CAF1',
	  love: '#e6282b',
	  // SoftwareBrothers logo color
	  // grey
	  grey100: '#1C1C38',
	  grey80: '#454655',
	  grey60: '#898A9A',
	  grey40: '#C0C0CA',
	  grey20: '#F6F7FB',
	  white: '#fff',
	  // Alerts
	  errorDark: '#DE405D',
	  error: '#FF4567',
	  errorLight: '#FFA5B5',
	  successDark: '#32A887',
	  success: '#70C9B0',
	  successLight: '#DBF0F1',
	  infoDark: '#4268F6',
	  info: '#879FFA',
	  infoLight: '#CBD5FD',
	  // Backgrounds
	  filterBg: '#343F87',
	  hoverBg: '#535B8E',
	  // Elements
	  inputBorder: '#C0C0CA',
	  separator: '#C0C0CA',
	  highlight: '#F6F7FB',
	  filterInputBorder: 'rgba(255,255,255,0.15)',
	  filterDisabled: 'rgba(83,91,142,0.05)',
	  bg: '#F6F7FB'
	};
	/**
	 * Sizes can be used with paddings, margins etc.
	 *
	 * This is the example of using responsive margin with Box component
	 *
	 * ```javascript
	 * <Box p=['default', 'xl']>some content</Box>
	 * ```
	 *
	 * This component will have 8px padding for lowest breakpoint and 24px above
	 * this breakpoint.
	 *
	 * @memberof Theme
	 * @alias space

	 * @property {string} xs=2px        2px - <span class="space-box" style="width: 2px;" />
	 * @property {string} sm=4px        4px - <span class="space-box" style="width: 4px;" />
	 * @property {string} default=8px   8px - <span class="space-box" style="width: 8px;" />
	 * @property {string} lg=16px       16px - <span class="space-box" style="width: 16px;" />
	 * @property {string} xl=24px       24px - <span class="space-box" style="width: 24px;" />
	 * @property {string} xxl=32px      32px - <span class="space-box" style="width: 32px;" />
	 * @property {string} x3=48px       48px - <span class="space-box" style="width: 48px;" />
	 * @property {string} x4=64px       64px - <span class="space-box" style="width: 64px;" />
	 * @property {string} x5=80px       80px - <span class="space-box" style="width: 80px;" />
	 * @property {string} x6=128px      128px - <span class="space-box" style="width: 128px;" />
	 */

	const space = {
	  xs: '2px',
	  sm: '4px',
	  default: '8px',
	  lg: '16px',
	  xl: '24px',
	  xxl: '32px',
	  x3: '48px',
	  x4: '64px',
	  x5: '80px',
	  x6: '128px'
	};
	/**
	 * @memberof Theme
	 * @alias sizes
	 * @property {string} navbarHeight=64px
	 * @property {string} sidebarWidth=300px
	 */

	const sizes = {
	  navbarHeight: '64px',
	  sidebarWidth: '300px'
	};
	/**
	 * @memberof Theme
	 * @alias fontSizes
	 * @property {string} xs=10px      <div style="font-size: 10px;">'xs' font size</div>
	 * @property {string} sm=12px      <div style="font-size: 12px;">'sm' font size</div>
	 * @property {string} default=14px <div style="font-size: 14px;">'default' font size</div>
	 * @property {string} lg=16px      <div style="font-size: 16px;">'lg' font size</div>
	 * @property {string} xl=18px      <div style="font-size: 18px;">'xl' font size</div>
	 * @property {string} h4=24px      <div style="font-size: 24px;">'h4' font size</div>
	 * @property {string} h3=28px      <div style="font-size: 28px;">'h3' font size</div>
	 * @property {string} h2=32px      <div style="font-size: 32px;">'h2' font size</div>
	 * @property {string} h1=40px      <div style="font-size: 40px;">'h1' font size</div>
	 */

	const fontSizes = {
	  xs: '10px',
	  sm: '12px',
	  default: '14px',
	  lg: '16px',
	  xl: '18px',
	  h4: '24px',
	  h3: '28px',
	  h2: '32px',
	  h1: '40px'
	};
	/**
	 * @memberof Theme
	 * @alias fontWeights
	 * @property {string} lighter=300
	 * @property {string} normal=400
	 * @property {string} bold=700
	 */

	const fontWeights = {
	  lighter: 300,
	  normal: 400,
	  bold: 700
	};
	/**
	 * @memberof Theme
	 * @alias lineHeights
	 * @property {string} sm=12px
	 * @property {string} default=16px
	 * @property {string} lg=24px
	 * @property {string} xl=32px
	 * @property {string} xxl=40px
	 */

	const lineHeights = {
	  sm: '12px',
	  default: '16px',
	  lg: '24px',
	  xl: '32px',
	  xxl: '40px'
	};
	/**
	 * This dimension can be used with `testShadow` and `boxShadow` props provided
	 * by {@link ShadowProps}
	 *
	 * ```javascript
	 * <Box variant="grey" boxShadow="card">Some content...</Box>
	 * ```
	 *
	 * @memberof Theme
	 * @alias ShadowProps
	 * @property {string} login              <div class="shadow-div" style="box-shadow: 0 15px 24px 0 rgba(137,138,154,0.15);"/>
	 * @property {string} cardHover          <div class="shadow-div" style="box-shadow: 0 4px 12px 0 rgba(137,138,154,0.4);"/>
	 * @property {string} drawer             <div class="shadow-div" style="box-shadow: -2px 0 8px 0 rgba(137,138,154,0.2);"/>
	 * @property {string} card               <div class="shadow-div" style="box-shadow: 0 1px 6px 0 rgba(137,138,154,0.4);"/>
	 * @property {string} inputFocus         <div class="shadow-div" style="box-shadow: 0 2px 4px 0 rgba(135,159,250,0.4);"/>
	 * @property {string} buttonFocus        <div class="shadow-div" style="box-shadow: 0 4px 6px 0 rgba(56,202,241,0.3);"/>
	 */

	const shadows = {
	  login: '0 15px 24px 0 rgba(137,138,154,0.15)',
	  cardHover: '0 4px 12px 0 rgba(137,138,154,0.4)',
	  drawer: '-2px 0 8px 0 rgba(137,138,154,0.2)',
	  card: '0 1px 6px 0 rgba(137,138,154,0.4)',
	  inputFocus: '0 2px 4px 0 rgba(135,159,250,0.4)',
	  buttonFocus: '0 4px 6px 0 rgba(56,202,241,0.3)'
	};
	/**
	 * Responsive breakpoints
	 *
	 * How to use them - simply pass an array to given prop:
	 *
	 * ```javascript
	 * // Showing box on mobile devices
	 * <Box display={["block", "none"]}>...</Box>
	 *
	 * // responsive width
	 * <Box width={[1, 1/2, 1/3, 1/4]}>...</Box>
	 * ```
	 *
	 * @memberof Theme
	 * @alias breakpoints
	 * @property {string} 0=577px
	 * @property {string} 1=769px
	 * @property {string} 2=1024px
	 * @property {string} 3=1324px
	 */

	const breakpoints = ['577px', '769px', '1024px', '1324px' // 1024 + sidebarWidth
	];
	const font = '\'Roboto\', sans-serif';
	/**
	 * The color utility parses a component's color and bg props and converts them into CSS
	 * declarations. By default the raw value of the prop is returned. But most often you
	 * would use one of the color from the [color palette]{@link colors}.
	 *
	 * @typedef {object} ColorProps
	 * @alias ColorProps
	 * @memberof Theme
	 * @property {string} [color]                 Text color. It could be either a #hash or
	 *                                            {@link colors} from css theme name like
	 *                                            `grey80`
	 * @property {string} [backgroundColor, bg]   Background color. Similar as above could be a
	 *                                            #hash or one of {@link colors}.
	 */

	/**
	 * The space utility converts shorthand margin and padding props to margin and padding
	 * CSS declarations.
	 *
	 * You can use as a value raw dimensions in "px" or one of the value from the
	 * [space scale]{@link space}.
	 *
	 * @typedef {object} SpaceProps
	 * @alias SpaceProps
	 * @memberof Theme
	 * @property {string} [margin, m]             margin
	 * @property {string} [marginTop, mt]         margin-top
	 * @property {string} [marginRight, mr]       margin-right
	 * @property {string} [marginBottom, mb]      margin-bottom
	 * @property {string} [marginLeft, ml]        margin-left
	 * @property {string} [marginX, mx]           margin-left and margin-right
	 * @property {string} [marginY, my]           margin-top and margin-bottom
	 * @property {string} [padding, p]            padding
	 * @property {string} [paddingTop, pt]        padding-top
	 * @property {string} [paddingRight, pr]      padding-right
	 * @property {string} [paddingBottom, pb]     padding-bottom
	 * @property {string} [paddingLeft, pl]       padding-left
	 * @property {string} [paddingX, px]          padding-left and padding-right
	 * @property {string} [paddingY, py]          padding-top and padding-bottom
	 *
	 * Set of props related to {@link space}. You can put there either string with 'px' or
	 * one of `space` properties like `sm`, `default`, `xl` etc.
	 */

	/**
	 * Typography props include _fontFamily_, _fontSize_, _fontWeight_, _lineHeight_, _letterSpacing_,
	 * _textAlign_, and _fontStyle_.
	 *
	 * @typedef {object} TypographyProps
	 * @alias TypographyProps
	 * @memberof Theme
	 * @property {string} [fontSize]    font-size. Could be either actual css value or key taken from
	 *                                  {@link fontSizes}
	 * @property {string} [fontWeight]  font-weight. Could be either actual css value or key taken from
	 *                                  {@link fontWeights}
	 * @property {string} [lineHeight]  line-height. Could be either actual css value or key taken from
	 *                                  {@link lineHeights}
	 * @property {string} [textAlign]   text-align
	 * @property {string} [fontFamily]  font-family
	 * @property {string} [fontStyle]   font-style
	 * @property {string} [letterSpacing]  letter-spacing
	 */

	/**
	 * The layout utility includes style props for width, height, display, minWidth,
	 * minHeight, maxWidth, maxHeight, size, verticalAlign, overflow, overflowX, and overflowY.
	 *
	 * The width prop is transformed based on the following:
	 *
	 * - Numbers from 0-1 are converted to percentage widths.
	 * - Numbers greater than 1 are converted to pixel values.
	 * - String values are passed as raw CSS values.
	 * - And arrays are converted to responsive width styles.
	 * - the width prop will attempt to pick up values from the {@link sizes}
	 *
	 * @example
	 * // width `50%`
	 * <Box width={1/2} />
	 *
	 * // width `256px`
	 * <Box width={256} />
	 *
	 * // width `'2em'`
	 * <Box width='2em' />
	 *
	 * // width `100%` on all viewport and `50%` from the smallest breakpoint and up
	 * <Box width={[ 1, 1/2 ]} />
	 *
	 * // width from `sizes`
	 * <Box height='navbarHeight' />
	 *
	 * @typedef {object} LayoutProps
	 * @alias LayoutProps
	 * @memberof Theme
	 * @property {string} [width]         width
	 * @property {string} [height]        height
	 * @property {string} [display]       display
	 * @property {string} [minWidth]      min-width
	 * @property {string} [minHeight]     min-height
	 * @property {string} [maxWidth]      max-width
	 * @property {string} [maxHeight]     max-height
	 * @property {string} [size]          size
	 * @property {string} [verticalAlign] vertical-align
	 * @property {string} [overflow]      overflow
	 * @property {string} [overflowX]     overflow-x
	 * @property {string} [overflowY]     overflow-y
	 */

	/**
	 * The flexbox utility includes style props for alignItems, alignContent, justifyItems,
	 * justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis,
	 * justifySelf, alignSelf, and order.
	 *
	 * The width prop is transformed based on the following:
	 *
	 * - Numbers from 0-1 are converted to percentage widths.
	 * - Numbers greater than 1 are converted to pixel values.
	 * - String values are passed as raw CSS values.
	 * - And arrays are converted to responsive width styles.
	 * - the width prop will attempt to pick up values from the {@link sizes}
	 *
	 * @example
	 * // alignItems
	 * <Box alignItems='center' />
	 *
	 * // alignContent
	 * <Box alignContent='center' />
	 *
	 * // justifyContent
	 * <Box justifyContent='center' />
	 *
	 * // flexWrap
	 * <Box flexWrap='wrap' />
	 *
	 * // flexBasis
	 * <Box flexBasis='auto' />
	 *
	 * // flexDirection
	 * <Box flexDirection='column' />
	 *
	 * // flex
	 * <Box flex />
	 *
	 * // justifySelf
	 * <Box justifySelf='center' />
	 *
	 * // alignSelf
	 * <Box alignSelf='center' />
	 *
	 * // order
	 * <Box order='2' />
	 *
	 * @typedef {object} FlexboxProps
	 * @alias FlexboxProps
	 * @memberof Theme
	 * @property {string} [alignItems]         align-items
	 * @property {string} [alignContent]       align-content
	 * @property {string} [justifyItems]       justify-items
	 * @property {string} [justifyContent]     justify-content
	 * @property {string} [flexWrap]           flex-wrap
	 * @property {string} [flexDirection]      flex-direction
	 * @property {boolean} [flex]               flex
	 * @property {number|string} [flexGrow]           flex-grow
	 * @property {number} [flexShrink]         flex-shrink
	 * @property {string} [flexBasis]          flex-basis
	 * @property {string} [justifySelf]        justify-self
	 * @property {string} [alignSelf]          align-self
	 * @property {number|string} [order]              order
	 */

	/**
	 * The border utility includes all style props related to border
	 *
	 * @typedef {object} BorderProps
	 * @alias BorderProps
	 * @memberof Theme
	 * @property {string | number} [borderWidth]
	 * @property {string} [borderStyle]
	 * @property {string} [borderColor] It could be either a #hash or {@link colors}
	 * @property {string | number} [borderRadius]
	 * @property {string | number} [borderTop]
	 * @property {string | number} [borderTopWidth]
	 * @property {string} [borderTopStyle]
	 * @property {string} [borderTopColor] It could be either a #hash or {@link colors}
	 * @property {string | number} [borderTopLeftRadius]
	 * @property {string | number} [borderTopRightRadius]
	 * @property {string | number} [borderRight]
	 * @property {string | number} [borderRightWidth]
	 * @property {string} [borderRightStyle]
	 * @property {string} [borderRightColor] It could be either a #hash or {@link colors}
	 * @property {string | number} [borderBottom]
	 * @property {string | number} [borderBottomWidth]
	 * @property {string} [borderBottomStyle]
	 * @property {string} [borderBottomColor] It could be either a #hash or {@link colors}
	 * @property {string | number} [borderBottomLeftRadius]
	 * @property {string | number} [borderBottomRightRadius]
	 * @property {string | number} [borderLeft]
	 * @property {string | number} [borderLeftWidth]
	 * @property {string} [borderLeftStyle]
	 * @property {string} [borderLeftColor] It could be either a #hash or {@link colors}
	 * @property {string | number} [borderX]
	 * @property {string | number} [borderY]
	 */

	/**
	 * The position utility includes style props for position, zIndex, top, right, bottom, and left.
	 *
	 * @typedef {object} PositionProps
	 * @alias PositionProps
	 * @memberof Theme
	 * property {string | number} [position]
	 * property {string | number} [zIndex]
	 * property {string | number} [top]
	 * property {string | number} [right]
	 * property {string | number} [bottom]
	 * property {string | number} [left]
	 */

	/**
	 * The shadow utility includes style props for textShadow and boxShadow.
	 *
	 * @typedef {object} ShadowProps
	 * @alias ShadowProps
	 * @memberof Theme
	 * property {string} [boxShadow]
	 * property {string} [textShadow]
	 */

	// /**
	//  * @file Default AdminBro theme
	//  * @private
	//  */
	// // sorted alphabetically
	// export const colors = {
	//   // Blues
	//   primary100: '#4268F6',
	//   primary60: '#718AF4',
	//   primary20: '#CBD5FD',
	//   hoverBg: '#535B8E',
	//   accent: '#38CAF1',
	//   filterBg: '#343F87',
	//   // Blacks
	//   grey100: '#111114',
	//   grey80: '#454655',
	//   grey: '#707290',
	//   grey40: '#A9AABC',
	//   grey20: '#F7F7FA',
	//   white: '#fff',
	//   // Additional
	//   red: '#FF4567',
	//   errorLight: '#FFA5B5',
	//   success: '#70C9B0',
	//   successLight: '#DBF0F1',
	//   love: '#e6282b',
	//   textDefault: '#111114',
	//   textLight: '#70728F',
	//   tableHover: '#FCFCFC',
	//   primary: '#4268F6',
	//   bck: '#fff',
	//   defaultText: '#111114',
	//   lightText: '#70728F',
	//   lightBck: '#F8F8FA',
	//   superLightBack: '#FCFCFC',
	//   border: '#eeeeef',
	//   borderHover: '#b5b5b5',
	//   borderOnDark: '#4E5779',
	//   innerBck: '#f7f7Fa',
	//   darkBck: '#303b62',
	//   superDarkBck: '#192035',
	//   inputBck: '#fff',
	//   filterDefaultText: '#fff',
	//   filterLightText: '#b5b5b5',
	//   successBorder: '#8CDAD9',
	//   lightSuccess: '#DBF0F1',
	//   error: '#F0616F',
	//   lightError: '#F6E1E6',
	//   warning: '#FF9F89',
	// }
	// export const sizes = {
	//   navbarHeight: '64px',
	//   sidebarWidth: '300px',
	//   sidebarMobileWidth: '98px',
	//   paddingLayout: '30px',
	//   padding: '15px',
	//   paddingMin: '5px',
	// }
	// export const fonts = {
	//   base: '14px',
	//   medium: '12px',
	//   min: '11px',
	//   header: '32px',
	// }
	// export interface SpaceProps extends Array<string> {
	//   default: string;
	//   sm: string;
	//   xs: string;
	//   lg: string;
	//   xl: string;
	//   xxl: string;
	// }
	// // Styled system
	// const space: SpaceProps = [
	//   '0', '2px', '4px', '8px', '16px', '24px', '32px', '48px', '64px', '128px',
	// ] as SpaceProps
	// space.default = '8px'
	// space.sm = '4px'
	// space.xs = '2px'
	// space.lg = '16px'
	// space.xl = '24px'
	// space.xxl = '32px'
	// export {
	//   space,
	// }
	// export const fontSizes = ['10px', '12px', '14px', '16px', '18px', '24px', '28px', '32px', '40px']
	// export const lineHeights = ['12px', '16px', '24px', '32px', '40px']
	// export const fontWeights = {
	//   lighter: 300,
	//   normal: 400,
	//   bold: 700,
	// }
	// export const font = '\'Roboto\', sans-serif'

	var style = /*#__PURE__*/Object.freeze({
		__proto__: null,
		colors: colors$1,
		lineHeights: lineHeights,
		fontWeights: fontWeights,
		fontSizes: fontSizes,
		sizes: sizes,
		space: space,
		font: font,
		shadows: shadows,
		breakpoints: breakpoints
	});

	const pathsType = PropTypes$1.shape({
	  loginPath: PropTypes$1.string.isRequired,
	  rootPath: PropTypes$1.string.isRequired,
	  logoutPath: PropTypes$1.string.isRequired
	});
	const sessionType = PropTypes$1.shape({
	  email: PropTypes$1.string
	});
	const brandingType = PropTypes$1.shape({
	  logo: PropTypes$1.string.isRequired,
	  companyName: PropTypes$1.string.isRequired,
	  softwareBrothers: PropTypes$1.bool.isRequired
	});
	const propertyTypeShape = {
	  isId: PropTypes$1.bool.isRequired,
	  isSortable: PropTypes$1.bool.isRequired,
	  isTitle: PropTypes$1.bool.isRequired,
	  label: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]).isRequired,
	  name: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]).isRequired,
	  position: PropTypes$1.number.isRequired,
	  type: PropTypes$1.string.isRequired,
	  availableValues: PropTypes$1.arrayOf(PropTypes$1.shape({
	    title: PropTypes$1.string,
	    value: PropTypes$1.string
	  })),
	  reference: PropTypes$1.oneOfType([PropTypes$1.string]),
	  isArray: PropTypes$1.boolean
	};
	const propertyType = PropTypes$1.shape(propertyTypeShape);
	propertyTypeShape.subProperties = PropTypes$1.arrayOf(propertyType);
	const versionsType = PropTypes$1.shape({
	  admin: PropTypes$1.string,
	  app: PropTypes$1.string
	});
	const simplifiedPropertyType = PropTypes$1.shape({
	  isId: PropTypes$1.bool,
	  isSortable: PropTypes$1.bool,
	  isTitle: PropTypes$1.bool,
	  isVisible: PropTypes$1.bool,
	  label: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]).isRequired,
	  name: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]).isRequired,
	  position: PropTypes$1.number,
	  type: PropTypes$1.string,
	  availableValues: PropTypes$1.arrayOf(PropTypes$1.shape({
	    title: PropTypes$1.string,
	    value: PropTypes$1.string
	  })),
	  reference: PropTypes$1.oneOfType([PropTypes$1.string])
	});
	const actionType = PropTypes$1.shape({
	  actionType: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.arrayOf(PropTypes$1.string)]).isRequired,
	  icon: PropTypes$1.string,
	  label: PropTypes$1.string.isRequired,
	  name: PropTypes$1.string.isRequired,
	  showFilter: PropTypes$1.bool
	});
	const resourceParentType = PropTypes$1.shape({
	  name: PropTypes$1.string.isRequired,
	  icon: PropTypes$1.string.isRequired
	});
	const resourceType = PropTypes$1.shape({
	  editProperties: PropTypes$1.arrayOf(propertyType).isRequired,
	  filterProperties: PropTypes$1.arrayOf(propertyType).isRequired,
	  href: PropTypes$1.string.isRequired,
	  id: PropTypes$1.string.isRequired,
	  listProperties: PropTypes$1.arrayOf(propertyType).isRequired,
	  name: PropTypes$1.string.isRequired,
	  parent: resourceParentType.isRequired,
	  resourceActions: PropTypes$1.arrayOf(actionType).isRequired,
	  showProperties: PropTypes$1.arrayOf(propertyType).isRequired,
	  titleProperty: propertyType.isRequired
	});
	const resourceParentWithResourcesType = PropTypes$1.shape({
	  name: PropTypes$1.string.isRequired,
	  icon: PropTypes$1.string.isRequired,
	  resources: PropTypes$1.arrayOf(resourceType).isRequired
	});
	const recordType = PropTypes$1.shape({
	  params: PropTypes$1.object.isRequired,
	  populated: PropTypes$1.object,
	  errors: PropTypes$1.object,
	  id: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
	  title: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
	  recordActions: PropTypes$1.arrayOf(actionType).isRequired
	});
	const locationType = PropTypes$1.shape({
	  pathname: PropTypes$1.string.isRequired
	});
	const historyType = PropTypes$1.shape({
	  push: PropTypes$1.func.isRequired
	});
	const matchType = PropTypes$1.shape({
	  params: PropTypes$1.shape({
	    resourceId: PropTypes$1.string,
	    recordId: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.number]),
	    actionName: PropTypes$1.string
	  })
	});
	const childrenType = PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.arrayOf(PropTypes$1.oneOfType([PropTypes$1.element, PropTypes$1.arrayOf(PropTypes$1.element), PropTypes$1.string, PropTypes$1.number])), PropTypes$1.string, PropTypes$1.number]);
	const noticeType = PropTypes$1.shape({
	  message: PropTypes$1.string,
	  progress: PropTypes$1.number,
	  type: PropTypes$1.oneOf(['success', 'error'])
	});

	var types$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		pathsType: pathsType,
		sessionType: sessionType,
		brandingType: brandingType,
		propertyType: propertyType,
		versionsType: versionsType,
		simplifiedPropertyType: simplifiedPropertyType,
		actionType: actionType,
		resourceParentType: resourceParentType,
		resourceType: resourceType,
		resourceParentWithResourcesType: resourceParentWithResourcesType,
		recordType: recordType,
		locationType: locationType,
		historyType: historyType,
		matchType: matchType,
		childrenType: childrenType,
		noticeType: noticeType
	});

	const env = {
	  NODE_ENV: "development" 
	};
	const store = createStore(window.REDUX_STATE);
	const theme = window.THEME;
	const {
	  locale
	} = window.REDUX_STATE;
	i18n.use(reactI18next.initReactI18next).init({
	  resources: {
	    [locale.language]: {
	      translation: locale.translations
	    }
	  },
	  lng: locale.language,
	  interpolation: {
	    escapeValue: false
	  }
	});
	const Application = /*#__PURE__*/React__default.createElement(reactRedux.Provider, {
	  store: store
	}, /*#__PURE__*/React__default.createElement(styled.ThemeProvider, {
	  theme: theme
	}, /*#__PURE__*/React__default.createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default.createElement(App, null)))); // eslint-disable-next-line no-undef

	window.regeneratorRuntime = regenerator;
	var bundleEntry = {
	  withNotice,
	  Application,
	  ViewHelpers,
	  UserComponents: {},
	  ApiClient,
	  style,
	  BasePropertyComponent,
	  env,
	  ...Components,
	  ...AppComponents,
	  ...Hooks,
	  types: types$1,
	  // TODO: following is a backward compatible - remove this in version 2.0
	  Components: { ...Components,
	    ...AppComponents
	  }
	};

	return bundleEntry;

}(React, ReactRedux, ReactRouterDOM, styled, ReactI18Next, i18n, StyledSystem, CarbonIcons, ReactDatepicker, ReactRouter, axios, flat, Redux, ReactDOM, PropTypes, ReactSelect));