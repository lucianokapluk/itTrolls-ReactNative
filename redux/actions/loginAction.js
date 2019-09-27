export const logearse = data => dispatch => {
  fetch('http://172.26.122.1:3010/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => {
      return error;
    })
    .then(datas => {
      return dispatch({
        type: 'LOGEARSE',
        payload: datas,
      });
    });
};
