const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const contactsPath = path.resolve('./db/contacts.json')

function listContacts() {
  fs.readFile(contactsPath, 'utf8', (error, data) => {
    if(error) {
      return console.log(error)
    }

    const contacts = JSON.parse(data)
    return console.table(contacts)
  })
}



function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', (error, data) => {
    if(error) {
      return console.log(error)
    }

    const contacts = JSON.parse(data);

    const contact = contacts.find(contact => {
      if(contact.id === contactId) {
        console.log(`Get contact by ID ${contactId}:`);
        console.table(contact);
        return contacts
      }
    })
  
    if(contact === null) {
      console.log(`Contact with ID ${contactId} not found`)
    }

    
})}



function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
    if (error) {
        return console.log(error);
    }

    const contacts = JSON.parse(data);

    contacts.push({
      id: crypto.randomUUID(),
      name: name,
      email: email,
      phone: phone,
  })

  console.log('Contacts added successfully! New list of contacts:');
  console.table(contacts);

  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), error => {
    if (error) {
        return console.log(error)
    }
  })
})}




function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf-8', (error, data) => {
      if (error) {
          return console.log(error)
      }

      const contacts = JSON.parse(data);
      const newContacts = contacts.filter(contact => contact.id !== contactId);

      console.log('Contact deleted successfully!')
      console.table(newContacts);

      fs.writeFile(contactsPath, JSON.stringify(newContact, null, 2), error => {
        if (error) {
            return console.log('error :', error)
      }
    })
})}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
}





// const contactsPath = async () => {
//   const result = await fs.readFile(path.join(__dirname, 'contacts.json'), 'utf8');
//   const contacts = JSON.parse(result);
//   return contacts;
// };


// function listContacts() {
//   return contactsPath();
// }

// async function getContactById(contactId) {
//   const contacts = await contactsPath();
//   const [result] = contacts.filter((contact) => contact.id === contactId);
//   return result;
// }

// async function removeContact(contactId) {
//   let contacts = await contactsPath();
//   const result = contacts.filter((contact) => contact.id !== contactId);
//   // return result;
//   const newContactsList = fs.writeFile(contactsPath, JSON.stringify(result), error => {
//     if (error) {
//         return console.log('error :', error);
//     }
//   })
//   console.log(newContactsList)
//   return newContactsList
// }

// async function addContact(name, email, phone) {
//   const contacts = await contactsPath();
//   const newContact = {
//     id: crypto.randomUUID(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await fs.writeFile(
//       path.join(__dirname, 'contacts.json'),
//       JSON.stringify(contacts, null, 2),
//       'utf8');
//   return newContact;