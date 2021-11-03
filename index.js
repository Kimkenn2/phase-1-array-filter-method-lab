const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    return array.filter(function(el) {
        return el.toLowerCase() == string.toLowerCase()
    })
}

function fuzzyMatch(array, string){
    return array.filter(function(el) {
        return el.startsWith(string)
    })
}

function matchName(array, string) {
    return array.filter(function(el) {
        return el.name == string
    })
}