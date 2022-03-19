import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import HomePage from "@/views/HomePage"
import AddPerson from "@/views/AddPerson"
import newBookMark from "@/views/newBookMark"
const routes = [{
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "AddPerson",
        path: "/AddPerson",
        component: AddPerson
    },
    {
        name: "newBookMark",
        path: "/new",
        component: newBookMark
    },
]

const route = createRouter({
    routes,
    history: createWebHashHistory()
})
export default route