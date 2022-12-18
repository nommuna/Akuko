import { Router } from "itty-router"
import Posts from "./handlers/posts"

// import Posts from "./handlers/posts";
// import Post from "./handlers/post";

const router = Router()
router.get!("/api/posts", Posts)
// router.get("/api/posts/:id", Post)
router.get!("*", () => new Response("Not found", { status: 404 }))

export const handleRequest = (request: any) => router.handle(request)