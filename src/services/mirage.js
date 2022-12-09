import {createServer} from 'miragejs';
const createMockServer = () => {
  window.server = createServer({
    routes() {
      this.post('http://localhost:8084/api/v1/login', () => {
        return {
          loginData: {
            loggedInTimeStamp: new Date().toLocaleString(),
            email: 'Maheshbhusanoor@gmail.com',
            telephone: '0585470209',
            firstName: 'Mahesh',
            lastName: 'Bhusanoor',
            dateOfBirth: '01/06/1991',
            gender: 'Male',
          },
        };
      });
    },
  });
};
export default createMockServer;
