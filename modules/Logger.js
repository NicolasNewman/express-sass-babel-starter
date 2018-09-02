const winston = require('winston'),
      path    = require('path');

const logfile = path.join(__dirname, 'logs/info-log.log');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'MM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.File({
            filename: 'logs/info.log',
            level: 'info'
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error'
        }),
        new winston.transports.Console({})
    ]
});

module.exports = {
    info: (message) => {
        logger.info(message);
    },

    error: (error) => {
        logger.error(error);
    }
}
