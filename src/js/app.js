// global variables
let localChatter, remoteChatter
let pendingMessages = 0

// entry
$(document).ready(function () {
   ;[localChatter, remoteChatter] = pickChatters(NAMES_1, NAMES_2)
   bindMessageSubmissionHandler()
   sendRandomMessagesToChat(5)
})

function pickChatters(namesArray1, namesArray2) {
   chatter1 = pickRandomElementFromArray(namesArray1)
   chatter2 = pickRandomElementFromArray(namesArray2)
   return [chatter1, chatter2]
}

function bindMessageSubmissionHandler() {
   bindToEnterKey("#message-input", handleMessageSubmit)
   $(".fab-container").on("click", handleMessageSubmit)
}

function startNewMessageAnimation(newMessage) {
   let byMe = newMessage.sender === localChatter
   $(".message:last").addClass(`slide-${byMe ? "left" : "right"}`)
   scrollElementToBottom(".chat-container")
}

async function sendRandomMessagesToChat(howMany) {
   for (let i = 0; i < howMany; i++) {
      let senderName = Math.random() > 0.5 ? localChatter : remoteChatter
      let randomMessage = createRandomMessage(senderName)
      sendMessageToChat(randomMessage, senderName === localChatter)
      await sleep(100)
   }
}

function updateIsTypingString(isTyping) {
   let string = isTyping ? `${remoteChatter} is typing...` : ""
   $("#is-typing").text(string)
}

function triggerDelayedAutoReply() {
   let timeToWait = 1000 + Math.random() * 1000
   let randomMessage = createRandomMessage(remoteChatter)
   updateIsTypingString(++pendingMessages)
   setTimeout(() => {
      randomMessage.time = new Date().valueOf()
      sendMessageToChat(randomMessage, false)
      updateIsTypingString(--pendingMessages)
   }, timeToWait)
}

function scrollElementToBottom(selector) {
   $(selector).scrollTop($(selector)[0].scrollHeight)
}

function handleMessageSubmit(event) {
   let inputValue = $("#message-input").val()
   let message = {
      sender: localChatter,
      text: inputValue || pickRandomElementFromArray(LOREM),
      time: new Date().valueOf(),
   }

   $("#message-input").val("")
   sendMessageToChat(message, true)
   triggerDelayedAutoReply()
}

function sendMessageToChat(newMessage, byMe) {
   let component = createMessageComponent(newMessage, byMe)
   $(".chat-container").append(component)
   scrollElementToBottom(".chat-container")
}

function bindToEnterKey(selector, callback) {
   $(selector).on("keyup", function (e) {
      if (e.keyCode === 13) {
         e.preventDefault()
         callback(e)
      }
   })
}

function sleep(milliseconds) {
   return new Promise((resolve, _) => {
      setTimeout(() => {
         resolve()
      }, milliseconds)
   })
}
