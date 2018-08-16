const initialState = {
  text: '',
  isAuthorized: {
    commands: { send: { forPublic: true } },
    events: { sent: { forPublic: true } }
  }
}

const commands = {
  send (domain, command) {
    domain.events.publish('sent', {
      text: command.data
    })
  }
}

const events = {
  sent (domain, event) {
    domain.setState({
      text: event.data.text
    })
  }
}