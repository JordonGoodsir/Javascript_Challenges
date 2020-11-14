placeOfOrigin = (data) => { 
    let ans = []

    data.map((v) => {  
        
        if (Object.keys(v)[1] == "country"){ 
            return ans.push(`The country of ${v.country} is home to ${v.name}`)
        } else { 
            return ans.push(`The city of ${v.city} is home to ${v.name}`)
        }
    })  

    return ans

}




placeOfOrigin([
    {
      name: 'Johannes Gutenberg',
      city: 'Mainz',
    },
    {
      name: 'Bi Sheng',
      country: 'China',
    },
  ]);