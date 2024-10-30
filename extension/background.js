async function blockSwitchedSites(activeInfo, data) {
    console.log('Tab switched');
            try{
                let currentTab = await chrome.tabs.get(activeInfo.tabId);
                let sites = data.sites;

                if(sites.includes(currentTab.url)){
                    chrome.tabs.update({url: 'http://localhost:3000/blocked.html'}); 
                }
            } catch (error){
                console.error('Error getting tab info:', error);
            }
}

function blockUpdatedSites(tabId, changeInfo, tab, data) {
    console.log('Tab updated');

    let sites = data.sites
    if(sites.includes(tab.url)){
        chrome.tabs.update({url: 'http://localhost:3000/blocked.html'}); 
    }
        
}


let tabSwitchListener = null;
let tabUpdateListener = null; 

let timerInterval;

function incrementTimer(startTime){
    let currentTime = startTime; 

    timerInterval = setInterval(() => {
        chrome.storage.local.set({currentTime: currentTime += 1 })
    }, 1000)
}

chrome.runtime.onMessage.addListener((request) => {
    const data = request.data; 
    // incrementTimer(data.startTime); 

    console.log("Received message in background:", request);
    if(data.state == 'start'){
        tabSwitchListener = (activeInfo) => blockSwitchedSites(activeInfo, data);
        chrome.tabs.onActivated.addListener(tabSwitchListener); 

        tabUpdateListener = (tabId, changeInfo, tab) => blockUpdatedSites(tabId, changeInfo, tab, data);
        chrome.tabs.onUpdated.addListener(tabUpdateListener); 
        
    } else if(data.state == 'end') {
        chrome.tabs.onActivated.removeListener(tabSwitchListener); 
        chrome.tabs.onUpdated.removeListener(tabUpdateListener); 
        // clearInterval(timerInterval); 
        // chrome.storage.local.set({currentTime: 0})
    }
})

