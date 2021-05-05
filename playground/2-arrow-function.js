const square1 = function (x) {
  return x * x
}

const square2 = (x) => {
  return x * x
}

const square3 = (x) => x * x

console.log(square1(2))
console.log(square1(3))
console.log(square1(4))

const event1 = {
  name: 'Birthday Party',
  printGuestList: function () {
    console.log(`Guest list for ${this.name}`)
  }
}

const event2 = {
  name: 'Birthday Party',
  printGuestList() {
    console.log(`Guest list for ${this.name}`)
  }
}

const event3 = {
  name: 'Birthday Party',
  printGuestList: () => {
    console.log(`Guest list for ${this.name}`)
  }
}

const event4 = {
  name: 'Birthday Party',
  printGuestList: () => {
    console.log(`Guest list for ${event4.name}`)
  }
}

event1.printGuestList()
event2.printGuestList()
event3.printGuestList() // this.name is undefined inside arrow function
event4.printGuestList() // can use self reference event4.name

const event5 = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Abdul', "Sven"],
  printGuestList() {
    console.log(`Guest list for ${this.name}`)
    
    this.guestList.forEach(function (guest) {
      console.log(`${guest} is attending ${this.name}`) // 'this' is not bound to the object because it's inside the forEach; prints undefined
    })
  }
}

const event6 = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Abdul', "Sven"],
  printGuestList() {
    console.log(`Guest list for ${this.name}`)
    
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`) // 'this' is bound to the object if it's wrapped by an arrow function
    })
  }
}

event5.printGuestList()
event6.printGuestList()