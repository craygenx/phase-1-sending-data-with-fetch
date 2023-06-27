// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    })
    .then(res => res.json())
    .then(data => {
        const p = document.createElement('p');
        p.textContent = data.id;
        document.body.appendChild(p)
    })
    .catch((error)=>{
        const p = document.createElement('p');
        p.textContent = `Unauthorized Access`;
        document.body.appendChild(p)
    });
}

