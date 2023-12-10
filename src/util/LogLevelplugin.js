import {SendLogInfo} from './SendLogs';
export  const initiatePlugin = (log) => {
    console.log('here we are');
    log.enableAll(true);
    let originalFactory = log.methodFactory;
    log.methodFactory = function (methodName, logLevel) {
      var rawMethod = originalFactory(methodName, logLevel);

      return function (message) {
       //rawMethod(message);
        //console.log("my message: ", message);
        SendLogInfo(message);
      };
    };
  };