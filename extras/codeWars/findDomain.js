function domainName(url) {
  // let searchBefore = url.search(".com")
  let searchBefore = url.includes("www.")
    ? url.indexOf(".", 4)
    : url.indexOf(".", 1);

  
    let searchAfter =
    url.charAt(3) == "." ? url.indexOf(".") + 1 : url.indexOf("/") + 2;
  


  return console.log(url.substring(searchBefore, searchAfter));
}

domainName("https://www.i2a31a-7i1slin4.us/archive/");
