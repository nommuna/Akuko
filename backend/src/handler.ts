import { Router } from "itty-router"
import Posts from "./handlers/posts"

const router = Router()

router.get!('/', (request, env, context) => {
    // now have access to the env (where CF bindings like durables, KV, etc now are)'
    return new Response('Hello World', {status: 200})
})

router.get!("*", () => new Response("Not found", { status: 404 }))

export default {
    fetch: router.handle
}