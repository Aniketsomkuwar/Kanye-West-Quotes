const express = require("express");

const app = express();

const https = require('https');
const port = 3000;

app.use(express.static("public"));

app.set('view engine', 'ejs')

app.listen(port, () => {

    console.log('server is running on port ' + port);
    // https://api.kanye.rest/
});

app.get("/", (req, res) => {




    https.get('https://api.kanye.rest/', (response) => {
        //   console.log('statusCode:', res.statusCode);
        //   console.log('headers:', res.headers);

        response.on('data', (d) => {
            const obj = JSON.parse(d);
            // res.send(obj.quote)
            res.render('server/index', {
                
                quote:obj.quote
              
            });
        });


    })


});

app.post("/", (req, res) => {



    res.redirect('back');
})
