import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { format } from "@nx-and-azure-functions/format";

app.http('helloWorld', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: helloWorld
});

export async function helloWorld(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: format(name) };
};
