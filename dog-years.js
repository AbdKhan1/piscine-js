function dogYears(planet,age){
    const sec = 31557600 
    if (planet == "earth"){
        return age; 
    }else if (planet=="mercury"){
        return (age*0.2408467)/sec;
    }else if (planet=="venus"){
        return (age*0.61519726)/sec;
    }else if (planet=="mars"){
        return (age*1.8808158)/sec;
    }else if (planet=="jupiter"){
        return (age*11.862615)/sec;
    }else if (planet=="saturn"){
        return (age*29.447498)/sec;
    }else if (planet=="uranus"){
        return (age*84.016846)/sec;
    }else if (planet=="neptune"){
        return (age*164.79132)/sec;
    }
}