const megfordit = () => {
        const inputSzoveg = document.getElementById("szovegInput").value;
  
        const megforditottSzoveg = inputSzoveg.split("").reverse().join("");
  
        document.getElementById("eredmeny").textContent = megforditottSzoveg;
    }