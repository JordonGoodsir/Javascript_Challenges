function domainName(url){
    
    let searchBefore = url.search(".com")
    let serchAfter = url.indexOf(".") + 1
    return url.substring(searchBefore, serchAfter)
  } 

  domainName("https://www.cnet.com")