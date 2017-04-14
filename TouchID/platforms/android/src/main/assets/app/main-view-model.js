var observable = require("data/observable");
var platform = require("platform");
var touchid = require("nativescript-touchid");
var dialogs = require("ui/dialogs");
var DemoAppModel = (function (_super) {
  __extends(DemoAppModel, _super);
  function DemoAppModel() {
    _super.call(this);
  }

  DemoAppModel.prototype.doCheckAvailable = function () {
    if (touchid) {
      touchid.available().then(
          function (avail) {
            dialogs.alert({
              title: "Touch ID available?",
              message: avail ? "YES" : "NO",
              okButtonText: "OK"
            });
          }
      );
    }
  };

  DemoAppModel.prototype.doCheckFingerprintsChanged = function () {
    if (touchid) {
      touchid.didFingerprintDatabaseChange().then(
          function (changed) {
            dialogs.alert({
              title: "Fingerprints changed?",
              message: changed ? "YES" : "NO",
              okButtonText: "OK"
            });
          }
      );
    }
  };

  DemoAppModel.prototype.doVerifyFingerprint = function () {
    if (touchid) {
      touchid.verifyFingerprint({
        message: 'Scan yer finger' // optional
      }).then(
          function () {
            dialogs.alert({
              title: "Fingerprint OK",
              okButtonText: "Sweet"
            });
          },
          function (error) {
            dialogs.alert({
              title: "Fingerprint NOT OK",
              message: (error.code ? "Error code: " + error.code : ""),
              okButtonText: "Mmkay"
            });
          }
      );
    }
  };
  
  DemoAppModel.prototype.doVerifyFingerprintWithCustomFallback = function () {
    if (touchid) {
      touchid.verifyFingerprintWithCustomFallback({
        message: 'Scan yer finger', // optional
        fallbackMessage: 'Enter PIN' // optional
      }).then(
          function () {
            dialogs.alert({
              title: "Fingerprint OK",
              okButtonText: "Sweet"
            });
          },
          function (error) {
            dialogs.alert({
              title: "Fingerprint NOT OK",
              message: (error.code ? "Error code: " + error.code : ""),
              okButtonText: "Mmkay"
            });
          }
      );
    }
  };
  

  return DemoAppModel;
})(observable.Observable);
exports.DemoAppModel = DemoAppModel;
exports.mainViewModel = new DemoAppModel();
