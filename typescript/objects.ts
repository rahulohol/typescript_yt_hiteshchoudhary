// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)  //wrong but no error, its odd behavior of ts


// function returns object  
function createCourse1():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}


type User = {
    name: string;
    email: string;
    isActive: boolean
}


function createUser1(user: User): User{
    return {name: "", email: "", isActive: true}
}

createUser1({name: "", email: "", isActive: true})


type User1 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User1 = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false   
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "h@gmail.com"
// myUser._id = "asa"


