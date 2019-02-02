(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kmap"] = factory();
	else
		root["Kmap"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "a0c9f134553a2b914a90";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Kmap": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/kmap/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.kmap-cl {\n  position: relative;\n  margin: 1em auto;\n  max-width: 650px;\n}\n\ndiv.kmap-cl h3 {\n  border-bottom: 1px solid black;\n  font-size: 1.2em;\n  font-family: sans-serif;\n  margin: 1em 0 0.5em 0;\n  text-align: left !important;\n}\n\ndiv.kmap-cl button {\n  margin: 0;\n  padding: 0.15em 1em;\n  font-size: .9em;\n  min-width: 6em;\n}\n\ndiv.kmap-cl td {\n  cursor: pointer;\n}\n\ndiv.kmap-cl-work {\n  position: relative;\n  display: table;\n  margin: 0 auto;\n  padding: 0;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\ndiv.kmap-cl-dlg {\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", sans-serif;\n}\n\ndiv.kmap-cl-dlg > div:first-child {\n  position: absolute;\n  background-color: white;\n  opacity: 0.5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) {\n  position: relative;\n  top: 50%;\n  opacity: 1;\n  z-index: 10;\n  width: 50%;\n  margin: 0 auto;\n  transform: perspective(1px) translateY(-50%);\n  border: 1px solid black;\n  background: white;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:first-child {\n  margin: 0;\n  background: green;\n  color: white;\n  padding: 0.25em;\n  font-size: 1.1em;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(2) {\n  padding: 0.5em;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(3) {\n  padding: 0.5em;\n  text-align: right;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(3) button {\n  width: 8em;\n  padding: 0.5em 1em;\n}\n\ndiv.kmap-cl-work > div:first-child {\n  position: relative;\n  display: table-cell;\n  padding: 1em 0 0 0;\n  vertical-align: top;\n  width: 12em;\n  max-width: 12em;\n  text-align: center;\n  background: green;\n}\n\ndiv.kmap-cl-work > div:first-child button {\n  width: 9em;\n  margin: 0;\n  height: 2em;\n  padding: 0;\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-work > div:first-child .list {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  overflow-y: auto;\n  top: 4em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 3.2em;\n  font-size: 0.8em;\n  word-wrap: break-word;\n  margin: 0.25em 0;\n  text-align: left;\n  padding: 0.25em;\n  color: white;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group span {\n  position: absolute;\n  display: block;\n  right: 0.25em;\n  bottom: 0.25em;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + escape(__webpack_require__(/*! ./img/x.png */ "./packages/kmap/src/img/x.png")) + ");\n}\n\ndiv.kmap-cl-work > div:nth-child(2) {\n  position: relative;\n  display: table-cell;\n  padding: 1em 2em 1em 1em;\n  min-width: 25em;\n  background: white;\n}\n\ndiv.kmap-cl-work > div:nth-child(2) canvas {\n  background-color: transparent;\n  position: absolute;\n  z-index: 10;\n  pointer-events: none;\n}\n\ntable.kmap-cl {\n  background: none;\n  border-collapse: collapse;\n  box-shadow: none;\n  border: 0;\n}\n\ntable.kmap-cl input {\n  width: 3em;\n  text-align: center;\n}\n\ntable.kmap-cl tr {\n  border: 0;\n  vertical-align: middle;\n}\n\ntable.kmap-cl th,\ntable.kmap-cl td {\n  background: white;\n  text-shadow: none;\n  font-weight: normal;\n  color: black;\n  padding: 0.25em;\n  vertical-align: middle;\n}\n\ntable.kmap-cl tr th {\n  border: 0;\n  width: 4em;\n  height: 4em;\n}\n\ntable.kmap-cl td {\n  position: relative;\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  vertical-align: middle;\n  text-align: center;\n}\n\ntable.kmap-cl td span.minterm {\n  position: absolute;\n  top: 0.15em;\n  left: 0.25em;\n  font-size: 0.75em;\n}\n\ntable.kmap-cl td.kmap-cl-selected {\n  background: yellow;\n}\n\ntable.kmap-cl tr:first-child th {\n  color: black;\n  background: white;\n  text-shadow: none;\n  border: 0;\n  font-weight: normal;\n  padding: 0.25em;\n  font-family: Helvetica, Arial, sans-serif;\n  text-decoration: none;\n}\n\ntable.kmap-cl tr:first-child th:not(:first-child) {\n  text-align: center;\n  vertical-align: bottom;\n}\n\ntable.kmap-cl tr:first-child th:first-child {\n  border: 0;\n  position: relative;\n}\n\ntable.kmap-cl tr:first-child th:first-child .kmap-cl-left {\n  position: absolute;\n  bottom: 0;\n  right: 1.5em;\n}\n\ntable.kmap-cl tr:first-child th:first-child .kmap-cl-right {\n  position: absolute;\n  bottom: 1.5em;\n  right: 0;\n}\n\ntable.kmap-cl tr:first-child th:first-child .kmap-cl-line {\n  width: 4em;\n  height: 1px;\n  background-color: transparent;\n  border-bottom: 1px solid black;\n  -webkit-transform: translate(2em) rotate(45deg) translate(-2em);\n  transform: translate(2em) rotate(45deg) translate(-2em);\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\ntable.kmap-cl tr:not(:first-child) th {\n  text-align: right;\n}\n\ndiv.kmap-cl-generator {\n  margin: 0 auto;\n}\n\ndiv.kmap-cl-generator form {\n  max-width: 100%;\n  position: relative;\n}\n\ndiv.kmap-cl-generator p {\n  position: relative;\n  margin: 0.75em 0;\n  padding-top: 0.25em;\n  text-align: left;\n}\n\ndiv.kmap-cl-generator p span {\n  padding-left: 0.5em;\n  font-size: 0.85em;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\ndiv.kmap-cl-solution a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + escape(__webpack_require__(/*! ./img/x.png */ "./packages/kmap/src/img/x.png")) + ");\n}\n\ndiv.kmap-cl-solution button {\n  width: 8em;\n}\n\ndiv.kmap-cl-solution button.kmap-cl-solve {\n  display: inline-block;\n  float: right;\n}\n\ndiv.kmap-cl-solution input[type=\"text\"] {\n  width: 100%;\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-solution > div p {\n  font-size: 1.1em;\n  text-align: center;\n}\n\ndiv.kmap-cl-manual form {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n\ndiv.kmap-cl-manual form input[type=\"text\"] {\n  width: 90%;\n  font-size: 0.8em;\n}\n\ndiv.kmap-cl-manual form label {\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-manual form > div {\n  display: table-cell;\n  min-width: 50%;\n  margin: 0;\n  padding: 0;\n}\n\ndiv.kmap-cl-manual form p {\n  margin-top: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-kmap {\n  display: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./packages/kmap/index.js":
/*!********************************!*\
  !*** ./packages/kmap/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_polyfills_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/polyfills/all */ "./packages/kmap/src/polyfills/all.js");
/* harmony import */ var _src_kmap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/kmap.scss */ "./packages/kmap/src/kmap.scss");
/* harmony import */ var _src_kmap_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_kmap_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Kmap_Kmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Kmap/Kmap */ "./packages/kmap/src/Kmap/Kmap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _src_Kmap_Kmap__WEBPACK_IMPORTED_MODULE_2__["Kmap"]; });

// The public-path module must be imported first!
// import './src/public-path.js';
//





/***/ }),

/***/ "./packages/kmap/package.json":
/*!************************************!*\
  !*** ./packages/kmap/package.json ***!
  \************************************/
/*! exports provided: name, version, description, main, module, private, scripts, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"kmap","version":"1.0.1","description":"Karnagh Map Editor","main":"dist/kmap.js","module":"index.js","private":false,"scripts":{"build:dev":"npx webpack --config webpack.dev.js","build:prod":"npx webpack --config webpack.prod.js","build:both":"npm run build:dev && npm run build:prod","test":"karma start karma.conf.js","serve":"webpack-dev-server  --config webpack.dev.js --open","build:docs":"documentation build src/Kmap/**/*.js --sort-order alpha -f html -o doc/js"},"keywords":["Education","Circuits","Computer Architecture","Karnagh Maps"],"author":"Charles B. Owen","license":"MIT","devDependencies":{"@babel/core":"^7.2.2","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.3","@babel/runtime":"^7.2.0","babel-loader":"^8.0.5","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^4.6.0","css-loader":"^0.28.11","file-loader":"^3.0.1","hoek":"^6.1.2","html-webpack-include-assets-plugin":"^1.0.6","html-webpack-plugin":"^3.2.0","jasmine-core":"^3.3.0","karma":"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-jasmine":"^2.0.1","karma-jasmine-html-reporter":"^1.4.0","karma-sourcemap-loader":"^0.3.7","karma-webpack-with-fast-source-maps":"^1.10.2","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^4.0.3","resolve-url-loader":"^2.3.1","sass-loader":"^7.1.0","style-loader":"^0.21.0","uglifyjs-webpack-plugin":"^1.3.0","webpack":"^4.28.4","webpack-cli":"^3.2.1","webpack-dev-server":"^3.1.14","webpack-merge":"^4.2.1"},"dependencies":{"classlist-polyfill":"^1.2.0"}};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Generator.js":
/*!*********************************************!*\
  !*** ./packages/kmap/src/Kmap/Generator.js ***!
  \*********************************************/
/*! exports provided: Generator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generator", function() { return Generator; });
/* harmony import */ var _Logic_Minterms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/Minterms */ "./packages/kmap/src/Logic/Minterms.js");

/**
 * This object manages the practice generator section.
 * @param main
 * @param element
 * @constructor
 */

var Generator = function Generator(main, element) {
  var _this = this;

  var mintermsSpan;
  var options = main.options;

  var initialize = function initialize() {
    var div = document.createElement('div');
    div.classList.add('kmap-cl-generator');
    element.appendChild(div); // Heading

    var h3 = document.createElement('h3');
    h3.innerText = options.fixed ? 'Minterms' : 'Minterm Generator';
    div.appendChild(h3);
    var form = document.createElement('form');
    div.appendChild(form);
    var p = document.createElement('p');
    p.innerText = 'Size: ';
    div.appendChild(p);

    if (options.fixed) {
      p.appendChild(document.createTextNode('' + options.size + ' Minterms: '));
    } else {
      //
      // The size select control
      //
      var select = document.createElement('select');
      p.appendChild(select);
      var options1 = '';
      var options2 = '';

      for (var s = 2; s <= 4; s++) {
        if (s === +main.options.size) {
          if (main.options.genDontCare) {
            options1 += '<option value="' + s + '">' + s + '</option>';

            if (main.options.genDontCareOption) {
              options2 += '<option value="' + s + 'd" selected>' + s + " w/don't cares</option>";
            }
          } else {
            options1 += '<option value="' + s + '" selected>' + s + '</option>';

            if (main.options.genDontCareOption) {
              options2 += '<option value="' + s + 'd">' + s + " w/don't cares</option>";
            }
          }
        } else {
          options1 += '<option value="' + s + '">' + s + '</option>';

          if (main.options.genDontCareOption) {
            options2 += '<option value="' + s + 'd">' + s + " <span>w/don't cares</span></option>";
          }
        }
      }

      select.innerHTML = options1 + options2;
      select.addEventListener('change', function (event) {
        event.preventDefault();
        var val = select.value;
        var newSize = parseInt(val);
        main.options.genDontCare = val.match(/d$/) !== null;
        main.newSize(newSize);
      }); //
      // The Generate button
      //

      p.appendChild(document.createTextNode(' '));
      var button = document.createElement('button');
      button.innerText = 'Generate';
      p.appendChild(button);
      p.appendChild(document.createTextNode(' '));
      button.addEventListener('click', function (event) {
        event.preventDefault();
        main.generate();
      });
    }

    mintermsSpan = document.createElement('span');
    p.appendChild(mintermsSpan);

    _this.refresh();
  };

  this.refresh = function () {
    if (main.minterms.dontcare.length > 0) {
      mintermsSpan.innerHTML = main.minterms.list(true) + "<br>X=" + main.minterms.list_dontcare(true);
    } else {
      mintermsSpan.innerHTML = main.minterms.list(true);
    }
  };

  initialize(); // /**
  //  * Generate a new set of minterms with optional don't cares
  //  */
  // this.generate = function() {
  //     this.minterms.size = main.options.size;
  //     if(main.options.genDontCare) {
  // 	    var dcMax = 8;
  // 	    switch(main.options.size) {
  // 		    case 2:
  // 			    dcMax = 2;
  // 			    break;
  //
  // 		    case 3:
  // 			    dcMax = 4;
  // 			    break;
  // 	    }
  // 	    this.minterms.generate_bounded(0.5, 1, Math.pow(2, main.options.size)-1,
  // 		    0.2, 1, dcMax);
  //
  // 	    mintermsSpan.innerHTML = this.minterms.list(true) +
  // 		    "<br>X=" + this.minterms.list_dontcare(true);
  //
  // 	    main.newMinterms(this.minterms);
  //     } else {
  // 	    this.minterms.generate_bounded(0.5, 1, Math.pow(2, main.options.size)-1);
  //
  // 	    mintermsSpan.innerHTML = this.minterms.list(true);
  // 	    main.newMinterms(this.minterms);
  //     }
  // }
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Group.js":
/*!*****************************************!*\
  !*** ./packages/kmap/src/Kmap/Group.js ***!
  \*****************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/**
 * A single group
 * @param groups Kmap.Group object
 * @param list List to add this item to
 * @param selected Minterms that are selected
 * @param color Color to draw item
 * @constructor
 */
var Group = function Group(groups, list, selected, color) {
  var _this = this;

  this.groups = groups;
  this.selected = selected;
  this.color = color;

  if (list === null) {
    return;
  }

  var lst = '';
  var first = true;

  for (var i = 0; i < selected.length; i++) {
    if (!first) {
      lst += ',';
    } else {
      first = false;
    }

    if (i === 8) {
      lst += '<br/>';
    }

    lst += selected[i];
  } // var div = $('<div class="group">' + lst + '</div>');


  var div = document.createElement('div');
  div.classList.add('group');
  div.innerHTML = lst; // var span = $('<span></span>');
  // div.append(span);

  var span = document.createElement('span');
  div.appendChild(span); // var a = $('<a href="javascript:;"></a>');
  // span.append(a);

  var a = document.createElement('a');
  span.appendChild(a);
  list.appendChild(div);
  a.addEventListener('click', function (event) {
    event.preventDefault();
    list.removeChild(div);
    groups.remove(_this);
  });
  div.style.backgroundColor = color; // div.css("background-color", color);
};

Group.prototype.draw = function (ctx, wid, hit, insetDepth) {
  var inset = 15;
  var spacing = 10;
  var cols, rows, mapR, mapC, max;

  switch (this.groups.main.options.size) {
    case 2:
      cols = 2;
      rows = 2;
      mapR = [0, 1, 0, 1];
      mapC = [0, 0, 1, 1];
      max = 4;
      break;

    case 3:
      cols = 4;
      rows = 2;
      mapR = [0, 1, 0, 1, 0, 1, 0, 1];
      mapC = [0, 0, 1, 1, 3, 3, 2, 2];
      max = 8;
      break;

    case 4:
      cols = 4;
      rows = 4;
      mapR = [0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2];
      mapC = [0, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2];
      max = 16;
      break;
  }

  var cnt = this.selected.length;

  if (cnt === max) {
    // We are wrapping the whole thing
    this.drawGroup(ctx, 0, 0, wid, hit, inset + spacing * insetDepth);
    return;
  }

  if (cnt === 1) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit / rows, inset + spacing * insetDepth);
  } else if (cnt == 2) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];

    if (r1 == r2) {
      // Horizontal
      if (c2 < c1) {
        var t = c1;
        c1 = c2;
        c2 = t;
      }

      if (c2 - c1 > 1) {
        // Not adjacent!
        this.drawGroup(ctx, c2 * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
        this.drawGroup(ctx, (c1 - 1) * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
      } else {
        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
      }
    } else {
      // Vertical
      if (r2 < r1) {
        var t = r1;
        r1 = r2;
        r2 = t;
      }

      if (r2 - r1 > 1) {
        // Not adjacent
        this.drawGroup(ctx, c1 * wid / cols, r2 * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
        this.drawGroup(ctx, c1 * wid / cols, (r1 - 1) * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
      } else {
        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
      }
    }
  } else if (cnt == 4) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];
    var c3 = mapC[this.selected[2]];
    var r3 = mapR[this.selected[2]];
    var c4 = mapC[this.selected[3]];
    var r4 = mapR[this.selected[3]]; // Are all in same row?

    if (r1 == r2 && r2 == r3 && r3 == r4) {
      // Size 4 cover in the same row
      this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid * 4 / cols, hit / rows, inset + spacing * insetDepth);
    } else if (c1 == c2 && c2 == c3 && c3 == c4) {
      // Size 4 cover in the same column
      this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit * 4 / rows, inset + spacing * insetDepth);
    } else {
      // This must be square
      var wid4 = wid * 2 / cols;
      var hit4 = hit * 2 / rows;

      if (c1 == 0 && c2 == 0 && c3 == 3 && c4 == 3) {
        // This is a left/right side split
        if (r1 == 0 && r2 == 3 && r3 == 0 && r4 == 3) {
          // Four corner split
          this.drawGroup(ctx, -1 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, -1 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        } else {
          if (r1 > r2) {
            var t = r1;
            r1 = r2;
            r2 = t;
          }

          this.drawGroup(ctx, -1 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        }
      } else if (r1 == 0 && r2 == 3) {
        if (c1 > c3) {
          var t = c1;
          c1 = c3;
          c3 = t;
        } // This is a top-bottom split


        this.drawGroup(ctx, c1 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        this.drawGroup(ctx, c1 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
      } else {
        // Simple square!
        if (c1 > c3) {
          var t = c1;
          c1 = c3;
          c3 = t;
        }

        if (r1 > r2) {
          var t = r1;
          r1 = r2;
          r2 = t;
        }

        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
      }
    }
  } else if (cnt == 8) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];
    var c3 = mapC[this.selected[2]];
    var r3 = mapR[this.selected[2]];
    var c4 = mapC[this.selected[3]];
    var r4 = mapR[this.selected[3]];
    var c5 = mapC[this.selected[4]];
    var r5 = mapR[this.selected[4]];

    if (c1 == c2 && c2 == c3 && c3 == c4) {
      var wid8 = wid * 2 / cols;
      var hit8 = hit * 4 / rows; // Vertical layout

      if (c1 == 0 && c5 == 3) {
        // Left/right split
        this.drawGroup(ctx, -1 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
        this.drawGroup(ctx, 3 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      } else {
        if (c1 > c5) {
          c1 = c5;
        }

        this.drawGroup(ctx, c1 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      }
    } else {
      //Horizontal layout
      var wid8 = wid * 4 / cols;
      var hit8 = hit * 2 / rows;

      if (r2 - r1 > 1) {
        // Split
        this.drawGroup(ctx, 0 * wid / cols, -1 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
        this.drawGroup(ctx, 0 * wid / cols, 3 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      } else {
        if (r1 > r2) {
          r1 = r2;
        }

        this.drawGroup(ctx, 0 * wid / cols, r1 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      }
    }
  }
};

Group.prototype.drawGroup = function (ctx, x1, y1, wid, hit, inset) {
  var x = x1 + inset;
  var y = y1 + inset;
  var width = wid - inset * 2 - 1;
  var height = hit - inset * 2 - 1;
  var radius = 30;
  ctx.lineWidth = 7;
  ctx.strokeStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Groups.js":
/*!******************************************!*\
  !*** ./packages/kmap/src/Kmap/Groups.js ***!
  \******************************************/
/*! exports provided: Groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Groups", function() { return Groups; });
/* harmony import */ var _MessageDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageDialog */ "./packages/kmap/src/Kmap/MessageDialog.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./packages/kmap/src/Kmap/Group.js");


/**
 * The groups area of the editor
 */

var Groups = function Groups(main, sel) {
  var _this = this;

  var that = this;
  this.main = main;
  var list;

  var initialize = function initialize() {
    var button = document.createElement('button');
    sel.appendChild(button);
    button.innerText = 'Cover';
    list = document.createElement('div');
    list.classList.add('list');
    sel.appendChild(list);
    _this.groups = [];
    _this.colorN = 0;
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var selected = main.work.map.selected;

      if (main.options.strict) {
        // Determine how many common bits there are
        var and1 = Math.pow(2, main.options.size) - 1;
        var and2 = and1;

        for (var i = 0; i < selected.length; i++) {
          var _sel = selected[i];
          and1 &= _sel;
          and2 &= ~_sel;
        }

        var or = and1 | and2;
        var bits = 0;
        var size = main.options.size;

        for (var _i = 0; _i < size; _i++) {
          if ((or & 1) === 1) {
            bits++;
          }

          or >>= 1;
        } // Test for valid


        var valid = true;

        switch (selected.length) {
          case 1:
            break;

          case 2:
            valid = bits == size - 1;
            break;

          case 4:
            valid = bits == size - 2;
            break;

          case 8:
            valid = bits == size - 3;
            break;

          case 16:
            break;

          default:
            var html = '<p>Grouping must be of some power of two minterms.</p><p>The only ' + 'groupings possible are 1, 2, 4, 8, or 16, depending on the size of the ' + 'Karnaugh map.</p>';
            var dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", html);
            dlg.open();
            return;
        }

        if (!valid) {
          var _html = '<p>Your minterm grouping is invalid.</p><p>Groupings must be such ' + 'that there are bits in common. This means the groupings must be a rectangle ' + 'on the Karnaugh map. This can be a 1 by 4 rectangle or a 2 by 2 rectangle for ' + 'a grouping of 4, for example. Note that the map does <em>wrap around</em> at' + ' the edges, so the right side is adjacent to the left side, for example.</p>';

          var _dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", _html);

          _dlg.open();

          return;
        } //
        // Ensure this group does not already exist
        //


        for (var _i2 = 0; _i2 < that.groups.length && valid; _i2++) {
          if (that.groups[_i2].selected.length === selected.length) {
            var ok = false;

            for (var j = 0; j < that.groups[_i2].selected.length; j++) {
              if (that.groups[_i2].selected[j] !== selected[j]) {
                ok = true;
                break;
              }
            }

            if (!ok) {
              valid = false;
              var _html2 = '<p>This cover already exists.</p>';

              var _dlg2 = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", _html2);

              _dlg2.open();

              return;
            }
          }
        }
      }

      _this.add_group(selected);

      _this.drawGroups();

      main.work.map.clear();
    });
  };
  /**
   * Add a new group (cover)
   * @param minterms Array of minterms in the group
   */


  this.add_group = function (minterms) {
    var group = new _Group__WEBPACK_IMPORTED_MODULE_1__["Group"](this, list, minterms, this.colors[this.colorN]);
    this.colorN = (this.colorN + 1) % this.colors.length;
    this.groups.push(group);
  };
  /**
   * Draw all of the groups on the canvas
   */


  this.drawGroups = function () {
    var canvas = main.work.map.get_canvas();
    var ctx = canvas.getContext("2d");
    var wid = canvas.width;
    var hit = canvas.height;
    ctx.clearRect(0, 0, wid, hit);
    var size = main.options.size;
    var counter = [];

    for (var i = 0; i < Math.pow(2, size); i++) {
      counter.push(0);
    }

    for (var i = 0; i < this.groups.length; i++) {
      var group = this.groups[i];
      var max = 1;

      for (var j = 0; j < group.selected.length; j++) {
        counter[group.selected[j]]++;

        if (counter[group.selected[j]] > max) {
          max = counter[group.selected[j]];
        }
      }

      group.draw(ctx, wid, hit, max);
    }
  };

  this.clear = function () {
    list.innerHTML = '';
    this.colorN = 0;
    this.groups = [];
    this.drawGroups();
  };

  this.remove = function (group) {
    for (var i = 0; i < this.groups.length; i++) {
      if (this.groups[i] === group) {
        this.groups.splice(i, 1);
      }
    }

    this.drawGroups();
  };

  initialize();
  /*
   '<button>Group</button>' +
   '            <div class="list">' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span> ' +
   '           </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            </div>' +
     */
};
Groups.prototype.colors = ["#0000FF", "#808088", "#FF8800", "#008080", "#BDB76B", "#800000", "#00FF88", "#778899", "#FFA500", "#9ACD32", "#4682B4"];

/***/ }),

/***/ "./packages/kmap/src/Kmap/Kmap.js":
/*!****************************************!*\
  !*** ./packages/kmap/src/Kmap/Kmap.js ***!
  \****************************************/
/*! exports provided: Kmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kmap", function() { return Kmap; });
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options */ "./packages/kmap/src/Kmap/Options.js");
/* harmony import */ var _Utility_Ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility/Ready */ "./packages/kmap/src/Kmap/Utility/Ready.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./packages/kmap/src/Kmap/Main.js");



/**
 * Create an instance of Kmap Karnaugh Map.
 * @constructor
 */

var Kmap = function Kmap(sel, options) {
  var _this = this;

  //
  // Master set of the version
  //
  var PACKAGE = __webpack_require__(/*! ../../package.json */ "./packages/kmap/package.json");

  this.version = PACKAGE.version; // The Options object that manages user options

  this.options = new _Options__WEBPACK_IMPORTED_MODULE_0__["Options"](options); // A collection of Main objects.

  var mains = [];

  this.start = function () {
    _Utility_Ready__WEBPACK_IMPORTED_MODULE_1__["Ready"].go(function () {
      _this.startNow();
    });
  };
  /**
   * Start Kmap running now. Does not wait for document ready.
   */


  this.startNow = function () {
    if (sel instanceof Element) {
      var main = new _Main__WEBPACK_IMPORTED_MODULE_2__["Main"](_this, sel);
      mains.push(main);
    } else {
      var elements = document.querySelectorAll(sel);

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        var _main = new _Main__WEBPACK_IMPORTED_MODULE_2__["Main"](_this, element);

        mains.push(_main);
      }
    }

    if (mains.length === 1) {
      return mains[0];
    }

    return null;
  };
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Main.js":
/*!****************************************!*\
  !*** ./packages/kmap/src/Kmap/Main.js ***!
  \****************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Work */ "./packages/kmap/src/Kmap/Work.js");
/* harmony import */ var _Generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generator */ "./packages/kmap/src/Kmap/Generator.js");
/* harmony import */ var _Solution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Solution */ "./packages/kmap/src/Kmap/Solution.js");
/* harmony import */ var _Manual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Manual */ "./packages/kmap/src/Kmap/Manual.js");
/* harmony import */ var _Logic_Minterms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logic/Minterms */ "./packages/kmap/src/Logic/Minterms.js");





/**
 * Main window management object
 * @param kmap Kmap object (parent)
 * @param element The DOM element to use
 * @constructor
 */

var Main = function Main(kmap, element) {
  var _this = this;

  this.options = kmap.options;
  this.element = element; // Ensure empty and add the kmap-cl class

  element.innerHTML = '';
  element.classList.add('kmap-cl'); // The current minterms

  this.minterms = new _Logic_Minterms__WEBPACK_IMPORTED_MODULE_4__["Minterms"]();
  this.work = null;
  this.generator = null;
  this.solution = null;
  this.manual = null;

  this.initialize = function () {
    if (_this.options.generator) {
      _this.generator = new _Generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](_this, element);
    }

    if (_this.options.manual) {
      _this.manual = new _Manual__WEBPACK_IMPORTED_MODULE_3__["Manual"](_this, element);
    }

    if (_this.options.map) {
      _this.work = new _Work__WEBPACK_IMPORTED_MODULE_0__["Work"](_this, element);
    }

    if (_this.options.solution) {
      _this.solution = new _Solution__WEBPACK_IMPORTED_MODULE_2__["Solution"](_this, element);
    } // Generate initial minterms


    if (_this.options.minterms.length === 0) {
      _this.generate();
    } else {
      _this.set(_this.options.minterms, _this.options.dontcare);
    }
  };
  /**
   * Generate a new set of minterms with optional don't cares
   */


  this.generate = function () {
    this.minterms.size = this.options.size;

    if (this.options.genDontCare) {
      var dcMax = 8;

      switch (this.options.size) {
        case 2:
          dcMax = 2;
          break;

        case 3:
          dcMax = 4;
          break;
      }

      this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.options.size) - 1, 0.2, 1, dcMax);
      newMinterms();
    } else {
      this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.options.size) - 1);
      newMinterms();
    }
  };

  this.set = function (minterms, dontcare) {
    this.minterms.set_from(minterms, dontcare);
    newMinterms();
  };

  var newMinterms = function newMinterms() {
    if (_this.solution !== null) {
      _this.solution.clear();
    }

    _this.options.minterms = _this.minterms.minterms.slice();
    _this.options.dontcare = _this.minterms.dontcare.slice();

    if (_this.work !== null) {
      _this.work.render();
    }

    if (_this.generator !== null) {
      _this.generator.refresh();
    }
  };

  this.newSize = function (size) {
    this.options.size = size;
    this.generate();
  };

  this.initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Manual.js":
/*!******************************************!*\
  !*** ./packages/kmap/src/Kmap/Manual.js ***!
  \******************************************/
/*! exports provided: Manual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manual", function() { return Manual; });
/**
 * Manual entry of minterms and don't cares support
 * @param main Main object
 * @param element Element we are adding this component to
 * @constructor
 */
var Manual = function Manual(main, element) {
  var that = this;
  var labels = main.options.labels;
  var manualMinterms, manualDontCares, manualVariables;

  var initialize = function initialize() {
    var div = document.createElement('div');
    div.classList.add('kmap-cl-manual');
    element.appendChild(div);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Manual Entry';
    div.appendChild(h3); // var form = '<form><div class="left">' +
    //     '<p><label for="manual-minterms">Minterms: </label><br><input type="text" id="manual-minterms" spellcheck="false"></p>' +
    //     '<p><label for="manual-dontcares">Don\'t cares: </label><br><input type="text" id="manual-dontcares" spellcheck="false"></p>' +
    //     '<p><button>Take</button></p>' +
    //     '</div><div class="right">' +
    //     '<p><label for="manual-variables">Labels: </label><br><input type="text" id="manual-variables" value="' +
    //     labels + '" spellcheck="false"></p>' +
    //     '</div></form>';

    var form = document.createElement('form');
    div.appendChild(form); //
    // Left div
    //

    var left = document.createElement('div');
    form.appendChild(left); // <p><label for="manual-minterms">Minterms: </label><br><input type="text" id="manual-minterms" spellcheck="false"></p>

    var p = document.createElement('p');
    left.appendChild(p);
    var label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Minterms: ';
    label.appendChild(document.createElement('br'));
    manualMinterms = document.createElement('input');
    manualMinterms.setAttribute('type', 'text');
    manualMinterms.setAttribute('spellcheck', 'false');
    label.appendChild(manualMinterms); // <p><label for="manual-dontcares">Don\'t cares: </label><br><input type="text" id="manual-dontcares" spellcheck="false"></p>

    p = document.createElement('p');
    left.appendChild(p);
    label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Don\'t cares: ';
    label.appendChild(document.createElement('br'));
    manualDontCares = document.createElement('input');
    manualDontCares.setAttribute('type', 'text');
    manualDontCares.setAttribute('spellcheck', 'false');
    label.appendChild(manualDontCares); // <p><button>Take</button></p>

    p = document.createElement('p');
    left.appendChild(p);
    var take = document.createElement('button');
    p.appendChild(take);
    take.innerText = 'Take'; //
    // Right div
    //

    var right = document.createElement('div');
    form.appendChild(right); // <p><label for="manual-variables">Labels: </label><br><input type="text" id="manual-variables" value="' +
    // labels + '" spellcheck="false"></p>

    p = document.createElement('p');
    right.appendChild(p);
    label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Labels: ';
    label.appendChild(document.createElement('br'));
    manualVariables = document.createElement('input');
    manualVariables.setAttribute('type', 'text');
    manualVariables.setAttribute('spellcheck', 'false');
    label.appendChild(manualVariables);
    manualVariables.value = labels;
    take.addEventListener('click', function (event) {
      event.preventDefault();
      var mintermslist = parse(manualMinterms.value);
      var dontcarelist = parse(manualDontCares.value); // Get the labels, stripping any HTML tags just in case

      var labels = manualVariables.value.replace(/(<([^>]+)>)/ig, "");
      main.options.labels = labels.split(",");
      main.set(mintermslist, dontcarelist);
    });
  };

  function parse(input) {
    var reM = /m/g;
    var re = /[, ]+/g;
    var items = input.replace(reM, '').split(re);
    var ret = [];
    items.forEach(function (item) {
      if (item !== "") {
        ret.push(parseInt(item));
      }
    });
    return ret;
  }

  initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Map.js":
/*!***************************************!*\
  !*** ./packages/kmap/src/Kmap/Map.js ***!
  \***************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _MessageDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageDialog */ "./packages/kmap/src/Kmap/MessageDialog.js");

/**
 * The actual Karnaugh Map
 * @param main
 * @param element
 * @constructor
 */

