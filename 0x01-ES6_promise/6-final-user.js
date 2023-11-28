import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const result = [];
      for (const i of results) {
        const dict = { status: i.status };
        if (i.status === 'rejected') {
          dict.value = i.reason.message;
        } else {
          dict.value = i.value;
          result.push(dict);
        }
      }
      return result;
    });
}
