let express = require ("express");
let app = express();

app.get("/", function(request , response) {
    response.send ("HellomNode.js!");
});

app.get("/folder/page", function(request,response) {
    var x = request.query.foo;
response.send({foo:x});
});
app.listen(591);