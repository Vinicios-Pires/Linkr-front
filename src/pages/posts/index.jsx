import Container from "../../components/container";
import Header from "../../components/header";
import { StyledLink,Typography,Post } from "./style";


export default function Posts(){
  const posts = [
    {
      "description":"Programe em React. Gostoso demais",
      "url":"https://www.freecodecamp.org/news/java-sort-array-how-to-reverse-an-array-in-ascending-or-descending-order-with-arrays-sort-2/" ,
      "title":"How to Reverse an Array in Ascending or Descending Order with Arrays.sort()",
      "image":"https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/andre-taissin-hOwcob_3dpc-unsplash.jpg",
      "username":"HideThePainHarold",
      "pictureUrl":"https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141224310?dimensions=1000x1000"
    },

    {
      "description":"Programe em React. Gostoso demais",
      "url":"https://www.freecodecamp.org/news/java-sort-array-how-to-reverse-an-array-in-ascending-or-descending-order-with-arrays-sort-2/" ,
      "title":"How to Reverse an Array in Ascending or Descending Order with Arrays.sort()",
      "image":"https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/andre-taissin-hOwcob_3dpc-unsplash.jpg",
      "username":"HideThePainHarold",
      "pictureUrl":"https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141224310?dimensions=1000x1000" 
    },

    {"description":"Programe em React. Gostoso demais",
    "url":"https://www.freecodecamp.org/news/java-sort-array-how-to-reverse-an-array-in-ascending-or-descending-order-with-arrays-sort-2/" ,
    "title":"How to Reverse an Array in Ascending or Descending Order with Arrays.sort()",
    "image":"https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/andre-taissin-hOwcob_3dpc-unsplash.jpg",
    "username":"HideThePainHarold",
    "pictureUrl":"https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141224310?dimensions=1000x1000"
      
    },

    {
      "description":"Programe em React. Gostoso demais",
      "url":"https://www.freecodecamp.org/news/java-sort-array-how-to-reverse-an-array-in-ascending-or-descending-order-with-arrays-sort-2/" ,
      "title":"How to Reverse an Array in Ascending or Descending Order with Arrays.sort()",
      "image":"https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/andre-taissin-hOwcob_3dpc-unsplash.jpg",
      "username":"HideThePainHarold",
      "pictureUrl":"https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141224310?dimensions=1000x1000"
    }
  ]

  const RenderingPosts = ()=>{
    return posts.map((post) => {
      return (
        <Container>
          <Post>
            <Typography>
            {post.description}
            </Typography>
            <StyledLink href={post.url} target="_blank" rel="noreferrer noopener">Teste </StyledLink>
          </Post>
        </Container>
       
       
    )

    }
    )
  }

  return (
    <Header>
      <RenderingPosts/>
    </Header>
  )

}


