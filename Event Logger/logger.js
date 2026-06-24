const fs = require("fs")
const os = require('os')

const EventEmitter = require('events')

class Logger extends EventEmitter{
 log(message){
    this.emit('Message', message) //emit means through the msg
 }
}

const logger = new Logger()
const logFile = './eventlog.txt'

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event} \n`
    fs.appendFileSync(logFile, logMessage)

}
logger.on('Message', logToFile)

setInterval(() => {
    const memoryUsage = os.freemem() / os.totalmem() * 100
    logger.log(`Current memory usage : ${memoryUsage.toFixed(2)}`)
}, 3000)

logger.log(`Application Started`)
logger.log(`Application event occured`)