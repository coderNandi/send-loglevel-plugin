
import {HandleloghttpFailure} from './HandleSentLogFailure';
export const SendLogInfo =(message)=>{
    const modifiedMessage = `${new Date()}- ${message}`;
    console.log('message sent', modifiedMessage);
    HandleloghttpFailure(modifiedMessage);

    //Try resending logs
    if(true){
        localStorage.clear();
    }
}