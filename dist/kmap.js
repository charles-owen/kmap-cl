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
/******/ 	var hotCurrentHash = "d28c04305877383ba13d";
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

module.exports = {"name":"kmap","version":"1.0.1","description":"Karnagh Map Editor","main":"dist/kmap.js","module":"index.js","private":false,"scripts":{"build:dev":"npx webpack --config webpack.dev.js","build:prod":"npx webpack --config webpack.prod.js","build:both":"npm run build:dev && npm run build:prod","test":"karma start karma.conf.js","serve":"webpack-dev-server  --config webpack.dev.js --open","build:docs":"documentation build src/Kmap/**/*.js --sort-order alpha -f html -o doc/js"},"keywords":["Education","Circuits","Computer Architecture","Karnagh Maps"],"author":"Charles B. Owen","license":"MIT","devDependencies":{"@babel/core":"^7.2.2","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.3","@babel/runtime":"^7.2.0","babel-loader":"^8.0.5","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^4.6.0","css-loader":"^0.28.11","file-loader":"^1.1.11","hoek":"^6.1.2","html-webpack-include-assets-plugin":"^1.0.6","html-webpack-plugin":"^3.2.0","jasmine-core":"^3.3.0","karma":"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-jasmine":"^2.0.1","karma-jasmine-html-reporter":"^1.4.0","karma-sourcemap-loader":"^0.3.7","karma-webpack-with-fast-source-maps":"^1.10.2","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^4.0.3","resolve-url-loader":"^2.3.1","sass-loader":"^7.1.0","style-loader":"^0.21.0","uglifyjs-webpack-plugin":"^1.3.0","webpack":"^4.28.4","webpack-cli":"^3.2.1","webpack-dev-server":"^3.1.14","webpack-merge":"^4.2.1"},"dependencies":{"classlist-polyfill":"^1.2.0"}};

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
      console.log(main);
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
    console.log(main);
    var canvas = main.work.map.get_canvas();
    console.log(canvas);
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
    console.log(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9rbWFwLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2ttYXAvX2ttYXAuc2NzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9Hcm91cHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9LbWFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvTWFpbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL01hbnVhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL01hcC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL01lc3NhZ2VEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9PcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvU29sdXRpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9VdGlsaXR5L1JlYWR5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvV29yay5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9Mb2dpYy9FeHByZXNzaW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0xvZ2ljL01pbnRlcm1zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0xvZ2ljL1F1aW5lTWNDbHVza2V5U29sdmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0xvZ2ljL3FtYy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9pbWcveC5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMva21hcC5zY3NzPzA0ZGEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvcG9seWZpbGxzL2FsbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9wb2x5ZmlsbHMvcG9pbnRlcl9ldmVudHNfcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2ttYXAvX2ttYXAuc2Nzcz9mNjM5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9rbWFwL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9rbWFwL2pzL0ttYXBGYWN0b3J5LmpzIl0sIm5hbWVzIjpbIkdlbmVyYXRvciIsIm1haW4iLCJlbGVtZW50IiwibWludGVybXNTcGFuIiwib3B0aW9ucyIsImluaXRpYWxpemUiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImgzIiwiaW5uZXJUZXh0IiwiZml4ZWQiLCJmb3JtIiwicCIsImNyZWF0ZVRleHROb2RlIiwic2l6ZSIsInNlbGVjdCIsIm9wdGlvbnMxIiwib3B0aW9uczIiLCJzIiwiZ2VuRG9udENhcmUiLCJnZW5Eb250Q2FyZU9wdGlvbiIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsIiwidmFsdWUiLCJuZXdTaXplIiwicGFyc2VJbnQiLCJtYXRjaCIsImJ1dHRvbiIsImdlbmVyYXRlIiwicmVmcmVzaCIsIm1pbnRlcm1zIiwiZG9udGNhcmUiLCJsZW5ndGgiLCJsaXN0IiwibGlzdF9kb250Y2FyZSIsIkdyb3VwIiwiZ3JvdXBzIiwic2VsZWN0ZWQiLCJjb2xvciIsImxzdCIsImZpcnN0IiwiaSIsInNwYW4iLCJhIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJ3aWQiLCJoaXQiLCJpbnNldERlcHRoIiwiaW5zZXQiLCJzcGFjaW5nIiwiY29scyIsInJvd3MiLCJtYXBSIiwibWFwQyIsIm1heCIsImNudCIsImRyYXdHcm91cCIsImMxIiwicjEiLCJjMiIsInIyIiwidCIsImMzIiwicjMiLCJjNCIsInI0Iiwid2lkNCIsImhpdDQiLCJjNSIsInI1Iiwid2lkOCIsImhpdDgiLCJ4MSIsInkxIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiYXJjVG8iLCJzdHJva2UiLCJHcm91cHMiLCJzZWwiLCJ0aGF0IiwiY29sb3JOIiwiY29uc29sZSIsImxvZyIsIndvcmsiLCJtYXAiLCJzdHJpY3QiLCJhbmQxIiwiTWF0aCIsInBvdyIsImFuZDIiLCJvciIsImJpdHMiLCJ2YWxpZCIsImh0bWwiLCJkbGciLCJNZXNzYWdlRGlhbG9nIiwib3BlbiIsIm9rIiwiaiIsImFkZF9ncm91cCIsImRyYXdHcm91cHMiLCJjbGVhciIsImdyb3VwIiwiY29sb3JzIiwicHVzaCIsImNhbnZhcyIsImdldF9jYW52YXMiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiY291bnRlciIsInNwbGljZSIsIkttYXAiLCJQQUNLQUdFIiwicmVxdWlyZSIsInZlcnNpb24iLCJPcHRpb25zIiwibWFpbnMiLCJzdGFydCIsIlJlYWR5IiwiZ28iLCJzdGFydE5vdyIsIkVsZW1lbnQiLCJNYWluIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwia21hcCIsIk1pbnRlcm1zIiwiZ2VuZXJhdG9yIiwic29sdXRpb24iLCJtYW51YWwiLCJNYW51YWwiLCJXb3JrIiwiU29sdXRpb24iLCJzZXQiLCJkY01heCIsImdlbmVyYXRlX2JvdW5kZWQiLCJuZXdNaW50ZXJtcyIsInNldF9mcm9tIiwic2xpY2UiLCJyZW5kZXIiLCJsYWJlbHMiLCJtYW51YWxNaW50ZXJtcyIsIm1hbnVhbERvbnRDYXJlcyIsIm1hbnVhbFZhcmlhYmxlcyIsImxlZnQiLCJsYWJlbCIsInNldEF0dHJpYnV0ZSIsInRha2UiLCJyaWdodCIsIm1pbnRlcm1zbGlzdCIsInBhcnNlIiwiZG9udGNhcmVsaXN0IiwicmVwbGFjZSIsInNwbGl0IiwiaW5wdXQiLCJyZU0iLCJyZSIsIml0ZW1zIiwicmV0IiwiZm9yRWFjaCIsIml0ZW0iLCJNYXAiLCJ0b3BMZWZ0IiwiYm90UmlnaHQiLCJ0YWJsZSIsInJlc3QiLCJjb2xoZWFkcyIsIkEiLCJCIiwiQyIsIkQiLCJ0ciIsInIiLCJjIiwidGQiLCJtYWtlX2NlbGwiLCJzZXRUaW1lb3V0Iiwic2V0X2NhbnZhcyIsIndpbmRvdyIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGwiLCJvZmZzZXRMZWZ0IiwidG9wIiwib2Zmc2V0VG9wIiwiYnIiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIm1pbnRlcm0iLCJ0b19taW50ZXJtIiwiYml0IiwibGFiZWxNaW50ZXJtcyIsImNvbnRhaW5zIiwibiIsImluZGV4T2YiLCJpc19zZWxlY3RlZCIsInNvcnQiLCJiIiwidGRzIiwidGl0bGUiLCJib2R5IiwibWFzayIsInRiIiwiZGIiLCJjb250cm9scyIsIk9iamVjdCIsInN1YnN0ciIsIkpTT04iLCJhdG9iIiwidmVyYm9zZSIsIm1hcEhlYWRpbmciLCJyZXN1bHRTZWwiLCJzdWNjZXNzIiwiZXhwcmVzc2lvblNlbCIsInNvbHZlIiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwiZXhwcmVzc2lvbklucHV0IiwicmVzdWx0IiwiYXBwZW5kIiwiY2hlY2siLCJtdCIsImV4cHJlc3Npb24iLCJFeHByZXNzaW9uIiwic2V0X3NpemUiLCJzdHIiLCJtc2ciLCJmYWlsIiwicW0iLCJRdWluZU1jQ2x1c2tleVNvbHZlciIsImluaXQiLCJ1bmRlZmluZWQiLCJjb21wdXRlIiwicW1FeHByZXNzaW9uIiwibSIsImlubGlzdCIsImFzX2dvb2RfYXMiLCJtaW5pbXVtRXhwcmVzc2lvbiIsInRlcm1zIiwiZXhwIiwidGVybSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiY2hlY2tCb3giLCJjaGVja2VkIiwiZGlzcGxheSIsInN6IiwidGVybXNfaW5pdCIsIm90aGVyIiwibnVtX3Byb2R1Y3RzIiwibnVtX3Rlcm1zIiwiZ2VuZXJhdGVfbWludGVybXMiLCJ0ZXJtc19zZXQiLCJyZXN1bHRTIiwic29wIiwicHJvZCIsInJlc3VsdFAiLCJub3QiLCJsZXgiLCJ0b2tlbiIsImNoIiwiZXJyb3IiLCJhZHZhbmNlIiwiZ2V0X3Rlcm0iLCJleHByZXNzaW9uTG9jIiwibGl0ZXJhbCIsInRvVXBwZXJDYXNlIiwiY2hhckF0IiwibWF5YmUiLCJvbmVDaGFuY2UiLCJkY0NoYW5jZSIsIm51bSIsInJuZCIsInJhbmRvbSIsIm9uZU1pbiIsIm9uZU1heCIsImRjTWluIiwiYXJndW1lbnRzIiwiZXF1YWwiLCJvdGhlck1pbnRlcm1zIiwiTG9naWMiLCJ3aXRoQnJlYWsiLCJjciIsIlF1aW5lTWNDbHVza2V5RGF0YUN0cmwiLCJudW1WYXJzIiwibm9PZlZhcnMiLCJhbGxvd0RvbnRDYXJlIiwic2V0RnVuY0RhdGEiLCJtaW5pbWFsVGVybVByaW1zIiwidGVybVN0cmluZyIsInByaW1UZXJtIiwiaW1wIiwiaW1wbGljYW50Iiwib25lIiwibmVlZGVkIiwiYml0TWFzayIsInYiLCJ2MSIsIlBldHJpY2tNZXRob2QiLCJwcm9ibGVtIiwibWF4UHJvYmxlbVNpemUiLCJ0ZXN0IiwiYW5kQXJyYXkiLCJBcnJheSIsIm9yQXJyYXkiLCJtb25vbUEiLCJtb25vbUIiLCJlcSIsInByaW50RXFuQXJyYXlGYW5jeSIsImxvb3BDb3VudGVyIiwibmV3QW5kQXJyYXkiLCJvclRlcm1BIiwib3JUZXJtQiIsIm5ld09yQXJyYXkiLCJtb25vbTEiLCJtb25vbTIiLCJyZXN1bHRpbmdNb25vbSIsIm9yVGVybSIsIm5ld09yVGVybSIsInNpbXBsaWZ5T3JUZXJtIiwicHJvYmxlbVNpemUiLCJlcW5BcnJheVByb2JsZW1TaXplIiwibWFya2VkRm9yRGVsZXRpb24iLCJrZWVwQSIsIm92ZXJsYXBCb3ZlckEiLCJsZW5ndGhBIiwib3ZlcmxhcEFvdmVyQiIsImxlbmd0aEIiLCJtb25vbSIsImsiLCJtb25vbUNvdW50ZXIiLCJwcmludEVxbkFycmF5IiwiUHJpbVRlcm0iLCJjb2xvcmVkVGVybVN0cmluZyIsInVzZWQiLCJuZWVkZWRCeVZhciIsIkltcGxpY2FudCIsImlzUHJpbSIsImlzT25seURvbnRDYXJlIiwiSW1wbGljYW50R3JvdXAiLCJvcmRlciIsIlByaW1UZXJtVGFibGUiLCJvcmQiLCJlc3NlbnRpYWxQcmltVGVybXMiLCJyZW1haW5pbmdWYXJzIiwicmVtYWluaW5nUHJpbVRlcm1zIiwic3VwZXJzZWRlZFByaW1UZXJtcyIsImhzdlRvUmdiIiwiaCIsImciLCJmbG9vciIsImYiLCJxIiwiZnVuY2RhdGEiLCJwcmltVGVybXMiLCJpbXBsaWNhbnRHcm91cHMiLCJtaW5pbWFsVGVybSIsImNvbG9yZWRNaW5pbWFsVGVybSIsInByaW1UZXJtVGFibGVzIiwicGV0cmlja1NvbHZlciIsInBldHJpY2tUZXJtUHJpbXMiLCJubyIsIm5vT2ZGdW5jRGF0YSIsImFjdGl2YXRlZCIsImJpdENvdW50IiwibGFzdElnIiwiY29udGludWVMb29wIiwiaWciLCJpbXBsIiwiaW1wMSIsImltcDIiLCJmb3VuZCIsInhvciIsImkxIiwiaTIiLCJmb3VuZE1hdGNoIiwiZXhpc3QiLCJpc1RoZVNhbWUiLCJjb250YWluc09uZSIsImFsbEZ1bmNQcmltVGVybSIsImtrIiwidGhpc1ZhbCIsIm1pblRlcm0iLCJjb2xvclN0ciIsInJlbWFpbmluZyIsInByaW1UYWJsZUxvb3AiLCJwcmltVGFibGVGb3VuZCIsImN5Y2xpY0NvdmVyaW5nRm91bmQiLCJwcmltVGVybVRhYmxlIiwicHJldlRhYmxlIiwic3VwZXJzZWRlZCIsImltcEEiLCJ2YXJDb3ZlciIsImNvdW50QSIsImwiLCJpbXBCIiwiY291bnRCIiwiY291bnRCSW5SZW1haW5pbmciLCJjdXJyZW50VGVybXMiLCJ0b0JlUmVtb3ZlZCIsImNvdW50IiwiaWkiLCJ0bXBSZW1haW5pbmciLCJlIiwiZWUiLCJyZW1haW5pbmdDb3VudCIsInNvbHV0aW9uRm91bmQiLCJzb2x1dGlvbnMiLCJiZXN0U29sdXRpb24iLCJiZXN0Q291bnQiLCJiZXN0VmFyQ291bnQiLCJmb3VuZEJlc3QiLCJiZXN0VmFyQ291bnROZXciLCJiZXN0IiwiYWRkUHJpbVRlcm0iLCJmaXJzdEwiLCJRdWluZU1jQ2x1c2tleSIsInBhcmVudERpdklkIiwiY29sdW1ucyIsImxhbmd1YWdlIiwibXlEaXYiLCJkaXZJZCIsImRhdGEiLCJ0dGFibGUiLCJtaW5FeHAiLCJpbXBsaSIsInByaW1DaGFydCIsInByaW1DaGFydFJlZHVjZWQiLCJleHRyYWN0ZWRQcmltcyIsImV4dHJhY3RlZE1QcmltcyIsInBldHJpY2tzTSIsInBhcmVudCIsImdldEVsZW1lbnRCeUlkIiwidXBkYXRlIiwic2V0Tm9PZlZhcnMiLCJ2YXJzIiwiZ2VuUmFuZG9tIiwiYWxsb3dEb250Q2FyZXMiLCJ0eXBlIiwiZHJhd0ltcGxpY2FudEdyb3VwIiwicHJpbUZsYWciLCJkcmF3UGV0cmlja1ZhcnMiLCJteVRhYmxlIiwibXlSb3ciLCJjZWxsMWgiLCJteUNlbGwiLCJjZWxsSW1waCIsInRvU3RyaW5nIiwiaU1heCIsImNlbGwxIiwiY2VsbDFTdHIiLCJyZXMiLCJjdXJyZW50Qml0IiwiY2VsbExhc3QiLCJjZWxsVXNlZCIsInBWYXJzIiwib2xkSW5uZXJEaXYiLCJteUlubmVyRGl2IiwibXlUcnV0aFRhYmxlRGl2Iiwib25tb3VzZWRvd24iLCJteUNlbGxNb3VzZURvd24iLCJteUltcGxpY2FudERpdiIsInJlc3VsdERpdiIsImVzc1BUZXJtc0RpdiIsImVzc1BUZXJtc1N0ciIsImpqIiwicGV0cmlja0RpdiIsInBldHJpY2tJbm5lckRpdiIsInBldHJpY2tFc3NUZXJtc0RpdiIsInBldHJpY2tFc3NUZXJtc1N0ciIsInRlcm1EaXYiLCJ0YXJnIiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsIm5vZGVUeXBlIiwicGFyZW50Tm9kZSIsIlBvaW50ZXJFdmVudHNQb2x5ZmlsbCIsInNlbGVjdG9yIiwibW91c2VFdmVudHMiLCJ1c2VQb2x5ZmlsbElmIiwibmF2aWdhdG9yIiwiYXBwTmFtZSIsImFnZW50IiwidXNlckFnZW50IiwicGFyc2VGbG9hdCIsIlJlZ0V4cCIsIiQxIiwib2JqIiwiJCIsImVhY2giLCJyZWdpc3Rlcl9tb3VzZV9ldmVudHMiLCJzaW5nbGV0b24iLCJvbiIsImpvaW4iLCJjc3MiLCJvcmlnRGlzcGxheUF0dHJpYnV0ZSIsInVuZGVybmVhdGhFbGVtIiwiZWxlbWVudEZyb21Qb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwidHJpZ2dlciIsIkttYXBGYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsInNpdGUiLCJpbnN0YWxsIiwianNvbiIsInRleHRDb250ZW50IiwibWVzc2FnZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDhCQUE4QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7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QUNQO0FBQ0QsR0FKRDtBQUtBLENBdkJELEMiLCJmaWxlIjoia21hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkttYXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiS21hcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiZDI4YzA0MzA1ODc3MzgzYmExM2RcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdClcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiS21hcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3ZlbmRvci9jbC9rbWFwL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYua21hcC1jbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDFlbSBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG59XFxuXFxuZGl2LmttYXAtY2wgaDMge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAxZW0gMCAwLjVlbSAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xcbn1cXG5cXG5kaXYua21hcC1jbCBidXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4xNWVtIDFlbTtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIG1pbi13aWR0aDogNmVtO1xcbn1cXG5cXG5kaXYua21hcC1jbCB0ZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMykgYnV0dG9uIHtcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHBhZGRpbmc6IDFlbSAwIDAgMDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICB3aWR0aDogMTJlbTtcXG4gIG1heC13aWR0aDogMTJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIGJ1dHRvbiB7XFxuICB3aWR0aDogOWVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCAubGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHRvcDogNGVtO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIC5saXN0IC5ncm91cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMuMmVtO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG1hcmdpbjogMC4yNWVtIDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIC5saXN0IC5ncm91cCBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcmlnaHQ6IDAuMjVlbTtcXG4gIGJvdHRvbTogMC4yNWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIC5saXN0IC5ncm91cCBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy94LnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwYWRkaW5nOiAxZW0gMmVtIDFlbSAxZW07XFxuICBtaW4td2lkdGg6IDI1ZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpudGgtY2hpbGQoMikgY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgaW5wdXQge1xcbiAgd2lkdGg6IDNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGUua21hcC1jbCB0ciB7XFxuICBib3JkZXI6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRoLFxcbnRhYmxlLmttYXAtY2wgdGQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRyIHRoIHtcXG4gIGJvcmRlcjogMDtcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0ZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdGQgc3Bhbi5taW50ZXJtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC4xNWVtO1xcbiAgbGVmdDogMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdGQua21hcC1jbC1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGgge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpmaXJzdC1jaGlsZCB0aDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCAua21hcC1jbC1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAxLjVlbTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCAua21hcC1jbC1yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEuNWVtO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQgLmttYXAtY2wtbGluZSB7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMmVtKSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMmVtKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJlbSkgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJlbSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpub3QoOmZpcnN0LWNoaWxkKSB0aCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuZGl2LmttYXAtY2wtZ2VuZXJhdG9yIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5kaXYua21hcC1jbC1nZW5lcmF0b3IgZm9ybSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5rbWFwLWNsLWdlbmVyYXRvciBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMC43NWVtIDA7XFxuICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuZGl2LmttYXAtY2wtZ2VuZXJhdG9yIHAgc3BhbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy94LnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uIGJ1dHRvbiB7XFxuICB3aWR0aDogOGVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBidXR0b24ua21hcC1jbC1zb2x2ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uID4gZGl2IHAge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmttYXAtY2wtbWFudWFsIGZvcm0ge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtbWFudWFsIGZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtbWFudWFsIGZvcm0gPiBkaXYge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmttYXAtY2wtbWFudWFsIGZvcm0gcCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1rbWFwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8vIFRoZSBwdWJsaWMtcGF0aCBtb2R1bGUgbXVzdCBiZSBpbXBvcnRlZCBmaXJzdCFcclxuLy8gaW1wb3J0ICcuL3NyYy9wdWJsaWMtcGF0aC5qcyc7XHJcbi8vXHJcbmltcG9ydCAnLi9zcmMvcG9seWZpbGxzL2FsbCc7XHJcbmltcG9ydCAnLi9zcmMva21hcC5zY3NzJztcclxuXHJcbmltcG9ydCB7S21hcH0gZnJvbSAnLi9zcmMvS21hcC9LbWFwJztcclxuZXhwb3J0IHtLbWFwIGFzIGRlZmF1bHR9O1xyXG4iLCJpbXBvcnQge01pbnRlcm1zfSBmcm9tIFwiLi4vTG9naWMvTWludGVybXNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG9iamVjdCBtYW5hZ2VzIHRoZSBwcmFjdGljZSBnZW5lcmF0b3Igc2VjdGlvbi5cclxuICogQHBhcmFtIG1haW5cclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR2VuZXJhdG9yID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG5cclxuXHRsZXQgbWludGVybXNTcGFuO1xyXG5cclxuXHRjb25zdCBvcHRpb25zID0gbWFpbi5vcHRpb25zO1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuY2xhc3NMaXN0LmFkZCgna21hcC1jbC1nZW5lcmF0b3InKTtcclxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0XHQvLyBIZWFkaW5nXHJcblx0XHRjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblx0XHRoMy5pbm5lclRleHQgPSBvcHRpb25zLmZpeGVkID8gJ01pbnRlcm1zJyA6ICdNaW50ZXJtIEdlbmVyYXRvcic7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdHAuaW5uZXJUZXh0ID0gJ1NpemU6ICc7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5maXhlZCkge1xyXG5cdFx0XHRwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnICsgb3B0aW9ucy5zaXplICsgJyBNaW50ZXJtczogJykpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vXHJcblx0XHRcdC8vIFRoZSBzaXplIHNlbGVjdCBjb250cm9sXHJcblx0XHRcdC8vXHJcblx0XHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cdFx0XHRwLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcblxyXG5cdFx0XHRsZXQgb3B0aW9uczEgPSAnJztcclxuXHRcdFx0bGV0IG9wdGlvbnMyID0gJyc7XHJcblx0XHRcdGZvcihsZXQgcz0yOyBzPD00OyBzKyspIHtcclxuXHRcdFx0XHRpZihzID09PSArbWFpbi5vcHRpb25zLnNpemUpIHtcclxuXHRcdFx0XHRcdGlmKG1haW4ub3B0aW9ucy5nZW5Eb250Q2FyZSkge1xyXG5cdFx0XHRcdFx0XHRvcHRpb25zMSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ1wiPicgKyBzICsgJzwvb3B0aW9uPic7XHJcblx0XHRcdFx0XHRcdGlmKG1haW4ub3B0aW9ucy5nZW5Eb250Q2FyZU9wdGlvbikge1xyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHMgKyAnZFwiIHNlbGVjdGVkPicgKyBzICsgXCIgdy9kb24ndCBjYXJlczwvb3B0aW9uPlwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRvcHRpb25zMSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ1wiIHNlbGVjdGVkPicgKyBzICsgJzwvb3B0aW9uPic7XHJcblx0XHRcdFx0XHRcdGlmKG1haW4ub3B0aW9ucy5nZW5Eb250Q2FyZU9wdGlvbikge1xyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHMgKyAnZFwiPicgKyBzICsgXCIgdy9kb24ndCBjYXJlczwvb3B0aW9uPlwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvcHRpb25zMSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ1wiPicgKyBzICsgJzwvb3B0aW9uPic7XHJcblx0XHRcdFx0XHRpZihtYWluLm9wdGlvbnMuZ2VuRG9udENhcmVPcHRpb24pIHtcclxuXHRcdFx0XHRcdFx0b3B0aW9uczIgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdkXCI+JyArIHMgKyBcIiA8c3Bhbj53L2Rvbid0IGNhcmVzPC9zcGFuPjwvb3B0aW9uPlwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2VsZWN0LmlubmVySFRNTCA9IG9wdGlvbnMxICsgb3B0aW9uczI7XHJcblxyXG5cdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRsZXQgdmFsID0gc2VsZWN0LnZhbHVlO1xyXG5cdFx0XHRcdHZhciBuZXdTaXplID0gcGFyc2VJbnQodmFsKTtcclxuXHRcdFx0XHRtYWluLm9wdGlvbnMuZ2VuRG9udENhcmUgPSB2YWwubWF0Y2goL2QkLykgIT09IG51bGw7XHJcblx0XHRcdFx0bWFpbi5uZXdTaXplKG5ld1NpemUpO1xyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0Ly9cclxuXHRcdFx0Ly8gVGhlIEdlbmVyYXRlIGJ1dHRvblxyXG5cdFx0XHQvL1xyXG5cdFx0XHRwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHRcdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdGJ1dHRvbi5pbm5lclRleHQgPSAnR2VuZXJhdGUnO1xyXG5cdFx0XHRwLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG5cdFx0XHRwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRtYWluLmdlbmVyYXRlKCk7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0bWludGVybXNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0cC5hcHBlbmRDaGlsZChtaW50ZXJtc1NwYW4pO1xyXG5cclxuXHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICBcdGlmKG1haW4ubWludGVybXMuZG9udGNhcmUubGVuZ3RoID4gMCkge1xyXG5cdFx0ICAgIG1pbnRlcm1zU3Bhbi5pbm5lckhUTUwgPSBtYWluLm1pbnRlcm1zLmxpc3QodHJ1ZSkgK1xyXG5cdFx0ICAgICBcdFwiPGJyPlg9XCIgKyBtYWluLm1pbnRlcm1zLmxpc3RfZG9udGNhcmUodHJ1ZSk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgbWludGVybXNTcGFuLmlubmVySFRNTCA9IG1haW4ubWludGVybXMubGlzdCh0cnVlKTtcclxuXHQgICAgfVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuXHQvLyAvKipcclxuXHQvLyAgKiBHZW5lcmF0ZSBhIG5ldyBzZXQgb2YgbWludGVybXMgd2l0aCBvcHRpb25hbCBkb24ndCBjYXJlc1xyXG5cdC8vICAqL1xyXG4gICAgLy8gdGhpcy5nZW5lcmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdC8vICAgICB0aGlzLm1pbnRlcm1zLnNpemUgPSBtYWluLm9wdGlvbnMuc2l6ZTtcclxuXHQvLyAgICAgaWYobWFpbi5vcHRpb25zLmdlbkRvbnRDYXJlKSB7XHJcblx0Ly8gXHQgICAgdmFyIGRjTWF4ID0gODtcclxuXHQvLyBcdCAgICBzd2l0Y2gobWFpbi5vcHRpb25zLnNpemUpIHtcclxuXHQvLyBcdFx0ICAgIGNhc2UgMjpcclxuXHQvLyBcdFx0XHQgICAgZGNNYXggPSAyO1xyXG5cdC8vIFx0XHRcdCAgICBicmVhaztcclxuXHQvL1xyXG5cdC8vIFx0XHQgICAgY2FzZSAzOlxyXG5cdC8vIFx0XHRcdCAgICBkY01heCA9IDQ7XHJcblx0Ly8gXHRcdFx0ICAgIGJyZWFrO1xyXG5cdC8vIFx0ICAgIH1cclxuXHQvLyBcdCAgICB0aGlzLm1pbnRlcm1zLmdlbmVyYXRlX2JvdW5kZWQoMC41LCAxLCBNYXRoLnBvdygyLCBtYWluLm9wdGlvbnMuc2l6ZSktMSxcclxuXHQvLyBcdFx0ICAgIDAuMiwgMSwgZGNNYXgpO1xyXG5cdC8vXHJcblx0Ly8gXHQgICAgbWludGVybXNTcGFuLmlubmVySFRNTCA9IHRoaXMubWludGVybXMubGlzdCh0cnVlKSArXHJcblx0Ly8gXHRcdCAgICBcIjxicj5YPVwiICsgdGhpcy5taW50ZXJtcy5saXN0X2RvbnRjYXJlKHRydWUpO1xyXG5cdC8vXHJcblx0Ly8gXHQgICAgbWFpbi5uZXdNaW50ZXJtcyh0aGlzLm1pbnRlcm1zKTtcclxuXHQvLyAgICAgfSBlbHNlIHtcclxuXHQvLyBcdCAgICB0aGlzLm1pbnRlcm1zLmdlbmVyYXRlX2JvdW5kZWQoMC41LCAxLCBNYXRoLnBvdygyLCBtYWluLm9wdGlvbnMuc2l6ZSktMSk7XHJcblx0Ly9cclxuXHQvLyBcdCAgICBtaW50ZXJtc1NwYW4uaW5uZXJIVE1MID0gdGhpcy5taW50ZXJtcy5saXN0KHRydWUpO1xyXG5cdC8vIFx0ICAgIG1haW4ubmV3TWludGVybXModGhpcy5taW50ZXJtcyk7XHJcblx0Ly8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG59XHJcblxyXG4iLCIvKipcclxuICogQSBzaW5nbGUgZ3JvdXBcclxuICogQHBhcmFtIGdyb3VwcyBLbWFwLkdyb3VwIG9iamVjdFxyXG4gKiBAcGFyYW0gbGlzdCBMaXN0IHRvIGFkZCB0aGlzIGl0ZW0gdG9cclxuICogQHBhcmFtIHNlbGVjdGVkIE1pbnRlcm1zIHRoYXQgYXJlIHNlbGVjdGVkXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciB0byBkcmF3IGl0ZW1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR3JvdXAgPSBmdW5jdGlvbihncm91cHMsIGxpc3QsIHNlbGVjdGVkLCBjb2xvcikge1xyXG4gICAgdGhpcy5ncm91cHMgPSBncm91cHM7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICBpZihsaXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsc3QgPSAnJztcclxuICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKCFmaXJzdCkge1xyXG4gICAgICAgICAgICBsc3QgKz0gJywnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpID09PSA4KSB7XHJcbiAgICAgICAgICAgIGxzdCArPSAnPGJyLz4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbHN0ICs9IHNlbGVjdGVkW2ldO1xyXG4gICAgfVxyXG5cclxuXHQvLyB2YXIgZGl2ID0gJCgnPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArIGxzdCArICc8L2Rpdj4nKTtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGxzdDtcclxuXHJcblx0Ly8gdmFyIHNwYW4gPSAkKCc8c3Bhbj48L3NwYW4+Jyk7XHJcblx0Ly8gZGl2LmFwcGVuZChzcGFuKTtcclxuXHRsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdC8vIHZhciBhID0gJCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT4nKTtcclxuXHQvLyBzcGFuLmFwcGVuZChhKTtcclxuXHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRzcGFuLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgXHRsaXN0LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICBcdGdyb3Vwcy5yZW1vdmUodGhpcyk7XHJcbiAgICB9KTtcclxuXHJcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAvLyBkaXYuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBjb2xvcik7XHJcbn1cclxuXHJcbkdyb3VwLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCB3aWQsIGhpdCwgaW5zZXREZXB0aCkge1xyXG4gICAgbGV0IGluc2V0ID0gMTU7XHJcbiAgICBsZXQgc3BhY2luZyA9IDEwO1xyXG5cclxuICAgIGxldCBjb2xzLCByb3dzLCBtYXBSLCBtYXBDLCBtYXg7XHJcbiAgICBzd2l0Y2godGhpcy5ncm91cHMubWFpbi5vcHRpb25zLnNpemUpIHtcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGNvbHMgPSAyO1xyXG4gICAgICAgICAgICByb3dzID0gMjtcclxuICAgICAgICAgICAgbWFwUiA9IFswLCAxLCAwLCAxXTtcclxuICAgICAgICAgICAgbWFwQyA9IFswLCAwLCAxLCAxXTtcclxuICAgICAgICAgICAgbWF4ID0gNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgY29scyA9IDQ7XHJcbiAgICAgICAgICAgIHJvd3MgPSAyO1xyXG4gICAgICAgICAgICBtYXBSID0gWzAsIDEsIDAsIDEsIDAsIDEsIDAsIDFdO1xyXG4gICAgICAgICAgICBtYXBDID0gWzAsIDAsIDEsIDEsIDMsIDMsIDIsIDJdO1xyXG4gICAgICAgICAgICBtYXggPSA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBjb2xzID0gNDtcclxuICAgICAgICAgICAgcm93cyA9IDQ7XHJcbiAgICAgICAgICAgIG1hcFIgPSBbMCwgMSwgMywgMiwgMCwgMSwgMywgMiwgMCwgMSwgMywgMiwgMCwgMSwgMywgMl07XHJcbiAgICAgICAgICAgIG1hcEMgPSBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMywgMywgMywgMywgMiwgMiwgMiwgMl07XHJcbiAgICAgICAgICAgIG1heCA9IDE2O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY250ID0gdGhpcy5zZWxlY3RlZC5sZW5ndGg7XHJcbiAgICBpZihjbnQgPT09IG1heCkge1xyXG4gICAgICAgIC8vIFdlIGFyZSB3cmFwcGluZyB0aGUgd2hvbGUgdGhpbmdcclxuICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIDAsIDAsIHdpZCwgaGl0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY250ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIGMxID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgcjEgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgfSBlbHNlIGlmKGNudCA9PSAyKSB7XHJcbiAgICAgICAgdmFyIGMxID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgcjEgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciBjMiA9IG1hcENbdGhpcy5zZWxlY3RlZFsxXV07XHJcbiAgICAgICAgdmFyIHIyID0gbWFwUlt0aGlzLnNlbGVjdGVkWzFdXTtcclxuXHJcbiAgICAgICAgaWYocjEgPT0gcjIpIHtcclxuICAgICAgICAgICAgLy8gSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICBpZihjMiA8IGMxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGMxOyBjMSA9IGMyOyBjMiA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKChjMiAtIGMxKSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhZGphY2VudCFcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzIgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkICogMiAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoYzEgLSAxKSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgKiAyIC8gY29scywgaGl0IC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAqIDIgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsXHJcbiAgICAgICAgICAgIGlmKHIyIDwgcjEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gcjE7IHIxID0gcjI7IHIyID0gdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoKHIyIC0gcjEpID4gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IGFkamFjZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjIgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAqIDIgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCAocjEtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAqIDIgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkIC8gY29scywgaGl0ICogMiAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZihjbnQgPT0gNCkge1xyXG4gICAgICAgIHZhciBjMSA9IG1hcENbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIHIxID0gbWFwUlt0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgYzIgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciByMiA9IG1hcFJbdGhpcy5zZWxlY3RlZFsxXV07XHJcbiAgICAgICAgdmFyIGMzID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzJdXTtcclxuICAgICAgICB2YXIgcjMgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMl1dO1xyXG4gICAgICAgIHZhciBjNCA9IG1hcENbdGhpcy5zZWxlY3RlZFszXV07XHJcbiAgICAgICAgdmFyIHI0ID0gbWFwUlt0aGlzLnNlbGVjdGVkWzNdXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBcmUgYWxsIGluIHNhbWUgcm93P1xyXG4gICAgICAgIGlmKHIxID09IHIyICYmIHIyID09IHIzICYmIHIzID09IHI0KSB7XHJcbiAgICAgICAgICAgIC8vIFNpemUgNCBjb3ZlciBpbiB0aGUgc2FtZSByb3dcclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgIHdpZCAqIDQgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICB9IGVsc2UgaWYoYzEgPT0gYzIgJiYgYzIgPT0gYzMgJiYgYzMgPT0gYzQpIHtcclxuICAgICAgICAgICAgLy8gU2l6ZSA0IGNvdmVyIGluIHRoZSBzYW1lIGNvbHVtblxyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgd2lkIC8gY29scywgaGl0ICogNCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgbXVzdCBiZSBzcXVhcmVcclxuICAgICAgICAgICAgdmFyIHdpZDQgPSB3aWQgKiAyIC8gY29scztcclxuICAgICAgICAgICAgdmFyIGhpdDQgPSBoaXQgKiAyIC8gcm93cztcclxuXHJcbiAgICAgICAgICAgIGlmKGMxID09IDAgJiYgYzIgPT0gMCAmJiBjMyA9PSAzICYmIGM0ID09IDMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBsZWZ0L3JpZ2h0IHNpZGUgc3BsaXRcclxuICAgICAgICAgICAgICAgIGlmKHIxID09IDAgJiYgcjIgPT0gMyAmJiByMyA9PSAwICYmIHI0ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3VyIGNvcm5lciBzcGxpdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKC0xKSAqIHdpZCAvIGNvbHMsICgtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgtMSkgKiB3aWQgLyBjb2xzLCAoMykgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgzKSAqIHdpZCAvIGNvbHMsICgtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgzKSAqIHdpZCAvIGNvbHMsICgzKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyMSA+IHIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcjE7IHIxID0gcjI7IHIyID0gdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKC0xKSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoMykgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocjEgPT0gMCAmJiByMiA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjMSA+IGMzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBjMTsgYzEgPSBjMzsgYzMgPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHRvcC1ib3R0b20gc3BsaXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCAoLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCAoMykgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2ltcGxlIHNxdWFyZSFcclxuICAgICAgICAgICAgICAgIGlmKGMxID4gYzMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGMxOyBjMSA9IGMzOyBjMyA9IHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihyMSA+IHIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSByMTsgcjEgPSByMjsgcjIgPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihjbnQgPT0gOCkge1xyXG4gICAgICAgIHZhciBjMSA9IG1hcENbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIHIxID0gbWFwUlt0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgYzIgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciByMiA9IG1hcFJbdGhpcy5zZWxlY3RlZFsxXV07XHJcbiAgICAgICAgdmFyIGMzID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzJdXTtcclxuICAgICAgICB2YXIgcjMgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMl1dO1xyXG4gICAgICAgIHZhciBjNCA9IG1hcENbdGhpcy5zZWxlY3RlZFszXV07XHJcbiAgICAgICAgdmFyIHI0ID0gbWFwUlt0aGlzLnNlbGVjdGVkWzNdXTtcclxuICAgICAgICB2YXIgYzUgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbNF1dO1xyXG4gICAgICAgIHZhciByNSA9IG1hcFJbdGhpcy5zZWxlY3RlZFs0XV07XHJcblxyXG4gICAgICAgIGlmKGMxID09IGMyICYmIGMyID09IGMzICYmIGMzID09IGM0KSB7XHJcbiAgICAgICAgICAgIHZhciB3aWQ4ID0gd2lkICogMiAvIGNvbHM7XHJcbiAgICAgICAgICAgIHZhciBoaXQ4ID0gaGl0ICogNCAvIHJvd3M7XHJcblxyXG4gICAgICAgICAgICAvLyBWZXJ0aWNhbCBsYXlvdXRcclxuICAgICAgICAgICAgaWYoYzEgPT0gMCAmJiBjNSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMZWZ0L3JpZ2h0IHNwbGl0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgtMSkgKiB3aWQgLyBjb2xzLCAoMCkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoMykgKiB3aWQgLyBjb2xzLCAoMCkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoYzEgPiBjNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMxID0gYzU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsICgwKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL0hvcml6b250YWwgbGF5b3V0XHJcbiAgICAgICAgICAgIHZhciB3aWQ4ID0gd2lkICogNCAvIGNvbHM7XHJcbiAgICAgICAgICAgIHZhciBoaXQ4ID0gaGl0ICogMiAvIHJvd3M7XHJcblxyXG4gICAgICAgICAgICBpZigocjIgLSByMSkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTcGxpdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAwICogd2lkIC8gY29scywgKC0xKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIDAgKiB3aWQgLyBjb2xzLCAoMykgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYocjEgPiByMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHIxID0gcjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAwICogd2lkIC8gY29scywgKHIxKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkdyb3VwLnByb3RvdHlwZS5kcmF3R3JvdXAgPSBmdW5jdGlvbihjdHgsIHgxLCB5MSwgd2lkLCBoaXQsIGluc2V0KSB7XHJcbiAgICB2YXIgeCA9IHgxICsgaW5zZXQ7XHJcbiAgICB2YXIgeSA9IHkxICsgaW5zZXQ7XHJcbiAgICB2YXIgd2lkdGggPSB3aWQgLSBpbnNldCAqIDIgLSAxO1xyXG4gICAgdmFyIGhlaWdodCA9IGhpdCAtIGluc2V0ICogMiAtIDE7XHJcbiAgICB2YXIgcmFkaXVzID0gMzA7XHJcbiAgICBjdHgubGluZVdpZHRoID0gNztcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyh4LHkrcmFkaXVzKTtcclxuICAgIGN0eC5saW5lVG8oeCx5K2hlaWdodC1yYWRpdXMpO1xyXG4gICAgY3R4LmFyY1RvKHgseStoZWlnaHQseCtyYWRpdXMseStoZWlnaHQscmFkaXVzKTtcclxuICAgIGN0eC5saW5lVG8oeCt3aWR0aC1yYWRpdXMseStoZWlnaHQpO1xyXG4gICAgY3R4LmFyY1RvKHgrd2lkdGgseStoZWlnaHQseCt3aWR0aCx5K2hlaWdodC1yYWRpdXMscmFkaXVzKTtcclxuICAgIGN0eC5saW5lVG8oeCt3aWR0aCx5K3JhZGl1cyk7XHJcbiAgICBjdHguYXJjVG8oeCt3aWR0aCx5LHgrd2lkdGgtcmFkaXVzLHkscmFkaXVzKTtcclxuICAgIGN0eC5saW5lVG8oeCtyYWRpdXMseSk7XHJcbiAgICBjdHguYXJjVG8oeCx5LHgseStyYWRpdXMscmFkaXVzKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxufSIsImltcG9ydCB7TWVzc2FnZURpYWxvZ30gZnJvbSAnLi9NZXNzYWdlRGlhbG9nJztcclxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4vR3JvdXBcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZ3JvdXBzIGFyZWEgb2YgdGhlIGVkaXRvclxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cHMgPSBmdW5jdGlvbihtYWluLCBzZWwpIHtcclxuXHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdHRoaXMubWFpbiA9IG1haW47XHJcblxyXG5cdGxldCBsaXN0O1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0c2VsLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0XHRidXR0b24uaW5uZXJUZXh0ID0gJ0NvdmVyJztcclxuXHJcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcclxuXHRcdHNlbC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0XHR0aGlzLmdyb3VwcyA9IFtdO1xyXG5cdFx0dGhpcy5jb2xvck4gPSAwO1xyXG5cclxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhtYWluKTtcclxuXHRcdCAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0bGV0IHNlbGVjdGVkID0gbWFpbi53b3JrLm1hcC5zZWxlY3RlZDtcclxuICAgICAgICAgICAgXHJcblx0XHRcdGlmKG1haW4ub3B0aW9ucy5zdHJpY3QpIHtcclxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgaG93IG1hbnkgY29tbW9uIGJpdHMgdGhlcmUgYXJlXHJcblx0XHRcdFx0bGV0IGFuZDEgPSBNYXRoLnBvdygyLCBtYWluLm9wdGlvbnMuc2l6ZSkgLSAxO1xyXG5cdFx0XHRcdGxldCBhbmQyID0gYW5kMTtcclxuXHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7IGk8c2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBzZWwgPSBzZWxlY3RlZFtpXTtcclxuXHRcdFx0XHRcdGFuZDEgJj0gc2VsO1xyXG5cdFx0XHRcdFx0YW5kMiAmPSB+c2VsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IG9yID0gYW5kMSB8IGFuZDI7XHJcblx0XHRcdFx0bGV0IGJpdHMgPSAwO1xyXG5cdFx0XHRcdGxldCBzaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblxyXG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPHNpemU7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYoKG9yICYgMSkgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0Yml0cysrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG9yID4+PSAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gVGVzdCBmb3IgdmFsaWRcclxuXHRcdFx0XHR2YXIgdmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdHN3aXRjaChzZWxlY3RlZC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHR2YWxpZCA9IGJpdHMgPT0gc2l6ZSAtIDE7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBiaXRzID09IHNpemUgLSAyO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDg6XHJcblx0XHRcdFx0XHRcdHZhbGlkID0gYml0cyA9PSBzaXplIC0gMztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAxNjpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+R3JvdXBpbmcgbXVzdCBiZSBvZiBzb21lIHBvd2VyIG9mIHR3byBtaW50ZXJtcy48L3A+PHA+VGhlIG9ubHkgJyArXHJcblx0XHRcdFx0XHRcdFx0J2dyb3VwaW5ncyBwb3NzaWJsZSBhcmUgMSwgMiwgNCwgOCwgb3IgMTYsIGRlcGVuZGluZyBvbiB0aGUgc2l6ZSBvZiB0aGUgJyArXHJcblx0XHRcdFx0XHRcdFx0J0thcm5hdWdoIG1hcC48L3A+JztcclxuXHRcdFx0XHRcdFx0bGV0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcblx0XHRcdFx0XHRcdGRsZy5vcGVuKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKCF2YWxpZCkge1xyXG5cdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+WW91ciBtaW50ZXJtIGdyb3VwaW5nIGlzIGludmFsaWQuPC9wPjxwPkdyb3VwaW5ncyBtdXN0IGJlIHN1Y2ggJyArXHJcblx0XHRcdFx0XHRcdCd0aGF0IHRoZXJlIGFyZSBiaXRzIGluIGNvbW1vbi4gVGhpcyBtZWFucyB0aGUgZ3JvdXBpbmdzIG11c3QgYmUgYSByZWN0YW5nbGUgJyArXHJcblx0XHRcdFx0XHRcdCdvbiB0aGUgS2FybmF1Z2ggbWFwLiBUaGlzIGNhbiBiZSBhIDEgYnkgNCByZWN0YW5nbGUgb3IgYSAyIGJ5IDIgcmVjdGFuZ2xlIGZvciAnICtcclxuXHRcdFx0XHRcdFx0J2EgZ3JvdXBpbmcgb2YgNCwgZm9yIGV4YW1wbGUuIE5vdGUgdGhhdCB0aGUgbWFwIGRvZXMgPGVtPndyYXAgYXJvdW5kPC9lbT4gYXQnICtcclxuXHRcdFx0XHRcdFx0JyB0aGUgZWRnZXMsIHNvIHRoZSByaWdodCBzaWRlIGlzIGFkamFjZW50IHRvIHRoZSBsZWZ0IHNpZGUsIGZvciBleGFtcGxlLjwvcD4nO1xyXG5cdFx0XHRcdFx0bGV0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcblx0XHRcdFx0XHRkbGcub3BlbigpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBFbnN1cmUgdGhpcyBncm91cCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTx0aGF0Lmdyb3Vwcy5sZW5ndGggJiYgdmFsaWQ7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYodGhhdC5ncm91cHNbaV0uc2VsZWN0ZWQubGVuZ3RoID09PSBzZWxlY3RlZC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9rID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaj0wOyBqPHRoYXQuZ3JvdXBzW2ldLnNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhhdC5ncm91cHNbaV0uc2VsZWN0ZWRbal0gIT09IHNlbGVjdGVkW2pdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvayA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmKCFvaykge1xyXG5cdFx0XHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+VGhpcyBjb3ZlciBhbHJlYWR5IGV4aXN0cy48L3A+JztcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGxnID0gbmV3IE1lc3NhZ2VEaWFsb2cobWFpbiwgXCJZb3UgY2FuJ3QgZG8gdGhhdFwiLCBodG1sKTtcclxuXHRcdFx0XHRcdFx0XHRkbGcub3BlbigpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hZGRfZ3JvdXAoc2VsZWN0ZWQpO1xyXG5cdFx0XHR0aGlzLmRyYXdHcm91cHMoKTtcclxuXHJcblx0XHRcdG1haW4ud29yay5tYXAuY2xlYXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgYSBuZXcgZ3JvdXAgKGNvdmVyKVxyXG5cdCAqIEBwYXJhbSBtaW50ZXJtcyBBcnJheSBvZiBtaW50ZXJtcyBpbiB0aGUgZ3JvdXBcclxuXHQgKi9cclxuXHR0aGlzLmFkZF9ncm91cCA9IGZ1bmN0aW9uKG1pbnRlcm1zKSB7XHJcblx0XHRsZXQgZ3JvdXAgPSBuZXcgR3JvdXAodGhpcywgbGlzdCwgbWludGVybXMsIHRoaXMuY29sb3JzW3RoaXMuY29sb3JOXSk7XHJcblx0XHR0aGlzLmNvbG9yTiA9ICh0aGlzLmNvbG9yTiArIDEpICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG5cdFx0dGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEcmF3IGFsbCBvZiB0aGUgZ3JvdXBzIG9uIHRoZSBjYW52YXNcclxuXHQgKi9cclxuXHR0aGlzLmRyYXdHcm91cHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKG1haW4pO1xyXG5cdFx0Y29uc3QgY2FudmFzID0gbWFpbi53b3JrLm1hcC5nZXRfY2FudmFzKCk7XHJcblx0XHRjb25zb2xlLmxvZyhjYW52YXMpO1xyXG5cdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cdFx0dmFyIHdpZCA9IGNhbnZhcy53aWR0aDtcclxuXHRcdHZhciBoaXQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkLCBoaXQpO1xyXG5cclxuXHRcdHZhciBzaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblx0XHR2YXIgY291bnRlciA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8TWF0aC5wb3coMiwgc2l6ZSk7ICBpKyspIHtcclxuXHRcdFx0Y291bnRlci5wdXNoKDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBncm91cCA9IHRoaXMuZ3JvdXBzW2ldO1xyXG5cclxuXHRcdFx0dmFyIG1heCA9IDE7XHJcblx0XHRcdGZvcih2YXIgaj0wOyBqPGdyb3VwLnNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0Y291bnRlcltncm91cC5zZWxlY3RlZFtqXV0rKztcclxuXHRcdFx0XHRpZihjb3VudGVyW2dyb3VwLnNlbGVjdGVkW2pdXSA+IG1heCkge1xyXG5cdFx0XHRcdFx0bWF4ID0gY291bnRlcltncm91cC5zZWxlY3RlZFtqXV07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRncm91cC5kcmF3KGN0eCwgd2lkLCBoaXQsIG1heCk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHRcdHRoaXMuY29sb3JOID0gMDtcclxuXHRcdHRoaXMuZ3JvdXBzID0gW107XHJcblx0XHR0aGlzLmRyYXdHcm91cHMoKTtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24oZ3JvdXApIHtcclxuXHRcdGZvcihsZXQgaT0wOyBpPHRoaXMuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuZ3JvdXBzW2ldID09PSBncm91cCkge1xyXG5cdFx0XHRcdHRoaXMuZ3JvdXBzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZHJhd0dyb3VwcygpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgJzxidXR0b24+R3JvdXA8L2J1dHRvbj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPicgK1xyXG4gICAgICcgICAgICAgICAgICAwLDEsMiwzLDQsNSw2LDcsOCwgOSwxMCwxMSwxMiwxMywxNCwxNScgK1xyXG4gICAgICcgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+PGltZyBzcmM9XCJpbWFnZXMveC5wbmdcIj48L2E+PC9zcGFuPicgK1xyXG4gICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+ICcgK1xyXG4gICAgICcgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG5cclxuICAgICAqL1xyXG59XHJcblxyXG5Hcm91cHMucHJvdG90eXBlLmNvbG9ycyA9IFtcIiMwMDAwRkZcIiwgXCIjODA4MDg4XCIsIFwiI0ZGODgwMFwiLCBcIiMwMDgwODBcIiwgXCIjQkRCNzZCXCIsXHJcbiAgICBcIiM4MDAwMDBcIiwgXCIjMDBGRjg4XCIsIFwiIzc3ODg5OVwiLCBcIiNGRkE1MDBcIiwgXCIjOUFDRDMyXCIsIFwiIzQ2ODJCNFwiXTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcbmltcG9ydCB7UmVhZHl9IGZyb20gJy4vVXRpbGl0eS9SZWFkeSc7XHJcbmltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgS21hcCBLYXJuYXVnaCBNYXAuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEttYXAgPSBmdW5jdGlvbihzZWwsIG9wdGlvbnMpIHtcclxuXHQvL1xyXG5cdC8vIE1hc3RlciBzZXQgb2YgdGhlIHZlcnNpb25cclxuXHQvL1xyXG5cdGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcblx0dGhpcy52ZXJzaW9uID0gUEFDS0FHRS52ZXJzaW9uO1xyXG5cclxuXHQvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xyXG5cdHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHQvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxyXG5cdGNvbnN0IG1haW5zID0gW107XHJcblxyXG5cdHRoaXMuc3RhcnQgPSAoKSA9PiB7XHJcblx0XHRSZWFkeS5nbygoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RhcnROb3coKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3RhcnQgS21hcCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXHJcblx0ICovXHJcblx0dGhpcy5zdGFydE5vdyA9ICgpID0+IHtcclxuXHRcdGlmKHNlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHRcdFx0Y29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIHNlbCk7XHJcblx0XHRcdG1haW5zLnB1c2gobWFpbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuXHRcdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdFx0Y29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xyXG5cdFx0XHRcdG1haW5zLnB1c2gobWFpbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihtYWlucy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0cmV0dXJuIG1haW5zWzBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1dvcmt9IGZyb20gJy4vV29yayc7XHJcbmltcG9ydCB7R2VuZXJhdG9yfSBmcm9tICcuL0dlbmVyYXRvcic7XHJcbmltcG9ydCB7U29sdXRpb259IGZyb20gXCIuL1NvbHV0aW9uXCI7XHJcbmltcG9ydCB7TWFudWFsfSBmcm9tIFwiLi9NYW51YWxcIjtcclxuaW1wb3J0IHtNaW50ZXJtc30gZnJvbSBcIi4uL0xvZ2ljL01pbnRlcm1zXCI7XHJcblxyXG4vKipcclxuICogTWFpbiB3aW5kb3cgbWFuYWdlbWVudCBvYmplY3RcclxuICogQHBhcmFtIGttYXAgS21hcCBvYmplY3QgKHBhcmVudClcclxuICogQHBhcmFtIGVsZW1lbnQgVGhlIERPTSBlbGVtZW50IHRvIHVzZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYWluID0gZnVuY3Rpb24oa21hcCwgZWxlbWVudCkge1xyXG4gICAgdGhpcy5vcHRpb25zID0ga21hcC5vcHRpb25zO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAvLyBFbnN1cmUgZW1wdHkgYW5kIGFkZCB0aGUga21hcC1jbCBjbGFzc1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgna21hcC1jbCcpO1xyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IG1pbnRlcm1zXHJcblx0dGhpcy5taW50ZXJtcyA9IG5ldyBNaW50ZXJtcygpO1xyXG5cclxuXHR0aGlzLndvcmsgPSBudWxsO1xyXG4gICAgdGhpcy5nZW5lcmF0b3IgPSBudWxsO1xyXG4gICAgdGhpcy5zb2x1dGlvbiA9IG51bGw7XHJcbiAgICB0aGlzLm1hbnVhbCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5nZW5lcmF0b3IpIHtcclxuXHQgICAgICAgIHRoaXMuZ2VuZXJhdG9yID0gbmV3IEdlbmVyYXRvcih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYW51YWwpIHtcclxuICAgICAgICBcdHRoaXMubWFudWFsID0gbmV3IE1hbnVhbCh0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXApIHtcclxuXHQgICAgICAgIHRoaXMud29yayA9IG5ldyBXb3JrKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNvbHV0aW9uKSB7XHJcblx0ICAgICAgICB0aGlzLnNvbHV0aW9uID0gbmV3IFNvbHV0aW9uKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgbWludGVybXNcclxuXHQgICAgaWYodGhpcy5vcHRpb25zLm1pbnRlcm1zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHRoaXMuZ2VuZXJhdGUoKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICB0aGlzLnNldCh0aGlzLm9wdGlvbnMubWludGVybXMsIHRoaXMub3B0aW9ucy5kb250Y2FyZSk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGUgYSBuZXcgc2V0IG9mIG1pbnRlcm1zIHdpdGggb3B0aW9uYWwgZG9uJ3QgY2FyZXNcclxuXHQgKi9cclxuXHR0aGlzLmdlbmVyYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm1pbnRlcm1zLnNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcclxuXHRcdGlmKHRoaXMub3B0aW9ucy5nZW5Eb250Q2FyZSkge1xyXG5cdFx0XHR2YXIgZGNNYXggPSA4O1xyXG5cdFx0XHRzd2l0Y2godGhpcy5vcHRpb25zLnNpemUpIHtcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRkY01heCA9IDI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0ZGNNYXggPSA0O1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgdGhpcy5vcHRpb25zLnNpemUpLTEsXHJcblx0XHRcdFx0MC4yLCAxLCBkY01heCk7XHJcblxyXG5cdFx0XHRuZXdNaW50ZXJtcygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgdGhpcy5vcHRpb25zLnNpemUpLTEpO1xyXG5cdFx0XHRuZXdNaW50ZXJtcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbihtaW50ZXJtcywgZG9udGNhcmUpIHtcclxuXHRcdHRoaXMubWludGVybXMuc2V0X2Zyb20obWludGVybXMsIGRvbnRjYXJlKTtcclxuXHRcdG5ld01pbnRlcm1zKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBuZXdNaW50ZXJtcyA9ICgpID0+IHtcclxuXHRcdGlmKHRoaXMuc29sdXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5zb2x1dGlvbi5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub3B0aW9ucy5taW50ZXJtcyA9IHRoaXMubWludGVybXMubWludGVybXMuc2xpY2UoKTtcclxuXHRcdHRoaXMub3B0aW9ucy5kb250Y2FyZSA9IHRoaXMubWludGVybXMuZG9udGNhcmUuc2xpY2UoKTtcclxuXHJcblx0XHRpZih0aGlzLndvcmsgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy53b3JrLnJlbmRlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZ2VuZXJhdG9yICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuZ2VuZXJhdG9yLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0aGlzLm5ld1NpemUgPSBmdW5jdGlvbihzaXplKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLmdlbmVyYXRlKCk7XHJcblx0fVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBNYW51YWwgZW50cnkgb2YgbWludGVybXMgYW5kIGRvbid0IGNhcmVzIHN1cHBvcnRcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBhcmUgYWRkaW5nIHRoaXMgY29tcG9uZW50IHRvXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1hbnVhbCA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCBsYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cclxuICAgIGxldCBtYW51YWxNaW50ZXJtcywgbWFudWFsRG9udENhcmVzLCBtYW51YWxWYXJpYWJsZXM7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna21hcC1jbC1tYW51YWwnKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5pbm5lckhUTUwgPSAnTWFudWFsIEVudHJ5JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuXHQgICAgLy8gdmFyIGZvcm0gPSAnPGZvcm0+PGRpdiBjbGFzcz1cImxlZnRcIj4nICtcclxuXHRcdC8vICAgICAnPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1taW50ZXJtc1wiPk1pbnRlcm1zOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1taW50ZXJtc1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD4nICtcclxuXHRcdC8vICAgICAnPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1kb250Y2FyZXNcIj5Eb25cXCd0IGNhcmVzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1kb250Y2FyZXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+JyArXHJcblx0XHQvLyAgICAgJzxwPjxidXR0b24+VGFrZTwvYnV0dG9uPjwvcD4nICtcclxuXHRcdC8vICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0XCI+JyArXHJcblx0XHQvLyAgICAgJzxwPjxsYWJlbCBmb3I9XCJtYW51YWwtdmFyaWFibGVzXCI+TGFiZWxzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC12YXJpYWJsZXNcIiB2YWx1ZT1cIicgK1xyXG5cdFx0Ly8gICAgIGxhYmVscyArICdcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+JyArXHJcblx0XHQvLyAgICAgJzwvZGl2PjwvZm9ybT4nO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBMZWZ0IGRpdlxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuXHQgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1taW50ZXJtc1wiPk1pbnRlcm1zOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1taW50ZXJtc1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD5cclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSAnTWludGVybXM6ICc7XHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG4gICAgICAgIG1hbnVhbE1pbnRlcm1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBtYW51YWxNaW50ZXJtcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIG1hbnVhbE1pbnRlcm1zLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKG1hbnVhbE1pbnRlcm1zKTtcclxuXHJcbiAgICAgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1kb250Y2FyZXNcIj5Eb25cXCd0IGNhcmVzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1kb250Y2FyZXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+XHJcblx0ICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIGxlZnQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG5cdCAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0ICAgIHAuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuXHQgICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0RvblxcJ3QgY2FyZXM6ICc7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuXHQgICAgbWFudWFsRG9udENhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHQgICAgbWFudWFsRG9udENhcmVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0ICAgIG1hbnVhbERvbnRDYXJlcy5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQobWFudWFsRG9udENhcmVzKTtcclxuXHJcblx0ICAgIC8vIDxwPjxidXR0b24+VGFrZTwvYnV0dG9uPjwvcD5cclxuXHQgICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgbGVmdC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGFrZSk7XHJcbiAgICAgICAgdGFrZS5pbm5lclRleHQgPSAnVGFrZSc7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmlnaHQgZGl2XHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC12YXJpYWJsZXNcIj5MYWJlbHM6IDwvbGFiZWw+PGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWFudWFsLXZhcmlhYmxlc1wiIHZhbHVlPVwiJyArXHJcblx0ICAgIC8vIGxhYmVscyArICdcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+XHJcblx0ICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIHJpZ2h0LmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHQgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdCAgICBwLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcblx0ICAgIGxhYmVsLmlubmVyVGV4dCA9ICdMYWJlbHM6ICc7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuXHQgICAgbWFudWFsVmFyaWFibGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHQgICAgbWFudWFsVmFyaWFibGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0ICAgIG1hbnVhbFZhcmlhYmxlcy5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQobWFudWFsVmFyaWFibGVzKTtcclxuXHQgICAgbWFudWFsVmFyaWFibGVzLnZhbHVlID0gbGFiZWxzO1xyXG5cclxuXHQgICAgdGFrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQgICAgY29uc3QgbWludGVybXNsaXN0ID0gcGFyc2UobWFudWFsTWludGVybXMudmFsdWUpO1xyXG5cdFx0ICAgIGNvbnN0IGRvbnRjYXJlbGlzdCA9IHBhcnNlKG1hbnVhbERvbnRDYXJlcy52YWx1ZSk7XHJcblxyXG5cdFx0ICAgIC8vIEdldCB0aGUgbGFiZWxzLCBzdHJpcHBpbmcgYW55IEhUTUwgdGFncyBqdXN0IGluIGNhc2VcclxuXHRcdCAgICBjb25zdCBsYWJlbHMgPSBtYW51YWxWYXJpYWJsZXMudmFsdWUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsXCJcIik7XHJcblxyXG5cdFx0ICAgIG1haW4ub3B0aW9ucy5sYWJlbHMgPSBsYWJlbHMuc3BsaXQoXCIsXCIpO1xyXG5cdFx0ICAgIG1haW4uc2V0KG1pbnRlcm1zbGlzdCwgZG9udGNhcmVsaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblx0ZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcclxuXHRcdHZhciByZU0gPSAvbS9nO1xyXG5cdFx0dmFyIHJlID0gL1ssIF0rL2c7XHJcblx0XHR2YXIgaXRlbXMgPSBpbnB1dC5yZXBsYWNlKHJlTSwgJycpLnNwbGl0KHJlKTtcclxuXHRcdHZhciByZXQgPSBbXTtcclxuXHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRpZihpdGVtICE9PSAgXCJcIikge1xyXG5cdFx0XHRcdHJldC5wdXNoKHBhcnNlSW50KGl0ZW0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7TWVzc2FnZURpYWxvZ30gZnJvbSAnLi9NZXNzYWdlRGlhbG9nJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYWN0dWFsIEthcm5hdWdoIE1hcFxyXG4gKiBAcGFyYW0gbWFpblxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYXAgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICBsZXQgdG9wTGVmdCwgYm90UmlnaHQsIGNhbnZhcztcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgna21hcC1jbCcpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgbG9jYWwgY29weSBvZiB0aGUgbGFiZWxzLCBjb252ZXJ0aW5nXHJcblx0ICAgIC8vIF8xIHRvIDxzdWI+MTwvc3ViPlxyXG5cdCAgICBjb25zdCBsYWJlbHMgPSBbXTtcclxuXHQgICAgZm9yKGNvbnN0IGxhYmVsIG9mIG1haW4ub3B0aW9ucy5sYWJlbHMpIHtcclxuXHRcdFx0bGFiZWxzLnB1c2gobGFiZWwucmVwbGFjZSgvXyhbYS16QS1aMC05XSkqL2csICc8c3ViPiQxPC9zdWI+JykpO1xyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHZhciBsZWZ0LCByaWdodCwgcmVzdCwgY29saGVhZHM7XHJcbiAgICAgICAgaWYoK21haW4ub3B0aW9ucy5zaXplID09PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcbiAgICAgICAgICAgIGxlZnQ9QjtcclxuICAgICAgICAgICAgcmlnaHQ9QTtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiPC90aD5cIjtcclxuICAgICAgICAgICAgY29saGVhZHMgPSBbQiArIFwiJ1wiLCBCXTtcclxuICAgICAgICB9IGVsc2UgaWYoK21haW4ub3B0aW9ucy5zaXplID09PSAzKSB7XHJcblx0ICAgICAgICBsZXQgQSA9IGxhYmVsc1swXTtcclxuXHQgICAgICAgIGxldCBCID0gbGFiZWxzWzFdO1xyXG5cdCAgICAgICAgbGV0IEMgPSBsYWJlbHNbMl07XHJcbiAgICAgICAgICAgIGxlZnQ9QztcclxuICAgICAgICAgICAgcmlnaHQ9QSArIEI7XHJcbiAgICAgICAgICAgIHJlc3QgPSBcIjx0aD5cIiArIEEgKyBcIidcIiArIEIgKyBcIic8L3RoPjx0aD5cIiArIEEgKyBcIidcIiArIEIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L3RoPjx0aD5cIiArIEEgKyBCICsgXCI8L3RoPjx0aD5cIiArIEEgICsgQiArIFwiJzwvdGg+XCI7XHJcbiAgICAgICAgICAgIGNvbGhlYWRzID0gW0MgKyBcIidcIiwgQ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcblx0ICAgICAgICBsZXQgQyA9IGxhYmVsc1syXTtcclxuXHQgICAgICAgIGxldCBEID0gbGFiZWxzWzNdO1xyXG4gICAgICAgICAgICBsZWZ0PUMgKyBEO1xyXG4gICAgICAgICAgICByaWdodD1BICsgQjtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiPC90aD48dGg+XCIgK1xyXG4gICAgICAgICAgICAgICAgQSArIEIgKyBcIjwvdGg+PHRoPlwiICsgQSArIEIgKyBcIic8L3RoPlwiO1xyXG4gICAgICAgICAgICBjb2xoZWFkcyA9IFtDICsgXCInXCIgKyBEICsgXCInXCIsIEMgKyBcIidcIiArIEQsIEMgKyBELCBDICsgRCArIFwiJ1wiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVG9wIHJvdyBmaXJzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdHIuaW5uZXJIVE1MID0gJzx0aD48ZGl2IGNsYXNzPVwia21hcC1jbC1sZWZ0XCI+JyArIGxlZnQgK1xyXG4gICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cImttYXAtY2wtbGluZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJrbWFwLWNsLXJpZ2h0XCI+JyArIHJpZ2h0ICsgJzwvZGl2PjwvdGg+JyArXHJcbiAgICAgICAgICAgIHJlc3Q7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFJlc3Qgb2YgdGhlIHRhYmxlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IHJvd3MgPSArbWFpbi5vcHRpb25zLnNpemUgPT09IDQgPyA0IDogMjtcclxuICAgICAgICBsZXQgY29scyA9ICttYWluLm9wdGlvbnMuc2l6ZSA9PT0gMiA/IDIgOiA0O1xyXG5cclxuXHJcbiAgICAgICAgZm9yKGxldCByPTE7IHI8PXJvd3M7IHIrKykge1xyXG4gICAgICAgIFx0dHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIFx0dHIuaW5uZXJIVE1MID0gJzx0aD4nICsgY29saGVhZHNbci0xXSArICc8L3RoPic7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGM9MTsgYzw9Y29sczsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZCA9IG1ha2VfY2VsbChjLCByKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyID09PSAxICYmIGMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3BMZWZ0ID0gdGQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYociA9PT0gcm93cyAmJiBjID09PSBjb2xzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90UmlnaHQgPSB0ZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwMCcpO1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAwJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgICAgICBzZXRfY2FudmFzKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG5cclxuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldF9jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0X2NhbnZhcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHRjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRfY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRfY2FudmFzKCkge1xyXG5cdCAgICBjb25zdCB0bCA9IHtsZWZ0OiB0b3BMZWZ0Lm9mZnNldExlZnQsIHRvcDogdG9wTGVmdC5vZmZzZXRUb3B9O1xyXG5cdCAgICBjb25zdCBiciA9IHtsZWZ0OiBib3RSaWdodC5vZmZzZXRMZWZ0LCB0b3A6IGJvdFJpZ2h0Lm9mZnNldFRvcH07XHJcblx0ICAgIGNhbnZhcy5zdHlsZS50b3AgPSB0bC50b3AgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUubGVmdCA9IHRsLmxlZnQgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUud2lkdGggPSAoYnIubGVmdCAtIHRsLmxlZnQgKyBib3RSaWdodC5vZmZzZXRXaWR0aCkgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gKGJyLnRvcCAtIHRsLnRvcCArIGJvdFJpZ2h0Lm9mZnNldEhlaWdodCkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VfY2VsbCA9IChjLCByKSA9PiB7XHJcbiAgICBcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcblxyXG4gICAgICAgIGxldCBtaW50ZXJtID0gdG9fbWludGVybShjLCByKTtcclxuICAgICAgICBsZXQgYml0ID0gJzAnO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPG1haW4ub3B0aW9ucy5taW50ZXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihtaW50ZXJtID09PSArbWFpbi5vcHRpb25zLm1pbnRlcm1zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBiaXQgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGk9MDsgaTxtYWluLm9wdGlvbnMuZG9udGNhcmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYobWludGVybSA9PT0gK21haW4ub3B0aW9ucy5kb250Y2FyZVtpXSkge1xyXG4gICAgICAgICAgICAgICAgYml0ID0gJ1gnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1haW4ub3B0aW9ucy5sYWJlbE1pbnRlcm1zKSB7XHJcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1pbnRlcm1cIj5tJyArIG1pbnRlcm0gKyAnPC9zcGFuPicgKyBiaXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gYml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLm1haW4ub3B0aW9ucy5zdHJpY3QgJiYgYml0ID09PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBodG1sID0gJzxwPllvdSBhcmUgb25seSBhbGxvd2VkIHRvIHNlbGVjdCBjZWxscyB0aGF0IGFyZSBlaXRoZXIgdHJ1ZSAnICtcclxuICAgICAgICAgICAgICAgICAgICAnb3Igc2V0IHRvIGRvblxcJ3QgY2FyZS48L3A+PHA+V2UgYXJlIGdyb3VwaW5nIG1pbnRlcm1zIHRoYXQgYWxsIGFyZSB0cnVlICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICdzbyB3ZSBjYW4gbWluaW1pemUgdGhlIGNpcmN1aXQuIFNvLCBvbmx5IHRydWUgY2VsbHMgY2FuIGJlIGdyb3VwZWQuPC9wPic7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkbGcgPSBuZXcgTWVzc2FnZURpYWxvZyhtYWluLCBcIllvdSBjYW4ndCBkbyB0aGF0XCIsIGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgZGxnLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwia21hcC1jbC1zZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGQuY2xhc3NMaXN0LnJlbW92ZShcImttYXAtY2wtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihtaW50ZXJtKTtcclxuICAgICAgICAgICAgICAgIGlmKG4gPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKG4sIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImttYXAtY2wtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBpZighaXNfc2VsZWN0ZWQobWludGVybSkpIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKG1pbnRlcm0pO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZDtcclxuICAgIH1cclxuXHJcblx0Y29uc3QgdG9fbWludGVybSA9IChjLCByKSA9PiB7XHJcblx0XHRsZXQgbWFwO1xyXG5cclxuXHRcdGlmKCt0aGlzLm1haW4ub3B0aW9ucy5zaXplID09PSAyKSB7XHJcblx0XHRcdG1hcCA9IFtbMCwgMl0sIFsxLCAzXV07XHJcblx0XHR9IGVsc2UgaWYoK3RoaXMubWFpbi5vcHRpb25zLnNpemUgPT09IDMpIHtcclxuXHRcdFx0bWFwID0gW1swLCAyLCA2LCA0XSwgWzEsIDMsIDcsIDVdXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1hcCA9IFtbMCwgNCwgMTIsIDhdLCBbMSwgNSwgMTMsIDldLCBbMywgNywgMTUsIDExXSwgWzIsIDYsIDE0LCAxMF1dO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtYXBbci0xXVtjLTFdO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaXNfc2VsZWN0ZWQgPSAobWludGVybSkgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihtaW50ZXJtKSA+IC0xOyAvL1xyXG5cdH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHQgICAgY29uc3QgdGRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XHJcblx0ICAgIGZvcihsZXQgdGQgb2YgdGRzKSB7XHJcblx0ICAgIFx0dGQuY2xhc3NMaXN0LnJlbW92ZSgna21hcC1jbC1zZWxlY3RlZCcpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufVxyXG4iLCIvKipcclxuICogVGhlIHN0YW5kYXJkIE1lc3NhZ2UgZGlhbG9nIGJveC5cclxuICpcclxuICogUHJldHR5IG1pbmltYWxpc3QgZGlhbG9nIGJveFxyXG4gKlxyXG4gKiBAcGFyYW0gbWFpbiBUaGUgTWFpbiBvYmplY3RcclxuICogQHBhcmFtIHRpdGxlIFRpdGxlIGZvciB0aGUgZGlhbG9nIGJveFxyXG4gKiBAcGFyYW0gYm9keSBCb2R5IEhUTUwgdG8gcHV0IGluIHRoZSBkaWFsb2cgYm94XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VEaWFsb2cgPSBmdW5jdGlvbihtYWluLCB0aXRsZSwgYm9keSkge1xyXG4gICAgbGV0IGRpdiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gVGhlIHRvcCBsZXZlbCBkaWFsb2cgZWxlbWVudFxyXG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLWRsZycpO1xyXG4gICAgICAgIG1haW4uZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICAvLyBUaGUgbWFza1xyXG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG1hc2spO1xyXG5cclxuICAgICAgICAvLyBUaGUgZGlhbG9nIGJveCBpdHNlbGZcclxuICAgICAgICBsZXQgZGxnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRsZyk7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlIGJhclxyXG4gICAgICAgIGxldCB0YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRsZy5hcHBlbmRDaGlsZCh0Yik7XHJcbiAgICAgICAgdGIuaW5uZXJUZXh0ID0gdGl0bGU7XHJcblxyXG4gICAgICAgIC8vIEJvZHlcclxuICAgICAgICBsZXQgZGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkbGcuYXBwZW5kQ2hpbGQoZGIpO1xyXG5cdCAgICBkYi5pbm5lckhUTUwgPSBib2R5O1xyXG5cclxuXHQgICAgLy8gQ29udHJvbHNcclxuICAgICAgICBsZXQgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkbGcuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xyXG5cclxuICAgICAgICBsZXQgb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb250cm9scy5hcHBlbmRDaGlsZChvayk7XHJcbiAgICAgICAgb2suaW5uZXJUZXh0ID0gJ09rJztcclxuXHJcbiAgICAgICAgb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIGlmKGRpdiAhPT0gbnVsbCkge1xyXG5cdCAgICAgICAgICAgbWFpbi5lbGVtZW50LnJlbW92ZUNoaWxkKGRpdik7XHJcblx0ICAgICAgICAgICBkaXYgPSBudWxsO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFVzZXIgaW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqXHJcbiAqIE9wdGlvbnMgY2FuIGJlIHBhc3NlZCBhcyBhIEphdmFzY3JpcHQgT2JqZWN0LCBKU09OLCBvciBiYXNlNjQtZW5jb2RlZCBKU09OXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuXHRpZiAob3B0aW9ucyAhPT0gT2JqZWN0KG9wdGlvbnMpKSB7XHJcblx0XHRpZiAob3B0aW9ucy5zdWJzdHIoMCwgMSkgPT09ICd7Jykge1xyXG5cdFx0XHRvcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIE5vdCBKU09OLCBtdXN0IGJlIGJhc2U2NCBlbmNvZGVkXHJcblx0XHRcdG9wdGlvbnMgPSBKU09OLnBhcnNlKGF0b2Iob3B0aW9ucykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICAvLy8gVGhlIGlucHV0IHNpemU6IDIsIDMsIG9yIDRcclxuXHR0aGlzLnNpemUgPSA0O1xyXG5cclxuXHQvLy8gVGhlIG1pbnRlcm1zLiBTZXQgdG8gaW50ZWdlcnMgc3RhcnRpbmcgYXQgMFxyXG5cdHRoaXMubWludGVybXMgPSBbXTsgLy8gWzEsIDIsIDcsIDgsIDksIDE0XTtcclxuXHJcblx0Ly8vIFRoZSBkb24ndCBjYXJlIG1pbnRlcm1zXHJcblx0dGhpcy5kb250Y2FyZSA9IFtdO1xyXG5cclxuXHQvLy8gTGFiZWxzIGZvciB0aGUgdmFyaWFibGVzLlxyXG5cdHRoaXMubGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJ107XHJcblxyXG5cdC8vLyBHZW5lcmF0ZSBkb24ndCBjYXJlIG1hcHNcclxuXHR0aGlzLmdlbkRvbnRDYXJlID0gZmFsc2U7XHJcblxyXG5cdC8vLyBBcmUgZG9uJ3QgY2FyZXMgYW4gb3B0aW9uIGZvciB0aGUgZ2VuZXJhdG9yP1xyXG5cdHRoaXMuZ2VuRG9udENhcmVPcHRpb24gPSB0cnVlO1xyXG5cclxuXHQvL1xyXG5cdC8vIFVzZXIgaW50ZXJmYWNlIHNlY3Rpb25zXHJcblx0Ly9cclxuXHJcblx0Ly8vIEluY2x1ZGUgdGhlIGdlbmVyYXRvcj9cclxuXHR0aGlzLmdlbmVyYXRvciA9IHRydWU7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBtYW51YWwgZGF0YSBlbnRyeSBzZWN0aW9uP1xyXG5cdHRoaXMubWFudWFsID0gZmFsc2U7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBtYXA/XHJcblx0dGhpcy5tYXAgPSB0cnVlO1xyXG5cclxuXHQvLy8gSW5jbHVkZSB0aGUgc29sdXRpb24gc2VjdGlvbj9cclxuXHR0aGlzLnNvbHV0aW9uID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuXHQvLy8gSWYgc2V0IHRydWUsIHByYWN0aWNlIGdlbmVyYXRlIGZlYXR1cmVzIGFyZSBkaXNhYmxlZFxyXG5cdHRoaXMuZml4ZWQgPSBmYWxzZTtcclxuXHJcblx0Ly8vIFZlcmJvc2UgYW5zd2VycyBvbiBtaXN0YWtlc1xyXG5cdHRoaXMudmVyYm9zZSA9IHRydWU7XHJcblxyXG5cdC8vLyBJZiB0cnVlLCB0aGUgbWludGVybSBuYW1lIGFwcGVhcnMgaW4gZWFjaCBjZWxsLlxyXG5cdHRoaXMubGFiZWxNaW50ZXJtcyA9IHRydWU7XHJcblxyXG5cdC8vLyBJZiBzZXQgdHJ1ZSwgdXNlciBpbnB1dCBpcyBjaGVja2VkIGZvciBzZWxlY3RpbmcgaW52YWxpZCBjZWxsc1xyXG5cdC8vLyBzdWNoIGFzIHplcm9zLlxyXG5cdHRoaXMuc3RyaWN0ID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuXHQvLy8gSWYgdHJ1ZSwgdGhlIGhlYWRlciBLYXJuYXVnaCBNYXAgaXMgaW5jbHVkZWQgd2l0aCBhbiBvcHRpb24gdG8gaGlkZSB0aGUgbWFwXHJcblx0dGhpcy5tYXBIZWFkaW5nID0gdHJ1ZTtcclxuXHJcblx0Ly8vIEEgcmVzdWx0cyBzZWxlY3Rvci4gU2VsZWN0b3IgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgc3VjY2VzcyB2YWx1ZVxyXG5cdC8vLyBpZiB0aGUgZXhwcmVzc2lvbiBzdWNjZXNzZnVsbHkgY2hlY2tzXHJcblx0dGhpcy5yZXN1bHRTZWwgPSBudWxsO1xyXG5cclxuXHQvLy8gVmFsdWUgcmVzdWx0c1NlbCB3aWxsIGJlIHNldCB0byBpZiBjaGVjayBpcyBzdWNjZXNzZnVsICgnZmFpbCcgb3RoZXJ3aXNlKVxyXG5cdHRoaXMuc3VjY2VzcyA9ICdzdWNjZXNzJztcclxuXHJcblx0Ly8vIFNlbGVjdG9yIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGV4cHJlc3Npb24gZWFjaCB0aW1lIGNoZWNrIGlzIHByZXNzZWQuXHJcblx0dGhpcy5leHByZXNzaW9uU2VsID0gbnVsbDtcclxuXHJcblx0Ly8vIElzIHRoZSBzb2x2ZSBidXR0b24gcHJvdmlkZWQ/XHJcblx0dGhpcy5zb2x2ZSA9IGZhbHNlO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtFeHByZXNzaW9ufSBmcm9tIFwiLi4vTG9naWMvRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQge1F1aW5lTWNDbHVza2V5U29sdmVyfSBmcm9tIFwiLi4vTG9naWMvUXVpbmVNY0NsdXNrZXlTb2x2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBQcmFjdGljZSBwYWdlIHNvbHV0aW9uIGZvcm1cclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU29sdXRpb24gPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tYWluID0gbWFpbjtcclxuXHJcbiAgICAvLyBUaGUgdmFyaW91cyBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICBsZXQgZGl2LCBleHByZXNzaW9uSW5wdXQsIHJlc3VsdDtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXNvbHV0aW9uJyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZGl2KTtcclxuXHJcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5pbm5lclRleHQgPSAnU29sdXRpb24nO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcblx0ICAgIC8vICc8cD48bGFiZWw+RW50ZXIgRXhwcmVzc2lvbjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIiBjbGFzcz1cImV4cHJlc3Npb25cIj48L2xhYmVsPjwvcD4nXHJcblx0ICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICBmb3JtLmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHQgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblx0ICAgIGxhYmVsLmlubmVyVGV4dCA9ICdFbnRlciBFeHByZXNzaW9uJztcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG5cdCAgICBleHByZXNzaW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdCAgICBleHByZXNzaW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHQgICAgZXhwcmVzc2lvbklucHV0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChleHByZXNzaW9uSW5wdXQpO1xyXG5cclxuXHQgICAgLy8gJzxwPjxidXR0b24gY2xhc3M9XCJjaGVja1wiPkNoZWNrPC9idXR0b24+PGEgY2xhc3M9XCJjbGVhclwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+JztcclxuICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XHJcbiAgICAgICAgY2hlY2suaW5uZXJUZXh0ID0gJ0NoZWNrJztcclxuICAgICAgICBwLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuXHJcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIHRoaXMuY2hlY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgYnV0dG9uIChpbnB1dClcclxuXHQgICAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcblx0ICAgIGxldCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHQgICAgY2xlYXIuY2xhc3NMaXN0LmFkZCgnY2xlYXInKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChjbGVhcik7XHJcblxyXG5cdCAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcblx0ICAgIC8vIE9wdGlvbmFsIHNvbHZlIGJ1dHRvblxyXG5cdCAgICBpZihtYWluLm9wdGlvbnMuc29sdmUpIHtcclxuXHRcdCAgICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHRcdCAgICBsZXQgc29sdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdCAgICBzb2x2ZS5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXNvbHZlJyk7XHJcblx0XHQgICAgc29sdmUuaW5uZXJIVE1MID0gJ1NvbHZlJztcclxuXHRcdCAgICBwLmFwcGVuZENoaWxkKHNvbHZlKTtcclxuXHJcblx0XHQgICAgc29sdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQgICAgXHR0aGlzLnNvbHZlKCk7XHJcblx0XHQgICAgfSlcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy8gUmVzdWx0cyBkaXZcclxuICAgICAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIGV4cHJlc3Npb25JbnB1dC52YWx1ZSA9ICcnO1xyXG5cdCAgICByZXN1bHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVjayA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICB2YXIgbXQgPSAnJztcclxuXHQgICAgdmFyIGZpcnN0PXRydWU7XHJcblx0ICAgIGZvcihsZXQgaSBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdCAgICBpZihmaXJzdCkge1xyXG5cdFx0XHQgICAgbXQgKz0gXCIsXCI7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIGZpcnN0ID0gZmFsc2U7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBtdCArPSBtYWluLm9wdGlvbnMubWludGVybXNbaV07XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJlc3VsdC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0ICAgIHZhciBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgZXhwcmVzc2lvbi5sYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cdCAgICBleHByZXNzaW9uLnNldF9zaXplKG1haW4ub3B0aW9ucy5zaXplKTtcclxuXHJcblx0ICAgIGxldCBzdHIgPSBleHByZXNzaW9uSW5wdXQudmFsdWU7XHJcblxyXG5cdCAgICBpZihtYWluLm9wdGlvbnMuZXhwcmVzc2lvblNlbCAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtYWluLm9wdGlvbnMuZXhwcmVzc2lvblNlbCk7XHJcblx0XHQgICAgZm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0XHRcdCAgICBlbGVtZW50LnZhbHVlID0gc3RyLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgdHJ5IHtcclxuXHRcdCAgICBleHByZXNzaW9uLnBhcnNlKHN0cik7XHJcblx0ICAgIH0gY2F0Y2gobXNnKSB7XHJcblx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGZhaWxlZCB0byBwYXJzZSBhbmQgbXVzdCBub3QgYmUgJyArXHJcblx0XHRcdCAgICAnaW4gdGhlIGNvcnJlY3QgZm9ybS48L3A+JyArXHJcblx0XHRcdCAgICAnPHA+JyArIG1zZyArICc8L3A+Jyk7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cclxuXHQgICAgLy8gSXMgdGhpcyByZXN1bHQgbWluaW1hbD9cclxuXHQgICAgdmFyIHFtID0gbmV3IFF1aW5lTWNDbHVza2V5U29sdmVyKCk7XHJcblx0ICAgIHFtLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblxyXG5cdCAgICBxbS5pbml0KG1haW4ub3B0aW9ucy5zaXplKTtcclxuXHQgICAgZm9yKHZhciBpIGluIG1haW4ub3B0aW9ucy5taW50ZXJtcykge1xyXG5cdFx0ICAgIHFtLnNldChtYWluLm9wdGlvbnMubWludGVybXNbaV0sIHRydWUpO1xyXG5cdCAgICB9XHJcblx0ICAgIGZvcihpIGluIG1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0ICAgIHFtLnNldChtYWluLm9wdGlvbnMuZG9udGNhcmVbaV0sIHVuZGVmaW5lZCk7XHJcblx0ICAgIH1cclxuXHQgICAgcW0uY29tcHV0ZSgpO1xyXG5cclxuXHQgICAgdmFyIHFtRXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKCk7XHJcblx0ICAgIHFtRXhwcmVzc2lvbi5sYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cdCAgICBxbUV4cHJlc3Npb24uc2V0X3NpemUobWFpbi5vcHRpb25zLnNpemUpO1xyXG5cclxuXHQgICAgcW1FeHByZXNzaW9uLnBhcnNlKHFtLmV4cHJlc3Npb24oKSk7XHJcblxyXG5cdCAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gVGVzdCB0aGF0IGV2ZXJ5IG1pbnRlcm0gc3VwcGxpZWQgaXMgZWl0aGVyXHJcblx0ICAgIC8vIGEgdmFsaWQgbWludGVybSBvciBhIGRvbid0IGNhcmVcclxuXHQgICAgLy9cclxuXHQgICAgZm9yKHZhciBpIGluIGV4cHJlc3Npb24ubWludGVybXMubWludGVybXMpIHtcclxuXHRcdCAgICB2YXIgbSA9IGV4cHJlc3Npb24ubWludGVybXMubWludGVybXNbaV07XHJcblx0XHQgICAgdmFyIGlubGlzdCA9IGZhbHNlO1xyXG5cdFx0ICAgIGZvcih2YXIgaiBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdFx0ICAgIGlmKG1haW4ub3B0aW9ucy5taW50ZXJtc1tqXSA9PSBtKSB7XHJcblx0XHRcdFx0ICAgIGlubGlzdCA9IHRydWU7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgZm9yKGogIGluIG1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0XHQgICAgaWYobWFpbi5vcHRpb25zLmRvbnRjYXJlW2pdID09IG0pIHtcclxuXHRcdFx0XHQgICAgaW5saXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBpZighaW5saXN0KSB7XHJcblx0XHRcdCAgICAvLyBJZiB3ZSBnb3QgdG8gaGVyZSwgdGhpcyB0ZXJtIGlzIGV4dHJhbmVvdXMhXHJcblx0XHRcdCAgICB2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHQgICAgYnJlYWs7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBUZXN0IHRoYXQgZXZlcnkgbWludGVybSByZXF1aXJlZCBpcyBpbiB0aGUgc3VwcGxpZWQgbGlzdFxyXG5cdCAgICAvL1xyXG5cdCAgICBmb3IoaSBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdCAgICBtID0gbWFpbi5vcHRpb25zLm1pbnRlcm1zW2ldO1xyXG5cdFx0ICAgIGlubGlzdCA9IGZhbHNlO1xyXG5cdFx0ICAgIGZvcih2YXIgaiBpbiBleHByZXNzaW9uLm1pbnRlcm1zLm1pbnRlcm1zKSB7XHJcblx0XHRcdCAgICBpZihleHByZXNzaW9uLm1pbnRlcm1zLm1pbnRlcm1zW2pdID09IG0pIHtcclxuXHRcdFx0XHQgICAgaW5saXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBpZighaW5saXN0KSB7XHJcblx0XHRcdCAgICAvLyBJZiB3ZSBnb3QgdG8gaGVyZSwgdGhpcyB0ZXJtIGlzIGV4dHJhbmVvdXMhXHJcblx0XHRcdCAgICB2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHQgICAgYnJlYWs7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZighdmFsaWQpIHtcclxuXHRcdCAgICBpZihtYWluLm9wdGlvbnMudmVyYm9zZSkge1xyXG5cdFx0XHQgICAgdmFyIGh0bWwgPSAnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBhIHZhbGlkIHNvbHV0aW9uIGZvciB0aGlzICcgK1xyXG5cdFx0XHRcdCAgICAnc2V0IG9mIG1pbnRlcm1zLiBUaGUgbWludGVybXMgZm9yIHlvdXIgZXhwcmVzc2lvbiBoYXZlIGJlZW4gJyArXHJcblx0XHRcdFx0ICAgICdjb21wdXRlZCBhczogPC9wPic7XHJcblxyXG5cdFx0XHQgICAgaWYoZXhwcmVzc2lvbi5taW50ZXJtcy5taW50ZXJtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0ICAgIGh0bWwgKz0gJzxwIGNsYXNzPVwiY2VudGVyIHNtYWxsXCI+JyArIGV4cHJlc3Npb24ubWludGVybXMubGlzdCgpICsgJzwvcD4nO1xyXG5cdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHQgICAgaHRtbCArPSAnPHAgY2xhc3M9XCJjZW50ZXIgc21hbGxcIj5ub25lPC9wPic7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIHZhciBodG1sID0gJzxwPllvdXIgZXhwcmVzc2lvbiBpcyBub3QgYSB2YWxpZCBzb2x1dGlvbiBmb3IgdGhpcyAnICtcclxuXHRcdFx0XHQgICAgJ3NldCBvZiBtaW50ZXJtcy48L3A+JztcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIGZhaWwoaHRtbCk7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZighZXhwcmVzc2lvbi5hc19nb29kX2FzKHFtRXhwcmVzc2lvbikpIHtcclxuXHRcdCAgICBpZihtYWluLm9wdGlvbnMudmVyYm9zZSkge1xyXG5cdFx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBtaW5pbWFsLiBBIG1pbmltYWwgc29sdXRpb24gJyArXHJcblx0XHRcdFx0ICAgICdmb3IgdGhpcyBwcm9ibGVtIGlzOjwvcD4nICtcclxuXHRcdFx0XHQgICAgJzxwIGNsYXNzPVwic21hbGxcIj4nICsgcW0uZXhwcmVzc2lvbigpICsgJzwvcD4nKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBtaW5pbWFsLjwvcD4nKTtcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gU3VjY2Vzc1xyXG5cdCAgICAvL1xyXG5cclxuXHQgICAgcmVzdWx0LmlubmVySFRNTCA9ICc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgY29ycmVjdCBhbmQgbWluaW1hbC48L3A+JztcclxuXHJcblx0ICAgIGlmKG1haW4ub3B0aW9ucy5yZXN1bHRTZWwgIT09IG51bGwpIHtcclxuXHQgICAgXHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobWFpbi5vcHRpb25zLnJlc3VsdFNlbCk7XHJcblx0ICAgIFx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0ICAgIFx0XHRlbGVtZW50LnZhbHVlID0gbWFpbi5vcHRpb25zLnN1Y2Nlc3M7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICBjb25zdCBxbSA9IHRoaXMubWluaW11bUV4cHJlc3Npb24oKTtcclxuXHQgICAgcmVzdWx0LmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImNlbnRlclwiPicgKyBxbS5leHByZXNzaW9uKCkgKyBcIjwvcD5cIjtcclxuXHJcblx0ICAgIG1haW4ud29yay5tYXAuY2xlYXIoKTtcclxuXHJcblx0ICAgIHZhciBncm91cHMgPSBtYWluLndvcmsuZ3JvdXBzO1xyXG5cdCAgICBncm91cHMuY2xlYXIoKTtcclxuXHJcblx0ICAgIHZhciB0ZXJtcyA9IHFtLmV4cHJlc3Npb24oKS5zcGxpdCgnKycpO1xyXG5cdCAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgZXhwLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblx0ICAgIGV4cC5zZXRfc2l6ZShtYWluLm9wdGlvbnMuc2l6ZSk7XHJcblx0ICAgIGZvcih2YXIgaT0wOyBpPHRlcm1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcclxuXHRcdCAgICBleHAucGFyc2UodGVybSk7XHJcblx0XHQgICAgZ3JvdXBzLmFkZF9ncm91cChleHAubWludGVybXMubWludGVybXMpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBncm91cHMuZHJhd0dyb3VwcygpO1xyXG4gICAgfVxyXG5cclxuXHRjb25zdCBmYWlsID0gKG1zZykgPT4ge1xyXG5cdFx0cmVzdWx0LmlubmVySFRNTCA9IG1zZztcclxuXHJcblx0XHRpZihtYWluLm9wdGlvbnMucmVzdWx0U2VsICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtYWluLm9wdGlvbnMucmVzdWx0U2VsKTtcclxuXHRcdFx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9ICdmYWlsJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRoaXMubWluaW11bUV4cHJlc3Npb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIElzIHRoaXMgcmVzdWx0IG1pbmltYWw/XHJcblx0XHR2YXIgcW0gPSBuZXcgUXVpbmVNY0NsdXNrZXlTb2x2ZXIoKTtcclxuXHRcdHFtLmxhYmVscyA9IHRoaXMubWFpbi5vcHRpb25zLmxhYmVscztcclxuXHJcblx0XHRxbS5pbml0KHRoaXMubWFpbi5vcHRpb25zLnNpemUpO1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMubWFpbi5vcHRpb25zLm1pbnRlcm1zKSB7XHJcblx0XHRcdHFtLnNldCh0aGlzLm1haW4ub3B0aW9ucy5taW50ZXJtc1tpXSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRmb3IoaSBpbiB0aGlzLm1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0XHRxbS5zZXQodGhpcy5tYWluLm9wdGlvbnMuZG9udGNhcmVbaV0sIHVuZGVmaW5lZCk7XHJcblx0XHR9XHJcblx0XHRxbS5jb21wdXRlKCk7XHJcblx0XHRyZXR1cm4gcW07XHJcblx0fVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIFNpbXBsZSBEb2N1bWVudCByZWFkeSBmdW5jdGlvbiwgZXF1aXZhbGVudCB0byBqUXVlcnkncyBkb2N1bWVudCByZWFkeS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVhZHkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgYSBmdW5jdGlvbiB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkb24uXHJcbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZG9jdW1lbnQgcmVhZHlcclxuICovXHJcblJlYWR5LmdvID0gZnVuY3Rpb24oZm4pIHtcclxuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcclxuICAgICAgICBmbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7TWFwfSBmcm9tICcuL01hcCc7XHJcbmltcG9ydCB7R3JvdXBzfSBmcm9tICcuL0dyb3Vwcyc7XHJcblxyXG4vKipcclxuICogVGhlIHdvcmsgYXJlYSBpcyB0aGUgS2FybmF1Z2ggbWFwIGFuZCB0aGUgZ3JvdXBpbmdzIGNvbnRyb2xzLlxyXG4gKiBAcGFyYW0gbWFpblxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBXb3JrID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG5cclxuXHR0aGlzLm1hcCA9IG51bGw7XHJcblx0dGhpcy5ncm91cHMgPSBudWxsO1xyXG5cclxuXHRsZXQgZGl2LCBsZWZ0LCByaWdodDtcclxuXHJcblx0dGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihtYWluLm9wdGlvbnMubWFwSGVhZGluZykge1xyXG5cdFx0XHRsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGgzKTtcclxuXHJcblx0XHRcdGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0XHRcdGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdFx0XHRjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xyXG5cdFx0XHRoMy5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcblxyXG5cdFx0XHRoMy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIEthcm5hdWdoIE1hcCcpKTtcclxuXHJcblx0XHRcdGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmKGNoZWNrQm94LmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGRpdi5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENyZWF0ZSB0aGUgbWFpbiBkaXYgdGhhdCBjb250YWlucyB0aGUgd29yayBhcmVhXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXdvcmsnKTtcclxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdHRoaXMuZGl2ID0gZGl2O1xyXG5cclxuXHRcdHRoaXMucmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRkaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdFx0bGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuXHRcdHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBBZGQgdGhlIEttYXBcclxuXHRcdC8vXHJcblx0XHRpZih0aGlzLm1hcCAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLm1hcC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tYXAgPSBuZXcgTWFwKG1haW4sIHJpZ2h0KTtcclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gQWRkIHRoZSBncm91cHNcclxuXHRcdC8vXHJcblx0XHR0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMobWFpbiwgbGVmdCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmluaXRpYWxpemUoKTtcclxuXHJcbn0iLCJpbXBvcnQge01pbnRlcm1zfSBmcm9tIFwiLi9NaW50ZXJtc1wiO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBzaW1wbGUgZXhwcmVzc2lvbnMuIE9ubHkgd29ya3MgZm9yIHN1bSBvZiBwcm9kdWN0c1xyXG4gKiBmb3Igbm93LiBXaWxsIGNvbnNpZGVyIGZhbmNpZXIgdmVyc2lvbiBsYXRlciBvbi5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBzaXplID0gNDtcclxuXHJcbiAgICB0aGlzLm1pbnRlcm1zID0gbmV3IE1pbnRlcm1zKCk7XHJcblxyXG4gICAgdGhpcy5sYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSyddO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBzaXplIG9mIHRoZSBleHByZXNzaW9uXHJcbiAgICAgKiBAcGFyYW0gc3ogVmFsdWUgMS0/IG51bWJlciBvZiB0ZXJtc1xyXG4gICAgICovXHJcbiAgICB0aGlzLnNldF9zaXplID0gZnVuY3Rpb24oc3opIHtcclxuICAgICAgICBzaXplID0gc3o7XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcy5zaXplID0gc3o7XHJcbiAgICAgICAgdGVybXNfaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVzdCB0aGF0IHRoaXMgZXhwcmVzc2lvbiBpcyBhcyBnb29kIGFzIHNvbWUgb3RoZXIgZXhwcmVzc2lvbi5cclxuICAgICAqIEBwYXJhbSBvdGhlclxyXG4gICAgICovXHJcbiAgICB0aGlzLmFzX2dvb2RfYXMgPSBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICAgIGlmKHRoaXMubnVtX3Byb2R1Y3RzKCkgPiBvdGhlci5udW1fcHJvZHVjdHMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm51bV90ZXJtcygpID4gb3RoZXIubnVtX3Rlcm1zKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE1pbnRlcm1zXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlX21pbnRlcm1zKCkge1xyXG4gICAgICAgIHRoYXQubWludGVybXMuY2xlYXIoKTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxNYXRoLnBvdygyLCBzaXplKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlcm1zX3NldChpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHRTID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIHMgaW4gc29wKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZCA9IHNvcFtzXTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRQID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIHAgaW4gcHJvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcHJvZFtwXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodC5ub3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UCA9IHJlc3VsdFAgJiYgISh0LnRlcm0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFAgPSByZXN1bHRQICYmIHQudGVybS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0UyA9IHJlc3VsdFMgfHwgcmVzdWx0UDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocmVzdWx0Uykge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5taW50ZXJtcy5hZGQoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSBhbiBleHByZXNzaW9uIGluIHN1bS1vZi1wcm9kdWN0cyBmb3JtIG9ubHlcclxuICAgICAqIEBwYXJhbSBzdHJcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBzb3AgPSBbXTtcclxuXHJcbiAgICB0aGlzLnBhcnNlID0gZnVuY3Rpb24oZXhwKSB7XHJcbiAgICAgICAgbGV4KGV4cCk7XHJcblxyXG4gICAgICAgIHNvcCA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgcHJvZCA9IFtdO1xyXG5cclxuICAgICAgICBpZih0b2tlbigpID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZV9taW50ZXJtcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0b2tlbigpID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnRlcm1zLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPE1hdGgucG93KDIsIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWludGVybXMuYWRkKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdG9rZW4oKTtcclxuICAgICAgICAgICAgaWYoY2ggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihjaCA9PT0gJysnKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFwiU3ludGF4IGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNvcC5wdXNoKHByb2QpO1xyXG4gICAgICAgICAgICAgICAgcHJvZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgaXQgYSB0ZXJtP1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlcm0gPSBnZXRfdGVybShjaCk7XHJcbiAgICAgICAgICAgICAgICBpZih0ZXJtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIG5ldyB0ZXJtXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGF2ZSB3ZSBhbHJlYWR5IHNlZW4gaXQ/XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqIGluIHByb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVybSA9PT0gcHJvZFtqXS50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IHNlZW4gdGhpcyB0ZXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihcIk5vdCBpbiBjb3JyZWN0IHN1bSBvZiBwcm9kdWN0cyBmb3JtLiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUZXJtcyBtYXkgb25seSBiZSB1c2VkIG9uY2UgcGVyIHByb2R1Y3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW4oKSA9PT0gXCInXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZC5wdXNoKHt0ZXJtOiB0ZXJtLCBub3Q6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2QucHVzaCh7dGVybTogdGVybSwgbm90OiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCBzeW1ib2wuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc29wLnB1c2gocHJvZCk7XHJcbiAgICAgICAgICAgIHByb2QgPSBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJvcihcIk5vdCBpbiBjb3JyZWN0IHN1bSBvZiBwcm9kdWN0cyBmb3JtLiBcIiArXHJcbiAgICAgICAgICAgICAgICBcIk1pc3NpbmcgdGVybXM/XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVfbWludGVybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm51bV9wcm9kdWN0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBzb3AubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnVtX3Rlcm1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHNvcCkge1xyXG4gICAgICAgICAgICBjbnQgKz0gc29wW2ldLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XHJcbiAgICAgICAgdGhyb3cgXCJFeHByZXNzaW9uIHBhcnNpbmcgZXJyb3IgW1wiICsgZXhwcmVzc2lvbkxvYyArIFwiXTogXCIgKyBtc2c7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIFRlcm1zIG1hbmFnZW1lbnRcclxuICAgICAqL1xyXG5cclxuICAgIHZhciB0ZXJtcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1zX2luaXQoKSB7XHJcbiAgICAgICAgdGVybXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXJtc1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGVybSA9IHtcclxuICAgICAgICAgICAgICAgIGxpdGVyYWw6IHRoYXQubGFiZWxzW2ldLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRfdGVybShjaCkge1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgaW4gdGVybXMpIHtcclxuICAgICAgICAgICAgaWYoY2gudG9VcHBlckNhc2UoKSA9PT0gdGVybXNbaV0ubGl0ZXJhbC50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVybXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1zX3NldCh2YWwpIHtcclxuICAgICAgICBmb3IodmFyIGo9dGVybXMubGVuZ3RoLTE7IGo+PTA7IGotLSkge1xyXG4gICAgICAgICAgICB0ZXJtc1tqXS52YWx1ZSA9ICh2YWwgJiAxKSA9PSAxO1xyXG4gICAgICAgICAgICB2YWwgPj49IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICogU2ltcGxlIGxleGljYWwgYW5hbHl6ZXJcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBleHByZXNzaW9uO1xyXG4gICAgdmFyIGV4cHJlc3Npb25Mb2M7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV4KGV4cCkge1xyXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHA7XHJcbiAgICAgICAgZXhwcmVzc2lvbkxvYyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9rZW4oKSB7XHJcbiAgICAgICAgd2hpbGUoZXhwcmVzc2lvbkxvYyA8IGV4cHJlc3Npb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IGV4cHJlc3Npb24uY2hhckF0KGV4cHJlc3Npb25Mb2MpO1xyXG4gICAgICAgICAgICBpZihjaCAhPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGEgdGVybT9cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSBpbiB0ZXJtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXliZSA9IGV4cHJlc3Npb24uc3Vic3RyKGV4cHJlc3Npb25Mb2MsIHRlcm1zW2ldLmxpdGVyYWwubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWF5YmUgPT09IHRlcm1zW2ldLmxpdGVyYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2g7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb25Mb2MrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkdmFuY2UoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0b2tlbigpO1xyXG4gICAgICAgIGlmKHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZXhwcmVzc2lvbkxvYyArPSB0Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRfc2l6ZSg0KTtcclxufVxyXG4iLCIvKipcclxuICogT2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhIGxpc3Qgb2YgbWludGVybXMgYW5kIGNhbiBnZW5lcmF0ZSByYW5kb20gbGlzdHNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWludGVybXMgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuc2l6ZSA9IDQ7XHJcbiAgICB0aGlzLm1pbnRlcm1zID0gW107IC8vIExpc3Qgb2YgbnVtYmVyc1xyXG4gICAgdGhpcy5kb250Y2FyZSA9IFtdOyAvLyBMaXN0IG9mIGRvbid0IGNhcmVzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSByYW5kb20gbWludGVybXMgYW5kIG9wdGlvbmFsbHkgZG9udGNhcmVzXHJcbiAgICAgKiBAcGFyYW0gb25lQ2hhbmNlIHByb2JhYmlsaXR5IGEgbWludGVybSB3aWxsIGJlIHRydWVcclxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBwcm9iYWJpbGl0eSBpcyAwLjVcclxuICAgICAqIEBwYXJhbSBkY0NoYW5jZSBwcm9iYWJsaXR5IGEgbWludGVybSB3aWxsIGEgZG9udGNhcmVcclxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBwcm9iYWJpbGl0eSBpcyAwXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2VuZXJhdGUgPSBmdW5jdGlvbihvbmVDaGFuY2UsIGRjQ2hhbmNlKSB7XHJcbiAgICAgICAgaWYob25lQ2hhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb25lQ2hhbmNlID0gMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkY0NoYW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRjQ2hhbmNlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZG9udGNhcmUgPSBbXTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcblxyXG4gICAgICAgIHZhciBudW0gPSBNYXRoLnBvdygyLCB0aGlzLnNpemUpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBybmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBpZihybmQgPD0gb25lQ2hhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnRlcm1zLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihybmQgPiAoMSAtIGRjQ2hhbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb250Y2FyZS5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgcmFuZG9tIG1pbnRlcm1zIGFuZCBvcHRpb25hbGx5IGRvbnRjYXJlc1xyXG4gICAgICogQHBhcmFtIG9uZUNoYW5jZSBwcm9iYWJpbGl0eSBhIG1pbnRlcm0gd2lsbCBiZSB0cnVlXHJcbiAgICAgKiBJZiBvbWl0dGVkLCB0aGUgcHJvYmFiaWxpdHkgaXMgMC41XHJcbiAgICAgKiBAcGFyYW0gb25lTWluIE1pbmltdW0gYWNjZXB0YWJsZSBudW1iZXIgb2YgbWludGVybXNcclxuICAgICAqIEBwYXJhbSBvbmVNYXggTWF4aW11bSBhY2NlcHRhYmxlIG51bWJlciBvZiBtaW50ZXJtc1xyXG4gICAgICogQHBhcmFtIGRjQ2hhbmNlIHByb2JhYmxpdHkgYSBtaW50ZXJtIHdpbGwgYSBkb250Y2FyZVxyXG4gICAgICogSWYgb21pdHRlZCwgdGhlIHByb2JhYmlsaXR5IGlzIDBcclxuICAgICAqIEBwYXJhbSBkY01pbiBNaW5pbXVtIGFjY2VwdGFibGUgbnVtYmVyIG9mIGRvbid0IGNhcmVzXHJcbiAgICAgKiBAcGFyYW0gZHhNYXggTWF4aW11bSBhY2NlcHRhYmxlIG51bWJlciBvZiBkb24ndCBjYXJlc1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdlbmVyYXRlX2JvdW5kZWQgPSBmdW5jdGlvbihvbmVDaGFuY2UsIG9uZU1pbiwgb25lTWF4LCBkY0NoYW5jZSwgZGNNaW4sIGRjTWF4KSB7XHJcbiAgICAgICAgaWYoZGNNaW4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkY01pbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRjTWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGNNYXggPSBNYXRoLnBvdygyLCB0aGlzLnNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8MTAwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUob25lQ2hhbmNlLCBkY0NoYW5jZSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWludGVybXMubGVuZ3RoID49IG9uZU1pbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWludGVybXMubGVuZ3RoIDw9IG9uZU1heCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9udGNhcmUubGVuZ3RoID49IGRjTWluICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb250Y2FyZS5sZW5ndGggPD0gZGNNYXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbWludGVybXMgbGlzdC4gVGhpcyB3aWxsIGFjY2VwdCBhbnkgbnVtYmVyIG9mIGZ1bmN0aW9uIGFyZ3VtZW50cy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWludGVybXMucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZnJvbSBhIGxpc3Qgb2YgbWludGVybXMgYXMgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBtaW50ZXJtcyBNaW50ZXJtcyBhcnJheS4gVGhlIGFycmF5IGlzIGNvcGllZC5cclxuICAgICAqIEBwYXJhbSBkb250Y2FyZSBPcHRpb25hbCBkb24ndCBjYXJlIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2V0X2Zyb20gPSBmdW5jdGlvbihtaW50ZXJtcywgZG9udGNhcmUpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gbWludGVybXMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcblxyXG4gICAgICAgIGlmKGRvbnRjYXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9udGNhcmUgPSBkb250Y2FyZS5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbnRjYXJlLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kb250Y2FyZSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0d28gbWludGVybSBsaXN0cyBhcmUgdGhlIHNhbWUuXHJcbiAgICAgKiBAcGFyYW0gb3RoZXIgT3RoZXIgTWludGVybXMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZXF1YWwgPSBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICAgIHZhciBvdGhlck1pbnRlcm1zO1xyXG5cclxuICAgICAgICBpZihvdGhlciBpbnN0YW5jZW9mIExvZ2ljLk1pbnRlcm1zKSB7XHJcbiAgICAgICAgICAgIG90aGVyTWludGVybXMgPSBvdGhlci5taW50ZXJtcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdGhlck1pbnRlcm1zID0gb3RoZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlck1pbnRlcm1zLmxlbmd0aCAhPT0gdGhpcy5taW50ZXJtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8b3RoZXJNaW50ZXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAob3RoZXJNaW50ZXJtc1tpXSAhPSB0aGlzLm1pbnRlcm1zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihtaW50ZXJtKSB7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMubWludGVybXMpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5taW50ZXJtc1tpXSA9PSBtaW50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWludGVybXMucHVzaChtaW50ZXJtKTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ID0gZnVuY3Rpb24od2l0aEJyZWFrKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgcmV0ID0gJyc7XHJcbiAgICAgICAgdmFyIGNyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMubWludGVybXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9ICcsICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2l0aEJyZWFrID09PSB0cnVlICYmICFjciAmJiByZXQubGVuZ3RoID4gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9ICc8YnI+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXQgKz0gJ20nICsgdGhpcy5taW50ZXJtc1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0X2RvbnRjYXJlID0gZnVuY3Rpb24od2l0aEJyZWFrKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgcmV0ID0gJyc7XHJcbiAgICAgICAgdmFyIGNyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMuZG9udGNhcmUpIHtcclxuICAgICAgICAgICAgaWYoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gJywgJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYod2l0aEJyZWFrID09PSB0cnVlICYmICFjciAmJiByZXQubGVuZ3RoID4gNDApIHtcclxuICAgICAgICAgICAgICAgIGNyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldCArPSAnPGJyPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldCArPSAnbScgKyB0aGlzLmRvbnRjYXJlW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1F1aW5lTWNDbHVza2V5RGF0YUN0cmx9IGZyb20gXCIuL3FtY1wiO1xyXG5cclxuLyoqXHJcbiAqIFNvbHZlciBmb3IgY2lyY3VpdCBtaW5pbWl6YXRpb24gYmFzZWQgb24gUXVpbmUgTWNDbHVza2V5IGFsZ29yaXRobS5cclxuICogVGhpcyB1c2VzIHRoZSBpbXBsZW1lbnRpb24gaW4gcW1jLmpzLCBidXQgYWRhcHRzIHRoZSBpbnRlcmZhY2VcclxuICogdG8gbWF0Y2ggdGhlIHZhcmlhYmxlIG5hbWVzIEkgdXNlLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleVNvbHZlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRoaXMucW0gPSBuZXcgUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCgpO1xyXG5cclxuICAgIHRoaXMubGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snXTtcclxuXHJcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbihudW1WYXJzKSB7XHJcbiAgICAgICAgdGhpcy5xbS5pbml0KG51bVZhcnMpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzaXplID0gTWF0aC5wb3coMiwgdGhpcy5xbS5ub09mVmFycyk7XHJcbiAgICAgICAgdGhpcy5xbS5hbGxvd0RvbnRDYXJlID0gdHJ1ZTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5xbS5zZXRGdW5jRGF0YShpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBtaW50ZXJtXHJcbiAgICAgKiBAcGFyYW0gbWludGVybSBNaW50ZXJtIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbHVlIHRydWUsIGZhbHNlLCBvciB1bmRlZmluZWQgZm9yIGRvbnRjYXJlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24obWludGVybSwgdmFsdWUpIHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnFtLnNldEZ1bmNEYXRhKG1pbnRlcm0sIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucW0uc2V0RnVuY0RhdGEobWludGVybSwgMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5xbS5zZXRGdW5jRGF0YShtaW50ZXJtLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb21wdXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5xbS5jb21wdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5udW1fdGVybXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcW0gPSB0aGlzLnFtO1xyXG5cclxuICAgICAgICB2YXIgZXhwID0gXCJcIjtcclxuICAgICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZihxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIwXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICBxbS5taW5pbWFsVGVybVByaW1zWzBdLnRlcm1TdHJpbmcgPT09ICcxJykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMb29wIG92ZXIgdGhlIHJlc3VsdHNcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKCFmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgZXhwICs9IFwiK1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gRmluZCBzbWFsbGVzdCBwcmltZSBpbXBsaWNhbnQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHN0cmljdGx5IG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAvLyBidXQgSSBkb24ndCB0cnVzdCB0aGUgbWV0aG9kIHRoZXkgdXNlXHJcbiAgICAgICAgICAgIC8vIHRoYXQgc3RvcHMgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvZiBhXHJcbiAgICAgICAgICAgIC8vIGZvci9pbiBsb29wLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBtaW50ZXJtO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByaW1UZXJtID0gcW0ubWluaW1hbFRlcm1Qcmltc1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaW1wIGluIHByaW1UZXJtLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludGVybSA9IGltcDtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpbXAgPCBtaW50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnRlcm0gPSBpbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtaW50ZXJtIGlzIGEgbWludGVybSB0aGF0IGlzIG5lZWRlZFxyXG4gICAgICAgICAgICAvLyBleGNlcHQgdGhhdCBzb21lIGJpdHMgY2FuIGJlIG1hc2tlZCBvZmZcclxuXHJcbiAgICAgICAgICAgIC8vIEkgY291bnQgYmFja3dhcmRzLCBzaW5jZSBJIHByZWZlclxyXG4gICAgICAgICAgICAvLyB0aGUgbW9zdCBzaWduaWZpY2FudCB2YWx1ZSB0byBiZSBBXHJcbiAgICAgICAgICAgIC8vIHRvIG1hdGNoIHRoZSBjb3Vyc2UgbWF0ZXJpYWxzLlxyXG4gICAgICAgICAgICB2YXIgb25lID0gMSA8PCAocW0ubm9PZlZhcnMgLSAxKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGEgYml0IGlzIHNldCBpbiBwcmltVGVybS5pbXBsaWNhbnQuYml0TWFzayxcclxuICAgICAgICAgICAgLy8gdGhhdCB0ZXJtIGlzIG5vdCBuZWVkZWQuXHJcbiAgICAgICAgICAgIHZhciBuZWVkZWQgPSAofnByaW1UZXJtLmltcGxpY2FudC5iaXRNYXNrKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXJtID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHYgPSBxbS5ub09mVmFycy0xOyB2ID49IDAgOyB2LS0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB2MSA9IHFtLm5vT2ZWYXJzIC0gdiAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG5lZWRlZCAmIG9uZSkgPT09IG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobWludGVybSAmIG9uZSkgPT09IG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICs9IHRoaXMubGFiZWxzW3YxXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICs9IHRoaXMubGFiZWxzW3YxXSArIFwiJ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uZSA9IG9uZSA+PiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHAgKz0gdGVybTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgVGhvcnN0ZW4gVGhvcm1hZWhsZW4sIE1hcmJ1cmcsIDIwMTMsIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuLy8gQ29udGFjdDogd3d3LnRob3JtYWUuZGVcclxuXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgd3JpdHRlbiBmb3IgZWR1Y2F0aW9uYWwgKG5vbi1jb21tZXJjaWFsKSBwdXJwb3NlLiBcclxuLy8gVGhlcmUgaXMgbm8gd2FycmFudHkgb3Igb3RoZXIgZ3VhcmFudGVlIG9mIGZpdG5lc3MgZm9yIHRoaXMgc29mdHdhcmUsIFxyXG4vLyBpdCBpcyBwcm92aWRlZCBzb2xlbHkgXCJhcyBpc1wiLiBcclxuXHJcbmZ1bmN0aW9uIFBldHJpY2tNZXRob2QoKVxyXG57XHJcbiAgdGhpcy5wcm9ibGVtO1xyXG4gIHRoaXMubWF4UHJvYmxlbVNpemUgPSAxMDA7XHJcbiAgdGhpcy5zb2x1dGlvbjtcclxuICB0aGlzLmxvZyA9IFwiXCI7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIFxyXG4gIHRoaXMudGVzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGFuZEFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgb3JBcnJheTtcclxuICAgIHZhciBtb25vbUE7XHJcbiAgICB2YXIgbW9ub21CO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpOyAvLyB1c2luZyBvYmplY3RzIGVuc3VyZXMgdGhhdCAoeCBhbmQgeCkgPSB4XHJcbiAgICBtb25vbUFbMV0gPSAxO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbMl0gPSAyO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzNdID0gMztcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzRdID0gNDtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVsxXSA9IDE7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQlszXSA9IDM7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUFbNV0gPSA1O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbNl0gPSA2O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzJdID0gMjtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzVdID0gNTtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVs0XSA9IDQ7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQls2XSA9IDY7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICAvKm9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7IFxyXG4gICAgIG1vbm9tQVs0XSA9IDQ7XHJcbiAgICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgIG1vbm9tQls0XSA9IDQ7XHJcbiAgICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICAgYW5kQXJyYXkucHVzaChvckFycmF5KTsqL1xyXG4gICAgXHJcbiAgICB0aGlzLnNvbHZlKGFuZEFycmF5KTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNvbHZlID0gZnVuY3Rpb24oZXEpIHtcclxuXHJcbiAgICB0aGlzLnByb2JsZW0gPSBlcTtcclxuICAgIHRoaXMubG9nID0gXCJcIjtcclxuICAgIFxyXG4gICAgLy9wcmludEVxbkFycmF5KGVxKTtcclxuICAgIHByaW50RXFuQXJyYXlGYW5jeShlcSk7XHJcbiAgICBcclxuICAgIC8vIG11bHRpcGx5IG91dFxyXG4gICAgdmFyIGFuZEFycmF5ID0gZXE7XHJcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xyXG4gICAgd2hpbGUgKGFuZEFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgdmFyIG5ld0FuZEFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYW5kQXJyYXkubGVuZ3RoOyBpICs9IDIpIHtcclxuXHJcbiAgICAgICAgdmFyIG9yVGVybUEgPSBhbmRBcnJheVtpIC0gMV07XHJcbiAgICAgICAgdmFyIG9yVGVybUIgPSBhbmRBcnJheVtpXTtcclxuICAgICAgICB2YXIgbmV3T3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgb3JUZXJtQS5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgZm9yICh2YXIgYiA9IDA7IGIgPCBvclRlcm1CLmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHZhciBtb25vbTEgPSBvclRlcm1BW2FdO1xyXG4gICAgICAgICAgICB2YXIgbW9ub20yID0gb3JUZXJtQltiXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdGluZ01vbm9tID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBtIGluIG1vbm9tMSkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdGluZ01vbm9tW21vbm9tMVttXV0gPSBtb25vbTFbbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBtb25vbTIpIHtcclxuICAgICAgICAgICAgICByZXN1bHRpbmdNb25vbVttb25vbTJbbl1dID0gbW9ub20yW25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld09yQXJyYXkucHVzaChyZXN1bHRpbmdNb25vbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdBbmRBcnJheS5wdXNoKG5ld09yQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIHVuZXZlbiBjb3B5IGxhc3QgYW5kLXRlcm1cclxuICAgICAgaWYgKGFuZEFycmF5Lmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICBuZXdBbmRBcnJheS5wdXNoKGFuZEFycmF5W2FuZEFycmF5Lmxlbmd0aCAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgICAvL3ByaW50RXFuQXJyYXkobmV3QW5kQXJyYXkpO1xyXG4gICAgICBwcmludEVxbkFycmF5RmFuY3kobmV3QW5kQXJyYXkpO1xyXG4gICAgICBcclxuICAgICAgYW5kQXJyYXkubGVuZ3RoID0gMDtcclxuICAgICAgLy8gc2ltcGxpZnkgb3ItdGVybVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0FuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG9yVGVybSA9IG5ld0FuZEFycmF5W2ldO1xyXG4gICAgICAgIHZhciBuZXdPclRlcm0gPSBzaW1wbGlmeU9yVGVybShvclRlcm0pO1xyXG4gICAgICAgIGlmIChuZXdPclRlcm0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgYW5kQXJyYXkucHVzaChuZXdPclRlcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHByb2JsZW1TaXplID0gZXFuQXJyYXlQcm9ibGVtU2l6ZShhbmRBcnJheSk7XHJcbiAgICAgIGlmIChwcm9ibGVtU2l6ZSA+IHRoaXMubWF4UHJvYmxlbVNpemUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBUaGUgY3ljbGljIGNvdmVyaW5nIHByb2JsZW0gaXMgdG9vIGxhcmdlIHRvIGJlIHNvbHZlZCB3aXRoIFBldHJpY2sncyBtZXRob2QgKGluY3JlYXNlIG1heFByb2JsZW1TaXplKS4gU2l6ZT1cIiArIHByb2JsZW1TaXplKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vcHJpbnRFcW5BcnJheShhbmRBcnJheSk7XHJcbiAgICAgIHByaW50RXFuQXJyYXlGYW5jeShhbmRBcnJheSk7XHJcbiAgICAgIGxvb3BDb3VudGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvbHV0aW9uID0gYW5kQXJyYXk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaW1wbGlmeU9yVGVybShvclRlcm0pIHtcclxuICAgIC8vIGZpbmQgYSBtb25vbSB0aGF0IGlzIHRoZSBzYW1lIG9yIHNpbXBsZXIgdGhhbiBhbm90aGVyIG9uZVxyXG4gICAgdmFyIG5ld09yVGVybSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIG1hcmtlZEZvckRlbGV0aW9uID0gbmV3IE9iamVjdCgpO1xyXG4gICAgZm9yICh2YXIgYSA9IDA7IGEgPCBvclRlcm0ubGVuZ3RoOyBhKyspIHtcclxuICAgICAgdmFyIGtlZXBBID0gdHJ1ZTtcclxuICAgICAgdmFyIG1vbm9tQSA9IG9yVGVybVthXTtcclxuICAgICAgZm9yICh2YXIgYiA9IGEgKyAxOyBiIDwgb3JUZXJtLmxlbmd0aCAmJiBrZWVwQTsgYisrKSB7XHJcbiAgICAgICAgdmFyIG1vbm9tQiA9IG9yVGVybVtiXTtcclxuICAgICAgICB2YXIgb3ZlcmxhcEJvdmVyQSA9IDA7XHJcbiAgICAgICAgdmFyIGxlbmd0aEEgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIG0gaW4gbW9ub21BKSB7XHJcbiAgICAgICAgICBpZiAobW9ub21CW21dIGluIG1vbm9tQSkge1xyXG4gICAgICAgICAgICBvdmVybGFwQm92ZXJBKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZW5ndGhBKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3ZlcmxhcEFvdmVyQiA9IDA7XHJcbiAgICAgICAgdmFyIGxlbmd0aEIgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIG0gaW4gbW9ub21CKSB7XHJcbiAgICAgICAgICBpZiAobW9ub21BW21dIGluIG1vbm9tQikge1xyXG4gICAgICAgICAgICBvdmVybGFwQW92ZXJCKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZW5ndGhCKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3ZlcmxhcEJvdmVyQSA9PT0gbGVuZ3RoQikge1xyXG4gICAgICAgICAga2VlcEEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZW5ndGhBIDwgbGVuZ3RoQiAmJiBvdmVybGFwQW92ZXJCID09PSBsZW5ndGhBKSB7XHJcbiAgICAgICAgICBtYXJrZWRGb3JEZWxldGlvbltiXSA9IGI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBpZiAoa2VlcEEpIHtcclxuICAgICAgICBpZiAoYSBpbiBtYXJrZWRGb3JEZWxldGlvbikge1xyXG4gICAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgbmV3T3JUZXJtLnB1c2gob3JUZXJtW2FdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09yVGVybTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBwcmludEVxbkFycmF5RmFuY3koYW5kQXJyYXkpIHtcclxuICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICBzdHIgKz0gXCIoXCI7XHJcbiAgICAgIHZhciBvckFycmF5ID0gYW5kQXJyYXlbaV07XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3JBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmICghZmlyc3QpXHJcbiAgICAgICAgICBzdHIgKz0gXCIgJm9yOyBcIjtcclxuICAgICAgICB2YXIgbW9ub20gPSBvckFycmF5W2pdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbW9ub20pIHtcclxuICAgICAgICAgIHN0ciArPSBcIjxpPnA8L2k+PHN1Yj48c21hbGw+XCIrIG1vbm9tW2tdICsgXCI8L3NtYWxsPjwvc3ViPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHN0ciArPSBcIilcIjtcclxuICAgIH1cclxuICAgIGlmKHRoYXQubG9nLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhhdC5sb2cgKz0gXCI8cD4maEFycjsmbmJzcDtcIiArIHN0ciArIFwiPC9wPlwiO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoYXQubG9nICs9IFwiPHA+XCIrIHN0ciArIFwiPC9wPlwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBlcW5BcnJheVByb2JsZW1TaXplKGFuZEFycmF5KSB7XHJcbiAgICB2YXIgbW9ub21Db3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5kQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG9yQXJyYXkgPSBhbmRBcnJheVtpXTtcclxuICAgICAgbW9ub21Db3VudGVyICs9IG9yQXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbm9tQ291bnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgZnVuY3Rpb24gcHJpbnRFcW5BcnJheShhbmRBcnJheSkge1xyXG4gICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICAgIHN0ciArPSBcIihcIjtcclxuICAgICAgdmFyIG9yQXJyYXkgPSBhbmRBcnJheVtpXTtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvckFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKCFmaXJzdClcclxuICAgICAgICAgIHN0ciArPSBcIiBvciBcIjtcclxuICAgICAgICB2YXIgbW9ub20gPSBvckFycmF5W2pdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbW9ub20pIHtcclxuICAgICAgICAgIHN0ciArPSBtb25vbVtrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBzdHIgKz0gXCIpXCI7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpbVRlcm0oKSB7XHJcbiAgdGhpcy5pbXBsaWNhbnQgPSAtMTtcclxuICB0aGlzLnRlcm1TdHJpbmcgPSBcIlwiO1xyXG4gIHRoaXMuY29sb3IgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5jb2xvcmVkVGVybVN0cmluZyA9IFwiXCI7XHJcbiAgdGhpcy51c2VkID0gZmFsc2U7XHJcbiAgdGhpcy5uZWVkZWRCeVZhciA9IG5ldyBPYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltcGxpY2FudCgpIHtcclxuICB0aGlzLmltcCA9IG5ldyBPYmplY3QoKTtcclxuICB0aGlzLmlzUHJpbSA9IGZhbHNlO1xyXG4gIHRoaXMuaXNPbmx5RG9udENhcmUgPSBmYWxzZTtcclxuICB0aGlzLmJpdE1hc2sgPSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbXBsaWNhbnRHcm91cCgpIHtcclxuICB0aGlzLmdyb3VwID0gbmV3IEFycmF5O1xyXG4gIHRoaXMub3JkZXIgPSAtMTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpbVRlcm1UYWJsZShvcmQpIHtcclxuICB0aGlzLmVzc2VudGlhbFByaW1UZXJtcyA9IG5ldyBBcnJheSgpO1xyXG4gIHRoaXMub3JkZXIgPSBvcmQ7XHJcbiAgdGhpcy5yZW1haW5pbmdWYXJzID0gIG5ldyBBcnJheSgpOztcclxuICB0aGlzLnJlbWFpbmluZ1ByaW1UZXJtcyA9ICBuZXcgQXJyYXkoKTtcclxuICB0aGlzLnN1cGVyc2VkZWRQcmltVGVybXMgPSAgbmV3IEFycmF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhzdlRvUmdiKGgsIHMsIHYpIHtcclxuXHJcbiAgdmFyIHIsIGcsIGI7XHJcbiAgdmFyIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcclxuICB2YXIgZiA9IGggKiA2IC0gaTtcclxuICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xyXG4gIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xyXG4gIHZhciB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpO1xyXG5cclxuICBzd2l0Y2ggKGkgJSA2KSB7XHJcbiAgY2FzZSAwOlxyXG4gICAgciA9IHYsIGcgPSB0LCBiID0gcDtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgMTpcclxuICAgIHIgPSBxLCBnID0gdiwgYiA9IHA7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDI6XHJcbiAgICByID0gcCwgZyA9IHYsIGIgPSB0O1xyXG4gICAgYnJlYWs7XHJcbiAgY2FzZSAzOlxyXG4gICAgciA9IHAsIGcgPSBxLCBiID0gdjtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgNDpcclxuICAgIHIgPSB0LCBnID0gcCwgYiA9IHY7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDU6XHJcbiAgICByID0gdiwgZyA9IHAsIGIgPSBxO1xyXG4gICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gWyBNYXRoLmZsb29yKHIgKiAyNTUpLCBNYXRoLmZsb29yKGcgKiAyNTUpLCBNYXRoLmZsb29yKGIgKiAyNTUpIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleURhdGFDdHJsID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5ub09mVmFycyA9IC0xO1xyXG4gIHRoaXMuZnVuY2RhdGEgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5wcmltVGVybXMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5pbXBsaWNhbnRHcm91cHMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5taW5pbWFsVGVybSA9IFwiXCI7XHJcbiAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIlwiO1xyXG4gIHRoaXMubWluaW1hbFRlcm1QcmltcyA9IG5ldyBBcnJheTtcclxuICB0aGlzLnByaW1UZXJtVGFibGVzID0gbmV3IEFycmF5O1xyXG4gIHRoaXMucGV0cmlja1NvbHZlciA9IG5ldyBQZXRyaWNrTWV0aG9kKCk7XHJcbiAgdGhpcy5wZXRyaWNrVGVybVByaW1zID0gbmV3IEFycmF5O1xyXG4gIHRoaXMuYWxsb3dEb250Q2FyZSA9IGZhbHNlO1xyXG4gIFxyXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKG5vKSB7XHJcbiAgICB0aGlzLm5vT2ZWYXJzID0gbm87XHJcbiAgICB0aGlzLmZ1bmNkYXRhLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnByaW1UZXJtcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5pbXBsaWNhbnRHcm91cHMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMubWluaW1hbFRlcm0gPSBcIjBcIjtcclxuICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucHJpbVRlcm1UYWJsZXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucGV0cmlja1Rlcm1Qcmltcy5sZW5ndGggPSAwO1xyXG5cclxuICAgIHZhciBub09mRnVuY0RhdGEgPSBNYXRoLnBvdygyLCB0aGlzLm5vT2ZWYXJzKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9PZkZ1bmNEYXRhOyBpKyspIHtcclxuICAgICAgdGhpcy5mdW5jZGF0YS5wdXNoKDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3RoaXMucGV0cmlja1NvbHZlci50ZXN0KCk7XHJcbiAgICBcclxuICB9O1xyXG4gIFxyXG4gIHRoaXMuc2V0RnVuY0RhdGEgPSBmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMuZnVuY2RhdGEubGVuZ3RoKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmZ1bmNkYXRhW2ldID0gdmFsO1xyXG4gIH07XHJcbiAgXHJcbiAgdGhpcy5hY3RpdmF0ZWQgPSBmdW5jdGlvbihpKSB7XHJcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLmZ1bmNkYXRhLmxlbmd0aClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZnVuY2RhdGFbaV0gKz0gMTtcclxuICAgIGlmKHRoaXMuYWxsb3dEb250Q2FyZSkge1xyXG4gICAgICBpZiAodGhpcy5mdW5jZGF0YVtpXSA+IDIpIHRoaXMuZnVuY2RhdGFbaV0gPSAwO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGlmICh0aGlzLmZ1bmNkYXRhW2ldID4gMSkgdGhpcy5mdW5jZGF0YVtpXSA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbXB1dGUoKTtcclxuICB9O1xyXG4gIFxyXG4gIHRoaXMucmFuZG9tID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnVuY2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5hbGxvd0RvbnRDYXJlKSB7XHJcbiAgICAgICAgdGhpcy5mdW5jZGF0YVtpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmZ1bmNkYXRhW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZ1bmNkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZnVuY2RhdGFbaV0gPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wdXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gYml0Q291bnQodmFsdWUpIHtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHdoaWxlICh2YWx1ZSA+IDApIHtcclxuICAgICAgaWYgKCh2YWx1ZSAmIDEpID09PSAxKSBjb3VudGVyKys7XHJcbiAgICAgIHZhbHVlID4+PSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHRoaXMuY29tcHV0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5wcmltVGVybXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuaW1wbGljYW50R3JvdXBzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgdGhpcy5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnByaW1UZXJtVGFibGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIFxyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgdmFyIGxhc3RJZyA9IC0xO1xyXG4gICAgdmFyIGNvbnRpbnVlTG9vcCA9IHRydWU7XHJcbiAgICB3aGlsZShjb250aW51ZUxvb3ApIHtcclxuICAgICAgXHJcbiAgICAgIGNvbnRpbnVlTG9vcCA9IGZhbHNlO1xyXG4gICAgICB2YXIgaWcgPSBuZXcgSW1wbGljYW50R3JvdXAoKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGNvdW50ZXIgPT09IDApIHtcclxuICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZ1bmNkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgaWYodGhpcy5mdW5jZGF0YVtpXSA+IDApIHtcclxuICAgICAgICAgICAgIHZhciBpbXBsID0gbmV3IEltcGxpY2FudCgpO1xyXG4gICAgICAgICAgICAgaW1wbC5pbXBbaV0gPSBpO1xyXG4gICAgICAgICAgICAgaW1wbC5pc1ByaW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgaWcuZ3JvdXAucHVzaChpbXBsKTtcclxuICAgICAgICAgICAgIGNvbnRpbnVlTG9vcCA9IHRydWU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElnLmdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBqID0gaSsxOyBqIDwgbGFzdElnLmdyb3VwLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbXAxID0gbGFzdElnLmdyb3VwW2ldO1xyXG4gICAgICAgICAgICB2YXIgaW1wMiA9IGxhc3RJZy5ncm91cFtqXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpbXAxLmJpdE1hc2sgPT09IGltcDIuYml0TWFzaykge1xyXG5cclxuICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB2YXIgeG9yID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBpbXAxLmltcCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBpbXAyLmltcCkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgaTEgPSBpbXAxLmltcFttXTtcclxuICAgICAgICAgICAgICAgICAgdmFyIGkyID0gaW1wMi5pbXBbbl07XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaTEgKyBcIjwtPlwiICsgaTIpO1xyXG4gICAgICAgICAgICAgICAgICB4b3IgPSAoaTEgXiBpMikgJiAofmltcDEuYml0TWFzayk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChiaXRDb3VudCh4b3IpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZvdW5kIG1lcmdlIGNhbmRpZGF0ZVwiICsgaTEgKyBcIjwtPlwiICsgaTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGltcDEuaXNQcmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpbXAyLmlzUHJpbSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbXBsID0gbmV3IEltcGxpY2FudCgpO1xyXG4gICAgICAgICAgICAgICAgaW1wbC5pc1ByaW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW1wbC5iaXRNYXNrID0gaW1wMS5iaXRNYXNrIHwgeG9yO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBpbXAxLmltcClcclxuICAgICAgICAgICAgICAgICAgaW1wbC5pbXBbbV0gPSBwYXJzZUludChtKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gaW1wMi5pbXApXHJcbiAgICAgICAgICAgICAgICAgIGltcGwuaW1wW25dID0gcGFyc2VJbnQobik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kTWF0Y2ggPSBmYWxzZTsgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgY29tYmluYXRpb24gaXMgYWxyZWFkeSB0aGVyZVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBrPTA7IGsgPCBpZy5ncm91cC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZXhpc3QgPSBpZy5ncm91cFtrXTtcclxuICAgICAgICAgICAgICAgICAgdmFyIGlzVGhlU2FtZSA9IHRydWU7ICBcclxuICAgICAgICAgICAgICAgICAgIGZvcih2YXIgbSBpbiBpbXBsLmltcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBleGlzdC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KG0pID09PSBwYXJzZUludChuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgaWYoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXNUaGVTYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGlmKGlzVGhlU2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighZm91bmRNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICBpZy5ncm91cC5wdXNoKGltcGwpO1xyXG4gICAgICAgICAgICAgICAgICBjb250aW51ZUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYoY29udGludWVMb29wKSB0aGlzLmltcGxpY2FudEdyb3Vwcy5wdXNoKGlnKTtcclxuICAgICAgbGFzdElnID0gaWc7XHJcbiAgICAgIGNvdW50ZXIrKztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY29sbGVjdCBwcmltdGVybXNcclxuICAgIHRoaXMucHJpbVRlcm1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIHZhciBjb2xvciA9IDAuMDtcclxuICAgIGZvcih2YXIgaT0gdGhpcy5pbXBsaWNhbnRHcm91cHMubGVuZ3RoLTE7IGkgPj0wOyBpLS0pIHtcclxuICAgICAgdmFyIGcgPSB0aGlzLmltcGxpY2FudEdyb3Vwc1tpXS5ncm91cDtcclxuICAgIFxyXG4gICAgICBmb3IodmFyIGo9MDsgaiA8IGcubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZihnW2pdLmlzUHJpbSkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBwcmltIHRlcm1zIGludHJvZHVjZWQgYnkgZG9uJ3QgY2FyZXNcclxuICAgICAgICAgIC8vIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgMVxyXG4gICAgICAgICAgdmFyIGNvbnRhaW5zT25lID0gZmFsc2U7XHJcbiAgICAgICAgICB2YXIgYWxsRnVuY1ByaW1UZXJtID0gZ1tqXS5pbXA7XHJcbiAgICAgICAgICBmb3IodmFyIGtrIGluIGFsbEZ1bmNQcmltVGVybSkge1xyXG4gICAgICAgICAgICB2YXIgayA9IGFsbEZ1bmNQcmltVGVybVtra107XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZnVuY2RhdGFba10gPT09IDEpIHtcclxuICAgICAgICAgICAgICBjb250YWluc09uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoIWNvbnRhaW5zT25lKXtcclxuICAgICAgICAgICAgZ1tqXS5pc09ubHlEb250Q2FyZSA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcHJpbVRlcm0gPSBuZXcgUHJpbVRlcm0oKTtcclxuICAgICAgICAgICAgcHJpbVRlcm0uaW1wbGljYW50ID0gZ1tqXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGV4dHJhY3QgbWluVGVybSBhcyBzdHJpbmdcclxuICAgICAgICAgICAgZm9yICh2YXIgdGhpc1ZhbCBpbiBwcmltVGVybS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgdmFyIG1pblRlcm0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgIHZhciBvbmUgPSAxO1xyXG4gICAgICAgICAgICAgIHZhciBuZWVkZWQgPSAofnByaW1UZXJtLmltcGxpY2FudC5iaXRNYXNrKTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IHRoaXMubm9PZlZhcnM7IHYrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChuZWVkZWQgJiBvbmUpID09PSBvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzVmFsICYgb25lKSA9PT0gb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluVGVybSA9IFwiPGk+eDwvaT48c3ViPjxzbWFsbD5cIiArIHYgKyBcIjwvc21hbGw+PC9zdWI+XCIgKyBtaW5UZXJtO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pblRlcm0gPSBcIjxpPngmIzc3Mjs8L2k+PHN1Yj48c21hbGw+XCIgKyB2ICsgXCI8L3NtYWxsPjwvc3ViPlwiICsgbWluVGVybTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25lID0gb25lIDw8IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1pblRlcm0gPSBcIihcIiArIG1pblRlcm0gKyBcIilcIjtcclxuICAgICAgICAgICAgICBpZiAocHJpbVRlcm0uaW1wbGljYW50LmJpdE1hc2sgPT09IE1hdGgucG93KDIsIHRoaXMubm9PZlZhcnMpIC0gMSlcclxuICAgICAgICAgICAgICAgIG1pblRlcm0gPSBcIjFcIjtcclxuICAgICAgICAgICAgICBwcmltVGVybS5jb2xvciA9IGhzdlRvUmdiKGNvbG9yLCAxLjAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgY29sb3IgKz0gMC4yMjtcclxuICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yICUgMS4wO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgcHJpbVRlcm0udGVybVN0cmluZyA9IG1pblRlcm07XHJcbiAgICAgICAgICAgICAgdmFyIGNvbG9yU3RyID0gXCJyZ2IoXCIgKyBwcmltVGVybS5jb2xvclswXSArIFwiLFwiICsgcHJpbVRlcm0uY29sb3JbMV0gKyBcIixcIiArIHByaW1UZXJtLmNvbG9yWzJdICsgXCIpXCI7XHJcbiAgICAgICAgICAgICAgcHJpbVRlcm0uY29sb3JlZFRlcm1TdHJpbmcgPSBcIjxzcGFuIHN0eWxlPSdjb2xvcjpcIiArIGNvbG9yU3RyICsgXCInPlwiICsgbWluVGVybSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByaW1UZXJtcy5wdXNoKHByaW1UZXJtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBsb29raW5nIGZvciBlc3NlbnRpYWwgcHJpbWUgaW1wbGljYW50cyBcclxuICAgIHZhciByZW1haW5pbmcgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnVuY2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5mdW5jZGF0YVtpXSA9PT0gMSkge1xyXG4gICAgICAgIHJlbWFpbmluZ1tpXSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5wcmltVGVybVRhYmxlcy5sZW5ndGggPSAwO1xyXG4gICAgdmFyIHByaW1UYWJsZUxvb3AgPSAwO1xyXG4gICAgdmFyIHByaW1UYWJsZUZvdW5kID0gKHRoaXMucHJpbVRlcm1zLmxlbmd0aCA+IDApO1xyXG4gICAgdmFyIGN5Y2xpY0NvdmVyaW5nRm91bmQgPSBmYWxzZTtcclxuICAgIHZhciBwcmltVGVybVRhYmxlO1xyXG4gICAgd2hpbGUgKHByaW1UYWJsZUZvdW5kKSB7XHJcblxyXG4gICAgICBwcmltVGFibGVGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgcHJpbVRlcm1UYWJsZSA9IG5ldyBQcmltVGVybVRhYmxlKHByaW1UYWJsZUxvb3ApO1xyXG4gICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFycy5wdXNoKHJlbWFpbmluZ1tyXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcmltVGFibGVMb29wID09PSAwKSB7IFxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5wcmltVGVybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLnB1c2godGhpcy5wcmltVGVybXNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgcm93c1xyXG4gICAgICAgIHZhciBwcmV2VGFibGUgPSB0aGlzLnByaW1UZXJtVGFibGVzW3ByaW1UYWJsZUxvb3AtMV07IFxyXG4gICAgICAgIGZvcih2YXIgaz0wOyBrIDxwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICBpZighcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXS51c2VkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzdXBlcnNlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpbXBBID0gcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXS5pbXBsaWNhbnQuaW1wO1xyXG4gICAgICAgICAgICB2YXIgdmFyQ292ZXIgPSBuZXcgT2JqZWN0O1xyXG4gICAgICAgICAgICB2YXIgY291bnRBID0gMDtcclxuICAgICAgICAgICAgZm9yKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgIHZhciB2ID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgIGlmICh2IGluIGltcEEpIHtcclxuICAgICAgICAgICAgICAgIHZhckNvdmVyW3ZdID0gdjtcclxuICAgICAgICAgICAgICAgIGNvdW50QSsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aCAmJiAhc3VwZXJzZWRlZDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2xdLnVzZWQgJiYgayAhPT0gbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltcEIgPSBwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2xdLmltcGxpY2FudC5pbXA7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnRCID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgaW4gdmFyQ292ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIHYgPSB2YXJDb3ZlcltyXTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHYgaW4gaW1wQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50QisrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjb3VudEEgPT09IGNvdW50Qikge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgY291bnRCSW5SZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2IGluIGltcEIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50QkluUmVtYWluaW5nKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmKGNvdW50QkluUmVtYWluaW5nID4gY291bnRBKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJzZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGsgPiBsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdXBlcnNlZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighc3VwZXJzZWRlZCkge1xyXG4gICAgICAgICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLnB1c2gocHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHByZXZUYWJsZS5zdXBlcnNlZGVkUHJpbVRlcm1zLnB1c2gocHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5wcmltVGVybVRhYmxlcy5wdXNoKHByaW1UZXJtVGFibGUpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VGVybXMgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcztcclxuXHJcbiAgICAgICAgdmFyIHRvQmVSZW1vdmVkID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgICB2YXIgaSA9IHJlbWFpbmluZ1tyXTtcclxuICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICB2YXIgdGVybSA9IC0xO1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjdXJyZW50VGVybXMubGVuZ3RoICYmIGNvdW50IDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIGluIGN1cnJlbnRUZXJtc1tqXS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgdGVybSA9IGo7XHJcbiAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChjb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50VGVybXNbdGVybV0ubmVlZGVkQnlWYXJbaV0gPSBwcmltVGFibGVMb29wO1xyXG4gICAgICAgICAgICBpZighY3VycmVudFRlcm1zW3Rlcm1dLnVzZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMucHVzaChjdXJyZW50VGVybXNbdGVybV0pO1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRUZXJtc1t0ZXJtXS51c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBwcmltVGVybVRhYmxlLmVzc2VudGlhbFByaW1UZXJtcy5wdXNoKGN1cnJlbnRUZXJtc1t0ZXJtXSk7XHJcbiAgICAgICAgICAgICAgcHJpbVRhYmxlRm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlpID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlpIGluIGN1cnJlbnRUZXJtc1t0ZXJtXS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvQmVSZW1vdmVkW2lpXSA9IGlpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyByZW1vdmUgY29sdW1uc1xyXG4gICAgICAgIHZhciB0bXBSZW1haW5pbmcgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgZm9yICh2YXIgZSBpbiByZW1haW5pbmcpe1xyXG4gICAgICAgICAgdmFyIGVlID0gcmVtYWluaW5nW2VdO1xyXG4gICAgICAgICAgdG1wUmVtYWluaW5nW2VlXSA9IGVlO1xyXG4gICAgICAgICAgZGVsZXRlIHJlbWFpbmluZ1tlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKHZhciByIGluIHRtcFJlbWFpbmluZykge1xyXG4gICAgICAgICAgdmFyIHQgPSB0bXBSZW1haW5pbmdbcl07XHJcbiAgICAgICAgICBpZighKHQgaW4gdG9CZVJlbW92ZWQpKSB7XHJcbiAgICAgICAgICAgICByZW1haW5pbmcgW3RdID0gdDtcclxuICAgICAgICAgICAgIHJlbWFpbmluZ0NvdW50Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYoIHJlbWFpbmluZ0NvdW50ID09PSAwICkge1xyXG4gICAgICAgIHByaW1UYWJsZUZvdW5kID0gZmFsc2U7IC8vIGJyZWFrIGxvb3BcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYoIXByaW1UYWJsZUZvdW5kKSB7XHJcbiAgICAgICAgICBjeWNsaWNDb3ZlcmluZ0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByaW1UYWJsZUxvb3ArKztcclxuICAgIH1cclxuICAgIFxyXG4gICB2YXIgc29sdXRpb25Gb3VuZCA9IHRydWU7XHJcbiAgICBcclxuICAgIC8vIFBldHJpY2sncyBNZXRob2RcclxuICAgIGlmIChjeWNsaWNDb3ZlcmluZ0ZvdW5kKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJDeWNsaWMgY292ZXJpbmcgZm91bmRcIik7XHJcblxyXG4gICAgICB2YXIgYW5kQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgXHJcbiAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgdmFyIGlpID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICB2YXIgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICB2YXIgaW1wID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNba10uaW1wbGljYW50LmltcDtcclxuICAgICAgICAgIGlmKGlpIGluIGltcCl7XHJcbiAgICAgICAgICAgIHZhciBtb25vbSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICAgICAgbW9ub21ba10gPSBrO1xyXG4gICAgICAgICAgICBvckFycmF5LnB1c2gobW9ub20pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzb2x1dGlvbkZvdW5kID0gdGhpcy5wZXRyaWNrU29sdmVyLnNvbHZlKGFuZEFycmF5KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChzb2x1dGlvbkZvdW5kKSB7XHJcbiAgICAgICAgdmFyIHNvbHV0aW9ucyA9IHRoaXMucGV0cmlja1NvbHZlci5zb2x1dGlvblswXTtcclxuXHJcbiAgICAgICAgdmFyIGJlc3RTb2x1dGlvbiA9IC0xO1xyXG4gICAgICAgIHZhciBiZXN0Q291bnQgPSAxMDAwMDAwMDtcclxuICAgICAgICB2YXIgYmVzdFZhckNvdW50ID0gMTAwMDAwMDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb2x1dGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICBmb3IgKHZhciBqIGluIHNvbHV0aW9uc1tpXSkge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvdW50IDw9IGJlc3RDb3VudCkgeyAvLyBmaXJzdCBzb3J0IGFjY29yaW5nIHRvIG1vbm9tIGxlbmd0aFxyXG5cclxuICAgICAgICAgICAgdmFyIGZvdW5kQmVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gYmVzdENvdW50KSB7XHJcbiAgICAgICAgICAgICAgdmFyIGJlc3RWYXJDb3VudE5ldyA9IDA7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBzb2x1dGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbal0uaW1wbGljYW50LmltcCkge1xyXG4gICAgICAgICAgICAgICAgICBiZXN0VmFyQ291bnROZXcrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGJlc3RWYXJDb3VudE5ldyA+PSBiZXN0VmFyQ291bnQpXHJcbiAgICAgICAgICAgICAgICBmb3VuZEJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZvdW5kQmVzdCkge1xyXG4gICAgICAgICAgICAgIGJlc3RDb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICAgIGJlc3RTb2x1dGlvbiA9IGk7XHJcbiAgICAgICAgICAgICAgYmVzdFZhckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHNvbHV0aW9uc1tiZXN0U29sdXRpb25dKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2pdLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgYmVzdFZhckNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJCZXN0IHNvbHV0aW9uIFwiICsgYmVzdFNvbHV0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIGJlc3QgPSBzb2x1dGlvbnNbYmVzdFNvbHV0aW9uXTtcclxuICAgICAgICBmb3IgKHZhciBiIGluIGJlc3QpIHtcclxuICAgICAgICAgIHZhciBhZGRQcmltVGVybSA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2Jlc3RbYl1dO1xyXG4gICAgICAgICAgdGhpcy5taW5pbWFsVGVybVByaW1zLnB1c2goYWRkUHJpbVRlcm0pO1xyXG4gICAgICAgICAgdGhpcy5wZXRyaWNrVGVybVByaW1zLnB1c2goYWRkUHJpbVRlcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc29sdXRpb25Gb3VuZCkge1xyXG4gICAgICB0aGlzLm1pbmltYWxUZXJtID0gXCJcIjtcclxuICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIlwiO1xyXG4gICAgICB2YXIgZmlyc3RMID0gdHJ1ZTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIWZpcnN0TCkge1xyXG4gICAgICAgICAgdGhpcy5taW5pbWFsVGVybSArPSBcIiAmb3I7IFwiO1xyXG4gICAgICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gKz0gXCIgJm9yOyBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW5pbWFsVGVybSArPSB0aGlzLm1pbmltYWxUZXJtUHJpbXNbaV0udGVybVN0cmluZztcclxuICAgICAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSArPSB0aGlzLm1pbmltYWxUZXJtUHJpbXNbaV0uY29sb3JlZFRlcm1TdHJpbmc7XHJcbiAgICAgICAgZmlyc3RMID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5taW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgdGhpcy5taW5pbWFsVGVybSA9ICdFcnJvcjogVGhlIGN5Y2xpYyBjb3ZlcmluZyBwcm9ibGVtIGlzIHRvbyBsYXJnZSAoaW5jcmVhc2UgdGhlIFwibWF4UHJvYmxlbVNpemVcIiBwYXJhbWV0ZXIpJztcclxuICAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gJ0Vycm9yOiBUaGUgY3ljbGljIGNvdmVyaW5nIHByb2JsZW0gaXMgdG9vIGxhcmdlIChpbmNyZWFzZSB0aGUgXCJtYXhQcm9ibGVtU2l6ZVwiIHBhcmFtZXRlciknO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleSA9IGZ1bmN0aW9uKHBhcmVudERpdklkLCBjb2x1bW5zLCBsYW5ndWFnZSkge1xyXG4gIHZhciBteURpdiA9IC0xO1xyXG4gIHZhciBkaXZJZCA9IHBhcmVudERpdklkO1xyXG4gIHRoaXMuY29scyA9IGNvbHVtbnMgKyAxO1xyXG4gIHRoaXMucm93cyA9IE1hdGgucG93KDIsIGNvbHVtbnMpO1xyXG4gIHRoaXMuZGF0YSA9ICBuZXcgUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCgpO1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgdmFyIGxhYmVscztcclxuICBpZihsYW5ndWFnZSA9PT0gMCkge1xyXG4gICAgbGFiZWxzID0ge3R0YWJsZTpcIlRydXRoIHRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgbWluRXhwOlwiTWluaW1hbCBib29sZWFuIGV4cHJlc3Npb25cIixcclxuICAgICAgICAgICAgICBpbXBsaTpcIkltcGxpY2FudHNcIixcclxuICAgICAgICAgICAgICBvcmRlcjpcIk9yZGVyXCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0OlwiUHJpbWUgaW1wbGljYW50IGNoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0UmVkdWNlZDpcIlJlZHVjZWQgcHJpbWUgaW1wbGljYW50IGNoYXJ0IChJdGVyYXRpb25cIixcclxuICAgICAgICAgICAgICBleHRyYWN0ZWRQcmltczpcIkV4dHJhY3RlZCBlc3NlbnRpYWwgcHJpbWUgaW1wbGljYW50c1wiLFxyXG4gICAgICAgICAgICAgIGV4dHJhY3RlZE1QcmltczpcIkV4dHJhY3RlZCBwcmltZSBpbXBsaWNhbnRzXCIsXHJcbiAgICAgICAgICAgICAgcGV0cmlja3NNOlwiUGV0cmljaydzIG1ldGhvZFwifTtcclxuICB9ZWxzZXtcclxuICAgIGxhYmVscyA9IHt0dGFibGU6XCJXYWhyaGVpdHN0YWZlbFwiLFxyXG4gICAgICAgICAgICAgIG1pbkV4cDpcIk1pbmltYWxlciBib29sZXNjaGVyIEF1c2RydWNrXCIsXHJcbiAgICAgICAgICAgICAgaW1wbGk6XCJJbXBsaWthbnRlblwiLFxyXG4gICAgICAgICAgICAgIG9yZGVyOlwiT3JkbnVuZ1wiLFxyXG4gICAgICAgICAgICAgIHByaW1DaGFydDpcIlByaW1pbXBsaWthbnRlbnRhZmVsXCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0UmVkdWNlZDpcIlJlZHV6aWVydGUgUHJpbWltcGxpa2FudGVudGFmZWwgKEl0ZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4dHJhY3RlZFByaW1zOlwiRXh0cmFoaWVydGUgZXNzZW50aWVsbGUgUHJpbWltcGxpa2FudGVuXCIsXHJcbiAgICAgICAgICAgICAgZXh0cmFjdGVkTVByaW1zOlwiRXh0cmFoaWVydGUgUHJpbWltcGxpa2FudGVuXCIsXHJcbiAgICAgICAgICAgICAgcGV0cmlja3NNOlwiVmVyZmFocmVuIHZvbiBQZXRyaWNrXCJ9O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIFxyXG4gICAgdGhpcy5kYXRhLmluaXQoY29sdW1ucyk7XHJcbiAgICBcclxuICAgIG15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpZiAoIW15RGl2KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUXVpbmVNY0NsdXNrZXkgZXJyb3I6IGNhbiBub3QgY3JlYXRlIGEgY2FudmFzIGVsZW1lbnRcIik7XHJcbiAgICAgIG15RGl2ID0gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgIFxyXG4gICAgICB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xyXG4gICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIGlmKGRpdklkICE9PSBcImZha2VEaXZJZFwiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1aW5lTWNDbHVza2V5IGVycm9yOiBjYW4gbm90IGZpbmQgYW4gZWxlbWVudCB3aXRoIHRoZSBnaXZlbiBuYW1lOiBcIiArIGRpdklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXlEaXYgPSAtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG15RGl2KTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobXlEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2V0Tm9PZlZhcnMgPSBmdW5jdGlvbih2YXJzKSB7XHJcbiAgICB2YXIgYyA9IHBhcnNlSW50KHZhcnMpO1xyXG4gICAgaWYgKGMgPCAxICYmIGMgPiA2KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmNvbHMgPSBjICsgMTtcclxuICAgIHRoaXMucm93cyA9IE1hdGgucG93KDIsIGMpO1xyXG4gICAgdGhpcy5kYXRhLmluaXQoYyk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuZ2VuUmFuZG9tID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmRhdGEucmFuZG9tKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuYWxsb3dEb250Q2FyZXMgPSBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICBpZih0eXBlID4gMCkge1xyXG4gICAgICB0aGlzLmRhdGEuYWxsb3dEb250Q2FyZSA9IHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5kYXRhLmFsbG93RG9udENhcmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YS5jbGVhcigpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmRyYXdJbXBsaWNhbnRHcm91cCA9IGZ1bmN0aW9uKGcsIHBhcmVudCwgcHJpbUZsYWcsIHQsIGRyYXdQZXRyaWNrVmFycykge1xyXG4gICAgdmFyIHByaW1UZXJtVGFibGUgPSB0aGlzLmRhdGEucHJpbVRlcm1UYWJsZXNbdF07XHJcbiAgICB2YXIgbXlUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICBteVRhYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGFibGVDbGFzcycpO1xyXG4gICAgdmFyIG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIFxyXG4gICAgdmFyIGNlbGwxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICBcclxuICAgIGNlbGwxaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgIGNlbGwxaC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbDFoKTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmRhdGEubm9PZlZhcnM7IGorKykge1xyXG4gICAgICB2YXIgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiPGk+eDwvaT48c3ViPjxzbWFsbD5cIiArICh0aGlzLmRhdGEubm9PZlZhcnMtMS1qKSArIFwiPC9zbWFsbD48L3N1Yj5cIjtcclxuICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSGVhZGVyWCBxbWNCaXQnKTtcclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHByaW1GbGFnKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdWYXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGNlbGxJbXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjZWxsSW1waC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgICAgICBjZWxsSW1waC5pbm5lckhUTUwgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnNbaV0udG9TdHJpbmcoMTApO1xyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxJbXBoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgY2VsbEltcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbEltcGguc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICBjZWxsSW1waC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbEltcGgpO1xyXG5cclxuXHJcbiAgICBteVRhYmxlLmFwcGVuZENoaWxkKG15Um93KTtcclxuICAgIFxyXG4gICAgdmFyIGlNYXggPSAwO1xyXG4gICAgaWYoIXByaW1GbGFnKSBpTWF4ID0gZy5ncm91cC5sZW5ndGg7IGVsc2UgaU1heCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpTWF4OyBpKyspIHtcclxuICAgICAgdmFyIGltcGwgPSAtMTtcclxuICAgICAgaWYoIXByaW1GbGFnKSBpbXBsID0gZy5ncm91cFtpXTsgZWxzZSBpbXBsID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbaV0uaW1wbGljYW50O1xyXG4gICAgICB2YXIgYml0cyA9IDA7XHJcbiAgICAgIHZhciBtYXNrID0gaW1wbC5iaXRNYXNrO1xyXG4gICAgICBcclxuICAgICAgZm9yKHZhciBtIGluIGltcGwuaW1wKSB7XHJcbiAgICAgICAgYml0cyA9IGltcGwuaW1wW21dO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgIFxyXG4gICAgICB2YXIgY2VsbDFTdHIgPSBcIlwiO1xyXG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICBmb3IodmFyIG0gaW4gaW1wbC5pbXApIHtcclxuICAgICAgICBpZighZmlyc3QpIGNlbGwxU3RyICs9ICBcIiwgXCI7XHJcbiAgICAgICAgY2VsbDFTdHIgKz0gaW1wbC5pbXBbbV0udG9TdHJpbmcoMTApO1xyXG4gICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbDEuaW5uZXJIVE1MID0gY2VsbDFTdHIgKyBcIjpcIjtcclxuICAgICAgY2VsbDEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGwxKTtcclxuICAgICAgXHJcbiAgICAgIHZhciByZXMgPSBiaXRzLnRvU3RyaW5nKDIpO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZGF0YS5ub09mVmFyczsgaisrKSB7XHJcbiAgICAgICAgdmFyIG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jQml0Jyk7XHJcbiAgICAgICAgdmFyIHN0cjtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRCaXQgPSBNYXRoLnBvdygyLCAodGhpcy5kYXRhLm5vT2ZWYXJzIC0gMSktaik7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICBpZiAoKGN1cnJlbnRCaXQgJiBtYXNrKSA9PT0gY3VycmVudEJpdCkge1xyXG4gICAgICAgICAgc3RyID0gXCItXCI7XHJcbiAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoaiA+PSAodGhpcy5kYXRhLm5vT2ZWYXJzKSAtIHJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyID0gcmVzLmNoYXJBdChqIC0gKHRoaXMuZGF0YS5ub09mVmFycyAtIHJlcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiMFwiO1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChteUNlbGwpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgICBpZiAoIXByaW1GbGFnKSB7XHJcbiAgICAgICAgIHZhciBjZWxsTGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgIGNlbGxMYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgICAgIGlmIChpbXBsLmlzUHJpbSkge1xyXG4gICAgICAgICAgY2VsbExhc3QuaW5uZXJIVE1MID0gXCImI3gyNzEzO1wiOyAgLy9lcXVpdmFsZW50ICZjaGVjazsgaW4gbW9zdCBicm93c2Vyc1xyXG4gICAgICAgICAgaWYoaW1wbC5pc09ubHlEb250Q2FyZSl7XHJcbiAgICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IFwiICgmdGltZXM7KVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IFwiJnJhcnI7XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxMYXN0KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgZm9yICh2YXIgdiA9IDA7IHYgPCBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnMubGVuZ3RoOyB2KyspIHtcclxuICAgICAgICAgIHZhciBpaSA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFyc1t2XTtcclxuICAgICAgICAgIHZhciBjZWxsVXNlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICBjZWxsVXNlZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1ByaW1JdGVtIHFtY0JpdCcpO1xyXG4gICAgICAgICAgaWYgKGlpIGluIGltcGwuaW1wKSB7XHJcbiAgICAgICAgICAgIGNlbGxVc2VkLmlubmVySFRNTCA9IFwiJiM5Njc1O1wiO1xyXG4gICAgICAgICAgICBpZiAoaWkgaW4gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbaV0ubmVlZGVkQnlWYXIpIHtcclxuICAgICAgICAgICAgICBpZihwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tpXS5uZWVkZWRCeVZhcltpaV0gPT09IHQpIHtcclxuICAgICAgICAgICAgICAgIGNlbGxVc2VkLmlubmVySFRNTCA9IFwiPHNwYW4gc3R5bGU9J2NvbG9yOmdyZWVuOyc+JiM5Njc5Ozwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsVXNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB2YXIgY2VsbExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICBjZWxsTGFzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTsgICAgXHJcbiAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2ldLmNvbG9yZWRUZXJtU3RyaW5nOyAgXHJcbiAgICAgICAgIGlmKGRyYXdQZXRyaWNrVmFycykge1xyXG4gICAgICAgICAgIHZhciBwVmFycyA9IFwiJm5ic3A7JmVxdWl2OyZuYnNwOzxpPnA8L2k+PHN1Yj48c21hbGw+XCIgKyBpICsgXCI8L3NtYWxsPjwvc3ViPlwiO1xyXG4gICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCArPSBwVmFyczsgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbExhc3QpO1xyXG4gICAgICB9XHJcbiBcclxuICAgICAgXHJcbiAgICAgIG15VGFibGUuYXBwZW5kQ2hpbGQobXlSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChteVRhYmxlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBpZihteURpdiA9PT0gLTEpIHJldHVybjtcclxuXHJcbiAgICAvLyBjbGVhbiB1cFxyXG4gICAgdmFyIG9sZElubmVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQrXCJfaW5uZXJEaXZcIik7XHJcbiAgICBpZiAob2xkSW5uZXJEaXYpIG15RGl2LnJlbW92ZUNoaWxkKG9sZElubmVyRGl2KTtcclxuICAgIFxyXG4gICAgdmFyIG15SW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG15SW5uZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGRpdklkK1wiX2lubmVyRGl2XCIpO1xyXG4gICAgXHJcblxyXG4gICAgdmFyIG15VHJ1dGhUYWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbXlUcnV0aFRhYmxlRGl2LmlubmVySFRNTCA9IFwiPGRpdj5cIiArIGxhYmVsc1sndHRhYmxlJ10gKyBcIjo8L2Rpdj5cIjtcclxuICAgIG15VHJ1dGhUYWJsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlTGFiZWxEaXYnKTtcclxuICAgIFxyXG4gICAgLy8gcmUtZ2VuZXJhdGVcclxuICAgIHZhciBteVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgIG15VGFibGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUYWJsZUNsYXNzJyk7XHJcblxyXG4gICAgdmFyIG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIFxyXG4gICAgdmFyIGNlbGwxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICAgICAgXHJcbiAgICBjZWxsMWguaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNlbGwxaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGwxaCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgdmFyIG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgIGlmIChqIDwgdGhpcy5jb2xzIC0gMSkge1xyXG4gICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBcIjxpPng8L2k+PHN1Yj48c21hbGw+XCIgKyAodGhpcy5jb2xzLTItaikgKyBcIjwvc21hbGw+PC9zdWI+XCI7XHJcbiAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSGVhZGVyWCBxbWNCaXQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCI8aT55PC9pPlwiO1xyXG4gICAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0hlYWRlclkgcW1jQml0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcclxuICAgIH1cclxuICAgIG15VGFibGUuYXBwZW5kQ2hpbGQobXlSb3cpO1xyXG4gICBcclxuXHJcbiAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgIFxyXG4gICAgICBjZWxsMS5pbm5lckhUTUwgPSBpLnRvU3RyaW5nKDEwKSArIFwiOlwiO1xyXG4gICAgICBjZWxsMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlcyA9IGkudG9TdHJpbmcoMik7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICB2YXIgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcbiAgICAgICAgaWYgKGogPCB0aGlzLmNvbHMgLSAxKSB7IC8vIHggZWxlbWVudFxyXG4gICAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jQml0Jyk7XHJcbiAgICAgICAgICB2YXIgc3RyO1xyXG4gICAgICAgICAgaWYgKGogPj0gKHRoaXMuY29scyAtIDEpIC0gcmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdHIgPSByZXMuY2hhckF0KGogLSAoKHRoaXMuY29scyAtIDEpIC0gcmVzLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gXCIwXCI7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHsgLy8geSBlbGVtZW50XHJcbiAgICAgICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNCaXQgcW1jQml0WScpO1xyXG4gICAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBpKTtcclxuICAgICAgICAgIG15Q2VsbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIG15Q2VsbE1vdXNlRG93bihldmVudCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuZnVuY2RhdGFbaV0gPT09IDApIHtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiMFwiO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuZnVuY2RhdGFbaV0gPT09IDEpIHtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiMVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5mdW5jZGF0YVtpXSA9PT0gMikge1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKG15Q2VsbCk7XHJcbiAgICAgIH1cclxuICAgICAgbXlUYWJsZS5hcHBlbmRDaGlsZChteVJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgbXlUcnV0aFRhYmxlRGl2LmFwcGVuZENoaWxkKG15VGFibGUpO1xyXG4gICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZChteVRydXRoVGFibGVEaXYpO1xyXG4gICAgXHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGkgPCB0aGlzLmRhdGEuaW1wbGljYW50R3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBteUltcGxpY2FudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBteUltcGxpY2FudERpdi5pbm5lckhUTUwgPSBcIjxkaXY+XCIrIGxhYmVsc1snaW1wbGknXSArIFwiIChcIiArIGxhYmVsc1snb3JkZXInXSArIFwiIFwiK2krXCIpOjwvZGl2PlwiO1xyXG4gICAgICBteUltcGxpY2FudERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlTGFiZWxEaXYnKTtcclxuICAgICAgdGhpcy5kcmF3SW1wbGljYW50R3JvdXAodGhpcy5kYXRhLmltcGxpY2FudEdyb3Vwc1tpXSwgIG15SW1wbGljYW50RGl2LCBmYWxzZSwgMCwgZmFsc2UpO1xyXG4gICAgICBteUlubmVyRGl2LmFwcGVuZENoaWxkKG15SW1wbGljYW50RGl2KTsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICBcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnByaW1UZXJtVGFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciByZXN1bHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaWYoaSA9PT0gMCApIHtcclxuICAgICAgICByZXN1bHREaXYuaW5uZXJIVE1MID0gXCI8cD5cIiArIGxhYmVsc1sncHJpbUNoYXJ0J10gKyBcIjo8L3BcIjtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmVzdWx0RGl2LmlubmVySFRNTCA9IFwiPHA+IFwiICtsYWJlbHNbJ3ByaW1DaGFydFJlZHVjZWQnXSArIFwiIFwiICsgKGktMSkgKyBcIik6PC9wPlwiO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIHJlc3VsdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlUmVzdWx0RGl2Jyk7XHJcblxyXG4gICAgICB2YXIgZHJhd1BldHJpY2tWYXJzID0gZmFsc2U7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5wZXRyaWNrVGVybVByaW1zLmxlbmd0aCA+IDAgJiYgaSA9PT0gdGhpcy5kYXRhLnByaW1UZXJtVGFibGVzLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgZHJhd1BldHJpY2tWYXJzID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5kcmF3SW1wbGljYW50R3JvdXAodGhpcy5kYXRhLnByaW1UZXJtcywgcmVzdWx0RGl2LCB0cnVlLCBpLCBkcmF3UGV0cmlja1ZhcnMpO1xyXG4gICAgICBcclxuICAgICAgdmFyIGVzc1BUZXJtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2YXIgZXNzUFRlcm1zU3RyID0gXCJcIjtcclxuICAgICAgdmFyIHByaW1UZXJtVGFibGUgPSB0aGlzLmRhdGEucHJpbVRlcm1UYWJsZXNbaV07XHJcbiAgICAgIHZhciBqaiA9IHByaW1UZXJtVGFibGUuZXNzZW50aWFsUHJpbVRlcm1zLmxlbmd0aDtcclxuICAgICAgZm9yKHZhciBqPTA7IGogPCBqajsgaisrKSB7XHJcbiAgICAgICAgZXNzUFRlcm1zU3RyICs9IHByaW1UZXJtVGFibGUuZXNzZW50aWFsUHJpbVRlcm1zW2pdLmNvbG9yZWRUZXJtU3RyaW5nO1xyXG4gICAgICAgIGlmKGogIT09IChqai0xKSkgZXNzUFRlcm1zU3RyICs9IFwiLCBcIjtcclxuICAgICAgfVxyXG4gICAgICBpZihqaiA+IDApIHtcclxuICAgICAgIGVzc1BUZXJtc0Rpdi5pbm5lckhUTUwgPSBcIjxwPlwiICsgbGFiZWxzWydleHRyYWN0ZWRQcmltcyddICtcIjogPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIGVzc1BUZXJtc1N0ciArIFwiPC9zcGFuPjwvcD5cIjtcclxuICAgICAgIGVzc1BUZXJtc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0luZGVudCcpO1xyXG4gICAgICAgcmVzdWx0RGl2LmFwcGVuZENoaWxkKGVzc1BUZXJtc0Rpdik7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZChyZXN1bHREaXYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgcGV0cmlja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwZXRyaWNrRGl2LmlubmVySFRNTCA9IFwiPHA+IFwiICsgbGFiZWxzWydwZXRyaWNrc00nXSArIFwiIDwvcD5cIjtcclxuXHJcbiAgICAgIHZhciBwZXRyaWNrSW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcGV0cmlja0lubmVyRGl2LmlubmVySFRNTCA9IFwiPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIHRoaXMuZGF0YS5wZXRyaWNrU29sdmVyLmxvZyArIFwiPC9zcGFuPlwiO1xyXG4gICAgICBwZXRyaWNrSW5uZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNJbmRlbnQnKTtcclxuICAgICAgcGV0cmlja0Rpdi5hcHBlbmRDaGlsZChwZXRyaWNrSW5uZXJEaXYpO1xyXG5cclxuICAgICAgdmFyIHBldHJpY2tFc3NUZXJtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2YXIgcGV0cmlja0Vzc1Rlcm1zU3RyID0gXCJcIjtcclxuICAgICAgdmFyIGpqID0gdGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGpqOyBqKyspIHtcclxuICAgICAgICBwZXRyaWNrRXNzVGVybXNTdHIgKz0gdGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXNbal0uY29sb3JlZFRlcm1TdHJpbmc7XHJcbiAgICAgICAgaWYgKGogIT09IChqaiAtIDEpKVxyXG4gICAgICAgICAgcGV0cmlja0Vzc1Rlcm1zU3RyICs9IFwiLCBcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoamogPiAwKSB7XHJcbiAgICAgICAgcGV0cmlja0Vzc1Rlcm1zRGl2LmlubmVySFRNTCA9IFwiPHA+XCIgKyBsYWJlbHNbJ2V4dHJhY3RlZE1QcmltcyddICsgXCIgKFwiICsgbGFiZWxzWydwZXRyaWNrc00nXSArIFwiKTogPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIHBldHJpY2tFc3NUZXJtc1N0ciArIFwiPC9zcGFuPjwvcD5cIjtcclxuICAgICAgICBwZXRyaWNrRXNzVGVybXNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNJbmRlbnQnKTtcclxuICAgICAgICBwZXRyaWNrRGl2LmFwcGVuZENoaWxkKHBldHJpY2tFc3NUZXJtc0Rpdik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgIG15SW5uZXJEaXYuYXBwZW5kQ2hpbGQocGV0cmlja0Rpdik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgdmFyIHRlcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRlcm1EaXYuaW5uZXJIVE1MID0gXCI8cD48c3Ryb25nPlwiICsgbGFiZWxzWydtaW5FeHAnXSsgXCI6PC9zdHJvbmc+IDwvcD4gPHAgPjxzcGFuIGNsYXNzPSdxbWNNYXRoRm9udCc+PGk+eTwvaT4mbmJzcDs9Jm5ic3A7XCIgKyB0aGlzLmRhdGEuY29sb3JlZE1pbmltYWxUZXJtOyArXCI8L3NwYW4+PC9wPlwiO1xyXG4gICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZCh0ZXJtRGl2KTtcclxuICAgIG15RGl2LmFwcGVuZENoaWxkKG15SW5uZXJEaXYpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG15Q2VsbE1vdXNlRG93bihlKSB7XHJcblxyXG4gICAgdmFyIHRhcmc7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgdGFyZyA9IGUudGFyZ2V0O1xyXG4gICAgfSBlbHNlIHsgLy8gZGVhbCB3aXRoIE1pY3Jvc29mdFxyXG4gICAgICBpZiAoZS5zcmNFbGVtZW50KVxyXG4gICAgICAgIHRhcmcgPSBlLnNyY0VsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGFyZy5ub2RlVHlwZSA9PT0gMykgeyAvLyBkZWFsIHdpdGggU2FmYXJpXHJcbiAgICAgIHRhcmcgPSB0YXJnLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB2YXIgaSA9IHBhcnNlSW50KHRhcmcudGl0bGUpO1xyXG4gICAgdGhhdC5kYXRhLmFjdGl2YXRlZChpKTtcclxuXHJcbiAgICB0aGF0LnVwZGF0ZSgpO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFDRFVsRVFWUTR5NDJSVDBpVGNSakhuNG1VUWczbXU3bVhKZTgyRjhvY3FOQVlTckNKV0V2b0VFSWdaalFNdkF3UEJpSjBNUWd2Q2laVFNuZEk4YVFVQXkvZHBCMzgwMEdKcVNWSURJMGRKcThnaWpMenNFK0hnU0pOMTNON251ZjcrZjU0dmo5aGUvc0dnNFBQQ1FZL01UUHpqSFM2V0FvVThmZ2QxdGFxY2sxajQyY1VCY3htTUJvaEZIcC9MYnkrYnFhaDRSZE5UZC9aM0hRSmJyZU8wWmd6Y0x2QmFvWCsvdGQ1NGNuSlRtcHJkN0ZZb0x3YzJ0cmVDcU9qelhSM3Z5RVFXTWJwaE9abUtDdURhTFRqRWh5TFBVWlJPSWVycTQ4WkdPaStFT3p2R3dpSFArRHhnTjhQRmt1R2hZWDdJaUxNendmUXRHTlVGVXdtY0RvUGlFUWU1TDh4R2czaDkyZlFOUEI2ZnpBMzl3aUhJMzJlVVh2N0YyWm43ZGVuUERGeEQ2ODNpYUtBelhhR3FvTFZtbVZvcUk5TXhsRG9sM0ltUzB2MU9CeW5xR291NEVqa1pUNWQwWlVPc2RnTE9UeThLZGtzY25vcXNydGI5Vjh2aTRnd1BkMUphU2s0SEFjTUR6K2xwK2NkSlNVd05kVlJHSTdIZlNqS0gycHFVaXd2MTUvUHcrR1BtRXhuTEM3ZXZScmUySERqZE9yVTFlMlFTRlJlMnAyY0ZCTU1maVVRV01rUGIyM1owVFNkbHBadnJLNGE4MnAwL1RZZXp3N2o0Ni8rWGJhMnJ1RHovVVRYemRlZU9EWVd4bVk3WW05UHVSajI5azdTMWJWQUtxVVZ6Q2laVkhHNTlvbEVub2lJRkpGSTFJamRyc3ZJeUVORFJjWHZRZ2FHeXNxMDlQV0Y1ZWpvbG9qSVh3MW5LSVpkaHdEaEFBQUFBRWxGVGtTdVFtQ0NcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ttYXAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3M2I3NzRkMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9rbWFwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9rbWFwLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7UG9pbnRlckV2ZW50c1BvbHlmaWxsfSBmcm9tIFwiLi9wb2ludGVyX2V2ZW50c19wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgJ2NsYXNzbGlzdC1wb2x5ZmlsbCc7XHJcblxyXG5Qb2ludGVyRXZlbnRzUG9seWZpbGwuaW5pdGlhbGl6ZSgpOyIsIi8qXHJcbiAqIFBvaW50ZXIgRXZlbnRzIFBvbHlmaWxsOiBBZGRzIHN1cHBvcnQgZm9yIHRoZSBzdHlsZSBhdHRyaWJ1dGUgXCJwb2ludGVyLWV2ZW50czogbm9uZVwiIHRvIGJyb3dzZXJzIHdpdGhvdXQgdGhpcyBmZWF0dXJlIChuYW1lbHksIElFKS5cclxuICogKGMpIDIwMTMsIEtlbnQgTWV3aG9ydCwgbGljZW5zZWQgdW5kZXIgQlNELiBTZWUgTElDRU5TRS50eHQgZm9yIGRldGFpbHMuXHJcbiAqL1xyXG5cclxuLy8gY29uc3RydWN0b3JcclxuZXhwb3J0IGNvbnN0IFBvaW50ZXJFdmVudHNQb2x5ZmlsbCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIC8vIHNldCBkZWZhdWx0c1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgIHNlbGVjdG9yOiAnKicsXHJcbiAgICAgICAgbW91c2VFdmVudHM6IFsnY2xpY2snLCdkYmxjbGljaycsJ21vdXNlZG93bicsJ21vdXNldXAnXSxcclxuICAgICAgICB1c2VQb2x5ZmlsbElmOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihuYXZpZ2F0b3IuYXBwTmFtZSA9PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICAgICAgICAgIGlmIChhZ2VudC5tYXRjaCgvTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KS8pICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCggUmVnRXhwLiQxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmVyc2lvbiA8IDExKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmKG9wdGlvbnMpe1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzO1xyXG4gICAgICAgICQuZWFjaChvcHRpb25zLCBmdW5jdGlvbihrLHYpe1xyXG4gICAgICAgICAgICBvYmoub3B0aW9uc1trXSA9IHY7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5vcHRpb25zLnVzZVBvbHlmaWxsSWYoKSlcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyX21vdXNlX2V2ZW50cygpO1xyXG59XHJcblxyXG4vLyBzaW5nbGV0b24gaW5pdGlhbGl6ZXJcclxuUG9pbnRlckV2ZW50c1BvbHlmaWxsLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgIGlmKFBvaW50ZXJFdmVudHNQb2x5ZmlsbC5zaW5nbGV0b24gPT0gbnVsbClcclxuICAgICAgICBQb2ludGVyRXZlbnRzUG9seWZpbGwuc2luZ2xldG9uID0gbmV3IFBvaW50ZXJFdmVudHNQb2x5ZmlsbChvcHRpb25zKTtcclxuICAgIHJldHVybiBQb2ludGVyRXZlbnRzUG9seWZpbGwuc2luZ2xldG9uO1xyXG59O1xyXG5cclxuLy8gaGFuZGxlIG1vdXNlIGV2ZW50cyB3LyBzdXBwb3J0IGZvciBwb2ludGVyLWV2ZW50czogbm9uZVxyXG5Qb2ludGVyRXZlbnRzUG9seWZpbGwucHJvdG90eXBlLnJlZ2lzdGVyX21vdXNlX2V2ZW50cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAvLyByZWdpc3RlciBvbiBhbGwgZWxlbWVudHMgKGFuZCBhbGwgZnV0dXJlIGVsZW1lbnRzKSBtYXRjaGluZyB0aGUgc2VsZWN0b3JcclxuICAgICQoZG9jdW1lbnQpLm9uKHRoaXMub3B0aW9ucy5tb3VzZUV2ZW50cy5qb2luKFwiIFwiKSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZigkKHRoaXMpLmNzcygncG9pbnRlci1ldmVudHMnKSA9PSAnbm9uZScpe1xyXG4gICAgICAgICAgICAvLyBwZWFrIGF0IHRoZSBlbGVtZW50IGJlbG93XHJcbiAgICAgICAgICAgIHZhciBvcmlnRGlzcGxheUF0dHJpYnV0ZSA9ICQodGhpcykuY3NzKCdkaXNwbGF5Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVuZGVybmVhdGhFbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcblxyXG4gICAgICAgICAgICBpZihvcmlnRGlzcGxheUF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5Jywgb3JpZ0Rpc3BsYXlBdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gZmlyZSB0aGUgbW91c2UgZXZlbnQgb24gdGhlIGVsZW1lbnQgYmVsb3dcclxuICAgICAgICAgICAgZS50YXJnZXQgPSB1bmRlcm5lYXRoRWxlbTtcclxuICAgICAgICAgICAgJCh1bmRlcm5lYXRoRWxlbSkudHJpZ2dlcihlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufTtcclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2ttYXAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJhMjZlMTU1YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fa21hcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2ttYXAuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICcuL19rbWFwLnNjc3MnO1xyXG5pbXBvcnQgS21hcCBmcm9tICdrbWFwJztcclxuXHJcbmV4cG9ydCB7S21hcH07XHJcbmV4cG9ydCBkZWZhdWx0IEttYXA7XHJcblxyXG5pbXBvcnQge0ttYXBGYWN0b3J5fSBmcm9tICcuL2pzL0ttYXBGYWN0b3J5JztcclxuXHJcbkttYXBGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xyXG4iLCJpbXBvcnQgS21hcCBmcm9tICdrbWFwJztcclxuXHJcbmV4cG9ydCBjb25zdCBLbWFwRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5LbWFwRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG5cdGZ1bmN0aW9uIGluc3RhbGwoKSB7XHJcblx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1rbWFwJyk7XHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG5cdFx0XHRjb25zdCBqc29uID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuXHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0Y29uc3Qga21hcCA9IG5ldyBLbWFwKGVsZW1lbnQsIGpzb24pO1xyXG5cdFx0XHRrbWFwLnN0YXJ0Tm93KCk7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0XHRpbnN0YWxsKCk7XHJcblx0fSk7XHJcblxyXG5cdHNpdGUubWVzc2FnZUxpc3RlbmVyKChtc2csIGRhdGEpID0+IHtcclxuXHRcdGlmKG1zZyA9PT0gJ2NsLXF1aXotYWZ0ZXItaW5zdGFsbGVkJykge1xyXG5cdFx0XHRpbnN0YWxsKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9