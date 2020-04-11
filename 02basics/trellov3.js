let myTodo = {
    day: 'Monday',
    meetingTodo: 0,
    meetingDone: 0,

    addMeet: function(meetingTodo){
        this.meetingTodo = this.meetingTodo + meetingTodo
    },

    subMeet: function(meetingDone){
        this.meetingDone = this.meetingDone + meetingDone
    },

    reset: function(){
        this.meetingTodo = 0
        this.meetingDone = 0
    },

    summary: function(){
        return `You have ${this.meetingTodo - this.meetingDone} meeting left for ${this.day}`
    },
}

myTodo.addMeet(3)
myTodo.addMeet(5)
myTodo.addMeet(2)
myTodo.addMeet(4)

myTodo.subMeet(5)

console.log(myTodo.summary());

myTodo.reset()

console.log(myTodo.summary());
