
const config = {
    user :'MSSQL USERNAME',
    password :'MSSQL PASSWORD',
    server:'192.168.00.00',// <= Your Server address
    database:'DATABASE NAME',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : PORT
}

module.exports = config; 