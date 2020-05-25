
// 发布订阅模式
// 发布人 - 调度中心 -订阅人

// 调度中心
class Topic {
  /**
   * {Object} topics
   * {Array} topics[key]
   */
  topics = {}; // { p1: [] }

  /**
   * @param {string} topic 订阅者的name
   * @param {Function} fn 订阅函数
   */
  subscribe = (topic, fn) => {
    this.topics[topic] = fn;
  };

  publish = () => {
    for (let key in this.topics) {
      this.topics[key]();
    }
  };
}

const topic = new Topic();

class Person {
  constructor(name) {
    this.name = name;
  }

  /**
   * @param {Object} topic 调度中心
   * @param {Function} fn 订阅函数
   */
  subscribe = (topic, fn) => {
    topic.subscribe(this.name, fn);
  };

  // 只有发布人才会调用这个
  publish = (topic) => {
    topic.publish();
  };
}

const subscriber = new Person('subscriber');

const publisher = new Person('publisher');

subscriber.subscribe(topic, () => console.log('有人订阅了'));

publisher.publish(topic);
