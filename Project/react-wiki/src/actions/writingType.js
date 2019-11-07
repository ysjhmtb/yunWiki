export const write = () => {
    console.log('write action calling');
    return { type: 'WRITE', }
}
// export const write = () => { console.log('write action calling') return {type: 'WRITE'} }

// export const update = (obj) => ({
//     type: 'UPDATE',
//     obj
// })

export const update = (obj) => {
    console.log('update action calling');
    console.log(obj);
    return {
        type: 'UPDATE',
        obj
    }
}