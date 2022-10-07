

// ** Returns short month of passed date
export const buildMonthlySeries = function (bookingsData) {
    const obj = {
        data: []
    }
    console.log(bookingsData)
    for (let i = 0; i < bookingsData.length; i++) {
        obj.data.push({
            name: bookingsData[i].year,
            data: bookingsData[i].total
        })    
    }
    console.log(obj.data)
    return obj.data
}
