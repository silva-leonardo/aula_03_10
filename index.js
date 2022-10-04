const{
    Client
} = require ('pg')
const client = new Client ({
    user: '',
    host: 'motty.db.elephantsql.com',
    database: '',
    passoword: '',
    port: '5432',
});
test = async () => {
    await client.connect()
    console.log('foi')
}
test()
