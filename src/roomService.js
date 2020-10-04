import axios from 'axios'

const url = '/api/rooms'

class roomService{
    static getRooms(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url)
                const data = res.data
                resolve(
                    data.map(room => ({
                        ...room,
                        dateCreated : new Date(room.dateCreated)
                    }))
                ),
                console.log("Done")
            }catch(err){
                reject(err)
            }
        })
    }
}

export default roomService