function displayNumber(number)
{
    if (number < 10)
    {
        return("00" + number);
    }
    if (number > 9 && number < 100)
    {
        return("0" + number);
    }
    return (number);
}

export default displayNumber;