import ServerBootstrap, { Bootstrap } from "./bootstrap/server.bootstrap"
import ApplicationNode from './app'

const serverBootstrap: Bootstrap = new ServerBootstrap(
    ApplicationNode.requestObservable
)

/*const startServer = async () => {
    try {
        const resultServer = await serverBootstrap.initialize()
        console.log(resultServer)
    } catch (err) { 
        console.log(err)
    }
}*/

/*serverBootstrap
    .initialize()
    .then((message) => console.log(message))
    .catch((err) => console.log(err))*/

;(async () => {
    try {
        const resultServer = await serverBootstrap.initialize()
        console.log(resultServer)
    } catch (err) { 
        console.log(err)
    }
})()