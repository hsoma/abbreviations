export default (state = [], payload) => {
    console.log('reducer', payload, state);
    switch (payload.type) {
        case 'selectedItem':
            var a;
            payload.items.forEach(function (item) {
                if(item.id == parseInt(payload.id)){
                    a = item;
                }
            });
            console.log('select', a)
            return a;
        default:
            return state;
    }
}