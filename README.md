# graphql-server

## GraphQL - API query languague

* Exec `npm install` and `npm start`
* Open browser on <http://localhost:3000/graphql>

* queries
```graphql
query videosQuery{
	videos {
		pageInfo{
			startCursor,
			endCursor
		},
		edges{
			node{
				id,
				title,
				duration
			}
		},
		totalCount
	},
	filter: videos(first: 2){
		edges{
			node{
				title
			}
		}
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
mutation AddVideoQuery($input: AddVideoInput!){
	createVideo(input: $input){
		video{
			title,
			duration
		}
	}
}

query AllVideosQuery{
	videos{
		edges{
			node{
				title
			}
		}
	}
}

# Query Variables

{
	"input": {
		"title": "Video Title",
		"duration": 190,
		"released": true,
		"clientMutationId": "abcd"
	}
}
```
