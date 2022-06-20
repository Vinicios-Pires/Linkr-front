import { useState } from "react";


export default function Timeline() {
    const status = {
      loading: "Loading",
      emptArray: "There are no posts yet",
      errorRequest: "An error occured while trying to fetch the posts, please refresh the page"
    };
    const [posts, setPosts] = useState(status.loading);
}