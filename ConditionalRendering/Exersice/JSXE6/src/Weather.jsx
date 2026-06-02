const Weather = ({temp}) => {

    if(temp<15) {
        return <h3>It's COLD outside!</h3>
    }
    else if(temp >=15 && temp <=30) {
        return <h3>The weather is GOOD outside!</h3>
    }
    else if(temp>30){
        return <h3>It's Hot outside!</h3>
    }


}

export default Weather