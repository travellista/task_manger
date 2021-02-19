const { poolMax } = require('oracledb');
const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = "allweaR123"  // set mypw to the hr schema password

async function run(quers) {

  let connection

  try {
    connection = await oracledb.getConnection( {
      user          : "dip",
      password      : mypw,
      connectString: "(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (ADDRESS = (PROTOCOL = TCP)(HOST = DESKTOP-O3VOEIR)(PORT = 15212)) (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = All_Wear)))",

      poolMax:10,
      poolIncrement: 0

      
      //connectString : "listener_allwear",


      
      
    });

    const result = await connection.execute(
quers
    );
    console.log(result.rows);
    var jsontest=JSON.stringify(result.rows)
    console.log(jsontest)

  } 
  catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}


 
module.exports.run=run;

