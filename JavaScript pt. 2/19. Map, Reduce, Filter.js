const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415 , CEO: 'Satya Nadella', foundedOn: 1975 },
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

// Acrescentar 10% ao valor de mercado / Filtrar fundadas antes de 2000 / Somar o valor de mercado dessas empresas

const newCompanies = companies.map(company => {
    const newList = {
        name: company.name,
        marketValue: company.marketValue * 0.1 + company.marketValue,
        CEO: company.CEO,
        foundedOn: company.foundedOn
    }
    return newList
})

console.log(newCompanies)

const newCompanies2 = newCompanies.filter( found =>{
    return found.foundedOn < 2000
})

console.log(newCompanies2)

const newCompanies3 = newCompanies2.reduce((acc , current) =>{
    return acc + current.marketValue
},0)

console.log(newCompanies3)

// Forma mais curta de resolver:

const add10Percent = company => {
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
}

const OldCompanies = company => company.foundedOn < 2000

const AllMarketValue = (acc, company) => acc + company.marketValue

const bestCompanies = companies.map(add10Percent).filter(OldCompanies).reduce(AllMarketValue,0)

console.log(bestCompanies)