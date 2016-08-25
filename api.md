Person API
==========

Simple CRUD api for a Person resource

Creating a person
-----------------

```shell
POST /api/people
```

### Request Body
* `name` - name of the person
```json
{  

   "name": "Alan"
   
}
```

### Response
+ 200 OK
```json
{

   "message": "person created"

}
```


Retrieve all people
------------------

```shell
GET api/people
```
### Response
A JSON array of person objects

+ 200 OK
```json
[
 {
   "_id": "57bf349f5a820c617f000001",
   "name": "andy",
   "__v": 0
 },
 {
   "_id": "57bf34a25a820c617f000002",
   "name": "steve",
   "__v": 0
 },
 {
   "_id": "57bf3ec77f0db5e106000001",
   "name": "june",
   "__v": 0
 }
]
```
