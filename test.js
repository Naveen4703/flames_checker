let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("PUT", "https://api.jsonbin.io/v3/b/6240585fa703bb6749354565", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2b$10$EN96h1h9armvk7e9COx.meVay2eqs.lBKe97pTLJoUhiRg0wdq4ze");
req.send('{"sample": "Hello World"}');