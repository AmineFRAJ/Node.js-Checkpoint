const fs = require(`fs`)

 
    fs.writeFile(`welcome.txt`, `Hello Node`, function (err) {
        if (err) {
            console.log(err)
        }
        console.log("File created")
    })
    
 



//  console.log(fs)
