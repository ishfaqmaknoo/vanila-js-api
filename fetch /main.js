document.getElementById('getCustomer').addEventListener('click', loadCustomer);

function loadCustomer(){
  console.log('added')

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200){

      const customer = JSON.parse(this.responseText);
      
      const output = `
        <ul>
          <li>User ID: ${customer.id}</li>
          <li>User Name: ${customer.name}</li>
          <li>User Company: ${customer.company}</li>
          <li>User Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML= output;
    }
  }

  xhr.send();
}


//load customers
document.getElementById('getCustomers').addEventListener('click', loadCustomers);

function loadCustomers(){
  console.log('goood')

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
          <ul>
            <li>User Id: ${customer.id}</li>
            <li>User Name: ${customer.name}</li>
            <li>User Company: ${customer.company}</li>
            <li>User Phone: ${customer.phone}</li>
          </ul>
        `;
      });
      document.getElementById('customers').innerHTML = output;

    }
  }

  xhr.send();
}