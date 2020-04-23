import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';


export class MyFavNews extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            articles : []
        }
    }
    loadArticle(articleID){
    fetch("https://community-hacker-news-v1.p.rapidapi.com/item/" + articleID+ ".json?print=pretty", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
		"x-rapidapi-key": "pOKUOxI3ExmshPcZFodnG3oD7SPjp1rBKl5jsnjQKv5my0vwDb"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data); 
    
    this.setState((prevState, props) => ({
        articles : [...prevState.articles, data]
    }))
})
.catch(err => {
	console.log(err);
});
    }

    loadNews(){
    fetch("https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
		"x-rapidapi-key": "pOKUOxI3ExmshPcZFodnG3oD7SPjp1rBKl5jsnjQKv5my0vwDb"
	}
})
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    for (let index = 0; index < 10; index++) {
        this.loadArticle(data[index])
        debugger;
    }
})
.catch(err => {
	console.log(err);
});  


    }
    componentDidMount(){
        this.loadNews();
    }

    render(){
        return(
            <div>
                <ul class="list-group">
                    {this.state.articles.map(article =>{
                        return(<li class="list-group-item">   <a href='{article.url}'>{article.title}</a></li>)
                    })}
                </ul>
            </div>  
        )
    }
}