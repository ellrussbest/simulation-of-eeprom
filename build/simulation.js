const wasm =
  "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AC0AAA0ACwsgACACa0EBaiIAEBEiAQR/IAEgAiAAEBUFQQALC6kMARV/IwBBMGsiCiQAIAogADYCLCAKIAE2AiggCigCLCESIAooAighACMAQRBrIg0kACANIApBCGoiETYCDCANIAA2AgggDSgCCCIAQQRqIQEgACgCACEAIwBBIGsiBCQAIAQgETYCGCAEIAE2AhQgBCAANgIQIAQgBCgCGCIHNgIcIwBBIGsiACQAIAAgBzYCHCAAIARBCGo2AhggACAENgIUIwBBEGsiASAAKAIcIgI2AgQgASgCBBojAEEQayIBJAAgASACNgIEIAEoAgQhAyMAQRBrIgIkACACIAM2AgwjAEEQayIDIAIoAgw2AgwgAygCDBogAkEQaiQAIAFBEGokACAAQSBqJAAgBCgCEARAIAQoAhQaCyAEKAIUIQ4gBCgCECEIIwBBEGsiCSQAAkAgCEHv////B00EQAJAIAhBC0kEQCAHEA0iACAALQALQYABcSAIcjoACyAHEA0iACAALQALQf8AcToACyAHEA0hAAwBCyAIQQtPBH8gCEEQakFwcSIAIABBAWsiACAAQQtGGwVBCgtBAWoiAEF/SwRAEAMACyAAQQEgABshAQJAA0AgARARIgINAUGMHSgCACICBEAgAhEBAAwBCwsQAwALIAkgADYCDCAJIAI2AgggCSgCCCEAIAkoAgwaIAcQDSAANgIAIAkoAgwhASAHEA0iAiACKAIIQYCAgIB4cSABQf////8HcXI2AgggBxANIgEgASgCCEGAgICAeHI2AgggBxANIAg2AgQLIwBBEGsiDyQAIwBBIGsiBSQAIwBBEGsiASQAIwBBEGsiAiAONgIMIAEgAigCDDYCDCMAQRBrIgIgCCAOajYCDCABIAIoAgw2AgggBSABKAIMNgIYIAUgASgCCDYCHCABQRBqJAAgBSgCGCELIAUoAhwhASMAQRBrIgwkACABIAtrIQYgASALRwRAAkAgBiEBAkAgACICIAsiA0YNACADIAEgAmoiE2tBACABQQF0a00EQCACIAMgARAVGgwCCyACIANzQQNxIRACQAJAIAIgA0kEQCAQDQIgAkEDcUUNAQNAIAFFDQQgAiADLQAAOgAAIANBAWohAyABQQFrIQEgAkEBaiICQQNxDQALDAELAkAgEA0AIBNBA3EEQANAIAFFDQUg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QdQVNgIIIAEgBGohAUEAIQQCQCAFQdQVQQAQDgRAIANBATYCOCAFIANBCGogASABQQFBACAFKAIAKAIUEQMAIAFBACADKAIgQQFGGyEEDAELIAUgA0EIaiABQQFBACAFKAIAKAIYEQIAAkACQCADKAIsDgIAAQILIAMoAhxBACADKAIoQQFGG0EAIAMoAiRBAUYbQQAgAygCMEEBRhshBAwBCyADKAIgQQFHBEAgAygCMA0BIAMoAiRBAUcNASADKAIoQQFHDQELIAMoAhghBAsgA0FAayQAQQAgBCIFRQ0AGiAGQQhqIgdBBHIiAUEAOgAAIAFBNGoiA0EBa0EAOgAAIAFBADoAAiABQQA6AAEgA0EDa0EAOgAAIANBAmtBADoAACABQQA6AAMgA0EEa0EAOgAAIAFBACABa0EDcSIDaiIBQQA2AgAgAUE0IANrQXxxIgRqIgNBBGtBADYCAAJAIARBCUkNACABQQA2AgggAUEANgIEIANBCGtBADYCACADQQxrQQA2AgAgBEEZSQ0AIAFBADYCGCABQQA2AhQgAUEANgIQIAFBADYCDCADQRBrQQA2AgAgA0EUa0EANgIAIANBGGtBADYCACADQRxrQQA2AgAgBCABQQRxQRhyIgRrIgNBIEkNACABIARqIQEDQCABQgA3AxggAUIANwMQIAFCADcDCCABQgA3AwAgAUEgaiEBIANBIGsiA0EfSw0ACwsgBkEBNgI4IAZBfzYCFCAGIAA2AhAgBiAFNgIIIAUgByACKAIAQQEgBSgCACgCHBEHACAGKAIgIgBBAUYEQCACIAYoAhg2AgALIABBAUYLIQAgBkFAayQAIAALCgAgACABQQAQDgv7AQEEfyMAQRBrIgUkACAFIAA2AgwjAEEQayICJAAgAiAANgIIIAIgATYCBCACIAIoAggiATYCDCABIAIoAgQiACkCADcCACABIAAoAgg2AgggAigCBCEAIwBBEGsiAyQAIAMgADYCDCADKAIMIQQjAEEQayIAJAAgACAENgIMIAAoAgwhBCAAQQA2AgggAEIANwMAIAQQDSIEIAApAwA3AgAgBCAAKAIINgIIIABBEGokACADQRBqJAAjAEEQayABNgIMIAEQEEEBcQRAIAIoAgQhACMAQRBrIgMgATYCDCADIAA2AggLIAIoAgwaIAJBEGokACAFQRBqJAALBAAgAAsFAEGYGQsjAQF/QYwZKAIAIgAEQANAIAAoAgARAQAgACgCBCIADQALCwsVAQF/IwBBEGsiASAANgIMIAEoAgwLC48RAgBBgAgL/hB1bnNpZ25lZCBzaG9ydAB1bnNpZ25lZCBpbnQAZmxvYXQAdWludDY0X3QAbWFjX2FkZHJlc3MAc2VyaWFsX251bWJlcgB1bnNpZ25lZCBjaGFyAGJvb2wAZW1zY3JpcHRlbjo6dmFsAHVuc2lnbmVkIGxvbmcAc3RkOjp3c3RyaW5nAGJhc2ljX3N0cmluZwBzdGQ6OnN0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBkb3VibGUAdm9pZABlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxmbG9hdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+AAAAoAsAAKALAABpaWkAfAcAAHwHAABOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQAA7AsAADwHAABOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAA7AsAAIQHAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAA7AsAAMwHAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRHNOU18xMWNoYXJfdHJhaXRzSURzRUVOU185YWxsb2NhdG9ySURzRUVFRQAAAOwLAAAUCAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAADsCwAAYAgAAE4xMGVtc2NyaXB0ZW4zdmFsRQAA7AsAAKwIAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ljRUUAAOwLAADICAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJYUVFAADsCwAA8AgAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWhFRQAA7AsAABgJAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lzRUUAAOwLAABACQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJdEVFAADsCwAAaAkAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWlFRQAA7AsAAJAJAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lqRUUAAOwLAAC4CQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbEVFAADsCwAA4AkAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SW1FRQAA7AsAAAgKAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lmRUUAAOwLAAAwCgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAADsCwAAWAoAAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAAAAABQMAACACgAAeAwAAE4xMF9fY3h4YWJpdjExN19fY2xhc3NfdHlwZV9pbmZvRQAAABQMAACwCgAApAoAAAAAAAAkCwAABwAAAAgAAAAJAAAACgAAAAsAAABOMTBfX2N4eGFiaXYxMjNfX2Z1bmRhbWVudGFsX3R5cGVfaW5mb0UAFAwAAPwKAACkCgAAdgAAAOgKAAAwCwAAYgAAAOgKAAA8CwAAYwAAAOgKAABICwAAaAAAAOgKAABUCwAAYQAAAOgKAABgCwAAcwAAAOgKAABsCwAAdAAAAOgKAAB4CwAAaQAAAOgKAACECwAAagAAAOgKAACQCwAAbAAAAOgKAACcCwAAbQAAAOgKAACoCwAAeAAAAOgKAAC0CwAAeQAAAOgKAADACwAAZgAAAOgKAADMCwAAZAAAAOgKAADYCwAAAAAAANQKAAAHAAAADAAAAAkAAAAKAAAADQAAAA4AAAAPAAAAEAAAAAAAAABcDAAABwAAABEAAAAJAAAACgAAAA0AAAASAAAAEwAAABQAAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAAFAwAADQMAADUCgAAU3Q5dHlwZV9pbmZvAAAAAOwLAABoDABBgBkLA5AOAQ==";


