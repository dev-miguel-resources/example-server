import http, { IncomingMessage, ServerResponse } from "http"


export abstract class Bootstrap {
    // design pattern: fachade
    abstract initialize(): Promise<string | Error>
}

export default class extends Bootstrap {

    constructor(
        private readonly requestObservable: (
            req: IncomingMessage,
            res: ServerResponse
        ) => void
    ) {
        super()
    }

    initialize() {
        return new Promise<string | Error>((resolve, reject) => {
            const server = http.createServer(this.requestObservable)

            server
                .listen(3000)
                .on("listening", () => {
                    resolve("Promise resolve server successfully")
                    console.log("listening on port: 3000")
                })
                .on("error", (error) => {
                    reject(error)
                    console.log(error)
                })
        })
    }

}