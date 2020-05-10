class BleAdaptorNoble {
  constructor(scanResultCallback=null) {
    this._scanServiceUUIDs = [],
    this._scanAllowDuplicated = false;
    this._scanResultCallback = scanResultCallback;
    this._adapterEnabled = false;
    this._nobleInstance =  require('@abandonware/noble');

    this._nobleInstance.on('stateChange', this.adapterStateChange);
    this._nobleInstance.on('discover', this.discoveredPeripheral);
  }

  set scanResultCallback(callback) {
    this._scanResultCallback = callback;
  }

  get scanResultCallback() {
    return this._scanResultCallback;
  }

  set scanAllowDuplicated(allowDuplicated) {
      this._scanAllowDuplicated = allowDuplicated;
  }

  get scanAllowDuplicated() {
    return this._scanAllowDuplicated;
  }

  get adapterEnabled() {
    return this._adapterEnabled;
  }

  adapterStateChange(state) {
    console.log(`Noble adapter state change event : ${state}`);
    if (state === 'poweredOn') {
      this._adapterEnabled = true;
    } else {
      this._adapterEnabled = false;
    }
  }

  discoveredPeripheral(peripheral) {
    console.log(`Discovered peripheral ${peripheral}`);
  }

  startScan() {
    console.log("Starting scan");
  }
}

module.exports = BleAdaptorNoble;