import { Kafka } from 'kafkajs'

export const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: JSON.parse(process.env.KAFKA_BROKERS),
})
