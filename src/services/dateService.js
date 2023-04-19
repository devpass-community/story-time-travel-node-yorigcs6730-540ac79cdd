const getCurrentDate = () => {
    const day = new Date().getDay().toString().padStart(2, '0')
    const month = new Date().getMonth().toString().padStart(2, '0')
    const year = new Date().getFullYear()
    return `${day}/${month}/${year}`
};

module.exports = {
    getCurrentDate
}