const byteCharacters = atob(wasm);
const contentType = "application/wasm";

const byteNumbers = new Array(byteCharacters.length);
for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
}

const byteArray = new Uint8Array(byteNumbers);
const blob = new Blob([byteArray], {type: contentType});
const fileURL = URL.createObjectURL(blob);

var Module = typeof Module != "undefined" ? Module : {};
var moduleOverrides = Object.assign({}, Module);
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = (status, toThrow) => {
  throw toThrow;
};
var ENVIRONMENT_IS_WEB = typeof window == "object";
var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
var ENVIRONMENT_IS_NODE =
  typeof process == "object" &&
  typeof process.versions == "object" &&
  typeof process.versions.node == "string";
var scriptDirectory = "";
function locateFile(path) {
  if (Module["locateFile"]) {
    return Module["locateFile"](path, scriptDirectory);
  }
  return scriptDirectory + path;
}
var read_, readAsync, readBinary, setWindowTitle;
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  let toLog = e;
  err("exiting due to exception: " + toLog);
}
if (ENVIRONMENT_IS_NODE) {
  var fs = require("fs");
  var nodePath = require("path");
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
  } else {
    scriptDirectory = __dirname + "/";
  }
  read_ = (filename, binary) => {
    filename = isFileURI(filename)
      ? new URL(filename)
      : nodePath.normalize(filename);
    return fs.readFileSync(filename, binary ? undefined : "utf8");
  };
  readBinary = (filename) => {
    var ret = read_(filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    return ret;
  };
  readAsync = (filename, onload, onerror) => {
    filename = isFileURI(filename)
      ? new URL(filename)
      : nodePath.normalize(filename);
    fs.readFile(filename, function (err, data) {
      if (err) onerror(err);
      else onload(data.buffer);
    });
  };
  if (process["argv"].length > 1) {
    thisProgram = process["argv"][1].replace(/\\/g, "/");
  }
  arguments_ = process["argv"].slice(2);
  if (typeof module != "undefined") {
    module["exports"] = Module;
  }
  process["on"]("uncaughtException", function (ex) {
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });
  var nodeMajor = process.version.match(/^v(\d+)\./)[1];
  if (nodeMajor < 15) {
    process["on"]("unhandledRejection", function (reason) {
      throw reason;
    });
  }
  quit_ = (status, toThrow) => {
    if (keepRuntimeAlive()) {
      process["exitCode"] = status;
      throw toThrow;
    }
    logExceptionOnExit(toThrow);
    process["exit"](status);
  };
  Module["inspect"] = function () {
    return "[Emscripten Module object]";
  };
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = self.location.href;
  } else if (typeof document != "undefined" && document.currentScript) {
    scriptDirectory = document.currentScript.src;
  }
  if (scriptDirectory.indexOf("blob:") !== 0) {
    scriptDirectory = scriptDirectory.substr(
      0,
      scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1
    );
  } else {
    scriptDirectory = "";
  }
  {
    read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.send(null);
      return xhr.responseText;
    };
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
        return new Uint8Array(xhr.response);
      };
    }
    readAsync = (url, onload, onerror) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = () => {
        if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
          onload(xhr.response);
          return;
        }
        onerror();
      };
      xhr.onerror = onerror;
      xhr.send(null);
    };
  }
  setWindowTitle = (title) => (document.title = title);
} else {
}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.warn.bind(console);
Object.assign(Module, moduleOverrides);
moduleOverrides = null;
if (Module["arguments"]) arguments_ = Module["arguments"];
if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
if (Module["quit"]) quit_ = Module["quit"];
var wasmBinary;
if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
var noExitRuntime = Module["noExitRuntime"] || true;
if (typeof WebAssembly != "object") {
  abort("no native wasm support detected");
}
var wasmMemory;
var ABORT = false;
var EXITSTATUS;
var UTF8Decoder =
  typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  }
  var str = "";
  while (idx < endPtr) {
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode(((u0 & 31) << 6) | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      u0 =
        ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    }
  }
  return str;
}
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}
function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  for (var i = 0; i < str.length; ++i) {
    var u = str.charCodeAt(i);
    if (u >= 55296 && u <= 57343) {
      var u1 = str.charCodeAt(++i);
      u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
    }
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 192 | (u >> 6);
      heap[outIdx++] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 224 | (u >> 12);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 240 | (u >> 18);
      heap[outIdx++] = 128 | ((u >> 12) & 63);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    }
  }
  heap[outIdx] = 0;
  return outIdx - startIdx;
}
function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var c = str.charCodeAt(i);
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
}
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module["HEAP8"] = HEAP8 = new Int8Array(b);
  Module["HEAP16"] = HEAP16 = new Int16Array(b);
  Module["HEAP32"] = HEAP32 = new Int32Array(b);
  Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
  Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
  Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
  Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
  Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
}
var wasmTable;
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;
function keepRuntimeAlive() {
  return noExitRuntime;
}
function preRun() {
  if (Module["preRun"]) {
    if (typeof Module["preRun"] == "function")
      Module["preRun"] = [Module["preRun"]];
    while (Module["preRun"].length) {
      addOnPreRun(Module["preRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function initRuntime() {
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}
function postRun() {
  if (Module["postRun"]) {
    if (typeof Module["postRun"] == "function")
      Module["postRun"] = [Module["postRun"]];
    while (Module["postRun"].length) {
      addOnPostRun(Module["postRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;
function addRunDependency(id) {
  runDependencies++;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
}
function removeRunDependency(id) {
  runDependencies--;
  if (Module["monitorRunDependencies"]) {
    Module["monitorRunDependencies"](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
}
function abort(what) {
  if (Module["onAbort"]) {
    Module["onAbort"](what);
  }
  what = "Aborted(" + what + ")";
  err(what);
  ABORT = true;
  EXITSTATUS = 1;
  what += ". Build with -sASSERTIONS for more info.";
  var e = new WebAssembly.RuntimeError(what);
  throw e;
}
var dataURIPrefix = "data:application/octet-stream;base64,";
function isDataURI(filename) {
  return filename.startsWith(dataURIPrefix);
}
function isFileURI(filename) {
  return filename.startsWith("file://");
}
var wasmBinaryFile;
wasmBinaryFile = "simulation.wasm";
// if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = fileURL;
// }
function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (err) {
    abort(err);
  }
}
function getBinaryPromise() {
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
      return fetch(wasmBinaryFile, { credentials: "same-origin" })
        .then(function (response) {
          if (!response["ok"]) {
            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
          }
          return response["arrayBuffer"]();
        })
        .catch(function () {
          return getBinary(wasmBinaryFile);
        });
    } else {
      if (readAsync) {
        return new Promise(function (resolve, reject) {
          readAsync(
            wasmBinaryFile,
            function (response) {
              resolve(new Uint8Array(response));
            },
            reject
          );
        });
      }
    }
  }
  return Promise.resolve().then(function () {
    return getBinary(wasmBinaryFile);
  });
}
function createWasm() {
  var info = { a: wasmImports };
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module["asm"] = exports;
    wasmMemory = Module["asm"]["n"];
    updateMemoryViews();
    wasmTable = Module["asm"]["q"];
    addOnInit(Module["asm"]["o"]);
    removeRunDependency("wasm-instantiate");
  }
  addRunDependency("wasm-instantiate");
  function receiveInstantiationResult(result) {
    receiveInstance(result["instance"]);
  }
  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise()
      .then(function (binary) {
        return WebAssembly.instantiate(binary, info);
      })
      .then(function (instance) {
        return instance;
      })
      .then(receiver, function (reason) {
        err("failed to asynchronously prepare wasm: " + reason);
        abort(reason);
      });
  }
  function instantiateAsync() {
    if (
      !wasmBinary &&
      typeof WebAssembly.instantiateStreaming == "function" &&
      !isDataURI(wasmBinaryFile) &&
      !isFileURI(wasmBinaryFile) &&
      !ENVIRONMENT_IS_NODE &&
      typeof fetch == "function"
    ) {
      return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(
        function (response) {
          var result = WebAssembly.instantiateStreaming(response, info);
          return result.then(receiveInstantiationResult, function (reason) {
            err("wasm streaming compile failed: " + reason);
            err("falling back to ArrayBuffer instantiation");
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
        }
      );
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }
  if (Module["instantiateWasm"]) {
    try {
      var exports = Module["instantiateWasm"](info, receiveInstance);
      return exports;
    } catch (e) {
      err("Module.instantiateWasm callback failed with error: " + e);
      return false;
    }
  }
  instantiateAsync();
  return {};
}
var tempDouble;
var tempI64;
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}
Module["ExitStatus"] = ExitStatus;
function callRuntimeCallbacks(callbacks) {
  while (callbacks.length > 0) {
    callbacks.shift()(Module);
  }
}
Module["callRuntimeCallbacks"] = callRuntimeCallbacks;
function getValue(ptr, type = "i8") {
  if (type.endsWith("*")) type = "*";
  switch (type) {
    case "i1":
      return HEAP8[ptr >> 0];
    case "i8":
      return HEAP8[ptr >> 0];
    case "i16":
      return HEAP16[ptr >> 1];
    case "i32":
      return HEAP32[ptr >> 2];
    case "i64":
      return HEAP32[ptr >> 2];
    case "float":
      return HEAPF32[ptr >> 2];
    case "double":
      return HEAPF64[ptr >> 3];
    case "*":
      return HEAPU32[ptr >> 2];
    default:
      abort("invalid type for getValue: " + type);
  }
  return null;
}
Module["getValue"] = getValue;
function setValue(ptr, value, type = "i8") {
  if (type.endsWith("*")) type = "*";
  switch (type) {
    case "i1":
      HEAP8[ptr >> 0] = value;
      break;
    case "i8":
      HEAP8[ptr >> 0] = value;
      break;
    case "i16":
      HEAP16[ptr >> 1] = value;
      break;
    case "i32":
      HEAP32[ptr >> 2] = value;
      break;
    case "i64":
      (tempI64 = [
        value >>> 0,
        ((tempDouble = value),
        +Math.abs(tempDouble) >= 1
          ? tempDouble > 0
            ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) |
                0) >>>
              0
            : ~~+Math.ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
              ) >>> 0
          : 0),
      ]),
        (HEAP32[ptr >> 2] = tempI64[0]),
        (HEAP32[(ptr + 4) >> 2] = tempI64[1]);
      break;
    case "float":
      HEAPF32[ptr >> 2] = value;
      break;
    case "double":
      HEAPF64[ptr >> 3] = value;
      break;
    case "*":
      HEAPU32[ptr >> 2] = value;
      break;
    default:
      abort("invalid type for setValue: " + type);
  }
}
Module["setValue"] = setValue;
function __embind_register_bigint(
  primitiveType,
  name,
  size,
  minRange,
  maxRange
) {}
Module["__embind_register_bigint"] = __embind_register_bigint;
function getShiftFromSize(size) {
  switch (size) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 4:
      return 2;
    case 8:
      return 3;
    default:
      throw new TypeError("Unknown type size: " + size);
  }
}
Module["getShiftFromSize"] = getShiftFromSize;
function embind_init_charCodes() {
  var codes = new Array(256);
  for (var i = 0; i < 256; ++i) {
    codes[i] = String.fromCharCode(i);
  }
  embind_charCodes = codes;
}
Module["embind_init_charCodes"] = embind_init_charCodes;
var embind_charCodes = undefined;
Module["embind_charCodes"] = embind_charCodes;
function readLatin1String(ptr) {
  var ret = "";
  var c = ptr;
  while (HEAPU8[c]) {
    ret += embind_charCodes[HEAPU8[c++]];
  }
  return ret;
}
Module["readLatin1String"] = readLatin1String;
var awaitingDependencies = {};
Module["awaitingDependencies"] = awaitingDependencies;
var registeredTypes = {};
Module["registeredTypes"] = registeredTypes;
var typeDependencies = {};
Module["typeDependencies"] = typeDependencies;
var char_0 = 48;
Module["char_0"] = char_0;
var char_9 = 57;
Module["char_9"] = char_9;
function makeLegalFunctionName(name) {
  if (undefined === name) {
    return "_unknown";
  }
  name = name.replace(/[^a-zA-Z0-9_]/g, "$");
  var f = name.charCodeAt(0);
  if (f >= char_0 && f <= char_9) {
    return "_" + name;
  }
  return name;
}
Module["makeLegalFunctionName"] = makeLegalFunctionName;
function createNamedFunction(name, body) {
  name = makeLegalFunctionName(name);
  return new Function(
    "body",
    "return function " +
      name +
      "() {\n" +
      '    "use strict";' +
      "    return body.apply(this, arguments);\n" +
      "};\n"
  )(body);
}
Module["createNamedFunction"] = createNamedFunction;
function extendError(baseErrorType, errorName) {
  var errorClass = createNamedFunction(errorName, function (message) {
    this.name = errorName;
    this.message = message;
    var stack = new Error(message).stack;
    if (stack !== undefined) {
      this.stack =
        this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
    }
  });
  errorClass.prototype = Object.create(baseErrorType.prototype);
  errorClass.prototype.constructor = errorClass;
  errorClass.prototype.toString = function () {
    if (this.message === undefined) {
      return this.name;
    } else {
      return this.name + ": " + this.message;
    }
  };
  return errorClass;
}
Module["extendError"] = extendError;
var BindingError = undefined;
Module["BindingError"] = BindingError;
function throwBindingError(message) {
  throw new BindingError(message);
}
Module["throwBindingError"] = throwBindingError;
var InternalError = undefined;
Module["InternalError"] = InternalError;
function throwInternalError(message) {
  throw new InternalError(message);
}
Module["throwInternalError"] = throwInternalError;
function whenDependentTypesAreResolved(
  myTypes,
  dependentTypes,
  getTypeConverters
) {
  myTypes.forEach(function (type) {
    typeDependencies[type] = dependentTypes;
  });
  function onComplete(typeConverters) {
    var myTypeConverters = getTypeConverters(typeConverters);
    if (myTypeConverters.length !== myTypes.length) {
      throwInternalError("Mismatched type converter count");
    }
    for (var i = 0; i < myTypes.length; ++i) {
      registerType(myTypes[i], myTypeConverters[i]);
    }
  }
  var typeConverters = new Array(dependentTypes.length);
  var unregisteredTypes = [];
  var registered = 0;
  dependentTypes.forEach((dt, i) => {
    if (registeredTypes.hasOwnProperty(dt)) {
      typeConverters[i] = registeredTypes[dt];
    } else {
      unregisteredTypes.push(dt);
      if (!awaitingDependencies.hasOwnProperty(dt)) {
        awaitingDependencies[dt] = [];
      }
      awaitingDependencies[dt].push(() => {
        typeConverters[i] = registeredTypes[dt];
        ++registered;
        if (registered === unregisteredTypes.length) {
          onComplete(typeConverters);
        }
      });
    }
  });
  if (0 === unregisteredTypes.length) {
    onComplete(typeConverters);
  }
}
Module["whenDependentTypesAreResolved"] = whenDependentTypesAreResolved;
function registerType(rawType, registeredInstance, options = {}) {
  if (!("argPackAdvance" in registeredInstance)) {
    throw new TypeError(
      "registerType registeredInstance requires argPackAdvance"
    );
  }
  var name = registeredInstance.name;
  if (!rawType) {
    throwBindingError(
      'type "' + name + '" must have a positive integer typeid pointer'
    );
  }
  if (registeredTypes.hasOwnProperty(rawType)) {
    if (options.ignoreDuplicateRegistrations) {
      return;
    } else {
      throwBindingError("Cannot register type '" + name + "' twice");
    }
  }
  registeredTypes[rawType] = registeredInstance;
  delete typeDependencies[rawType];
  if (awaitingDependencies.hasOwnProperty(rawType)) {
    var callbacks = awaitingDependencies[rawType];
    delete awaitingDependencies[rawType];
    callbacks.forEach((cb) => cb());
  }
}
Module["registerType"] = registerType;
function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
  var shift = getShiftFromSize(size);
  name = readLatin1String(name);
  registerType(rawType, {
    name: name,
    fromWireType: function (wt) {
      return !!wt;
    },
    toWireType: function (destructors, o) {
      return o ? trueValue : falseValue;
    },
    argPackAdvance: 8,
    readValueFromPointer: function (pointer) {
      var heap;
      if (size === 1) {
        heap = HEAP8;
      } else if (size === 2) {
        heap = HEAP16;
      } else if (size === 4) {
        heap = HEAP32;
      } else {
        throw new TypeError("Unknown boolean type size: " + name);
      }
      return this["fromWireType"](heap[pointer >> shift]);
    },
    destructorFunction: null,
  });
}
Module["__embind_register_bool"] = __embind_register_bool;
var emval_free_list = [];
Module["emval_free_list"] = emval_free_list;
var emval_handle_array = [
  {},
  { value: undefined },
  { value: null },
  { value: true },
  { value: false },
];
Module["emval_handle_array"] = emval_handle_array;
function __emval_decref(handle) {
  if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
    emval_handle_array[handle] = undefined;
    emval_free_list.push(handle);
  }
}
Module["__emval_decref"] = __emval_decref;
function count_emval_handles() {
  var count = 0;
  for (var i = 5; i < emval_handle_array.length; ++i) {
    if (emval_handle_array[i] !== undefined) {
      ++count;
    }
  }
  return count;
}
Module["count_emval_handles"] = count_emval_handles;
function get_first_emval() {
  for (var i = 5; i < emval_handle_array.length; ++i) {
    if (emval_handle_array[i] !== undefined) {
      return emval_handle_array[i];
    }
  }
  return null;
}
Module["get_first_emval"] = get_first_emval;
function init_emval() {
  Module["count_emval_handles"] = count_emval_handles;
  Module["get_first_emval"] = get_first_emval;
}
Module["init_emval"] = init_emval;
var Emval = {
  toValue: (handle) => {
    if (!handle) {
      throwBindingError("Cannot use deleted val. handle = " + handle);
    }
    return emval_handle_array[handle].value;
  },
  toHandle: (value) => {
    switch (value) {
      case undefined:
        return 1;
      case null:
        return 2;
      case true:
        return 3;
      case false:
        return 4;
      default: {
        var handle = emval_free_list.length
          ? emval_free_list.pop()
          : emval_handle_array.length;
        emval_handle_array[handle] = { refcount: 1, value: value };
        return handle;
      }
    }
  },
};
Module["Emval"] = Emval;
function simpleReadValueFromPointer(pointer) {
  return this["fromWireType"](HEAP32[pointer >> 2]);
}
Module["simpleReadValueFromPointer"] = simpleReadValueFromPointer;
function __embind_register_emval(rawType, name) {
  name = readLatin1String(name);
  registerType(rawType, {
    name: name,
    fromWireType: function (handle) {
      var rv = Emval.toValue(handle);
      __emval_decref(handle);
      return rv;
    },
    toWireType: function (destructors, value) {
      return Emval.toHandle(value);
    },
    argPackAdvance: 8,
    readValueFromPointer: simpleReadValueFromPointer,
    destructorFunction: null,
  });
}
Module["__embind_register_emval"] = __embind_register_emval;
function embindRepr(v) {
  if (v === null) {
    return "null";
  }
  var t = typeof v;
  if (t === "object" || t === "array" || t === "function") {
    return v.toString();
  } else {
    return "" + v;
  }
}
Module["embindRepr"] = embindRepr;
function floatReadValueFromPointer(name, shift) {
  switch (shift) {
    case 2:
      return function (pointer) {
        return this["fromWireType"](HEAPF32[pointer >> 2]);
      };
    case 3:
      return function (pointer) {
        return this["fromWireType"](HEAPF64[pointer >> 3]);
      };
    default:
      throw new TypeError("Unknown float type: " + name);
  }
}
Module["floatReadValueFromPointer"] = floatReadValueFromPointer;
function __embind_register_float(rawType, name, size) {
  var shift = getShiftFromSize(size);
  name = readLatin1String(name);
  registerType(rawType, {
    name: name,
    fromWireType: function (value) {
      return value;
    },
    toWireType: function (destructors, value) {
      return value;
    },
    argPackAdvance: 8,
    readValueFromPointer: floatReadValueFromPointer(name, shift),
    destructorFunction: null,
  });
}
Module["__embind_register_float"] = __embind_register_float;
function new_(constructor, argumentList) {
  if (!(constructor instanceof Function)) {
    throw new TypeError(
      "new_ called with constructor type " +
        typeof constructor +
        " which is not a function"
    );
  }
  var dummy = createNamedFunction(
    constructor.name || "unknownFunctionName",
    function () {}
  );
  dummy.prototype = constructor.prototype;
  var obj = new dummy();
  var r = constructor.apply(obj, argumentList);
  return r instanceof Object ? r : obj;
}
Module["new_"] = new_;
function runDestructors(destructors) {
  while (destructors.length) {
    var ptr = destructors.pop();
    var del = destructors.pop();
    del(ptr);
  }
}
Module["runDestructors"] = runDestructors;
function craftInvokerFunction(
  humanName,
  argTypes,
  classType,
  cppInvokerFunc,
  cppTargetFunc
) {
  var argCount = argTypes.length;
  if (argCount < 2) {
    throwBindingError(
      "argTypes array size mismatch! Must at least get return value and 'this' types!"
    );
  }
  var isClassMethodFunc = argTypes[1] !== null && classType !== null;
  var needsDestructorStack = false;
  for (var i = 1; i < argTypes.length; ++i) {
    if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
      needsDestructorStack = true;
      break;
    }
  }
  var returns = argTypes[0].name !== "void";
  var argsList = "";
  var argsListWired = "";
  for (var i = 0; i < argCount - 2; ++i) {
    argsList += (i !== 0 ? ", " : "") + "arg" + i;
    argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
  }
  var invokerFnBody =
    "return function " +
    makeLegalFunctionName(humanName) +
    "(" +
    argsList +
    ") {\n" +
    "if (arguments.length !== " +
    (argCount - 2) +
    ") {\n" +
    "throwBindingError('function " +
    humanName +
    " called with ' + arguments.length + ' arguments, expected " +
    (argCount - 2) +
    " args!');\n" +
    "}\n";
  if (needsDestructorStack) {
    invokerFnBody += "var destructors = [];\n";
  }
  var dtorStack = needsDestructorStack ? "destructors" : "null";
  var args1 = [
    "throwBindingError",
    "invoker",
    "fn",
    "runDestructors",
    "retType",
    "classParam",
  ];
  var args2 = [
    throwBindingError,
    cppInvokerFunc,
    cppTargetFunc,
    runDestructors,
    argTypes[0],
    argTypes[1],
  ];
  if (isClassMethodFunc) {
    invokerFnBody +=
      "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
  }
  for (var i = 0; i < argCount - 2; ++i) {
    invokerFnBody +=
      "var arg" +
      i +
      "Wired = argType" +
      i +
      ".toWireType(" +
      dtorStack +
      ", arg" +
      i +
      "); // " +
      argTypes[i + 2].name +
      "\n";
    args1.push("argType" + i);
    args2.push(argTypes[i + 2]);
  }
  if (isClassMethodFunc) {
    argsListWired =
      "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
  }
  invokerFnBody +=
    (returns ? "var rv = " : "") +
    "invoker(fn" +
    (argsListWired.length > 0 ? ", " : "") +
    argsListWired +
    ");\n";
  if (needsDestructorStack) {
    invokerFnBody += "runDestructors(destructors);\n";
  } else {
    for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
      var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
      if (argTypes[i].destructorFunction !== null) {
        invokerFnBody +=
          paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
        args1.push(paramName + "_dtor");
        args2.push(argTypes[i].destructorFunction);
      }
    }
  }
  if (returns) {
    invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n";
  } else {
  }
  invokerFnBody += "}\n";
  args1.push(invokerFnBody);
  var invokerFunction = new_(Function, args1).apply(null, args2);
  return invokerFunction;
}
Module["craftInvokerFunction"] = craftInvokerFunction;
function ensureOverloadTable(proto, methodName, humanName) {
  if (undefined === proto[methodName].overloadTable) {
    var prevFunc = proto[methodName];
    proto[methodName] = function () {
      if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
        throwBindingError(
          "Function '" +
            humanName +
            "' called with an invalid number of arguments (" +
            arguments.length +
            ") - expects one of (" +
            proto[methodName].overloadTable +
            ")!"
        );
      }
      return proto[methodName].overloadTable[arguments.length].apply(
        this,
        arguments
      );
    };
    proto[methodName].overloadTable = [];
    proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
  }
}
Module["ensureOverloadTable"] = ensureOverloadTable;
function exposePublicSymbol(name, value, numArguments) {
  if (Module.hasOwnProperty(name)) {
    if (
      undefined === numArguments ||
      (undefined !== Module[name].overloadTable &&
        undefined !== Module[name].overloadTable[numArguments])
    ) {
      throwBindingError("Cannot register public name '" + name + "' twice");
    }
    ensureOverloadTable(Module, name, name);
    if (Module.hasOwnProperty(numArguments)) {
      throwBindingError(
        "Cannot register multiple overloads of a function with the same number of arguments (" +
          numArguments +
          ")!"
      );
    }
    Module[name].overloadTable[numArguments] = value;
  } else {
    Module[name] = value;
    if (undefined !== numArguments) {
      Module[name].numArguments = numArguments;
    }
  }
}
Module["exposePublicSymbol"] = exposePublicSymbol;
function heap32VectorToArray(count, firstElement) {
  var array = [];
  for (var i = 0; i < count; i++) {
    array.push(HEAPU32[(firstElement + i * 4) >> 2]);
  }
  return array;
}
Module["heap32VectorToArray"] = heap32VectorToArray;
function replacePublicSymbol(name, value, numArguments) {
  if (!Module.hasOwnProperty(name)) {
    throwInternalError("Replacing nonexistant public symbol");
  }
  if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
    Module[name].overloadTable[numArguments] = value;
  } else {
    Module[name] = value;
    Module[name].argCount = numArguments;
  }
}
Module["replacePublicSymbol"] = replacePublicSymbol;
function dynCallLegacy(sig, ptr, args) {
  var f = Module["dynCall_" + sig];
  return args && args.length
    ? f.apply(null, [ptr].concat(args))
    : f.call(null, ptr);
}
Module["dynCallLegacy"] = dynCallLegacy;
var wasmTableMirror = [];
Module["wasmTableMirror"] = wasmTableMirror;
function getWasmTableEntry(funcPtr) {
  var func = wasmTableMirror[funcPtr];
  if (!func) {
    if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
    wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
  }
  return func;
}
Module["getWasmTableEntry"] = getWasmTableEntry;
function dynCall(sig, ptr, args) {
  if (sig.includes("j")) {
    return dynCallLegacy(sig, ptr, args);
  }
  var rtn = getWasmTableEntry(ptr).apply(null, args);
  return rtn;
}
Module["dynCall"] = dynCall;
function getDynCaller(sig, ptr) {
  var argCache = [];
  return function () {
    argCache.length = 0;
    Object.assign(argCache, arguments);
    return dynCall(sig, ptr, argCache);
  };
}
Module["getDynCaller"] = getDynCaller;
function embind__requireFunction(signature, rawFunction) {
  signature = readLatin1String(signature);
  function makeDynCaller() {
    if (signature.includes("j")) {
      return getDynCaller(signature, rawFunction);
    }
    return getWasmTableEntry(rawFunction);
  }
  var fp = makeDynCaller();
  if (typeof fp != "function") {
    throwBindingError(
      "unknown function pointer with signature " +
        signature +
        ": " +
        rawFunction
    );
  }
  return fp;
}
Module["embind__requireFunction"] = embind__requireFunction;
var UnboundTypeError = undefined;
Module["UnboundTypeError"] = UnboundTypeError;
function getTypeName(type) {
  var ptr = ___getTypeName(type);
  var rv = readLatin1String(ptr);
  _free(ptr);
  return rv;
}
Module["getTypeName"] = getTypeName;
function throwUnboundTypeError(message, types) {
  var unboundTypes = [];
  var seen = {};
  function visit(type) {
    if (seen[type]) {
      return;
    }
    if (registeredTypes[type]) {
      return;
    }
    if (typeDependencies[type]) {
      typeDependencies[type].forEach(visit);
      return;
    }
    unboundTypes.push(type);
    seen[type] = true;
  }
  types.forEach(visit);
  throw new UnboundTypeError(
    message + ": " + unboundTypes.map(getTypeName).join([", "])
  );
}
Module["throwUnboundTypeError"] = throwUnboundTypeError;
function __embind_register_function(
  name,
  argCount,
  rawArgTypesAddr,
  signature,
  rawInvoker,
  fn
) {
  var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
  name = readLatin1String(name);
  rawInvoker = embind__requireFunction(signature, rawInvoker);
  exposePublicSymbol(
    name,
    function () {
      throwUnboundTypeError(
        "Cannot call " + name + " due to unbound types",
        argTypes
      );
    },
    argCount - 1
  );
  whenDependentTypesAreResolved([], argTypes, function (argTypes) {
    var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
    replacePublicSymbol(
      name,
      craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn),
      argCount - 1
    );
    return [];
  });
}
Module["__embind_register_function"] = __embind_register_function;
function integerReadValueFromPointer(name, shift, signed) {
  switch (shift) {
    case 0:
      return signed
        ? function readS8FromPointer(pointer) {
            return HEAP8[pointer];
          }
        : function readU8FromPointer(pointer) {
            return HEAPU8[pointer];
          };
    case 1:
      return signed
        ? function readS16FromPointer(pointer) {
            return HEAP16[pointer >> 1];
          }
        : function readU16FromPointer(pointer) {
            return HEAPU16[pointer >> 1];
          };
    case 2:
      return signed
        ? function readS32FromPointer(pointer) {
            return HEAP32[pointer >> 2];
          }
        : function readU32FromPointer(pointer) {
            return HEAPU32[pointer >> 2];
          };
    default:
      throw new TypeError("Unknown integer type: " + name);
  }
}
Module["integerReadValueFromPointer"] = integerReadValueFromPointer;
function __embind_register_integer(
  primitiveType,
  name,
  size,
  minRange,
  maxRange
) {
  name = readLatin1String(name);
  if (maxRange === -1) {
    maxRange = 4294967295;
  }
  var shift = getShiftFromSize(size);
  var fromWireType = (value) => value;
  if (minRange === 0) {
    var bitshift = 32 - 8 * size;
    fromWireType = (value) => (value << bitshift) >>> bitshift;
  }
  var isUnsignedType = name.includes("unsigned");
  var checkAssertions = (value, toTypeName) => {};
  var toWireType;
  if (isUnsignedType) {
    toWireType = function (destructors, value) {
      checkAssertions(value, this.name);
      return value >>> 0;
    };
  } else {
    toWireType = function (destructors, value) {
      checkAssertions(value, this.name);
      return value;
    };
  }
  registerType(primitiveType, {
    name: name,
    fromWireType: fromWireType,
    toWireType: toWireType,
    argPackAdvance: 8,
    readValueFromPointer: integerReadValueFromPointer(
      name,
      shift,
      minRange !== 0
    ),
    destructorFunction: null,
  });
}
Module["__embind_register_integer"] = __embind_register_integer;
function __embind_register_memory_view(rawType, dataTypeIndex, name) {
  var typeMapping = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
  ];
  var TA = typeMapping[dataTypeIndex];
  function decodeMemoryView(handle) {
    handle = handle >> 2;
    var heap = HEAPU32;
    var size = heap[handle];
    var data = heap[handle + 1];
    return new TA(heap.buffer, data, size);
  }
  name = readLatin1String(name);
  registerType(
    rawType,
    {
      name: name,
      fromWireType: decodeMemoryView,
      argPackAdvance: 8,
      readValueFromPointer: decodeMemoryView,
    },
    { ignoreDuplicateRegistrations: true }
  );
}
Module["__embind_register_memory_view"] = __embind_register_memory_view;
function __embind_register_std_string(rawType, name) {
  name = readLatin1String(name);
  var stdStringIsUTF8 = name === "std::string";
  registerType(rawType, {
    name: name,
    fromWireType: function (value) {
      var length = HEAPU32[value >> 2];
      var payload = value + 4;
      var str;
      if (stdStringIsUTF8) {
        var decodeStartPtr = payload;
        for (var i = 0; i <= length; ++i) {
          var currentBytePtr = payload + i;
          if (i == length || HEAPU8[currentBytePtr] == 0) {
            var maxRead = currentBytePtr - decodeStartPtr;
            var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
            if (str === undefined) {
              str = stringSegment;
            } else {
              str += String.fromCharCode(0);
              str += stringSegment;
            }
            decodeStartPtr = currentBytePtr + 1;
          }
        }
      } else {
        var a = new Array(length);
        for (var i = 0; i < length; ++i) {
          a[i] = String.fromCharCode(HEAPU8[payload + i]);
        }
        str = a.join("");
      }
      _free(value);
      return str;
    },
    toWireType: function (destructors, value) {
      if (value instanceof ArrayBuffer) {
        value = new Uint8Array(value);
      }
      var length;
      var valueIsOfTypeString = typeof value == "string";
      if (
        !(
          valueIsOfTypeString ||
          value instanceof Uint8Array ||
          value instanceof Uint8ClampedArray ||
          value instanceof Int8Array
        )
      ) {
        throwBindingError("Cannot pass non-string to std::string");
      }
      if (stdStringIsUTF8 && valueIsOfTypeString) {
        length = lengthBytesUTF8(value);
      } else {
        length = value.length;
      }
      var base = _malloc(4 + length + 1);
      var ptr = base + 4;
      HEAPU32[base >> 2] = length;
      if (stdStringIsUTF8 && valueIsOfTypeString) {
        stringToUTF8(value, ptr, length + 1);
      } else {
        if (valueIsOfTypeString) {
          for (var i = 0; i < length; ++i) {
            var charCode = value.charCodeAt(i);
            if (charCode > 255) {
              _free(ptr);
              throwBindingError(
                "String has UTF-16 code units that do not fit in 8 bits"
              );
            }
            HEAPU8[ptr + i] = charCode;
          }
        } else {
          for (var i = 0; i < length; ++i) {
            HEAPU8[ptr + i] = value[i];
          }
        }
      }
      if (destructors !== null) {
        destructors.push(_free, base);
      }
      return base;
    },
    argPackAdvance: 8,
    readValueFromPointer: simpleReadValueFromPointer,
    destructorFunction: function (ptr) {
      _free(ptr);
    },
  });
}
Module["__embind_register_std_string"] = __embind_register_std_string;
var UTF16Decoder =
  typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
