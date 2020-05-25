// 观察者模式
// 发布人 - 订阅人
class Person {
  // 订阅的人的列表
  list = []

  constructor(name) {
    // 订阅人名字
    this.name = name
  }

  publish = taskName => {
    this.list.forEach(o => o(taskName))
  }

  subscribe = (target, fn) => {
    // target 被订阅人的list
    target.list.push(fn)
  }
}

const p1 = new Person('person1')

const p2 = new Person('person2')

const p3 = new Person('person3')

p2.subscribe(p1, () => console.log('p2订阅了'))

p3.subscribe(p1, () => console.log('p3订阅了'))

p1.publish()
