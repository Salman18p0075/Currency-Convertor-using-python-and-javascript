document.addEventListener('DOMContentLoaded',()=>{

    document.querySelector("#form").onsubmit = ()=>{
        const request = new XMLHttpRequest();
        const currency = document.querySelector("#currency").value;
        request.open('POST','/convert');

        request.onload = () => {
            const data = JSON.parse(request.responseText);
            if (data.success){
                const contents = `1 USD IS EQUAL TO ${data.rate} ${currency}`
                document.querySelector('#result').innerHTML=contents;
            }
            else{
                document.querySelector('#result').innerHTML="there is error";
            }
            }
        
      const data = new FormData();
      data.append('currency',currency);

      request.send(data);
      return false;

    };

});