Module["UTF16Decoder"] = UTF16Decoder;
function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;
  if (endPtr - ptr > 32 && UTF16Decoder)
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  var str = "";
  for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
    var codeUnit = HEAP16[(ptr + i * 2) >> 1];
    if (codeUnit == 0) break;
    str += String.fromCharCode(codeUnit);
  }
  return str;
}
Module["UTF16ToString"] = UTF16ToString;
function stringToUTF16(str, outPtr, maxBytesToWrite) {
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 2147483647;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2;
  var startPtr = outPtr;
  var numCharsToWrite =
    maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    var codeUnit = str.charCodeAt(i);
    HEAP16[outPtr >> 1] = codeUnit;
    outPtr += 2;
  }
  HEAP16[outPtr >> 1] = 0;
  return outPtr - startPtr;
}
Module["stringToUTF16"] = stringToUTF16;
function lengthBytesUTF16(str) {
  return str.length * 2;
}
Module["lengthBytesUTF16"] = lengthBytesUTF16;
function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;
  var str = "";
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(ptr + i * 4) >> 2];
    if (utf32 == 0) break;
    ++i;
    if (utf32 >= 65536) {
      var ch = utf32 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}
Module["UTF32ToString"] = UTF32ToString;
function stringToUTF32(str, outPtr, maxBytesToWrite) {
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 2147483647;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 55296 && codeUnit <= 57343) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
    }
    HEAP32[outPtr >> 2] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  HEAP32[outPtr >> 2] = 0;
  return outPtr - startPtr;
}
Module["stringToUTF32"] = stringToUTF32;
function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
    len += 4;
  }
  return len;
}
Module["lengthBytesUTF32"] = lengthBytesUTF32;
function __embind_register_std_wstring(rawType, charSize, name) {
  name = readLatin1String(name);
  var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
  if (charSize === 2) {
    decodeString = UTF16ToString;
    encodeString = stringToUTF16;
    lengthBytesUTF = lengthBytesUTF16;
    getHeap = () => HEAPU16;
    shift = 1;
  } else if (charSize === 4) {
    decodeString = UTF32ToString;
    encodeString = stringToUTF32;
    lengthBytesUTF = lengthBytesUTF32;
    getHeap = () => HEAPU32;
    shift = 2;
  }
  registerType(rawType, {
    name: name,
    fromWireType: function (value) {
      var length = HEAPU32[value >> 2];
      var HEAP = getHeap();
      var str;
      var decodeStartPtr = value + 4;
      for (var i = 0; i <= length; ++i) {
        var currentBytePtr = value + 4 + i * charSize;
        if (i == length || HEAP[currentBytePtr >> shift] == 0) {
          var maxReadBytes = currentBytePtr - decodeStartPtr;
          var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
          if (str === undefined) {
            str = stringSegment;
          } else {
            str += String.fromCharCode(0);
            str += stringSegment;
          }
          decodeStartPtr = currentBytePtr + charSize;
        }
      }
      _free(value);
      return str;
    },
    toWireType: function (destructors, value) {
      if (!(typeof value == "string")) {
        throwBindingError("Cannot pass non-string to C++ string type " + name);
      }
      var length = lengthBytesUTF(value);
      var ptr = _malloc(4 + length + charSize);
      HEAPU32[ptr >> 2] = length >> shift;
      encodeString(value, ptr + 4, length + charSize);
      if (destructors !== null) {
        destructors.push(_free, ptr);
      }
      return ptr;
    },
    argPackAdvance: 8,
    readValueFromPointer: simpleReadValueFromPointer,
    destructorFunction: function (ptr) {
      _free(ptr);
    },
  });
}
Module["__embind_register_std_wstring"] = __embind_register_std_wstring;
function __embind_register_void(rawType, name) {
  name = readLatin1String(name);
  registerType(rawType, {
    isVoid: true,
    name: name,
    argPackAdvance: 0,
    fromWireType: function () {
      return undefined;
    },
    toWireType: function (destructors, o) {
      return undefined;
    },
  });
}
Module["__embind_register_void"] = __embind_register_void;
function _abort() {
  abort("");
}
Module["_abort"] = _abort;
function _emscripten_memcpy_big(dest, src, num) {
  HEAPU8.copyWithin(dest, src, src + num);
}
Module["_emscripten_memcpy_big"] = _emscripten_memcpy_big;
function getHeapMax() {
  return HEAPU8.length;
}
Module["getHeapMax"] = getHeapMax;
function abortOnCannotGrowMemory(requestedSize) {
  abort("OOM");
}
Module["abortOnCannotGrowMemory"] = abortOnCannotGrowMemory;
function _emscripten_resize_heap(requestedSize) {
  var oldSize = HEAPU8.length;
  requestedSize = requestedSize >>> 0;
  abortOnCannotGrowMemory(requestedSize);
}
Module["_emscripten_resize_heap"] = _emscripten_resize_heap;
embind_init_charCodes();
BindingError = Module["BindingError"] = extendError(Error, "BindingError");
InternalError = Module["InternalError"] = extendError(Error, "InternalError");
init_emval();
UnboundTypeError = Module["UnboundTypeError"] = extendError(
  Error,
  "UnboundTypeError"
);
var wasmImports = {
  k: __embind_register_bigint,
  j: __embind_register_bool,
  i: __embind_register_emval,
  f: __embind_register_float,
  g: __embind_register_function,
  b: __embind_register_integer,
  a: __embind_register_memory_view,
  e: __embind_register_std_string,
  c: __embind_register_std_wstring,
  m: __embind_register_void,
  d: _abort,
  h: _emscripten_memcpy_big,
  l: _emscripten_resize_heap,
};
var asm = createWasm();
var ___wasm_call_ctors = function () {
  return (___wasm_call_ctors = Module["asm"]["o"]).apply(null, arguments);
};
var _malloc = function () {
  return (_malloc = Module["asm"]["p"]).apply(null, arguments);
};
var ___getTypeName = (Module["___getTypeName"] = function () {
  return (___getTypeName = Module["___getTypeName"] = Module["asm"]["r"]).apply(
    null,
    arguments
  );
});
var __embind_initialize_bindings = (Module["__embind_initialize_bindings"] =
  function () {
    return (__embind_initialize_bindings = Module[
      "__embind_initialize_bindings"
    ] =
      Module["asm"]["s"]).apply(null, arguments);
  });