var Map = function Map(main, element) {
  var _this = this;

  this.main = main;
  this.element = element;
  this.selected = [];
  var topLeft, botRight, canvas;

  var initialize = function initialize() {
    var table = document.createElement('table');
    table.classList.add('kmap-cl');
    element.appendChild(table); // Make a local copy of the labels, converting
    // _1 to <sub>1</sub>

    var labels = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = main.options.labels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var label = _step.value;
        labels.push(label.replace(/_([a-zA-Z0-9])*/g, '<sub>$1</sub>'));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var left, right, rest, colheads;

    if (+main.options.size === 2) {
      var A = labels[0];
      var B = labels[1];
      left = B;
      right = A;
      rest = "<th>" + A + "'</th><th>" + A + "</th>";
      colheads = [B + "'", B];
    } else if (+main.options.size === 3) {
      var _A = labels[0];
      var _B = labels[1];
      var C = labels[2];
      left = C;
      right = _A + _B;
      rest = "<th>" + _A + "'" + _B + "'</th><th>" + _A + "'" + _B + "</th><th>" + _A + _B + "</th><th>" + _A + _B + "'</th>";
      colheads = [C + "'", C];
    } else {
      var _A2 = labels[0];
      var _B2 = labels[1];
      var _C = labels[2];
      var D = labels[3];
      left = _C + D;
      right = _A2 + _B2;
      rest = "<th>" + _A2 + "'" + _B2 + "'</th><th>" + _A2 + "'" + _B2 + "</th><th>" + _A2 + _B2 + "</th><th>" + _A2 + _B2 + "'</th>";
      colheads = [_C + "'" + D + "'", _C + "'" + D, _C + D, _C + D + "'"];
    }
    /*
     * Top row first
     */


    var tr = document.createElement('tr');
    tr.innerHTML = '<th><div class="kmap-cl-left">' + left + '</div><div class="kmap-cl-line"></div><div class="kmap-cl-right">' + right + '</div></th>' + rest;
    table.appendChild(tr);
    /*
     * Rest of the table
     */

    var rows = +main.options.size === 4 ? 4 : 2;
    var cols = +main.options.size === 2 ? 2 : 4;

    for (var r = 1; r <= rows; r++) {
      tr = document.createElement('tr');
      tr.innerHTML = '<th>' + colheads[r - 1] + '</th>';

      for (var c = 1; c <= cols; c++) {
        var td = make_cell(c, r);
        tr.appendChild(td);

        if (r === 1 && c === 1) {
          topLeft = td;
        } else if (r === rows && c === cols) {
          botRight = td;
        }
      }

      table.appendChild(tr);
    }

    canvas = document.createElement('canvas');
    canvas.setAttribute('width', '1000');
    canvas.setAttribute('height', '1000');
    _this.canvas = canvas;
    element.appendChild(canvas);
    setTimeout(function () {
      set_canvas();
    }, 0);
    window.addEventListener('resize', set_canvas);
  };

  this.get_canvas = function () {
    return this.canvas;
  };

  this.destroy = function () {
    window.removeEventListener('resize', set_canvas);
  };

  function set_canvas() {
    var tl = {
      left: topLeft.offsetLeft,
      top: topLeft.offsetTop
    };
    var br = {
      left: botRight.offsetLeft,
      top: botRight.offsetTop
    };
    canvas.style.top = tl.top + 'px';
    canvas.style.left = tl.left + 'px';
    canvas.style.width = br.left - tl.left + botRight.offsetWidth + 'px';
    canvas.style.height = br.top - tl.top + botRight.offsetHeight + 'px';
  }

  var make_cell = function make_cell(c, r) {
    var td = document.createElement('td');
    var minterm = to_minterm(c, r);
    var bit = '0';

    for (var i = 0; i < main.options.minterms.length; i++) {
      if (minterm === +main.options.minterms[i]) {
        bit = '1';
        break;
      }
    }

    for (i = 0; i < main.options.dontcare.length; i++) {
      if (minterm === +main.options.dontcare[i]) {
        bit = 'X';
        break;
      }
    }

    if (main.options.labelMinterms) {
      td.innerHTML = '<span class="minterm">m' + minterm + '</span>' + bit;
    } else {
      td.innerHTML = bit;
    }

    td.addEventListener('click', function (event) {
      event.preventDefault();

      if (_this.main.options.strict && bit === '0') {
        var html = '<p>You are only allowed to select cells that are either true ' + 'or set to don\'t care.</p><p>We are grouping minterms that all are true ' + 'so we can minimize the circuit. So, only true cells can be grouped.</p>';
        var dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", html);
        dlg.open();
        return;
      }

      if (td.classList.contains("kmap-cl-selected")) {
        td.classList.remove("kmap-cl-selected");

        var n = _this.selected.indexOf(minterm);

        if (n > -1) {
          _this.selected.splice(n, 1);
        }
      } else {
        td.classList.add("kmap-cl-selected");

        if (!is_selected(minterm)) {
          _this.selected.push(minterm);

          _this.selected.sort(function (a, b) {
            return a - b;
          });
        }
      }
    });
    return td;
  };

  var to_minterm = function to_minterm(c, r) {
    var map;

    if (+_this.main.options.size === 2) {
      map = [[0, 2], [1, 3]];
    } else if (+_this.main.options.size === 3) {
      map = [[0, 2, 6, 4], [1, 3, 7, 5]];
    } else {
      map = [[0, 4, 12, 8], [1, 5, 13, 9], [3, 7, 15, 11], [2, 6, 14, 10]];
    }

    return map[r - 1][c - 1];
  };

  var is_selected = function is_selected(minterm) {
    return _this.selected.indexOf(minterm) > -1; //
  };

  this.clear = function () {
    this.selected = [];
    var tds = this.element.querySelectorAll('td');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = tds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var td = _step2.value;
        td.classList.remove('kmap-cl-selected');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/MessageDialog.js":
/*!*************************************************!*\
  !*** ./packages/kmap/src/Kmap/MessageDialog.js ***!
  \*************************************************/
/*! exports provided: MessageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialog", function() { return MessageDialog; });
/**
 * The standard Message dialog box.
 *
 * Pretty minimalist dialog box
 *
 * @param main The Main object
 * @param title Title for the dialog box
 * @param body Body HTML to put in the dialog box
 * @constructor
 */
var MessageDialog = function MessageDialog(main, title, body) {
  var div = null;

  this.open = function () {
    // The top level dialog element
    div = document.createElement('div');
    div.classList.add('kmap-cl-dlg');
    main.element.appendChild(div); // The mask

    var mask = document.createElement('div');
    div.appendChild(mask); // The dialog box itself

    var dlg = document.createElement('div');
    div.appendChild(dlg); // Title bar

    var tb = document.createElement('div');
    dlg.appendChild(tb);
    tb.innerText = title; // Body

    var db = document.createElement('div');
    dlg.appendChild(db);
    db.innerHTML = body; // Controls

    var controls = document.createElement('div');
    dlg.appendChild(controls);
    var ok = document.createElement('button');
    controls.appendChild(ok);
    ok.innerText = 'Ok';
    ok.addEventListener('click', function (event) {
      event.preventDefault();

      if (div !== null) {
        main.element.removeChild(div);
        div = null;
      }
    });
  };
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Options.js":
/*!*******************************************!*\
  !*** ./packages/kmap/src/Kmap/Options.js ***!
  \*******************************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/**
 * User interface options.
 *
 * Options can be passed as a Javascript Object, JSON, or base64-encoded JSON
 *
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {};

  if (options !== Object(options)) {
    if (options.substr(0, 1) === '{') {
      options = JSON.parse(options);
    } else {
      // Not JSON, must be base64 encoded
      options = JSON.parse(atob(options));
    }
  } /// The input size: 2, 3, or 4


  this.size = 4; /// The minterms. Set to integers starting at 0

  this.minterms = []; // [1, 2, 7, 8, 9, 14];
  /// The don't care minterms

  this.dontcare = []; /// Labels for the variables.

  this.labels = ['A', 'B', 'C', 'D']; /// Generate don't care maps

  this.genDontCare = false; /// Are don't cares an option for the generator?

  this.genDontCareOption = true; //
  // User interface sections
  //
  /// Include the generator?

  this.generator = true; /// Include the manual data entry section?

  this.manual = false; /// Include the map?

  this.map = true; /// Include the solution section?

  this.solution = true; /// If set true, practice generate features are disabled

  this.fixed = false; /// Verbose answers on mistakes

  this.verbose = true; /// If true, the minterm name appears in each cell.

  this.labelMinterms = true; /// If set true, user input is checked for selecting invalid cells
  /// such as zeros.

  this.strict = true; /// If true, the header Karnaugh Map is included with an option to hide the map

  this.mapHeading = true; /// A results selector. Selector that will be set to the success value
  /// if the expression successfully checks

  this.resultSel = null; /// Value resultsSel will be set to if check is successful ('fail' otherwise)

  this.success = 'success'; /// Selector that will be set to the expression each time check is pressed.

  this.expressionSel = null; /// Is the solve button provided?

  this.solve = false;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Solution.js":
/*!********************************************!*\
  !*** ./packages/kmap/src/Kmap/Solution.js ***!
  \********************************************/
/*! exports provided: Solution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solution", function() { return Solution; });
/* harmony import */ var _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/Expression */ "./packages/kmap/src/Logic/Expression.js");
/* harmony import */ var _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logic/QuineMcCluskeySolver */ "./packages/kmap/src/Logic/QuineMcCluskeySolver.js");


/**
 * Practice page solution form
 * @param main Main object
 * @param element Parent element
 * @constructor
 */

var Solution = function Solution(main, element) {
  var _this = this;

  var that = this;
  this.main = main; // The various section elements

  var div, expressionInput, result;

  var initialize = function initialize() {
    div = document.createElement('div');
    div.classList.add('kmap-cl-solution');
    element.append(div);
    var h3 = document.createElement('h3');
    h3.innerText = 'Solution';
    div.appendChild(h3);
    var form = document.createElement('form');
    div.appendChild(form); // '<p><label>Enter Expression<br><input type="text" spellcheck="false" class="expression"></label></p>'

    var p = document.createElement('p');
    form.appendChild(p);
    var label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Enter Expression';
    label.appendChild(document.createElement('br'));
    expressionInput = document.createElement('input');
    expressionInput.setAttribute('type', 'text');
    expressionInput.setAttribute('spellcheck', 'false');
    label.appendChild(expressionInput); // '<p><button class="check">Check</button><a class="clear" href="javascript:;"></a>';

    p = document.createElement('p');
    form.appendChild(p);
    var check = document.createElement('button');
    check.classList.add('check');
    check.innerText = 'Check';
    p.appendChild(check);
    check.addEventListener('click', function (event) {
      event.preventDefault();

      _this.check();
    }); // Clear button (input)

    p.appendChild(document.createTextNode(' '));
    var clear = document.createElement('a');
    clear.classList.add('clear');
    p.appendChild(clear);
    clear.addEventListener('click', function (event) {
      event.preventDefault();

      _this.clear();
    }); // Optional solve button

    if (main.options.solve) {
      p.appendChild(document.createTextNode(' '));
      var solve = document.createElement('button');
      solve.classList.add('kmap-cl-solve');
      solve.innerHTML = 'Solve';
      p.appendChild(solve);
      solve.addEventListener('click', function (event) {
        event.preventDefault();

        _this.solve();
      });
    } // Results div


    result = document.createElement('div');
    div.appendChild(result);
  };

  this.clear = function () {
    expressionInput.value = '';
    result.innerHTML = '';
  };

  this.check = function () {
    var mt = '';
    var first = true;

    for (var _i in main.options.minterms) {
      if (first) {
        mt += ",";
      } else {
        first = false;
      }

      mt += main.options.minterms[_i];
    }

    result.innerHTML = '';
    var expression = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    expression.labels = main.options.labels;
    expression.set_size(main.options.size);
    var str = expressionInput.value;

    if (main.options.expressionSel !== null) {
      var elements = document.querySelectorAll(main.options.expressionSel);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _element = _step.value;
          _element.value = str.replace(/(<([^>]+)>)/ig, "");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    try {
      expression.parse(str);
    } catch (msg) {
      fail('<p>Your expression failed to parse and must not be ' + 'in the correct form.</p>' + '<p>' + msg + '</p>');
      return;
    } // Is this result minimal?


    var qm = new _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__["QuineMcCluskeySolver"]();
    qm.labels = main.options.labels;
    qm.init(main.options.size);

    for (var i in main.options.minterms) {
      qm.set(main.options.minterms[i], true);
    }

    for (i in main.options.dontcare) {
      qm.set(main.options.dontcare[i], undefined);
    }

    qm.compute();
    var qmExpression = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    qmExpression.labels = main.options.labels;
    qmExpression.set_size(main.options.size);
    qmExpression.parse(qm.expression());
    var valid = true; //
    // Test that every minterm supplied is either
    // a valid minterm or a don't care
    //

    for (var i in expression.minterms.minterms) {
      var m = expression.minterms.minterms[i];
      var inlist = false;

      for (var j in main.options.minterms) {
        if (main.options.minterms[j] == m) {
          inlist = true;
          break;
        }
      }

      for (j in main.options.dontcare) {
        if (main.options.dontcare[j] == m) {
          inlist = true;
          break;
        }
      }

      if (!inlist) {
        // If we got to here, this term is extraneous!
        valid = false;
        break;
      }
    } //
    // Test that every minterm required is in the supplied list
    //


    for (i in main.options.minterms) {
      m = main.options.minterms[i];
      inlist = false;

      for (var j in expression.minterms.minterms) {
        if (expression.minterms.minterms[j] == m) {
          inlist = true;
          break;
        }
      }

      if (!inlist) {
        // If we got to here, this term is extraneous!
        valid = false;
        break;
      }
    }

    if (!valid) {
      if (main.options.verbose) {
        var html = '<p>Your expression is not a valid solution for this ' + 'set of minterms. The minterms for your expression have been ' + 'computed as: </p>';

        if (expression.minterms.minterms.length > 0) {
          html += '<p class="center small">' + expression.minterms.list() + '</p>';
        } else {
          html += '<p class="center small">none</p>';
        }
      } else {
        var html = '<p>Your expression is not a valid solution for this ' + 'set of minterms.</p>';
      }

      fail(html);
      return;
    }

    if (!expression.as_good_as(qmExpression)) {
      if (main.options.verbose) {
        fail('<p>Your expression is not minimal. A minimal solution ' + 'for this problem is:</p>' + '<p class="small">' + qm.expression() + '</p>');
      } else {
        fail('<p>Your expression is not minimal.</p>');
      }

      return;
    } //
    // Success
    //


    result.innerHTML = '<p>Your expression is correct and minimal.</p>';

    if (main.options.resultSel !== null) {
      var _elements = document.querySelectorAll(main.options.resultSel);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _element2 = _step2.value;
          _element2.value = main.options.success;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  };

  this.solve = function () {
    var qm = this.minimumExpression();
    result.innerHTML = '<p class="center">' + qm.expression() + "</p>";
    main.work.map.clear();
    var groups = main.work.groups;
    groups.clear();
    var terms = qm.expression().split('+');
    var exp = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    exp.labels = main.options.labels;
    exp.set_size(main.options.size);

    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      exp.parse(term);
      groups.add_group(exp.minterms.minterms);
    }

    groups.drawGroups();
  };

  var fail = function fail(msg) {
    result.innerHTML = msg;

    if (main.options.resultSel !== null) {
      var elements = document.querySelectorAll(main.options.resultSel);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _element3 = _step3.value;
          _element3.value = 'fail';
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  };

  this.minimumExpression = function () {
    // Is this result minimal?
    var qm = new _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__["QuineMcCluskeySolver"]();
    qm.labels = this.main.options.labels;
    qm.init(this.main.options.size);

    for (var i in this.main.options.minterms) {
      qm.set(this.main.options.minterms[i], true);
    }

    for (i in this.main.options.dontcare) {
      qm.set(this.main.options.dontcare[i], undefined);
    }

    qm.compute();
    return qm;
  };

  initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Utility/Ready.js":
/*!*************************************************!*\
  !*** ./packages/kmap/src/Kmap/Utility/Ready.js ***!
  \*************************************************/
/*! exports provided: Ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ready", function() { return Ready; });
/**
 * Simple Document ready function, equivalent to jQuery's document ready.
 * @constructor
 */
var Ready = function Ready() {};
/**
 * Call a function when the document is readon.
 * @param fn Function to be called on document ready
 */

Ready.go = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Work.js":
/*!****************************************!*\
  !*** ./packages/kmap/src/Kmap/Work.js ***!
  \****************************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map */ "./packages/kmap/src/Kmap/Map.js");
/* harmony import */ var _Groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Groups */ "./packages/kmap/src/Kmap/Groups.js");


/**
 * The work area is the Karnaugh map and the groupings controls.
 * @param main
 * @param element
 * @constructor
 */

var Work = function Work(main, element) {
  this.map = null;
  this.groups = null;
  var div, left, right;

  this.initialize = function () {
    if (main.options.mapHeading) {
      var h3 = document.createElement('h3');
      element.appendChild(h3);
      var checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.setAttribute('checked', 'true');
      h3.appendChild(checkBox);
      h3.appendChild(document.createTextNode(' Karnaugh Map'));
      checkBox.addEventListener('change', function (event) {
        event.preventDefault();

        if (checkBox.checked) {
          div.style.display = 'table';
        } else {
          div.style.display = 'none';
        }
      });
    } // Create the main div that contains the work area


    div = document.createElement('div');
    div.classList.add('kmap-cl-work');
    element.appendChild(div);
    this.div = div;
    this.render();
  };

  this.render = function () {
    div.innerHTML = '';
    left = document.createElement('div');
    div.appendChild(left);
    right = document.createElement('div');
    div.appendChild(right); //
    // Add the Kmap
    //

    if (this.map !== null) {
      this.map.destroy();
    }

    this.map = new _Map__WEBPACK_IMPORTED_MODULE_0__["Map"](main, right); //
    // Add the groups
    //

    this.groups = new _Groups__WEBPACK_IMPORTED_MODULE_1__["Groups"](main, left);
  };

  this.initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Logic/Expression.js":
/*!***********************************************!*\
  !*** ./packages/kmap/src/Logic/Expression.js ***!
  \***********************************************/
/*! exports provided: Expression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return Expression; });
/* harmony import */ var _Minterms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Minterms */ "./packages/kmap/src/Logic/Minterms.js");

/**
 * Handle simple expressions. Only works for sum of products
 * for now. Will consider fancier version later on.
 * @constructor
 */

var Expression = function Expression() {
  var that = this;
  var size = 4;
  this.minterms = new _Minterms__WEBPACK_IMPORTED_MODULE_0__["Minterms"]();
  this.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  /**
   * Set the size of the expression
   * @param sz Value 1-? number of terms
   */

  this.set_size = function (sz) {
    size = sz;
    this.minterms.size = sz;
    terms_init();
  };
  /**
   * Test that this expression is as good as some other expression.
   * @param other
   */


  this.as_good_as = function (other) {
    if (this.num_products() > other.num_products()) {
      return false;
    }

    if (this.num_terms() > other.num_terms()) {
      return false;
    }

    return true;
  };
  /*
   * Minterms
   */


  function generate_minterms() {
    that.minterms.clear();

    for (var i = 0; i < Math.pow(2, size); i++) {
      terms_set(i);
      var resultS = false;

      for (var s in sop) {
        var prod = sop[s];
        var resultP = true;

        for (var p in prod) {
          var t = prod[p];

          if (t.not) {
            resultP = resultP && !t.term.value;
          } else {
            resultP = resultP && t.term.value;
          }
        }

        resultS = resultS || resultP;
      }

      if (resultS) {
        that.minterms.add(i);
      }
    }
  }
  /**
   * Parse an expression in sum-of-products form only
   * @param str
   */


  var sop = [];

  this.parse = function (exp) {
    lex(exp);
    sop = [];
    var prod = [];

    if (token() === "0") {
      generate_minterms();
      return;
    }

    if (token() === "1") {
      this.minterms.clear();

      for (var i = 0; i < Math.pow(2, size); i++) {
        this.minterms.add(i);
      }

      return;
    }

    while (true) {
      var ch = token();

      if (ch === null) {
        break;
      }

      if (ch === '+') {
        if (prod.length === 0) {
          error("Syntax error");
        }

        sop.push(prod);
        prod = [];
        advance();
      } else {
        // Is it a term?
        var term = get_term(ch);

        if (term !== null) {
          // We have a new term
          // Have we already seen it?
          for (var j in prod) {
            if (term === prod[j].term) {
              // Already seen this term
              error("Not in correct sum of products form. " + "Terms may only be used once per product.");
            }
          }

          advance();

          if (token() === "'") {
            prod.push({
              term: term,
              not: true
            });
            advance();
          } else {
            prod.push({
              term: term,
              not: false
            });
          }
        } else {
          error("Unexpected symbol.");
        }
      }
    }

    if (prod.length > 0) {
      sop.push(prod);
      prod = [];
    } else {
      error("Not in correct sum of products form. " + "Missing terms?");
    }

    generate_minterms();
  };

  this.num_products = function () {
    return sop.length;
  };

  this.num_terms = function () {
    var cnt = 0;

    for (var i in sop) {
      cnt += sop[i].length;
    }

    return cnt;
  };

  function error(msg) {
    throw "Expression parsing error [" + expressionLoc + "]: " + msg;
  }
  /*
   * Terms management
   */


  var terms = [];

  function terms_init() {
    terms = []; // Create the terms

    for (var i = 0; i < size; i++) {
      var term = {
        literal: that.labels[i],
        value: false
      };
      terms.push(term);
    }
  }

  function get_term(ch) {
    for (var i in terms) {
      if (ch.toUpperCase() === terms[i].literal.toUpperCase()) {
        return terms[i];
      }
    }

    return null;
  }

  function terms_set(val) {
    for (var j = terms.length - 1; j >= 0; j--) {
      terms[j].value = (val & 1) == 1;
      val >>= 1;
    }
  }
  /*
   * Simple lexical analyzer
   */


  var expression;
  var expressionLoc;

  function lex(exp) {
    expression = exp;
    expressionLoc = 0;
  }

  function token() {
    while (expressionLoc < expression.length) {
      var ch = expression.charAt(expressionLoc);

      if (ch !== ' ') {
        // Is this a term?
        for (var i in terms) {
          var maybe = expression.substr(expressionLoc, terms[i].literal.length);

          if (maybe === terms[i].literal) {
            return maybe;
          }
        }

        return ch;
      }

      expressionLoc++;
    }

    return null;
  }

  function advance() {
    var t = token();

    if (t !== null) {
      expressionLoc += t.length;
    }
  }

  this.set_size(4);
};

/***/ }),

/***/ "./packages/kmap/src/Logic/Minterms.js":
/*!*********************************************!*\
  !*** ./packages/kmap/src/Logic/Minterms.js ***!
  \*********************************************/
/*! exports provided: Minterms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minterms", function() { return Minterms; });
/**
 * Object that represents a list of minterms and can generate random lists
 * @constructor
 */
var Minterms = function Minterms() {
  this.size = 4;
  this.minterms = []; // List of numbers

  this.dontcare = []; // List of don't cares

  /**
   * Generate random minterms and optionally dontcares
   * @param oneChance probability a minterm will be true
   * If omitted, the probability is 0.5
   * @param dcChance probablity a minterm will a dontcare
   * If omitted, the probability is 0
   */

  this.generate = function (oneChance, dcChance) {
    if (oneChance === undefined) {
      oneChance = 0.5;
    }

    if (dcChance === undefined) {
      dcChance = 0;
    }

    this.dontcare = [];
    this.minterms = [];
    var num = Math.pow(2, this.size);

    for (var i = 0; i < num; i++) {
      var rnd = Math.random();

      if (rnd <= oneChance) {
        this.minterms.push(i);
      } else if (rnd > 1 - dcChance) {
        this.dontcare.push(i);
      }
    }
  };
  /**
   * Generate random minterms and optionally dontcares
   * @param oneChance probability a minterm will be true
   * If omitted, the probability is 0.5
   * @param oneMin Minimum acceptable number of minterms
   * @param oneMax Maximum acceptable number of minterms
   * @param dcChance probablity a minterm will a dontcare
   * If omitted, the probability is 0
   * @param dcMin Minimum acceptable number of don't cares
   * @param dxMax Maximum acceptable number of don't cares
   */


  this.generate_bounded = function (oneChance, oneMin, oneMax, dcChance, dcMin, dcMax) {
    if (dcMin === undefined) {
      dcMin = 0;
    }

    if (dcMax === undefined) {
      dcMax = Math.pow(2, this.size);
    }

    for (var i = 0; i < 1000; i++) {
      this.generate(oneChance, dcChance);

      if (this.minterms.length >= oneMin && this.minterms.length <= oneMax && this.dontcare.length >= dcMin && this.dontcare.length <= dcMax) {
        return;
      }
    }
  };
  /**
   * Set the minterms list. This will accept any number of function arguments.
   */


  this.set = function () {
    this.minterms = [];

    for (var i = 0; i < arguments.length; i++) {
      this.minterms.push(arguments[i]);
    }

    this.minterms.sort(function (a, b) {
      return a - b;
    });
  };
  /**
   * Set from a list of minterms as an array
   * @param minterms Minterms array. The array is copied.
   * @param dontcare Optional don't care array
   */


  this.set_from = function (minterms, dontcare) {
    this.minterms = minterms.slice();
    this.minterms.sort(function (a, b) {
      return a - b;
    });

    if (dontcare !== null) {
      this.dontcare = dontcare.slice();
      this.dontcare.sort(function (a, b) {
        return a - b;
      });
    } else {
      this.dontcare = [];
    }
  };
  /**
   * Determine if two minterm lists are the same.
   * @param other Other Minterms object
   */


  this.equal = function (other) {
    var otherMinterms;

    if (other instanceof Logic.Minterms) {
      otherMinterms = other.minterms;
    } else {
      otherMinterms = other;
    }

    if (otherMinterms.length !== this.minterms.length) {
      return false;
    }

    for (var i = 0; i < otherMinterms.length; i++) {
      if (otherMinterms[i] != this.minterms[i]) {
        return false;
      }
    }

    return true;
  };

  this.clear = function () {
    this.minterms = [];
  };

  this.add = function (minterm) {
    for (var i in this.minterms) {
      if (this.minterms[i] == minterm) {
        return;
      }
    }

    this.minterms.push(minterm);
    this.minterms.sort(function (a, b) {
      return a - b;
    });
  };

  this.list = function (withBreak) {
    var first = true;
    var ret = '';
    var cr = false;

    for (var i in this.minterms) {
      if (first) {
        first = false;
      } else {
        ret += ', ';
      }

      if (withBreak === true && !cr && ret.length > 40) {
        cr = true;
        ret += '<br>';
      }

      ret += 'm' + this.minterms[i];
    }

    return ret;
  };

  this.list_dontcare = function (withBreak) {
    var first = true;
    var ret = '';
    var cr = false;

    for (var i in this.dontcare) {
      if (first) {
        first = false;
      } else {
        ret += ', ';
      }

      if (withBreak === true && !cr && ret.length > 40) {
        cr = true;
        ret += '<br>';
      }

      ret += 'm' + this.dontcare[i];
    }

    return ret;
  };
};

/***/ }),

/***/ "./packages/kmap/src/Logic/QuineMcCluskeySolver.js":
/*!*********************************************************!*\
  !*** ./packages/kmap/src/Logic/QuineMcCluskeySolver.js ***!
  \*********************************************************/
/*! exports provided: QuineMcCluskeySolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskeySolver", function() { return QuineMcCluskeySolver; });
/* harmony import */ var _qmc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qmc */ "./packages/kmap/src/Logic/qmc.js");

/**
 * Solver for circuit minimization based on Quine McCluskey algorithm.
 * This uses the implemention in qmc.js, but adapts the interface
 * to match the variable names I use.
 * @constructor
 */

var QuineMcCluskeySolver = function QuineMcCluskeySolver() {
  this.qm = new _qmc__WEBPACK_IMPORTED_MODULE_0__["QuineMcCluskeyDataCtrl"]();
  this.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

  this.init = function (numVars) {
    this.qm.init(numVars);
    this.clear();
  };

  this.clear = function () {
    var size = Math.pow(2, this.qm.noOfVars);
    this.qm.allowDontCare = true;

    for (var i = 0; i < size; i++) {
      this.qm.setFuncData(i, 0);
    }
  };
  /**
   * Set a minterm
   * @param minterm Minterm number
   * @param value true, false, or undefined for dontcare
   */


  this.set = function (minterm, value) {
    if (value === true) {
      this.qm.setFuncData(minterm, 1);
    } else if (value === undefined) {
      this.qm.setFuncData(minterm, 2);
    } else {
      this.qm.setFuncData(minterm, 0);
    }
  };

  this.compute = function () {
    this.qm.compute();
  };

  this.num_terms = function () {
    return this.qm.minimalTermPrims.length;
  };

  this.expression = function () {
    var qm = this.qm;
    var exp = "";
    var first = true;

    if (qm.minimalTermPrims.length === 0) {
      return "0";
    }

    if (qm.minimalTermPrims.length === 1 && qm.minimalTermPrims[0].termString === '1') {
      return "1";
    } // Loop over the results


    for (var i = 0; i < qm.minimalTermPrims.length; i++) {
      if (!first) {
        exp += "+";
      } else {
        first = false;
      } //
      // Find smallest prime implicant.
      // This is probably not strictly necessary
      // but I don't trust the method they use
      // that stops on the first iteration of a
      // for/in loop.
      //


      first = true;
      var minterm;
      var primTerm = qm.minimalTermPrims[i];

      for (var imp in primTerm.implicant.imp) {
        if (first) {
          minterm = imp;
          first = false;
        } else {
          if (imp < minterm) {
            minterm = imp;
          }
        }
      } // minterm is a minterm that is needed
      // except that some bits can be masked off
      // I count backwards, since I prefer
      // the most significant value to be A
      // to match the course materials.


      var one = 1 << qm.noOfVars - 1; // If a bit is set in primTerm.implicant.bitMask,
      // that term is not needed.

      var needed = ~primTerm.implicant.bitMask;
      var term = '';

      for (var v = qm.noOfVars - 1; v >= 0; v--) {
        var v1 = qm.noOfVars - v - 1;

        if ((needed & one) === one) {
          if ((minterm & one) === one) {
            term += this.labels[v1];
          } else {
            term += this.labels[v1] + "'";
          }
        }

        one = one >> 1;
      }

      exp += term;
    }

    return exp;
  };
};

/***/ }),

/***/ "./packages/kmap/src/Logic/qmc.js":
/*!****************************************!*\
  !*** ./packages/kmap/src/Logic/qmc.js ***!
  \****************************************/
/*! exports provided: QuineMcCluskeyDataCtrl, QuineMcCluskey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskeyDataCtrl", function() { return QuineMcCluskeyDataCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskey", function() { return QuineMcCluskey; });
// Copyright (C) Thorsten Thormaehlen, Marburg, 2013, All rights reserved
// Contact: www.thormae.de
// This software is written for educational (non-commercial) purpose. 
// There is no warranty or other guarantee of fitness for this software, 
// it is provided solely "as is". 
function PetrickMethod() {
  this.problem;
  this.maxProblemSize = 100;
  this.solution;
  this.log = "";
  var that = this;

  this.test = function () {
    var andArray = new Array();
    var orArray;
    var monomA;
    var monomB;
    orArray = new Array();
    monomA = new Object(); // using objects ensures that (x and x) = x

    monomA[1] = 1;
    orArray.push(monomA);
    monomB = new Object();
    monomB[2] = 2;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[3] = 3;
    orArray.push(monomA);
    monomB = new Object();
    monomB[4] = 4;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[1] = 1;
    orArray.push(monomA);
    monomB = new Object();
    monomB[3] = 3;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[5] = 5;
    orArray.push(monomA);
    monomB = new Object();
    monomB[6] = 6;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[2] = 2;
    orArray.push(monomA);
    monomB = new Object();
    monomB[5] = 5;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[4] = 4;
    orArray.push(monomA);
    monomB = new Object();
    monomB[6] = 6;
    orArray.push(monomB);
    andArray.push(orArray);
    /*orArray = new Array();
     monomA = new Object(); 
     monomA[4] = 4;
     orArray.push(monomA);
     monomB = new Object();
     monomB[4] = 4;
     orArray.push(monomB);
     andArray.push(orArray);*/

    this.solve(andArray);
  };

  this.solve = function (eq) {
    this.problem = eq;
    this.log = ""; //printEqnArray(eq);

    printEqnArrayFancy(eq); // multiply out

    var andArray = eq;
    var loopCounter = 0;

    while (andArray.length > 1) {
      var newAndArray = new Array();

      for (var i = 1; i < andArray.length; i += 2) {
        var orTermA = andArray[i - 1];
        var orTermB = andArray[i];
        var newOrArray = new Array();

        for (var a = 0; a < orTermA.length; a++) {
          for (var b = 0; b < orTermB.length; b++) {
            var monom1 = orTermA[a];
            var monom2 = orTermB[b];
            var resultingMonom = new Object();

            for (var m in monom1) {
              resultingMonom[monom1[m]] = monom1[m];
            }

            for (var n in monom2) {
              resultingMonom[monom2[n]] = monom2[n];
            }

            newOrArray.push(resultingMonom);
          }
        }

        newAndArray.push(newOrArray);
      } // if uneven copy last and-term


      if (andArray.length % 2 === 1) {
        newAndArray.push(andArray[andArray.length - 1]);
      } //printEqnArray(newAndArray);


      printEqnArrayFancy(newAndArray);
      andArray.length = 0; // simplify or-term

      for (var i = 0; i < newAndArray.length; i++) {
        var orTerm = newAndArray[i];
        var newOrTerm = simplifyOrTerm(orTerm);

        if (newOrTerm.length > 0) {
          andArray.push(newOrTerm);
        }
      }

      var problemSize = eqnArrayProblemSize(andArray);

      if (problemSize > this.maxProblemSize) {
        console.log("Error: The cyclic covering problem is too large to be solved with Petrick's method (increase maxProblemSize). Size=" + problemSize);
        return false;
      } //printEqnArray(andArray);


      printEqnArrayFancy(andArray);
      loopCounter++;
    }

    this.solution = andArray;
    return true;
  };

  function simplifyOrTerm(orTerm) {
    // find a monom that is the same or simpler than another one
    var newOrTerm = new Array();
    var markedForDeletion = new Object();

    for (var a = 0; a < orTerm.length; a++) {
      var keepA = true;
      var monomA = orTerm[a];

      for (var b = a + 1; b < orTerm.length && keepA; b++) {
        var monomB = orTerm[b];
        var overlapBoverA = 0;
        var lengthA = 0;

        for (var m in monomA) {
          if (monomB[m] in monomA) {
            overlapBoverA++;
          }

          lengthA++;
        }

        var overlapAoverB = 0;
        var lengthB = 0;

        for (var m in monomB) {
          if (monomA[m] in monomB) {
            overlapAoverB++;
          }

          lengthB++;
        }

        if (overlapBoverA === lengthB) {
          keepA = false;
        }

        if (lengthA < lengthB && overlapAoverB === lengthA) {
          markedForDeletion[b] = b;
        }
      }

      if (keepA) {
        if (a in markedForDeletion) {// do nothing
        } else newOrTerm.push(orTerm[a]);
      }
    }

    return newOrTerm;
  }

  function printEqnArrayFancy(andArray) {
    var str = "";

    for (var i = 0; i < andArray.length; i++) {
      var first = true;
      str += "(";
      var orArray = andArray[i];

      for (var j = 0; j < orArray.length; j++) {
        if (!first) str += " &or; ";
        var monom = orArray[j];

        for (var k in monom) {
          str += "<i>p</i><sub><small>" + monom[k] + "</small></sub>";
        }

        first = false;
      }

      str += ")";
    }

    if (that.log.length > 0) {
      that.log += "<p>&hArr;&nbsp;" + str + "</p>";
    } else {
      that.log += "<p>" + str + "</p>";
    }
  }

  function eqnArrayProblemSize(andArray) {
    var monomCounter = 0;

    for (var i = 0; i < andArray.length; i++) {
      var orArray = andArray[i];
      monomCounter += orArray.length;
    }

    return monomCounter;
  }

  function printEqnArray(andArray) {
    var str = "";

    for (var i = 0; i < andArray.length; i++) {
      var first = true;
      str += "(";
      var orArray = andArray[i];

      for (var j = 0; j < orArray.length; j++) {
        if (!first) str += " or ";
        var monom = orArray[j];

        for (var k in monom) {
          str += monom[k];
        }

        first = false;
      }

      str += ")";
    }

    console.log(str);
  }
}

function PrimTerm() {
  this.implicant = -1;
  this.termString = "";
  this.color = [0, 0, 0];
  this.coloredTermString = "";
  this.used = false;
  this.neededByVar = new Object();
}

function Implicant() {
  this.imp = new Object();
  this.isPrim = false;
  this.isOnlyDontCare = false;
  this.bitMask = 0;
}

function ImplicantGroup() {
  this.group = new Array();
  this.order = -1;
}

function PrimTermTable(ord) {
  this.essentialPrimTerms = new Array();
  this.order = ord;
  this.remainingVars = new Array();
  ;
  this.remainingPrimTerms = new Array();
  this.supersededPrimTerms = new Array();
}

function hsvToRgb(h, s, v) {
  var r, g, b;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;

    case 1:
      r = q, g = v, b = p;
      break;

    case 2:
      r = p, g = v, b = t;
      break;

    case 3:
      r = p, g = q, b = v;
      break;

    case 4:
      r = t, g = p, b = v;
      break;

    case 5:
      r = v, g = p, b = q;
      break;
  }

  return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}

