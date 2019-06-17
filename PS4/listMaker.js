const listMaker = days => {
    const convertUtoD = unixDate => {
        return  {   'day':String(unixDate.getDate()).padStart(2, '0'),
                    'month':String((unixDate.getMonth() + 1)).padStart(2, '0'),
                    'year':String(unixDate.getFullYear())
                }
    };

    //const convertUtoD = unixDate => String(unixDate.getFullYear()) + '-' + String((unixDate.getMonth() + 1)).padStart(2, '0') + '-' + String(unixDate.getDate()).padStart(2, '0')

    const daysStr = [];
    let theDay = new Date();
    console.log(theDay);

    while (days > -2) {
        daysStr.push(convertUtoD(theDay));
        theDay.setDate(.getDate() -1);
        --days;
    }

    return daysStr;
};

module.exports = listMaker;
