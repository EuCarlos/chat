const socket = io()

const contentWrapperChat = document.getElementById('contentWrapperChat')
const contentWrapper = document.getElementById('contentWrapper')

const LOGIN = () => {
    const __USERNAME = document.getElementById('username').value

    if(__USERNAME == "" || __USERNAME == " ") {
        alert("Invalid username")
        alert(__USERNAME)
    } else {
        contentWrapper.style.display = "none"
        contentWrapperChat.style.display = "block"
    }
}