function blockSites(tabId, changeInfo, tab, data) {
    console.log('Tab updated');
    console.log(tab); 
    let sites = data.sites
    if(sites.includes(tab.url)){
        chrome.tabs.update({url: '/Users/yl/Documents/cstuff3/test-exte/blocked.html'}); 
    }
        
}

let tabUpdateListener = null; 



chrome.runtime.onMessage.addListener((request) => {
    const data = request.data; 

    console.log("Received message in background:", request);
    if(data.state == 'start'){
        tabUpdateListener = (tabId, changeInfo, tab) => blockSites(tabId, changeInfo, tab, data);
        chrome.tabs.onUpdated.addListener(tabUpdateListener); 
    } else if(data.state == 'end') {
        chrome.tabs.onUpdated.removeListener(tabUpdateListener); 
    }
})
