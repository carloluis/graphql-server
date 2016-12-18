# graphql-server

## GraphQL - API query languague

* Exec `npm install` and `npm start`
* Open browser on <http://localhost:3000/graphql>

* query
```graphql
query videosQuery{
	videos {
		id,
		title,
		duration,
		watched
	}
}

query videoQuery{
	video (id: "a") {
		id,
		title
	}
}

query NodeInterface{
	node(id: "VmlkZW86YQ=="){
		... on Video{
			title,
			duration
		}
	}
}
```

* mutation
```graphql
mutation M{
	createVideo(video:{
		title:"create an input object type", 
		duration: 149, 
		released: true
	}) {
		id,
		title
	}
}
```
