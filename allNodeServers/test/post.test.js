const expect = require("expect") 
const utilities = require("../src/util/utilities") 

const testDataFile = require("../src/data/blog_posts.test.json") 
const { fs } = require("fs") 
const testDataFileForWrite = utilities.getDataFileRelativeToApp(testDataFile)


beforeEach(() => { 
    setupData()
})  

describe("get all posts", () =>{ 
    
    test("gets post of exists"), ()=>{ 
        expect(Object.keys(utilities.getAllPosts({})).length.toBe(1))

    }   

    test("username of first post should be username"), ()=>{ 
       expect(utilities.getAllPosts({})["1"].username).toBe("username")  
    }
})

setUpData = () =>{ 
    testPostData = {} 
    testPost = {} 
    date = Date.now() 
    testPost.title = "test title" 
    testPost.username = "username" 
    testPost.create_date= date 
    testPost.modified_date= date 
    testPostData["1"] = testPost 

    fs.writeFileSync(testDataFileForWrite, JSON.stringify(testPostData)) 
    utilities.loadData(testDataFileForWrite)

}