var QuineMcCluskeyDataCtrl = function QuineMcCluskeyDataCtrl() {
  this.noOfVars = -1;
  this.funcdata = new Array();
  this.primTerms = new Array();
  this.implicantGroups = new Array();
  this.minimalTerm = "";
  this.coloredMinimalTerm = "";
  this.minimalTermPrims = new Array();
  this.primTermTables = new Array();
  this.petrickSolver = new PetrickMethod();
  this.petrickTermPrims = new Array();
  this.allowDontCare = false;

  this.init = function (no) {
    this.noOfVars = no;
    this.funcdata.length = 0;
    this.primTerms.length = 0;
    this.implicantGroups.length = 0;
    this.minimalTerm = "0";
    this.coloredMinimalTerm = "0";
    this.minimalTermPrims.length = 0;
    this.primTermTables.length = 0;
    this.petrickTermPrims.length = 0;
    var noOfFuncData = Math.pow(2, this.noOfVars);

    for (var i = 0; i < noOfFuncData; i++) {
      this.funcdata.push(0);
    } //this.petrickSolver.test();

  };

  this.setFuncData = function (i, val) {
    if (i < 0 || i >= this.funcdata.length) return;
    this.funcdata[i] = val;
  };

  this.activated = function (i) {
    if (i < 0 || i >= this.funcdata.length) return;
    this.funcdata[i] += 1;

    if (this.allowDontCare) {
      if (this.funcdata[i] > 2) this.funcdata[i] = 0;
    } else {
      if (this.funcdata[i] > 1) this.funcdata[i] = 0;
    }

    this.compute();
  };

  this.random = function () {
    for (var i = 0; i < this.funcdata.length; i++) {
      if (this.allowDontCare) {
        this.funcdata[i] = Math.floor(Math.random() * 3);
      } else {
        this.funcdata[i] = Math.floor(Math.random() * 2);
      }
    }

    this.compute();
  };

  this.clear = function () {
    for (var i = 0; i < this.funcdata.length; i++) {
      this.funcdata[i] = 0;
    }

    this.compute();
  };

  function bitCount(value) {
    var counter = 0;

    while (value > 0) {
      if ((value & 1) === 1) counter++;
      value >>= 1;
    }

    return counter;
  }

  this.compute = function () {
    this.primTerms.length = 0;
    this.implicantGroups.length = 0;
    this.minimalTerm = "0";
    this.coloredMinimalTerm = "0";
    this.minimalTermPrims.length = 0;
    this.primTermTables.length = 0;
    this.petrickTermPrims.length = 0;
    var counter = 0;
    var lastIg = -1;
    var continueLoop = true;

    while (continueLoop) {
      continueLoop = false;
      var ig = new ImplicantGroup();

      if (counter === 0) {
        for (var i = 0; i < this.funcdata.length; i++) {
          if (this.funcdata[i] > 0) {
            var impl = new Implicant();
            impl.imp[i] = i;
            impl.isPrim = true;
            ig.group.push(impl);
            continueLoop = true;
          }
        }
      } else {
        for (var i = 0; i < lastIg.group.length; i++) {
          for (var j = i + 1; j < lastIg.group.length; j++) {
            var imp1 = lastIg.group[i];
            var imp2 = lastIg.group[j];

            if (imp1.bitMask === imp2.bitMask) {
              var found = false;
              var xor = -1;

              for (var m in imp1.imp) {
                for (var n in imp2.imp) {
                  var i1 = imp1.imp[m];
                  var i2 = imp2.imp[n]; //console.log(i1 + "<->" + i2);

                  xor = (i1 ^ i2) & ~imp1.bitMask;

                  if (bitCount(xor) === 1) {
                    //console.log("found merge candidate" + i1 + "<->" + i2);
                    found = true;
                  }

                  break;
                }

                break;
              }

              if (found) {
                imp1.isPrim = false;
                imp2.isPrim = false;
                var impl = new Implicant();
                impl.isPrim = true;
                impl.bitMask = imp1.bitMask | xor;

                for (var m in imp1.imp) {
                  impl.imp[m] = parseInt(m);
                }

                for (var n in imp2.imp) {
                  impl.imp[n] = parseInt(n);
                }

                var foundMatch = false; // determine if this combination is already there

                for (var k = 0; k < ig.group.length; k++) {
                  var exist = ig.group[k];
                  var isTheSame = true;

                  for (var m in impl.imp) {
                    var found = false;

                    for (var n in exist.imp) {
                      if (parseInt(m) === parseInt(n)) {
                        found = true;
                      }
                    }

                    if (!found) {
                      isTheSame = false;
                      break;
                    }
                  }

                  if (isTheSame) {
                    foundMatch = true;
                    break;
                  }
                }

                if (!foundMatch) {
                  ig.group.push(impl);
                  continueLoop = true;
                }
              }
            }
          }
        }
      }

      if (continueLoop) this.implicantGroups.push(ig);
      lastIg = ig;
      counter++;
    } // collect primterms


    this.primTerms.length = 0;
    this.minimalTermPrims.length = 0;
    var color = 0.0;

    for (var i = this.implicantGroups.length - 1; i >= 0; i--) {
      var g = this.implicantGroups[i].group;

      for (var j = 0; j < g.length; j++) {
        if (g[j].isPrim) {
          // prim terms introduced by don't cares
          // must have at least one 1
          var containsOne = false;
          var allFuncPrimTerm = g[j].imp;

          for (var kk in allFuncPrimTerm) {
            var k = allFuncPrimTerm[kk];

            if (this.funcdata[k] === 1) {
              containsOne = true;
            }
          }

          if (!containsOne) {
            g[j].isOnlyDontCare = true;
          } else {
            var primTerm = new PrimTerm();
            primTerm.implicant = g[j]; // extract minTerm as string

            for (var thisVal in primTerm.implicant.imp) {
              var minTerm = "";
              var one = 1;
              var needed = ~primTerm.implicant.bitMask;

              for (var v = 0; v < this.noOfVars; v++) {
                if ((needed & one) === one) {
                  if ((thisVal & one) === one) {
                    minTerm = "<i>x</i><sub><small>" + v + "</small></sub>" + minTerm;
                  } else {
                    minTerm = "<i>x&#772;</i><sub><small>" + v + "</small></sub>" + minTerm;
                  }
                }

                one = one << 1;
              }

              minTerm = "(" + minTerm + ")";
              if (primTerm.implicant.bitMask === Math.pow(2, this.noOfVars) - 1) minTerm = "1";
              primTerm.color = hsvToRgb(color, 1.0, 0.5);
              color += 0.22;
              color = color % 1.0;
              primTerm.termString = minTerm;
              var colorStr = "rgb(" + primTerm.color[0] + "," + primTerm.color[1] + "," + primTerm.color[2] + ")";
              primTerm.coloredTermString = "<span style='color:" + colorStr + "'>" + minTerm + "</span>";
              break;
            }

            this.primTerms.push(primTerm);
          }
        }
      }
    } // looking for essential prime implicants 


    var remaining = new Object();

    for (var i = 0; i < this.funcdata.length; i++) {
      if (this.funcdata[i] === 1) {
        remaining[i] = i;
      }
    }

    this.primTermTables.length = 0;
    var primTableLoop = 0;
    var primTableFound = this.primTerms.length > 0;
    var cyclicCoveringFound = false;
    var primTermTable;

    while (primTableFound) {
      primTableFound = false;
      primTermTable = new PrimTermTable(primTableLoop);

      for (var r in remaining) {
        primTermTable.remainingVars.push(remaining[r]);
      }

      if (primTableLoop === 0) {
        for (var j = 0; j < this.primTerms.length; j++) {
          primTermTable.remainingPrimTerms.push(this.primTerms[j]);
        }
      } else {
        // remove rows
        var prevTable = this.primTermTables[primTableLoop - 1];

        for (var k = 0; k < prevTable.remainingPrimTerms.length; k++) {
          if (!prevTable.remainingPrimTerms[k].used) {
            var superseded = false;
            var impA = prevTable.remainingPrimTerms[k].implicant.imp;
            var varCover = new Object();
            var countA = 0;

            for (var r in remaining) {
              var v = remaining[r];

              if (v in impA) {
                varCover[v] = v;
                countA++;
              }
            }

            for (var l = 0; l < prevTable.remainingPrimTerms.length && !superseded; l++) {
              if (!prevTable.remainingPrimTerms[l].used && k !== l) {
                var impB = prevTable.remainingPrimTerms[l].implicant.imp;
                var countB = 0;

                for (var r in varCover) {
                  var v = varCover[r];

                  if (v in impB) {
                    countB++;
                  }
                }

                if (countA === countB) {
                  var countBInRemaining = 0;

                  for (var r in remaining) {
                    var v = remaining[r];

                    if (v in impB) {
                      countBInRemaining++;
                    }
                  }

                  if (countBInRemaining > countA) {
                    superseded = true;
                  } else {
                    if (k > l) {
                      superseded = true;
                    }
                  }
                }
              }
            }

            if (!superseded) {
              primTermTable.remainingPrimTerms.push(prevTable.remainingPrimTerms[k]);
            } else {
              prevTable.supersededPrimTerms.push(prevTable.remainingPrimTerms[k]);
            }
          }
        }
      }

      if (primTermTable.remainingPrimTerms.length > 0) {
        this.primTermTables.push(primTermTable);
        var currentTerms = primTermTable.remainingPrimTerms;
        var toBeRemoved = new Object();

        for (var r in remaining) {
          var i = remaining[r];
          var count = 0;
          var term = -1;

          for (var j = 0; j < currentTerms.length && count < 2; j++) {
            if (i in currentTerms[j].implicant.imp) {
              term = j;
              count++;
            }
          }

          if (count === 1) {
            currentTerms[term].neededByVar[i] = primTableLoop;

            if (!currentTerms[term].used) {
              this.minimalTermPrims.push(currentTerms[term]);
              currentTerms[term].used = true;
              primTermTable.essentialPrimTerms.push(currentTerms[term]);
              primTableFound = true;

              for (var r in remaining) {
                var ii = remaining[r];

                if (ii in currentTerms[term].implicant.imp) {
                  toBeRemoved[ii] = ii;
                }
              }
            }
          }
        } // remove columns


        var tmpRemaining = new Object();

        for (var e in remaining) {
          var ee = remaining[e];
          tmpRemaining[ee] = ee;
          delete remaining[e];
        }

        var remainingCount = 0;

        for (var r in tmpRemaining) {
          var t = tmpRemaining[r];

          if (!(t in toBeRemoved)) {
            remaining[t] = t;
            remainingCount++;
          }
        }
      }

      if (remainingCount === 0) {
        primTableFound = false; // break loop
      } else {
        if (!primTableFound) {
          cyclicCoveringFound = true;
        }
      }

      primTableLoop++;
    }

    var solutionFound = true; // Petrick's Method

    if (cyclicCoveringFound) {
      //console.log("Cyclic covering found");
      var andArray = new Array();

      for (var r in remaining) {
        var ii = remaining[r];
        var orArray = new Array();

        for (var k = 0; k < primTermTable.remainingPrimTerms.length; k++) {
          var imp = primTermTable.remainingPrimTerms[k].implicant.imp;

          if (ii in imp) {
            var monom = new Object();
            monom[k] = k;
            orArray.push(monom);
          }
        }

        andArray.push(orArray);
      }

      solutionFound = this.petrickSolver.solve(andArray);

      if (solutionFound) {
        var solutions = this.petrickSolver.solution[0];
        var bestSolution = -1;
        var bestCount = 10000000;
        var bestVarCount = 10000000;

        for (var i = 0; i < solutions.length; i++) {
          var count = 0;

          for (var j in solutions[i]) {
            count++;
          }

          if (count <= bestCount) {
            // first sort accoring to monom length
            var foundBest = true;

            if (count === bestCount) {
              var bestVarCountNew = 0;

              for (var j in solutions[i]) {
                for (var v in primTermTable.remainingPrimTerms[j].implicant.imp) {
                  bestVarCountNew++;
                }
              }

              if (bestVarCountNew >= bestVarCount) foundBest = false;
            }

            if (foundBest) {
              bestCount = count;
              bestSolution = i;
              bestVarCount = 0;

              for (var j in solutions[bestSolution]) {
                for (var v in primTermTable.remainingPrimTerms[j].implicant.imp) {
                  bestVarCount++;
                }
              }
            }
          }
        } //console.log("Best solution " + bestSolution);


        var best = solutions[bestSolution];

        for (var b in best) {
          var addPrimTerm = primTermTable.remainingPrimTerms[best[b]];
          this.minimalTermPrims.push(addPrimTerm);
          this.petrickTermPrims.push(addPrimTerm);
        }
      }
    }

    if (solutionFound) {
      this.minimalTerm = "";
      this.coloredMinimalTerm = "";
      var firstL = true;

      for (var i = 0; i < this.minimalTermPrims.length; i++) {
        if (!firstL) {
          this.minimalTerm += " &or; ";
          this.coloredMinimalTerm += " &or; ";
        }

        this.minimalTerm += this.minimalTermPrims[i].termString;
        this.coloredMinimalTerm += this.minimalTermPrims[i].coloredTermString;
        firstL = false;
      }

      if (this.minimalTermPrims.length === 0) {
        this.minimalTerm = "0";
        this.coloredMinimalTerm = "0";
      }
    } else {
      this.minimalTerm = 'Error: The cyclic covering problem is too large (increase the "maxProblemSize" parameter)';
      this.coloredMinimalTerm = 'Error: The cyclic covering problem is too large (increase the "maxProblemSize" parameter)';
    }
  };
};
var QuineMcCluskey = function QuineMcCluskey(parentDivId, columns, language) {
  var myDiv = -1;
  var divId = parentDivId;
  this.cols = columns + 1;
  this.rows = Math.pow(2, columns);
  this.data = new QuineMcCluskeyDataCtrl();
  var that = this;
  var labels;

  if (language === 0) {
    labels = {
      ttable: "Truth table",
      minExp: "Minimal boolean expression",
      impli: "Implicants",
      order: "Order",
      primChart: "Prime implicant chart",
      primChartReduced: "Reduced prime implicant chart (Iteration",
      extractedPrims: "Extracted essential prime implicants",
      extractedMPrims: "Extracted prime implicants",
      petricksM: "Petrick's method"
    };
  } else {
    labels = {
      ttable: "Wahrheitstafel",
      minExp: "Minimaler boolescher Ausdruck",
      impli: "Implikanten",
      order: "Ordnung",
      primChart: "Primimplikantentafel",
      primChartReduced: "Reduzierte Primimplikantentafel (Iteration",
      extractedPrims: "Extrahierte essentielle Primimplikanten",
      extractedMPrims: "Extrahierte Primimplikanten",
      petricksM: "Verfahren von Petrick"
    };
  }

  this.init = function () {
    this.data.init(columns);
    myDiv = document.createElement('div');

    if (!myDiv) {
      console.log("QuineMcCluskey error: can not create a canvas element");
      myDiv = -1;
    } else {
      var parent = document.getElementById(divId);

      if (!parent) {
        if (divId !== "fakeDivId") {
          console.log("QuineMcCluskey error: can not find an element with the given name: " + divId);
        }

        myDiv = -1;
      } else {
        document.body.appendChild(myDiv);
        parent.appendChild(myDiv);
      }
    }

    this.update();
  };

  this.setNoOfVars = function (vars) {
    var c = parseInt(vars);
    if (c < 1 && c > 6) return;
    this.cols = c + 1;
    this.rows = Math.pow(2, c);
    this.data.init(c);
    this.update();
  };

  this.genRandom = function () {
    this.data.random();
    this.update();
  };

  this.allowDontCares = function (type) {
    if (type > 0) {
      this.data.allowDontCare = true;
    } else {
      this.data.allowDontCare = false;
    }

    this.data.clear();
    this.update();
  };

  this.drawImplicantGroup = function (g, parent, primFlag, t, drawPetrickVars) {
    var primTermTable = this.data.primTermTables[t];
    var myTable = document.createElement('table');
    myTable.setAttribute('class', 'qmcTableClass');
    var myRow = document.createElement('tr');
    var cell1h = document.createElement('td');
    cell1h.setAttribute('class', 'qmcTdNoBorder');
    cell1h.innerHTML = "";
    myRow.appendChild(cell1h);

    for (var j = 0; j < this.data.noOfVars; j++) {
      var myCell = document.createElement('th');
      myCell.innerHTML = "<i>x</i><sub><small>" + (this.data.noOfVars - 1 - j) + "</small></sub>";
      myCell.setAttribute('class', 'qmcHeaderX qmcBit');
      myRow.appendChild(myCell);
    }

    if (primFlag) {
      for (var i = 0; i < primTermTable.remainingVars.length; i++) {
        var cellImph = document.createElement('td');
        cellImph.setAttribute('class', 'qmcTdNoBorder');
        cellImph.innerHTML = primTermTable.remainingVars[i].toString(10);
        myRow.appendChild(cellImph);
      }
    }

    var cellImph = document.createElement('td');
    cellImph.setAttribute('class', 'qmcTdNoBorder');
    cellImph.innerHTML = "";
    myRow.appendChild(cellImph);
    myTable.appendChild(myRow);
    var iMax = 0;
    if (!primFlag) iMax = g.group.length;else iMax = primTermTable.remainingPrimTerms.length;

    for (var i = 0; i < iMax; i++) {
      var impl = -1;
      if (!primFlag) impl = g.group[i];else impl = primTermTable.remainingPrimTerms[i].implicant;
      var bits = 0;
      var mask = impl.bitMask;

      for (var m in impl.imp) {
        bits = impl.imp[m];
        break;
      }

      myRow = document.createElement('tr');
      var cell1 = document.createElement('td');
      var cell1Str = "";
      var first = true;

      for (var m in impl.imp) {
        if (!first) cell1Str += ", ";
        cell1Str += impl.imp[m].toString(10);
        first = false;
      }

      cell1.innerHTML = cell1Str + ":";
      cell1.setAttribute('class', 'qmcTdNoBorder');
      myRow.appendChild(cell1);
      var res = bits.toString(2);

      for (var j = 0; j < this.data.noOfVars; j++) {
        var myCell = document.createElement('td');
        myCell.setAttribute('class', 'qmcBit');
        var str;
        var currentBit = Math.pow(2, this.data.noOfVars - 1 - j);

        if ((currentBit & mask) === currentBit) {
          str = "-";
          myCell.innerHTML = str;
        } else {
          if (j >= this.data.noOfVars - res.length) {
            str = res.charAt(j - (this.data.noOfVars - res.length));
            myCell.innerHTML = str;
          } else {
            str = "0";
            myCell.innerHTML = str;
          }
        }

        myRow.appendChild(myCell);
      }

      if (!primFlag) {
        var cellLast = document.createElement('td');
        cellLast.setAttribute('class', 'qmcTdNoBorder');

        if (impl.isPrim) {
          cellLast.innerHTML = "&#x2713;"; //equivalent &check; in most browsers

          if (impl.isOnlyDontCare) {
            cellLast.innerHTML = " (&times;)";
          }
        } else {
          cellLast.innerHTML = "&rarr;";
        }

        myRow.appendChild(cellLast);
      } else {
        for (var v = 0; v < primTermTable.remainingVars.length; v++) {
          var ii = primTermTable.remainingVars[v];
          var cellUsed = document.createElement('td');
          cellUsed.setAttribute('class', 'qmcPrimItem qmcBit');

          if (ii in impl.imp) {
            cellUsed.innerHTML = "&#9675;";

            if (ii in primTermTable.remainingPrimTerms[i].neededByVar) {
              if (primTermTable.remainingPrimTerms[i].neededByVar[ii] === t) {
                cellUsed.innerHTML = "<span style='color:green;'>&#9679;</span>";
              }
            }
          }

          myRow.appendChild(cellUsed);
        }

        var cellLast = document.createElement('td');
        cellLast.setAttribute('class', 'qmcTdNoBorder');
        cellLast.innerHTML = primTermTable.remainingPrimTerms[i].coloredTermString;

        if (drawPetrickVars) {
          var pVars = "&nbsp;&equiv;&nbsp;<i>p</i><sub><small>" + i + "</small></sub>";
          cellLast.innerHTML += pVars;
        }

        myRow.appendChild(cellLast);
      }

      myTable.appendChild(myRow);
    }

    parent.appendChild(myTable);
  };

  this.update = function () {
    if (myDiv === -1) return; // clean up

    var oldInnerDiv = document.getElementById(divId + "_innerDiv");
    if (oldInnerDiv) myDiv.removeChild(oldInnerDiv);
    var myInnerDiv = document.createElement('div');
    myInnerDiv.setAttribute('id', divId + "_innerDiv");
    var myTruthTableDiv = document.createElement('div');
    myTruthTableDiv.innerHTML = "<div>" + labels['ttable'] + ":</div>";
    myTruthTableDiv.setAttribute('class', 'qmcTableLabelDiv'); // re-generate

    var myTable = document.createElement('table');
    myTable.setAttribute('class', 'qmcTableClass');
    var myRow = document.createElement('tr');
    var cell1h = document.createElement('td');
    cell1h.innerHTML = "";
    cell1h.setAttribute('class', 'qmcTdNoBorder');
    myRow.appendChild(cell1h);

    for (var j = 0; j < this.cols; j++) {
      var myCell = document.createElement('th');

      if (j < this.cols - 1) {
        myCell.innerHTML = "<i>x</i><sub><small>" + (this.cols - 2 - j) + "</small></sub>";
        myCell.setAttribute('class', 'qmcHeaderX qmcBit');
      } else {
        myCell.innerHTML = "<i>y</i>";
        myCell.setAttribute('class', 'qmcHeaderY qmcBit');
      }

      myRow.appendChild(myCell);
    }

    myTable.appendChild(myRow);

    for (var i = 0; i < this.rows; i++) {
      myRow = document.createElement('tr');
      var cell1 = document.createElement('td');
      cell1.innerHTML = i.toString(10) + ":";
      cell1.setAttribute('class', 'qmcTdNoBorder');
      myRow.appendChild(cell1);
      var res = i.toString(2);

      for (var j = 0; j < this.cols; j++) {
        var myCell = document.createElement('td');

        if (j < this.cols - 1) {
          // x element
          myCell.setAttribute('class', 'qmcBit');
          var str;

          if (j >= this.cols - 1 - res.length) {
            str = res.charAt(j - (this.cols - 1 - res.length));
            myCell.innerHTML = str;
          } else {
            str = "0";
            myCell.innerHTML = str;
          }
        } else {
          // y element
          myCell.setAttribute('class', 'qmcBit qmcBitY');
          myCell.setAttribute('title', i);

          myCell.onmousedown = function (event) {
            myCellMouseDown(event);
          };

          if (this.data.funcdata[i] === 0) {
            myCell.innerHTML = "0";
          }

          if (this.data.funcdata[i] === 1) {
            myCell.innerHTML = "1";
          }

          if (this.data.funcdata[i] === 2) {
            myCell.innerHTML = "&times;";
          }
        }

        myRow.appendChild(myCell);
      }

      myTable.appendChild(myRow);
    }

    myTruthTableDiv.appendChild(myTable);
    myInnerDiv.appendChild(myTruthTableDiv);

    for (var i = 0; i < this.data.implicantGroups.length; i++) {
      var myImplicantDiv = document.createElement('div');
      myImplicantDiv.innerHTML = "<div>" + labels['impli'] + " (" + labels['order'] + " " + i + "):</div>";
      myImplicantDiv.setAttribute('class', 'qmcTableLabelDiv');
      this.drawImplicantGroup(this.data.implicantGroups[i], myImplicantDiv, false, 0, false);
      myInnerDiv.appendChild(myImplicantDiv);
    }

    for (var i = 0; i < this.data.primTermTables.length; i++) {
      var resultDiv = document.createElement('div');

      if (i === 0) {
        resultDiv.innerHTML = "<p>" + labels['primChart'] + ":</p";
      } else {
        resultDiv.innerHTML = "<p> " + labels['primChartReduced'] + " " + (i - 1) + "):</p>";
      }

      resultDiv.setAttribute('class', 'qmcTableResultDiv');
      var drawPetrickVars = false;

      if (this.data.petrickTermPrims.length > 0 && i === this.data.primTermTables.length - 1) {
        drawPetrickVars = true;
      }

      this.drawImplicantGroup(this.data.primTerms, resultDiv, true, i, drawPetrickVars);
      var essPTermsDiv = document.createElement('div');
      var essPTermsStr = "";
      var primTermTable = this.data.primTermTables[i];
      var jj = primTermTable.essentialPrimTerms.length;

      for (var j = 0; j < jj; j++) {
        essPTermsStr += primTermTable.essentialPrimTerms[j].coloredTermString;
        if (j !== jj - 1) essPTermsStr += ", ";
      }

      if (jj > 0) {
        essPTermsDiv.innerHTML = "<p>" + labels['extractedPrims'] + ": <span class='qmcMathFont'>" + essPTermsStr + "</span></p>";
        essPTermsDiv.setAttribute('class', 'qmcIndent');
        resultDiv.appendChild(essPTermsDiv);
      }

      myInnerDiv.appendChild(resultDiv);
    }

    if (this.data.petrickTermPrims.length > 0) {
      var petrickDiv = document.createElement('div');
      petrickDiv.innerHTML = "<p> " + labels['petricksM'] + " </p>";
      var petrickInnerDiv = document.createElement('div');
      petrickInnerDiv.innerHTML = "<span class='qmcMathFont'>" + this.data.petrickSolver.log + "</span>";
      petrickInnerDiv.setAttribute('class', 'qmcIndent');
      petrickDiv.appendChild(petrickInnerDiv);
      var petrickEssTermsDiv = document.createElement('div');
      var petrickEssTermsStr = "";
      var jj = this.data.petrickTermPrims.length;

      for (var j = 0; j < jj; j++) {
        petrickEssTermsStr += this.data.petrickTermPrims[j].coloredTermString;
        if (j !== jj - 1) petrickEssTermsStr += ", ";
      }

      if (jj > 0) {
        petrickEssTermsDiv.innerHTML = "<p>" + labels['extractedMPrims'] + " (" + labels['petricksM'] + "): <span class='qmcMathFont'>" + petrickEssTermsStr + "</span></p>";
        petrickEssTermsDiv.setAttribute('class', 'qmcIndent');
        petrickDiv.appendChild(petrickEssTermsDiv);
      }

      myInnerDiv.appendChild(petrickDiv);
    }

    var termDiv = document.createElement('div');
    termDiv.innerHTML = "<p><strong>" + labels['minExp'] + ":</strong> </p> <p ><span class='qmcMathFont'><i>y</i>&nbsp;=&nbsp;" + this.data.coloredMinimalTerm;
    +"</span></p>";
    myInnerDiv.appendChild(termDiv);
    myDiv.appendChild(myInnerDiv);
  };

  function myCellMouseDown(e) {
    var targ;

    if (e.target) {
      targ = e.target;
    } else {
      // deal with Microsoft
      if (e.srcElement) targ = e.srcElement;
    }

    if (targ.nodeType === 3) {
      // deal with Safari
      targ = targ.parentNode;
    }

    var i = parseInt(targ.title);
    that.data.activated(i);
    that.update();
  }
};

/***/ }),

/***/ "./packages/kmap/src/img/x.png":
/*!*************************************!*\
  !*** ./packages/kmap/src/img/x.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACDUlEQVQ4y42RT0iTcRjHn4mUQg3mu7mXJe82F8ocqNAYSrCJWEvoEEIgZjQMvAwPBiJ0MQgvCiZTSndI8aQUAy/dpB3800GJqSVIDI0dJq8gijLzsE+HgSJN13N7nuf7+f54vj9he/sGg4PPCQY/MTPzjHS6WAoU8fgd1taqck1j42cUBcxmMBohFHp/Lby+bqah4RdNTd/Z3HQJbreO0ZgzcLvBaoX+/td54cnJTmprd7FYoLwc2treCqOjzXR3vyEQWMbphOZmKCuDaLTjEhyLPUZROIerq48ZGOi+EOzvGwiHP+DxgN8PFkuGhYX7IiLMzwfQtGNUFUwmcDoPiEQe5L8xGg3h92fQNPB6fzA39wiHI32eUXv7F2Zn7denPDFxD683iaKAzXaGqoLVmmVoqI9MxlDol3ImS0v1OBynqGou4EjkZT5d0ZUOsdgLOTy8Kdkscnoqsrtb9V8vi4gwPd1JaSk4HAcMDz+lp+cdJSUwNdVRGI7HfSjKH2pqUiwv15/Pw+GPmExnLC7evRre2HDjdOrU1e2QSFRe2p2cFBMMfiUQWMkPb23Z0TSdlpZvrK4a82p0/TYezw7j46/+Xba2ruDz/UTXzdeeODYWxmY7Ym9PuRj29k7S1bVAKqUVzCiZVHG59olEnoiIFJFI1IjdrsvIyENDRcXvQgaGysq09PWF5ejolojIXw1nKIZdhwDhAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./packages/kmap/src/kmap.scss":
/*!*************************************!*\
  !*** ./packages/kmap/src/kmap.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("73b774d2", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./packages/kmap/src/polyfills/all.js":
/*!********************************************!*\
  !*** ./packages/kmap/src/polyfills/all.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pointer_events_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointer_events_polyfill */ "./packages/kmap/src/polyfills/pointer_events_polyfill.js");
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classlist-polyfill */ "./node_modules/classlist-polyfill/src/index.js");
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__);


_pointer_events_polyfill__WEBPACK_IMPORTED_MODULE_0__["PointerEventsPolyfill"].initialize();

/***/ }),

/***/ "./packages/kmap/src/polyfills/pointer_events_polyfill.js":
/*!****************************************************************!*\
  !*** ./packages/kmap/src/polyfills/pointer_events_polyfill.js ***!
  \****************************************************************/
/*! exports provided: PointerEventsPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEventsPolyfill", function() { return PointerEventsPolyfill; });
/*
 * Pointer Events Polyfill: Adds support for the style attribute "pointer-events: none" to browsers without this feature (namely, IE).
 * (c) 2013, Kent Mewhort, licensed under BSD. See LICENSE.txt for details.
 */
// constructor
var PointerEventsPolyfill = function PointerEventsPolyfill(options) {
  // set defaults
  this.options = {
    selector: '*',
    mouseEvents: ['click', 'dblclick', 'mousedown', 'mouseup'],
    usePolyfillIf: function usePolyfillIf() {
      if (navigator.appName == 'Microsoft Internet Explorer') {
        var agent = navigator.userAgent;

        if (agent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/) != null) {
          var version = parseFloat(RegExp.$1);
          if (version < 11) return true;
        }
      }

      return false;
    }
  };

  if (options) {
    var obj = this;
    $.each(options, function (k, v) {
      obj.options[k] = v;
    });
  }

  if (this.options.usePolyfillIf()) this.register_mouse_events();
}; // singleton initializer

PointerEventsPolyfill.initialize = function (options) {
  if (PointerEventsPolyfill.singleton == null) PointerEventsPolyfill.singleton = new PointerEventsPolyfill(options);
  return PointerEventsPolyfill.singleton;
}; // handle mouse events w/ support for pointer-events: none


PointerEventsPolyfill.prototype.register_mouse_events = function () {
  // register on all elements (and all future elements) matching the selector
  $(document).on(this.options.mouseEvents.join(" "), this.options.selector, function (e) {
    if ($(this).css('pointer-events') == 'none') {
      // peak at the element below
      var origDisplayAttribute = $(this).css('display');
      $(this).css('display', 'none');
      var underneathElem = document.elementFromPoint(e.clientX, e.clientY);
      if (origDisplayAttribute) $(this).css('display', origDisplayAttribute);else $(this).css('display', ''); // fire the mouse event on the element below

      e.target = underneathElem;
      $(underneathElem).trigger(e);
      return false;
    }

    return true;
  });
};

/***/ }),

/***/ "./vendor/cl/kmap/_kmap.scss":
/*!***********************************!*\
  !*** ./vendor/cl/kmap/_kmap.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a26e155a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/kmap/index.js":
/*!*********************************!*\
  !*** ./vendor/cl/kmap/index.js ***!
  \*********************************/
/*! exports provided: Kmap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kmap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_kmap.scss */ "./vendor/cl/kmap/_kmap.scss");
/* harmony import */ var _kmap_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kmap_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kmap */ "./packages/kmap/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kmap", function() { return kmap__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _js_KmapFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/KmapFactory */ "./vendor/cl/kmap/js/KmapFactory.js");



/* harmony default export */ __webpack_exports__["default"] = (kmap__WEBPACK_IMPORTED_MODULE_1__["default"]);

_js_KmapFactory__WEBPACK_IMPORTED_MODULE_2__["KmapFactory"].create(Site.Site);

/***/ }),

/***/ "./vendor/cl/kmap/js/KmapFactory.js":
/*!******************************************!*\
  !*** ./vendor/cl/kmap/js/KmapFactory.js ***!
  \******************************************/
/*! exports provided: KmapFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmapFactory", function() { return KmapFactory; });
/* harmony import */ var kmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kmap */ "./packages/kmap/index.js");

var KmapFactory = function KmapFactory() {};

