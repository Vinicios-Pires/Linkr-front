import Container from "../../components/container";
import Header from "../../components/header";
import Post from "./Posts";
import { Posts } from "./style";



export default function Posts(){
     return (
        <Header>
          <Container>
            <Posts>
            <>
            {posts.map((post, index) => {
            const { id, message, image, likes, username, postData } = post;
            return (
              <Post
                id={id}
                key={index}
                index={index}
                message={message}
                image={image}
                likes={likes}
                username={username}
                postData={postData}
             
              /> 
              );
            })}
            </>
            )  
            </Posts>
          </Container>
        </Header>
       
       
    )

  }


  