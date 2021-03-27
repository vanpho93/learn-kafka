import { KafkaStreams } from 'kafka-streams'

const factory = new KafkaStreams({
  kafkaHost: 'localhost:9092'
})

const stream = factory.getKStream()

stream
  .from('nodejs-test-kstream')
  .filter((item) => item.value.toString() % 2 === 0)
  .map(item => item.value.toString() * 10)
  .to('square-of-nodejs-test-kstream')

stream.start()
