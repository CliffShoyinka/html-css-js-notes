const Logger = reguire('./logger');
const logger = new logger();

//listener kayit et
logger.on('connection', function(args) {
    console.log("Bağlantı kuruldu: ", args);
});

logger.log('mehmethan login oldu');