let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num) {
      this.meetings = this.meetings + num

    },

    summary: function() {
        return `You have ${this.meetings} meetings today`
    }
}



myTodos.addMeeting(4)
console.log(myTodos.summary());


// myTodos.addMeeting(4)

// Assignment

// Hnadle meeting done
// Create a function that can reset entire dayp

