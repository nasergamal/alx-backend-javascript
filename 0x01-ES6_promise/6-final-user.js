import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const result = [];
      for (const i of results) {
        if (i.status === 'rejected') {
          result.push({ status: i.status, value: i.reason.message });
        } else {
          result.push({ status: i.status, value: i.value });
        }
      }
      return result;
    });
}
