export const HandleloghttpFailure = (message)=>{
    saveToLocalStorage(message);
}

const saveToLocalStorage = (message)=>{
    let logs = [];
    let prevLogs = localStorage.getItem('userhistoryLog');
    console.log('log container', prevLogs);
    if(prevLogs){
        logs.push(message);
        logs.push(prevLogs)
    }else{
        logs.push(message)
    }
    localStorage.setItem('userhistoryLog', logs);
}

// const clearLocalStorage=()=>{
//     localStorage.clear();
// }