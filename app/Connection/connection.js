const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://akbarimanali1032:dobo987654@cluster.w2iocdu.mongodb.net/Recipe", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB Connection....done');
}).catch((error) => {
    console.log(error);
})