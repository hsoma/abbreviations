export default (state = [], payload) => {
    console.log('reducer', payload, state);
    switch (payload.type) {
        case 'get':
            return payload.items;
        case 'search':
            console.log("search redu", payload.key, state)
            var matches = payload.items.filter(v => v.pt.toLowerCase().includes(payload.key))
            console.log("matches", matches);
            return matches;
        default:
            return state;
    }
}