if (wifi.networkName() == undefined && currentApp.bundleID() !== "com.google.Maps" && cellularData.isEnabled()) {
  menu("You're disconnected", "Turn off data?", ["Yes", "No"], (cb) => {
    if (cb === 0) {
      cellularData.setEnabled(false);
    }
  })
}

if (!cellularData.isEnabled() && wifi.networkName() !== undefined) {
  alert("You're connected", "Turning on data");
  cellularData.setEnabled(true);
}
