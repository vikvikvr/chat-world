function createMessageComponent(message, byMe) {
   let component = $(
      `<div class="message shadow ${byMe && "mine"}">
            <div class="message-sender">${message.sender}</div>
            <div class="message-text">${message.text}</div>
            <div class="message-time">${formatMessageTime(message.time)}</div>
         </div>`
   )

   return component
}

function formatMessageTime(timeAsMilliseconds) {
   let date = new Date(timeAsMilliseconds)
   let minutes = date.getMinutes()
   if (minutes < 10) minutes = "0" + minutes
   return `${date.getHours()}:${minutes}`
}
