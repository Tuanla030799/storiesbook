import {
  IncomingMessage,
  Server,
  ServerResponse,
  createServer as createHttpServer,
} from 'http'

export const createServer = async (
  handleRequest: (
    request: IncomingMessage,
    response: ServerResponse
  ) => Promise<void>
): Promise<Server> => {
  return createHttpServer(
    (request: IncomingMessage, response: ServerResponse) => {
      handleRequest(request, response)
    }
  )
}
