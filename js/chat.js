const db = initializeFirebase()

function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyATZLyy_MOab9_lxmw7FK_rVawyqe8oXMo",
    authDomain: "somos-netflix.firebaseapp.com",
    projectId: "somos-netflix",
    storageBucket: "somos-netflix.appspot.com",
    messagingSenderId: "288140352053",
    appId: "1:288140352053:web:28be15dd8f2a10ee1eef7c",
    measurementId: "G-1HN7JJL8DG"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  return firebase.database()
}

class CHAT {
  refreshChat() {
    const chat_content_container = document.getElementById('chat_content_container')

    db.ref('chats/').on('value', function(messages_object) {        
      chat_content_container.innerHTML = ''        
      
      if(messages_object.numChildren() == 0){
        return
      }
      
      var messages = Object.values(messages_object.val());
      var guide = [] 
      var unordered = []
      var ordered = []

      for (var i, i = 0; i < messages.length; i++) {
        guide.push(i+1)          
        unordered.push([messages[i], messages[i].index]);
      }

      guide.forEach(function(key) {
        var found = false
        unordered = unordered.filter(function(item) {
          if(!found && item[1] == key) {
            ordered.push(item[0])
            found = true
            
            return false
          } else {
            return true
          }
        })
      })

      ordered.forEach(function(data) {
        var name = data.name
        var message = data.message

        var message_container = document.createElement('div')
        message_container.setAttribute('class', 'message_container')

        var message_inner_container = document.createElement('div')
        message_inner_container.setAttribute('class', 'message_inner_container')

        var message_user_container = document.createElement('div')
        message_user_container.setAttribute('class', 'message_user_container')

        var message_user = document.createElement('p')
        message_user.setAttribute('class', 'message_user')
        message_user.textContent = `${name}`

        var message_content_container = document.createElement('div')
        message_content_container.setAttribute('class', 'message_content_container')

        var message_content = document.createElement('p')
        message_content.setAttribute('class', 'message_content')
        message_content.textContent = `${message}`

        message_user_container.append(message_user)
        message_content_container.append(message_content)
        message_inner_container.append(message_user_container, message_content_container)
        message_container.append(message_inner_container)

        chat_content_container.append(message_container)
      });        
      
      chat_content_container.scrollTop = chat_content_container.scrollHeight;
    })
  }
  
  enableMessageSending() {
    const parent = this

    const chat_input = document.getElementById('chat_input_message')
    
    console.log('chat_input', chat_input.value);

    chat_input.onkeyup = function(event){
      event.preventDefault()
      
      if(event.keyCode === 13 && chat_input.value.length > 0) {
        parent.sendMessage(chat_input.value)
      }
    }

    const chat_input_send = document.getElementById('chat_button_message')
    chat_input_send.onclick = function() {
      chat_input_send.classList.remove('enabled')
      
      if(chat_input.value.length <= 0){
        return null;
      }
      
      parent.sendMessage(chat_input.value)
    }
  }

  sendMessage(message){
    const parent = this

    parent.loadingAnimation();

    if(parent.getName() == null && message == null){
      return
    }
          
    db.ref('chats/').once('value', function(message_object) {
      const index = parseFloat(message_object.numChildren()) + 1

      const messageObject = {
        name: parent.getName(),
        message: message,
        index: index
      }

      parent.clearChatInputs();
      
      db.ref('chats/' + `message_${index}`).set(messageObject)
      .then(function() {          
        parent.showSuccessMessage()
      })
    })
  }

  getName(){
    return $('#chat_fullname').val();
  }

  clearChatInputs() {
    document.getElementById('chat_fullname').value = '';
    document.getElementById('chat_input_message').value = '';
  }

  showSuccessMessage() {
    $('#chat-loading').addClass('d-none');
    $('#chat-success-message').removeClass('d-none');
  }

  loadingAnimation() {
    $('#chat-form').addClass('d-none');
    $('#chat-loading').removeClass('d-none');
    $('#chat_button_message').attr('disabled', true);
  }
}

const app = new CHAT();
app.enableMessageSending();

function showChatForm() {
  $('.panelBottom').addClass('d-none');
  $('.chat-area').removeClass('d-none');
}

function closeSuccessMessage() {
  $('.chat-area').addClass('d-none');
  // $('#chat-success-message').addclass('d-none');
  $('#chat-success-message').addClass('d-none');
  $('#chat_button_message').attr('disabled', false);
  $('#chat-form').removeClass('d-none');
  $('.panelBottom').removeClass('d-none');
}