interface NavigationItem 
{
    title: string
    icon: string
    path: string

}

export const landingNavigation:NavigationItem[]  = [
    {
        title: "General",
        icon: "",
        path: "1",

    },
    {
        title: "Billing",
        icon: "",
        path: "2",
    },
    {
        title: "Invoices",
        icon: "",
        path: "3",
    }
]

interface Fruits 
{
    cal: number
    name: string
    id: string
    retail: Array<Company>

}

interface Company
{
    address: addresses
    nameCom: string
}

interface addresses
{
    postalCode: string
    city: string
    address1: string
    address2: string
}
const Fruits = [   
{
    name: "Apple",
    cal: "",
    id: "",
    retail:[
        {
            address:
            {
                postalCode: "123",
                city:"234",
                address1: "1233:",
                address2: "1234",
            },
            nameCom:"abc",
        },
        {
            address:"234",
            nameCom:"def",
        },
        ]

},{
    name: "Banana",
    cal: "",
    id: "",
    retail:["XYZ Company","ABC Company"]

}, {
    name: "Kiwi",
    cal: "",
    id: "",
    retail:["ALong Company","ANC Company"]

}, {
    name: "Pineapple",
    cal: "",
    id: "",
    retail:["XYZ Company","ANC Company"]

}, {
    name: "Watermelon",
    cal: "",
    id: "",
    retail:["XYZ Company","ANC Company"]

}]
