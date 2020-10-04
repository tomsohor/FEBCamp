import axios from 'axios'

const url = '/api/apartments/'

class roomService{
    static getApartments(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url)
                const data = res.data
                resolve(
                    data.map(apartment => ({
                        ...apartment,
                        dateCreated : new Date(apartment.dateCreated)
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