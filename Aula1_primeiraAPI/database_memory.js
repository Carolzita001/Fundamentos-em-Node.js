import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map() // map = parecido com um objeto

    list(search){
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        })
        .filter(video => {
            if(search){
                return video.title.includes(search)
            }

            return true
        })
    }

    create(video) {
        const videoId = randomUUID()// gera um id aleatório

        this.#videos.set(videoId, video) // o 'set' é um metodo dentro do 'map' que adciona uma info dentro do map
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id){
        this.#videos.delete(id)
    }
}