var ___errno_location = function () {
  return (___errno_location = Module["asm"]["t"]).apply(null, arguments);
};
var _free = function () {
  return (_free = Module["asm"]["u"]).apply(null, arguments);
};
var stackSave = function () {
  return (stackSave = Module["asm"]["v"]).apply(null, arguments);
};
var stackRestore = function () {
  return (stackRestore = Module["asm"]["w"]).apply(null, arguments);
};
var stackAlloc = function () {
  return (stackAlloc = Module["asm"]["x"]).apply(null, arguments);
};
var calledRun;
dependenciesFulfilled = function runCaller() {
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller;
};
function run() {
  if (runDependencies > 0) {
    return;
  }
  preRun();
  if (runDependencies > 0) {
    return;
  }
  function doRun() {
    if (calledRun) return;
    calledRun = true;
    Module["calledRun"] = true;
    if (ABORT) return;
    initRuntime();
    if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
    postRun();
  }
  if (Module["setStatus"]) {
    Module["setStatus"]("Running...");
    setTimeout(function () {
      setTimeout(function () {
        Module["setStatus"]("");
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
if (Module["preInit"]) {
  if (typeof Module["preInit"] == "function")
    Module["preInit"] = [Module["preInit"]];
  while (Module["preInit"].length > 0) {
    Module["preInit"].pop()();
  }
}
run();
