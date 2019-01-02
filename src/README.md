Practice
Challenges are optional exercises that you should only attempt if you have completed the practice exercises, and fully understand the concepts used in them.

Challenge: Use Rest Operator
This will allow you to pass as many arguments to your component-building functions as you want without the need to define each one in the argument list.

const h1 = (...props) => {
    return `<h1 class="${props[0]}">${props[1]}</h1>`
}
Change your functions to use the rest operator.

Challenge: Generic HTML Function
Look at the three functions you created to build an h1, a section, and an aside. Notice that each one follows the same pattern of applying the style argument, and the content argument in the same locations.

const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
}

const section = (...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
}
Can you think of a way to make a more generic function that not only takes the style and content as arguments, but also the element type?

const h1 = element("h1", "Generic Component Maker", "xx-large orange")