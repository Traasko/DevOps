const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, printf} = format;

const todayDate = new Date();
todayDate.setMinutes(todayDate.getMinutes() - todayDate.getTimezoneOffset());
let formatedDate = todayDate.toISOString().slice(0, 10);

const loggerFormat = printf(({level, message, label, params}) => {

    let timestamp = new Date().toISOString();

    let finalString = `{"date":"${timestamp}", "label":"${label}", "level":"${level}", "message": "${message}"},`;

    console.log(finalString);

    return finalString;
});

module.exports = createLogger({
    level: 'info',
    format: loggerFormat,
    defaultMeta: {service: 'DEBUG'},
    transports: [
        new transports.File({filename: `logs/${formatedDate}/error.json`, level: 'error'}),
        new transports.File({filename: `logs/${formatedDate}/info.json`, level: 'info'}),
        new transports.File({filename: `logs/${formatedDate}/combined.json`}),
    ],
});