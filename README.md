# graphql-server

## GraphQL - API query languague

* Exec `npm install` and `npm start`
* Open browser on <http://localhost:3000/graphql>

* query
```graphql
query myQuery{
	videos {
		id,
		title,
		duration,
		watched
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