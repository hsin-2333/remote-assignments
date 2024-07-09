// Assignment 2: HTML DOM and AJAX
// Complete the functions below to make an AJAX call to a URL by Fetch API, and show the response data in the page. You may render UI with any style.

function ajax(url) {
  // your code here
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}



function render(data) {
  // your code here
    console.log(data);
    const products = document.createElement("section");
    
    // products.textContent = `NAME=${data[0].name}`;
    products.textContent = `NAME=${JSON.stringify(data)}`;
    document.body.appendChild(products);
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});

// ajax(url);
