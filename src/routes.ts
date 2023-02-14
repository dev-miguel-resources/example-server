import http from "http"

export default interface Route {
    path: string
    resolve: (
        req: http.IncomingMessage,
        res: http.ServerResponse
    ) => void
}

type Routes = Route[]

const routes: Routes = [
    {
        path: '/user/description',
        resolve(req: http.IncomingMessage , res: http.ServerResponse) {
            res.writeHead(200, { 'content-Type': 'text/plain'})
            res.write('User: Jorge Portocarrero')
            res.end()
        }
    },
    {
        path: '/users/list',
        resolve(req, res) {
            res.writeHead(200, { 'content-Type': 'application/json'})
            res.write(
               JSON.stringify([
                { nickname: 'porta', active: true },
                { nickname: 'tranceCode', active: true },
               ]) 
            )
            res.end()
        } 
    }
]

export const getRoute = (path: string): Route | undefined => 
    routes.find((route: Route) => route.path === path)

export const notFound = (
    req: http.IncomingMessage,
    res: http.ServerResponse
): void => {
    res.writeHead(404, { 'content-Type': 'text/plain'})
    res.end('Route not found')
}
