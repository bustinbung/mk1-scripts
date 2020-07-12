cb = function(choice) {
  switch(choice) {
  case 0:
    confirm("Are you sure you want to respring?", "", function(ans) {if (ans) {device.respring();}});
    break;
  case 1:
    confirm("Are you sure you want to lock?", "", function(ans) {if (ans) {device.lock();}});
    break;
  case 2:
    confirm("Are you sure you want to shutdown?", "", function(ans) {if (ans) {device.shutdown();}});
    break;
  case 3:
    confirm("Are you sure you want to reboot?", "", function(ans) {if (ans) {device.reboot();}});
    break;
  case 4:
    break;
  }
}

menu("Power Menu", "", ["Respring", "Lock", "Shutdown", "Reboot", "Cancel"], function(choice) {cb(choice)});