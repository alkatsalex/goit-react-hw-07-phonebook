// import axios from 'axios';

// const URL = 'https://65a431c1a54d8e805ed4959f.mockapi.io';

// export const getContactsAPI = async () => {
//   const respons = await axios.get(
//     `https://65a431c1a54d8e805ed4959f.mockapi.io/contacts`
//   );
//   const data = respons.data;
//   return data;
// };

// export const postNewContact = async newContact => {
//   fetch('https://65a431c1a54d8e805ed4959f.mockapi.io/contacts', {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     // Send your data in the request body as JSON
//     body: JSON.stringify(newContact),
//   })
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//       // handle error
//     })
//     .then(contact => {
//       return contact;
//     })
//     .catch(error => {
//       return error;
//     });
// };

export const postNewContact = async newContact => {
  try {
    const response = await fetch(
      'https://65a431c1a54d8e805ed4959f.mockapi.io/contacts',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify(newContact),
      }
    );

    if (!response.ok) {
      // Якщо статус відповіді не "ok", викинути помилку
      throw new Error('Failed to post new contact');
    }

    const contact = await response.json();
    return contact;
  } catch (error) {
    // Обробка помилки
    return error;
  }
};

export const getContactsAPI = async () => {
  return fetch('https://65a431c1a54d8e805ed4959f.mockapi.io/contacts', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then(contacts => {
      return contacts;
    })
    .catch(error => {
      return error;
    });
};

export const deleteContact = async id => {
  try {
    const response = await fetch(
      `https://65a431c1a54d8e805ed4959f.mockapi.io/contacts/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) {
      // Якщо статус відповіді не "ok", викинути помилку
      throw new Error('Failed to delete contact');
    }

    const deletedContact = await response.json();
    return deletedContact;
  } catch (error) {
    // Обробка помилки
    return error;
  }
};
// export const deleteContact = id => {
//   fetch(`https://65a431c1a54d8e805ed4959f.mockapi.io/contacts/${id}`, {
//     method: 'DELETE',
//   })
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//       // handle error
//     })
//     .then(contact => {
//       return contact;
//     })
//     .catch(error => {
//       return error;
//     });
// };
