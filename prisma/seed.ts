import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '7752c7e4-5ca3-4bb5-95f9-70ead600bff6',
            title: 'Unite Sumit',
            slug: 'unite-sumit',
            details: 'Evento de tecnologia',
            maximumAttendees: 150,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})