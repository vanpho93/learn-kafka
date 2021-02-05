import { promisify } from 'util'
import { kafka } from './kafka'

const producer = kafka.producer()

const texts = [
  'Brian',
  'Pho Nguyen',
  'Crispy',
  'Seaweed',
]

export async function start() {
  await producer.connect()
  for (const text of texts) {
    await producer.send({
      topic: 'test-topic-in-nodejs',
      messages: [
        { value: text },
      ],
    })
    await promisify(setTimeout)(1000)
  }
}

// start().finally(() => process.exit(0))
