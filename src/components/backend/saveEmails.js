export async function saveEmailAddress(emailAddress) {
  const data = JSON.stringify({
    id: emailAddress, 
    email: emailAddress,
  });

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data,
  }

  try {
    const res = await fetch('https://9yzau83wvg.execute-api.us-east-2.amazonaws.com/items', options);

    console.log(res);
    return true;
  } catch(err) {
    console.log(err);
    return false;
  }

}