KmapFactory.create = function (site) {
  function install() {
    var elements = document.querySelectorAll('div.cl-kmap');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var json = element.textContent;
      element.innerHTML = '';
      var kmap = new kmap__WEBPACK_IMPORTED_MODULE_0__["default"](element, json);
      kmap.startNow();
      element.style.display = 'block';
    }
  }

  site.start(function () {
    install();
  });
  site.messageListener(function (msg, data) {
    if (msg === 'cl-quiz-after-installed') {
      install();
    }
  });
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9rbWFwLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2ttYXAvX2ttYXAuc2NzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9Hcm91cHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9LbWFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvTWFpbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL01hbnVhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL01hcC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL01lc3NhZ2VEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9PcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvU29sdXRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9VdGlsaXR5L1JlYWR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvV29yay5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9Mb2dpYy9FeHByZXNzaW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0xvZ2ljL01pbnRlcm1zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0xvZ2ljL1F1aW5lTWNDbHVza2V5U29sdmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0xvZ2ljL3FtYy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9pbWcveC5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMva21hcC5zY3NzPzA0ZGEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvcG9seWZpbGxzL2FsbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9wb2x5ZmlsbHMvcG9pbnRlcl9ldmVudHNfcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2ttYXAvX2ttYXAuc2Nzcz9mNjM5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9rbWFwL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9rbWFwL2pzL0ttYXBGYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkdlbmVyYXRvciIsIm1haW4iLCJlbGVtZW50IiwibWludGVybXNTcGFuIiwib3B0aW9ucyIsImluaXRpYWxpemUiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImgzIiwiaW5uZXJUZXh0IiwiZml4ZWQiLCJmb3JtIiwicCIsImNyZWF0ZVRleHROb2RlIiwic2l6ZSIsInNlbGVjdCIsIm9wdGlvbnMxIiwib3B0aW9uczIiLCJzIiwiZ2VuRG9udENhcmUiLCJnZW5Eb250Q2FyZU9wdGlvbiIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsIiwidmFsdWUiLCJuZXdTaXplIiwicGFyc2VJbnQiLCJtYXRjaCIsImJ1dHRvbiIsImdlbmVyYXRlIiwicmVmcmVzaCIsIm1pbnRlcm1zIiwiZG9udGNhcmUiLCJsZW5ndGgiLCJsaXN0IiwibGlzdF9kb250Y2FyZSIsIkdyb3VwIiwiZ3JvdXBzIiwic2VsZWN0ZWQiLCJjb2xvciIsImxzdCIsImZpcnN0IiwiaSIsInNwYW4iLCJhIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJ3aWQiLCJoaXQiLCJpbnNldERlcHRoIiwiaW5zZXQiLCJzcGFjaW5nIiwiY29scyIsInJvd3MiLCJtYXBSIiwibWFwQyIsIm1heCIsImNudCIsImRyYXdHcm91cCIsImMxIiwicjEiLCJjMiIsInIyIiwidCIsImMzIiwicjMiLCJjNCIsInI0Iiwid2lkNCIsImhpdDQiLCJjNSIsInI1Iiwid2lkOCIsImhpdDgiLCJ4MSIsInkxIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiYXJjVG8iLCJzdHJva2UiLCJHcm91cHMiLCJzZWwiLCJ0aGF0IiwiY29sb3JOIiwid29yayIsIm1hcCIsInN0cmljdCIsImFuZDEiLCJNYXRoIiwicG93IiwiYW5kMiIsIm9yIiwiYml0cyIsInZhbGlkIiwiaHRtbCIsImRsZyIsIk1lc3NhZ2VEaWFsb2ciLCJvcGVuIiwib2siLCJqIiwiYWRkX2dyb3VwIiwiZHJhd0dyb3VwcyIsImNsZWFyIiwiZ3JvdXAiLCJjb2xvcnMiLCJwdXNoIiwiY2FudmFzIiwiZ2V0X2NhbnZhcyIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJjb3VudGVyIiwic3BsaWNlIiwiS21hcCIsIlBBQ0tBR0UiLCJyZXF1aXJlIiwidmVyc2lvbiIsIk9wdGlvbnMiLCJtYWlucyIsInN0YXJ0IiwiUmVhZHkiLCJnbyIsInN0YXJ0Tm93IiwiRWxlbWVudCIsIk1haW4iLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJrbWFwIiwiTWludGVybXMiLCJnZW5lcmF0b3IiLCJzb2x1dGlvbiIsIm1hbnVhbCIsIk1hbnVhbCIsIldvcmsiLCJTb2x1dGlvbiIsInNldCIsImRjTWF4IiwiZ2VuZXJhdGVfYm91bmRlZCIsIm5ld01pbnRlcm1zIiwic2V0X2Zyb20iLCJzbGljZSIsInJlbmRlciIsImxhYmVscyIsIm1hbnVhbE1pbnRlcm1zIiwibWFudWFsRG9udENhcmVzIiwibWFudWFsVmFyaWFibGVzIiwibGVmdCIsImxhYmVsIiwic2V0QXR0cmlidXRlIiwidGFrZSIsInJpZ2h0IiwibWludGVybXNsaXN0IiwicGFyc2UiLCJkb250Y2FyZWxpc3QiLCJyZXBsYWNlIiwic3BsaXQiLCJpbnB1dCIsInJlTSIsInJlIiwiaXRlbXMiLCJyZXQiLCJmb3JFYWNoIiwiaXRlbSIsIk1hcCIsInRvcExlZnQiLCJib3RSaWdodCIsInRhYmxlIiwicmVzdCIsImNvbGhlYWRzIiwiQSIsIkIiLCJDIiwiRCIsInRyIiwiciIsImMiLCJ0ZCIsIm1ha2VfY2VsbCIsInNldFRpbWVvdXQiLCJzZXRfY2FudmFzIiwid2luZG93IiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0bCIsIm9mZnNldExlZnQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJiciIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwibWludGVybSIsInRvX21pbnRlcm0iLCJiaXQiLCJsYWJlbE1pbnRlcm1zIiwiY29udGFpbnMiLCJuIiwiaW5kZXhPZiIsImlzX3NlbGVjdGVkIiwic29ydCIsImIiLCJ0ZHMiLCJ0aXRsZSIsImJvZHkiLCJtYXNrIiwidGIiLCJkYiIsImNvbnRyb2xzIiwiT2JqZWN0Iiwic3Vic3RyIiwiSlNPTiIsImF0b2IiLCJ2ZXJib3NlIiwibWFwSGVhZGluZyIsInJlc3VsdFNlbCIsInN1Y2Nlc3MiLCJleHByZXNzaW9uU2VsIiwic29sdmUiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJleHByZXNzaW9uSW5wdXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJjaGVjayIsIm10IiwiZXhwcmVzc2lvbiIsIkV4cHJlc3Npb24iLCJzZXRfc2l6ZSIsInN0ciIsIm1zZyIsImZhaWwiLCJxbSIsIlF1aW5lTWNDbHVza2V5U29sdmVyIiwiaW5pdCIsInVuZGVmaW5lZCIsImNvbXB1dGUiLCJxbUV4cHJlc3Npb24iLCJtIiwiaW5saXN0IiwiYXNfZ29vZF9hcyIsIm1pbmltdW1FeHByZXNzaW9uIiwidGVybXMiLCJleHAiLCJ0ZXJtIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJjaGVja0JveCIsImNoZWNrZWQiLCJkaXNwbGF5Iiwic3oiLCJ0ZXJtc19pbml0Iiwib3RoZXIiLCJudW1fcHJvZHVjdHMiLCJudW1fdGVybXMiLCJnZW5lcmF0ZV9taW50ZXJtcyIsInRlcm1zX3NldCIsInJlc3VsdFMiLCJzb3AiLCJwcm9kIiwicmVzdWx0UCIsIm5vdCIsImxleCIsInRva2VuIiwiY2giLCJlcnJvciIsImFkdmFuY2UiLCJnZXRfdGVybSIsImV4cHJlc3Npb25Mb2MiLCJsaXRlcmFsIiwidG9VcHBlckNhc2UiLCJjaGFyQXQiLCJtYXliZSIsIm9uZUNoYW5jZSIsImRjQ2hhbmNlIiwibnVtIiwicm5kIiwicmFuZG9tIiwib25lTWluIiwib25lTWF4IiwiZGNNaW4iLCJhcmd1bWVudHMiLCJlcXVhbCIsIm90aGVyTWludGVybXMiLCJMb2dpYyIsIndpdGhCcmVhayIsImNyIiwiUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCIsIm51bVZhcnMiLCJub09mVmFycyIsImFsbG93RG9udENhcmUiLCJzZXRGdW5jRGF0YSIsIm1pbmltYWxUZXJtUHJpbXMiLCJ0ZXJtU3RyaW5nIiwicHJpbVRlcm0iLCJpbXAiLCJpbXBsaWNhbnQiLCJvbmUiLCJuZWVkZWQiLCJiaXRNYXNrIiwidiIsInYxIiwiUGV0cmlja01ldGhvZCIsInByb2JsZW0iLCJtYXhQcm9ibGVtU2l6ZSIsImxvZyIsInRlc3QiLCJhbmRBcnJheSIsIkFycmF5Iiwib3JBcnJheSIsIm1vbm9tQSIsIm1vbm9tQiIsImVxIiwicHJpbnRFcW5BcnJheUZhbmN5IiwibG9vcENvdW50ZXIiLCJuZXdBbmRBcnJheSIsIm9yVGVybUEiLCJvclRlcm1CIiwibmV3T3JBcnJheSIsIm1vbm9tMSIsIm1vbm9tMiIsInJlc3VsdGluZ01vbm9tIiwib3JUZXJtIiwibmV3T3JUZXJtIiwic2ltcGxpZnlPclRlcm0iLCJwcm9ibGVtU2l6ZSIsImVxbkFycmF5UHJvYmxlbVNpemUiLCJjb25zb2xlIiwibWFya2VkRm9yRGVsZXRpb24iLCJrZWVwQSIsIm92ZXJsYXBCb3ZlckEiLCJsZW5ndGhBIiwib3ZlcmxhcEFvdmVyQiIsImxlbmd0aEIiLCJtb25vbSIsImsiLCJtb25vbUNvdW50ZXIiLCJwcmludEVxbkFycmF5IiwiUHJpbVRlcm0iLCJjb2xvcmVkVGVybVN0cmluZyIsInVzZWQiLCJuZWVkZWRCeVZhciIsIkltcGxpY2FudCIsImlzUHJpbSIsImlzT25seURvbnRDYXJlIiwiSW1wbGljYW50R3JvdXAiLCJvcmRlciIsIlByaW1UZXJtVGFibGUiLCJvcmQiLCJlc3NlbnRpYWxQcmltVGVybXMiLCJyZW1haW5pbmdWYXJzIiwicmVtYWluaW5nUHJpbVRlcm1zIiwic3VwZXJzZWRlZFByaW1UZXJtcyIsImhzdlRvUmdiIiwiaCIsImciLCJmbG9vciIsImYiLCJxIiwiZnVuY2RhdGEiLCJwcmltVGVybXMiLCJpbXBsaWNhbnRHcm91cHMiLCJtaW5pbWFsVGVybSIsImNvbG9yZWRNaW5pbWFsVGVybSIsInByaW1UZXJtVGFibGVzIiwicGV0cmlja1NvbHZlciIsInBldHJpY2tUZXJtUHJpbXMiLCJubyIsIm5vT2ZGdW5jRGF0YSIsImFjdGl2YXRlZCIsImJpdENvdW50IiwibGFzdElnIiwiY29udGludWVMb29wIiwiaWciLCJpbXBsIiwiaW1wMSIsImltcDIiLCJmb3VuZCIsInhvciIsImkxIiwiaTIiLCJmb3VuZE1hdGNoIiwiZXhpc3QiLCJpc1RoZVNhbWUiLCJjb250YWluc09uZSIsImFsbEZ1bmNQcmltVGVybSIsImtrIiwidGhpc1ZhbCIsIm1pblRlcm0iLCJjb2xvclN0ciIsInJlbWFpbmluZyIsInByaW1UYWJsZUxvb3AiLCJwcmltVGFibGVGb3VuZCIsImN5Y2xpY0NvdmVyaW5nRm91bmQiLCJwcmltVGVybVRhYmxlIiwicHJldlRhYmxlIiwic3VwZXJzZWRlZCIsImltcEEiLCJ2YXJDb3ZlciIsImNvdW50QSIsImwiLCJpbXBCIiwiY291bnRCIiwiY291bnRCSW5SZW1haW5pbmciLCJjdXJyZW50VGVybXMiLCJ0b0JlUmVtb3ZlZCIsImNvdW50IiwiaWkiLCJ0bXBSZW1haW5pbmciLCJlIiwiZWUiLCJyZW1haW5pbmdDb3VudCIsInNvbHV0aW9uRm91bmQiLCJzb2x1dGlvbnMiLCJiZXN0U29sdXRpb24iLCJiZXN0Q291bnQiLCJiZXN0VmFyQ291bnQiLCJmb3VuZEJlc3QiLCJiZXN0VmFyQ291bnROZXciLCJiZXN0IiwiYWRkUHJpbVRlcm0iLCJmaXJzdEwiLCJRdWluZU1jQ2x1c2tleSIsInBhcmVudERpdklkIiwiY29sdW1ucyIsImxhbmd1YWdlIiwibXlEaXYiLCJkaXZJZCIsImRhdGEiLCJ0dGFibGUiLCJtaW5FeHAiLCJpbXBsaSIsInByaW1DaGFydCIsInByaW1DaGFydFJlZHVjZWQiLCJleHRyYWN0ZWRQcmltcyIsImV4dHJhY3RlZE1QcmltcyIsInBldHJpY2tzTSIsInBhcmVudCIsImdldEVsZW1lbnRCeUlkIiwidXBkYXRlIiwic2V0Tm9PZlZhcnMiLCJ2YXJzIiwiZ2VuUmFuZG9tIiwiYWxsb3dEb250Q2FyZXMiLCJ0eXBlIiwiZHJhd0ltcGxpY2FudEdyb3VwIiwicHJpbUZsYWciLCJkcmF3UGV0cmlja1ZhcnMiLCJteVRhYmxlIiwibXlSb3ciLCJjZWxsMWgiLCJteUNlbGwiLCJjZWxsSW1waCIsInRvU3RyaW5nIiwiaU1heCIsImNlbGwxIiwiY2VsbDFTdHIiLCJyZXMiLCJjdXJyZW50Qml0IiwiY2VsbExhc3QiLCJjZWxsVXNlZCIsInBWYXJzIiwib2xkSW5uZXJEaXYiLCJteUlubmVyRGl2IiwibXlUcnV0aFRhYmxlRGl2Iiwib25tb3VzZWRvd24iLCJteUNlbGxNb3VzZURvd24iLCJteUltcGxpY2FudERpdiIsInJlc3VsdERpdiIsImVzc1BUZXJtc0RpdiIsImVzc1BUZXJtc1N0ciIsImpqIiwicGV0cmlja0RpdiIsInBldHJpY2tJbm5lckRpdiIsInBldHJpY2tFc3NUZXJtc0RpdiIsInBldHJpY2tFc3NUZXJtc1N0ciIsInRlcm1EaXYiLCJ0YXJnIiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsIm5vZGVUeXBlIiwicGFyZW50Tm9kZSIsIlBvaW50ZXJFdmVudHNQb2x5ZmlsbCIsInNlbGVjdG9yIiwibW91c2VFdmVudHMiLCJ1c2VQb2x5ZmlsbElmIiwibmF2aWdhdG9yIiwiYXBwTmFtZSIsImFnZW50IiwidXNlckFnZW50IiwicGFyc2VGbG9hdCIsIlJlZ0V4cCIsIiQxIiwib2JqIiwiJCIsImVhY2giLCJyZWdpc3Rlcl9tb3VzZV9ldmVudHMiLCJzaW5nbGV0b24iLCJvbiIsImpvaW4iLCJjc3MiLCJvcmlnRGlzcGxheUF0dHJpYnV0ZSIsInVuZGVybmVhdGhFbGVtIiwiZWxlbWVudEZyb21Qb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwidHJpZ2dlciIsIkttYXBGYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsInNpdGUiLCJpbnN0YWxsIiwianNvbiIsInRleHRDb250ZW50IiwibWVzc2FnZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDhCQUE4QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7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QUFtQkMsSUFBSSxDQUFDQSxJQUF4QixFOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1GLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVcsQ0FDckMsQ0FETTs7QUFHUEEsV0FBVyxDQUFDQyxNQUFaLEdBQXFCLFVBQVNFLElBQVQsRUFBZTtBQUVuQyxXQUFTQyxPQUFULEdBQW1CO0FBQ2xCLFFBQU1sWSxRQUFRLEdBQUd4SSxRQUFRLENBQUN5SSxnQkFBVCxDQUEwQixhQUExQixDQUFqQjs7QUFDQSxTQUFJLElBQUloRyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUMrRixRQUFRLENBQUN4RyxNQUF4QixFQUFnQ1MsQ0FBQyxFQUFqQyxFQUFxQztBQUNwQyxVQUFJOUMsT0FBTyxHQUFHNkksUUFBUSxDQUFDL0YsQ0FBRCxDQUF0QjtBQUNBLFVBQU1rZSxJQUFJLEdBQUdoaEIsT0FBTyxDQUFDaWhCLFdBQXJCO0FBQ0FqaEIsYUFBTyxDQUFDdUIsU0FBUixHQUFvQixFQUFwQjtBQUNBLFVBQU13SCxJQUFJLEdBQUcsSUFBSWQsNENBQUosQ0FBU2pJLE9BQVQsRUFBa0JnaEIsSUFBbEIsQ0FBYjtBQUNBalksVUFBSSxDQUFDTCxRQUFMO0FBQ0ExSSxhQUFPLENBQUNtRCxLQUFSLENBQWNzTixPQUFkLEdBQXdCLE9BQXhCO0FBQ0E7QUFDRDs7QUFFRHFRLE1BQUksQ0FBQ3ZZLEtBQUwsQ0FBWSxZQUFNO0FBQ2pCd1ksV0FBTztBQUNQLEdBRkQ7QUFJQUQsTUFBSSxDQUFDSSxlQUFMLENBQXFCLFVBQUM3UixHQUFELEVBQU11TSxJQUFOLEVBQWU7QUFDbkMsUUFBR3ZNLEdBQUcsS0FBSyx5QkFBWCxFQUFzQztBQUNyQzBSLGFBQU87QUFDUDtBQUNELEdBSkQ7QUFLQSxDQXZCRCxDIiwiZmlsZSI6ImttYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJLbWFwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkttYXBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImEwYzlmMTM0NTUzYTJiOTE0YTkwXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkttYXBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wva21hcC9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmttYXAtY2wge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxZW0gYXV0bztcXG4gIG1heC13aWR0aDogNjUwcHg7XFxufVxcblxcbmRpdi5rbWFwLWNsIGgzIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMWVtIDAgMC41ZW0gMDtcXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG59XFxuXFxuZGl2LmttYXAtY2wgYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuMTVlbSAxZW07XFxuICBmb250LXNpemU6IC45ZW07XFxuICBtaW4td2lkdGg6IDZlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wgdGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTAlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDMpIGJ1dHRvbiB7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwYWRkaW5nOiAxZW0gMCAwIDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgd2lkdGg6IDEyZW07XFxuICBtYXgtd2lkdGg6IDEyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCBidXR0b24ge1xcbiAgd2lkdGg6IDllbTtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6Zmlyc3QtY2hpbGQgLmxpc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB0b3A6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCAubGlzdCAuZ3JvdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzLjJlbTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBtYXJnaW46IDAuMjVlbSAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCAubGlzdCAuZ3JvdXAgc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHJpZ2h0OiAwLjI1ZW07XFxuICBib3R0b206IDAuMjVlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCAubGlzdCAuZ3JvdXAgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcveC5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcGFkZGluZzogMWVtIDJlbSAxZW0gMWVtO1xcbiAgbWluLXdpZHRoOiAyNWVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6bnRoLWNoaWxkKDIpIGNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbnRhYmxlLmttYXAtY2wge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIGlucHV0IHtcXG4gIHdpZHRoOiAzZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHIge1xcbiAgYm9yZGVyOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0aCxcXG50YWJsZS5rbWFwLWNsIHRkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0ciB0aCB7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRkIHNwYW4ubWludGVybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuMTVlbTtcXG4gIGxlZnQ6IDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRkLmttYXAtY2wtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRyOmZpcnN0LWNoaWxkIHRoIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGg6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXI6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQgLmttYXAtY2wtbGVmdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMS41ZW07XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQgLmttYXAtY2wtcmlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxLjVlbTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIC5rbWFwLWNsLWxpbmUge1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJlbSkgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJlbSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyZW0pIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0yZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6bm90KDpmaXJzdC1jaGlsZCkgdGgge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLWdlbmVyYXRvciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuZGl2LmttYXAtY2wtZ2VuZXJhdG9yIGZvcm0ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYua21hcC1jbC1nZW5lcmF0b3IgcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAuNzVlbSAwO1xcbiAgcGFkZGluZy10b3A6IDAuMjVlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLWdlbmVyYXRvciBwIHNwYW4ge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuZGl2LmttYXAtY2wtc29sdXRpb24gYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcveC5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBidXR0b24ge1xcbiAgd2lkdGg6IDhlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtc29sdXRpb24gYnV0dG9uLmttYXAtY2wtc29sdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiA+IGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYua21hcC1jbC1tYW51YWwgZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIHAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wta21hcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyBUaGUgcHVibGljLXBhdGggbW9kdWxlIG11c3QgYmUgaW1wb3J0ZWQgZmlyc3QhXHJcbi8vIGltcG9ydCAnLi9zcmMvcHVibGljLXBhdGguanMnO1xyXG4vL1xyXG5pbXBvcnQgJy4vc3JjL3BvbHlmaWxscy9hbGwnO1xyXG5pbXBvcnQgJy4vc3JjL2ttYXAuc2Nzcyc7XHJcblxyXG5pbXBvcnQge0ttYXB9IGZyb20gJy4vc3JjL0ttYXAvS21hcCc7XHJcbmV4cG9ydCB7S21hcCBhcyBkZWZhdWx0fTtcclxuIiwiaW1wb3J0IHtNaW50ZXJtc30gZnJvbSBcIi4uL0xvZ2ljL01pbnRlcm1zXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBvYmplY3QgbWFuYWdlcyB0aGUgcHJhY3RpY2UgZ2VuZXJhdG9yIHNlY3Rpb24uXHJcbiAqIEBwYXJhbSBtYWluXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdlbmVyYXRvciA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuXHJcblx0bGV0IG1pbnRlcm1zU3BhbjtcclxuXHJcblx0Y29uc3Qgb3B0aW9ucyA9IG1haW4ub3B0aW9ucztcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtZ2VuZXJhdG9yJyk7XHJcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdFx0Ly8gSGVhZGluZ1xyXG5cdFx0Y29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cdFx0aDMuaW5uZXJUZXh0ID0gb3B0aW9ucy5maXhlZCA/ICdNaW50ZXJtcycgOiAnTWludGVybSBHZW5lcmF0b3InO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRwLmlubmVyVGV4dCA9ICdTaXplOiAnO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHRcdGlmKG9wdGlvbnMuZml4ZWQpIHtcclxuXHRcdFx0cC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyArIG9wdGlvbnMuc2l6ZSArICcgTWludGVybXM6ICcpKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBUaGUgc2l6ZSBzZWxlY3QgY29udHJvbFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHRcdFx0cC5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG5cclxuXHRcdFx0bGV0IG9wdGlvbnMxID0gJyc7XHJcblx0XHRcdGxldCBvcHRpb25zMiA9ICcnO1xyXG5cdFx0XHRmb3IobGV0IHM9Mjsgczw9NDsgcysrKSB7XHJcblx0XHRcdFx0aWYocyA9PT0gK21haW4ub3B0aW9ucy5zaXplKSB7XHJcblx0XHRcdFx0XHRpZihtYWluLm9wdGlvbnMuZ2VuRG9udENhcmUpIHtcclxuXHRcdFx0XHRcdFx0b3B0aW9uczEgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdcIj4nICsgcyArICc8L29wdGlvbj4nO1xyXG5cdFx0XHRcdFx0XHRpZihtYWluLm9wdGlvbnMuZ2VuRG9udENhcmVPcHRpb24pIHtcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zMiArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ2RcIiBzZWxlY3RlZD4nICsgcyArIFwiIHcvZG9uJ3QgY2FyZXM8L29wdGlvbj5cIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0b3B0aW9uczEgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdcIiBzZWxlY3RlZD4nICsgcyArICc8L29wdGlvbj4nO1xyXG5cdFx0XHRcdFx0XHRpZihtYWluLm9wdGlvbnMuZ2VuRG9udENhcmVPcHRpb24pIHtcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zMiArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ2RcIj4nICsgcyArIFwiIHcvZG9uJ3QgY2FyZXM8L29wdGlvbj5cIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0aW9uczEgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdcIj4nICsgcyArICc8L29wdGlvbj4nO1xyXG5cdFx0XHRcdFx0aWYobWFpbi5vcHRpb25zLmdlbkRvbnRDYXJlT3B0aW9uKSB7XHJcblx0XHRcdFx0XHRcdG9wdGlvbnMyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHMgKyAnZFwiPicgKyBzICsgXCIgPHNwYW4+dy9kb24ndCBjYXJlczwvc3Bhbj48L29wdGlvbj5cIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNlbGVjdC5pbm5lckhUTUwgPSBvcHRpb25zMSArIG9wdGlvbnMyO1xyXG5cclxuXHRcdFx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bGV0IHZhbCA9IHNlbGVjdC52YWx1ZTtcclxuXHRcdFx0XHR2YXIgbmV3U2l6ZSA9IHBhcnNlSW50KHZhbCk7XHJcblx0XHRcdFx0bWFpbi5vcHRpb25zLmdlbkRvbnRDYXJlID0gdmFsLm1hdGNoKC9kJC8pICE9PSBudWxsO1xyXG5cdFx0XHRcdG1haW4ubmV3U2l6ZShuZXdTaXplKTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdC8vXHJcblx0XHRcdC8vIFRoZSBHZW5lcmF0ZSBidXR0b25cclxuXHRcdFx0Ly9cclxuXHRcdFx0cC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcblx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRidXR0b24uaW5uZXJUZXh0ID0gJ0dlbmVyYXRlJztcclxuXHRcdFx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuXHRcdFx0cC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bWFpbi5nZW5lcmF0ZSgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdG1pbnRlcm1zU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdHAuYXBwZW5kQ2hpbGQobWludGVybXNTcGFuKTtcclxuXHJcblx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHRpZihtYWluLm1pbnRlcm1zLmRvbnRjYXJlLmxlbmd0aCA+IDApIHtcclxuXHRcdCAgICBtaW50ZXJtc1NwYW4uaW5uZXJIVE1MID0gbWFpbi5taW50ZXJtcy5saXN0KHRydWUpICtcclxuXHRcdCAgICAgXHRcIjxicj5YPVwiICsgbWFpbi5taW50ZXJtcy5saXN0X2RvbnRjYXJlKHRydWUpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdFx0ICAgIG1pbnRlcm1zU3Bhbi5pbm5lckhUTUwgPSBtYWluLm1pbnRlcm1zLmxpc3QodHJ1ZSk7XHJcblx0ICAgIH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuXHJcblx0Ly8gLyoqXHJcblx0Ly8gICogR2VuZXJhdGUgYSBuZXcgc2V0IG9mIG1pbnRlcm1zIHdpdGggb3B0aW9uYWwgZG9uJ3QgY2FyZXNcclxuXHQvLyAgKi9cclxuICAgIC8vIHRoaXMuZ2VuZXJhdGUgPSBmdW5jdGlvbigpIHtcclxuXHQvLyAgICAgdGhpcy5taW50ZXJtcy5zaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblx0Ly8gICAgIGlmKG1haW4ub3B0aW9ucy5nZW5Eb250Q2FyZSkge1xyXG5cdC8vIFx0ICAgIHZhciBkY01heCA9IDg7XHJcblx0Ly8gXHQgICAgc3dpdGNoKG1haW4ub3B0aW9ucy5zaXplKSB7XHJcblx0Ly8gXHRcdCAgICBjYXNlIDI6XHJcblx0Ly8gXHRcdFx0ICAgIGRjTWF4ID0gMjtcclxuXHQvLyBcdFx0XHQgICAgYnJlYWs7XHJcblx0Ly9cclxuXHQvLyBcdFx0ICAgIGNhc2UgMzpcclxuXHQvLyBcdFx0XHQgICAgZGNNYXggPSA0O1xyXG5cdC8vIFx0XHRcdCAgICBicmVhaztcclxuXHQvLyBcdCAgICB9XHJcblx0Ly8gXHQgICAgdGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgbWFpbi5vcHRpb25zLnNpemUpLTEsXHJcblx0Ly8gXHRcdCAgICAwLjIsIDEsIGRjTWF4KTtcclxuXHQvL1xyXG5cdC8vIFx0ICAgIG1pbnRlcm1zU3Bhbi5pbm5lckhUTUwgPSB0aGlzLm1pbnRlcm1zLmxpc3QodHJ1ZSkgK1xyXG5cdC8vIFx0XHQgICAgXCI8YnI+WD1cIiArIHRoaXMubWludGVybXMubGlzdF9kb250Y2FyZSh0cnVlKTtcclxuXHQvL1xyXG5cdC8vIFx0ICAgIG1haW4ubmV3TWludGVybXModGhpcy5taW50ZXJtcyk7XHJcblx0Ly8gICAgIH0gZWxzZSB7XHJcblx0Ly8gXHQgICAgdGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgbWFpbi5vcHRpb25zLnNpemUpLTEpO1xyXG5cdC8vXHJcblx0Ly8gXHQgICAgbWludGVybXNTcGFuLmlubmVySFRNTCA9IHRoaXMubWludGVybXMubGlzdCh0cnVlKTtcclxuXHQvLyBcdCAgICBtYWluLm5ld01pbnRlcm1zKHRoaXMubWludGVybXMpO1xyXG5cdC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG5cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIEEgc2luZ2xlIGdyb3VwXHJcbiAqIEBwYXJhbSBncm91cHMgS21hcC5Hcm91cCBvYmplY3RcclxuICogQHBhcmFtIGxpc3QgTGlzdCB0byBhZGQgdGhpcyBpdGVtIHRvXHJcbiAqIEBwYXJhbSBzZWxlY3RlZCBNaW50ZXJtcyB0aGF0IGFyZSBzZWxlY3RlZFxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3IgdG8gZHJhdyBpdGVtXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdyb3VwID0gZnVuY3Rpb24oZ3JvdXBzLCBsaXN0LCBzZWxlY3RlZCwgY29sb3IpIHtcclxuICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgaWYobGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbHN0ID0gJyc7XHJcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgZm9yKHZhciBpPTA7IGk8c2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZighZmlyc3QpIHtcclxuICAgICAgICAgICAgbHN0ICs9ICcsJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaSA9PT0gOCkge1xyXG4gICAgICAgICAgICBsc3QgKz0gJzxici8+JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxzdCArPSBzZWxlY3RlZFtpXTtcclxuICAgIH1cclxuXHJcblx0Ly8gdmFyIGRpdiA9ICQoJzxkaXYgY2xhc3M9XCJncm91cFwiPicgKyBsc3QgKyAnPC9kaXY+Jyk7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZ3JvdXAnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBsc3Q7XHJcblxyXG5cdC8vIHZhciBzcGFuID0gJCgnPHNwYW4+PC9zcGFuPicpO1xyXG5cdC8vIGRpdi5hcHBlbmQoc3Bhbik7XHJcblx0bGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuXHQvLyB2YXIgYSA9ICQoJzxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+Jyk7XHJcblx0Ly8gc3Bhbi5hcHBlbmQoYSk7XHJcblx0bGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblx0c3Bhbi5hcHBlbmRDaGlsZChhKTtcclxuXHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIFx0bGlzdC5yZW1vdmVDaGlsZChkaXYpO1xyXG4gICAgXHRncm91cHMucmVtb3ZlKHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG5cdGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgLy8gZGl2LmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgY29sb3IpO1xyXG59XHJcblxyXG5Hcm91cC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCwgd2lkLCBoaXQsIGluc2V0RGVwdGgpIHtcclxuICAgIGxldCBpbnNldCA9IDE1O1xyXG4gICAgbGV0IHNwYWNpbmcgPSAxMDtcclxuXHJcbiAgICBsZXQgY29scywgcm93cywgbWFwUiwgbWFwQywgbWF4O1xyXG4gICAgc3dpdGNoKHRoaXMuZ3JvdXBzLm1haW4ub3B0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBjb2xzID0gMjtcclxuICAgICAgICAgICAgcm93cyA9IDI7XHJcbiAgICAgICAgICAgIG1hcFIgPSBbMCwgMSwgMCwgMV07XHJcbiAgICAgICAgICAgIG1hcEMgPSBbMCwgMCwgMSwgMV07XHJcbiAgICAgICAgICAgIG1heCA9IDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGNvbHMgPSA0O1xyXG4gICAgICAgICAgICByb3dzID0gMjtcclxuICAgICAgICAgICAgbWFwUiA9IFswLCAxLCAwLCAxLCAwLCAxLCAwLCAxXTtcclxuICAgICAgICAgICAgbWFwQyA9IFswLCAwLCAxLCAxLCAzLCAzLCAyLCAyXTtcclxuICAgICAgICAgICAgbWF4ID0gODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgY29scyA9IDQ7XHJcbiAgICAgICAgICAgIHJvd3MgPSA0O1xyXG4gICAgICAgICAgICBtYXBSID0gWzAsIDEsIDMsIDIsIDAsIDEsIDMsIDIsIDAsIDEsIDMsIDIsIDAsIDEsIDMsIDJdO1xyXG4gICAgICAgICAgICBtYXBDID0gWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDMsIDMsIDMsIDMsIDIsIDIsIDIsIDJdO1xyXG4gICAgICAgICAgICBtYXggPSAxNjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNudCA9IHRoaXMuc2VsZWN0ZWQubGVuZ3RoO1xyXG4gICAgaWYoY250ID09PSBtYXgpIHtcclxuICAgICAgICAvLyBXZSBhcmUgd3JhcHBpbmcgdGhlIHdob2xlIHRoaW5nXHJcbiAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAwLCAwLCB3aWQsIGhpdCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGNudCA9PT0gMSkge1xyXG4gICAgICAgIHZhciBjMSA9IG1hcENbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIHIxID0gbWFwUlt0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICB3aWQgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgIH0gZWxzZSBpZihjbnQgPT0gMikge1xyXG4gICAgICAgIHZhciBjMSA9IG1hcENbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIHIxID0gbWFwUlt0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgYzIgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciByMiA9IG1hcFJbdGhpcy5zZWxlY3RlZFsxXV07XHJcblxyXG4gICAgICAgIGlmKHIxID09IHIyKSB7XHJcbiAgICAgICAgICAgIC8vIEhvcml6b250YWxcclxuICAgICAgICAgICAgaWYoYzIgPCBjMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBjMTsgYzEgPSBjMjsgYzIgPSB0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZigoYzIgLSBjMSkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYWRqYWNlbnQhXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMyICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAqIDIgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKGMxIC0gMSkgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkICogMiAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgKiAyIC8gY29scywgaGl0IC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBWZXJ0aWNhbFxyXG4gICAgICAgICAgICBpZihyMiA8IHIxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIxOyByMSA9IHIyOyByMiA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKChyMiAtIHIxKSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhZGphY2VudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIyICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgLyBjb2xzLCBoaXQgKiAyIC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgKHIxLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgLyBjb2xzLCBoaXQgKiAyIC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAqIDIgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYoY250ID09IDQpIHtcclxuICAgICAgICB2YXIgYzEgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciByMSA9IG1hcFJbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIGMyID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzFdXTtcclxuICAgICAgICB2YXIgcjIgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciBjMyA9IG1hcENbdGhpcy5zZWxlY3RlZFsyXV07XHJcbiAgICAgICAgdmFyIHIzID0gbWFwUlt0aGlzLnNlbGVjdGVkWzJdXTtcclxuICAgICAgICB2YXIgYzQgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbM11dO1xyXG4gICAgICAgIHZhciByNCA9IG1hcFJbdGhpcy5zZWxlY3RlZFszXV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXJlIGFsbCBpbiBzYW1lIHJvdz9cclxuICAgICAgICBpZihyMSA9PSByMiAmJiByMiA9PSByMyAmJiByMyA9PSByNCkge1xyXG4gICAgICAgICAgICAvLyBTaXplIDQgY292ZXIgaW4gdGhlIHNhbWUgcm93XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICB3aWQgKiA0IC8gY29scywgaGl0IC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGMxID09IGMyICYmIGMyID09IGMzICYmIGMzID09IGM0KSB7XHJcbiAgICAgICAgICAgIC8vIFNpemUgNCBjb3ZlciBpbiB0aGUgc2FtZSBjb2x1bW5cclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAqIDQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUaGlzIG11c3QgYmUgc3F1YXJlXHJcbiAgICAgICAgICAgIHZhciB3aWQ0ID0gd2lkICogMiAvIGNvbHM7XHJcbiAgICAgICAgICAgIHZhciBoaXQ0ID0gaGl0ICogMiAvIHJvd3M7XHJcblxyXG4gICAgICAgICAgICBpZihjMSA9PSAwICYmIGMyID09IDAgJiYgYzMgPT0gMyAmJiBjNCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbGVmdC9yaWdodCBzaWRlIHNwbGl0XHJcbiAgICAgICAgICAgICAgICBpZihyMSA9PSAwICYmIHIyID09IDMgJiYgcjMgPT0gMCAmJiByNCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm91ciBjb3JuZXIgc3BsaXRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgtMSkgKiB3aWQgLyBjb2xzLCAoLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoLTEpICogd2lkIC8gY29scywgKDMpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoMykgKiB3aWQgLyBjb2xzLCAoLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoMykgKiB3aWQgLyBjb2xzLCAoMykgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocjEgPiByMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHIxOyByMSA9IHIyOyByMiA9IHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgtMSkgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKDMpICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKHIxID09IDAgJiYgcjIgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaWYoYzEgPiBjMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gYzE7IGMxID0gYzM7IGMzID0gdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSB0b3AtYm90dG9tIHNwbGl0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgKC0xKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgKDMpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNpbXBsZSBzcXVhcmUhXHJcbiAgICAgICAgICAgICAgICBpZihjMSA+IGMzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBjMTsgYzEgPSBjMzsgYzMgPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocjEgPiByMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcjE7IHIxID0gcjI7IHIyID0gdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY250ID09IDgpIHtcclxuICAgICAgICB2YXIgYzEgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciByMSA9IG1hcFJbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIGMyID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzFdXTtcclxuICAgICAgICB2YXIgcjIgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciBjMyA9IG1hcENbdGhpcy5zZWxlY3RlZFsyXV07XHJcbiAgICAgICAgdmFyIHIzID0gbWFwUlt0aGlzLnNlbGVjdGVkWzJdXTtcclxuICAgICAgICB2YXIgYzQgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbM11dO1xyXG4gICAgICAgIHZhciByNCA9IG1hcFJbdGhpcy5zZWxlY3RlZFszXV07XHJcbiAgICAgICAgdmFyIGM1ID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzRdXTtcclxuICAgICAgICB2YXIgcjUgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbNF1dO1xyXG5cclxuICAgICAgICBpZihjMSA9PSBjMiAmJiBjMiA9PSBjMyAmJiBjMyA9PSBjNCkge1xyXG4gICAgICAgICAgICB2YXIgd2lkOCA9IHdpZCAqIDIgLyBjb2xzO1xyXG4gICAgICAgICAgICB2YXIgaGl0OCA9IGhpdCAqIDQgLyByb3dzO1xyXG5cclxuICAgICAgICAgICAgLy8gVmVydGljYWwgbGF5b3V0XHJcbiAgICAgICAgICAgIGlmKGMxID09IDAgJiYgYzUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgLy8gTGVmdC9yaWdodCBzcGxpdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoLTEpICogd2lkIC8gY29scywgKDApICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKDMpICogd2lkIC8gY29scywgKDApICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGMxID4gYzUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjMSA9IGM1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCAoMCkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9Ib3Jpem9udGFsIGxheW91dFxyXG4gICAgICAgICAgICB2YXIgd2lkOCA9IHdpZCAqIDQgLyBjb2xzO1xyXG4gICAgICAgICAgICB2YXIgaGl0OCA9IGhpdCAqIDIgLyByb3dzO1xyXG5cclxuICAgICAgICAgICAgaWYoKHIyIC0gcjEpID4gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3BsaXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgMCAqIHdpZCAvIGNvbHMsICgtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAwICogd2lkIC8gY29scywgKDMpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHIxID4gcjIpIHtcclxuICAgICAgICAgICAgICAgICAgICByMSA9IHIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgMCAqIHdpZCAvIGNvbHMsIChyMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Hcm91cC5wcm90b3R5cGUuZHJhd0dyb3VwID0gZnVuY3Rpb24oY3R4LCB4MSwgeTEsIHdpZCwgaGl0LCBpbnNldCkge1xyXG4gICAgdmFyIHggPSB4MSArIGluc2V0O1xyXG4gICAgdmFyIHkgPSB5MSArIGluc2V0O1xyXG4gICAgdmFyIHdpZHRoID0gd2lkIC0gaW5zZXQgKiAyIC0gMTtcclxuICAgIHZhciBoZWlnaHQgPSBoaXQgLSBpbnNldCAqIDIgLSAxO1xyXG4gICAgdmFyIHJhZGl1cyA9IDMwO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDc7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG5cclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oeCx5K3JhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgseStoZWlnaHQtcmFkaXVzKTtcclxuICAgIGN0eC5hcmNUbyh4LHkraGVpZ2h0LHgrcmFkaXVzLHkraGVpZ2h0LHJhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgrd2lkdGgtcmFkaXVzLHkraGVpZ2h0KTtcclxuICAgIGN0eC5hcmNUbyh4K3dpZHRoLHkraGVpZ2h0LHgrd2lkdGgseStoZWlnaHQtcmFkaXVzLHJhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgrd2lkdGgseStyYWRpdXMpO1xyXG4gICAgY3R4LmFyY1RvKHgrd2lkdGgseSx4K3dpZHRoLXJhZGl1cyx5LHJhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgrcmFkaXVzLHkpO1xyXG4gICAgY3R4LmFyY1RvKHgseSx4LHkrcmFkaXVzLHJhZGl1cyk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbn0iLCJpbXBvcnQge01lc3NhZ2VEaWFsb2d9IGZyb20gJy4vTWVzc2FnZURpYWxvZyc7XHJcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuL0dyb3VwXCI7XHJcblxyXG4vKipcclxuICogVGhlIGdyb3VwcyBhcmVhIG9mIHRoZSBlZGl0b3JcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBzID0gZnVuY3Rpb24obWFpbiwgc2VsKSB7XHJcblx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHR0aGlzLm1haW4gPSBtYWluO1xyXG5cclxuXHRsZXQgbGlzdDtcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdHNlbC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdFx0YnV0dG9uLmlubmVyVGV4dCA9ICdDb3Zlcic7XHJcblxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0bGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcblx0XHRzZWwuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG5cdFx0dGhpcy5ncm91cHMgPSBbXTtcclxuXHRcdHRoaXMuY29sb3JOID0gMDtcclxuXHJcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0bGV0IHNlbGVjdGVkID0gbWFpbi53b3JrLm1hcC5zZWxlY3RlZDtcclxuICAgICAgICAgICAgXHJcblx0XHRcdGlmKG1haW4ub3B0aW9ucy5zdHJpY3QpIHtcclxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgaG93IG1hbnkgY29tbW9uIGJpdHMgdGhlcmUgYXJlXHJcblx0XHRcdFx0bGV0IGFuZDEgPSBNYXRoLnBvdygyLCBtYWluLm9wdGlvbnMuc2l6ZSkgLSAxO1xyXG5cdFx0XHRcdGxldCBhbmQyID0gYW5kMTtcclxuXHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7IGk8c2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBzZWwgPSBzZWxlY3RlZFtpXTtcclxuXHRcdFx0XHRcdGFuZDEgJj0gc2VsO1xyXG5cdFx0XHRcdFx0YW5kMiAmPSB+c2VsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IG9yID0gYW5kMSB8IGFuZDI7XHJcblx0XHRcdFx0bGV0IGJpdHMgPSAwO1xyXG5cdFx0XHRcdGxldCBzaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblxyXG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPHNpemU7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYoKG9yICYgMSkgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0Yml0cysrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG9yID4+PSAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gVGVzdCBmb3IgdmFsaWRcclxuXHRcdFx0XHR2YXIgdmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdHN3aXRjaChzZWxlY3RlZC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHR2YWxpZCA9IGJpdHMgPT0gc2l6ZSAtIDE7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBiaXRzID09IHNpemUgLSAyO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDg6XHJcblx0XHRcdFx0XHRcdHZhbGlkID0gYml0cyA9PSBzaXplIC0gMztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAxNjpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+R3JvdXBpbmcgbXVzdCBiZSBvZiBzb21lIHBvd2VyIG9mIHR3byBtaW50ZXJtcy48L3A+PHA+VGhlIG9ubHkgJyArXHJcblx0XHRcdFx0XHRcdFx0J2dyb3VwaW5ncyBwb3NzaWJsZSBhcmUgMSwgMiwgNCwgOCwgb3IgMTYsIGRlcGVuZGluZyBvbiB0aGUgc2l6ZSBvZiB0aGUgJyArXHJcblx0XHRcdFx0XHRcdFx0J0thcm5hdWdoIG1hcC48L3A+JztcclxuXHRcdFx0XHRcdFx0bGV0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcblx0XHRcdFx0XHRcdGRsZy5vcGVuKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKCF2YWxpZCkge1xyXG5cdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+WW91ciBtaW50ZXJtIGdyb3VwaW5nIGlzIGludmFsaWQuPC9wPjxwPkdyb3VwaW5ncyBtdXN0IGJlIHN1Y2ggJyArXHJcblx0XHRcdFx0XHRcdCd0aGF0IHRoZXJlIGFyZSBiaXRzIGluIGNvbW1vbi4gVGhpcyBtZWFucyB0aGUgZ3JvdXBpbmdzIG11c3QgYmUgYSByZWN0YW5nbGUgJyArXHJcblx0XHRcdFx0XHRcdCdvbiB0aGUgS2FybmF1Z2ggbWFwLiBUaGlzIGNhbiBiZSBhIDEgYnkgNCByZWN0YW5nbGUgb3IgYSAyIGJ5IDIgcmVjdGFuZ2xlIGZvciAnICtcclxuXHRcdFx0XHRcdFx0J2EgZ3JvdXBpbmcgb2YgNCwgZm9yIGV4YW1wbGUuIE5vdGUgdGhhdCB0aGUgbWFwIGRvZXMgPGVtPndyYXAgYXJvdW5kPC9lbT4gYXQnICtcclxuXHRcdFx0XHRcdFx0JyB0aGUgZWRnZXMsIHNvIHRoZSByaWdodCBzaWRlIGlzIGFkamFjZW50IHRvIHRoZSBsZWZ0IHNpZGUsIGZvciBleGFtcGxlLjwvcD4nO1xyXG5cdFx0XHRcdFx0bGV0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcblx0XHRcdFx0XHRkbGcub3BlbigpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBFbnN1cmUgdGhpcyBncm91cCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTx0aGF0Lmdyb3Vwcy5sZW5ndGggJiYgdmFsaWQ7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYodGhhdC5ncm91cHNbaV0uc2VsZWN0ZWQubGVuZ3RoID09PSBzZWxlY3RlZC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9rID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaj0wOyBqPHRoYXQuZ3JvdXBzW2ldLnNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhhdC5ncm91cHNbaV0uc2VsZWN0ZWRbal0gIT09IHNlbGVjdGVkW2pdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvayA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmKCFvaykge1xyXG5cdFx0XHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+VGhpcyBjb3ZlciBhbHJlYWR5IGV4aXN0cy48L3A+JztcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGxnID0gbmV3IE1lc3NhZ2VEaWFsb2cobWFpbiwgXCJZb3UgY2FuJ3QgZG8gdGhhdFwiLCBodG1sKTtcclxuXHRcdFx0XHRcdFx0XHRkbGcub3BlbigpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hZGRfZ3JvdXAoc2VsZWN0ZWQpO1xyXG5cdFx0XHR0aGlzLmRyYXdHcm91cHMoKTtcclxuXHJcblx0XHRcdG1haW4ud29yay5tYXAuY2xlYXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgYSBuZXcgZ3JvdXAgKGNvdmVyKVxyXG5cdCAqIEBwYXJhbSBtaW50ZXJtcyBBcnJheSBvZiBtaW50ZXJtcyBpbiB0aGUgZ3JvdXBcclxuXHQgKi9cclxuXHR0aGlzLmFkZF9ncm91cCA9IGZ1bmN0aW9uKG1pbnRlcm1zKSB7XHJcblx0XHRsZXQgZ3JvdXAgPSBuZXcgR3JvdXAodGhpcywgbGlzdCwgbWludGVybXMsIHRoaXMuY29sb3JzW3RoaXMuY29sb3JOXSk7XHJcblx0XHR0aGlzLmNvbG9yTiA9ICh0aGlzLmNvbG9yTiArIDEpICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG5cdFx0dGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEcmF3IGFsbCBvZiB0aGUgZ3JvdXBzIG9uIHRoZSBjYW52YXNcclxuXHQgKi9cclxuXHR0aGlzLmRyYXdHcm91cHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGNhbnZhcyA9IG1haW4ud29yay5tYXAuZ2V0X2NhbnZhcygpO1xyXG5cdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cdFx0dmFyIHdpZCA9IGNhbnZhcy53aWR0aDtcclxuXHRcdHZhciBoaXQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkLCBoaXQpO1xyXG5cclxuXHRcdHZhciBzaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblx0XHR2YXIgY291bnRlciA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8TWF0aC5wb3coMiwgc2l6ZSk7ICBpKyspIHtcclxuXHRcdFx0Y291bnRlci5wdXNoKDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBncm91cCA9IHRoaXMuZ3JvdXBzW2ldO1xyXG5cclxuXHRcdFx0dmFyIG1heCA9IDE7XHJcblx0XHRcdGZvcih2YXIgaj0wOyBqPGdyb3VwLnNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0Y291bnRlcltncm91cC5zZWxlY3RlZFtqXV0rKztcclxuXHRcdFx0XHRpZihjb3VudGVyW2dyb3VwLnNlbGVjdGVkW2pdXSA+IG1heCkge1xyXG5cdFx0XHRcdFx0bWF4ID0gY291bnRlcltncm91cC5zZWxlY3RlZFtqXV07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRncm91cC5kcmF3KGN0eCwgd2lkLCBoaXQsIG1heCk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHRcdHRoaXMuY29sb3JOID0gMDtcclxuXHRcdHRoaXMuZ3JvdXBzID0gW107XHJcblx0XHR0aGlzLmRyYXdHcm91cHMoKTtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24oZ3JvdXApIHtcclxuXHRcdGZvcihsZXQgaT0wOyBpPHRoaXMuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuZ3JvdXBzW2ldID09PSBncm91cCkge1xyXG5cdFx0XHRcdHRoaXMuZ3JvdXBzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZHJhd0dyb3VwcygpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgJzxidXR0b24+R3JvdXA8L2J1dHRvbj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPicgK1xyXG4gICAgICcgICAgICAgICAgICAwLDEsMiwzLDQsNSw2LDcsOCwgOSwxMCwxMSwxMiwxMywxNCwxNScgK1xyXG4gICAgICcgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+PGltZyBzcmM9XCJpbWFnZXMveC5wbmdcIj48L2E+PC9zcGFuPicgK1xyXG4gICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+ICcgK1xyXG4gICAgICcgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG5cclxuICAgICAqL1xyXG59XHJcblxyXG5Hcm91cHMucHJvdG90eXBlLmNvbG9ycyA9IFtcIiMwMDAwRkZcIiwgXCIjODA4MDg4XCIsIFwiI0ZGODgwMFwiLCBcIiMwMDgwODBcIiwgXCIjQkRCNzZCXCIsXHJcbiAgICBcIiM4MDAwMDBcIiwgXCIjMDBGRjg4XCIsIFwiIzc3ODg5OVwiLCBcIiNGRkE1MDBcIiwgXCIjOUFDRDMyXCIsIFwiIzQ2ODJCNFwiXTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcbmltcG9ydCB7UmVhZHl9IGZyb20gJy4vVXRpbGl0eS9SZWFkeSc7XHJcbmltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgS21hcCBLYXJuYXVnaCBNYXAuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEttYXAgPSBmdW5jdGlvbihzZWwsIG9wdGlvbnMpIHtcclxuXHQvL1xyXG5cdC8vIE1hc3RlciBzZXQgb2YgdGhlIHZlcnNpb25cclxuXHQvL1xyXG5cdGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcblx0dGhpcy52ZXJzaW9uID0gUEFDS0FHRS52ZXJzaW9uO1xyXG5cclxuXHQvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xyXG5cdHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHQvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxyXG5cdGNvbnN0IG1haW5zID0gW107XHJcblxyXG5cdHRoaXMuc3RhcnQgPSAoKSA9PiB7XHJcblx0XHRSZWFkeS5nbygoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RhcnROb3coKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3RhcnQgS21hcCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXHJcblx0ICovXHJcblx0dGhpcy5zdGFydE5vdyA9ICgpID0+IHtcclxuXHRcdGlmKHNlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHRcdFx0Y29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIHNlbCk7XHJcblx0XHRcdG1haW5zLnB1c2gobWFpbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuXHRcdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdFx0Y29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xyXG5cdFx0XHRcdG1haW5zLnB1c2gobWFpbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihtYWlucy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0cmV0dXJuIG1haW5zWzBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1dvcmt9IGZyb20gJy4vV29yayc7XHJcbmltcG9ydCB7R2VuZXJhdG9yfSBmcm9tICcuL0dlbmVyYXRvcic7XHJcbmltcG9ydCB7U29sdXRpb259IGZyb20gXCIuL1NvbHV0aW9uXCI7XHJcbmltcG9ydCB7TWFudWFsfSBmcm9tIFwiLi9NYW51YWxcIjtcclxuaW1wb3J0IHtNaW50ZXJtc30gZnJvbSBcIi4uL0xvZ2ljL01pbnRlcm1zXCI7XHJcblxyXG4vKipcclxuICogTWFpbiB3aW5kb3cgbWFuYWdlbWVudCBvYmplY3RcclxuICogQHBhcmFtIGttYXAgS21hcCBvYmplY3QgKHBhcmVudClcclxuICogQHBhcmFtIGVsZW1lbnQgVGhlIERPTSBlbGVtZW50IHRvIHVzZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYWluID0gZnVuY3Rpb24oa21hcCwgZWxlbWVudCkge1xyXG4gICAgdGhpcy5vcHRpb25zID0ga21hcC5vcHRpb25zO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAvLyBFbnN1cmUgZW1wdHkgYW5kIGFkZCB0aGUga21hcC1jbCBjbGFzc1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgna21hcC1jbCcpO1xyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IG1pbnRlcm1zXHJcblx0dGhpcy5taW50ZXJtcyA9IG5ldyBNaW50ZXJtcygpO1xyXG5cclxuXHR0aGlzLndvcmsgPSBudWxsO1xyXG4gICAgdGhpcy5nZW5lcmF0b3IgPSBudWxsO1xyXG4gICAgdGhpcy5zb2x1dGlvbiA9IG51bGw7XHJcbiAgICB0aGlzLm1hbnVhbCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5nZW5lcmF0b3IpIHtcclxuXHQgICAgICAgIHRoaXMuZ2VuZXJhdG9yID0gbmV3IEdlbmVyYXRvcih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYW51YWwpIHtcclxuICAgICAgICBcdHRoaXMubWFudWFsID0gbmV3IE1hbnVhbCh0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXApIHtcclxuXHQgICAgICAgIHRoaXMud29yayA9IG5ldyBXb3JrKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNvbHV0aW9uKSB7XHJcblx0ICAgICAgICB0aGlzLnNvbHV0aW9uID0gbmV3IFNvbHV0aW9uKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgbWludGVybXNcclxuXHQgICAgaWYodGhpcy5vcHRpb25zLm1pbnRlcm1zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHRoaXMuZ2VuZXJhdGUoKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICB0aGlzLnNldCh0aGlzLm9wdGlvbnMubWludGVybXMsIHRoaXMub3B0aW9ucy5kb250Y2FyZSk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGUgYSBuZXcgc2V0IG9mIG1pbnRlcm1zIHdpdGggb3B0aW9uYWwgZG9uJ3QgY2FyZXNcclxuXHQgKi9cclxuXHR0aGlzLmdlbmVyYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm1pbnRlcm1zLnNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcclxuXHRcdGlmKHRoaXMub3B0aW9ucy5nZW5Eb250Q2FyZSkge1xyXG5cdFx0XHR2YXIgZGNNYXggPSA4O1xyXG5cdFx0XHRzd2l0Y2godGhpcy5vcHRpb25zLnNpemUpIHtcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRkY01heCA9IDI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0ZGNNYXggPSA0O1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgdGhpcy5vcHRpb25zLnNpemUpLTEsXHJcblx0XHRcdFx0MC4yLCAxLCBkY01heCk7XHJcblxyXG5cdFx0XHRuZXdNaW50ZXJtcygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgdGhpcy5vcHRpb25zLnNpemUpLTEpO1xyXG5cdFx0XHRuZXdNaW50ZXJtcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbihtaW50ZXJtcywgZG9udGNhcmUpIHtcclxuXHRcdHRoaXMubWludGVybXMuc2V0X2Zyb20obWludGVybXMsIGRvbnRjYXJlKTtcclxuXHRcdG5ld01pbnRlcm1zKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBuZXdNaW50ZXJtcyA9ICgpID0+IHtcclxuXHRcdGlmKHRoaXMuc29sdXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5zb2x1dGlvbi5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub3B0aW9ucy5taW50ZXJtcyA9IHRoaXMubWludGVybXMubWludGVybXMuc2xpY2UoKTtcclxuXHRcdHRoaXMub3B0aW9ucy5kb250Y2FyZSA9IHRoaXMubWludGVybXMuZG9udGNhcmUuc2xpY2UoKTtcclxuXHJcblx0XHRpZih0aGlzLndvcmsgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy53b3JrLnJlbmRlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZ2VuZXJhdG9yICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuZ2VuZXJhdG9yLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0aGlzLm5ld1NpemUgPSBmdW5jdGlvbihzaXplKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLmdlbmVyYXRlKCk7XHJcblx0fVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBNYW51YWwgZW50cnkgb2YgbWludGVybXMgYW5kIGRvbid0IGNhcmVzIHN1cHBvcnRcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBhcmUgYWRkaW5nIHRoaXMgY29tcG9uZW50IHRvXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1hbnVhbCA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCBsYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cclxuICAgIGxldCBtYW51YWxNaW50ZXJtcywgbWFudWFsRG9udENhcmVzLCBtYW51YWxWYXJpYWJsZXM7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna21hcC1jbC1tYW51YWwnKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5pbm5lckhUTUwgPSAnTWFudWFsIEVudHJ5JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuXHQgICAgLy8gdmFyIGZvcm0gPSAnPGZvcm0+PGRpdiBjbGFzcz1cImxlZnRcIj4nICtcclxuXHRcdC8vICAgICAnPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1taW50ZXJtc1wiPk1pbnRlcm1zOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1taW50ZXJtc1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD4nICtcclxuXHRcdC8vICAgICAnPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1kb250Y2FyZXNcIj5Eb25cXCd0IGNhcmVzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1kb250Y2FyZXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+JyArXHJcblx0XHQvLyAgICAgJzxwPjxidXR0b24+VGFrZTwvYnV0dG9uPjwvcD4nICtcclxuXHRcdC8vICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0XCI+JyArXHJcblx0XHQvLyAgICAgJzxwPjxsYWJlbCBmb3I9XCJtYW51YWwtdmFyaWFibGVzXCI+TGFiZWxzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC12YXJpYWJsZXNcIiB2YWx1ZT1cIicgK1xyXG5cdFx0Ly8gICAgIGxhYmVscyArICdcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+JyArXHJcblx0XHQvLyAgICAgJzwvZGl2PjwvZm9ybT4nO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBMZWZ0IGRpdlxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuXHQgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1taW50ZXJtc1wiPk1pbnRlcm1zOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1taW50ZXJtc1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD5cclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSAnTWludGVybXM6ICc7XHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG4gICAgICAgIG1hbnVhbE1pbnRlcm1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBtYW51YWxNaW50ZXJtcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIG1hbnVhbE1pbnRlcm1zLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKG1hbnVhbE1pbnRlcm1zKTtcclxuXHJcbiAgICAgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1kb250Y2FyZXNcIj5Eb25cXCd0IGNhcmVzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1kb250Y2FyZXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+XHJcblx0ICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIGxlZnQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG5cdCAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0ICAgIHAuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuXHQgICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0RvblxcJ3QgY2FyZXM6ICc7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuXHQgICAgbWFudWFsRG9udENhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHQgICAgbWFudWFsRG9udENhcmVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0ICAgIG1hbnVhbERvbnRDYXJlcy5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQobWFudWFsRG9udENhcmVzKTtcclxuXHJcblx0ICAgIC8vIDxwPjxidXR0b24+VGFrZTwvYnV0dG9uPjwvcD5cclxuXHQgICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgbGVmdC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGFrZSk7XHJcbiAgICAgICAgdGFrZS5pbm5lclRleHQgPSAnVGFrZSc7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmlnaHQgZGl2XHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC12YXJpYWJsZXNcIj5MYWJlbHM6IDwvbGFiZWw+PGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWFudWFsLXZhcmlhYmxlc1wiIHZhbHVlPVwiJyArXHJcblx0ICAgIC8vIGxhYmVscyArICdcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+XHJcblx0ICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIHJpZ2h0LmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHQgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdCAgICBwLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcblx0ICAgIGxhYmVsLmlubmVyVGV4dCA9ICdMYWJlbHM6ICc7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuXHQgICAgbWFudWFsVmFyaWFibGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHQgICAgbWFudWFsVmFyaWFibGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0ICAgIG1hbnVhbFZhcmlhYmxlcy5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQobWFudWFsVmFyaWFibGVzKTtcclxuXHQgICAgbWFudWFsVmFyaWFibGVzLnZhbHVlID0gbGFiZWxzO1xyXG5cclxuXHQgICAgdGFrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQgICAgY29uc3QgbWludGVybXNsaXN0ID0gcGFyc2UobWFudWFsTWludGVybXMudmFsdWUpO1xyXG5cdFx0ICAgIGNvbnN0IGRvbnRjYXJlbGlzdCA9IHBhcnNlKG1hbnVhbERvbnRDYXJlcy52YWx1ZSk7XHJcblxyXG5cdFx0ICAgIC8vIEdldCB0aGUgbGFiZWxzLCBzdHJpcHBpbmcgYW55IEhUTUwgdGFncyBqdXN0IGluIGNhc2VcclxuXHRcdCAgICBjb25zdCBsYWJlbHMgPSBtYW51YWxWYXJpYWJsZXMudmFsdWUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsXCJcIik7XHJcblxyXG5cdFx0ICAgIG1haW4ub3B0aW9ucy5sYWJlbHMgPSBsYWJlbHMuc3BsaXQoXCIsXCIpO1xyXG5cdFx0ICAgIG1haW4uc2V0KG1pbnRlcm1zbGlzdCwgZG9udGNhcmVsaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblx0ZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcclxuXHRcdHZhciByZU0gPSAvbS9nO1xyXG5cdFx0dmFyIHJlID0gL1ssIF0rL2c7XHJcblx0XHR2YXIgaXRlbXMgPSBpbnB1dC5yZXBsYWNlKHJlTSwgJycpLnNwbGl0KHJlKTtcclxuXHRcdHZhciByZXQgPSBbXTtcclxuXHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRpZihpdGVtICE9PSAgXCJcIikge1xyXG5cdFx0XHRcdHJldC5wdXNoKHBhcnNlSW50KGl0ZW0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7TWVzc2FnZURpYWxvZ30gZnJvbSAnLi9NZXNzYWdlRGlhbG9nJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYWN0dWFsIEthcm5hdWdoIE1hcFxyXG4gKiBAcGFyYW0gbWFpblxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYXAgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICBsZXQgdG9wTGVmdCwgYm90UmlnaHQsIGNhbnZhcztcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgna21hcC1jbCcpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgbG9jYWwgY29weSBvZiB0aGUgbGFiZWxzLCBjb252ZXJ0aW5nXHJcblx0ICAgIC8vIF8xIHRvIDxzdWI+MTwvc3ViPlxyXG5cdCAgICBjb25zdCBsYWJlbHMgPSBbXTtcclxuXHQgICAgZm9yKGNvbnN0IGxhYmVsIG9mIG1haW4ub3B0aW9ucy5sYWJlbHMpIHtcclxuXHRcdFx0bGFiZWxzLnB1c2gobGFiZWwucmVwbGFjZSgvXyhbYS16QS1aMC05XSkqL2csICc8c3ViPiQxPC9zdWI+JykpO1xyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHZhciBsZWZ0LCByaWdodCwgcmVzdCwgY29saGVhZHM7XHJcbiAgICAgICAgaWYoK21haW4ub3B0aW9ucy5zaXplID09PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcbiAgICAgICAgICAgIGxlZnQ9QjtcclxuICAgICAgICAgICAgcmlnaHQ9QTtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiPC90aD5cIjtcclxuICAgICAgICAgICAgY29saGVhZHMgPSBbQiArIFwiJ1wiLCBCXTtcclxuICAgICAgICB9IGVsc2UgaWYoK21haW4ub3B0aW9ucy5zaXplID09PSAzKSB7XHJcblx0ICAgICAgICBsZXQgQSA9IGxhYmVsc1swXTtcclxuXHQgICAgICAgIGxldCBCID0gbGFiZWxzWzFdO1xyXG5cdCAgICAgICAgbGV0IEMgPSBsYWJlbHNbMl07XHJcbiAgICAgICAgICAgIGxlZnQ9QztcclxuICAgICAgICAgICAgcmlnaHQ9QSArIEI7XHJcbiAgICAgICAgICAgIHJlc3QgPSBcIjx0aD5cIiArIEEgKyBcIidcIiArIEIgKyBcIic8L3RoPjx0aD5cIiArIEEgKyBcIidcIiArIEIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L3RoPjx0aD5cIiArIEEgKyBCICsgXCI8L3RoPjx0aD5cIiArIEEgICsgQiArIFwiJzwvdGg+XCI7XHJcbiAgICAgICAgICAgIGNvbGhlYWRzID0gW0MgKyBcIidcIiwgQ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcblx0ICAgICAgICBsZXQgQyA9IGxhYmVsc1syXTtcclxuXHQgICAgICAgIGxldCBEID0gbGFiZWxzWzNdO1xyXG4gICAgICAgICAgICBsZWZ0PUMgKyBEO1xyXG4gICAgICAgICAgICByaWdodD1BICsgQjtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiPC90aD48dGg+XCIgK1xyXG4gICAgICAgICAgICAgICAgQSArIEIgKyBcIjwvdGg+PHRoPlwiICsgQSArIEIgKyBcIic8L3RoPlwiO1xyXG4gICAgICAgICAgICBjb2xoZWFkcyA9IFtDICsgXCInXCIgKyBEICsgXCInXCIsIEMgKyBcIidcIiArIEQsIEMgKyBELCBDICsgRCArIFwiJ1wiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVG9wIHJvdyBmaXJzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdHIuaW5uZXJIVE1MID0gJzx0aD48ZGl2IGNsYXNzPVwia21hcC1jbC1sZWZ0XCI+JyArIGxlZnQgK1xyXG4gICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cImttYXAtY2wtbGluZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJrbWFwLWNsLXJpZ2h0XCI+JyArIHJpZ2h0ICsgJzwvZGl2PjwvdGg+JyArXHJcbiAgICAgICAgICAgIHJlc3Q7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFJlc3Qgb2YgdGhlIHRhYmxlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IHJvd3MgPSArbWFpbi5vcHRpb25zLnNpemUgPT09IDQgPyA0IDogMjtcclxuICAgICAgICBsZXQgY29scyA9ICttYWluLm9wdGlvbnMuc2l6ZSA9PT0gMiA/IDIgOiA0O1xyXG5cclxuXHJcbiAgICAgICAgZm9yKGxldCByPTE7IHI8PXJvd3M7IHIrKykge1xyXG4gICAgICAgIFx0dHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIFx0dHIuaW5uZXJIVE1MID0gJzx0aD4nICsgY29saGVhZHNbci0xXSArICc8L3RoPic7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGM9MTsgYzw9Y29sczsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZCA9IG1ha2VfY2VsbChjLCByKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyID09PSAxICYmIGMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3BMZWZ0ID0gdGQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYociA9PT0gcm93cyAmJiBjID09PSBjb2xzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90UmlnaHQgPSB0ZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwMCcpO1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAwJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgICAgICBzZXRfY2FudmFzKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG5cclxuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldF9jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0X2NhbnZhcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgIFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldF9jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldF9jYW52YXMoKSB7XHJcblx0ICAgIGNvbnN0IHRsID0ge2xlZnQ6IHRvcExlZnQub2Zmc2V0TGVmdCwgdG9wOiB0b3BMZWZ0Lm9mZnNldFRvcH07XHJcblx0ICAgIGNvbnN0IGJyID0ge2xlZnQ6IGJvdFJpZ2h0Lm9mZnNldExlZnQsIHRvcDogYm90UmlnaHQub2Zmc2V0VG9wfTtcclxuXHQgICAgY2FudmFzLnN0eWxlLnRvcCA9IHRsLnRvcCArICdweCc7XHJcblx0ICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gdGwubGVmdCArICdweCc7XHJcblx0ICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IChici5sZWZ0IC0gdGwubGVmdCArIGJvdFJpZ2h0Lm9mZnNldFdpZHRoKSArICdweCc7XHJcblx0ICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAoYnIudG9wIC0gdGwudG9wICsgYm90UmlnaHQub2Zmc2V0SGVpZ2h0KSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFrZV9jZWxsID0gKGMsIHIpID0+IHtcclxuICAgIFx0bGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcbiAgICAgICAgbGV0IG1pbnRlcm0gPSB0b19taW50ZXJtKGMsIHIpO1xyXG4gICAgICAgIGxldCBiaXQgPSAnMCc7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8bWFpbi5vcHRpb25zLm1pbnRlcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKG1pbnRlcm0gPT09ICttYWluLm9wdGlvbnMubWludGVybXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGJpdCA9ICcxJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoaT0wOyBpPG1haW4ub3B0aW9ucy5kb250Y2FyZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihtaW50ZXJtID09PSArbWFpbi5vcHRpb25zLmRvbnRjYXJlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBiaXQgPSAnWCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWFpbi5vcHRpb25zLmxhYmVsTWludGVybXMpIHtcclxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwibWludGVybVwiPm0nICsgbWludGVybSArICc8L3NwYW4+JyArIGJpdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBiaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubWFpbi5vcHRpb25zLnN0cmljdCAmJiBiaXQgPT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnPHA+WW91IGFyZSBvbmx5IGFsbG93ZWQgdG8gc2VsZWN0IGNlbGxzIHRoYXQgYXJlIGVpdGhlciB0cnVlICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICdvciBzZXQgdG8gZG9uXFwndCBjYXJlLjwvcD48cD5XZSBhcmUgZ3JvdXBpbmcgbWludGVybXMgdGhhdCBhbGwgYXJlIHRydWUgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NvIHdlIGNhbiBtaW5pbWl6ZSB0aGUgY2lyY3VpdC4gU28sIG9ubHkgdHJ1ZSBjZWxscyBjYW4gYmUgZ3JvdXBlZC48L3A+JztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcbiAgICAgICAgICAgICAgICBkbGcub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJrbWFwLWNsLXNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZC5jbGFzc0xpc3QucmVtb3ZlKFwia21hcC1jbC1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBuID0gdGhpcy5zZWxlY3RlZC5pbmRleE9mKG1pbnRlcm0pO1xyXG4gICAgICAgICAgICAgICAgaWYobiA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UobiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwia21hcC1jbC1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmKCFpc19zZWxlY3RlZChtaW50ZXJtKSkge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2gobWludGVybSk7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRkO1xyXG4gICAgfVxyXG5cclxuXHRjb25zdCB0b19taW50ZXJtID0gKGMsIHIpID0+IHtcclxuXHRcdGxldCBtYXA7XHJcblxyXG5cdFx0aWYoK3RoaXMubWFpbi5vcHRpb25zLnNpemUgPT09IDIpIHtcclxuXHRcdFx0bWFwID0gW1swLCAyXSwgWzEsIDNdXTtcclxuXHRcdH0gZWxzZSBpZigrdGhpcy5tYWluLm9wdGlvbnMuc2l6ZSA9PT0gMykge1xyXG5cdFx0XHRtYXAgPSBbWzAsIDIsIDYsIDRdLCBbMSwgMywgNywgNV1dO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWFwID0gW1swLCA0LCAxMiwgOF0sIFsxLCA1LCAxMywgOV0sIFszLCA3LCAxNSwgMTFdLCBbMiwgNiwgMTQsIDEwXV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1hcFtyLTFdW2MtMV07XHJcblx0fVxyXG5cclxuXHRjb25zdCBpc19zZWxlY3RlZCA9IChtaW50ZXJtKSA9PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZC5pbmRleE9mKG1pbnRlcm0pID4gLTE7IC8vXHJcblx0fVxyXG5cclxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG5cdCAgICBjb25zdCB0ZHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcclxuXHQgICAgZm9yKGxldCB0ZCBvZiB0ZHMpIHtcclxuXHQgICAgXHR0ZC5jbGFzc0xpc3QucmVtb3ZlKCdrbWFwLWNsLXNlbGVjdGVkJyk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgc3RhbmRhcmQgTWVzc2FnZSBkaWFsb2cgYm94LlxyXG4gKlxyXG4gKiBQcmV0dHkgbWluaW1hbGlzdCBkaWFsb2cgYm94XHJcbiAqXHJcbiAqIEBwYXJhbSBtYWluIFRoZSBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gdGl0bGUgVGl0bGUgZm9yIHRoZSBkaWFsb2cgYm94XHJcbiAqIEBwYXJhbSBib2R5IEJvZHkgSFRNTCB0byBwdXQgaW4gdGhlIGRpYWxvZyBib3hcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVzc2FnZURpYWxvZyA9IGZ1bmN0aW9uKG1haW4sIHRpdGxlLCBib2R5KSB7XHJcbiAgICBsZXQgZGl2ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBUaGUgdG9wIGxldmVsIGRpYWxvZyBlbGVtZW50XHJcbiAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtZGxnJyk7XHJcbiAgICAgICAgbWFpbi5lbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIC8vIFRoZSBtYXNrXHJcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobWFzayk7XHJcblxyXG4gICAgICAgIC8vIFRoZSBkaWFsb2cgYm94IGl0c2VsZlxyXG4gICAgICAgIGxldCBkbGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGxnKTtcclxuXHJcbiAgICAgICAgLy8gVGl0bGUgYmFyXHJcbiAgICAgICAgbGV0IHRiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGxnLmFwcGVuZENoaWxkKHRiKTtcclxuICAgICAgICB0Yi5pbm5lclRleHQgPSB0aXRsZTtcclxuXHJcbiAgICAgICAgLy8gQm9keVxyXG4gICAgICAgIGxldCBkYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRsZy5hcHBlbmRDaGlsZChkYik7XHJcblx0ICAgIGRiLmlubmVySFRNTCA9IGJvZHk7XHJcblxyXG5cdCAgICAvLyBDb250cm9sc1xyXG4gICAgICAgIGxldCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRsZy5hcHBlbmRDaGlsZChjb250cm9scyk7XHJcblxyXG4gICAgICAgIGxldCBvayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKG9rKTtcclxuICAgICAgICBvay5pbm5lclRleHQgPSAnT2snO1xyXG5cclxuICAgICAgICBvay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgaWYoZGl2ICE9PSBudWxsKSB7XHJcblx0ICAgICAgICAgICBtYWluLmVsZW1lbnQucmVtb3ZlQ2hpbGQoZGl2KTtcclxuXHQgICAgICAgICAgIGRpdiA9IG51bGw7XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVXNlciBpbnRlcmZhY2Ugb3B0aW9ucy5cclxuICpcclxuICogT3B0aW9ucyBjYW4gYmUgcGFzc2VkIGFzIGEgSmF2YXNjcmlwdCBPYmplY3QsIEpTT04sIG9yIGJhc2U2NC1lbmNvZGVkIEpTT05cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnMgVXNlciBwcm92aWRlZCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgPyBvcHRpb25zIDoge307XHJcblxyXG5cdGlmIChvcHRpb25zICE9PSBPYmplY3Qob3B0aW9ucykpIHtcclxuXHRcdGlmIChvcHRpb25zLnN1YnN0cigwLCAxKSA9PT0gJ3snKSB7XHJcblx0XHRcdG9wdGlvbnMgPSBKU09OLnBhcnNlKG9wdGlvbnMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gTm90IEpTT04sIG11c3QgYmUgYmFzZTY0IGVuY29kZWRcclxuXHRcdFx0b3B0aW9ucyA9IEpTT04ucGFyc2UoYXRvYihvcHRpb25zKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIC8vLyBUaGUgaW5wdXQgc2l6ZTogMiwgMywgb3IgNFxyXG5cdHRoaXMuc2l6ZSA9IDQ7XHJcblxyXG5cdC8vLyBUaGUgbWludGVybXMuIFNldCB0byBpbnRlZ2VycyBzdGFydGluZyBhdCAwXHJcblx0dGhpcy5taW50ZXJtcyA9IFtdOyAvLyBbMSwgMiwgNywgOCwgOSwgMTRdO1xyXG5cclxuXHQvLy8gVGhlIGRvbid0IGNhcmUgbWludGVybXNcclxuXHR0aGlzLmRvbnRjYXJlID0gW107XHJcblxyXG5cdC8vLyBMYWJlbHMgZm9yIHRoZSB2YXJpYWJsZXMuXHJcblx0dGhpcy5sYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnXTtcclxuXHJcblx0Ly8vIEdlbmVyYXRlIGRvbid0IGNhcmUgbWFwc1xyXG5cdHRoaXMuZ2VuRG9udENhcmUgPSBmYWxzZTtcclxuXHJcblx0Ly8vIEFyZSBkb24ndCBjYXJlcyBhbiBvcHRpb24gZm9yIHRoZSBnZW5lcmF0b3I/XHJcblx0dGhpcy5nZW5Eb250Q2FyZU9wdGlvbiA9IHRydWU7XHJcblxyXG5cdC8vXHJcblx0Ly8gVXNlciBpbnRlcmZhY2Ugc2VjdGlvbnNcclxuXHQvL1xyXG5cclxuXHQvLy8gSW5jbHVkZSB0aGUgZ2VuZXJhdG9yP1xyXG5cdHRoaXMuZ2VuZXJhdG9yID0gdHJ1ZTtcclxuXHJcblx0Ly8vIEluY2x1ZGUgdGhlIG1hbnVhbCBkYXRhIGVudHJ5IHNlY3Rpb24/XHJcblx0dGhpcy5tYW51YWwgPSBmYWxzZTtcclxuXHJcblx0Ly8vIEluY2x1ZGUgdGhlIG1hcD9cclxuXHR0aGlzLm1hcCA9IHRydWU7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBzb2x1dGlvbiBzZWN0aW9uP1xyXG5cdHRoaXMuc29sdXRpb24gPSB0cnVlO1xyXG5cclxuXHJcblxyXG5cdC8vLyBJZiBzZXQgdHJ1ZSwgcHJhY3RpY2UgZ2VuZXJhdGUgZmVhdHVyZXMgYXJlIGRpc2FibGVkXHJcblx0dGhpcy5maXhlZCA9IGZhbHNlO1xyXG5cclxuXHQvLy8gVmVyYm9zZSBhbnN3ZXJzIG9uIG1pc3Rha2VzXHJcblx0dGhpcy52ZXJib3NlID0gdHJ1ZTtcclxuXHJcblx0Ly8vIElmIHRydWUsIHRoZSBtaW50ZXJtIG5hbWUgYXBwZWFycyBpbiBlYWNoIGNlbGwuXHJcblx0dGhpcy5sYWJlbE1pbnRlcm1zID0gdHJ1ZTtcclxuXHJcblx0Ly8vIElmIHNldCB0cnVlLCB1c2VyIGlucHV0IGlzIGNoZWNrZWQgZm9yIHNlbGVjdGluZyBpbnZhbGlkIGNlbGxzXHJcblx0Ly8vIHN1Y2ggYXMgemVyb3MuXHJcblx0dGhpcy5zdHJpY3QgPSB0cnVlO1xyXG5cclxuXHJcblxyXG5cdC8vLyBJZiB0cnVlLCB0aGUgaGVhZGVyIEthcm5hdWdoIE1hcCBpcyBpbmNsdWRlZCB3aXRoIGFuIG9wdGlvbiB0byBoaWRlIHRoZSBtYXBcclxuXHR0aGlzLm1hcEhlYWRpbmcgPSB0cnVlO1xyXG5cclxuXHQvLy8gQSByZXN1bHRzIHNlbGVjdG9yLiBTZWxlY3RvciB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBzdWNjZXNzIHZhbHVlXHJcblx0Ly8vIGlmIHRoZSBleHByZXNzaW9uIHN1Y2Nlc3NmdWxseSBjaGVja3NcclxuXHR0aGlzLnJlc3VsdFNlbCA9IG51bGw7XHJcblxyXG5cdC8vLyBWYWx1ZSByZXN1bHRzU2VsIHdpbGwgYmUgc2V0IHRvIGlmIGNoZWNrIGlzIHN1Y2Nlc3NmdWwgKCdmYWlsJyBvdGhlcndpc2UpXHJcblx0dGhpcy5zdWNjZXNzID0gJ3N1Y2Nlc3MnO1xyXG5cclxuXHQvLy8gU2VsZWN0b3IgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgZXhwcmVzc2lvbiBlYWNoIHRpbWUgY2hlY2sgaXMgcHJlc3NlZC5cclxuXHR0aGlzLmV4cHJlc3Npb25TZWwgPSBudWxsO1xyXG5cclxuXHQvLy8gSXMgdGhlIHNvbHZlIGJ1dHRvbiBwcm92aWRlZD9cclxuXHR0aGlzLnNvbHZlID0gZmFsc2U7XHJcblxyXG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0V4cHJlc3Npb259IGZyb20gXCIuLi9Mb2dpYy9FeHByZXNzaW9uXCI7XHJcbmltcG9ydCB7UXVpbmVNY0NsdXNrZXlTb2x2ZXJ9IGZyb20gXCIuLi9Mb2dpYy9RdWluZU1jQ2x1c2tleVNvbHZlclwiO1xyXG5cclxuLyoqXHJcbiAqIFByYWN0aWNlIHBhZ2Ugc29sdXRpb24gZm9ybVxyXG4gKiBAcGFyYW0gbWFpbiBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gZWxlbWVudCBQYXJlbnQgZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBTb2x1dGlvbiA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG5cclxuICAgIC8vIFRoZSB2YXJpb3VzIHNlY3Rpb24gZWxlbWVudHNcclxuICAgIGxldCBkaXYsIGV4cHJlc3Npb25JbnB1dCwgcmVzdWx0O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtc29sdXRpb24nKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZChkaXYpO1xyXG5cclxuICAgICAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGgzLmlubmVyVGV4dCA9ICdTb2x1dGlvbic7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuXHQgICAgLy8gJzxwPjxsYWJlbD5FbnRlciBFeHByZXNzaW9uPGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiIGNsYXNzPVwiZXhwcmVzc2lvblwiPjwvbGFiZWw+PC9wPidcclxuXHQgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIGZvcm0uYXBwZW5kQ2hpbGQocCk7XHJcblxyXG5cdCAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdCAgICBwLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHQgICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0VudGVyIEV4cHJlc3Npb24nO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcblx0ICAgIGV4cHJlc3Npb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0ICAgIGV4cHJlc3Npb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5cdCAgICBleHByZXNzaW9uSW5wdXQuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ2ZhbHNlJyk7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKGV4cHJlc3Npb25JbnB1dCk7XHJcblxyXG5cdCAgICAvLyAnPHA+PGJ1dHRvbiBjbGFzcz1cImNoZWNrXCI+Q2hlY2s8L2J1dHRvbj48YSBjbGFzcz1cImNsZWFyXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT4nO1xyXG4gICAgICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICAgICAgbGV0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcclxuICAgICAgICBjaGVjay5pbm5lclRleHQgPSAnQ2hlY2snO1xyXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQoY2hlY2spO1xyXG5cclxuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgdGhpcy5jaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDbGVhciBidXR0b24gKGlucHV0KVxyXG5cdCAgICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHQgICAgbGV0IGNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdCAgICBjbGVhci5jbGFzc0xpc3QuYWRkKCdjbGVhcicpO1xyXG5cdCAgICBwLmFwcGVuZENoaWxkKGNsZWFyKTtcclxuXHJcblx0ICAgIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHQgICAgLy8gT3B0aW9uYWwgc29sdmUgYnV0dG9uXHJcblx0ICAgIGlmKG1haW4ub3B0aW9ucy5zb2x2ZSkge1xyXG5cdFx0ICAgIHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XHJcblxyXG5cdFx0ICAgIGxldCBzb2x2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0ICAgIHNvbHZlLmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtc29sdmUnKTtcclxuXHRcdCAgICBzb2x2ZS5pbm5lckhUTUwgPSAnU29sdmUnO1xyXG5cdFx0ICAgIHAuYXBwZW5kQ2hpbGQoc29sdmUpO1xyXG5cclxuXHRcdCAgICBzb2x2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCAgICBcdHRoaXMuc29sdmUoKTtcclxuXHRcdCAgICB9KVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvLyBSZXN1bHRzIGRpdlxyXG4gICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgZXhwcmVzc2lvbklucHV0LnZhbHVlID0gJyc7XHJcblx0ICAgIHJlc3VsdC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoZWNrID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIHZhciBtdCA9ICcnO1xyXG5cdCAgICB2YXIgZmlyc3Q9dHJ1ZTtcclxuXHQgICAgZm9yKGxldCBpIGluIG1haW4ub3B0aW9ucy5taW50ZXJtcykge1xyXG5cdFx0ICAgIGlmKGZpcnN0KSB7XHJcblx0XHRcdCAgICBtdCArPSBcIixcIjtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgZmlyc3QgPSBmYWxzZTtcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIG10ICs9IG1haW4ub3B0aW9ucy5taW50ZXJtc1tpXTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmVzdWx0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHQgICAgdmFyIGV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbigpO1xyXG5cdCAgICBleHByZXNzaW9uLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblx0ICAgIGV4cHJlc3Npb24uc2V0X3NpemUobWFpbi5vcHRpb25zLnNpemUpO1xyXG5cclxuXHQgICAgbGV0IHN0ciA9IGV4cHJlc3Npb25JbnB1dC52YWx1ZTtcclxuXHJcblx0ICAgIGlmKG1haW4ub3B0aW9ucy5leHByZXNzaW9uU2VsICE9PSBudWxsKSB7XHJcblx0XHQgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1haW4ub3B0aW9ucy5leHByZXNzaW9uU2VsKTtcclxuXHRcdCAgICBmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuXHRcdFx0ICAgIGVsZW1lbnQudmFsdWUgPSBzdHIucmVwbGFjZSgvKDwoW14+XSspPikvaWcsXCJcIik7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICB0cnkge1xyXG5cdFx0ICAgIGV4cHJlc3Npb24ucGFyc2Uoc3RyKTtcclxuXHQgICAgfSBjYXRjaChtc2cpIHtcclxuXHRcdCAgICBmYWlsKCc8cD5Zb3VyIGV4cHJlc3Npb24gZmFpbGVkIHRvIHBhcnNlIGFuZCBtdXN0IG5vdCBiZSAnICtcclxuXHRcdFx0ICAgICdpbiB0aGUgY29ycmVjdCBmb3JtLjwvcD4nICtcclxuXHRcdFx0ICAgICc8cD4nICsgbXNnICsgJzwvcD4nKTtcclxuXHRcdCAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblxyXG5cdCAgICAvLyBJcyB0aGlzIHJlc3VsdCBtaW5pbWFsP1xyXG5cdCAgICB2YXIgcW0gPSBuZXcgUXVpbmVNY0NsdXNrZXlTb2x2ZXIoKTtcclxuXHQgICAgcW0ubGFiZWxzID0gbWFpbi5vcHRpb25zLmxhYmVscztcclxuXHJcblx0ICAgIHFtLmluaXQobWFpbi5vcHRpb25zLnNpemUpO1xyXG5cdCAgICBmb3IodmFyIGkgaW4gbWFpbi5vcHRpb25zLm1pbnRlcm1zKSB7XHJcblx0XHQgICAgcW0uc2V0KG1haW4ub3B0aW9ucy5taW50ZXJtc1tpXSwgdHJ1ZSk7XHJcblx0ICAgIH1cclxuXHQgICAgZm9yKGkgaW4gbWFpbi5vcHRpb25zLmRvbnRjYXJlKSB7XHJcblx0XHQgICAgcW0uc2V0KG1haW4ub3B0aW9ucy5kb250Y2FyZVtpXSwgdW5kZWZpbmVkKTtcclxuXHQgICAgfVxyXG5cdCAgICBxbS5jb21wdXRlKCk7XHJcblxyXG5cdCAgICB2YXIgcW1FeHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgcW1FeHByZXNzaW9uLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblx0ICAgIHFtRXhwcmVzc2lvbi5zZXRfc2l6ZShtYWluLm9wdGlvbnMuc2l6ZSk7XHJcblxyXG5cdCAgICBxbUV4cHJlc3Npb24ucGFyc2UocW0uZXhwcmVzc2lvbigpKTtcclxuXHJcblx0ICAgIHZhciB2YWxpZCA9IHRydWU7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBUZXN0IHRoYXQgZXZlcnkgbWludGVybSBzdXBwbGllZCBpcyBlaXRoZXJcclxuXHQgICAgLy8gYSB2YWxpZCBtaW50ZXJtIG9yIGEgZG9uJ3QgY2FyZVxyXG5cdCAgICAvL1xyXG5cdCAgICBmb3IodmFyIGkgaW4gZXhwcmVzc2lvbi5taW50ZXJtcy5taW50ZXJtcykge1xyXG5cdFx0ICAgIHZhciBtID0gZXhwcmVzc2lvbi5taW50ZXJtcy5taW50ZXJtc1tpXTtcclxuXHRcdCAgICB2YXIgaW5saXN0ID0gZmFsc2U7XHJcblx0XHQgICAgZm9yKHZhciBqIGluIG1haW4ub3B0aW9ucy5taW50ZXJtcykge1xyXG5cdFx0XHQgICAgaWYobWFpbi5vcHRpb25zLm1pbnRlcm1zW2pdID09IG0pIHtcclxuXHRcdFx0XHQgICAgaW5saXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBmb3IoaiAgaW4gbWFpbi5vcHRpb25zLmRvbnRjYXJlKSB7XHJcblx0XHRcdCAgICBpZihtYWluLm9wdGlvbnMuZG9udGNhcmVbal0gPT0gbSkge1xyXG5cdFx0XHRcdCAgICBpbmxpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIGlmKCFpbmxpc3QpIHtcclxuXHRcdFx0ICAgIC8vIElmIHdlIGdvdCB0byBoZXJlLCB0aGlzIHRlcm0gaXMgZXh0cmFuZW91cyFcclxuXHRcdFx0ICAgIHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdCAgICBicmVhaztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIFRlc3QgdGhhdCBldmVyeSBtaW50ZXJtIHJlcXVpcmVkIGlzIGluIHRoZSBzdXBwbGllZCBsaXN0XHJcblx0ICAgIC8vXHJcblx0ICAgIGZvcihpIGluIG1haW4ub3B0aW9ucy5taW50ZXJtcykge1xyXG5cdFx0ICAgIG0gPSBtYWluLm9wdGlvbnMubWludGVybXNbaV07XHJcblx0XHQgICAgaW5saXN0ID0gZmFsc2U7XHJcblx0XHQgICAgZm9yKHZhciBqIGluIGV4cHJlc3Npb24ubWludGVybXMubWludGVybXMpIHtcclxuXHRcdFx0ICAgIGlmKGV4cHJlc3Npb24ubWludGVybXMubWludGVybXNbal0gPT0gbSkge1xyXG5cdFx0XHRcdCAgICBpbmxpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdCAgICBicmVhaztcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIGlmKCFpbmxpc3QpIHtcclxuXHRcdFx0ICAgIC8vIElmIHdlIGdvdCB0byBoZXJlLCB0aGlzIHRlcm0gaXMgZXh0cmFuZW91cyFcclxuXHRcdFx0ICAgIHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdCAgICBicmVhaztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmKCF2YWxpZCkge1xyXG5cdFx0ICAgIGlmKG1haW4ub3B0aW9ucy52ZXJib3NlKSB7XHJcblx0XHRcdCAgICB2YXIgaHRtbCA9ICc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgbm90IGEgdmFsaWQgc29sdXRpb24gZm9yIHRoaXMgJyArXHJcblx0XHRcdFx0ICAgICdzZXQgb2YgbWludGVybXMuIFRoZSBtaW50ZXJtcyBmb3IgeW91ciBleHByZXNzaW9uIGhhdmUgYmVlbiAnICtcclxuXHRcdFx0XHQgICAgJ2NvbXB1dGVkIGFzOiA8L3A+JztcclxuXHJcblx0XHRcdCAgICBpZihleHByZXNzaW9uLm1pbnRlcm1zLm1pbnRlcm1zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHQgICAgaHRtbCArPSAnPHAgY2xhc3M9XCJjZW50ZXIgc21hbGxcIj4nICsgZXhwcmVzc2lvbi5taW50ZXJtcy5saXN0KCkgKyAnPC9wPic7XHJcblx0XHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdCAgICBodG1sICs9ICc8cCBjbGFzcz1cImNlbnRlciBzbWFsbFwiPm5vbmU8L3A+JztcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgdmFyIGh0bWwgPSAnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBhIHZhbGlkIHNvbHV0aW9uIGZvciB0aGlzICcgK1xyXG5cdFx0XHRcdCAgICAnc2V0IG9mIG1pbnRlcm1zLjwvcD4nO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgZmFpbChodG1sKTtcclxuXHRcdCAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmKCFleHByZXNzaW9uLmFzX2dvb2RfYXMocW1FeHByZXNzaW9uKSkge1xyXG5cdFx0ICAgIGlmKG1haW4ub3B0aW9ucy52ZXJib3NlKSB7XHJcblx0XHRcdCAgICBmYWlsKCc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgbm90IG1pbmltYWwuIEEgbWluaW1hbCBzb2x1dGlvbiAnICtcclxuXHRcdFx0XHQgICAgJ2ZvciB0aGlzIHByb2JsZW0gaXM6PC9wPicgK1xyXG5cdFx0XHRcdCAgICAnPHAgY2xhc3M9XCJzbWFsbFwiPicgKyBxbS5leHByZXNzaW9uKCkgKyAnPC9wPicpO1xyXG5cdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdCAgICBmYWlsKCc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgbm90IG1pbmltYWwuPC9wPicpO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBTdWNjZXNzXHJcblx0ICAgIC8vXHJcblxyXG5cdCAgICByZXN1bHQuaW5uZXJIVE1MID0gJzxwPllvdXIgZXhwcmVzc2lvbiBpcyBjb3JyZWN0IGFuZCBtaW5pbWFsLjwvcD4nO1xyXG5cclxuXHQgICAgaWYobWFpbi5vcHRpb25zLnJlc3VsdFNlbCAhPT0gbnVsbCkge1xyXG5cdCAgICBcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtYWluLm9wdGlvbnMucmVzdWx0U2VsKTtcclxuXHQgICAgXHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuXHQgICAgXHRcdGVsZW1lbnQudmFsdWUgPSBtYWluLm9wdGlvbnMuc3VjY2VzcztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNvbHZlID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIGNvbnN0IHFtID0gdGhpcy5taW5pbXVtRXhwcmVzc2lvbigpO1xyXG5cdCAgICByZXN1bHQuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwiY2VudGVyXCI+JyArIHFtLmV4cHJlc3Npb24oKSArIFwiPC9wPlwiO1xyXG5cclxuXHQgICAgbWFpbi53b3JrLm1hcC5jbGVhcigpO1xyXG5cclxuXHQgICAgdmFyIGdyb3VwcyA9IG1haW4ud29yay5ncm91cHM7XHJcblx0ICAgIGdyb3Vwcy5jbGVhcigpO1xyXG5cclxuXHQgICAgdmFyIHRlcm1zID0gcW0uZXhwcmVzc2lvbigpLnNwbGl0KCcrJyk7XHJcblx0ICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvbigpO1xyXG5cdCAgICBleHAubGFiZWxzID0gbWFpbi5vcHRpb25zLmxhYmVscztcclxuXHQgICAgZXhwLnNldF9zaXplKG1haW4ub3B0aW9ucy5zaXplKTtcclxuXHQgICAgZm9yKHZhciBpPTA7IGk8dGVybXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdCAgICB2YXIgdGVybSA9IHRlcm1zW2ldO1xyXG5cdFx0ICAgIGV4cC5wYXJzZSh0ZXJtKTtcclxuXHRcdCAgICBncm91cHMuYWRkX2dyb3VwKGV4cC5taW50ZXJtcy5taW50ZXJtcyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGdyb3Vwcy5kcmF3R3JvdXBzKCk7XHJcbiAgICB9XHJcblxyXG5cdGNvbnN0IGZhaWwgPSAobXNnKSA9PiB7XHJcblx0XHRyZXN1bHQuaW5uZXJIVE1MID0gbXNnO1xyXG5cclxuXHRcdGlmKG1haW4ub3B0aW9ucy5yZXN1bHRTZWwgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1haW4ub3B0aW9ucy5yZXN1bHRTZWwpO1xyXG5cdFx0XHRmb3IobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuXHRcdFx0XHRlbGVtZW50LnZhbHVlID0gJ2ZhaWwnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0dGhpcy5taW5pbXVtRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gSXMgdGhpcyByZXN1bHQgbWluaW1hbD9cclxuXHRcdHZhciBxbSA9IG5ldyBRdWluZU1jQ2x1c2tleVNvbHZlcigpO1xyXG5cdFx0cW0ubGFiZWxzID0gdGhpcy5tYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cclxuXHRcdHFtLmluaXQodGhpcy5tYWluLm9wdGlvbnMuc2l6ZSk7XHJcblx0XHRmb3IodmFyIGkgaW4gdGhpcy5tYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdFx0cW0uc2V0KHRoaXMubWFpbi5vcHRpb25zLm1pbnRlcm1zW2ldLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGZvcihpIGluIHRoaXMubWFpbi5vcHRpb25zLmRvbnRjYXJlKSB7XHJcblx0XHRcdHFtLnNldCh0aGlzLm1haW4ub3B0aW9ucy5kb250Y2FyZVtpXSwgdW5kZWZpbmVkKTtcclxuXHRcdH1cclxuXHRcdHFtLmNvbXB1dGUoKTtcclxuXHRcdHJldHVybiBxbTtcclxuXHR9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG4iLCIvKipcclxuICogU2ltcGxlIERvY3VtZW50IHJlYWR5IGZ1bmN0aW9uLCBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIGRvY3VtZW50IHJlYWR5LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBSZWFkeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsbCBhIGZ1bmN0aW9uIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWRvbi5cclxuICogQHBhcmFtIGZuIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBkb2N1bWVudCByZWFkeVxyXG4gKi9cclxuUmVhZHkuZ28gPSBmdW5jdGlvbihmbikge1xyXG4gICAgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG4gICAgICAgIGZuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtNYXB9IGZyb20gJy4vTWFwJztcclxuaW1wb3J0IHtHcm91cHN9IGZyb20gJy4vR3JvdXBzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgd29yayBhcmVhIGlzIHRoZSBLYXJuYXVnaCBtYXAgYW5kIHRoZSBncm91cGluZ3MgY29udHJvbHMuXHJcbiAqIEBwYXJhbSBtYWluXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFdvcmsgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcblxyXG5cdHRoaXMubWFwID0gbnVsbDtcclxuXHR0aGlzLmdyb3VwcyA9IG51bGw7XHJcblxyXG5cdGxldCBkaXYsIGxlZnQsIHJpZ2h0O1xyXG5cclxuXHR0aGlzLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKG1haW4ub3B0aW9ucy5tYXBIZWFkaW5nKSB7XHJcblx0XHRcdGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuXHRcdFx0bGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHRcdFx0Y2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcblx0XHRcdGNoZWNrQm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJyk7XHJcblx0XHRcdGgzLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuXHJcblx0XHRcdGgzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgS2FybmF1Z2ggTWFwJykpO1xyXG5cclxuXHRcdFx0Y2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYoY2hlY2tCb3guY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0ZGl2LnN0eWxlLmRpc3BsYXkgPSAndGFibGUnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIHRoZSBtYWluIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSB3b3JrIGFyZWFcclxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtd29yaycpO1xyXG5cdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0dGhpcy5kaXYgPSBkaXY7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0dGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdGRpdi5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0XHRsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQobGVmdCk7XHJcblxyXG5cdFx0cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChyaWdodCk7XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIEFkZCB0aGUgS21hcFxyXG5cdFx0Ly9cclxuXHRcdGlmKHRoaXMubWFwICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMubWFwLmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm1hcCA9IG5ldyBNYXAobWFpbiwgcmlnaHQpO1xyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBBZGQgdGhlIGdyb3Vwc1xyXG5cdFx0Ly9cclxuXHRcdHRoaXMuZ3JvdXBzID0gbmV3IEdyb3VwcyhtYWluLCBsZWZ0KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cclxufSIsImltcG9ydCB7TWludGVybXN9IGZyb20gXCIuL01pbnRlcm1zXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlIHNpbXBsZSBleHByZXNzaW9ucy4gT25seSB3b3JrcyBmb3Igc3VtIG9mIHByb2R1Y3RzXHJcbiAqIGZvciBub3cuIFdpbGwgY29uc2lkZXIgZmFuY2llciB2ZXJzaW9uIGxhdGVyIG9uLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBFeHByZXNzaW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdmFyIHNpemUgPSA0O1xyXG5cclxuICAgIHRoaXMubWludGVybXMgPSBuZXcgTWludGVybXMoKTtcclxuXHJcbiAgICB0aGlzLmxhYmVscyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJ107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIHNpemUgb2YgdGhlIGV4cHJlc3Npb25cclxuICAgICAqIEBwYXJhbSBzeiBWYWx1ZSAxLT8gbnVtYmVyIG9mIHRlcm1zXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2V0X3NpemUgPSBmdW5jdGlvbihzeikge1xyXG4gICAgICAgIHNpemUgPSBzejtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNpemUgPSBzejtcclxuICAgICAgICB0ZXJtc19pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0IHRoYXQgdGhpcyBleHByZXNzaW9uIGlzIGFzIGdvb2QgYXMgc29tZSBvdGhlciBleHByZXNzaW9uLlxyXG4gICAgICogQHBhcmFtIG90aGVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYXNfZ29vZF9hcyA9IGZ1bmN0aW9uKG90aGVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5udW1fcHJvZHVjdHMoKSA+IG90aGVyLm51bV9wcm9kdWN0cygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubnVtX3Rlcm1zKCkgPiBvdGhlci5udW1fdGVybXMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogTWludGVybXNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVfbWludGVybXMoKSB7XHJcbiAgICAgICAgdGhhdC5taW50ZXJtcy5jbGVhcigpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPE1hdGgucG93KDIsIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgdGVybXNfc2V0KGkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdFMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgcyBpbiBzb3ApIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kID0gc29wW3NdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdFAgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgcCBpbiBwcm9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBwcm9kW3BdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0Lm5vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRQID0gcmVzdWx0UCAmJiAhKHQudGVybS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UCA9IHJlc3VsdFAgJiYgdC50ZXJtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHRTID0gcmVzdWx0UyB8fCByZXN1bHRQO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihyZXN1bHRTKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1pbnRlcm1zLmFkZChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhcnNlIGFuIGV4cHJlc3Npb24gaW4gc3VtLW9mLXByb2R1Y3RzIGZvcm0gb25seVxyXG4gICAgICogQHBhcmFtIHN0clxyXG4gICAgICovXHJcblxyXG4gICAgdmFyIHNvcCA9IFtdO1xyXG5cclxuICAgIHRoaXMucGFyc2UgPSBmdW5jdGlvbihleHApIHtcclxuICAgICAgICBsZXgoZXhwKTtcclxuXHJcbiAgICAgICAgc29wID0gW107XHJcblxyXG4gICAgICAgIHZhciBwcm9kID0gW107XHJcblxyXG4gICAgICAgIGlmKHRva2VuKCkgPT09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlX21pbnRlcm1zKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRva2VuKCkgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWludGVybXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8TWF0aC5wb3coMiwgc2l6ZSk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW50ZXJtcy5hZGQoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0b2tlbigpO1xyXG4gICAgICAgICAgICBpZihjaCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGNoID09PSAnKycpIHtcclxuICAgICAgICAgICAgICAgIGlmKHByb2QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXCJTeW50YXggZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc29wLnB1c2gocHJvZCk7XHJcbiAgICAgICAgICAgICAgICBwcm9kID0gW107XHJcbiAgICAgICAgICAgICAgICBhZHZhbmNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyBpdCBhIHRlcm0/XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVybSA9IGdldF90ZXJtKGNoKTtcclxuICAgICAgICAgICAgICAgIGlmKHRlcm0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgbmV3IHRlcm1cclxuICAgICAgICAgICAgICAgICAgICAvLyBIYXZlIHdlIGFscmVhZHkgc2VlbiBpdD9cclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGogaW4gcHJvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0ZXJtID09PSBwcm9kW2pdLnRlcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFscmVhZHkgc2VlbiB0aGlzIHRlcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKFwiTm90IGluIGNvcnJlY3Qgc3VtIG9mIHByb2R1Y3RzIGZvcm0uIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRlcm1zIG1heSBvbmx5IGJlIHVzZWQgb25jZSBwZXIgcHJvZHVjdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0b2tlbigpID09PSBcIidcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kLnB1c2goe3Rlcm06IHRlcm0sIG5vdDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZC5wdXNoKHt0ZXJtOiB0ZXJtLCBub3Q6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHN5bWJvbC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHByb2QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzb3AucHVzaChwcm9kKTtcclxuICAgICAgICAgICAgcHJvZCA9IFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yKFwiTm90IGluIGNvcnJlY3Qgc3VtIG9mIHByb2R1Y3RzIGZvcm0uIFwiICtcclxuICAgICAgICAgICAgICAgIFwiTWlzc2luZyB0ZXJtcz9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW5lcmF0ZV9taW50ZXJtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnVtX3Byb2R1Y3RzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvcC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5udW1fdGVybXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY250ID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgaW4gc29wKSB7XHJcbiAgICAgICAgICAgIGNudCArPSBzb3BbaV0ubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcnJvcihtc2cpIHtcclxuICAgICAgICB0aHJvdyBcIkV4cHJlc3Npb24gcGFyc2luZyBlcnJvciBbXCIgKyBleHByZXNzaW9uTG9jICsgXCJdOiBcIiArIG1zZztcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogVGVybXMgbWFuYWdlbWVudFxyXG4gICAgICovXHJcblxyXG4gICAgdmFyIHRlcm1zID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gdGVybXNfaW5pdCgpIHtcclxuICAgICAgICB0ZXJtcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHRlcm1zXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8c2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXJtID0ge1xyXG4gICAgICAgICAgICAgICAgbGl0ZXJhbDogdGhhdC5sYWJlbHNbaV0sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldF90ZXJtKGNoKSB7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0ZXJtcykge1xyXG4gICAgICAgICAgICBpZihjaC50b1VwcGVyQ2FzZSgpID09PSB0ZXJtc1tpXS5saXRlcmFsLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXJtc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGVybXNfc2V0KHZhbCkge1xyXG4gICAgICAgIGZvcih2YXIgaj10ZXJtcy5sZW5ndGgtMTsgaj49MDsgai0tKSB7XHJcbiAgICAgICAgICAgIHRlcm1zW2pdLnZhbHVlID0gKHZhbCAmIDEpID09IDE7XHJcbiAgICAgICAgICAgIHZhbCA+Pj0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBTaW1wbGUgbGV4aWNhbCBhbmFseXplclxyXG4gICAgICovXHJcblxyXG4gICAgdmFyIGV4cHJlc3Npb247XHJcbiAgICB2YXIgZXhwcmVzc2lvbkxvYztcclxuXHJcbiAgICBmdW5jdGlvbiBsZXgoZXhwKSB7XHJcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cDtcclxuICAgICAgICBleHByZXNzaW9uTG9jID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2tlbigpIHtcclxuICAgICAgICB3aGlsZShleHByZXNzaW9uTG9jIDwgZXhwcmVzc2lvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gZXhwcmVzc2lvbi5jaGFyQXQoZXhwcmVzc2lvbkxvYyk7XHJcbiAgICAgICAgICAgIGlmKGNoICE9PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIC8vIElzIHRoaXMgYSB0ZXJtP1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpIGluIHRlcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heWJlID0gZXhwcmVzc2lvbi5zdWJzdHIoZXhwcmVzc2lvbkxvYywgdGVybXNbaV0ubGl0ZXJhbC5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihtYXliZSA9PT0gdGVybXNbaV0ubGl0ZXJhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjaDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXhwcmVzc2lvbkxvYysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWR2YW5jZSgpIHtcclxuICAgICAgICB2YXIgdCA9IHRva2VuKCk7XHJcbiAgICAgICAgaWYodCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBleHByZXNzaW9uTG9jICs9IHQubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldF9zaXplKDQpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBPYmplY3QgdGhhdCByZXByZXNlbnRzIGEgbGlzdCBvZiBtaW50ZXJtcyBhbmQgY2FuIGdlbmVyYXRlIHJhbmRvbSBsaXN0c1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNaW50ZXJtcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5zaXplID0gNDtcclxuICAgIHRoaXMubWludGVybXMgPSBbXTsgLy8gTGlzdCBvZiBudW1iZXJzXHJcbiAgICB0aGlzLmRvbnRjYXJlID0gW107IC8vIExpc3Qgb2YgZG9uJ3QgY2FyZXNcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHJhbmRvbSBtaW50ZXJtcyBhbmQgb3B0aW9uYWxseSBkb250Y2FyZXNcclxuICAgICAqIEBwYXJhbSBvbmVDaGFuY2UgcHJvYmFiaWxpdHkgYSBtaW50ZXJtIHdpbGwgYmUgdHJ1ZVxyXG4gICAgICogSWYgb21pdHRlZCwgdGhlIHByb2JhYmlsaXR5IGlzIDAuNVxyXG4gICAgICogQHBhcmFtIGRjQ2hhbmNlIHByb2JhYmxpdHkgYSBtaW50ZXJtIHdpbGwgYSBkb250Y2FyZVxyXG4gICAgICogSWYgb21pdHRlZCwgdGhlIHByb2JhYmlsaXR5IGlzIDBcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZW5lcmF0ZSA9IGZ1bmN0aW9uKG9uZUNoYW5jZSwgZGNDaGFuY2UpIHtcclxuICAgICAgICBpZihvbmVDaGFuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvbmVDaGFuY2UgPSAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRjQ2hhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGNDaGFuY2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kb250Y2FyZSA9IFtdO1xyXG4gICAgICAgIHRoaXMubWludGVybXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIG51bSA9IE1hdGgucG93KDIsIHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8bnVtOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHJuZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGlmKHJuZCA8PSBvbmVDaGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWludGVybXMucHVzaChpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJuZCA+ICgxIC0gZGNDaGFuY2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvbnRjYXJlLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSByYW5kb20gbWludGVybXMgYW5kIG9wdGlvbmFsbHkgZG9udGNhcmVzXHJcbiAgICAgKiBAcGFyYW0gb25lQ2hhbmNlIHByb2JhYmlsaXR5IGEgbWludGVybSB3aWxsIGJlIHRydWVcclxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBwcm9iYWJpbGl0eSBpcyAwLjVcclxuICAgICAqIEBwYXJhbSBvbmVNaW4gTWluaW11bSBhY2NlcHRhYmxlIG51bWJlciBvZiBtaW50ZXJtc1xyXG4gICAgICogQHBhcmFtIG9uZU1heCBNYXhpbXVtIGFjY2VwdGFibGUgbnVtYmVyIG9mIG1pbnRlcm1zXHJcbiAgICAgKiBAcGFyYW0gZGNDaGFuY2UgcHJvYmFibGl0eSBhIG1pbnRlcm0gd2lsbCBhIGRvbnRjYXJlXHJcbiAgICAgKiBJZiBvbWl0dGVkLCB0aGUgcHJvYmFiaWxpdHkgaXMgMFxyXG4gICAgICogQHBhcmFtIGRjTWluIE1pbmltdW0gYWNjZXB0YWJsZSBudW1iZXIgb2YgZG9uJ3QgY2FyZXNcclxuICAgICAqIEBwYXJhbSBkeE1heCBNYXhpbXVtIGFjY2VwdGFibGUgbnVtYmVyIG9mIGRvbid0IGNhcmVzXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2VuZXJhdGVfYm91bmRlZCA9IGZ1bmN0aW9uKG9uZUNoYW5jZSwgb25lTWluLCBvbmVNYXgsIGRjQ2hhbmNlLCBkY01pbiwgZGNNYXgpIHtcclxuICAgICAgICBpZihkY01pbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRjTWluID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGNNYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkY01heCA9IE1hdGgucG93KDIsIHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGk9MDsgaTwxMDAwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZShvbmVDaGFuY2UsIGRjQ2hhbmNlKTtcclxuICAgICAgICAgICAgaWYodGhpcy5taW50ZXJtcy5sZW5ndGggPj0gb25lTWluICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW50ZXJtcy5sZW5ndGggPD0gb25lTWF4ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb250Y2FyZS5sZW5ndGggPj0gZGNNaW4gJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbnRjYXJlLmxlbmd0aCA8PSBkY01heCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBtaW50ZXJtcyBsaXN0LiBUaGlzIHdpbGwgYWNjZXB0IGFueSBudW1iZXIgb2YgZnVuY3Rpb24gYXJndW1lbnRzLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubWludGVybXMgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5taW50ZXJtcy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWludGVybXMuc29ydChmdW5jdGlvbihhLCBiKSB7cmV0dXJuIGEtYjt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBmcm9tIGEgbGlzdCBvZiBtaW50ZXJtcyBhcyBhbiBhcnJheVxyXG4gICAgICogQHBhcmFtIG1pbnRlcm1zIE1pbnRlcm1zIGFycmF5LiBUaGUgYXJyYXkgaXMgY29waWVkLlxyXG4gICAgICogQHBhcmFtIGRvbnRjYXJlIE9wdGlvbmFsIGRvbid0IGNhcmUgYXJyYXlcclxuICAgICAqL1xyXG4gICAgdGhpcy5zZXRfZnJvbSA9IGZ1bmN0aW9uKG1pbnRlcm1zLCBkb250Y2FyZSkge1xyXG4gICAgICAgIHRoaXMubWludGVybXMgPSBtaW50ZXJtcy5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMubWludGVybXMuc29ydChmdW5jdGlvbihhLCBiKSB7cmV0dXJuIGEtYjt9KTtcclxuXHJcbiAgICAgICAgaWYoZG9udGNhcmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kb250Y2FyZSA9IGRvbnRjYXJlLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9udGNhcmUuc29ydChmdW5jdGlvbihhLCBiKSB7cmV0dXJuIGEtYjt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRvbnRjYXJlID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHR3byBtaW50ZXJtIGxpc3RzIGFyZSB0aGUgc2FtZS5cclxuICAgICAqIEBwYXJhbSBvdGhlciBPdGhlciBNaW50ZXJtcyBvYmplY3RcclxuICAgICAqL1xyXG4gICAgdGhpcy5lcXVhbCA9IGZ1bmN0aW9uKG90aGVyKSB7XHJcbiAgICAgICAgdmFyIG90aGVyTWludGVybXM7XHJcblxyXG4gICAgICAgIGlmKG90aGVyIGluc3RhbmNlb2YgTG9naWMuTWludGVybXMpIHtcclxuICAgICAgICAgICAgb3RoZXJNaW50ZXJtcyA9IG90aGVyLm1pbnRlcm1zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG90aGVyTWludGVybXMgPSBvdGhlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG90aGVyTWludGVybXMubGVuZ3RoICE9PSB0aGlzLm1pbnRlcm1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxvdGhlck1pbnRlcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChvdGhlck1pbnRlcm1zW2ldICE9IHRoaXMubWludGVybXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubWludGVybXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKG1pbnRlcm0pIHtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5taW50ZXJtcykge1xyXG4gICAgICAgICAgICBpZih0aGlzLm1pbnRlcm1zW2ldID09IG1pbnRlcm0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5taW50ZXJtcy5wdXNoKG1pbnRlcm0pO1xyXG4gICAgICAgIHRoaXMubWludGVybXMuc29ydChmdW5jdGlvbihhLCBiKSB7cmV0dXJuIGEtYjt9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3QgPSBmdW5jdGlvbih3aXRoQnJlYWspIHtcclxuICAgICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciByZXQgPSAnJztcclxuICAgICAgICB2YXIgY3IgPSBmYWxzZTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5taW50ZXJtcykge1xyXG4gICAgICAgICAgICAgICAgaWYoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQgKz0gJywgJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aXRoQnJlYWsgPT09IHRydWUgJiYgIWNyICYmIHJldC5sZW5ndGggPiA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXQgKz0gJzxicj4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldCArPSAnbScgKyB0aGlzLm1pbnRlcm1zW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3RfZG9udGNhcmUgPSBmdW5jdGlvbih3aXRoQnJlYWspIHtcclxuICAgICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciByZXQgPSAnJztcclxuICAgICAgICB2YXIgY3IgPSBmYWxzZTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5kb250Y2FyZSkge1xyXG4gICAgICAgICAgICBpZihmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldCArPSAnLCAnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih3aXRoQnJlYWsgPT09IHRydWUgJiYgIWNyICYmIHJldC5sZW5ndGggPiA0MCkge1xyXG4gICAgICAgICAgICAgICAgY3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0ICs9ICc8YnI+JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0ICs9ICdtJyArIHRoaXMuZG9udGNhcmVbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7UXVpbmVNY0NsdXNrZXlEYXRhQ3RybH0gZnJvbSBcIi4vcW1jXCI7XHJcblxyXG4vKipcclxuICogU29sdmVyIGZvciBjaXJjdWl0IG1pbmltaXphdGlvbiBiYXNlZCBvbiBRdWluZSBNY0NsdXNrZXkgYWxnb3JpdGhtLlxyXG4gKiBUaGlzIHVzZXMgdGhlIGltcGxlbWVudGlvbiBpbiBxbWMuanMsIGJ1dCBhZGFwdHMgdGhlIGludGVyZmFjZVxyXG4gKiB0byBtYXRjaCB0aGUgdmFyaWFibGUgbmFtZXMgSSB1c2UuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFF1aW5lTWNDbHVza2V5U29sdmVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdGhpcy5xbSA9IG5ldyBRdWluZU1jQ2x1c2tleURhdGFDdHJsKCk7XHJcblxyXG4gICAgdGhpcy5sYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSyddO1xyXG5cclxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKG51bVZhcnMpIHtcclxuICAgICAgICB0aGlzLnFtLmluaXQobnVtVmFycyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNpemUgPSBNYXRoLnBvdygyLCB0aGlzLnFtLm5vT2ZWYXJzKTtcclxuICAgICAgICB0aGlzLnFtLmFsbG93RG9udENhcmUgPSB0cnVlO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnFtLnNldEZ1bmNEYXRhKGksIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIG1pbnRlcm1cclxuICAgICAqIEBwYXJhbSBtaW50ZXJtIE1pbnRlcm0gbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdHJ1ZSwgZmFsc2UsIG9yIHVuZGVmaW5lZCBmb3IgZG9udGNhcmVcclxuICAgICAqL1xyXG4gICAgdGhpcy5zZXQgPSBmdW5jdGlvbihtaW50ZXJtLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmKHZhbHVlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucW0uc2V0RnVuY0RhdGEobWludGVybSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5xbS5zZXRGdW5jRGF0YShtaW50ZXJtLCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnFtLnNldEZ1bmNEYXRhKG1pbnRlcm0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbXB1dGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnFtLmNvbXB1dGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm51bV90ZXJtcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnFtLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBxbSA9IHRoaXMucW07XHJcblxyXG4gICAgICAgIHZhciBleHAgPSBcIlwiO1xyXG4gICAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKHFtLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjBcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHFtLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgICAgIHFtLm1pbmltYWxUZXJtUHJpbXNbMF0udGVybVN0cmluZyA9PT0gJzEnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjFcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExvb3Agb3ZlciB0aGUgcmVzdWx0c1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHFtLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYoIWZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICBleHAgKz0gXCIrXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBGaW5kIHNtYWxsZXN0IHByaW1lIGltcGxpY2FudC5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBwcm9iYWJseSBub3Qgc3RyaWN0bHkgbmVjZXNzYXJ5XHJcbiAgICAgICAgICAgIC8vIGJ1dCBJIGRvbid0IHRydXN0IHRoZSBtZXRob2QgdGhleSB1c2VcclxuICAgICAgICAgICAgLy8gdGhhdCBzdG9wcyBvbiB0aGUgZmlyc3QgaXRlcmF0aW9uIG9mIGFcclxuICAgICAgICAgICAgLy8gZm9yL2luIGxvb3AuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIG1pbnRlcm07XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJpbVRlcm0gPSBxbS5taW5pbWFsVGVybVByaW1zW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpbXAgaW4gcHJpbVRlcm0uaW1wbGljYW50LmltcCkge1xyXG4gICAgICAgICAgICAgICAgaWYoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW50ZXJtID0gaW1wO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGltcCA8IG1pbnRlcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludGVybSA9IGltcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG1pbnRlcm0gaXMgYSBtaW50ZXJtIHRoYXQgaXMgbmVlZGVkXHJcbiAgICAgICAgICAgIC8vIGV4Y2VwdCB0aGF0IHNvbWUgYml0cyBjYW4gYmUgbWFza2VkIG9mZlxyXG5cclxuICAgICAgICAgICAgLy8gSSBjb3VudCBiYWNrd2FyZHMsIHNpbmNlIEkgcHJlZmVyXHJcbiAgICAgICAgICAgIC8vIHRoZSBtb3N0IHNpZ25pZmljYW50IHZhbHVlIHRvIGJlIEFcclxuICAgICAgICAgICAgLy8gdG8gbWF0Y2ggdGhlIGNvdXJzZSBtYXRlcmlhbHMuXHJcbiAgICAgICAgICAgIHZhciBvbmUgPSAxIDw8IChxbS5ub09mVmFycyAtIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgYSBiaXQgaXMgc2V0IGluIHByaW1UZXJtLmltcGxpY2FudC5iaXRNYXNrLFxyXG4gICAgICAgICAgICAvLyB0aGF0IHRlcm0gaXMgbm90IG5lZWRlZC5cclxuICAgICAgICAgICAgdmFyIG5lZWRlZCA9ICh+cHJpbVRlcm0uaW1wbGljYW50LmJpdE1hc2spO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlcm0gPSAnJztcclxuICAgICAgICAgICAgZm9yICh2YXIgdiA9IHFtLm5vT2ZWYXJzLTE7IHYgPj0gMCA7IHYtLSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHYxID0gcW0ubm9PZlZhcnMgLSB2IC0gMTtcclxuICAgICAgICAgICAgICAgIGlmICgobmVlZGVkICYgb25lKSA9PT0gb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChtaW50ZXJtICYgb25lKSA9PT0gb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm0gKz0gdGhpcy5sYWJlbHNbdjFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm0gKz0gdGhpcy5sYWJlbHNbdjFdICsgXCInXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25lID0gb25lID4+IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV4cCArPSB0ZXJtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChDKSBUaG9yc3RlbiBUaG9ybWFlaGxlbiwgTWFyYnVyZywgMjAxMywgQWxsIHJpZ2h0cyByZXNlcnZlZFxyXG4vLyBDb250YWN0OiB3d3cudGhvcm1hZS5kZVxyXG5cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyB3cml0dGVuIGZvciBlZHVjYXRpb25hbCAobm9uLWNvbW1lcmNpYWwpIHB1cnBvc2UuIFxyXG4vLyBUaGVyZSBpcyBubyB3YXJyYW50eSBvciBvdGhlciBndWFyYW50ZWUgb2YgZml0bmVzcyBmb3IgdGhpcyBzb2Z0d2FyZSwgXHJcbi8vIGl0IGlzIHByb3ZpZGVkIHNvbGVseSBcImFzIGlzXCIuIFxyXG5cclxuZnVuY3Rpb24gUGV0cmlja01ldGhvZCgpXHJcbntcclxuICB0aGlzLnByb2JsZW07XHJcbiAgdGhpcy5tYXhQcm9ibGVtU2l6ZSA9IDEwMDtcclxuICB0aGlzLnNvbHV0aW9uO1xyXG4gIHRoaXMubG9nID0gXCJcIjtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgXHJcbiAgdGhpcy50ZXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYW5kQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBvckFycmF5O1xyXG4gICAgdmFyIG1vbm9tQTtcclxuICAgIHZhciBtb25vbUI7XHJcbiAgICBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7IC8vIHVzaW5nIG9iamVjdHMgZW5zdXJlcyB0aGF0ICh4IGFuZCB4KSA9IHhcclxuICAgIG1vbm9tQVsxXSA9IDE7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQlsyXSA9IDI7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUFbM10gPSAzO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbNF0gPSA0O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzFdID0gMTtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzNdID0gMztcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVs1XSA9IDU7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQls2XSA9IDY7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUFbMl0gPSAyO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbNV0gPSA1O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzRdID0gNDtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzZdID0gNjtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIC8qb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTsgXHJcbiAgICAgbW9ub21BWzRdID0gNDtcclxuICAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgbW9ub21CWzRdID0gNDtcclxuICAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpOyovXHJcbiAgICBcclxuICAgIHRoaXMuc29sdmUoYW5kQXJyYXkpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc29sdmUgPSBmdW5jdGlvbihlcSkge1xyXG5cclxuICAgIHRoaXMucHJvYmxlbSA9IGVxO1xyXG4gICAgdGhpcy5sb2cgPSBcIlwiO1xyXG4gICAgXHJcbiAgICAvL3ByaW50RXFuQXJyYXkoZXEpO1xyXG4gICAgcHJpbnRFcW5BcnJheUZhbmN5KGVxKTtcclxuICAgIFxyXG4gICAgLy8gbXVsdGlwbHkgb3V0XHJcbiAgICB2YXIgYW5kQXJyYXkgPSBlcTtcclxuICAgIHZhciBsb29wQ291bnRlciA9IDA7XHJcbiAgICB3aGlsZSAoYW5kQXJyYXkubGVuZ3RoID4gMSkge1xyXG4gICAgICB2YXIgbmV3QW5kQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhbmRBcnJheS5sZW5ndGg7IGkgKz0gMikge1xyXG5cclxuICAgICAgICB2YXIgb3JUZXJtQSA9IGFuZEFycmF5W2kgLSAxXTtcclxuICAgICAgICB2YXIgb3JUZXJtQiA9IGFuZEFycmF5W2ldO1xyXG4gICAgICAgIHZhciBuZXdPckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBvclRlcm1BLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBiID0gMDsgYiA8IG9yVGVybUIubGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgdmFyIG1vbm9tMSA9IG9yVGVybUFbYV07XHJcbiAgICAgICAgICAgIHZhciBtb25vbTIgPSBvclRlcm1CW2JdO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0aW5nTW9ub20gPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG0gaW4gbW9ub20xKSB7XHJcbiAgICAgICAgICAgICAgcmVzdWx0aW5nTW9ub21bbW9ub20xW21dXSA9IG1vbm9tMVttXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG1vbm9tMikge1xyXG4gICAgICAgICAgICAgIHJlc3VsdGluZ01vbm9tW21vbm9tMltuXV0gPSBtb25vbTJbbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3T3JBcnJheS5wdXNoKHJlc3VsdGluZ01vbm9tKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0FuZEFycmF5LnB1c2gobmV3T3JBcnJheSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgdW5ldmVuIGNvcHkgbGFzdCBhbmQtdGVybVxyXG4gICAgICBpZiAoYW5kQXJyYXkubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgIG5ld0FuZEFycmF5LnB1c2goYW5kQXJyYXlbYW5kQXJyYXkubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vcHJpbnRFcW5BcnJheShuZXdBbmRBcnJheSk7XHJcbiAgICAgIHByaW50RXFuQXJyYXlGYW5jeShuZXdBbmRBcnJheSk7XHJcbiAgICAgIFxyXG4gICAgICBhbmRBcnJheS5sZW5ndGggPSAwO1xyXG4gICAgICAvLyBzaW1wbGlmeSBvci10ZXJtXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3QW5kQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgb3JUZXJtID0gbmV3QW5kQXJyYXlbaV07XHJcbiAgICAgICAgdmFyIG5ld09yVGVybSA9IHNpbXBsaWZ5T3JUZXJtKG9yVGVybSk7XHJcbiAgICAgICAgaWYgKG5ld09yVGVybS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBhbmRBcnJheS5wdXNoKG5ld09yVGVybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgcHJvYmxlbVNpemUgPSBlcW5BcnJheVByb2JsZW1TaXplKGFuZEFycmF5KTtcclxuICAgICAgaWYgKHByb2JsZW1TaXplID4gdGhpcy5tYXhQcm9ibGVtU2l6ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFRoZSBjeWNsaWMgY292ZXJpbmcgcHJvYmxlbSBpcyB0b28gbGFyZ2UgdG8gYmUgc29sdmVkIHdpdGggUGV0cmljaydzIG1ldGhvZCAoaW5jcmVhc2UgbWF4UHJvYmxlbVNpemUpLiBTaXplPVwiICsgcHJvYmxlbVNpemUpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy9wcmludEVxbkFycmF5KGFuZEFycmF5KTtcclxuICAgICAgcHJpbnRFcW5BcnJheUZhbmN5KGFuZEFycmF5KTtcclxuICAgICAgbG9vcENvdW50ZXIrKztcclxuICAgIH1cclxuICAgIHRoaXMuc29sdXRpb24gPSBhbmRBcnJheTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNpbXBsaWZ5T3JUZXJtKG9yVGVybSkge1xyXG4gICAgLy8gZmluZCBhIG1vbm9tIHRoYXQgaXMgdGhlIHNhbWUgb3Igc2ltcGxlciB0aGFuIGFub3RoZXIgb25lXHJcbiAgICB2YXIgbmV3T3JUZXJtID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgbWFya2VkRm9yRGVsZXRpb24gPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBmb3IgKHZhciBhID0gMDsgYSA8IG9yVGVybS5sZW5ndGg7IGErKykge1xyXG4gICAgICB2YXIga2VlcEEgPSB0cnVlO1xyXG4gICAgICB2YXIgbW9ub21BID0gb3JUZXJtW2FdO1xyXG4gICAgICBmb3IgKHZhciBiID0gYSArIDE7IGIgPCBvclRlcm0ubGVuZ3RoICYmIGtlZXBBOyBiKyspIHtcclxuICAgICAgICB2YXIgbW9ub21CID0gb3JUZXJtW2JdO1xyXG4gICAgICAgIHZhciBvdmVybGFwQm92ZXJBID0gMDtcclxuICAgICAgICB2YXIgbGVuZ3RoQSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgbSBpbiBtb25vbUEpIHtcclxuICAgICAgICAgIGlmIChtb25vbUJbbV0gaW4gbW9ub21BKSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXBCb3ZlckErKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxlbmd0aEErKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvdmVybGFwQW92ZXJCID0gMDtcclxuICAgICAgICB2YXIgbGVuZ3RoQiA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgbSBpbiBtb25vbUIpIHtcclxuICAgICAgICAgIGlmIChtb25vbUFbbV0gaW4gbW9ub21CKSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXBBb3ZlckIrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxlbmd0aEIrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvdmVybGFwQm92ZXJBID09PSBsZW5ndGhCKSB7XHJcbiAgICAgICAgICBrZWVwQSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlbmd0aEEgPCBsZW5ndGhCICYmIG92ZXJsYXBBb3ZlckIgPT09IGxlbmd0aEEpIHtcclxuICAgICAgICAgIG1hcmtlZEZvckRlbGV0aW9uW2JdID0gYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGlmIChrZWVwQSkge1xyXG4gICAgICAgIGlmIChhIGluIG1hcmtlZEZvckRlbGV0aW9uKSB7XHJcbiAgICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICBuZXdPclRlcm0ucHVzaChvclRlcm1bYV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3T3JUZXJtO1xyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHByaW50RXFuQXJyYXlGYW5jeShhbmRBcnJheSkge1xyXG4gICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICAgIHN0ciArPSBcIihcIjtcclxuICAgICAgdmFyIG9yQXJyYXkgPSBhbmRBcnJheVtpXTtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvckFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKCFmaXJzdClcclxuICAgICAgICAgIHN0ciArPSBcIiAmb3I7IFwiO1xyXG4gICAgICAgIHZhciBtb25vbSA9IG9yQXJyYXlbal07XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBtb25vbSkge1xyXG4gICAgICAgICAgc3RyICs9IFwiPGk+cDwvaT48c3ViPjxzbWFsbD5cIisgbW9ub21ba10gKyBcIjwvc21hbGw+PC9zdWI+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgc3RyICs9IFwiKVwiO1xyXG4gICAgfVxyXG4gICAgaWYodGhhdC5sb2cubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGF0LmxvZyArPSBcIjxwPiZoQXJyOyZuYnNwO1wiICsgc3RyICsgXCI8L3A+XCI7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhhdC5sb2cgKz0gXCI8cD5cIisgc3RyICsgXCI8L3A+XCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGVxbkFycmF5UHJvYmxlbVNpemUoYW5kQXJyYXkpIHtcclxuICAgIHZhciBtb25vbUNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgb3JBcnJheSA9IGFuZEFycmF5W2ldO1xyXG4gICAgICBtb25vbUNvdW50ZXIgKz0gb3JBcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9ub21Db3VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICBmdW5jdGlvbiBwcmludEVxbkFycmF5KGFuZEFycmF5KSB7XHJcbiAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5kQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgc3RyICs9IFwiKFwiO1xyXG4gICAgICB2YXIgb3JBcnJheSA9IGFuZEFycmF5W2ldO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9yQXJyYXkubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoIWZpcnN0KVxyXG4gICAgICAgICAgc3RyICs9IFwiIG9yIFwiO1xyXG4gICAgICAgIHZhciBtb25vbSA9IG9yQXJyYXlbal07XHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBtb25vbSkge1xyXG4gICAgICAgICAgc3RyICs9IG1vbm9tW2tdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHN0ciArPSBcIilcIjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBQcmltVGVybSgpIHtcclxuICB0aGlzLmltcGxpY2FudCA9IC0xO1xyXG4gIHRoaXMudGVybVN0cmluZyA9IFwiXCI7XHJcbiAgdGhpcy5jb2xvciA9IFswLCAwLCAwXTtcclxuICB0aGlzLmNvbG9yZWRUZXJtU3RyaW5nID0gXCJcIjtcclxuICB0aGlzLnVzZWQgPSBmYWxzZTtcclxuICB0aGlzLm5lZWRlZEJ5VmFyID0gbmV3IE9iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gSW1wbGljYW50KCkge1xyXG4gIHRoaXMuaW1wID0gbmV3IE9iamVjdCgpO1xyXG4gIHRoaXMuaXNQcmltID0gZmFsc2U7XHJcbiAgdGhpcy5pc09ubHlEb250Q2FyZSA9IGZhbHNlO1xyXG4gIHRoaXMuYml0TWFzayA9IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltcGxpY2FudEdyb3VwKCkge1xyXG4gIHRoaXMuZ3JvdXAgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5vcmRlciA9IC0xO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcmltVGVybVRhYmxlKG9yZCkge1xyXG4gIHRoaXMuZXNzZW50aWFsUHJpbVRlcm1zID0gbmV3IEFycmF5KCk7XHJcbiAgdGhpcy5vcmRlciA9IG9yZDtcclxuICB0aGlzLnJlbWFpbmluZ1ZhcnMgPSAgbmV3IEFycmF5KCk7O1xyXG4gIHRoaXMucmVtYWluaW5nUHJpbVRlcm1zID0gIG5ldyBBcnJheSgpO1xyXG4gIHRoaXMuc3VwZXJzZWRlZFByaW1UZXJtcyA9ICBuZXcgQXJyYXkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaHN2VG9SZ2IoaCwgcywgdikge1xyXG5cclxuICB2YXIgciwgZywgYjtcclxuICB2YXIgaSA9IE1hdGguZmxvb3IoaCAqIDYpO1xyXG4gIHZhciBmID0gaCAqIDYgLSBpO1xyXG4gIHZhciBwID0gdiAqICgxIC0gcyk7XHJcbiAgdmFyIHEgPSB2ICogKDEgLSBmICogcyk7XHJcbiAgdmFyIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XHJcblxyXG4gIHN3aXRjaCAoaSAlIDYpIHtcclxuICBjYXNlIDA6XHJcbiAgICByID0gdiwgZyA9IHQsIGIgPSBwO1xyXG4gICAgYnJlYWs7XHJcbiAgY2FzZSAxOlxyXG4gICAgciA9IHEsIGcgPSB2LCBiID0gcDtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgMjpcclxuICAgIHIgPSBwLCBnID0gdiwgYiA9IHQ7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDM6XHJcbiAgICByID0gcCwgZyA9IHEsIGIgPSB2O1xyXG4gICAgYnJlYWs7XHJcbiAgY2FzZSA0OlxyXG4gICAgciA9IHQsIGcgPSBwLCBiID0gdjtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgNTpcclxuICAgIHIgPSB2LCBnID0gcCwgYiA9IHE7XHJcbiAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBbIE1hdGguZmxvb3IociAqIDI1NSksIE1hdGguZmxvb3IoZyAqIDI1NSksIE1hdGguZmxvb3IoYiAqIDI1NSkgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFF1aW5lTWNDbHVza2V5RGF0YUN0cmwgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLm5vT2ZWYXJzID0gLTE7XHJcbiAgdGhpcy5mdW5jZGF0YSA9IG5ldyBBcnJheTtcclxuICB0aGlzLnByaW1UZXJtcyA9IG5ldyBBcnJheTtcclxuICB0aGlzLmltcGxpY2FudEdyb3VwcyA9IG5ldyBBcnJheTtcclxuICB0aGlzLm1pbmltYWxUZXJtID0gXCJcIjtcclxuICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSA9IFwiXCI7XHJcbiAgdGhpcy5taW5pbWFsVGVybVByaW1zID0gbmV3IEFycmF5O1xyXG4gIHRoaXMucHJpbVRlcm1UYWJsZXMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5wZXRyaWNrU29sdmVyID0gbmV3IFBldHJpY2tNZXRob2QoKTtcclxuICB0aGlzLnBldHJpY2tUZXJtUHJpbXMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5hbGxvd0RvbnRDYXJlID0gZmFsc2U7XHJcbiAgXHJcbiAgdGhpcy5pbml0ID0gZnVuY3Rpb24obm8pIHtcclxuICAgIHRoaXMubm9PZlZhcnMgPSBubztcclxuICAgIHRoaXMuZnVuY2RhdGEubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucHJpbVRlcm1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLmltcGxpY2FudEdyb3Vwcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5taW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIjBcIjtcclxuICAgIHRoaXMubWluaW1hbFRlcm1Qcmltcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wcmltVGVybVRhYmxlcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wZXRyaWNrVGVybVByaW1zLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgdmFyIG5vT2ZGdW5jRGF0YSA9IE1hdGgucG93KDIsIHRoaXMubm9PZlZhcnMpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub09mRnVuY0RhdGE7IGkrKykge1xyXG4gICAgICB0aGlzLmZ1bmNkYXRhLnB1c2goMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vdGhpcy5wZXRyaWNrU29sdmVyLnRlc3QoKTtcclxuICAgIFxyXG4gIH07XHJcbiAgXHJcbiAgdGhpcy5zZXRGdW5jRGF0YSA9IGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gdGhpcy5mdW5jZGF0YS5sZW5ndGgpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuZnVuY2RhdGFbaV0gPSB2YWw7XHJcbiAgfTtcclxuICBcclxuICB0aGlzLmFjdGl2YXRlZCA9IGZ1bmN0aW9uKGkpIHtcclxuICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMuZnVuY2RhdGEubGVuZ3RoKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5mdW5jZGF0YVtpXSArPSAxO1xyXG4gICAgaWYodGhpcy5hbGxvd0RvbnRDYXJlKSB7XHJcbiAgICAgIGlmICh0aGlzLmZ1bmNkYXRhW2ldID4gMikgdGhpcy5mdW5jZGF0YVtpXSA9IDA7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgaWYgKHRoaXMuZnVuY2RhdGFbaV0gPiAxKSB0aGlzLmZ1bmNkYXRhW2ldID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgdGhpcy5yYW5kb20gPSBmdW5jdGlvbigpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mdW5jZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZih0aGlzLmFsbG93RG9udENhcmUpIHtcclxuICAgICAgICB0aGlzLmZ1bmNkYXRhW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuZnVuY2RhdGFbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wdXRlKCk7XHJcbiAgfTtcclxuICBcclxuICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnVuY2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5mdW5jZGF0YVtpXSA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbXB1dGUoKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBiaXRDb3VudCh2YWx1ZSkge1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgd2hpbGUgKHZhbHVlID4gMCkge1xyXG4gICAgICBpZiAoKHZhbHVlICYgMSkgPT09IDEpIGNvdW50ZXIrKztcclxuICAgICAgdmFsdWUgPj49IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9XHJcbiAgXHJcbiAgdGhpcy5jb21wdXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnByaW1UZXJtcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5pbXBsaWNhbnRHcm91cHMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMubWluaW1hbFRlcm0gPSBcIjBcIjtcclxuICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucHJpbVRlcm1UYWJsZXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucGV0cmlja1Rlcm1Qcmltcy5sZW5ndGggPSAwO1xyXG4gICAgXHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICB2YXIgbGFzdElnID0gLTE7XHJcbiAgICB2YXIgY29udGludWVMb29wID0gdHJ1ZTtcclxuICAgIHdoaWxlKGNvbnRpbnVlTG9vcCkge1xyXG4gICAgICBcclxuICAgICAgY29udGludWVMb29wID0gZmFsc2U7XHJcbiAgICAgIHZhciBpZyA9IG5ldyBJbXBsaWNhbnRHcm91cCgpO1xyXG4gICAgICBcclxuICAgICAgaWYoY291bnRlciA9PT0gMCkge1xyXG4gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnVuY2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICBpZih0aGlzLmZ1bmNkYXRhW2ldID4gMCkge1xyXG4gICAgICAgICAgICAgdmFyIGltcGwgPSBuZXcgSW1wbGljYW50KCk7XHJcbiAgICAgICAgICAgICBpbXBsLmltcFtpXSA9IGk7XHJcbiAgICAgICAgICAgICBpbXBsLmlzUHJpbSA9IHRydWU7XHJcbiAgICAgICAgICAgICBpZy5ncm91cC5wdXNoKGltcGwpO1xyXG4gICAgICAgICAgICAgY29udGludWVMb29wID0gdHJ1ZTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWcuZ3JvdXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGZvciAodmFyIGogPSBpKzE7IGogPCBsYXN0SWcuZ3JvdXAubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGltcDEgPSBsYXN0SWcuZ3JvdXBbaV07XHJcbiAgICAgICAgICAgIHZhciBpbXAyID0gbGFzdElnLmdyb3VwW2pdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGltcDEuYml0TWFzayA9PT0gaW1wMi5iaXRNYXNrKSB7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHZhciB4b3IgPSAtMTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIGltcDEuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIGltcDIuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBpMSA9IGltcDEuaW1wW21dO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgaTIgPSBpbXAyLmltcFtuXTtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpMSArIFwiPC0+XCIgKyBpMik7XHJcbiAgICAgICAgICAgICAgICAgIHhvciA9IChpMSBeIGkyKSAmICh+aW1wMS5iaXRNYXNrKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGJpdENvdW50KHhvcikgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZm91bmQgbWVyZ2UgY2FuZGlkYXRlXCIgKyBpMSArIFwiPC0+XCIgKyBpMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgaW1wMS5pc1ByaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGltcDIuaXNQcmltID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltcGwgPSBuZXcgSW1wbGljYW50KCk7XHJcbiAgICAgICAgICAgICAgICBpbXBsLmlzUHJpbSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbXBsLmJpdE1hc2sgPSBpbXAxLmJpdE1hc2sgfCB4b3I7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIGltcDEuaW1wKVxyXG4gICAgICAgICAgICAgICAgICBpbXBsLmltcFttXSA9IHBhcnNlSW50KG0pO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBpbXAyLmltcClcclxuICAgICAgICAgICAgICAgICAgaW1wbC5pbXBbbl0gPSBwYXJzZUludChuKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm91bmRNYXRjaCA9IGZhbHNlOyAvLyBkZXRlcm1pbmUgaWYgdGhpcyBjb21iaW5hdGlvbiBpcyBhbHJlYWR5IHRoZXJlXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGs9MDsgayA8IGlnLmdyb3VwLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBleGlzdCA9IGlnLmdyb3VwW2tdO1xyXG4gICAgICAgICAgICAgICAgICB2YXIgaXNUaGVTYW1lID0gdHJ1ZTsgIFxyXG4gICAgICAgICAgICAgICAgICAgZm9yKHZhciBtIGluIGltcGwuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIGV4aXN0LmltcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VJbnQobSkgPT09IHBhcnNlSW50KG4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBpZighZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpc1RoZVNhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgaWYoaXNUaGVTYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGZvdW5kTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCFmb3VuZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlnLmdyb3VwLnB1c2goaW1wbCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlTG9vcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZihjb250aW51ZUxvb3ApIHRoaXMuaW1wbGljYW50R3JvdXBzLnB1c2goaWcpO1xyXG4gICAgICBsYXN0SWcgPSBpZztcclxuICAgICAgY291bnRlcisrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBjb2xsZWN0IHByaW10ZXJtc1xyXG4gICAgdGhpcy5wcmltVGVybXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMubWluaW1hbFRlcm1Qcmltcy5sZW5ndGggPSAwO1xyXG4gICAgdmFyIGNvbG9yID0gMC4wO1xyXG4gICAgZm9yKHZhciBpPSB0aGlzLmltcGxpY2FudEdyb3Vwcy5sZW5ndGgtMTsgaSA+PTA7IGktLSkge1xyXG4gICAgICB2YXIgZyA9IHRoaXMuaW1wbGljYW50R3JvdXBzW2ldLmdyb3VwO1xyXG4gICAgXHJcbiAgICAgIGZvcih2YXIgaj0wOyBqIDwgZy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmKGdbal0uaXNQcmltKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIHByaW0gdGVybXMgaW50cm9kdWNlZCBieSBkb24ndCBjYXJlc1xyXG4gICAgICAgICAgLy8gbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSAxXHJcbiAgICAgICAgICB2YXIgY29udGFpbnNPbmUgPSBmYWxzZTtcclxuICAgICAgICAgIHZhciBhbGxGdW5jUHJpbVRlcm0gPSBnW2pdLmltcDtcclxuICAgICAgICAgIGZvcih2YXIga2sgaW4gYWxsRnVuY1ByaW1UZXJtKSB7XHJcbiAgICAgICAgICAgIHZhciBrID0gYWxsRnVuY1ByaW1UZXJtW2trXTtcclxuICAgICAgICAgICAgaWYodGhpcy5mdW5jZGF0YVtrXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5zT25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZighY29udGFpbnNPbmUpe1xyXG4gICAgICAgICAgICBnW2pdLmlzT25seURvbnRDYXJlID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBwcmltVGVybSA9IG5ldyBQcmltVGVybSgpO1xyXG4gICAgICAgICAgICBwcmltVGVybS5pbXBsaWNhbnQgPSBnW2pdO1xyXG5cclxuICAgICAgICAgICAgLy8gZXh0cmFjdCBtaW5UZXJtIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0aGlzVmFsIGluIHByaW1UZXJtLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICB2YXIgbWluVGVybSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgdmFyIG9uZSA9IDE7XHJcbiAgICAgICAgICAgICAgdmFyIG5lZWRlZCA9ICh+cHJpbVRlcm0uaW1wbGljYW50LmJpdE1hc2spO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHYgPSAwOyB2IDwgdGhpcy5ub09mVmFyczsgdisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG5lZWRlZCAmIG9uZSkgPT09IG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoKHRoaXNWYWwgJiBvbmUpID09PSBvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5UZXJtID0gXCI8aT54PC9pPjxzdWI+PHNtYWxsPlwiICsgdiArIFwiPC9zbWFsbD48L3N1Yj5cIiArIG1pblRlcm07XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluVGVybSA9IFwiPGk+eCYjNzcyOzwvaT48c3ViPjxzbWFsbD5cIiArIHYgKyBcIjwvc21hbGw+PC9zdWI+XCIgKyBtaW5UZXJtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbmUgPSBvbmUgPDwgMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbWluVGVybSA9IFwiKFwiICsgbWluVGVybSArIFwiKVwiO1xyXG4gICAgICAgICAgICAgIGlmIChwcmltVGVybS5pbXBsaWNhbnQuYml0TWFzayA9PT0gTWF0aC5wb3coMiwgdGhpcy5ub09mVmFycykgLSAxKVxyXG4gICAgICAgICAgICAgICAgbWluVGVybSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgIHByaW1UZXJtLmNvbG9yID0gaHN2VG9SZ2IoY29sb3IsIDEuMCwgMC41KTtcclxuICAgICAgICAgICAgICBjb2xvciArPSAwLjIyO1xyXG4gICAgICAgICAgICAgIGNvbG9yID0gY29sb3IgJSAxLjA7XHJcblxyXG5cclxuICAgICAgICAgICAgICBwcmltVGVybS50ZXJtU3RyaW5nID0gbWluVGVybTtcclxuICAgICAgICAgICAgICB2YXIgY29sb3JTdHIgPSBcInJnYihcIiArIHByaW1UZXJtLmNvbG9yWzBdICsgXCIsXCIgKyBwcmltVGVybS5jb2xvclsxXSArIFwiLFwiICsgcHJpbVRlcm0uY29sb3JbMl0gKyBcIilcIjtcclxuICAgICAgICAgICAgICBwcmltVGVybS5jb2xvcmVkVGVybVN0cmluZyA9IFwiPHNwYW4gc3R5bGU9J2NvbG9yOlwiICsgY29sb3JTdHIgKyBcIic+XCIgKyBtaW5UZXJtICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJpbVRlcm1zLnB1c2gocHJpbVRlcm0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIGxvb2tpbmcgZm9yIGVzc2VudGlhbCBwcmltZSBpbXBsaWNhbnRzIFxyXG4gICAgdmFyIHJlbWFpbmluZyA9IG5ldyBPYmplY3QoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mdW5jZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZih0aGlzLmZ1bmNkYXRhW2ldID09PSAxKSB7XHJcbiAgICAgICAgcmVtYWluaW5nW2ldID0gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnByaW1UZXJtVGFibGVzLmxlbmd0aCA9IDA7XHJcbiAgICB2YXIgcHJpbVRhYmxlTG9vcCA9IDA7XHJcbiAgICB2YXIgcHJpbVRhYmxlRm91bmQgPSAodGhpcy5wcmltVGVybXMubGVuZ3RoID4gMCk7XHJcbiAgICB2YXIgY3ljbGljQ292ZXJpbmdGb3VuZCA9IGZhbHNlO1xyXG4gICAgdmFyIHByaW1UZXJtVGFibGU7XHJcbiAgICB3aGlsZSAocHJpbVRhYmxlRm91bmQpIHtcclxuXHJcbiAgICAgIHByaW1UYWJsZUZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICBwcmltVGVybVRhYmxlID0gbmV3IFByaW1UZXJtVGFibGUocHJpbVRhYmxlTG9vcCk7XHJcbiAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdWYXJzLnB1c2gocmVtYWluaW5nW3JdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByaW1UYWJsZUxvb3AgPT09IDApIHsgXHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnByaW1UZXJtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXMucHVzaCh0aGlzLnByaW1UZXJtc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSByb3dzXHJcbiAgICAgICAgdmFyIHByZXZUYWJsZSA9IHRoaXMucHJpbVRlcm1UYWJsZXNbcHJpbVRhYmxlTG9vcC0xXTsgXHJcbiAgICAgICAgZm9yKHZhciBrPTA7IGsgPHByZXZUYWJsZS5yZW1haW5pbmdQcmltVGVybXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgIGlmKCFwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2tdLnVzZWQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHN1cGVyc2VkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGltcEEgPSBwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2tdLmltcGxpY2FudC5pbXA7XHJcbiAgICAgICAgICAgIHZhciB2YXJDb3ZlciA9IG5ldyBPYmplY3Q7XHJcbiAgICAgICAgICAgIHZhciBjb3VudEEgPSAwO1xyXG4gICAgICAgICAgICBmb3IodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHYgPSByZW1haW5pbmdbcl07XHJcbiAgICAgICAgICAgICAgaWYgKHYgaW4gaW1wQSkge1xyXG4gICAgICAgICAgICAgICAgdmFyQ292ZXJbdl0gPSB2O1xyXG4gICAgICAgICAgICAgICAgY291bnRBKys7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHByZXZUYWJsZS5yZW1haW5pbmdQcmltVGVybXMubGVuZ3RoICYmICFzdXBlcnNlZGVkOyBsKyspIHtcclxuICAgICAgICAgICAgICBpZiAoIXByZXZUYWJsZS5yZW1haW5pbmdQcmltVGVybXNbbF0udXNlZCAmJiBrICE9PSBsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1wQiA9IHByZXZUYWJsZS5yZW1haW5pbmdQcmltVGVybXNbbF0uaW1wbGljYW50LmltcDtcclxuICAgICAgICAgICAgICAgIHZhciBjb3VudEIgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgciBpbiB2YXJDb3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdiA9IHZhckNvdmVyW3JdO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodiBpbiBpbXBCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRCKys7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGNvdW50QSA9PT0gY291bnRCKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBjb3VudEJJblJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSByZW1haW5pbmdbcl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgaW4gaW1wQikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRCSW5SZW1haW5pbmcrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYoY291bnRCSW5SZW1haW5pbmcgPiBjb3VudEEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdXBlcnNlZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoayA+IGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN1cGVyc2VkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFzdXBlcnNlZGVkKSB7XHJcbiAgICAgICAgICAgICAgcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXMucHVzaChwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2tdKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgcHJldlRhYmxlLnN1cGVyc2VkZWRQcmltVGVybXMucHVzaChwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2tdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnByaW1UZXJtVGFibGVzLnB1c2gocHJpbVRlcm1UYWJsZSk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRUZXJtcyA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zO1xyXG5cclxuICAgICAgICB2YXIgdG9CZVJlbW92ZWQgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgciBpbiByZW1haW5pbmcpIHtcclxuICAgICAgICAgIHZhciBpID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICAgIHZhciB0ZXJtID0gLTE7XHJcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGN1cnJlbnRUZXJtcy5sZW5ndGggJiYgY291bnQgPCAyOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgaW4gY3VycmVudFRlcm1zW2pdLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICB0ZXJtID0gajtcclxuICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUZXJtc1t0ZXJtXS5uZWVkZWRCeVZhcltpXSA9IHByaW1UYWJsZUxvb3A7XHJcbiAgICAgICAgICAgIGlmKCFjdXJyZW50VGVybXNbdGVybV0udXNlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubWluaW1hbFRlcm1Qcmltcy5wdXNoKGN1cnJlbnRUZXJtc1t0ZXJtXSk7XHJcbiAgICAgICAgICAgICAgY3VycmVudFRlcm1zW3Rlcm1dLnVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHByaW1UZXJtVGFibGUuZXNzZW50aWFsUHJpbVRlcm1zLnB1c2goY3VycmVudFRlcm1zW3Rlcm1dKTtcclxuICAgICAgICAgICAgICBwcmltVGFibGVGb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWkgPSByZW1haW5pbmdbcl07XHJcbiAgICAgICAgICAgICAgICBpZiAoaWkgaW4gY3VycmVudFRlcm1zW3Rlcm1dLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgdG9CZVJlbW92ZWRbaWldID0gaWk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJlbW92ZSBjb2x1bW5zXHJcbiAgICAgICAgdmFyIHRtcFJlbWFpbmluZyA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICBmb3IgKHZhciBlIGluIHJlbWFpbmluZyl7XHJcbiAgICAgICAgICB2YXIgZWUgPSByZW1haW5pbmdbZV07XHJcbiAgICAgICAgICB0bXBSZW1haW5pbmdbZWVdID0gZWU7XHJcbiAgICAgICAgICBkZWxldGUgcmVtYWluaW5nW2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVtYWluaW5nQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIHIgaW4gdG1wUmVtYWluaW5nKSB7XHJcbiAgICAgICAgICB2YXIgdCA9IHRtcFJlbWFpbmluZ1tyXTtcclxuICAgICAgICAgIGlmKCEodCBpbiB0b0JlUmVtb3ZlZCkpIHtcclxuICAgICAgICAgICAgIHJlbWFpbmluZyBbdF0gPSB0O1xyXG4gICAgICAgICAgICAgcmVtYWluaW5nQ291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiggcmVtYWluaW5nQ291bnQgPT09IDAgKSB7XHJcbiAgICAgICAgcHJpbVRhYmxlRm91bmQgPSBmYWxzZTsgLy8gYnJlYWsgbG9vcFxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBpZighcHJpbVRhYmxlRm91bmQpIHtcclxuICAgICAgICAgIGN5Y2xpY0NvdmVyaW5nRm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcHJpbVRhYmxlTG9vcCsrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIHZhciBzb2x1dGlvbkZvdW5kID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgLy8gUGV0cmljaydzIE1ldGhvZFxyXG4gICAgaWYgKGN5Y2xpY0NvdmVyaW5nRm91bmQpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIkN5Y2xpYyBjb3ZlcmluZyBmb3VuZFwiKTtcclxuXHJcbiAgICAgIHZhciBhbmRBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICBcclxuICAgICAgZm9yICh2YXIgciBpbiByZW1haW5pbmcpIHtcclxuICAgICAgICB2YXIgaWkgPSByZW1haW5pbmdbcl07XHJcbiAgICAgICAgIHZhciBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgIHZhciBpbXAgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXS5pbXBsaWNhbnQuaW1wO1xyXG4gICAgICAgICAgaWYoaWkgaW4gaW1wKXtcclxuICAgICAgICAgICAgdmFyIG1vbm9tID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgICAgICBtb25vbVtrXSA9IGs7XHJcbiAgICAgICAgICAgIG9yQXJyYXkucHVzaChtb25vbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHNvbHV0aW9uRm91bmQgPSB0aGlzLnBldHJpY2tTb2x2ZXIuc29sdmUoYW5kQXJyYXkpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHNvbHV0aW9uRm91bmQpIHtcclxuICAgICAgICB2YXIgc29sdXRpb25zID0gdGhpcy5wZXRyaWNrU29sdmVyLnNvbHV0aW9uWzBdO1xyXG5cclxuICAgICAgICB2YXIgYmVzdFNvbHV0aW9uID0gLTE7XHJcbiAgICAgICAgdmFyIGJlc3RDb3VudCA9IDEwMDAwMDAwO1xyXG4gICAgICAgIHZhciBiZXN0VmFyQ291bnQgPSAxMDAwMDAwMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvbHV0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICAgIGZvciAodmFyIGogaW4gc29sdXRpb25zW2ldKSB7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY291bnQgPD0gYmVzdENvdW50KSB7IC8vIGZpcnN0IHNvcnQgYWNjb3JpbmcgdG8gbW9ub20gbGVuZ3RoXHJcblxyXG4gICAgICAgICAgICB2YXIgZm91bmRCZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSBiZXN0Q291bnQpIHtcclxuICAgICAgICAgICAgICB2YXIgYmVzdFZhckNvdW50TmV3ID0gMDtcclxuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHNvbHV0aW9uc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdiBpbiBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tqXS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJlc3RWYXJDb3VudE5ldysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoYmVzdFZhckNvdW50TmV3ID49IGJlc3RWYXJDb3VudClcclxuICAgICAgICAgICAgICAgIGZvdW5kQmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZm91bmRCZXN0KSB7XHJcbiAgICAgICAgICAgICAgYmVzdENvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgICAgYmVzdFNvbHV0aW9uID0gaTtcclxuICAgICAgICAgICAgICBiZXN0VmFyQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIGogaW4gc29sdXRpb25zW2Jlc3RTb2x1dGlvbl0pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbal0uaW1wbGljYW50LmltcCkge1xyXG4gICAgICAgICAgICAgICAgICBiZXN0VmFyQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJlc3Qgc29sdXRpb24gXCIgKyBiZXN0U29sdXRpb24pO1xyXG5cclxuICAgICAgICB2YXIgYmVzdCA9IHNvbHV0aW9uc1tiZXN0U29sdXRpb25dO1xyXG4gICAgICAgIGZvciAodmFyIGIgaW4gYmVzdCkge1xyXG4gICAgICAgICAgdmFyIGFkZFByaW1UZXJtID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbYmVzdFtiXV07XHJcbiAgICAgICAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMucHVzaChhZGRQcmltVGVybSk7XHJcbiAgICAgICAgICB0aGlzLnBldHJpY2tUZXJtUHJpbXMucHVzaChhZGRQcmltVGVybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChzb2x1dGlvbkZvdW5kKSB7XHJcbiAgICAgIHRoaXMubWluaW1hbFRlcm0gPSBcIlwiO1xyXG4gICAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSA9IFwiXCI7XHJcbiAgICAgIHZhciBmaXJzdEwgPSB0cnVlO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWluaW1hbFRlcm1Qcmltcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICghZmlyc3RMKSB7XHJcbiAgICAgICAgICB0aGlzLm1pbmltYWxUZXJtICs9IFwiICZvcjsgXCI7XHJcbiAgICAgICAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSArPSBcIiAmb3I7IFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1pbmltYWxUZXJtICs9IHRoaXMubWluaW1hbFRlcm1Qcmltc1tpXS50ZXJtU3RyaW5nO1xyXG4gICAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtICs9IHRoaXMubWluaW1hbFRlcm1Qcmltc1tpXS5jb2xvcmVkVGVybVN0cmluZztcclxuICAgICAgICBmaXJzdEwgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMubWluaW1hbFRlcm1Qcmltcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLm1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIjBcIjtcclxuICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICB0aGlzLm1pbmltYWxUZXJtID0gJ0Vycm9yOiBUaGUgY3ljbGljIGNvdmVyaW5nIHByb2JsZW0gaXMgdG9vIGxhcmdlIChpbmNyZWFzZSB0aGUgXCJtYXhQcm9ibGVtU2l6ZVwiIHBhcmFtZXRlciknO1xyXG4gICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSAnRXJyb3I6IFRoZSBjeWNsaWMgY292ZXJpbmcgcHJvYmxlbSBpcyB0b28gbGFyZ2UgKGluY3JlYXNlIHRoZSBcIm1heFByb2JsZW1TaXplXCIgcGFyYW1ldGVyKSc7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFF1aW5lTWNDbHVza2V5ID0gZnVuY3Rpb24ocGFyZW50RGl2SWQsIGNvbHVtbnMsIGxhbmd1YWdlKSB7XHJcbiAgdmFyIG15RGl2ID0gLTE7XHJcbiAgdmFyIGRpdklkID0gcGFyZW50RGl2SWQ7XHJcbiAgdGhpcy5jb2xzID0gY29sdW1ucyArIDE7XHJcbiAgdGhpcy5yb3dzID0gTWF0aC5wb3coMiwgY29sdW1ucyk7XHJcbiAgdGhpcy5kYXRhID0gIG5ldyBRdWluZU1jQ2x1c2tleURhdGFDdHJsKCk7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICB2YXIgbGFiZWxzO1xyXG4gIGlmKGxhbmd1YWdlID09PSAwKSB7XHJcbiAgICBsYWJlbHMgPSB7dHRhYmxlOlwiVHJ1dGggdGFibGVcIixcclxuICAgICAgICAgICAgICBtaW5FeHA6XCJNaW5pbWFsIGJvb2xlYW4gZXhwcmVzc2lvblwiLFxyXG4gICAgICAgICAgICAgIGltcGxpOlwiSW1wbGljYW50c1wiLFxyXG4gICAgICAgICAgICAgIG9yZGVyOlwiT3JkZXJcIixcclxuICAgICAgICAgICAgICBwcmltQ2hhcnQ6XCJQcmltZSBpbXBsaWNhbnQgY2hhcnRcIixcclxuICAgICAgICAgICAgICBwcmltQ2hhcnRSZWR1Y2VkOlwiUmVkdWNlZCBwcmltZSBpbXBsaWNhbnQgY2hhcnQgKEl0ZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4dHJhY3RlZFByaW1zOlwiRXh0cmFjdGVkIGVzc2VudGlhbCBwcmltZSBpbXBsaWNhbnRzXCIsXHJcbiAgICAgICAgICAgICAgZXh0cmFjdGVkTVByaW1zOlwiRXh0cmFjdGVkIHByaW1lIGltcGxpY2FudHNcIixcclxuICAgICAgICAgICAgICBwZXRyaWNrc006XCJQZXRyaWNrJ3MgbWV0aG9kXCJ9O1xyXG4gIH1lbHNle1xyXG4gICAgbGFiZWxzID0ge3R0YWJsZTpcIldhaHJoZWl0c3RhZmVsXCIsXHJcbiAgICAgICAgICAgICAgbWluRXhwOlwiTWluaW1hbGVyIGJvb2xlc2NoZXIgQXVzZHJ1Y2tcIixcclxuICAgICAgICAgICAgICBpbXBsaTpcIkltcGxpa2FudGVuXCIsXHJcbiAgICAgICAgICAgICAgb3JkZXI6XCJPcmRudW5nXCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0OlwiUHJpbWltcGxpa2FudGVudGFmZWxcIixcclxuICAgICAgICAgICAgICBwcmltQ2hhcnRSZWR1Y2VkOlwiUmVkdXppZXJ0ZSBQcmltaW1wbGlrYW50ZW50YWZlbCAoSXRlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgZXh0cmFjdGVkUHJpbXM6XCJFeHRyYWhpZXJ0ZSBlc3NlbnRpZWxsZSBQcmltaW1wbGlrYW50ZW5cIixcclxuICAgICAgICAgICAgICBleHRyYWN0ZWRNUHJpbXM6XCJFeHRyYWhpZXJ0ZSBQcmltaW1wbGlrYW50ZW5cIixcclxuICAgICAgICAgICAgICBwZXRyaWNrc006XCJWZXJmYWhyZW4gdm9uIFBldHJpY2tcIn07XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICB0aGlzLmRhdGEuaW5pdChjb2x1bW5zKTtcclxuICAgIFxyXG4gICAgbXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGlmICghbXlEaXYpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJRdWluZU1jQ2x1c2tleSBlcnJvcjogY2FuIG5vdCBjcmVhdGUgYSBjYW52YXMgZWxlbWVudFwiKTtcclxuICAgICAgbXlEaXYgPSAtMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgXHJcbiAgICAgIHZhciBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XHJcbiAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgaWYoZGl2SWQgIT09IFwiZmFrZURpdklkXCIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVpbmVNY0NsdXNrZXkgZXJyb3I6IGNhbiBub3QgZmluZCBhbiBlbGVtZW50IHdpdGggdGhlIGdpdmVuIG5hbWU6IFwiICsgZGl2SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBteURpdiA9IC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobXlEaXYpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChteURpdik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZXROb09mVmFycyA9IGZ1bmN0aW9uKHZhcnMpIHtcclxuICAgIHZhciBjID0gcGFyc2VJbnQodmFycyk7XHJcbiAgICBpZiAoYyA8IDEgJiYgYyA+IDYpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuY29scyA9IGMgKyAxO1xyXG4gICAgdGhpcy5yb3dzID0gTWF0aC5wb3coMiwgYyk7XHJcbiAgICB0aGlzLmRhdGEuaW5pdChjKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5nZW5SYW5kb20gPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuZGF0YS5yYW5kb20oKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5hbGxvd0RvbnRDYXJlcyA9IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgIGlmKHR5cGUgPiAwKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5hbGxvd0RvbnRDYXJlID0gdHJ1ZTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLmRhdGEuYWxsb3dEb250Q2FyZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhLmNsZWFyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuZHJhd0ltcGxpY2FudEdyb3VwID0gZnVuY3Rpb24oZywgcGFyZW50LCBwcmltRmxhZywgdCwgZHJhd1BldHJpY2tWYXJzKSB7XHJcbiAgICB2YXIgcHJpbVRlcm1UYWJsZSA9IHRoaXMuZGF0YS5wcmltVGVybVRhYmxlc1t0XTtcclxuICAgIHZhciBteVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgIG15VGFibGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUYWJsZUNsYXNzJyk7XHJcbiAgICB2YXIgbXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgXHJcbiAgICB2YXIgY2VsbDFoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgIFxyXG4gICAgY2VsbDFoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgY2VsbDFoLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsMWgpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZGF0YS5ub09mVmFyczsgaisrKSB7XHJcbiAgICAgIHZhciBteUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCI8aT54PC9pPjxzdWI+PHNtYWxsPlwiICsgKHRoaXMuZGF0YS5ub09mVmFycy0xLWopICsgXCI8L3NtYWxsPjwvc3ViPlwiO1xyXG4gICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNIZWFkZXJYIHFtY0JpdCcpO1xyXG4gICAgICBteVJvdy5hcHBlbmRDaGlsZChteUNlbGwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocHJpbUZsYWcpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgY2VsbEltcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgIGNlbGxJbXBoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgICAgIGNlbGxJbXBoLmlubmVySFRNTCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFyc1tpXS50b1N0cmluZygxMCk7XHJcbiAgICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbEltcGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBjZWxsSW1waCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBjZWxsSW1waC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgIGNlbGxJbXBoLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsSW1waCk7XHJcblxyXG5cclxuICAgIG15VGFibGUuYXBwZW5kQ2hpbGQobXlSb3cpO1xyXG4gICAgXHJcbiAgICB2YXIgaU1heCA9IDA7XHJcbiAgICBpZighcHJpbUZsYWcpIGlNYXggPSBnLmdyb3VwLmxlbmd0aDsgZWxzZSBpTWF4ID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXMubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlNYXg7IGkrKykge1xyXG4gICAgICB2YXIgaW1wbCA9IC0xO1xyXG4gICAgICBpZighcHJpbUZsYWcpIGltcGwgPSBnLmdyb3VwW2ldOyBlbHNlIGltcGwgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tpXS5pbXBsaWNhbnQ7XHJcbiAgICAgIHZhciBiaXRzID0gMDtcclxuICAgICAgdmFyIG1hc2sgPSBpbXBsLmJpdE1hc2s7XHJcbiAgICAgIFxyXG4gICAgICBmb3IodmFyIG0gaW4gaW1wbC5pbXApIHtcclxuICAgICAgICBiaXRzID0gaW1wbC5pbXBbbV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgXHJcbiAgICAgIHZhciBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICAgICAgXHJcbiAgICAgIHZhciBjZWxsMVN0ciA9IFwiXCI7XHJcbiAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICAgIGZvcih2YXIgbSBpbiBpbXBsLmltcCkge1xyXG4gICAgICAgIGlmKCFmaXJzdCkgY2VsbDFTdHIgKz0gIFwiLCBcIjtcclxuICAgICAgICBjZWxsMVN0ciArPSBpbXBsLmltcFttXS50b1N0cmluZygxMCk7XHJcbiAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjZWxsMS5pbm5lckhUTUwgPSBjZWxsMVN0ciArIFwiOlwiO1xyXG4gICAgICBjZWxsMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlcyA9IGJpdHMudG9TdHJpbmcoMik7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5kYXRhLm5vT2ZWYXJzOyBqKyspIHtcclxuICAgICAgICB2YXIgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNCaXQnKTtcclxuICAgICAgICB2YXIgc3RyO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudEJpdCA9IE1hdGgucG93KDIsICh0aGlzLmRhdGEubm9PZlZhcnMgLSAxKS1qKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIGlmICgoY3VycmVudEJpdCAmIG1hc2spID09PSBjdXJyZW50Qml0KSB7XHJcbiAgICAgICAgICBzdHIgPSBcIi1cIjtcclxuICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChqID49ICh0aGlzLmRhdGEubm9PZlZhcnMpIC0gcmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdHIgPSByZXMuY2hhckF0KGogLSAodGhpcy5kYXRhLm5vT2ZWYXJzIC0gcmVzLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gXCIwXCI7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKG15Q2VsbCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgXHJcbiAgICAgIGlmICghcHJpbUZsYWcpIHtcclxuICAgICAgICAgdmFyIGNlbGxMYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgY2VsbExhc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICAgICAgaWYgKGltcGwuaXNQcmltKSB7XHJcbiAgICAgICAgICBjZWxsTGFzdC5pbm5lckhUTUwgPSBcIiYjeDI3MTM7XCI7ICAvL2VxdWl2YWxlbnQgJmNoZWNrOyBpbiBtb3N0IGJyb3dzZXJzXHJcbiAgICAgICAgICBpZihpbXBsLmlzT25seURvbnRDYXJlKXtcclxuICAgICAgICAgICAgY2VsbExhc3QuaW5uZXJIVE1MID0gXCIgKCZ0aW1lczspXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2VsbExhc3QuaW5uZXJIVE1MID0gXCImcmFycjtcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbExhc3QpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFycy5sZW5ndGg7IHYrKykge1xyXG4gICAgICAgICAgdmFyIGlpID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdWYXJzW3ZdO1xyXG4gICAgICAgICAgdmFyIGNlbGxVc2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgIGNlbGxVc2VkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jUHJpbUl0ZW0gcW1jQml0Jyk7XHJcbiAgICAgICAgICBpZiAoaWkgaW4gaW1wbC5pbXApIHtcclxuICAgICAgICAgICAgY2VsbFVzZWQuaW5uZXJIVE1MID0gXCImIzk2NzU7XCI7XHJcbiAgICAgICAgICAgIGlmIChpaSBpbiBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tpXS5uZWVkZWRCeVZhcikge1xyXG4gICAgICAgICAgICAgIGlmKHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2ldLm5lZWRlZEJ5VmFyW2lpXSA9PT0gdCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbFVzZWQuaW5uZXJIVE1MID0gXCI8c3BhbiBzdHlsZT0nY29sb3I6Z3JlZW47Jz4mIzk2Nzk7PC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxVc2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIHZhciBjZWxsTGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgIGNlbGxMYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpOyAgICBcclxuICAgICAgICAgY2VsbExhc3QuaW5uZXJIVE1MID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbaV0uY29sb3JlZFRlcm1TdHJpbmc7ICBcclxuICAgICAgICAgaWYoZHJhd1BldHJpY2tWYXJzKSB7XHJcbiAgICAgICAgICAgdmFyIHBWYXJzID0gXCImbmJzcDsmZXF1aXY7Jm5ic3A7PGk+cDwvaT48c3ViPjxzbWFsbD5cIiArIGkgKyBcIjwvc21hbGw+PC9zdWI+XCI7XHJcbiAgICAgICAgICAgY2VsbExhc3QuaW5uZXJIVE1MICs9IHBWYXJzOyAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsTGFzdCk7XHJcbiAgICAgIH1cclxuIFxyXG4gICAgICBcclxuICAgICAgbXlUYWJsZS5hcHBlbmRDaGlsZChteVJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG15VGFibGUpO1xyXG4gIH07XHJcblxyXG5cclxuICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGlmKG15RGl2ID09PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGNsZWFuIHVwXHJcbiAgICB2YXIgb2xkSW5uZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCtcIl9pbm5lckRpdlwiKTtcclxuICAgIGlmIChvbGRJbm5lckRpdikgbXlEaXYucmVtb3ZlQ2hpbGQob2xkSW5uZXJEaXYpO1xyXG4gICAgXHJcbiAgICB2YXIgbXlJbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbXlJbm5lckRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGl2SWQrXCJfaW5uZXJEaXZcIik7XHJcbiAgICBcclxuXHJcbiAgICB2YXIgbXlUcnV0aFRhYmxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBteVRydXRoVGFibGVEaXYuaW5uZXJIVE1MID0gXCI8ZGl2PlwiICsgbGFiZWxzWyd0dGFibGUnXSArIFwiOjwvZGl2PlwiO1xyXG4gICAgbXlUcnV0aFRhYmxlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGFibGVMYWJlbERpdicpO1xyXG4gICAgXHJcbiAgICAvLyByZS1nZW5lcmF0ZVxyXG4gICAgdmFyIG15VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgbXlUYWJsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlQ2xhc3MnKTtcclxuXHJcbiAgICB2YXIgbXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgXHJcbiAgICB2YXIgY2VsbDFoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgICAgICBcclxuICAgIGNlbGwxaC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY2VsbDFoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbDFoKTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICB2YXIgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgaWYgKGogPCB0aGlzLmNvbHMgLSAxKSB7XHJcbiAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiPGk+eDwvaT48c3ViPjxzbWFsbD5cIiArICh0aGlzLmNvbHMtMi1qKSArIFwiPC9zbWFsbD48L3N1Yj5cIjtcclxuICAgICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNIZWFkZXJYIHFtY0JpdCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBcIjxpPnk8L2k+XCI7XHJcbiAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSGVhZGVyWSBxbWNCaXQnKTtcclxuICAgICAgfVxyXG4gICAgICBteVJvdy5hcHBlbmRDaGlsZChteUNlbGwpO1xyXG4gICAgfVxyXG4gICAgbXlUYWJsZS5hcHBlbmRDaGlsZChteVJvdyk7XHJcbiAgIFxyXG5cclxuICAgXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgIG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgXHJcbiAgICAgIHZhciBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICAgICAgXHJcbiAgICAgIGNlbGwxLmlubmVySFRNTCA9IGkudG9TdHJpbmcoMTApICsgXCI6XCI7XHJcbiAgICAgIGNlbGwxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsMSk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgcmVzID0gaS50b1N0cmluZygyKTtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICAgIHZhciBteUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG5cclxuICAgICAgICBpZiAoaiA8IHRoaXMuY29scyAtIDEpIHsgLy8geCBlbGVtZW50XHJcbiAgICAgICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNCaXQnKTtcclxuICAgICAgICAgIHZhciBzdHI7XHJcbiAgICAgICAgICBpZiAoaiA+PSAodGhpcy5jb2xzIC0gMSkgLSByZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHJlcy5jaGFyQXQoaiAtICgodGhpcy5jb2xzIC0gMSkgLSByZXMubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHIgPSBcIjBcIjtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgeyAvLyB5IGVsZW1lbnRcclxuICAgICAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0JpdCBxbWNCaXRZJyk7XHJcbiAgICAgICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCd0aXRsZScsIGkpO1xyXG4gICAgICAgICAgbXlDZWxsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgbXlDZWxsTW91c2VEb3duKGV2ZW50KTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5mdW5jZGF0YVtpXSA9PT0gMCkge1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCIwXCI7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5mdW5jZGF0YVtpXSA9PT0gMSkge1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCIxXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhLmZ1bmNkYXRhW2ldID09PSAyKSB7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcclxuICAgICAgfVxyXG4gICAgICBteVRhYmxlLmFwcGVuZENoaWxkKG15Um93KTtcclxuICAgIH1cclxuXHJcbiAgICBteVRydXRoVGFibGVEaXYuYXBwZW5kQ2hpbGQobXlUYWJsZSk7XHJcbiAgICBteUlubmVyRGl2LmFwcGVuZENoaWxkKG15VHJ1dGhUYWJsZURpdik7XHJcbiAgICBcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaSA8IHRoaXMuZGF0YS5pbXBsaWNhbnRHcm91cHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG15SW1wbGljYW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIG15SW1wbGljYW50RGl2LmlubmVySFRNTCA9IFwiPGRpdj5cIisgbGFiZWxzWydpbXBsaSddICsgXCIgKFwiICsgbGFiZWxzWydvcmRlciddICsgXCIgXCIraStcIik6PC9kaXY+XCI7XHJcbiAgICAgIG15SW1wbGljYW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGFibGVMYWJlbERpdicpO1xyXG4gICAgICB0aGlzLmRyYXdJbXBsaWNhbnRHcm91cCh0aGlzLmRhdGEuaW1wbGljYW50R3JvdXBzW2ldLCAgbXlJbXBsaWNhbnREaXYsIGZhbHNlLCAwLCBmYWxzZSk7XHJcbiAgICAgIG15SW5uZXJEaXYuYXBwZW5kQ2hpbGQobXlJbXBsaWNhbnREaXYpOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEucHJpbVRlcm1UYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHJlc3VsdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpZihpID09PSAwICkge1xyXG4gICAgICAgIHJlc3VsdERpdi5pbm5lckhUTUwgPSBcIjxwPlwiICsgbGFiZWxzWydwcmltQ2hhcnQnXSArIFwiOjwvcFwiO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXN1bHREaXYuaW5uZXJIVE1MID0gXCI8cD4gXCIgK2xhYmVsc1sncHJpbUNoYXJ0UmVkdWNlZCddICsgXCIgXCIgKyAoaS0xKSArIFwiKTo8L3A+XCI7XHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgcmVzdWx0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGFibGVSZXN1bHREaXYnKTtcclxuXHJcbiAgICAgIHZhciBkcmF3UGV0cmlja1ZhcnMgPSBmYWxzZTtcclxuICAgICAgaWYodGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoID4gMCAmJiBpID09PSB0aGlzLmRhdGEucHJpbVRlcm1UYWJsZXMubGVuZ3RoLTEpIHtcclxuICAgICAgICBkcmF3UGV0cmlja1ZhcnMgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmRyYXdJbXBsaWNhbnRHcm91cCh0aGlzLmRhdGEucHJpbVRlcm1zLCByZXN1bHREaXYsIHRydWUsIGksIGRyYXdQZXRyaWNrVmFycyk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgZXNzUFRlcm1zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHZhciBlc3NQVGVybXNTdHIgPSBcIlwiO1xyXG4gICAgICB2YXIgcHJpbVRlcm1UYWJsZSA9IHRoaXMuZGF0YS5wcmltVGVybVRhYmxlc1tpXTtcclxuICAgICAgdmFyIGpqID0gcHJpbVRlcm1UYWJsZS5lc3NlbnRpYWxQcmltVGVybXMubGVuZ3RoO1xyXG4gICAgICBmb3IodmFyIGo9MDsgaiA8IGpqOyBqKyspIHtcclxuICAgICAgICBlc3NQVGVybXNTdHIgKz0gcHJpbVRlcm1UYWJsZS5lc3NlbnRpYWxQcmltVGVybXNbal0uY29sb3JlZFRlcm1TdHJpbmc7XHJcbiAgICAgICAgaWYoaiAhPT0gKGpqLTEpKSBlc3NQVGVybXNTdHIgKz0gXCIsIFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGpqID4gMCkge1xyXG4gICAgICAgZXNzUFRlcm1zRGl2LmlubmVySFRNTCA9IFwiPHA+XCIgKyBsYWJlbHNbJ2V4dHJhY3RlZFByaW1zJ10gK1wiOiA8c3BhbiBjbGFzcz0ncW1jTWF0aEZvbnQnPlwiICsgZXNzUFRlcm1zU3RyICsgXCI8L3NwYW4+PC9wPlwiO1xyXG4gICAgICAgZXNzUFRlcm1zRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSW5kZW50Jyk7XHJcbiAgICAgICByZXN1bHREaXYuYXBwZW5kQ2hpbGQoZXNzUFRlcm1zRGl2KTtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICBteUlubmVyRGl2LmFwcGVuZENoaWxkKHJlc3VsdERpdik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmRhdGEucGV0cmlja1Rlcm1Qcmltcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciBwZXRyaWNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHBldHJpY2tEaXYuaW5uZXJIVE1MID0gXCI8cD4gXCIgKyBsYWJlbHNbJ3BldHJpY2tzTSddICsgXCIgPC9wPlwiO1xyXG5cclxuICAgICAgdmFyIHBldHJpY2tJbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwZXRyaWNrSW5uZXJEaXYuaW5uZXJIVE1MID0gXCI8c3BhbiBjbGFzcz0ncW1jTWF0aEZvbnQnPlwiICsgdGhpcy5kYXRhLnBldHJpY2tTb2x2ZXIubG9nICsgXCI8L3NwYW4+XCI7XHJcbiAgICAgIHBldHJpY2tJbm5lckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0luZGVudCcpO1xyXG4gICAgICBwZXRyaWNrRGl2LmFwcGVuZENoaWxkKHBldHJpY2tJbm5lckRpdik7XHJcblxyXG4gICAgICB2YXIgcGV0cmlja0Vzc1Rlcm1zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHZhciBwZXRyaWNrRXNzVGVybXNTdHIgPSBcIlwiO1xyXG4gICAgICB2YXIgamogPSB0aGlzLmRhdGEucGV0cmlja1Rlcm1Qcmltcy5sZW5ndGg7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgamo7IGorKykge1xyXG4gICAgICAgIHBldHJpY2tFc3NUZXJtc1N0ciArPSB0aGlzLmRhdGEucGV0cmlja1Rlcm1Qcmltc1tqXS5jb2xvcmVkVGVybVN0cmluZztcclxuICAgICAgICBpZiAoaiAhPT0gKGpqIC0gMSkpXHJcbiAgICAgICAgICBwZXRyaWNrRXNzVGVybXNTdHIgKz0gXCIsIFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChqaiA+IDApIHtcclxuICAgICAgICBwZXRyaWNrRXNzVGVybXNEaXYuaW5uZXJIVE1MID0gXCI8cD5cIiArIGxhYmVsc1snZXh0cmFjdGVkTVByaW1zJ10gKyBcIiAoXCIgKyBsYWJlbHNbJ3BldHJpY2tzTSddICsgXCIpOiA8c3BhbiBjbGFzcz0ncW1jTWF0aEZvbnQnPlwiICsgcGV0cmlja0Vzc1Rlcm1zU3RyICsgXCI8L3NwYW4+PC9wPlwiO1xyXG4gICAgICAgIHBldHJpY2tFc3NUZXJtc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0luZGVudCcpO1xyXG4gICAgICAgIHBldHJpY2tEaXYuYXBwZW5kQ2hpbGQocGV0cmlja0Vzc1Rlcm1zRGl2KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZChwZXRyaWNrRGl2KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICB2YXIgdGVybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVybURpdi5pbm5lckhUTUwgPSBcIjxwPjxzdHJvbmc+XCIgKyBsYWJlbHNbJ21pbkV4cCddKyBcIjo8L3N0cm9uZz4gPC9wPiA8cCA+PHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz48aT55PC9pPiZuYnNwOz0mbmJzcDtcIiArIHRoaXMuZGF0YS5jb2xvcmVkTWluaW1hbFRlcm07ICtcIjwvc3Bhbj48L3A+XCI7XHJcbiAgICBteUlubmVyRGl2LmFwcGVuZENoaWxkKHRlcm1EaXYpO1xyXG4gICAgbXlEaXYuYXBwZW5kQ2hpbGQobXlJbm5lckRpdik7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbXlDZWxsTW91c2VEb3duKGUpIHtcclxuXHJcbiAgICB2YXIgdGFyZztcclxuICAgIGlmIChlLnRhcmdldCkge1xyXG4gICAgICB0YXJnID0gZS50YXJnZXQ7XHJcbiAgICB9IGVsc2UgeyAvLyBkZWFsIHdpdGggTWljcm9zb2Z0XHJcbiAgICAgIGlmIChlLnNyY0VsZW1lbnQpXHJcbiAgICAgICAgdGFyZyA9IGUuc3JjRWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICh0YXJnLm5vZGVUeXBlID09PSAzKSB7IC8vIGRlYWwgd2l0aCBTYWZhcmlcclxuICAgICAgdGFyZyA9IHRhcmcucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHZhciBpID0gcGFyc2VJbnQodGFyZy50aXRsZSk7XHJcbiAgICB0aGF0LmRhdGEuYWN0aXZhdGVkKGkpO1xyXG5cclxuICAgIHRoYXQudXBkYXRlKCk7XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUNEVWxFUVZRNHk0MlJUMGlUY1JqSG40bVVRZzNtdTdtWEplODJGOG9jcU5BWVNyQ0pXRXZvRUVJZ1pqUU12QXdQQmlKME1RZ3ZDaVpUU25kSThhUVVBeS9kcEIzODAwR0pxU1ZJREkwZEpxOGdpakx6c0UrSGdTSk4xM043bnVmNytmNTR2ajloZS9zR2c0UFBDUVkvTVRQempIUzZXQW9VOGZnZDF0YXFjazFqNDJjVUJjeG1NQm9oRkhwL0xieSticWFoNFJkTlRkL1ozSFFKYnJlTzBaZ3pjTHZCYW9YKy90ZDU0Y25KVG1wcmQ3RllvTHdjMnRyZUNxT2p6WFIzdnlFUVdNYnBoT1ptS0N1RGFMVGpFaHlMUFVaUk9JZXJxNDhaR09pK0VPenZHd2lIUCtEeGdOOFBGa3VHaFlYN0lpTE16d2ZRdEdOVUZVd21jRG9QaUVRZTVMOHhHZzNoOTJmUU5QQjZmekEzOXdpSEkzMmVVWHY3RjJabjdkZW5QREZ4RDY4M2lhS0F6WGFHcW9MVm1tVm9xSTlNeGxEb2wzSW1TMHYxT0J5bnFHb3U0RWprWlQ1ZDBaVU9zZGdMT1R5OEtka3Njbm9xc3J0YjlWOHZpNGd3UGQxSmFTazRIQWNNRHorbHArY2RKU1V3TmRWUkdJN0hmU2pLSDJwcVVpd3YxNS9QdytHUG1FeG5MQzdldlJyZTJIRGpkT3JVMWUyUVNGUmUycDJjRkJNTWZpVVFXTWtQYjIzWjBUU2RscFp2cks0YTgycDAvVFllenc3ajQ2LytYYmEycnVEei9VVFh6ZGVlT0RZV3htWTdZbTlQdVJqMjlrN1MxYlZBS3FVVnpDaVpWSEc1OW9sRW5vaUlGSkZJMUlqZHJzdkl5RU5EUmNYdlFnYUd5c3EwOVBXRjVlam9sb2pJWHcxbktJWmRod0RoQUFBQUFFbEZUa1N1UW1DQ1wiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4va21hcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjczYjc3NGQyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ttYXAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ttYXAuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHtQb2ludGVyRXZlbnRzUG9seWZpbGx9IGZyb20gXCIuL3BvaW50ZXJfZXZlbnRzX3BvbHlmaWxsXCI7XHJcbmltcG9ydCAnY2xhc3NsaXN0LXBvbHlmaWxsJztcclxuXHJcblBvaW50ZXJFdmVudHNQb2x5ZmlsbC5pbml0aWFsaXplKCk7IiwiLypcclxuICogUG9pbnRlciBFdmVudHMgUG9seWZpbGw6IEFkZHMgc3VwcG9ydCBmb3IgdGhlIHN0eWxlIGF0dHJpYnV0ZSBcInBvaW50ZXItZXZlbnRzOiBub25lXCIgdG8gYnJvd3NlcnMgd2l0aG91dCB0aGlzIGZlYXR1cmUgKG5hbWVseSwgSUUpLlxyXG4gKiAoYykgMjAxMywgS2VudCBNZXdob3J0LCBsaWNlbnNlZCB1bmRlciBCU0QuIFNlZSBMSUNFTlNFLnR4dCBmb3IgZGV0YWlscy5cclxuICovXHJcblxyXG4vLyBjb25zdHJ1Y3RvclxyXG5leHBvcnQgY29uc3QgUG9pbnRlckV2ZW50c1BvbHlmaWxsID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgLy8gc2V0IGRlZmF1bHRzXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2VsZWN0b3I6ICcqJyxcclxuICAgICAgICBtb3VzZUV2ZW50czogWydjbGljaycsJ2RibGNsaWNrJywnbW91c2Vkb3duJywnbW91c2V1cCddLFxyXG4gICAgICAgIHVzZVBvbHlmaWxsSWY6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKG5hdmlnYXRvci5hcHBOYW1lID09ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFnZW50Lm1hdGNoKC9NU0lFIChbMC05XXsxLH1bXFwuMC05XXswLH0pLykgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KCBSZWdFeHAuJDEgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih2ZXJzaW9uIDwgMTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYob3B0aW9ucyl7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXM7XHJcbiAgICAgICAgJC5lYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKGssdil7XHJcbiAgICAgICAgICAgIG9iai5vcHRpb25zW2tdID0gdjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLm9wdGlvbnMudXNlUG9seWZpbGxJZigpKVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJfbW91c2VfZXZlbnRzKCk7XHJcbn1cclxuXHJcbi8vIHNpbmdsZXRvbiBpbml0aWFsaXplclxyXG5Qb2ludGVyRXZlbnRzUG9seWZpbGwuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgaWYoUG9pbnRlckV2ZW50c1BvbHlmaWxsLnNpbmdsZXRvbiA9PSBudWxsKVxyXG4gICAgICAgIFBvaW50ZXJFdmVudHNQb2x5ZmlsbC5zaW5nbGV0b24gPSBuZXcgUG9pbnRlckV2ZW50c1BvbHlmaWxsKG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIFBvaW50ZXJFdmVudHNQb2x5ZmlsbC5zaW5nbGV0b247XHJcbn07XHJcblxyXG4vLyBoYW5kbGUgbW91c2UgZXZlbnRzIHcvIHN1cHBvcnQgZm9yIHBvaW50ZXItZXZlbnRzOiBub25lXHJcblBvaW50ZXJFdmVudHNQb2x5ZmlsbC5wcm90b3R5cGUucmVnaXN0ZXJfbW91c2VfZXZlbnRzID0gZnVuY3Rpb24oKXtcclxuICAgIC8vIHJlZ2lzdGVyIG9uIGFsbCBlbGVtZW50cyAoYW5kIGFsbCBmdXR1cmUgZWxlbWVudHMpIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxyXG4gICAgJChkb2N1bWVudCkub24odGhpcy5vcHRpb25zLm1vdXNlRXZlbnRzLmpvaW4oXCIgXCIpLCB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKCQodGhpcykuY3NzKCdwb2ludGVyLWV2ZW50cycpID09ICdub25lJyl7XHJcbiAgICAgICAgICAgIC8vIHBlYWsgYXQgdGhlIGVsZW1lbnQgYmVsb3dcclxuICAgICAgICAgICAgdmFyIG9yaWdEaXNwbGF5QXR0cmlidXRlID0gJCh0aGlzKS5jc3MoJ2Rpc3BsYXknKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdW5kZXJuZWF0aEVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9yaWdEaXNwbGF5QXR0cmlidXRlKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCBvcmlnRGlzcGxheUF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywnJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBmaXJlIHRoZSBtb3VzZSBldmVudCBvbiB0aGUgZWxlbWVudCBiZWxvd1xyXG4gICAgICAgICAgICBlLnRhcmdldCA9IHVuZGVybmVhdGhFbGVtO1xyXG4gICAgICAgICAgICAkKHVuZGVybmVhdGhFbGVtKS50cmlnZ2VyKGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fa21hcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImEyNmUxNTVhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19rbWFwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fa21hcC5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgJy4vX2ttYXAuc2Nzcyc7XHJcbmltcG9ydCBLbWFwIGZyb20gJ2ttYXAnO1xyXG5cclxuZXhwb3J0IHtLbWFwfTtcclxuZXhwb3J0IGRlZmF1bHQgS21hcDtcclxuXHJcbmltcG9ydCB7S21hcEZhY3Rvcnl9IGZyb20gJy4vanMvS21hcEZhY3RvcnknO1xyXG5cclxuS21hcEZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XHJcbiIsImltcG9ydCBLbWFwIGZyb20gJ2ttYXAnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEttYXBGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbkttYXBGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0ZnVuY3Rpb24gaW5zdGFsbCgpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLWttYXAnKTtcclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdGNvbnN0IGpzb24gPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRjb25zdCBrbWFwID0gbmV3IEttYXAoZWxlbWVudCwganNvbik7XHJcblx0XHRcdGttYXAuc3RhcnROb3coKTtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNpdGUuc3RhcnQoICgpID0+IHtcclxuXHRcdGluc3RhbGwoKTtcclxuXHR9KTtcclxuXHJcblx0c2l0ZS5tZXNzYWdlTGlzdGVuZXIoKG1zZywgZGF0YSkgPT4ge1xyXG5cdFx0aWYobXNnID09PSAnY2wtcXVpei1hZnRlci1pbnN0YWxsZWQnKSB7XHJcblx0XHRcdGluc3RhbGwoKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=