function concatAuthors(authors) {
    if(!Array.isArray(authors)) {
        return authors
    }

    switch(authors.length) {
    case 0:
        throw new TypeError("Author list must not be empty")
    case 1:
        return authors[0]
    case 2:
        return `${authors[0]} and ${authors[1]}`
    default:
        return `${authors[0]}, ${authors[1]} and others`
    }
}

export function hasAttribution(authors) {
    return authors?.length ? true : null
}

export default function getAttribution(authors) {
    return `By ${concatAuthors(authors)}`
}
