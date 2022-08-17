function searchthemovie()
{
        event.preventDefault();
        var movie=document.querySelector("#moviesearch").value;
        var url="http://www.omdbapi.com/?apikey=cd2f6af1&t="+movie;


        
         const response=fetch(url);
           response.then(response1=>response1.json())
           .then((res)=>{
                   document.querySelector("#conatiner1").innerHTML="";
                   var box=document.createElement("div");
                   var image=document.createElement("img");
                   image.src=res.Poster;
                   if(res.Poster==undefined)
                   {
                    var image1=document.createElement("img");
                    image1.src=" https://i.makeagif.com/media/11-04-2015/mfnzwt.gif";
                    document.querySelector("#conatiner1").append(image1);
                    throw new Error();
                  }
                   var title=document.createElement("p");
                   title.innerText="Title:"+res.Title;
                   var released=document.createElement("p");
                   released.innerText="Release Date:"+res.Released;
                   var rating=document.createElement("p");
                   rating.innerText="IMDB Rating:"+res.imdbRating;
                   if(res.imdbRating>8.5)
                   {
                       var tag=document.createElement("button");
                       tag.innerText="Recommonded";
                       tag.setAttribute("id","tag");
                       //image.append(tag);
                       box.append(image,tag,title,released,rating);
                       document.querySelector("#conatiner1").append(box);
                   }else
                   {
                    box.append(image,title,released,rating);
                    document.querySelector("#conatiner1").append(box);
                   }
                  
                })
        
    } 

    