const app = require('./src/server');
const { PORT } = require('./src/config/envs');

// const { Character } = require('./src/data')

// Character.updateById( 1000,{ age: 28, gender:'male' }, {new: true}).then(res=>console.log(res))

app.listen(PORT, () => { 
    console.log(`Server database is running on port ${PORT}`);
})