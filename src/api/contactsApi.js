// import axios from 'axios';

// const URL = 'https://65a431c1a54d8e805ed4959f.mockapi.io';

// export const getContactsAPI = async () => {
//   const respons = await axios.get(
//     `https://65a431c1a54d8e805ed4959f.mockapi.io/contacts`
//   );
//   const data = respons.data;
//   return data;
// };

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
    .then(tasks => {
      return tasks;
    })
    .catch(error => {
      return error;
    });
};

export const postNewContact = newContact => {
  fetch('https://65a431c1a54d8e805ed4959f.mockapi.io/contacts', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // Send your data in the request body as JSON
    body: JSON.stringify(newContact),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then(task => {
      return task;
    })
    .catch(error => {
      return error;
    });
};

export const deleteContact = id => {
  fetch(`https://65a431c1a54d8e805ed4959f.mockapi.io/contacts/${id}`, {
    method: 'DELETE',
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then(task => {
      return task;
    })
    .catch(error => {
      return error;
    });
};
