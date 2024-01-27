const mongoose = require("mongoose");


// mongoose.connect("mongodb://localhost:27017/simpleForm1")
mongoose.connect("mongodb+srv://kripeshmainali100:r4DfzK8p1WzHm9sd@forms.zra4bcv.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log(`conneted`);
    
})
.catch((err)=>{
    console.log(err);
    
})
