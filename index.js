const {Command} = require('commander')
const {listContacts,
  getContactById,
  addContact,
  removeContact} = require('./contacts')

const program = new Command()
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')

program.parse(process.argv)

const argv = program.opts()

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // listContacts()
      //   .then((contacts) => console.table(contacts))
      //   .catch(console.error)

        case 'list':
            listContacts();

      break;

    // case 'get':
    //   getContactById(id)
    //     .then((contact) => {
    //       if(contact) {
    //         console.log('Contact found!')
    //         console.log(contact)
    //       } else {
    //         console.log('Contact not found!')
    //       }
    //     })
    //     .catch(console.error)

          case 'get':
              getContactById(id);
      break;

    // case 'add':
    //   addContact(name, email, phone)
    //     .then((contact) => {
    //       console.log('Add new contact!')
    //       console.log(contact)
    //     })
    //     .catch(console.error)

          case 'add':
              addContact(name, email, phone);
      break;

    // case 'remove':
    //   removeContact(id)
    //     .then((contact) => {
    //       if(contact) {
    //         console.log('Contact remowed')
    //       } else {
    //         console.log('Contact not found!')
    //       }
    //     })
        
    //     .catch(console.error)

          case 'remove':
              removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)