function pickRandomElementFromArray(array) {
   let randomIndex = Math.floor(Math.random() * array.length)
   return array[randomIndex]
}

function createRandomDate(startDateObj, endDateObj) {
   let diff = endDateObj.getTime() - startDateObj.getTime()
   let randomDate = startDateObj.getTime() + Math.random() * diff
   return new Date(randomDate)
}

function createRandomMessage(senderName) {
   return {
      sender: senderName,
      text: pickRandomElementFromArray(LOREM),
      time: new Date().valueOf()
   }
}

const NAMES_1 = ["Adam", "Chloe", "Dan", "Felicity", "Han", "Jane"]

const NAMES_2 = ["Karter", "Lara", "Nicholas", "Paulina", "Rick", "Teresa"]

const LOREM = [
   "Morbi risus arcu, scelerisque id augue sed, ullamcorper lobortis libero.",
   "Aenean in sem at erat molestie rutrum. Ut sollicitudin auctor.",
   "Morbi pulvinar dui a ex convallis porta. Sed neque nisl.",
   "Vestibulum iaculis justo in accumsan pellentesque. Sed leo lacus, egestas.",
   "Mauris luctus fermentum sem et ultricies. Vestibulum ante ipsum primis.",
   "Pellentesque at gravida ex, eu.",
   "Duis sagittis dui non arcu.",
   "Etiam magna ex, sollicitudin sed.",
   "Cras cursus ligula nec velit.",
   "Integer finibus leo tortor, sed.",
   "Vestibulum eget ex.",
   "Mauris interdum eros.",
   "Pellentesque habitant morbi.",
   "Suspendisse a laoreet.",
   "Ut posuere enim."
]
