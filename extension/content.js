//retrieve content 

window.addEventListener('updateTime', (event) => {
    const startTime = parseInt(localStorage.getItem('startTime')); 
    let blockedSites = null; 

    if(event.key == 'start'){
        console.log("Dispatching updateTime with state:", event);
        console.log(startTime); 
    
        blockedSites = JSON.parse(localStorage.getItem('blockedSites'));
        const data = {
            state: 'start',
            time: startTime,
            sites: blockedSites
        }
        chrome.runtime.sendMessage({data : data});
        console.log(blockedSites); 
    } else {
        blockedSites = null; 
        const data = {
            state: 'end'
        }
        chrome.runtime.sendMessage({data : data});
    }
})

