function dogYears(planet,age){
    const sec = 31557600 
    if (planet == "earth"){
        let dogAge = age/sec;
        dogAge.toFixed(2)
        return dogAge
    }else if (planet=="mercury"){
        let dogAge = (age*0.2408467*7)/sec;
        dogAge.toFixed(2)
        return dogAge
    }else if (planet=="venus"){
         let dogAge = (age*0.61519726*7)/sec;
         dogAge.toFixed(2)
         return dogAge
    }else if (planet=="mars"){
        let dogAge = (age*1.8808158*7)/sec;
        dogAge.toFixed(2);
        return dogAge
    }else if (planet=="jupiter"){
        let dogAge= (age*11.862615*7)/sec;
        dogAge.toFixed(2);
        return dogAge
    }else if (planet=="saturn"){
        let dogAge = (age*29.447498*7)/sec;
        dogAge.toFixed(2);
        return dogAge
    }else if (planet=="uranus"){
        let dogAge = (age*84.016846*7)/sec;
        dogAge.toFixed(2);
        return dogAge
    }else if (planet=="neptune"){
        let dogAge= (age*164.79132*7)/sec;
        dogAge.toFixed(2);
        return dogAge
    }
}