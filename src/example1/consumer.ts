import _ from 'lodash'
import { kafka } from './kafka'

const emailConsumer1 = kafka.consumer({ groupId: 'email-sender-group' })
const emailConsumer2 = kafka.consumer({ groupId: 'email-sender-group' })
const brazeConsumer1 = kafka.consumer({ groupId: 'braze-notification-group' })
const brazeConsumer2 = kafka.consumer({ groupId: 'braze-notification-group' })

const consumers = [
  emailConsumer1,
  emailConsumer2,
  brazeConsumer1,
  brazeConsumer2,
]

_.forEach(consumers, (consumer, index) => {
  consumer.subscribe({ topic: 'test-consumer-topic', fromBeginning: true })
  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
        consumerIndex: index,
      })
    }
  })
})
