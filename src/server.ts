import fastify from 'fastify'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { createEvent } from './routes/create-event'
import { registerForEvent } from './routes/register-for-event'
import { getEvent } from './routes/get-event'
import { getAttendeeBadge } from './routes/get-attendee-badge'
import { checkIn } from './routes/check-in'
import { getEventAttendees } from './routes/get-event-attendees'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent, { prefix: '/' })
app.register(registerForEvent, { prefix: '/' })
app.register(getEvent, { prefix: '/' })
app.register(getAttendeeBadge, { prefix: '/' })
app.register(checkIn, { prefix: '/' })
app.register(getEventAttendees, { prefix: '/' })

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
}) 